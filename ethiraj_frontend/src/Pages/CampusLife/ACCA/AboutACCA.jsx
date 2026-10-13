import React from "react";
import { Box, Typography } from "@mui/material";

const AboutACCA = () => {


  return (
    <Box sx={{
              px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
         py: { xs: "40px", sm: "50px", md: "60px", lg: "72px" } }}>
      <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 3 }}>
        About ACCA
      </Typography>
      <Typography
        variant="typographyBodyInterMaintext"
        sx={{
          width: { xs: "100%", md: "60%" },
          mb: 2,
        }}
      >
        ACCA is a global body for Professional Accountants offering the Chartered Certified Accountant qualification. The course is designed for individuals seeking global recognition in the Accounting and Finance industry. ACCA is suitable for students seeking careers in global financial and accounting roles and are highly sought after due to their comprehensive knowledge, global recognition and adherence to ethical standards.  Ethiraj College for Women in association with Department of Corporate Secretaryship entered into a MOU in the year 2014.  
 
      </Typography>
     
    </Box>
  );
};

export default AboutACCA;
