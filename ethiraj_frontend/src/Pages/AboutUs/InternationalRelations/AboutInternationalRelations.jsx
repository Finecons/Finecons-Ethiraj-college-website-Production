import React from "react";
import { Box, Typography } from "@mui/material";

const AboutInternationalRelations = () => {
  const goalPoints = [
    "To provide international exposure rooted in ethical and cultural values",
    "To strengthen academic and research collaboration with global institutions",
    "To prepare students for global citizenship",
    "To uphold the institution's legacy through responsible international engagement",
  ];

  return (
    <Box sx={{
              px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
         py: { xs: "40px", sm: "50px", md: "60px", lg: "72px" } }}>
      <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 3 }}>
        About Centre for International Relations
      </Typography>
      <Typography
        variant="typographyBodyInterMaintext"
        sx={{
          width: { xs: "100%", md: "60%" },
          mb: 2,
        }}
      >
        The Centre for International Relations works to strengthen our
        institution's global connections while preserving its rich heritage.
        It facilitates international academic partnerships, student
        exposure, and faculty collaboration, ensuring global learning
        opportunities aligned with our institution's long-standing mission.
        Our goal is to
      </Typography>
      <Box component="ul" sx={{ pl: 6 }}>
        {goalPoints.map((item, i) => (
          <Typography
            key={i}
            component="li"
            variant="typographyBodyInterNormal"
            sx={{ mb: 1 }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default AboutInternationalRelations;
