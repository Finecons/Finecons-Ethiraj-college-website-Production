
import { Box, Typography, Grid, Stack, SvgIcon, Divider } from "@mui/material";
import OurProgramsImg1 from "../../../../Assets/source_image.png";
import OurProgramsImg2 from "../../../../Assets/gallery4.jpg";

import ArrowAsset from "../../../../Assets/arrowIcon.svg"; // or .png/.jpg
import CustomImageSlider from "../../../../Components/CustomImageSlider/CustomImageSlider";
import { adminUrl } from "../../../../constants";

// Prefer SVG. If ArrowAsset is an SVG file, this stays crisp at any size.
// For PNG/JPG it still works, just won't recolor via CSS.
function ArrowIcon(props) {
  return (
    <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: 24 }} {...props}>
      <image href={ArrowAsset} width="24px" />
    </SvgIcon>
  );
}
const images1 = [OurProgramsImg1, OurProgramsImg2, OurProgramsImg1]; // your images

const sections = [
  {
    key: "ug",
    title: "UNDER GRADUATE",
    description:
      "The college offers 26 undergraduate programs for aided and self-supporting candidates such as B.A, BBA, B.Com, B.Com (Hons), and B.Sc programmes.",
  },
  {
    key: "pg",
    title: "POST GRADUATE",
    description:
      "22 programs at the postgraduate level are offered for candidates including Master of Business Administration (MBA) and Master of Computer Application (MCA).",
  },
  {
    key: "research",
    title: "RESEARCH PROGRAMS",
    description:
      "20+ Doctoral programmes and it is offered by University of Madras",
  },
];

function FastFact({ fastFactDatas }) {

    const images =
    fastFactDatas[0]?.additional_data?.banners?.length > 0
      ? fastFactDatas[0]?.additional_data?.banners?.map(
        (data) => `${data}`
      )
      : images1;
 
  console.log(fastFactDatas[0]?.additional_data?.undergraduategraduate,"counttttt")
  const stats = [
    {
      number: fastFactDatas[0]?.additional_data?.undergraduategraduate
        ? fastFactDatas[0]?.additional_data?.undergraduategraduate
        : "8010",
      label: "Undergraduate & Graduate Students",
    },
    {
      number: fastFactDatas[0]?.additional_data?.facultymember
        ? fastFactDatas[0]?.additional_data?.facultymember
        : "346+",
      label: "Faculty Member",
    },
    {
      number: fastFactDatas[0]?.additional_data?.alumnisituatedglobally
        ? fastFactDatas[0]?.additional_data?.alumnisituatedglobally
        : "2,25,000l+",
      label: "Research Scholars",
    },
  ];
  return (
    <Box
      id="fast-facts"
      sx={{
        // px: { xs: 2, sm: 3, md: "30px", lg: "36px" },
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },

        py: { lg: "41px", md: "30px", sm: "30px", xs: "40px" },

        my: { xs: "85px", md: "20px" },
      }}
    >
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
        {/* LEFT: heading + intro + 3 underlined rows */}

        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              color: "var(--heading-text-primary)",
              // fontFamily: "Newsreader, serif",
              // fontStyle: "normal",
              // fontWeight: 500,
              // lineHeight: "52px",
              // fontSize: { xs: "26px", sm: "32px", md: "36px", lg: "45px" },
              mb: { xs: 2, sm: 2, md: "10px", lg: "28px" },
            }}
          >
            Fast Facts
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 5.5 }}>
          <CustomImageSlider images={images} />
        </Grid>

        <Grid size={{ xs: 12, md: 6.5 }}>
          <Grid container spacing={3}>
            {/* <Box
              sx={{
                px: 2,
                //   maxWidth: 600,
                //   margin: "auto",
                //   bgcolor: "white",
                //   p: 4,
                //   borderRadius: "16px",
                //   boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            > */}
            {stats.map((item, index) => (
              <Grid
                size={{ xs: 12, sm: 4, md: 12 }}
                key={index}
                sx={{
                  pr: index !== stats.length - 1 ? 3 : 0,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                {/* <Box
                    key={index}
                    sx={{ mb: index !== stats.length - 1 ? 3 : 0 }}
                  > */}
                <Box>
                  <Typography
                    variant="primaryHeadingText"
                    fontWeight="bold"
                    sx={{ textAlign: { sm: "center", md: "start" } }}
                  >
                    {item.number}
                  </Typography>
                  <Typography
                    variant="typographySubheadingText"
                    color="text.secondary"
                    sx={{
                      py: { lg: "18px", md: "18px", sm: "32px", xs: "8px" },
                      color: "hsla(0, 0%, 0%, 1)",
                      textAlign: { sm: "center", md: "start" },
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
                <Box>
                  {index !== stats.length && (
                    <Divider sx={{ borderWidth: "1.5px" }} />
                  )}
                </Box>
                {/* </Box> */}
              </Grid>
            ))}
            {/* </Box> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default FastFact;
