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
import { ArrowIcon } from "../../CampusLife";
import { ArrowForwardIosSharp } from "@mui/icons-material";
import { IoIosArrowRoundForward } from "react-icons/io";
import nextArrowIconImage from "../../../Assets/chevron-down.svg";
import Placements from "./placements";
import CustomNextArrowIcon from "../../../Components/CustomNextArrowIcon/CustomNextArrowIcon";
import CustomNextButton from "../../../Components/CustomNextButton/CustomNextButton";
import { convertDepartmentData } from "./AllParticulaDepartmentDetailsData";
import actions from "../../../ReduxStore/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { adminUrl } from "../../../constants";

const ConvertProgramData = (apiData) => {
  const data = apiData?.data;
  const add = data?.additional_data;

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

  const sortedRelatedPrograms = [...(data?.other_related_programs || [])].sort(
    (first, second) => {
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
    },
  );

  return {
    courseData: {
      title: data?.program_name,
      description: data?.description,
      department_id: data?.department?.department_id,
      degree: add?.degree?.degree_name,
      degreeDuration: `${add?.degree?.degree_years} years, ${add?.degree?.degree_semesters} semesters`,
      stream: data?.funding_type?.type_name || [],
      credits: add?.credits || [],
      department: data?.department?.department_name,
      departmentLink: `/academics/${data?.department?.department_name
        ?.toLowerCase()
        ?.replace(/\s+/g, "")}/${data?.department?.department_id}`,
      image: `${data?.image_url}`, // full url required
    },

    programOutcomes: {
      programOutcomesData: add?.programOutcomeCards || [],
      programOutcomesDescription: add?.programOutcomeDecription || "",
    },

    syllabus: {
      description: add?.syllabus_description,
      buttonText: "Download the Syllabus",
      pdfUrl: `${add?.syllabus_pdf_url || ""}`,
    },

    valueAddedCourses: (add?.valueAddedCourseCards || []).map((item) => ({
      name: item.title,
      offered: item.description,
    })),

    careerPaths: {
      careerPathFirstDescription: `Graduates of the ${data?.program_name} programme can pursue careers in a wide range of fields, including:`,
      careerPathLastDescription:
        "Graduates can explore many other career opportunities beyond this list.",

      careerPathData: (add?.futureCareerPathsCards || []).map((item) => ({
        category: item.title,
        roles: item.career_paths,
      })),
    },

    placements: add?.placed_company_logos || [],

    beyondClassroom: {
      description: add?.beyond_classroom_details?.beyond_classroom_description,

      beyond_classroom_subdescription_cards:
        add?.beyond_classroom_details?.beyond_classroom_subdescription_cards,

      image: `${add?.beyond_classroom_details?.beyond_classroom_img_url}`,
    },

    facultyData: (add?.facultyCards || []).map((f) => ({
      name: f.name,
      title: f.position,
      specialization: f.areaofspecilization,
      qualification: f.qualification,
      image: `${f.faculty_img_url}`,
      profileLink: f.profilelink,
      email: f.email || "",
    })),

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
      })),

      admissionsImage: `${add?.adminsistraion_and_eligibility?.administration_img_url}`,
    },
    otherRelatedProgrms: sortedRelatedPrograms,
  };
};

