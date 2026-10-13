import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  CardContent,
  Divider,
  TableHead,
  Button,
} from "@mui/material";
import CustomBreadCrumbs from "../../../Components/CustomBreadCrumbs/CustomBreadCrumbs";
import { convertDepartmentData } from "./AllParticulaDepartmentDetailsData";
import CustomGallerySildeShow from "../../../Components/CustomGallerySildeShow/CustomGallerySildeShow";
import downloadPdfIconImage from "../../../Assets/downloadpdfIconImage.png";
import TestimonialSlider from "./StudentTestinomialSlider";
import CustomResearchArticle from "../../../Components/CustomResearchArticle/CustomResearchArticle";
import CustomNextButton from "../../../Components/CustomNextButton/CustomNextButton";
import OtherDepartments from "./OtherDepartments";
import SectionNavigation from "./SectionNavigation";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import annualImage from "../../../Assets/admissions&eligibility.jpg";
import Activities from "./Activities";

const CustomParticularDepartmentDetails = () => {
  // const {
  //   courseData,
  //   about,
  //   programmes,
  //   facilities,
  //   eventsAndActivities,
  //   researchHighlights,
  // } = bcomGeneralData;

  const activitiesData = [
    {
      event: "Alumnae Connect ‘25: Our Pride Your Inspiration",
      person:
        "Ms. Deepa Seshadri (Sr Vice President, Apollo Hospitals), Ms. Akshaya Chandrasekaran (Ex-VP, Barclays)",
    },
    {
      event:
        "Dr. Mrs. Kousalya Moorthy & Justice M.N. Moorthy Endowment Lecture on Union Budget 2025 - An Overview",
      person: "CA Sai Ajay N, Senior Consultant",
    },
    {
      event: "Workshop on Mind Matters: Exploring Stress and Mental Well-Being",
      person:
        "Dr. M. Ramya Maheshwari, Assistant Professor & Head, Dept of Psychology",
    },
  ];

  const studentAchievements1 = [
    {
      achievement: "Cleared CA Intermediate Group 2",
      student: "Ms. Varsha R – 3rd Year, Commerce (2024-25)",
    },
    {
      achievement: "Cleared ACCA skill level (FR paper)",
      student: "Ms. Kanishka Babu – 2nd Year, Commerce (2024-25)",
    },
    {
      achievement: "Cleared CMA Intermediate - Group 1",
      student: "Ms. Divya Praba R – 3rd Year, Commerce (2024-25)",
    },
    {
      achievement: "Bronze Medal in 8th Junior National Duathlon Championship",
      student: "Ms. Deepika HB – 2nd Year, Commerce (2024-25)",
    },
    {
      achievement: "Winner in 9th Senior National Duathlon Championship",
      student: "Ms. Deepika HB – 2nd Year, Commerce (2024-25)",
    },
  ];

  const researchHighlights1 = [
    {
      title:
        "New Study Demonstrates Sustainable Catalytic Use of Hydroxyapatite for Water Purification",
      description: "Enter a blurb from the publication...",
      date: "JUNE 2025",
      category: "COMMERCE",
    },
    {
      title:
        "New Study Demonstrates Sustainable Catalytic Use of Hydroxyapatite for Water Purification",
      description: "Enter a blurb from the publication...",
      date: "JUNE 2025",
      category: "COMMERCE",
    },
    {
      title:
        "New Study Demonstrates Sustainable Catalytic Use of Hydroxyapatite for Water Purification",
      description: "Enter a blurb from the publication...",
      date: "JUNE 2025",
      category: "COMMERCE",
    },
  ];

  //   const location = useLocation();
  //   const dispatch = useDispatch();

  //   const departmentId = location.state?.department_id;
  //   console.log(departmentId, "departmentId");

  // const converted = convertDepartmentData();
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data1 = {
  //         data: {},
  //         method: "get",
  //         apiName: `getDepartmentById/${departmentId}`,
  //       };

  //       // setLoading(true); // Set loading to true when the request starts
  //       await dispatch(actions.GETDEPARTMENTBYID(data1));
  //       // setLoading(false); // Set loading to false after data is fetched
  //     };
  //     fetchData();
  //   }, [departmentId]);
  const [departmentData, setDepartmentData] = useState(null);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const departmentId = location.state?.department_id;
  const { departmentId } = useParams();
  console.log(departmentId, "departmentIddd");

  // 👇 Get Redux API Response
  // const apiResponse = useSelector((state) => state?.departmentById);

  const { getDepartmentById } = useSelector(
    (state) => state?.getDepartmentById,
  );

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
  }, [departmentId]);

  // Convert API data whenever redux updates
  useEffect(() => {
    if (getDepartmentById?.data) {
      const converted = convertDepartmentData(getDepartmentById);
      setDepartmentData(converted);
    }
  }, [getDepartmentById]);

  // Until loaded
  if (!departmentData) return <p>Loading...</p>;

  // Now destructure DYNAMIC data
  const {
    courseData,
    about,
    programmes,
    facilities,
    eventsAndActivities,
    singleLineActivities,
    achievements,
    researchHighlights,
    singleLineAchievements,
    singleLineResearches,

    contact,
    annualAssociaction,

    studentSayAboutOutCollege,
    pdf_url,
  } = departmentData;
  console.log(departmentData, "departmentData");
  console.log(achievements, "achievements");
  console.log(programmes, "programmes");
  console.log(researchHighlights, "researchHighlights");

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
  const menuItems = [
    { label: "About the Commerce Department", target: "about-section" },
    { label: "Explore Programmes", target: "programmes-section" },
    { label: "Facilities & Infrastructure", target: "facilities-section" },
    {
      label: "Department Highlights",
      target: "department-hightlights-section",
    },
    annualAssociaction?.annual_associaction_descriptions?.length > 0 && {
      label: "Annual Association Event",
      target: "annual-association-event",
    },

    studentSayAboutOutCollege.length > 0 && {
      label: "Testinomial",
      target: "testinomial",
    },

    { label: "Other Departments", target: "other-departments-section" },
  ];
  const hasValidResearchHighlights = researchHighlights?.some(
    (card) =>
      card.title?.trim() ||
      card.facultyName?.trim() ||
      card.publisher?.trim() ||
      card.Date?.trim(),
  );

  const hasValidSingleLineResearch = singleLineResearches?.some(
    (item) => item.trim() !== "",
  );
  const hasValidSingleLineActivity = singleLineActivities?.some(
    (item) => item.trim() !== "",
  );
  const hasValidSingleLineAchievement = singleLineAchievements?.some(
    (item) => item.trim() !== "",
  );

  return (
    <Box sx={{ mt: 4, mb: 6, px: { xs: 2, sm: 3, md: "74px", lg: "94px" } }}>
      {/* Breadcrumbs */}
      <CustomBreadCrumbs items={breadcrumbsItems} />

      {/* Department Title */}
      <Typography
        variant="primaryHeadingText"
        fontWeight="bold"
        sx={{
          py: { lg: "24px", md: "18px", sm: "20px", xs: "8px" },
        }}
      >
        {courseData?.title}
      </Typography>

      {/* Hero Image */}
      <Card
        sx={{
          borderRadius: "10px",
          boxShadow: "none",
          mt: { lg: "64px", md: "50px", xs: "30px" },
          background: "none",
        }}
      >
        <CardMedia
          component="img"
          image={courseData.image}
          alt={courseData.title}
          sx={{
            width: "100%",
            maxHeight: { lg: "559px", md: "450px", xs: "400px" },
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
      </Card>

      {/* About Section */}

      <Grid
        container
        spacing={4}
        sx={{
          mt: { lg: "63px", md: "50px", xs: "30px" },
        }}
      >
        <Grid
          size={{ xs: 12, md: 3.5 }}
          sx={{
            position: { md: "sticky", xs: "static" },
            top: "100px",
            alignSelf: "flex-start",
          }}
        >
          <SectionNavigation menuItems={menuItems} />
        </Grid>
        <Grid size={{ xs: 12, md: 8.5 }}>
          <Box
            sx={
              {
                // backgroundColor: "#f5f8ff",
                // borderLeft: "4px solid #1976d2",
                // p: 3,
                // borderRadius: "6px",
              }
            }
          >
            <Typography
              variant="headingTextNewsreaderMedium"
              id="about-section"
              // fontWeight="bold"
              // gutterBottom
              // sx={{mb:2}}
              sx={{ mb: { xs: "32px", sm: "24px", md: "24px" } }}
            >
              {about.title}
            </Typography>

            {about.paragraphs.map((text, index) => (
              <Typography
                key={index}
                variant="typographyBodyInterNormal"
                sx={{ mb: { xs: "10px", md: "24px" } }}
              >
                {text}
              </Typography>
            ))}
          </Box>

          {/* Programmes Section */}
          <Typography
            variant="headingTextNewsreaderMedium"
            // fontWeight="bold"
            id="programmes-section"
            sx={{
              mt: { lg: "96px", md: "70px", sm: "64px", xs: "50px" },
              mb: { xs: "30px", sm: "48px", lg: "48px", md: "30px" },
            }}
          >
            Explore Programmes
          </Typography>

          <Table sx={{ mb: { lg: "64px", md: "50px", xs: "50px" } }}>
            <TableHead>
              <TableRow>
                {/* <TableCell>PROGRAM</TableCell> */}
                <TableCell sx={{ p: 0, borderBottom: "1px solid gray" }}>
                  <Typography variant="typographyBodyInterNormalHeadingProgram">
                    PROGRAM
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    p: 0,
                    display: { xs: "none", sm: "table-cell" },
                    borderBottom: "1px solid gray",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="typographyBodyInterNormalHeadingProgram">
                    DEPARTMENT
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    p: 0,
                    textAlign: "end",
                    borderBottom: "1px solid gray",
                  }}
                >
                  <Typography variant="typographyBodyInterNormalHeadingProgram">
                    STREAM
                  </Typography>
                </TableCell>
                {/* <TableCell align="right">STREAM</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {programmes.map((group, index) => (
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell
                      colSpan={3}
                      sx={{ pl: 0, borderBottom: "1px solid gray" }}
                    >
                      <Typography
                        variant="typographyBodyInterMaintext"
                        sx={{ fontWeight: "bold", mt: 2, color: "#868E96" }}
                      >
                        {group.category}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  {group.items.map((group, i) => (
                    <TableRow
                      // key={`${group.name}-${idx}`}
                      onClick={() => {
                        navigate(
                          `/academics/${courseData?.title
                            ?.toLowerCase()
                            ?.replace(/\s+/g, "")}/${group?.program
                            ?.toLowerCase()
                            ?.replace(/[.\s]+/g, "")}/${group?.programId}`,
                        );
                      }}
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
                      {/* <TableCell>{group.name}</TableCell> */}
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
                          {group.program}
                        </Typography>
                      </TableCell>

                      <TableCell
                        sx={{
                          textAlign: "start",
                          pl: 0,
                          p: 0,
                          display: { xs: "none", sm: "table-cell" },

                          "&:hover": {
                            background: "black",
                            color: "white",
                          },
                          // borderBottomColor: "black !important",
                          borderBottom: "1px solid gray",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { lg: "18px", xs: "14px" },
                            display: { xs: "none", sm: "block" },
                            textAlign: "center",
                            "&:hover": {
                              background: "black",
                              color: "white",
                            },
                          }}
                        >
                          {group.department || "-"}
                        </Typography>
                      </TableCell>

                      {/* <TableCell align="right">{group.stream}</TableCell> */}
                      <TableCell
                        sx={{
                          textAlign: "end",
                          pr: 0,
                          pt: "17px",
                          // borderBottom: "1px solid black",
                          borderBottom: "1px solid gray",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: { lg: "18px", xs: "14px" } }}
                        >
                          {group.stream}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>

          {/* <Divider sx={{ my: 4 }} /> */}

          {/* Facilities Section */}
          <Typography
            variant="headingTextNewsreaderMedium"
            id="facilities-section"
            sx={{ mb: "16px" }}
          >
            {facilities.title}
          </Typography>
          <Typography variant="typographyBodyInterNormal" sx={{ mb: "20px" }}>
            {facilities.description}
          </Typography>
          <CustomGallerySildeShow images={facilities?.items} />

          {/* <Grid
            container
            spacing={3}
            sx={{ display: "flex", alignItems: "center" }}
          >
            {facilities.items.map((item, i) => (
              <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: "none",
                    background: "none",
                  }}
                >
                  <CardMedia
                    component="img"
                    // height="200"
                    image={item.img}
                    alt={item.title}
                    sx={{
                      height: i % 2 === 0 ? "200px" : "280px", // 👈 Even index -> bigger height
                      // width: i % 2 === 0 ? "200px" : "auto", // 👈 Even index -> bigger height

                      objectFit: "cover", // ensure the image looks nice when height changes
                    }}
                  />
                
                </Card>
              </Grid>
            ))}
          </Grid> */}
          {/* Latest Department Activities & Achievements */}
          <Box sx={{ maxWidth: "500px", mx: "auto" }}>
            <Typography
              variant="headingTextNewsreaderMedium"
              id="department-hightlights-section"
              sx={{
                my: { xs: "40px", md: "60px", lg: "80px" },
                // mb: {lg:'64px',md:"50px",xs:'50px'},
                // mb: 2,
                textAlign: "center",
              }}
            >
              Department Highlights
            </Typography>
          </Box>

          {/* Activities Section */}
          <Typography
            variant="typographyContentHeadingProgram"
            sx={{ mb: "24px", color: "#6B3C58" }}
          >
            Activities
          </Typography>

          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell sx={{ fontWeight: "bold" }}>
                  
                </TableCell> */}
                <TableCell sx={{ p: 0, borderBottom: "1px solid gray" }}>
                  <Typography variant="typographyBodyInterNormalHeadingProgram">
                    Events & Activities
                  </Typography>
                </TableCell>
                <TableCell sx={{ p: 0, borderBottom: "1px solid gray" }}>
                  <Typography variant="typographyBodyInterNormalHeadingProgram">
                    Resource Person
                  </Typography>
                </TableCell>
                <TableCell sx={{ p: 0, borderBottom: "1px solid gray" }}>
                  <Typography variant="typographyBodyInterNormalHeadingProgram">
                    Year
                  </Typography>
                </TableCell>{" "}
              </TableRow>
            </TableHead>
            <TableBody>
              {eventsAndActivities.map((item, index) => (
                <TableRow key={index}>
                  {/* <TableCell sx={{ width: "55%" }}></TableCell> */}
                  <TableCell
                    sx={{
                      textAlign: "start",
                      pl: 0,
                      pt: { lg: "53px", md: "40px", sm: "40px", xs: "32px" },
                      pb: { lg: "29px", md: "24px", sm: "24px", xs: "16px" },

                      borderBottom: "1px solid gray",
                      verticalAlign: "top",
                    }}
                  >
                    <Typography
                      variant="typographyBodyInterMaintext"
                      sx={{
                        fontFamily: "Newsreader",
                        fontWeight: "500 !important",
                      }}
                    >
                      {item.event}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "start",
                      verticalAlign: "top",

                      pl: 0,

                      pt: { lg: "53px", md: "40px", sm: "40px", xs: "32px" },
                      pb: { lg: "29px", md: "24px", sm: "24px", xs: "16px" },
                      borderBottom: "1px solid gray",
                    }}
                  >
                    {item?.resourcePersons?.map((data, i) => (
                      <Box>
                        <Typography
                          variant="typographyBodyInterNormal"
                          sx={{
                            // fontSize: { lg: "18px", xs: "14px" },
                            pt: i % 2 !== 0 ? "20px" : "0px",
                          }}
                        >
                          {data}
                        </Typography>
                      </Box>
                    ))}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "start",
                      pl: 0,

                      pt: { lg: "53px", md: "40px", sm: "40px", xs: "32px" },
                      pb: { lg: "29px", md: "24px", sm: "24px", xs: "16px" },

                      borderBottom: "1px solid gray",
                      verticalAlign: "top",
                    }}
                  >
                    <Typography variant="typographyBodyInterNormal">
                      {item?.year || "--"}
                    </Typography>
                  </TableCell>
                  {/* <TableCell>{item.person}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {hasValidSingleLineActivity &&
            singleLineActivities?.map((data, index) => (
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

          {(hasValidResearchHighlights || hasValidSingleLineResearch) && (
            <Grid
              size={{ xs: 12 }}
              sx={{
                my: { xs: "40px", md: "60px", lg: "80px" },
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
                        <Typography variant="typographyBodyInterNormalHeadingProgram">
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
                      <TableCell sx={{ p: 0, borderBottom: "1px solid gray" }}>
                        <Typography variant="typographyBodyInterNormalHeadingProgram">
                          YEAR
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
                          }}
                        >
                          <Typography
                            variant="typographyBodyInterMaintext"
                            sx={{
                              fontFamily: "Newsreader",
                              fontWeight: "500 !important",
                            }}
                          >
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
                            <Typography variant="typographyBodyInterNormal">
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
                          <Typography variant="typographyBodyInterNormal">
                            {item?.date}
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
          <Typography
            variant="typographyContentHeadingProgram"
            sx={{
              mb: "24px",
              color: "#6B3C58",
              mt: { xs: "60px", md: "60px", lg: "80px" },
            }}
          >
            Student Achievements
          </Typography>

          <Table
          // sx={{ mb: { xs: "40px", sm: "80px" } }}
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ p: 0, borderBottom: "1px solid gray" }}>
                  <Typography variant="typographyBodyInterNormalHeadingProgram">
                    Achievements
                  </Typography>
                </TableCell>

                <TableCell sx={{ p: 0, borderBottom: "1px solid gray" }}>
                  <Typography variant="typographyBodyInterNormalHeadingProgram">
                    Student Name
                  </Typography>
                </TableCell>
                {/* <TableCell sx={{ p: 0, borderBottom: "1px solid gray" }}>
                  <Typography variant="typographyBodyInterNormalHeadingProgram">
                    Year
                  </Typography>
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {achievements.map((row, i) => (
                <TableRow key={i}>
                  <TableCell
                    sx={{
                      textAlign: "start",
                      pl: 0,
                      // p: 0,
                      // py: { xs: "50px" },
                      // mt: "24px",
                      // p: 0,
                      pt: { lg: "53px", md: "40px", sm: "40px", xs: "32px" },
                      pb: { lg: "29px", md: "24px", sm: "24px", xs: "16px" },

                      borderBottom: "1px solid gray",
                      verticalAlign: "top",
                    }}
                  >
                    <Typography
                      variant="typographyBodyInterMaintext"
                      sx={{
                        fontFamily: "Newsreader",
                        fontWeight: "500 !important",
                      }}
                    >
                      {row.achievement}
                    </Typography>
                  </TableCell>
                  {/* <TableCell sx={{ width: "55%" }}></TableCell> */}

                  <TableCell
                    sx={{
                      textAlign: "start",
                      pl: 0,

                      pt: { lg: "53px", md: "40px", sm: "40px", xs: "32px" },
                      pb: { lg: "29px", md: "24px", sm: "24px", xs: "16px" },

                      borderBottom: "1px solid gray",
                      verticalAlign: "top",
                    }}
                  >
                    <Typography
                      variant="typographyBodyInterNormal"
                      // sx={{
                      //   fontFamily: "Newsreader",
                      //   fontWeight: "500 !important",
                      // }}
                    >
                      {/* {row.achievement} */}
                      {row.student_details}
                    </Typography>
                  </TableCell>
                  {/* <TableCell
                    sx={{
                      textAlign: "start",
                      pl: 0,

                      pt: { lg: "53px", md: "40px", sm: "40px", xs: "32px" },
                      pb: { lg: "29px", md: "24px", sm: "24px", xs: "16px" },

                      borderBottom: "1px solid gray",
                      verticalAlign: "top",
                    }}
                  >
                    <Typography
                      variant="typographyBodyInterNormal"
                     
                    >
                      {row?.year}
                    </Typography>
                  </TableCell> */}
                  {/* <TableCell>{row.student}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
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

          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              mt: { xs: "40px", sm: "80px" },
            }}
          >
            <Button
              variant="outlined"
              onClick={() => {
                handledownloadFile(pdf_url);
              }}
              startIcon={<Box component="img" src={downloadPdfIconImage} />}
              sx={{
                //   mt: 2,
                textTransform: "none",
                borderRadius: "24px",
                borderColor: "#000",
                color: "#000",
                // mt: { lg: "80px", md: "40px" },
              }}
            >
              <Typography
                variant="typographyBodyInterNormal"
                sx={{ fontSize: "14px !important" }}
              >
                {/* {syllabus.buttonText} */}
                Download all Activities & Achievements
              </Typography>
            </Button>
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "20px", md: "16px", lg: "24px" },
              mt: { xs: "40px", sm: "64px", md: "80px", lg: "96px" },
            }}
          >
            <Typography
              variant="headingTextNewsreaderMedium"
              id="research-section"
              sx={
                {
                  // mb: { xs: "20px", md: "20px", lg: "24px" },
                  // textAlign: "center",
                }
              }
            >
              Research Highlights
            </Typography>
            {researchHighlights1?.map((data, i) => (
              <Box key={data.id || i}>
                <CustomResearchArticle researchData={data} />
              </Box>
            ))}
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <CustomNextButton buttonText="VIEW ALL" />
            </Box>
          </Box> */}
          <Box id="annual-association-event">
            {annualAssociaction?.annual_associaction_descriptions?.length >
              0 && (
              <Box sx={{ mt: 8 }}>
                <Typography
                  variant="headingTextNewsreaderMedium"
                  fontWeight={600}
                  sx={{ textAlign: "center" }}
                >
                  Annual Association Event
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
                    <Grid sx={{ flex: 3, display: "flex" }}>
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
                          image={
                            annualAssociaction?.annual_associaction_img_url
                          }
                          alt="Admissions"
                          sx={{
                            width: "100%",
                            height: "100%", // matches content height
                            objectFit: "cover", // no distortion
                            display: "block",
                          }}
                        />
                      </Card>
                    </Grid>

                    {/* ================= CONTENT COLUMN ================= */}

                    <Grid sx={{ flex: 3 }}>
                      {annualAssociaction?.annual_associaction_descriptions?.map(
                        (data, index) => (
                          <Typography
                            key={index}
                            variant="typographyBodyInterNormal"
                            sx={{ mb: "16px" }}
                          >
                            {data}
                          </Typography>
                        ),
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Box>

          <Box id="testinomial">
            {studentSayAboutOutCollege?.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "20px", md: "16px", lg: "24px" },
                  // mt: { xs: "20px", md: "80px", lg: "96px" },
                  mt: { xs: "40px", sm: "64px", md: "80px", lg: "96px" },
                }}
              >
                <TestimonialSlider
                  studentSayAboutOutCollege={studentSayAboutOutCollege}
                />
              </Box>
            )}
          </Box>
          {(contact?.aidedEmail || contact?.selfSupportingEmail) && (
            <Box>
              <Typography
                variant="typographyContentHeadingProgram"
                sx={{
                  mb: "24px",
                  color: "#6B3C58",
                  mt: { xs: "60px", md: "60px", lg: "80px" },
                }}
              >
                Contact Details
              </Typography>

              <Grid container spacing={4}>
                {contact?.aidedEmail && (
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                      variant="typographyBodyInterNormal"
                      sx={{ mb: "4px", fontWeight: "500 !important" }}
                    >
                      Aided
                    </Typography>

                    <Typography
                      variant="typographyBodyInterNormal"
                      sx={{ mb: "16px" }}
                    >
                      {contact?.aidedEmail}
                      {/* commerce1331@ethirajcollege.edu.in */}
                    </Typography>
                  </Grid>
                )}
                {contact?.selfSupportingEmail && (
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                      variant="typographyBodyInterNormal"
                      sx={{ mb: "4px", fontWeight: "500 !important" }}
                    >
                      Self-supporting
                    </Typography>

                    <Typography
                      variant="typographyBodyInterNormal"
                      sx={{ mb: "16px" }}
                    >
                      {contact?.selfSupportingEmail}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Box>
          )}
          <Box
            id="other-departments-section"
            sx={{
              mt: { xs: "40px", sm: "64px", md: "80px", lg: "96px" },
            }}
          >
            <OtherDepartments />
          </Box>
          <Activities/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomParticularDepartmentDetails;
