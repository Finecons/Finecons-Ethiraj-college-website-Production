

import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

import myImg from "../../../../Assets/Carosoul_image2.jpg"

const AboutEthiraj = ({ aboutEthirajDatas }) => {
  // const { subtext = [], description = [] } = additionalData || {};
  const subtext =
    aboutEthirajDatas[0]?.additional_data?.subtext?.length > 0
      ? aboutEthirajDatas[0]?.additional_data?.subtext
      : [
        "Established in 1948, Ethiraj College for Women has been a pioneer in women’s education.",
        "With a legacy of academic excellence, empowerment, and innovation, the college continues to nurture generations of women to lead and inspire.",
      ];

  const description =
    aboutEthirajDatas[0]?.additional_data?.description?.length > 0
      ? aboutEthirajDatas[0]?.additional_data?.description
      : [
        "Ethiraj College for Women is situated in the heart of Chennai, nestled within nine acres of lush greenery and elegant architecture, stands Ethiraj College for Women — a name synonymous with quality, integrity, and opportunity. Since its founding in 1948, the College has combined a strong academic vision with impressive infrastructure, spanning over 3,48,000 sq. ft.",
        "Over the decades, Ethiraj College has earned prestigious accolades, including the Five-Star status from NAAC and the College with Potential for Excellence (CPE) recognition from the UGC. These honors are not merely badges of prestige but affirmations of the institution’s unwavering commitment — upheld by visionary management, dedicated principals, committed faculty, and ambitious students.",
        "Today, the College has over 7,300+ students and 346 faculty members, all of whom contribute to its vibrant academic environment. Its alumni network includes leaders across diplomacy, law, education, social service, culture, and industry — individuals who carry forward the legacy of Ethiraj College and continue to shape society in meaningful ways.",
        "As Ethiraj College for Women looks to the future, it remains rooted in a philosophy of growth through change. Echoing Charles Darwin’s ...",
      ];
  return (
    <div>
      <Box
        id="about-ethiraj"
        sx={{
          display: "flex",
          alignItems: "center",
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          py: { lg: "72px", md: "60px", xs: "20px", sm: "50px" },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            px: { lg: "36px", md: "28px", xs: "16px", sm: "30px" },
            background: "none",
          }}
        >
          <Grid container spacing={6}>
            {/* Left Column */}
            <Grid item size={{ xs: 12, md: 6 }}>
              {subtext.map((text, index) => (
                <>
                  <Typography
                    key={index}
                    variant="subTextInterMedium"
                    sx={{ maxWidth: { lg: "693px", md: "550px" } }}
                  >
                    {text}
                  </Typography>
                  <br />
                </>
              ))}
            

              <Box
                component="img"
                src={myImg}
                alt="Section Image"
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",   // ✅ Makes it square
                  mt: 2,
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </Grid>

            {/* Right Column */}
            <Grid item size={{ xs: 12, md: 6 }}>
              {description.map((text, index) => (
                <>
                  <Typography
                    key={index}
                    variant="typographySubheadingText"
                    sx={{
                      color: "var(--brand-palatte-text-color)",
                      // mb: 2,
                    }}
                  >
                    {text}
                  </Typography>
                  <br />
                </>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};

export default AboutEthiraj;
