import Fuse from "fuse.js";
import staticPages from "../data/searchIndexPages.json";
import staticDepartments from "../data/searchIndexDepartments.json";
import staticProgrammes from "../data/searchIndexProgrammes.json";

/**
 * Text normalizer:
 * Converts text to lowercase, removes punctuation/dots/special chars,
 * and collapses multiple whitespace characters.
 */
export const normalizeText = (text) => {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .replace(/[.\-_,()&/’'"`]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

export const normalizeTokens = (text) => {
  const norm = normalizeText(text);
  if (!norm) return "";
  return norm.replace(/\s+/g, "");
};

/**
 * Transforms an index item into a Fuse-searchable structure with pre-normalized keys.
 */
const prepareSearchItem = (item) => {
  const normTitle = normalizeText(item.title || "");
  const titleTokens = normalizeTokens(item.title || "");
  
  const rawTags = Array.isArray(item.tags)
    ? item.tags
    : typeof item.tags === "string"
    ? item.tags.split(",").map((t) => t.trim())
    : [];

  const normTags = rawTags.map((t) => normalizeText(t)).filter(Boolean);
  const tagsTokens = rawTags.map((t) => normalizeTokens(t)).filter(Boolean);
  const normDesc = normalizeText(item.description || "");

  // Determine user-friendly category
  let category = "Pages";
  const type = item.type || "Page";
  if (type === "Department") category = "Departments";
  else if (type === "Programme" || type === "Program") category = "Programmes";
  else if (type === "Faculty") category = "Faculty";
  else if (type === "News" || type === "Event" || type === "Announcement") category = "News & Events";
  else if (type === "External") category = "Quick Links";

  return {
    id: item.id || `item-${Math.random().toString(36).substring(2, 9)}`,
    title: item.title,
    type,
    category,
    section: item.section || null,
    path: item.path || null,
    url: item.url || null,
    scrollTo: item.scrollTo || null,
    description: item.description || "",
    tags: rawTags,
    // Searchable normalized fields
    normTitle,
    titleTokens,
    normTags,
    tagsTokens,
    normDesc,
  };
};

class SearchIndexEngine {
  constructor() {
    this.masterList = [];
    this.fuse = null;
    this.isInitialized = false;
    this.initStaticData();
  }

  initStaticData() {
    const pages = (staticPages?.items || []).map(prepareSearchItem);
    const depts = (staticDepartments?.items || []).map(prepareSearchItem);
    const progs = (staticProgrammes?.items || []).map(prepareSearchItem);

    this.masterList = [...pages, ...depts, ...progs];
    this.rebuildFuse();
    this.isInitialized = true;
  }

  rebuildFuse() {
    const options = {
      includeScore: true,
      shouldSort: true,
      ignoreLocation: true,
      threshold: 0.35,
      minMatchCharLength: 2,
      keys: [
        { name: "title", weight: 0.5 },
        { name: "normTitle", weight: 0.5 },
        { name: "titleTokens", weight: 0.5 },
        { name: "normTags", weight: 0.4 },
        { name: "tagsTokens", weight: 0.4 },
        { name: "tags", weight: 0.35 },
        { name: "normDesc", weight: 0.15 },
        { name: "description", weight: 0.1 },
      ],
    };

    this.fuse = new Fuse(this.masterList, options);
  }

  /**
   * Ingest dynamic content from APIs into the search index.
   * Runs seamlessly when Redux stores receive data.
   */
  ingestDynamicData({ academicsData, facultyData, newsData, meritData, iqacData }) {
    let hasNew = false;
    const existingIds = new Set(this.masterList.map((item) => item.id));

    // 1. Ingest Academics with Departments & Programs
    if (Array.isArray(academicsData) && academicsData.length > 0) {
      academicsData.forEach((academic) => {
        const divisionName = academic.academic_name || "";
        (academic.departments || []).forEach((dept) => {
          const deptId = dept.department_id;
          const deptName = dept.department_name;
          const deptSlug = (deptName || "").toLowerCase().replace(/\s+/g, "");

          // Normal vs Foundation path
          const isFoundation = divisionName === "Foundation Courses" || (divisionName === "Arts & Humanities" && deptName === "Geography");
          const deptPath = isFoundation
            ? `/academic/${isFoundation ? "foundationcourses" : "arts&humanities"}/${deptSlug}/${deptId}`
            : `/academics/${deptSlug}/${deptId}`;

          const deptItemId = `dept-${deptId}`;
          if (!existingIds.has(deptItemId)) {
            const newItem = prepareSearchItem({
              id: deptItemId,
              title: deptName,
              type: "Department",
              section: divisionName,
              path: deptPath,
              description: `Department of ${deptName} (${divisionName})`,
              tags: [deptName, divisionName, "department", "academics"],
            });
            this.masterList.push(newItem);
            existingIds.add(deptItemId);
            hasNew = true;
          }

          // Programs
          (dept.programs || []).forEach((prog) => {
            const progId = prog.program_id;
            const progName = prog.program_name;
            const level = prog.programme_level?.level_name || "Degree";
            const stream = prog.funding_type?.type_name || "";
            const progSlug = (progName || "").toLowerCase().replace(/[.\s]+/g, "");

            const isPhd = level === "PhD" || level === "Ph.D" || (progName || "").toLowerCase().includes("ph.d");
            const progPath = isPhd
              ? `/phdprograms/${progId}`
              : `/academics/${deptSlug}/${progSlug}/${progId}`;

            const progItemId = `prog-${progId}`;
            if (!existingIds.has(progItemId)) {
              const displayTitle = stream ? `${progName} (${stream})` : progName;
              const newItem = prepareSearchItem({
                id: progItemId,
                title: displayTitle,
                type: "Programme",
                section: deptName,
                path: progPath,
                description: `${level} programme in ${deptName} (${stream})`,
                tags: [
                  progName,
                  deptName,
                  level,
                  stream,
                  divisionName,
                  "programme",
                  "course",
                ],
              });
              this.masterList.push(newItem);
              existingIds.add(progItemId);
              hasNew = true;
            }
          });
        });
      });
    }

    // 2. Ingest Faculty Members
    if (Array.isArray(facultyData) && facultyData.length > 0) {
      facultyData.forEach((fac, idx) => {
        const facId = fac.id ? `faculty-${fac.id}` : `faculty-${fac.name}-${idx}`;
        if (!existingIds.has(facId) && fac.name) {
          const deptSlug = (fac.department || "").toLowerCase().replace(/\s+/g, "");
          const facPath = fac.departmentId
            ? `/academics/${deptSlug}/${fac.departmentId}`
            : `/academics`;

          const newItem = prepareSearchItem({
            id: facId,
            title: fac.name,
            type: "Faculty",
            section: fac.department || "Faculty",
            path: facPath,
            scrollTo: "faculty",
            description: `${fac.position || "Faculty Member"}, Department of ${fac.department || "Academics"}`,
            tags: [
              fac.name,
              fac.position,
              fac.specialization || fac.areaofspecilization,
              fac.department,
              "faculty",
              "professor",
              "teacher",
              "staff",
            ].filter(Boolean),
          });
          this.masterList.push(newItem);
          existingIds.add(facId);
          hasNew = true;
        }
      });
    }

    // 3. Ingest News & Events
    if (Array.isArray(newsData) && newsData.length > 0) {
      newsData.forEach((news, idx) => {
        const newsId = news.id ? `news-${news.id}` : `news-${idx}`;
        if (!existingIds.has(newsId) && news.title) {
          const newItem = prepareSearchItem({
            id: newsId,
            title: news.title,
            type: "News",
            section: "News & Events",
            path: "/allnewsevents",
            description: news.description || "Latest news and updates",
            tags: [news.title, "news", "event", "announcement", "updates"],
          });
          this.masterList.push(newItem);
          existingIds.add(newsId);
          hasNew = true;
        }
      });
    }

    // Rebuild index if new items were ingested
    if (hasNew) {
      this.rebuildFuse();
    }
  }

  /**
   * Search query execution:
   * Returns matching items grouped by category.
   */
  search(rawQuery, selectedCategory = "All") {
    if (!rawQuery || rawQuery.trim().length < 2) {
      return {
        query: rawQuery,
        totalCount: 0,
        results: [],
        grouped: {},
        categories: ["All"],
      };
    }

    const query = normalizeText(rawQuery);
    const searchResults = this.fuse.search(query);

    // Filter by category if specific category is selected
    const filteredResults = searchResults
      .map((res) => ({
        ...res.item,
        score: res.score,
      }))
      .filter((item) => {
        if (selectedCategory === "All") return true;
        return item.category === selectedCategory;
      });

    // Group items by category in preferred display order
    const categoryOrder = [
      "Pages",
      "Departments",
      "Programmes",
      "Faculty",
      "News & Events",
      "Quick Links",
    ];

    const grouped = {};
    const availableCategories = new Set(["All"]);

    filteredResults.forEach((item) => {
      const cat = item.category || "Pages";
      availableCategories.add(cat);
      if (!grouped[cat]) {
        grouped[cat] = [];
      }
      grouped[cat].push(item);
    });

    // Sort grouped keys according to preferred category order
    const sortedGrouped = {};
    categoryOrder.forEach((cat) => {
      if (grouped[cat] && grouped[cat].length > 0) {
        sortedGrouped[cat] = grouped[cat];
      }
    });

    // Any remaining categories not in categoryOrder
    Object.keys(grouped).forEach((cat) => {
      if (!sortedGrouped[cat]) {
        sortedGrouped[cat] = grouped[cat];
      }
    });

    return {
      query: rawQuery,
      totalCount: filteredResults.length,
      results: filteredResults,
      grouped: sortedGrouped,
      categories: Array.from(availableCategories),
    };
  }
}

// Singleton instance
const searchService = new SearchIndexEngine();
export default searchService;
