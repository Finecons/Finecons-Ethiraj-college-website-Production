
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const InstrumentList = ({ aboutEthirajDatas }) => {
  // const { subtext = [], description = [] } = additionalData || {};
//   const subtext =
//     aboutEthirajDatas[0]?.additional_data?.subtext?.length > 0
//       ? aboutEthirajDatas[0]?.additional_data?.subtext
//       : [
//         "FIST from DST Funded Instruments",
//       ];

//   const description =
//     aboutEthirajDatas[0]?.additional_data?.description?.length > 0
//       ? aboutEthirajDatas[0]?.additional_data?.description
//       : [
//         "The Fund for Improvement of S&T Infrastructure (FIST) scheme of the Department of Science and Technology supports the creation of basic infrastructure to promote research and development in educational institutions. Ethiraj College for Women is a recipient of the DST–FIST Level-0 Grant (2016), under which a grant of ₹95 lakhs was sanctioned, with ₹77.5 lakhs received.",
//         "The grant was utilized to establish a DST–FIST funded laboratory. The instruments procured through this grant are used for teaching and research, and have supported workshops conducted using the FIST facility. Proposals for industrial tie-ups and certificate courses using the facility are in progress.",
//       ];

  const subtext =
     [
        "FIST from DST Funded Instruments",
      ];

  const description =
    [
        "The Fund for Improvement of S&T Infrastructure (FIST) scheme of the Department of Science and Technology supports the creation of basic infrastructure to promote research and development in educational institutions. Ethiraj College for Women is a recipient of the DST–FIST Level-0 Grant (2016), under which a grant of ₹95 lakhs was sanctioned, with ₹77.5 lakhs received.",
        "The grant was utilized to establish a DST–FIST funded laboratory. The instruments procured through this grant are used for teaching and research, and have supported workshops conducted using the FIST facility. Proposals for industrial tie-ups and certificate courses using the facility are in progress.",
      ];
  return (
    <div>
      <Box
        id="fist-dst-instruments"
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
            // px: { lg: "36px", md: "28px", xs: "16px", sm: "30px" },
            background: "none",
          }}
        >

          {/* <Typography variant="primaryHeadingText" sx={{ mb: { xs: "32px", sm: "24px", md: "24px" } }}  >About ECRIC</Typography> */}
          <Typography
            variant="headingTextNewsreaderMedium"
            id="about-section"
            // fontWeight="bold"
            // gutterBottom
            // sx={{mb:2}}
            sx={{ mb: { xs: "32px", sm: "24px", md: "24px" } }}
          >
            Instrument List
          </Typography>



          <Grid container spacing={6}>
            {/* Left Column */}


            <Grid item size={{ xs: 12 }}>

              {subtext.map((text, index) => (
                <>
                  <Typography
                    key={index}
                    variant="subTextInterMedium"
                    sx={{ maxWidth: { lg: "693px", md: "550px" } }}
                  >
                    {text}
                  </Typography>
                  {/* <br /> */}
                </>
              ))}
            </Grid>

            {/* Right Column */}
            <Grid item size={{ xs: 12}}>
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

export default InstrumentList;
