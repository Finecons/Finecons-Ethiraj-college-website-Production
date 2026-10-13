import React from "react";
import { Box, Typography, Button, Link, Grid, Divider } from "@mui/material";
import CustomNextButton from "../../../Components/CustomNextButton/CustomNextButton";

import ConsultancyPolicy from "../../../Assets/Consultancy Policy.pdf";
import consultacyImage from "../../../Assets/fellowshipslastimage.jpg";

const ConsultancySection = ({consultancyDatas}) => {
  console.log(consultancyDatas, "consultancyDatas");

  // Extract policy URLs from consultancyDatas if available
  const consultancyPolicyUrl = consultancyDatas?.[0]?.additional_data?.consultancy_policy || ConsultancyPolicy;
  const pastProjectsUrl = consultancyDatas?.[0]?.additional_data?.past_projects || "#";

  return (
    <Box id="consultancy" sx={{ py: { xs: "64px", sm: "64px", md: "60px", lg: "80px" } }}>
      {/* Top Divider */}

      {/* Top Content */}
      <Grid container spacing={4} sx={{ justifyContent: "space-between" }}>
        {/* Left Content */}
        <Grid size={{ xs: 12 }} sx={{ order: { xs: 2, md: 1 } }}>
          <Grid container spacing={4}>
            <Grid item size={{ xs: 12, sm: 7, md: 8 }}>
              <Typography
                variant="headingTextNewsreaderMedium"
                sx={{ fontWeight: "500 !important" }}
                gutterBottom
              >
                Consultancy
              </Typography>

              <Typography variant="secondaryTextInterRegular" sx={{ mb: 3 }}>
                Consultancy services at Ethiraj College for Women offer
                individuals and organizations access to faculty expertise for
                consultancy projects tailored to specific requirements. Through
                these engagements, the College provides structured academic
                support while ensuring professional execution and
                knowledge-based solutions.
              </Typography>

              <CustomNextButton
                buttonText="FILL AN INQUIRY FORM"
                background="#5D5A84"
                color="white"
              />
            </Grid>

            {/* Right Links */}
            <Grid
              item
              size={{ xs: 12, sm: 5, md: 4 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: {xs:"flex-start" ,sm: "center", md: "flex-end" },
                gap: 2,
              }}  
            >
              <Box>
                <Typography
                  variant="subHeadingTextInterMedium"
                  fontWeight={600}
                  gutterBottom
                >
                  Important Links
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {/* <Link href={ConsultancyPolicy} underline="hover">
              Consultancy Policy
            </Link> */}

                  <Typography
                    variant="typographyBodyInterNormal"
                    component="a"
                    href={consultancyPolicyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#003BD1",
                      // textDecoration: "none",
                      // fontWeight: 500,
                    }}
                  >
                    Consultancy Policy
                  </Typography>
                  {/* <Link href="#" underline="hover">
              Past Projects
            </Link> */}

                  <Typography
                    variant="typographyBodyInterNormal"
                    component="a"
                    href={pastProjectsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#003BD1",
                      // textDecoration: "none",
                      // fontWeight: 500,
                    }}
                  >
                    Past Projects
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          size={{ xs: 12 }}
          sx={{ mt: { xs: "20px", md: "20px" }, order: { xs: 1, md: 2 } }}
        >
          {/* Image Section */}
          <Box
            sx={{
              // mt: 6,
              borderRadius: 3,
              // overflow: "hidden",
              // height: { xs: 220, md: 360 },
            }}
          >
            <Box
              component="img"
              src={consultacyImage}
              alt="Consultancy Discussion"
              sx={{
                width: "100%",
                // height: { xs: "235px", sm: "373px", md: "543px", lg: "743px" },
                objectFit: "cover",
                flexShrink: { xs: 0, sm: 1, lg: 1 },
                alignSelf: "stretch",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConsultancySection;
