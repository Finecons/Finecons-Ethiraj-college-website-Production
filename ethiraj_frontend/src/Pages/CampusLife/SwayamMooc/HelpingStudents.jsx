import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import helpingStudentImage from "../../../Assets/swayamHelps.jpg";


const helpingStudentsItems = [
  "Supplement classroom learning",
  "Explore advanced and interdisciplinary topics",
  "Prepare for placements and competitive exams",
  "Strengthen academic and professional skills",
  "Build a future-ready learning profile"
];


const HelpingStudents = () => {
  return (
    <Box sx={{
            //  

        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
             
        py: { xs: "40px", sm: "50px", md: "60px", lg: "72px" } }}>
      <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 4 }}>
           
      How Swayam helps Ethiraj Students
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
            {helpingStudentsItems.map((item, i) => (
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
            src={helpingStudentImage}
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

export default HelpingStudents;
