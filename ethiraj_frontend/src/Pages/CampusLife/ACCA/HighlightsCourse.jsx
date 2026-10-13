import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import ActivitiesSection from "./ActivitiesSection";
import outcomeImage from "../../../Assets/International Realtions/OutcomesImage.png";
import futureImpactImage from "../../../Assets/International Realtions/FutureImpactImage.png";
import activitiesImage from "../../../Assets/International Realtions/activitiesImage.png";
import OutcomesSection from "./OutcomesSection";
import CollaborationSection from "./CollaborationSection";
import FutureImpactSection from "./FutureImpactSection";
import alabama from "../../../Assets/International Realtions/University of Alabama.png";
import gurukul from "../../../Assets/International Realtions/Corporate Gurukul.png";
import unizh from "../../../Assets/International Realtions/UNIZH.png";

import mentorshipImage from "../../../Assets/accaImage.png";

  const mentorshipItems = [
    "ACCA Program along with B.Com ",
    "Globally recognised Chartered Certified Accountants ",
    "5 ACCA papers exempted, only 8 exams to qualify ",
    "Strong foundation in Financial and Accounting skills  ",
    "Highly Competent Curriculum ",
    "Classes conducted at Ethiraj College Campus ",
    "continuous learning ensuring professionals to keep pace with industry needs",
  ];
 
  const collaborations = [
    {
      logo: alabama,
      name: "University of Alabama",
      location: "USA",
      type: "Academic Collaboration & MoU",
      details: [
        "Student and faculty academic interaction",
        "Exposure to international teaching-learning practices",
        "Global research and academic enrichment",
        "International immersion and cultural exchange",
      ],
    },
    {
      logo: gurukul,
      name: "Corporate Gurukul",
      location: "Singapore",
      type: "Industry-Academia Partnership",
      details: [
        "Skill development and employability enhancement",
        "Leadership and professional ethics training",
        "Experiential learning",
        "Faculty and student industry exposure",
        "Global Immersion Programs",
      ],
    },
    {
      logo: unizh,
      name: "UNIZH",
      location: "Dubai",
      type: "Industry-Academia Partnership",
      details: [
        "Exposure to global business and management practices",
        "Faculty and student academic interaction",
        "Knowledge sharing in business and organisational studies",
      ],
    },
  ];

  const futureImpactItems = [
    "Expanding global academic partnerships",
    "Increasing opportunities for student and faculty exchange programmes in top universities",
    "Encouraging collaborative international research",
    "Strengthening global engagement while preserving institutional values",
  ];

  const activitiesItems = [
    "Student and faculty exchange programs",
    "International immersion and study programs",
    "Global academic collaborations and MoUs",
    "International seminars, lectures, and cultural interactions",
    "Orientation programs for global learning experiences",
  ];
const HighlightsCourse = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },

        // py: { xs: "40px", sm: "50px", md: "60px", lg: "72px" }
      }}
    >
      <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 3 }}>
        Highlights of the Course

      </Typography>

      <Box sx={{ mb: 4 }}>
        

        <Grid container spacing={{ xs: 3, md: 5 }}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={mentorshipImage}
              alt="Mentorship and Guidance"
              sx={{
                width: "100%",
                height: { xs: 300, sm: "400px", md: "500px" },
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {mentorshipItems.map((item, i) => (
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
        </Grid>
      </Box>
      <OutcomesSection
        
      />
  
     
    </Box>
  );
};

export default HighlightsCourse;