const BcomGeneralPage = () => {
  const [programData, setProgramData] = useState(null);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 👇 Get Redux API Response
  // const apiResponse = useSelector((state) => state?.departmentById);

  const { programId } = useParams();
  const { getProgramById } = useSelector((state) => state?.getProgramById);
  // const programId = location.state;

  console.log(programId, "progrmIddd");

  // Fetch department data
  useEffect(() => {
    if (!programId) return;

    const fetchData = async () => {
      const payload = {
        data: {},
        method: "get",
        apiName: `getProgramById/${programId}`,
      };

      await dispatch(actions.GETPROGRAMBYID(payload));
    };

    fetchData();
  }, [programId]);

  // Convert API data whenever redux updates
  useEffect(() => {
    if (getProgramById?.data) {
      const converted = ConvertProgramData(getProgramById);
      setProgramData(converted);
    }
  }, [getProgramById]);

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
    relatedDepartments,
  } = programData || {};

  console.log(admissionsData, "admissionsDataadmissionsData");

  // Until loaded
  if (!programData) return <p>Loading...</p>;

  // Now destructure DYNAMIC data
  // const {
  //   courseData,
  //   about,
  //   programmes,
  //   facilities,
  //   eventsAndActivities,
  //   achievements,
  //   researchHighlights,
  //   studentSayAboutOutCollege,
  //   pdf_url,
  // } = departmentData;

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
    {
      name: courseData?.department,
      to: `/academics/${courseData?.department
        ?.toLowerCase()
        ?.replace(/\s+/g, "")}/${courseData?.department_id}`,
    },
    { name: courseData?.title },
  ];
  console.log(admissionsData?.relatedDepartments, "admissionData");

  const gridNumber = valueAddedCourses?.length > 0 ? 3.7 : 5.7;
  const gridNumber1 = valueAddedCourses?.length > 0 ? 3.7 : 0;
  console.log(gridNumber, "gridNmumverr");

  const hasBeyondClassroomData =
    beyondClassroom &&
    (beyondClassroom?.beyond_classroom_description ||
      beyondClassroom?.beyond_classroom_img_url ||
      beyondClassroom?.beyond_classroom_subdescription_cards?.length > 0);

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
        <Grid item size={{ md: 3, xs: 6 }}>
          <Typography
            variant="headingTextInterMedium"
            sx={{ color: "#6B3C58", mb: "10px" }}
          >
            Degree
          </Typography>
          <Typography variant="typographyBodyInterNormal">
            {courseData.degree}
          </Typography>
          <Typography variant="typographyBodyInterNormal">
            {courseData.degreeDuration}
          </Typography>
        </Grid>

        <Grid item size={{ xs: 6, md: 3 }}>
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
        </Grid>

        <Grid item size={{ xs: 6, md: 3 }}>
          <Typography
            variant="headingTextInterMedium"
            sx={{ color: "#6B3C58", mb: "10px" }}
          >
            Credits
          </Typography>
          {courseData.credits.map((credit, i) => (
            <Typography key={i} variant="typographyBodyInterNormal">
              {credit}
            </Typography>
          ))}
        </Grid>

        <Grid item size={{ xs: 6, md: 3 }}>
          <Typography
            variant="headingTextInterMedium"
            sx={{ color: "#6B3C58", mb: "10px" }}
          >
            Department
          </Typography>
          <Typography
            onClick={() => {
              navigate(courseData.departmentLink);
            }}
            sx={{
              color: "black",
              display: "inline", // Ensure Typography is inline for correct text styling
            }}
          >
            <span
              style={{
                borderBottom: "1px solid black", // Apply border to the text only
                cursor: "pointer",
              }}
            >
              {courseData.department}
            </span>
          </Typography>
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
          sx={{
            width: "100%",
            // maxHeight: "532px",
             maxHeight:  { lg: "589px", md: "480px", xs: "450px" },
            borderRadius: "10px",
            objectFit: programId === "68" ? "fill" : "cover",
          }}
          image={courseData.image}
          alt={courseData.title}
        />
      </Card>

      {/* Program Outcomes */}
      <Grid container spacing={3} sx={{ mt: 6 }}>
        <Grid item size={{ xs: 12, md: 5 }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{ mt: { sm: "30px", xs: "12px", md: 0 } }}
          >
            Program Outcomes
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 7 }}>
          <Grid container columnSpacing={6} rowSpacing={4}>
            {programOutcomes?.programOutcomesData?.map((item, index) => (
              <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                <Typography variant="headingTextInterMediumProgram">
                  {item.title}
                </Typography>
                <Typography
                  variant="typographyBodyInterNormal"
                  //
                  sx={{ mt: { sm: "16px", xs: "8px" } }}
                >
                  {item.description}
                </Typography>
              </Grid>
            ))}
            <Grid size={{ xs: 12 }}>
              <Typography
                variant="typographyBodyInterNormal"
                //
                sx={{ mt: "8px" }}
              >
                {programOutcomes?.programOutcomesDescription}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <Divider sx={{ my: 6 }} /> */}

      {/* Syllabus, Value Added Courses, Career Paths */}
      <Grid
        container
        spacing={4}
        sx={{ mt: { lg: "96px", md: "80px", sm: "60px", xs: "60px" } }}
      >
        {/* Syllabus */}

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
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "black" }}
        />
        {/* <Divider
          
          sx={{ borderColor: "black" ,display:{xs:"black",md:"none"}}}
        /> */}

        {/* Value Added */}
        {valueAddedCourses?.length > 0 && (
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
              {/* <Box
            sx={{
              // mt: { lg: "40px", md: "25px" },
              mt: { xs: "40px" },

              gap:"20px": { lg: "32px", md: "32px",xs:"32px" },
              display: "flex",
              flexDirection: "column",
            }}
          > */}
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
        <Grid item size={{ xs: 12, md: gridNumber }}>
          <Typography variant="headingTextNewsreaderMedium" fontWeight={600}>
            Future Career Paths
          </Typography>
          <Typography
            variant="typographyBodyInterNormal"
            sx={{
              mt: { xs: "40px" },
              // mt: { lg: "40px", md: "25px", sx: "20px" }
            }}
          >
            {careerPaths?.careerPathFirstDescription}
          </Typography>

          <List
            sx={{
              //   mt: { lg: "40px", md: "25px" },
              listStyleType: "disc",
              pl: 3, // add padding for bullets
              //   mt: "25px", // shorthand for margin-top
            }}
          >
            {careerPaths?.careerPathData?.map((path, i) => (
              <ListItem
                key={i}
                sx={{
                  display: "list-item", // important to make bullets appear
                  //   mb: 1,
                  // mt: { xs: "8px", sm: "8px" },
                }}
              >
                <Typography
                  variant="typographyBodyInterNormal"
                  sx={{ fontWeight: "600 !important" }}
                >
                  {path.category}:{" "}
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
      </Grid>

      <Box sx={{ py: { xs: "80px", md: "98px" } }}>
        <Placements placementsLogo={placements} />
        <Box sx={{ display: "flex", justifyContent: "center", mt: "50px" }}>
          <Button
            onClick={() => {
              navigate("/campuslife/careerdevelopment/placementcell");
            }}
            variant="none"
            endIcon={
              <CustomNextArrowIcon
                style={{
                  fontSize: "20px",
                  marginLeft: "10px",
                  // color: color || "gray",
                }}
              />
            }
            sx={{
              // mt: { md: "64px", xs: "30px" },

              fontSize: { lg: "18px", sm: "16px", xs: "14px", md: "16px" },
              fontWeight: 500,
              borderRadius: 999,
              textTransform: "none",
              color: "gray",

              background: "none",
              borderColor: "black",
              // px: variant ? 0 : 2.5,
              height: 40,
              "& .MuiButton-endIcon": {
                margin: 0, // remove default margin
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // force center
              },
              "&:hover": {
                color: "black",
              },
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>
              LEARN MORE ABOUT OUR PLACEMENT CELL
            </Typography>
          </Button>
        </Box>
      </Box>
      {/* <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="h6" fontWeight={600}>
          Our students are proudly placed at
        </Typography>
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
          {placements.map((logo, i) => (
            <Grid item xs={4} sm={2} md={1.5} key={i}>
              <Box
                component="img"
                src={logo}
                alt="company logo"
                sx={{ width: "100%", maxWidth: 90 }}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          endIcon={<ArrowForwardIcon />}
          sx={{ mt: 3, textTransform: "none", fontWeight: 600 }}
        >
          Learn more about our Placement Cell
        </Button>
      </Box> */}
      {/* <CurstomOurPlacements logos={placements} /> */}

      {/* Beyond the Classroom */}
      {hasBeyondClassroomData && (
        <Grid
          container
          spacing={4}
          //  sx={{ mt: 8 }}
          sx={{ mb: { xs: "96px", md: "96px" } }}
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

      {/* Faculty Section */}
      {/* <Box sx={{ mt: 8 }}>
        <Typography variant="headingTextNewsreaderMedium" fontWeight={600}>
          Faculty Members
        </Typography>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {facultyData.map((faculty, i) => (
            <Grid item size={{ xs: 12, md: 3 }} key={i}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: "none",
                  background: "none",
                  // p: 2,
                  textAlign: "start",
                }}
              >
                <CardMedia
                  component="img"
                  image={faculty.image}
                  alt={faculty.name}
                  sx={{
                    width: "100%",
                    maxWidth: "200px",
                    height: { xs: "200px", md: "255px", lg: "305px" },
                    objectFit: "contain",
                    display: "flex",
                    justifyContent: "start",
                    // flexDirection:"column",
                    alignItems: "start",
                    background: "none",
                    // borderRadius: 2,
                  }}
                />
                <Typography
                  variant="leadershipContentTextNewsreaderMedium"
                  // fontWeight={600}
                  sx={{ mt: { xs: "10px", md: "10px",lg:0 } }}
                >
                  {faculty.name}
                </Typography>
                <Typography
                  variant="typographyBodyInterMaintext"
                  sx={{ mt: "5px" }}
                >
                  {faculty.title}
                </Typography>
                <Typography
                  variant="typographyBodyInterNormal"
                  sx={{ mt: "5px" }}
                >
                  {faculty?.qualification}
                </Typography>

                <Box sx={{ my: { lg: "24px", md: "18px", xs: "10px" } }}>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ fontWeight: "500 !important" }}
                  >
                    Area of Specialization
                  </Typography>
                  <Typography
                    variant="typographyBodyInterNormal"
                    display="block"
                  >
                    {faculty.specialization}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box> */}
      {/* <FacultySection facultyData={facultyData} /> */}
      <Box
      // sx={{ mt: { xs: "96px", md: "96px" } }}
      >
        <Typography variant="headingTextNewsreaderMedium" fontWeight={600}>
          Faculty Members
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography
            variant="typographyBodyInterMaintext"
            sx={{ fontWeight: "500 !important" }}
          >
            {courseData?.stream}
          </Typography>

          <CustomImageSliderNext items={facultyData} link={true} />
        </Box>
      </Box>

      {/* Admissions Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="headingTextNewsreaderMedium" fontWeight={600}>
          Admissions & Eligibility
        </Typography>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "stretch", // 🔑 equal column height
            }}
          >
            {/* ================= IMAGE COLUMN ================= */}
            <Grid sx={{ flex: 2, display: "flex" }}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "none",
                  width: "100%",
                  height: {
                    xs: "280px",
                    sm: "340px",
                    md: "400px",
                    lg: "465px",
                  },
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  image={admissionsData?.admissionsImage}
                  alt="Admissions"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Card>
            </Grid>

            {/* ================= CONTENT COLUMN ================= */}
            <Grid
              sx={{
                flex: 3,
                display: { md: "flex" },
                flexDirection: { md: "column" },
                justifyContent: { md: "space-between" },
              }}
            >
              <Box>
                <Typography
                  variant="typographyBodyInterNormal"
                  sx={{ mb: "4px", fontWeight: "500 !important" }}
                >
                  Eligibility Criteria
                </Typography>
                <Typography
                  variant="typographyBodyInterNormal"
                  sx={{ mb: "16px" }}
                >
                  {admissionsData?.eligibilityText?.sudenetPass}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="typographyBodyInterMaintext"
                  sx={{
                    fontWeight: "500 !important",
                    pt: { lg: "20px", xs: "50px" },
                  }}
                >
                  Learn how to apply:
                </Typography>

                {/* <Box sx={{ display: { xs: "none", md: "block" }, mt: "16px" }}>
                <CustomNextButton
                  buttonText="LEARN HOW TO APPLY"
                  color="gray"
                  variant="none"
                />
              </Box> */}

                <Box
                  sx={{
                    // display: { xs: "block", md: "none" },
                    mt: "16px",
                  }}
                >
                  <CustomNextButton
                    buttonText="TAKE THE NEXT STEP"
                    color="white"
                    background="#5D5A84"
                    onClick={"/admissions"}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 3, justifyContent: "end" }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              my: { lg: "200px", md: "150px", xs: "100px" },
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
                Other Related Programs
              </Typography>
              {/* <Grid container spacing={2} sx={{ mt: 1 }}> */}
              <Table>
                <TableBody>
                  {admissionsData?.relatedDepartments?.map((program, i) => (
                    // <Grid item xs={12} key={i}>

                    <TableRow
                      key={`${program.name}-${i}`}
                      onClick={() => {
                        const isPhdProgram =
                          (program?.programmeLevel || "")
                            .toLowerCase()
                            .replace(/\./g, "") === "phd";

                        if (isPhdProgram) {
                          navigate(`/phdprograms/${program?.programId}`);
                          return;
                        }

                        navigate(
                          `/academics/${program?.focus
                            ?.toLowerCase()
                            ?.replace(/\s+/g, "")}/${program?.name
                            ?.toLowerCase()
                            ?.replace(/[.\s]+/g, "")}/${program?.programId}`,
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
                        <Typography
                          sx={{ fontSize: { lg: "18px", xs: "14px" } }}
                        >
                          {program.type}
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
      </Box>
    </Box>
  );
};

export default BcomGeneralPage;
