import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  Divider,
  Box,
  IconButton,
  Stack,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ArrowIcon } from "../NewsEvents";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../ReduxStore/actions";

const CoursesSection = ({ aboutAcademicsDatas }) => {
  const programs = [
    {
      title: "UNDER GRADUATE",
      desc:
        aboutAcademicsDatas[0]?.additional_data[0]
          ?.under_graduate_description ||
        "The college offers 26 undergraduate programs for aided and self-supporting candidates such as B.A, BBA, B.Com, B.Com (Hons) and B.Sc programmes.",
      // link: "/academics/undergraduateprogramlist",
      // state: { level: "Undergraduate Programmes" },
      link: "/academics/programlist",
      state: { level: "Undergraduate Programmes" },
    },
    {
      title: "POST GRADUATE",
      desc:
        aboutAcademicsDatas[0]?.additional_data[0]?.post_graduate_description ||
        "22 programs at the postgraduate level are offered for candidates including Master of Business Administration (MBA) and Master of Computer Application (MCA).",
      link: "/academics/programlist",
      state: { level: "Postgraduate Programmes" },
    },
    {
      title: "RESEARCH PROGRAMS",
      desc:
        aboutAcademicsDatas[0]?.additional_data[0]
          ?.research_program_description ||
        "20+ Doctoral programmes and it is offered by University of Madras",
      link: "/academics/programlist",
      state: { level: "PhD Programmes" },
    },
  ];

  const dispatch = useDispatch();
  const { getAllHomeSectionsBySectionName } = useSelector(
    (state) => state?.getAllHomeSectionsBySectionName,
  );

  console.log(getAllHomeSectionsBySectionName);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: "getAllHomeSections",
      };

      // setLoading(true); // Set loading to true when the request starts
      await dispatch(actions.GETALLHOMESECTIONSBYSECTIONNAME(data1));
      // setLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
  }, [dispatch]);

  // Function to get dates by section_name
  const getDatasBySectionName = (sectionName) => {
    return (
      getAllHomeSectionsBySectionName?.data?.filter(
        (section) => section?.section_name === sectionName,
      ) || []
    );
  };

  const rankingDatas = getAllHomeSectionsBySectionName?.data
    ? getDatasBySectionName("Rankings section")
    : [];

  const stats1 = [
    { value: "370+", label: "Faculty Members" },
    { value: "8010", label: "Students Enrolled in 2024" },
    { value: "70+", label: "Programmes Offered" },
  ];
  const stats =
    rankingDatas[0]?.additional_data?.card_count?.length > 0
      ? rankingDatas[0]?.additional_data?.card_count?.map((data, index) => ({
          id: index,
          value: data?.count,
          label: data?.content,
        }))
      : [
          {
            id: "students",
            value: "8010",
            label: "Students Enrolled in 2024",
            // labelBottom: "in 2024",
          },
          {
            id: "programs",
            value: "70+",
            label: "Programmes Offered",
            // labelBottom: "Offered",
          },
          {
            id: "faculty",
            value: "370+",
            label: "Faculty Members",
            // labelBottom: "Members"
          },
        ];

  const navigate = useNavigate();

  const description = aboutAcademicsDatas[0]?.additional_data[0]?.description
    ? aboutAcademicsDatas[0]?.additional_data[0]?.description
    : [
        "Over 70 programs to explore from across 6 different academic divisions and those are just the beginning. ",
        "Whether you're passionate about the sciences, committed to the arts, curious about commerce, eager to explore management, or drawn to research and innovation, there's a place for you here.",
      ];

  return (
    <Box sx={{ px: 3, py: 8 }}>
      {/* Top Section */}
      <Grid container>
        <Grid item size={{ xs: 12, md: 5, lg: 5 }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            // fontWeight={600}
            // gutterBottom
            sx={{ maxWidth: "459px" }}
          >
            {aboutAcademicsDatas[0]?.additional_data[0]?.title ||
              "What course will your future take?"}
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 7, lg: 7 }}>
          {description?.map((data) => (
            <>
              <Typography
                variant="typographyBodyInterMaintext"
                sx={{
                  fontFamily: "Inter",
                  color: "black",
                  mt: { sm: "48px", xs: "24px", md: 0 },
                }}
              >
                {data}
              </Typography>
              <br />
            </>
          ))}

          {/* <Typography
            variant="typographyBodyInterMaintext"
            sx={{ fontFamily: "Inter", color: "black" }}
            // color="text.secondary"
          >
            Whether you're passionate about the sciences, committed to the arts,
            curious about commerce, eager to explore management, or drawn to
            research and innovation, there's a place for you here.
          </Typography> */}

          {/* Programs Section */}
          <Box sx={{ mt: { xs: "24px", md: "30px" } }}>
            <Typography
              variant="typographyContentHeadingResearch"
              sx={{ mb: "24px" }}
            >
              Start your exploration here
            </Typography>
            {programs.map((program, idx) => (
              <Box
                key={program.index}
                onClick={() => {
                  navigate(program?.link, { state: program?.state });
                }}
                sx={{
                  py: { xs: "20px", sm: "20px" },
                  px: { xs: "5px" },
                  cursor: "pointer",

                  borderBottom: (t) => `0.535px solid #6C757D`,
                  transition: "background 0.3s ease", // smooth background transition

                  "&:hover": {
                    background: "hsla(300, 100%, 95%, 1)",
                  },
                }}
              >
                <Grid container alignItems="center" columnSpacing={1}>
                  <Grid size={{ xs: 11 }}>
                    <Typography
                      variant="subHeadingTextInterMedium"
                      sx={{
                        // fontFamily: "Inter, sans-serif",
                        // fontStyle: "normal",
                        // fontWeight: 500,
                        // fontSize: { xs: "22px", sm: "26px", md: "32px" },
                        // lineHeight: "44px",

                        color: "var(--brand-palatte-text-color)",
                        textTransform: "uppercase", // keeps "UNDER GRADUATE"
                      }}
                    >
                      {program.title}
                    </Typography>
                  </Grid>
                  <Grid
                    size={{ xs: 1 }}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-center",
                      alignItems: "start",
                    }}
                  >
                    <ArrowIcon sx={{ color: "text.primary" }} />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Typography
                      variant="typographyBodyInterNormal"
                      // color="text.secondary"
                      sx={{
                        color: "var(--brand-palette-text-secondary)",
                        // :: 1,
                        pt: { xs: "16px" },
                        display: "block",
                      }}
                    >
                      {program.desc}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Stats Section */}
      {/* Stats Section */}
      <Grid
        container
        spacing={6}
        // mt={10}
        justifyContent={{ xs: "flex-start", sm: "center", md: "flex-start" }}
        alignItems="center"
        // px: { xs: "20px", lg: "60px" },
        sx={{ mt: { xs: "60px", lg: "60px" } }}
      >
        <Grid
          item
          size={{ xs: 12, md: 5 }}
          md={5}
          sx={{ textAlign: { xs: "start", sm: "center", md: "start" } }}
        >
          <Typography variant="subHeadingTextInterMedium">
            Our Numbers
          </Typography>
        </Grid>

        {stats.map((stat, idx) => (
          <Grid item size={{ xs: 12, sm: 3, md: 2.3 }} key={idx}>
            <Stack
              alignItems={{ xs: "flex-start", sm: "center", md: "flex-start" }}
            >
              <Typography variant="typographyContentHeadingProgram">
                {stat.value}
              </Typography>
              <Typography
                variant="typographyBodyContentCourse"
                color="text.secondary"
                sx={{ pt: { xs: "10px" }, pb: { xs: "10px" } }}
              >
                {stat.label}
              </Typography>
            </Stack>
            <Divider sx={{ display: { xs: "block", sm: "none" } }} />
          </Grid>
        ))}
        <Divider sx={{ display: { xs: "block", sm: "none" } }} />
      </Grid>
    </Box>
  );
};

export default CoursesSection;
