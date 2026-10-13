import React, { useMemo, useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  Pagination,
  PaginationItem,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useParams } from "react-router-dom";
import { adminUrl } from "../../../constants/url";

// Helper function to transform API response
const transformPublicationData = (item) => ({
  id:
    item.researchHighlights_id ||
    item.facultyPublications_id ||
    item.studentPublications_id,
  title: item.title || "",
  publisher: item.publisher || "",
  description: item.description || "",
  facultyName: item.faculty_name || item.author || "",
  studentName: item.student_name || item.author || item.faculty_name || "",
  academicDivision:
    item.academic?.academic_name || item.academic_name || item.academic || "",
  department:
    item.department?.department_name ||
    item.department_name ||
    item.department ||
    "",
  date: item.year || item.date || "",
  isbn: item.isbn || "",
  academic_id: item.academic?.academic_id || item.academic_id,
});

export default function ResearchPublications() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("newest-oldest");
  const [selectedAcademicDivision, setSelectedAcademicDivision] =
    useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [sortOpen, setSortOpen] = useState(false);
  const [academicDivisionOpen, setAcademicDivisionOpen] = useState(false);
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [researchData, setResearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [academicDivisionsList, setAcademicDivisionsList] = useState([]);
  const [departmentsList, setDepartmentsList] = useState([]);
  const [loadingDivisions, setLoadingDivisions] = useState(false);
  const [loadingDepartments, setLoadingDepartments] = useState(false);
  const [academicIdMap, setAcademicIdMap] = useState({});
  const itemsPerPage = 5;

  const { researchallhighlights } = useParams();

  // Fetch data based on publication type
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let endpoint = "";

        if (researchallhighlights === "researchallhighlights") {
          endpoint = `${adminUrl}getAllResearchHighlights`;
        } else if (researchallhighlights === "studentpublications") {
          endpoint = `${adminUrl}getAllStudentPublications`;
        } else if (researchallhighlights === "facultypublications") {
          endpoint = `${adminUrl}getAllFacultyPublications`;
        }

        if (endpoint) {
          const response = await fetch(endpoint);
          const result = await response.json();

          if (result.Success && result.data) {
            const transformedData = result.data.map(transformPublicationData);
            setResearchData(transformedData);
          } else {
            setResearchData([]);
          }
        }
      } catch (error) {
        console.error("Error fetching publication data:", error);
        setResearchData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [researchallhighlights]);

  // Fetch Academic Divisions based on publication type
  useEffect(() => {
    const fetchAcademicDivisions = async () => {
      setLoadingDivisions(true);
      try {
        let endpoint = "";

        if (researchallhighlights === "researchallhighlights") {
          endpoint = `${adminUrl}getAcademicsWithResearchHighlights`;
        } else if (researchallhighlights === "studentpublications") {
          endpoint = `${adminUrl}getAcademicsWithStudentPublications`;
        } else if (researchallhighlights === "facultypublications") {
          endpoint = `${adminUrl}getAcademicsWithFacultyPublications`;
        }

        if (endpoint) {
          const response = await fetch(endpoint);
          const result = await response.json();

          if (result.Success && result.data) {
            // Create a mapping of academic_name to academic_id and extract unique divisions
            const divisionMap = {};
            const uniqueDivisions = new Set();

            result.data.forEach((item) => {
              const academicName =
                item.academic?.academic_name || item.academic_name;
              const academicId = item.academic?.academic_id || item.academic_id;

              if (academicName && academicId) {
                divisionMap[academicName] = academicId;
                uniqueDivisions.add(academicName);
              }
            });

            setAcademicDivisionsList(Array.from(uniqueDivisions).sort());
            setAcademicIdMap(divisionMap);
          } else {
            setAcademicDivisionsList([]);
            setAcademicIdMap({});
          }
        }
      } catch (error) {
        console.error("Error fetching academic divisions:", error);
        setAcademicDivisionsList([]);
        setAcademicIdMap({});
      } finally {
        setLoadingDivisions(false);
      }
    };

    fetchAcademicDivisions();
  }, [researchallhighlights]);

  // Fetch Departments based on selected Academic Division
  useEffect(() => {
    if (selectedAcademicDivision === "all") {
      setDepartmentsList([]);
      return;
    }

    const fetchDepartments = async () => {
      setLoadingDepartments(true);
      try {
        let endpoint = "";

        // Get the academic ID from the map
        const academicId = academicIdMap[selectedAcademicDivision];

        if (!academicId) {
          setDepartmentsList([]);
          return;
        }

        if (researchallhighlights === "researchallhighlights") {
          endpoint = `${adminUrl}getDepartmentsByAcademicInResearchHighlights/${academicId}`;
        } else if (researchallhighlights === "studentpublications") {
          endpoint = `${adminUrl}getDepartmentsByAcademicInStudentPublications/${academicId}`;
        } else if (researchallhighlights === "facultypublications") {
          endpoint = `${adminUrl}getDepartmentsByAcademicInFacultyPublications/${academicId}`;
        }

        if (endpoint) {
          const response = await fetch(endpoint);
          const result = await response.json();

          if (result.Success && result.data) {
            // Extract department_name from nested department objects
            const departments = result.data
              .map(
                (item) =>
                  item.department?.department_name || item.department_name,
              )
              .filter(Boolean);

            setDepartmentsList(departments);
          } else {
            setDepartmentsList([]);
          }
        }
      } catch (error) {
        console.error("Error fetching departments:", error);
        setDepartmentsList([]);
      } finally {
        setLoadingDepartments(false);
      }
    };

    fetchDepartments();
  }, [selectedAcademicDivision, researchallhighlights, academicIdMap]);
  const dropdownMenuProps = {
    PaperProps: {
      sx: {
        mt: 1,
        p: "8px",
        borderRadius: "6px",
        backgroundColor: "rgba(107, 60, 88, 1)",
        boxShadow: "none",
        border: "none",
        color: "#8E97A8",
        "& .MuiMenuItem-root": {
          minHeight: "42px",
          borderRadius: "0",
          fontSize: "16px",
          fontWeight: 400,
          color: "#8E97A8",
          px: "14px",
        },
        "& .MuiMenuItem-root:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          color: "#FFFFFF",
        },
        "& .MuiMenuItem-root.Mui-selected": {
          backgroundColor: "transparent",
          color: "#FFFFFF",
        },
        "& .MuiMenuItem-root.Mui-selected:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.06)",
        },
      },
    },
  };

  const dropdownMenuPropsWhite = {
    PaperProps: {
      sx: {
        mt: 1,
        p: "8px",
        borderRadius: "6px",
        backgroundColor: "white",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        border: "none",
        color: "black",
        "& .MuiMenuItem-root": {
          minHeight: "42px",
          borderRadius: "0",
          fontSize: "16px",
          fontWeight: 400,
          color: "black",
          px: "14px",
        },
        "& .MuiMenuItem-root:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.06)",
          color: "black",
        },
        "& .MuiMenuItem-root.Mui-selected": {
          backgroundColor: "none",
          color: "black",
        },
        "& .MuiMenuItem-root.Mui-selected:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.06)",
        },
      },
    },
  };
  // Get unique academic divisions from data
  const academicDivisionOptions = useMemo(() => {
    return ["all", ...academicDivisionsList];
  }, [academicDivisionsList]);

  // Get departments filtered by selected academic division
  const departmentOptions = useMemo(() => {
    return ["all", ...departmentsList];
  }, [departmentsList]);

  // Get unique years
  const yearOptions = useMemo(() => {
    const uniqueYears = new Set(
      researchData.map((item) => item.date).filter(Boolean),
    );
    return [
      "all",
      ...Array.from(uniqueYears).sort((a, b) => Number(b) - Number(a)),
    ];
  }, [researchData]);

  // Handle academic division change - reset department to "all"
  const handleAcademicDivisionChange = (value) => {
    setSelectedAcademicDivision(value);
    setSelectedDepartment("all");
    setCurrentPage(1);
  };

  // Filter data based on all selected filters
  const filteredresearchData = useMemo(() => {
    const normalizedKeyword = searchKeyword.trim().toLowerCase();

    const filteredData = researchData.filter((item) => {
      const matchesSearch =
        !normalizedKeyword ||
        item.title?.toLowerCase().includes(normalizedKeyword) ||
        item.publisher?.toLowerCase().includes(normalizedKeyword) ||
        item.facultyName?.toLowerCase().includes(normalizedKeyword) ||
        item.department?.toLowerCase().includes(normalizedKeyword) ||
        String(item.date || "")
          .toLowerCase()
          .includes(normalizedKeyword);

      const matchesAcademicDivision =
        selectedAcademicDivision === "all" ||
        item.academicDivision === selectedAcademicDivision;

      const matchesDepartment =
        selectedDepartment === "all" || item.department === selectedDepartment;

      const matchesYear = selectedYear === "all" || item.date === selectedYear;

      return (
        matchesSearch &&
        matchesAcademicDivision &&
        matchesDepartment &&
        matchesYear
      );
    });

    // Sort based on sort order
    return [...filteredData].sort((a, b) => {
      if (sortOrder === "oldest-newest") {
        return Number(a.date) - Number(b.date);
      }
      return Number(b.date) - Number(a.date);
    });
  }, [
    searchKeyword,
    selectedAcademicDivision,
    selectedDepartment,
    selectedYear,
    sortOrder,
    researchData,
  ]);

  const totalPages = Math.ceil(filteredresearchData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredresearchData.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
    setCurrentPage(1);
  };

  // Handle sort order change
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    setCurrentPage(1);
  };

  // Handle year change
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setCurrentPage(1);
  };

  // Handle department change
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    setCurrentPage(1);
  };

  return (
    <Box
      className="researchPublicationsContainer"
      sx={{
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
        py: { xs: 6, md: 6 },
        "& ul, & li": {
          margin: 0,
          padding: 0,
        },
        "& ul": {
          listStyle: "none",
        },
      }}
    >
      <style>{`
        .researchPublicationsContainer ul,
        .researchPublicationsContainer li {
          margin: 0 !important;
          padding: 0 !important;
        }
        .researchPublicationsContainer ul {
          list-style: none !important;
        }
      `}</style>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {/* Header Section */}
        <Grid size={{ xs: 12 }}>
          <Typography
            variant="primaryHeadingText"
            sx={{
              color: "var(--heading-text-primary)",
            }}
          >
            {researchallhighlights === "researchallhighlights"
              ? "Research Highlights"
              : researchallhighlights === "studentpublications"
                ? "Student Publications"
                : "Faculty Publications"}
          </Typography>

          {/* Filters Row */}
          <Box
            sx={{
              mt: { xs: "20px", md: "24px" },
              mb: { xs: "8px", md: "14px" },
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              alignItems: "center",
            }}
          >
            {/* Search Field */}
            <TextField
              value={searchKeyword}
              onChange={handleSearchChange}
              placeholder="Search for a keyword"
              size="small"
              sx={{
                minWidth: { xs: "100%", md: "360px" },
                flex: { xs: "1 1 100%", md: "1 1 auto" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "24px",
                  backgroundColor: "#fff",
                  "& fieldset": {
                    borderColor: "#B8B8B8",
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Divider */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                width: "1px",
                height: "32px",
                backgroundColor: "#B8B8B8",
              }}
            />

            {/* Sort Dropdown */}
            <FormControl size="small" sx={{ minWidth: "170px" }}>
              <Select
                value={sortOrder}
                onChange={handleSortChange}
                open={sortOpen}
                onOpen={() => setSortOpen(true)}
                onClose={() => setSortOpen(false)}
                MenuProps={dropdownMenuProps}
                sx={{
                  borderRadius: "24px",
                  backgroundColor: sortOpen ? "white" : "white",
                  color: "rgba(107, 60, 88, 1)",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: sortOpen ? "1px solid black" : "1px solid #B8B8B8",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid black !important",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "rgba(107, 60, 88, 1)",
                  },
                }}
              >
                <MenuItem value="newest-oldest">Sort: Newest-Oldest</MenuItem>
                <MenuItem value="oldest-newest">Sort: Oldest-Newest</MenuItem>
              </Select>
            </FormControl>

            {/* Academic Division Dropdown */}
            <FormControl size="small" sx={{ minWidth: "180px" }}>
              <Select
                value={selectedAcademicDivision}
                onChange={(event) =>
                  handleAcademicDivisionChange(event.target.value)
                }
                open={academicDivisionOpen}
                onOpen={() => setAcademicDivisionOpen(true)}
                onClose={() => setAcademicDivisionOpen(false)}
                MenuProps={dropdownMenuPropsWhite}
                displayEmpty
                renderValue={(value) =>
                  value === "all" ? "Academic Division" : value
                }
                sx={{
                  borderRadius: "24px",
                  backgroundColor: "#fff",
                  color: "black",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: academicDivisionOpen
                      ? "1px solid black"
                      : "1px solid #B8B8B8",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid black !important",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "inherit",
                  },
                }}
              >
                <MenuItem value="all">All Academic Divisions</MenuItem>
                {academicDivisionOptions
                  .filter((option) => option !== "all")
                  .map((division) => (
                    <MenuItem key={division} value={division}>
                      {division}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            {/* Department Dropdown */}
            <FormControl size="small" sx={{ minWidth: "150px" }}>
              <Select
                value={selectedDepartment}
                onChange={handleDepartmentChange}
                open={departmentOpen}
                onOpen={() => setDepartmentOpen(true)}
                onClose={() => setDepartmentOpen(false)}
                MenuProps={dropdownMenuPropsWhite}
                displayEmpty
                renderValue={(value) =>
                  value === "all" ? "Departments" : value
                }
                sx={{
                  borderRadius: "24px",
                  backgroundColor: "#fff",
                  color: "black",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: departmentOpen
                      ? "1px solid black"
                      : "1px solid #B8B8B8",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid black !important",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "inherit",
                  },
                }}
              >
                <MenuItem value="all">All Departments</MenuItem>
                {departmentOptions
                  .filter((option) => option !== "all")
                  .map((department) => (
                    <MenuItem
                      key={department}
                      value={department}
                      sx={{ padding: "0" }}
                    >
                      {department}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            {/* Year Dropdown */}
            <FormControl size="small" sx={{ minWidth: "130px" }}>
              <Select
                value={selectedYear}
                onChange={handleYearChange}
                open={yearOpen}
                onOpen={() => setYearOpen(true)}
                onClose={() => setYearOpen(false)}
                MenuProps={dropdownMenuPropsWhite}
                displayEmpty
                renderValue={(value) => (value === "all" ? "Year" : value)}
                sx={{
                  borderRadius: "24px",
                  backgroundColor: "#fff",
                  color: "black",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: yearOpen ? "1px solid black" : "1px solid #B8B8B8",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid black !important",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "inherit",
                  },
                }}
              >
                <MenuItem value="all">All Years</MenuItem>
                {yearOptions
                  .filter((option) => option !== "all")
                  .map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>

        {/* Content Section */}
        <Grid size={{ xs: 12 }}>
          <Typography
            variant="typographyBodyInterNormal"
            sx={{
              mt: { xs: "20px", md: "20px" },
              fontWeight: "500 !important",
            }}
          >
            RESEARCH WORKS
          </Typography>

          <Divider sx={{ mb: "10px", borderColor: "gray" }} />

          {/* Loading State */}
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "300px",
              }}
            >
              <CircularProgress />
            </Box>
          ) : paginatedData?.length > 0 ? (
            <>
              {/* Publication Items */}
              {paginatedData.map((item, index) => (
                <Box
                  key={item.id || index}
                  sx={{
                    borderBottom: "1px solid gray",
                    py: { xs: "29px", md: "29px", lg: "29px" },
                  }}
                >
                  {/* Title */}
                  <Typography
                    variant="subHeadingTextInterMedium"
                    sx={{
                      maxWidth: { xs: "100%", md: "80%", lg: "80%" },
                      mb: { xs: "29px", md: "39px", lg: "49px" },
                    }}
                  >
                    {item?.title}
                  </Typography>

                  {/* Metadata Row */}
                  <Grid container spacing={4}>
                    {/* Publisher */}
                    <Grid
                      item
                      size={{ xs: 12, md: 5 }}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                      }}
                    >
                      <Typography
                        variant="typographyBodyInterNormal"
                        sx={{
                          fontWeight: "500 !important",
                        }}
                      >
                        PUBLISHER
                      </Typography>
                      <Box>
                        <Typography variant="typographyBodyInterNormal">
                          {item?.publisher}
                        </Typography>
                        {/* ISBN */}
                        {item?.isbn && (
                          <Grid
                            item
                            size={{ xs: 12, md: 12 }}
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "10px",
                              mt: "8px",
                            }}
                          >
                            <Typography
                              variant="typographyBodyInterNormal"
                              sx={{
                                fontWeight: "500 !important",
                              }}
                            >
                              ISBN
                            </Typography>
                            <Typography variant="typographyBodyInterNormal">
                              {item?.isbn}
                            </Typography>
                          </Grid>
                        )}
                      </Box>
                    </Grid>

                    {/* Faculty or Student */}
                    <Grid
                      item
                      size={{ xs: 12, sm: 6, md: 4 }}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                      }}
                    >
                      {(item?.facultyName || item?.studentName) && (
                        <>
                          <Typography
                            variant="typographyBodyInterNormal"
                            sx={{
                              fontWeight: "500 !important",
                            }}
                          >
                            {researchallhighlights === "studentpublications"
                              ? "STUDENT NAME"
                              : "FACULTY"}
                          </Typography>
                          <Typography
                            variant="typographyBodyInterNormal"
                            sx={{
                              textOverflow: "ellipsis",
                              whiteSpace: "normal",
                            }}
                          >
                            {(researchallhighlights === "studentpublications"
                              ? item?.studentName
                              : item?.facultyName
                            )
                              ?.split(",")
                              .map((name, index, arr) => (
                                <div key={index}>
                                  {name.trim()}
                                  {index !== arr?.length - 1 && ","}
                                </div>
                              ))}
                          </Typography>
                        </>
                      )}
                    </Grid>

                    {/* Department */}
                    <Grid
                      item
                      size={{ xs: 6, sm: 3, md: 2 }}
                      sx={{
                        display: "flex",
                        justifyContent: { xs: "flex-start", sm: "flex-end" },
                      }}
                    >
                      <Typography variant="typographyBodyInterNormal">
                        {item?.department}
                      </Typography>
                    </Grid>

                    {/* Year */}
                    <Grid
                      item
                      size={{ xs: 6, sm: 3, md: 1 }}
                      sx={{
                        display: "flex",
                        justifyContent: { xs: "flex-start", sm: "flex-end" },
                      }}
                    >
                      <Typography variant="typographyBodyInterNormal">
                        {item?.date}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              ))}

              {/* Pagination */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: { xs: "40px", md: "60px" },
                  mb: { xs: "30px", md: "40px" },
                }}
              >
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  siblingCount={1}
                  boundaryCount={1}
                  renderItem={(item) => (
                    <PaginationItem
                      {...item}
                      components={{
                        next: () => <span style={{ fontSize: 14 }}>Next</span>,
                        previous: () => (
                          <span style={{ fontSize: 14 }}>Prev</span>
                        ),
                      }}
                    />
                  )}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    "& .MuiPagination-ul": {
                      alignItems: "center",
                      gap: "6px",
                    },
                    "& .MuiPaginationItem-root": {
                      borderRadius: "0",
                      minWidth: "36px",
                      height: "36px",
                      border: "none",
                      color: "#666",
                      fontSize: "14px",
                      backgroundColor: "transparent",
                    },
                    "& .MuiPaginationItem-root:hover": {
                      backgroundColor: "#5D5A84",
                      color: "#fff",
                    },
                    "& .MuiPaginationItem-ellipsis": {
                      color: "#666",
                    },
                    "& .MuiPaginationItem-page.Mui-selected": {
                      backgroundColor: "#5D5A84 !important",
                      color: "#fff !important",
                      fontWeight: "500",
                    },
                    "& .MuiPaginationItem-page.Mui-selected:hover": {
                      backgroundColor: "#5D5A84 !important",
                      color: "#fff !important",
                    },
                    "& .MuiPaginationItem-nextPrevious": {
                      border: "none",
                      fontWeight: "500",
                      color: "#666",
                    },
                  }}
                />
              </Box>
            </>
          ) : (
            <Box sx={{ py: "24px" }}>
              <Typography variant="typographyBodyInterNormal">
                No research publications match the selected filters.
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
