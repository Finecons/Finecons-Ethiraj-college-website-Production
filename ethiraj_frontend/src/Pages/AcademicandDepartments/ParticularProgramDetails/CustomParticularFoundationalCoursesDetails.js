import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  Container,
  Link,
  Divider,
  List,
  ListItem,
  TableCell,
  TableRow,
  TableBody,
  Table,
  TableHead,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import bcomGeneralData from "./AllParticularProgramDetailsData";
import CustomBreadCrumbs from "../../../Components/CustomBreadCrumbs/CustomBreadCrumbs";
// import Placements from "../../placements";
// import bcomGeneralData from "../data/bcomGeneralData"; // <-- your JSON file
import downloadPdfIconImage from "../../../Assets/downloadpdfIconImage.png";
import CurstomOurPlacements from "../../../Components/CustomOutPlacements/CurstomOurPlacements";
import FacultySection from "./FacultySection";
import CustomImageSliderNext from "./FacultySection";

import actions from "../../../ReduxStore/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { adminUrl } from "../../../constants";
import frenchBannerImage from "../../../Assets/frenchBanner.png";
import Activities from "./Activities";

const ConvertProgramData = (apiData) => {
  const data = apiData?.data;
  const add = data?.additional_data;

  const normalizeCredits = (creditsValue) => {
    if (Array.isArray(creditsValue)) return creditsValue.filter(Boolean);
    if (creditsValue === null || creditsValue === undefined) return [];

    const raw = String(creditsValue).trim();
    if (!raw) return [];

    return raw.includes(",")
      ? raw
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      : [raw];
  };

  const programRecords = (data?.programs || []).map((program) => ({
    ...program,
    department: {
      department_name: data?.department_name,
    },
  }));

  const relatedDepartmentPrograms = (
    data?.other_related_departments || []
  ).flatMap((department) => {
    // If department has programs, use them
    if (department?.programs && department.programs.length > 0) {
      return (department.programs || []).map((program) => ({
        ...program,
        department: {
          department_name: department?.department_name,
        },
      }));
    }

    // Otherwise, use the department itself as a related course
    return [
      {
        program_id: department?.department_id,
        program_name: department?.department_name,
        department: {
          department_name: department?.department_name,
        },
        funding_type: {
          type_name:
            add?.stream === "1"
              ? "Aided"
              : add?.stream === "2"
                ? "Self-Supporting"
                : "Unknown",
        },
        programme_level: {
          level_name: "Undergraduate",
        },
        image_url: department?.image_url,
        description: department?.description,
      },
    ];
  });

  const uniqueRelatedPrograms = Array.from(
    new Map(
      relatedDepartmentPrograms.map((program) => [program.program_id, program]),
    ).values(),
  );

  const getLevelPriority = (level = "") => {
    const normalized = String(level).toLowerCase().replace(/\s|\./g, "");
    if (normalized === "undergraduate") return 0;
    if (normalized === "postgraduate") return 1;
    if (normalized === "phd") return 2;
    return 3;
  };

  const getFundingPriority = (type = "") => {
    const normalized = String(type).toLowerCase().replace(/\s|-/g, "");
    if (normalized === "aided") return 0;
    if (normalized === "selfsupporting") return 1;
    return 2;
  };

  const sortedRelatedPrograms = uniqueRelatedPrograms.sort((first, second) => {
    const levelDiff =
      getLevelPriority(first?.programme_level?.level_name) -
      getLevelPriority(second?.programme_level?.level_name);

    if (levelDiff !== 0) return levelDiff;

    const fundingDiff =
      getFundingPriority(first?.funding_type?.type_name) -
      getFundingPriority(second?.funding_type?.type_name);

    if (fundingDiff !== 0) return fundingDiff;

    return String(first?.program_name || "").localeCompare(
      String(second?.program_name || ""),
    );
  });

  return {
    courseData: {
      title: data?.department_name || "",
      description: add?.description || data?.description || "",
      department_id: data?.department_id,
      degree: add?.course_name || add?.degree?.degree_name || "",
      degreeDuration: add?.course_semesters
        ? `${add.course_semesters} semesters`
        : `${add?.degree?.degree_semesters || ""} semesters`,
      stream: "Aided / Self-Supporting", // add?.stream === "1" ? "Aided" : add?.stream === "2" ? "Self-Supporting" : "",
      // add?.stream === "1"
      //   ? "Aided"
      //   : add?.stream === "2"
      //     ? "Self-Supporting"
      //     : "",
      credits: normalizeCredits(add?.credits),
      department: data?.department_name || "",
      departmentLink: `/academics/${data?.department_name
        ?.toLowerCase()
        ?.replace(/\s+/g, "")}/${data?.department_id}`,
      image: `${data?.image_url || frenchBannerImage}`, // full url required
    },

    programOutcomes: {
      programOutcomesData: add?.programOutcomeCards || [],
      programOutcomesDescription: add?.programOutcomeDecription || "",
    },

    syllabus: {
      description: add?.syllabus_description || "",
      buttonText: "Download the Syllabus",
      pdfUrl: `${add?.syllabus_pdf_url || ""}`,
    },

    valueAddedCourses: (add?.valueAddedCourseCards || []).map((item) => ({
      name: item.title,
      offered: item.description,
    })),

    careerPaths: {
      careerPathFirstDescription: `Graduates of the ${data?.department_name || ""} programme can pursue careers in a wide range of fields, including:`,
      careerPathLastDescription:
        "Graduates can explore many other career opportunities beyond this list.",

      careerPathData: (add?.futureCareerPathsCards || []).map((item) => ({
        category: item.title,
        roles: item.career_paths,
      })),
    },

    placements: add?.placed_company_logos || [],

    beyondClassroom: {
      description:
        add?.beyond_classroom_description ||
        add?.beyond_classroom_details?.beyond_classroom_description ||
        "",
      beyond_classroom_subdescription_cards:
        add?.beyond_classroom_subdescription_cards ||
        add?.beyond_classroom_details?.beyond_classroom_subdescription_cards ||
        [],
      image:
        add?.administration_img_url ||
        add?.beyond_classroom_details?.beyond_classroom_img_url ||
        "",
    },

    facultyData: (add?.facultyCards || []).map((f) => ({
      name: f.name,
      title: f.position,
      specialization: f.areaofspecilization,
      qualification: f.qualification,
      image: `${f.faculty_img_url}`,
      profileLink: f.profilelink,
      email: f.email || "",
      aided: Boolean(f.aided),
      self_supporting: Boolean(f.self_supporting),
    })),

    activitiesData:
      (add?.activitiesData || add?.cards?.activitiesData)
        ?.map((yearItem, yearIndex) => {
          // Filter valid activities - only require title to exist
          const validActivities =
            yearItem?.activities
              ?.filter((activity) => activity?.title?.trim())
              ?.map((activity, actIndex) => ({
                id: actIndex + 1,
                title: activity.title,
                imageUrl: activity?.image?.fileUrl || null,
                imageType: activity?.image?.type || "",
                progress: activity?.image?.progress || 0,
              })) || [];

          // Return only if year OR activities exist
          if (
            !yearItem?.academic_year?.trim() ||
            validActivities.length === 0
          ) {
            return null;
          }

          return {
            id: yearIndex + 1,
            academicYear: yearItem.academic_year,
            activities: validActivities,
          };
        })
        // Remove null entries
        ?.filter(Boolean) || [],

    admissionsData: {
      eligibilityText: {
        sudenetPass: add?.adminsistraion_and_eligibility?.elgibility_criteria,
        twoSubject: add?.adminsistraion_and_eligibility?.subject_requirements,
        allSubject: add?.adminsistraion_and_eligibility?.any_two_subjects_list,
      },

      buttonText: "Learn How to Apply",

      relatedDepartments: sortedRelatedPrograms.slice(0, 3).map((program) => ({
        name: program?.program_name,
        programId: program?.program_id,
        programmeLevel: program?.programme_level?.level_name,
        focus: program?.department?.department_name,
        type: program?.funding_type?.type_name,
        academicId: program?.academic_id,
      })),

      admissionsImage: `${add?.adminsistraion_and_eligibility?.administration_img_url}`,
    },
    otherRelatedProgrms: sortedRelatedPrograms,
    annualAssociaction: {
      annual_associaction_descriptions:
        add?.annual_associaction_descriptions || [],
      annual_associaction_img_url: `${add?.annual_associaction_img_url || ""}`,
    },
    singleLineResearches: add?.singleLineResearches || [],
    // ⭐ Research Highlights
    researchHighlights:
      (add?.researchCards || add?.cards?.researchCards || []).map(
        (item, index) => ({
          id: index + 1,
          title: item.title || "",
          facultyName: item.facultyName || "",
          date: item.Date
            ? new Date(item.Date)
                .toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                })
                .toUpperCase()
            : "",

          publisher: item?.publisher || "",
        }),
      ) || [],
    // ⭐ Achievements
    achievements:
      add?.acheivementCards?.map((item) => ({
        achievement: item.acheivement,
        student_details: item.student_details,
      })) || [],
    singleLineAchievements: add?.singleLineAchievements || [],
  };
};

