import React from "react";
import { Box, Typography } from "@mui/material";

const AboutSwayamMOOCs = () => {
  const goalPoints = [
   "SWAYAM (Study Webs of Active-Learning for Young Aspiring Minds) is the Government of India’s online learning platform that offers quality courses developed by top institutions such as IITs, IIMs, Central Universities, NPTEL, UGC, CEC, NCERT, and IGNOU.",
   "At Ethiraj College for Women, SWAYAM supports students in expanding their academic knowledge, exploring interdisciplinary subjects, and gaining industry-relevant skills through flexible online learning."
  ];

  return (
    <Box sx={{
              px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
         py: { xs: "40px", sm: "50px", md: "60px", lg: "72px" } }}>
      <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 3 }}>
        About Swayam
      </Typography>
      <Typography
        variant="typographyBodyInterMaintext"
        sx={{
          width: { xs: "100%", md: "60%" },
          mb: 2,
        }}
      >
       SWAYAM (Study Webs of Active-Learning for Young Aspiring Minds) is the Government of India’s online learning platform that offers quality courses developed by top institutions such as IITs, IIMs, Central Universities, NPTEL, UGC, CEC, NCERT, and IGNOU.
      </Typography>
       <Typography
        variant="typographyBodyInterMaintext"
        sx={{
          width: { xs: "100%", md: "60%" },
          mb: 2,
        }}
      >

At Ethiraj College for Women, SWAYAM supports students in expanding their academic knowledge, exploring interdisciplinary subjects, and gaining industry-relevant skills through flexible online learning.
      </Typography>
      
    </Box>
  );
};

export default AboutSwayamMOOCs;
