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
import example_Img from "../../../Assets/academicdivisions.png";
import CustomGallerySildeShowNew from "../../../Components/CustomGallerySildeShow/CustomGallerySildeShowNew";

const CustomParticularDepartmentDetails = () => {
  // const {
  //   courseData,
  //   about,
  //   programmes,
  //   facilities,
  //   eventsAndActivities,
  //   researchHighlights,
  // } = bcomGeneralData;

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
    otherRelatedDepartments,
    pdf_url,

    activitiesData,
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

  const menuItems = [
    {
      label: `About the Department`,
      target: "about-section",
    },
    { label: "Explore programs", target: "programs-section" },
    { label: "Facilities & Infrastructure", target: "facilities-section" },
    {
      label: "Department Highlights",
      target: "department-hightlights-section",
    },
    hasAnnualAssociationSection && {
      label: "Annual Association Event",
      target: "annual-association-event",
    },

    studentSayAboutOutCollege.length > 0 && {
      label: "Testimonial",
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

  const hasAidedContacts =
    Boolean(contact?.aidedEmail) || contact?.extraAidedEmails?.length > 0;
  const hasSelfSupportingContacts =
    Boolean(contact?.selfSupportingEmail) ||
    contact?.extraSelfSupportingEmails?.length > 0;
  const hasValidSingleLineAchievement = singleLineAchievements?.some(
    (item) => item.trim() !== "",
  );

  const hasValidAchievements = achievements?.some(
    (card) => card.achievement?.trim() || card.student_details?.trim(),
  );

  const activitiesData1 = [
    {
      academic_year: "2024 - 2025",
      activities: [
        {
          id: 1,
          title: "National Seminar on AIiiiiiii",
          image: example_Img,
        },
        {
          id: 2,
          title: "Career Guidance Program",
          image: example_Img,
        },
      ],
    },
    {
      academic_year: "2025 - 2026",
      activities: [
        {
          id: 1,
          title: "Research Workshop on Statistical Analysis using JAMOVI",
          image: example_Img,
        },
        {
          id: 2,
          title: "Alumnae Connect",
          image: example_Img,
        },
        {
          id: 3,
          title: "Workshop on Entrepreneurship (E-Cell, IIM Bangalore)",
          image: example_Img,
        },
        {
          id: 4,
          title: "Organised the Golden Jubilee Celebrations",
          image: example_Img,
        },
        {
          id: 5,
          title: "Organised the Golden Jubilee Celebrations",
          image: example_Img,
        },
      ],
    },
  ];

  console.log(activitiesData, "myyyydataa");

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
            // maxHeight: departmentId==="34" ?  {  xs: "100%" } : { lg: "559px", md: "450px", xs: "400px" },
            maxHeight:  { lg: "589px", md: "480px", xs: "450px" },
            borderRadius: "10px",
            objectFit: departmentId==="34" ? "fill" : "cover",
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

          {/* programs Section */}
          <Typography
            variant="headingTextNewsreaderMedium"
            // fontWeight="bold"
            id="programs-section"
            sx={{
              mt: { lg: "96px", md: "70px", sm: "64px", xs: "50px" },
              mb: { xs: "30px", sm: "48px", lg: "48px", md: "30px" },
            }}
          >
            Explore programs
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
              {programmes.map((groupItem, index) => (
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
                        {groupItem.category}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  {groupItem.items.map((programItem, i) => (
                    <TableRow
                      // key={`${group.name}-${idx}`}
                      onClick={() => {
                        const isPhdProgram =
                          (groupItem?.category || "")
                            .toLowerCase()
                            .replace(/\./g, "") === "phd" ||
                          (programItem?.programmeLevel || "")
                            .toLowerCase()
                            .replace(/\./g, "") === "phd";

                        if (isPhdProgram) {
                          navigate(`/phdprograms/${programItem?.programId}`);
                          return;
                        }

                        navigate(
                          `/academics/${courseData?.title
                            ?.toLowerCase()
                            ?.replace(/\s+/g, "")}/${programItem?.program
                            ?.toLowerCase()
                            ?.replace(
                              /[.\s]+/g,
                              "",
                            )}/${programItem?.programId}`,
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
                          {programItem.program}
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
                          {programItem.stream}
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
                          {programItem.stream || "-"}
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
          <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
            <Activities activitiesData={activitiesData} />
          </Box>

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
                            width: "40%",

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
                              sx={{
                                textOverflow: "ellipsis",
                                whiteSpace: "normal", // allow line breaks
                              }}
                            >
                              {item?.facultyName
                                ?.split(",")
                                .map((name, index, arr) => (
                                  <div key={index}>
                                    {name.trim()}
                                    {index !== arr?.length - 1 && ","}
                                  </div>
                                ))}
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
                  mt: { xs: "60px", md: "60px", lg: "80px" },
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
                        sx={{
                          p: 0,
                          borderBottom: "1px solid gray",
                          width: "40%",
                        }}
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
                          <Typography
                            variant="typographyBodyInterNormal"
                            sx={{
                              textOverflow: "ellipsis",
                              whiteSpace: "normal", // allow line breaks
                            }}
                          >
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
                          }}
                        >
                          <Typography variant="typographyBodyInterNormal">
                            {row.student_details}
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
            {hasAnnualAssociationSection && (
              <Box sx={{ mt: 8 }}>
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
                          height: "100%", // matches content height
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
          {(hasAidedContacts || hasSelfSupportingContacts) && (
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
                {hasAidedContacts && (
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                      variant="typographyBodyInterNormal"
                      sx={{ mb: "4px", fontWeight: "500 !important" }}
                    >
                      Aided
                    </Typography>

                    {contact?.aidedEmail && (
                      <Typography
                        variant="typographyBodyInterNormal"
                        sx={{ mb: "16px" }}
                      >
                        {contact?.aidedEmail}
                      </Typography>
                    )}

                    {contact?.extraAidedEmails?.length > 0 && (
                      <Typography
                        variant="typographyBodyInterNormal"
                        sx={{ mb: "4px", fontWeight: "500 !important" }}
                      >
                        Added Email
                      </Typography>
                    )}
                    {contact?.extraAidedEmails?.map((email, index) => (
                      <>
                        <Typography
                          key={`${email}-${index}`}
                          variant="typographyBodyInterNormal"
                          sx={{ mb: "8px" }}
                        >
                          {email}
                        </Typography>
                      </>
                    ))}
                  </Grid>
                )}
                {hasSelfSupportingContacts && (
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                      variant="typographyBodyInterNormal"
                      sx={{ mb: "4px", fontWeight: "500 !important" }}
                    >
                      Self-supporting
                    </Typography>

                    {contact?.selfSupportingEmail && (
                      <Typography
                        variant="typographyBodyInterNormal"
                        sx={{ mb: "16px" }}
                      >
                        {contact?.selfSupportingEmail}
                      </Typography>
                    )}

                    {contact?.extraSelfSupportingEmails?.length > 0 && (
                      <Typography
                        variant="typographyBodyInterNormal"
                        sx={{ mb: "4px", fontWeight: "500 !important" }}
                      >
                        Added Email
                      </Typography>
                    )}
                    {contact?.extraSelfSupportingEmails?.map((email, index) => (
                      <>
                        <Typography
                          key={`${email}-${index}`}
                          variant="typographyBodyInterNormal"
                          sx={{ mb: "8px" }}
                        >
                          {email}
                        </Typography>
                      </>
                    ))}
                  </Grid>
                )}
              </Grid>
            </Box>
          )}
          {otherRelatedDepartments?.length > 0 && (
            <Box
              id="other-departments-section"
              sx={{
                mt: { xs: "40px", sm: "64px", md: "80px", lg: "96px" },
              }}
            >
              <OtherDepartments
                otherRelatedDepartments={otherRelatedDepartments}
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomParticularDepartmentDetails;