const CustomParticularFoundationalCoursesDetails = () => {
  const [programData, setProgramData] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 👇 Get Redux API Response
  // const apiResponse = useSelector((state) => state?.departmentById);

  const { departmentId } = useParams();

  const { getDepartmentById } = useSelector(
    (state) => state?.getDepartmentById,
  );
  // const departmentId = location.state;

  console.log(departmentId, "progrmIddd");

  // Fetch department data
  useEffect(() => {
    if (!departmentId) return;

    const fetchData = async () => {
      const payload = {
        data: {},
        method: "get",
        apiName: `getDepartmentById/${departmentId}`,
      };

      await dispatch(actions.GETDEPARTMENTBYID(payload));
    };

    fetchData();
  }, [departmentId, dispatch]);

  // Convert API data whenever redux updates
  useEffect(() => {
    if (getDepartmentById?.data) {
      const converted = ConvertProgramData(getDepartmentById);
      setProgramData(converted);
    }
  }, [getDepartmentById]);

  const {
    courseData,
    programOutcomes,
    syllabus,
    valueAddedCourses,
    careerPaths,
    placements,
    beyondClassroom,
    facultyData,
    admissionsData,
    achievements,
    singleLineAchievements,

    relatedDepartments,
    activitiesData,
    researchHighlights,
    annualAssociaction,
    singleLineResearches,
  } = programData || {};

  console.log(admissionsData, "admissionsDataadmissionsData");
  console.log(
    programOutcomes?.programOutcomesData,
    "programOutcomes?.programOutcomesData",
  );
  // Until loaded
  if (!programData) return <p>Loading...</p>;

  console.log(programData, "programData");
  // console.log(achievements, "achievements");
  const handledownloadFile = async (pdfUrl) => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();

      const fileURL = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = fileURL;
      link.download = "Activity&Achiements.pdf"; // 🔥 forces download
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(fileURL);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const breadcrumbsItems = [
    { name: "Home", to: "/" },
    { name: "Academics & Departments", to: "/academicsanddepartments" },
    { name: "Academic Divisions", to: "/academics/allacademicdivisions" },

    { name: courseData?.title },
  ];
  console.log(admissionsData?.relatedDepartments, "admissionData");

  const gridNumber =
    valueAddedCourses?.length > 0 &&
    valueAddedCourses.some(
      (course) => course.name?.trim() || course.offered?.trim(),
    )
      ? 3.7
      : 5.7;
  const gridNumber1 =
    valueAddedCourses?.length > 0 &&
    valueAddedCourses.some(
      (course) => course.name?.trim() || course.offered?.trim(),
    )
      ? 3.7
      : 0;
  console.log(gridNumber, "gridNmumverr");

  const hasBeyondClassroomData =
    beyondClassroom &&
    (String(beyondClassroom?.description || "").trim() !== "" ||
      String(beyondClassroom?.image || "").trim() !== "" ||
      (beyondClassroom?.beyond_classroom_subdescription_cards?.length > 0 &&
        beyondClassroom.beyond_classroom_subdescription_cards.some(
          (card) => card.title?.trim() || card.description?.trim(),
        )));

  const hasValidSingleLineResearch = singleLineResearches?.some(
    (item) => String(item || "").trim() !== "",
  );

  const validAnnualAssociationDescriptions = (
    annualAssociaction?.annual_associaction_descriptions || []
  ).filter((item) => String(item || "").trim() !== "");

  const annualAssociationImage = String(
    annualAssociaction?.annual_associaction_img_url || "",
  ).trim();

  const hasAnnualAssociationSection =
    validAnnualAssociationDescriptions.length > 0 &&
    annualAssociationImage !== "" &&
    annualAssociationImage.toLowerCase() !== "null";

  const hasValidResearchHighlights = researchHighlights?.some(
    (card) =>
      card.title?.trim() ||
      card.facultyName?.trim() ||
      card.publisher?.trim() ||
      card.Date?.trim(),
  );

  // ✅ Validation checks for sections
  const hasValidProgramOutcomes =
    programOutcomes?.programOutcomesData?.some(
      (item) => item.title?.trim() || item.description?.trim(),
    ) ||
    String(programOutcomes?.programOutcomesDescription || "").trim() !== "";

  const hasValidCareerPaths =
    careerPaths?.careerPathData?.length > 0 &&
    careerPaths.careerPathData.some(
      (item) => item.category?.trim() || item.roles?.trim(),
    );

  const hasValidFacultyData = facultyData?.length > 0;
  const aidedFacultyData = (facultyData || []).filter(
    (faculty) => faculty?.aided,
  );
  const selfSupportingFacultyData = (facultyData || []).filter(
    (faculty) => faculty?.self_supporting,
  );

  const hasValidActivitiesData = activitiesData?.length > 0;

  const hasValidSyllabus =
    String(syllabus?.description || "").trim() !== "" ||
    String(syllabus?.pdfUrl || "").trim() !== "";

  // ✅ Additional validation for Value Added Courses
  const hasValidValueAddedCourses =
    valueAddedCourses?.length > 0 &&
    valueAddedCourses.some(
      (course) => course.name?.trim() || course.offered?.trim(),
    );

  // ✅ Additional validation for Beyond Classroom
  const hasValidBeyondClassroomContent =
    String(beyondClassroom?.description || "").trim() !== "" ||
    beyondClassroom?.beyond_classroom_subdescription_cards?.some(
      (card) => card.title?.trim() || card.description?.trim(),
    ) ||
    String(beyondClassroom?.image || "").trim() !== "";

  const hasValidAchievements = achievements?.some(
    (card) => card.achievement?.trim() || card.student_details?.trim(),
  );
  console.log(achievements, "achievements");

  console.log(hasValidAchievements, "hasValidAchievements");
  const hasValidSingleLineAchievement = singleLineAchievements?.some(
    (item) => item.trim() !== "",
  );
  return (
    <Box
      sx={{
        mt: 4,
        mb: 6,
        // px: { xs: 2, sm: 3, md: 4, lg: 6 },
        // px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
      }}
    >
      {/* Breadcrumb */}
      <CustomBreadCrumbs items={breadcrumbsItems} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          flexDirection: { xs: "column", md: "row" },
          py: { lg: "24px", md: "18px", sm: "20px", xs: "8px" },
        }}
      >
        <Typography
          variant="primaryHeadingText"
          sx={{
            py: { lg: "24px", md: "18px", sm: "20px", xs: "8px" },
          }}
        >
          {/* B.Com General */}
          {courseData.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="typographyBodyInterMaintext"
          sx={{ mt: 2, mb: 3, maxWidth: "650px", color: "black" }}
        >
          {courseData.description}
        </Typography>
      </Box>

      <Divider
        sx={{ borderColor: "black" }}
        //   sx={{ my: 3 }}
      />

      {/* Course Info */}
      <Grid container spacing={3} sx={{ padding: "20px 10px" }}>
        <Grid item size={{ md: 4, xs: 6 }}>
          <Typography
            variant="headingTextInterMedium"
            sx={{ color: "#6B3C58", mb: "10px" }}
          >
            Course
          </Typography>
          <Typography variant="typographyBodyInterNormal">
            {courseData.degree}
          </Typography>
          <Typography variant="typographyBodyInterNormal">
            {courseData.degreeDuration}
          </Typography>
        </Grid>

        <Grid
          item
          size={{ xs: 6, md: 4 }}
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            alignItems: { xs: "start", md: "center" },
          }}
        >
          <Box>
            <Typography
              variant="headingTextInterMedium"
              sx={{ color: "#6B3C58", mb: "10px" }}
            >
              Stream
            </Typography>
            {/* {courseData.streams.map((stream, i) => ( */}
            <Typography variant="typographyBodyInterNormal">
              {courseData?.stream}
            </Typography>
            {/* ))} */}
          </Box>
        </Grid>

        <Grid
          item
          size={{ xs: 6, md: 4 }}
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            alignItems: { xs: "start", md: "center" },
          }}
        >
          <Box>
            <Typography
              variant="headingTextInterMedium"
              sx={{ color: "#6B3C58", mb: "10px" }}
            >
              Credits
            </Typography>
            {(courseData?.credits || []).map((credit, i) => (
              <Typography key={i} variant="typographyBodyInterNormal">
                {credit}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Divider
        sx={{ borderColor: "black" }}
        //   sx={{ my: 3 }}
      />

      {/* Course Image */}
      <Card
        sx={{
          borderRadius: "none",
          boxShadow: "none",
          mt: "54px",
          background: "none",
        }}
      >
        <CardMedia
          component="img"
          //   height="300"
          sx={{ width: "100%", maxHeight: "532px" }}
          image={courseData.image}
          alt={courseData.title}
        />
      </Card>

      {/* Program Outcomes */}
      {hasValidProgramOutcomes && (
        <Grid
          container
          spacing={3}
          sx={{ mt: { xs: "30px", sm: "30px", md: "54px", lg: "86px" } }}
        >
          <Grid item size={{ xs: 12, md: 5 }}>
            <Typography variant="headingTextNewsreaderMedium">
              Course Highlights
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, md: 7 }}>
            <Grid
              container
              columnSpacing={
                programOutcomes?.programOutcomesData?.some(
                  (item) => item.title?.trim() || item.description?.trim(),
                )
                  ? 6
                  : 0
              }
              rowSpacing={
                programOutcomes?.programOutcomesData?.some(
                  (item) => item.title?.trim() || item.description?.trim(),
                )
                  ? 4
                  : 0
              }
            >
              {programOutcomes?.programOutcomesData?.map((item, index) => (
                <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                  <Typography variant="headingTextInterMediumProgram">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="typographyBodyInterNormal"
                    //
                    sx={{
                      mt: { sm: "16px", xs: "8px" },
                      mb: programOutcomes?.programOutcomesDescription
                        ? "8px"
                        : " 0px",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Grid>
              ))}
              <Grid size={{ xs: 12 }}>
                <Typography
                  variant="typographyBodyInterNormal"
                  //
                  // sx={{ mt: "8px" }}
                >
                  {programOutcomes?.programOutcomesDescription}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}

      {/* <Divider sx={{ my: 6 }} /> */}

      {/* Syllabus, Value Added Courses, Career Paths */}
      {(hasValidSyllabus ||
        hasValidValueAddedCourses ||
        hasValidCareerPaths) && (
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 4, lg: 4 }}
          sx={{ mt: { lg: "96px", md: "80px", sm: "46px", xs: "46px" } }}
        >
          {/* Syllabus */}
          {hasValidSyllabus && (
            <Grid item size={{ xs: 12, md: gridNumber }}>
              <Typography variant="headingTextNewsreaderMedium">
                Syllabus
              </Typography>
              <Typography
                variant="typographyBodyInterNormal"
                sx={{ mt: { xs: "40px" } }}
              >
                {syllabus.description}
              </Typography>
              <Button
                component="a"
                href={syllabus?.pdfUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<Box component="img" src={downloadPdfIconImage} />}
                disabled={!syllabus?.pdfUrl}
                sx={{
                  //   mt: 2,
                  textTransform: "none",
                  borderRadius: "24px",
                  borderColor: "#000",
                  color: "#000",
                  mt: { xs: "80px", md: "50px", lg: "80px" },
                }}
              >
                <Typography
                  variant="typographyBodyInterNormal"
                  sx={{ fontSize: "14px !important" }}
                >
                  {syllabus.buttonText}
                </Typography>
              </Button>
              {/* <Divider /> */}
              <Divider
                sx={{
                  borderColor: "black",
                  display: { xs: "black", md: "none" },
                  mt: "50px",
                }}
              />
            </Grid>
          )}
          {(hasValidSyllabus || hasValidValueAddedCourses) && (
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "black" }}
            />
          )}
          {/* <Divider
          
          sx={{ borderColor: "black" ,display:{xs:"black",md:"none"}}}
        /> */}

          {/* Value Added */}
          {hasValidValueAddedCourses && (
            <>
              <Grid
                item
                size={{
                  xs: 12,
                  md: 3.7,
                }}
                // sx={{ display: valueAddedCourses?.length > 0 ? "black" : "none" }}
              >
                <Typography variant="headingTextNewsreaderMedium">
                  Value Added Courses
                </Typography>

                <Grid
                  container
                  spacing={4}
                  sx={{
                    mt: { xs: "40px" },
                    // gap:"20px": { lg: "32px", md: "28px", xs: "32px" },
                  }}
                >
                  {valueAddedCourses.map((course, i) => (
                    <Grid key={i} size={{ xs: 12, md: 12, sm: 6 }}>
                      <Typography
                        variant="typographyBodyInterNormal"
                        sx={{ fontWeight: "600 !important" }}
                      >
                        {course.name}
                      </Typography>
                      <Typography variant="typographyBodyInterNormal">
                        {course.offered}
                      </Typography>
                    </Grid>
                  ))}
                  {/* </Box> */}
                </Grid>
                <Divider
                  sx={{
                    borderColor: "black",
                    display: { xs: "black", md: "none" },
                    mt: "50px",
                  }}
                />
              </Grid>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  borderColor: "black",
                  display: valueAddedCourses?.length > 0 ? "block" : "none",
                }}
              />
            </>
          )}

          {/* Career Paths */}
          {hasValidCareerPaths && (
            <Grid item size={{ xs: 12, md: gridNumber }}>
              <Typography
                variant="headingTextNewsreaderMedium"
                fontWeight={600}
              >
                Future Career Paths
              </Typography>
              {/* <Typography
                variant="typographyBodyInterNormal"
                sx={{
                  mt: { xs: "40px" },
                  // mt: { lg: "40px", md: "25px", sx: "20px" }
                }}
              >
                {careerPaths?.careerPathFirstDescription}
              </Typography> */}

              <List
                sx={{
                  mt: "40px",
                  listStyleType: "disc",
                  pt: 0,
                  pl: 3, // add padding for bullets
                  //   mt: "25px", // shorthand for margin-top
                }}
              >
                {careerPaths?.careerPathData?.map((path, i) => (
                  <ListItem
                    key={i}
                    sx={{
                      display: "list-item",
                      p: 0, // remove default padding
                    }}
                  >
                    <Typography
                      variant="typographyBodyInterNormal"
                      sx={{ fontWeight: "600 !important" }}
                    >
                      {path.category}
                      {path.category && ": "}{" "}
                      <span style={{ fontWeight: 400 }}>
                        {/* <Typography variant="typographyBodyInterNormal"> */}
                        {path.roles}
                        {/* </Typography> */}
                      </span>
                    </Typography>
                    {/* <Typography variant="typographyBodyInterNormal">
                  {path.roles}
                </Typography> */}
                  </ListItem>
                ))}
              </List>

              {/* <Typography
              variant="typographyBodyInterNormal"
              sx={{ mt: { xs: "16px" } }}
            >
              {careerPaths?.careerPathLastDescription}
            </Typography> */}
            </Grid>
          )}
        </Grid>
      )}
      {hasValidFacultyData &&
        (aidedFacultyData.length > 0 ||
          selfSupportingFacultyData.length > 0) && (
          <Box sx={{ mt: { lg: "96px", md: "80px", sm: "46px", xs: "46px" } }}>
            <Typography variant="headingTextNewsreaderMedium" fontWeight={600}>
              Faculty Members
            </Typography>
            {aidedFacultyData.length > 0 && (
              <Box sx={{ mt: 3 }}>
                <Typography
                  variant="typographyBodyInterMaintext"
                  sx={{ fontWeight: "500 !important" }}
                >
                  Aided
                </Typography>
                <CustomImageSliderNext items={aidedFacultyData} link={true} />
              </Box>
            )}
            ``
            {selfSupportingFacultyData.length > 0 && (
              <Box sx={{ mt: aidedFacultyData.length > 0 ? 6 : 3 }}>
                <Typography
                  variant="typographyBodyInterMaintext"
                  sx={{ fontWeight: "500 !important" }}
                >
                  Self-Supporting
                </Typography>
                <CustomImageSliderNext
                  items={selfSupportingFacultyData}
                  link={true}
                />
              </Box>
            )}
          </Box>
        )}

      {hasValidActivitiesData && (
        <Box sx={{ pt: { lg: "96px", md: "80px", sm: "46px", xs: "46px" } }}>
          {/* <Typography
            variant="headingTextNewsreaderMedium"
            fontWeight={600}
            sx={{ mb: "24px", textAlign: "center", }}
          >
            Course Highlights
          </Typography> */}
          <Activities activitiesData={activitiesData} />
        </Box>
      )}

      {(hasValidResearchHighlights || hasValidSingleLineResearch) && (
        <Grid
          size={{ xs: 12 }}
          sx={{
            // my: { xs: "40px", md: "60px", lg: "80px" },

            mt: { lg: "96px", md: "80px", sm: "46px", xs: "46px" },
          }}
        >
          <Typography
            variant="typographyContentHeadingProgram"
            sx={{
              color: "#6B3C58",
              mb: "24px",
            }}
          >
            Research
          </Typography>
          {hasValidResearchHighlights && (
            <Table>
              <TableHead>
                <TableRow>
                  {/* <TableCell sx={{ fontWeight: "bold" }}>
                  
                </TableCell> */}
                  <TableCell sx={{ p: 0, borderBottom: "1px solid gray" }}>
                    <Typography variant="typographyBodyInterNormalHeadingProgram">
                      RESEARCH
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      p: 0,
                      borderBottom: "1px solid gray",
                      px: "20px",
                    }}
                  >
                    <Typography
                      variant="typographyBodyInterNormalHeadingProgram"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      FACULTY NAME
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      p: 0,
                      borderBottom: "1px solid gray",
                      px: "20px",
                    }}
                  >
                    <Typography variant="typographyBodyInterNormalHeadingProgram">
                      PUBLISHER
                    </Typography>
                  </TableCell>{" "}
                </TableRow>
              </TableHead>
              <TableBody>
                {researchHighlights?.map((item, index) => (
                  <TableRow key={index} spacing={2}>
                    {/* <TableCell sx={{ width: "55%" }}></TableCell> */}
                    <TableCell
                      sx={{
                        textAlign: "start",
                        pl: 0,
                        pt: {
                          lg: "53px",
                          md: "40px",
                          sm: "40px",
                          xs: "32px",
                        },
                        pb: {
                          lg: "29px",
                          md: "24px",
                          sm: "24px",
                          xs: "16px",
                        },
                        borderBottom: "1px solid gray",
                        verticalAlign: "top",
                        width: "50%",
                      }}
                    >
                      <Typography variant="typographyBodyInterMaintextResearchNewsreader">
                        {item?.title}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "start",
                        verticalAlign: "top",

                        pl: 0,

                        pt: {
                          lg: "53px",
                          md: "40px",
                          sm: "40px",
                          xs: "32px",
                        },
                        pb: {
                          lg: "29px",
                          md: "24px",
                          sm: "24px",
                          xs: "16px",
                        },

                        borderBottom: "1px solid gray",
                        px: "20px",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="typographyBodyInterNormal"
                          // sx={{
                          //   overflow: "hidden",
                          //   textOverflow: "ellipsis",
                          //   whiteSpace: "nowrap",
                          // }}
                        >
                          {item?.facultyName}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "start",
                        pl: 0,
                        px: "20px",

                        pt: {
                          lg: "53px",
                          md: "40px",
                          sm: "40px",
                          xs: "32px",
                        },
                        pb: {
                          lg: "29px",
                          md: "24px",
                          sm: "24px",
                          xs: "16px",
                        },

                        borderBottom: "1px solid gray",
                        verticalAlign: "top",
                      }}
                    >
                      <Typography variant="typographyBodyInterNormal">
                        {item?.publisher}
                      </Typography>
                    </TableCell>

                    {/* <TableCell>{item.person}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
          {hasValidSingleLineResearch &&
            singleLineResearches?.map((data, index) => (
              <Typography
                key={index}
                variant="typographyBodyInterMaintext"
                sx={{
                  fontFamily: "Newsreader",
                  fontWeight: "500 !important",
                  pt: { lg: "29px", md: "24px", sm: "24px", xs: "16px" },

                  pb: { lg: "29px", md: "24px", sm: "24px", xs: "16px" },
                  borderBottom: "1px solid black",
                }}
              >
                {data}
              </Typography>
            ))}
        </Grid>
      )}

      {/* Student Achievements */}
      {(hasValidAchievements || hasValidSingleLineAchievement) && (
        <>
          <Typography
            variant="typographyContentHeadingProgram"
            sx={{
              mb: "24px",
              color: "#6B3C58",
              mt: { lg: "96px", md: "80px", sm: "46px", xs: "46px" },
            }}
          >
            Student Achievements
          </Typography>

          {hasValidAchievements && (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ p: 0, borderBottom: "1px solid gray" }}>
                    <Typography variant="typographyBodyInterNormalHeadingProgram">
                      Achievements
                    </Typography>
                  </TableCell>

                  <TableCell
                    sx={{ p: 0, borderBottom: "1px solid gray", width: "40%" }}
                  >
                    <Typography
                      variant="typographyBodyInterNormalHeadingProgram"
                      // sx={{
                      //   width: "40%",
                      // }}
                    >
                      Student Name
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {achievements.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell
                      sx={{
                        textAlign: "start",
                        pl: 0,
                        pt: {
                          lg: "53px",
                          md: "40px",
                          sm: "40px",
                          xs: "32px",
                        },
                        pb: {
                          lg: "29px",
                          md: "24px",
                          sm: "24px",
                          xs: "16px",
                        },
                        borderBottom: "1px solid gray",
                        verticalAlign: "top",
                      }}
                    >
                      {/* <Typography
                                   variant="typographyBodyInterMaintext"
                                   sx={{
                                     fontFamily: "Newsreader",
                                     fontWeight: "500 !important",
                                   }}
                                 >
                                   {row.achievement}
                                 </Typography> */}
                      <Typography variant="typographyBodyInterMaintextResearchNewsreader">
                        {row?.achievement}
                      </Typography>
                    </TableCell>

                    <TableCell
                      sx={{
                        textAlign: "start",
                        pl: 0,
                        pt: {
                          lg: "53px",
                          md: "40px",
                          sm: "40px",
                          xs: "32px",
                        },
                        pb: {
                          lg: "29px",
                          md: "24px",
                          sm: "24px",
                          xs: "16px",
                        },
                        borderBottom: "1px solid gray",
                        verticalAlign: "top",
                        textOverflow: "ellipsis",
                        whiteSpace: "normal", // allow line breaks
                      }}
                    >
                      <Typography variant="typographyBodyInterNormal">
                        {row.student_details
                          ?.split(",")
                          .map((name, index, arr) => (
                            <div key={index}>
                              {name.trim()}
                              {index !== arr?.length - 1 && ","}
                            </div>
                          ))}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
          {hasValidSingleLineAchievement &&
            singleLineAchievements?.map((data, index) => (
              <Typography
                key={index}
                variant="typographyBodyInterMaintext"
                sx={{
                  fontFamily: "Newsreader",
                  fontWeight: "500 !important",
                  pt: { lg: "29px", md: "24px", sm: "24px", xs: "16px" },
                  pb: { lg: "29px", md: "24px", sm: "24px", xs: "16px" },
                  borderBottom: "1px solid black",
                }}
              >
                {data}
              </Typography>
            ))}
        </>
      )}

      <Box id="annual-association-event">
        {hasAnnualAssociationSection && (
          <Box
            sx={{
              mt: { lg: "96px", md: "80px", sm: "46px", xs: "46px" },
              mx: "auto",
              width: { xs: "100%", md: "80%", lg: "80%" },
            }}
          >
            <Typography
              variant="headingTextNewsreaderMedium"
              fontWeight={600}
              sx={{ textAlign: "center" }}
            >
              Annual Association Event
            </Typography>
            <Grid container spacing={3} sx={{ mt: 3 }}>
              {/* ================= IMAGE COLUMN ================= */}
              <Grid size={{ xs: 12 }}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: "none",
                    width: "100%",
                    height: "100%", // follows content height
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={annualAssociationImage}
                    alt="Admissions"
                    sx={{
                      width: "100%",
                      maxHeight: { lg: "649px", md: "549px" }, // matches content height
                      objectFit: "cover", // no distortion
                      display: "block",
                    }}
                  />
                </Card>
              </Grid>

              {/* ================= CONTENT COLUMN ================= */}

              <Grid size={{ xs: 12 }}>
                {validAnnualAssociationDescriptions.map((data, index) => (
                  <Typography
                    key={index}
                    variant="typographyBodyInterNormal"
                    sx={{ mb: "16px" }}
                  >
                    {data}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>

      {/* Beyond the Classroom */}
      {hasValidBeyondClassroomContent && (
        <Grid
          container
          spacing={4}
          //  sx={{ mt: 8 }}
          sx={{ mt: { lg: "96px", md: "80px", sm: "46px", xs: "46px" } }}
        >
          {/* <Grid item size={{ xs: 12, md: 6 }}> */}
          <Grid item size={{ xs: 12 }}>
            <Typography variant="headingTextNewsreaderMedium" fontWeight={600}>
              Beyond the Classroom
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              alignItems: "stretch", // 🔑 Equal height
            }}
          >
            {/* ================= TEXT CONTENT ================= */}
            <Grid sx={{ flex: 1 }}>
              <Typography variant="typographyBodyInterNormal" sx={{ mb: 2 }}>
                {beyondClassroom?.description}
              </Typography>
              {beyondClassroom?.beyond_classroom_subdescription_cards?.map(
                (data, index) => (
                  <React.Fragment key={index}>
                    <Typography
                      variant="typographyBodyInterNormal"
                      sx={{ fontWeight: "500 !important" }}
                    >
                      {data?.title}
                    </Typography>

                    <Typography
                      variant="typographyBodyInterNormal"
                      sx={{ mb: 2 }}
                    >
                      {data?.description}
                    </Typography>
                  </React.Fragment>
                ),
              )}
            </Grid>

            {/* ================= IMAGE ================= */}
            <Grid sx={{ flex: 1, display: "flex" }}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%", // 🔑 match text height
                  borderRadius: 3,
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  component="img"
                  image={beyondClassroom?.image}
                  alt="Beyond the Classroom"
                  sx={{
                    width: "100%",
                    height: "100%", // 🔑 stretch with content
                    objectFit: "cover", // keep ratio
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      )}

      <Grid container spacing={3} sx={{ mt: 3, justifyContent: "end" }}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            my: { lg: "100px", md: "70px", xs: "50px" },
            // display: { md: "flex" },
            // width:"100%",
            // justifyContent: { md: "end", xs: "start" },
          }}
        >
          <Box>
            <Typography
              variant="headingTextNewsreaderMedium"
              sx={{ mb: { xs: "20px", md: "25px", lg: "53px" } }}
            >
              Other Related Courses
            </Typography>
            {/* <Grid container spacing={2} sx={{ mt: 1 }}> */}
            <Table>
              <TableBody>
                {admissionsData?.relatedDepartments?.map((program, i) => (
                  // <Grid item xs={12} key={i}>

                  <TableRow
                    key={`${program.name}-${i}`}
                    onClick={() => {
                      navigate(
                        `/academic/${program?.focus
                          ?.toLowerCase()
                          ?.replace(/\s+/g, "")}/${program?.name
                          ?.toLowerCase()
                          ?.replace(/\s+/g, "")}/${program?.programId}`,
                      );
                    }}
                    // onClick={() => navigate(program?.navLinkForDetails)}
                    sx={{
                      cursor: "pointer",
                      borderBottom: "1px solid black !important",
                      "&:hover": {
                        backgroundColor: "black",
                        "& *": {
                          color: "white !important",
                        },
                      },
                    }}
                  >
                    <TableCell
                      sx={{
                        textAlign: "start",

                        pl: 0,
                        p: 0,
                        borderBottom: "1px solid gray",
                        "&:hover": {
                          background: "black",
                          color: "white",
                        },
                      }}
                    >
                      <Typography
                        variant="typographyBodyInterMaintext"
                        sx={{
                          fontFamily: "Newsreader",
                          fontWeight: "500 !important",
                        }}
                      >
                        {program.name}
                      </Typography>
                    </TableCell>

                    <TableCell
                      sx={{
                        textAlign: "end",
                        // pr: 0,
                        pt: "17px",
                        borderBottom: "1px solid gray",
                      }}
                    >
                      <Typography sx={{ fontSize: { lg: "18px", xs: "14px" } }}>
                        Aided / Self-Supporting
                      </Typography>
                    </TableCell>
                  </TableRow>

                  // </Grid>
                ))}
              </TableBody>
            </Table>
            {/* </Grid> */}
          </Box>
        </Grid>
      </Grid>
      {/* Admissions Section */}
    </Box>
  );
};

export default CustomParticularFoundationalCoursesDetails;
