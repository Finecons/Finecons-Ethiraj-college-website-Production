// import React from 'react'

// const FastFact = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default FastFact

// OurPrograms.js
import { Box, Typography, Grid, Divider } from "@mui/material";
import OurProgramsImg1 from "../../../Assets/source_image.png";
import OurProgramsImg2 from "../../../Assets/gallery4.jpg";

import CustomImageSlider from "../../../Components/CustomImageSlider/CustomImageSlider";
const images1 = [OurProgramsImg1, OurProgramsImg2, OurProgramsImg1]; // your images

function ResearchScholars({ fastFactDatas = [], imageUrl }) {
  const images = imageUrl ? [imageUrl] : images1;
  const fallbackStats = [
    {
      number: "03",
      label: "No of Research Scholar (Ongoing)",
    },
    {
      number: "05",
      label: "No of Research Scholar (Completed)",
    },
    {
      number: "00",
      label: "No of Research Scholar (Submitted Synopsis)",
    },
    {
      number: "23",
      label: "No of Research Scholar (Submitted Thesis)",
    },
  ];

  const stats =
    fastFactDatas?.map((item) => ({
      number: item?.count || "-",
      label: item?.title || "",
    })) || [];
  return (
    <Box
      sx={{


        // py: { lg: "41px", md: "30px", sm: "30px", xs: "40px" },

        my: { xs: "50px", sm: "85px", md: "100px", lg: "128px" },
      }}
    >
      <Grid container columnSpacing={{ xs: 4, md: 6 }} alignItems="stretch">
        {/* LEFT: heading + intro + 3 underlined rows */}

        <Grid size={{ xs: 12}}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              // fontFamily: "Newsreader, serif",
              // fontStyle: "normal",
              // fontWeight: 500,
              // lineHeight: "52px",
              // fontSize: { xs: "26px", sm: "32px", md: "36px", lg: "45px" },
              mb: { xs: "27px", sm: "60px", md: "45px", lg: "60px" },
            }}
          >
            Research Scholars
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={3}>
            
            {(stats?.length ? stats : fallbackStats).map((item, index) => (
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
                    // fontWeight="bold"
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

        <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{mt:{xs:"50px",md:"0px"}}}>
          <CustomImageSlider images={images} />
        </Grid>
      </Grid>
    </Box>
  );
}
export default ResearchScholars;
