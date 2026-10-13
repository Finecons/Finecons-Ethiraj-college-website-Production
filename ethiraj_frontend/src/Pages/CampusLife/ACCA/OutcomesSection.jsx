import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import futureImpactImage from "../../../Assets/accaSecondImage.png";

const outcomeItems = [
   "100% Placement in MNC’s, Big four Accounting firms and opportunities in Banking, Accounting, consulting and other various sectors ",
   "Have an edge over others and well placed in coveted positions ",
   "Professionally qualified and experienced faculty from GFTI handle classes  ",
   "Opportunity to gain additional Qualifications UG degree, ACCA and M.Sc. degree offered by Oxford Brookes University, UK ",
   "Flexibility to study and progress at their own pace "
  ];

const OutcomesSection = () => {
  return (
    <Box sx={{
            //  
             
        py: { xs: "40px", sm: "50px", md: "60px", lg: "72px" } }}>
      {/* <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 3 }}> */}
          

      <Grid container spacing={{ xs: 3, md: 5 }}>
        <Grid item size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {outcomeItems.map((item, i) => (
               <React.Fragment key={i}>
                  <Typography
                    variant="typographyBodyInterMaintext"
                    sx={{ color: "#4a4f5d" }}
                  >
                    {item}
                  </Typography>
                  <Divider sx={{ borderColor: "black"}} />
                </React.Fragment>
            ))}
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={futureImpactImage}
            alt="Outcomes"
            sx={{
              width: "100%",
              height: { xs: 300, sm: "400px", md: "400px" },
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OutcomesSection;
