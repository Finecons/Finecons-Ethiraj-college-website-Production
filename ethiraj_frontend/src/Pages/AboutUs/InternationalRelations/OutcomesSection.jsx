import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";

const OutcomesSection = ({ outcomeImage, outcomeItems }) => {
  return (
    <Box sx={{
            //  
             
        py: { xs: "40px", sm: "50px", md: "60px", lg: "72px" } }}>
      {/* <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 3 }}> */}
           <Typography
                variant="subHeadingTextInterMedium"
                sx={{ color: "#81607A", mb: 3 }}
              >
        Outcomes
      </Typography>

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
            src={outcomeImage}
            alt="Outcomes"
            sx={{
              width: "100%",
              height: { xs: 260, sm: "400px", md: "100%" },
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
