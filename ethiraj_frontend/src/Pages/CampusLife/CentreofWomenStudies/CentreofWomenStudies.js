import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import bannerImage from "../../../Assets/WomenStudies/womenStudiesBanner.jpg";
import downloadPdfIconImage from "../../../Assets/downloadpdfIconImage.png";
// import CustomImageSliderNext from "./FacultySection";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CustomBannerSection from "../../../Components/CustomBannerSection/CustomBannerSection";
import CustomImageSliderNext from "./FacultySection";
import Activities from "./Activities";

import shyamala from "../../../Assets/WomenStudies/shyamala.png";
import geethalakshmi from "../../../Assets/WomenStudies/geethalakshmi.png";
import activity1 from "../../../Assets/WomenStudies/activityImage1.png";
import activity2 from "../../../Assets/WomenStudies/activityImage2.png";
import activity3 from "../../../Assets/WomenStudies/activityImage3.png";
import activity4 from "../../../Assets/WomenStudies/activityImage4.png";
import activity5 from "../../../Assets/WomenStudies/activityImage5.png";


const CentreofWomenStudies = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handledownloadFile = async (pdfUrl) => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();

      const fileURL = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = fileURL;
      link.download = "Activity&Achiements.pdf"; // 🔥 forces download
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(fileURL);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const bannerDatas = {
    image: bannerImage,
    breadCrumbsData: [
      { name: "Home", to: "/" },
      {name:"Career Development", to:"/campuslife/careerdevelopment"},
      { name: "Centre of Women's Studies" },
    ],
    title: "Centre of Women's Studies",
  };

  const programOutcomes = [
    {
      title: "Gender & Society",
      description:
        "Understanding how gender is socially constructed and examining its profound impact on societal roles, norms, and everyday human experiences.",
    },
    {
      title: "Gender & Health",
      description:
        "Investigating the critical intersection of gender and health, spanning the full spectrum from prenatal care to menopause and women's overall well-being.",
    },
    {
      title: "Gender in STEM & the Workforce",
      description:
        "Exploring gender biases in scientific fields, women's representation in STEM, and workplace barriers such as stereotypes and the glass ceiling.",
    },
    {
      title: "Gender in Media, Arts & Governance",
      description:
        "Examining how women are represented in arts, media, and political governance, and how these narratives shape and influence societal perceptions.",
    },
  ];

  // Faculty data for the section
  const facultyData = [
    {
      name: "Dr. B. Shyamala",
      title:
        "Associate Professor, Post graduate and Research Department of Economics",
      qualification: "",
      specialization: "",
      image:shyamala,
      email: "Mob No : +91 9384619797",
      stream: "Aided",
    },
    {
      name: "Dr. R. Geetha Lakshmi",
      title:
        "Associate Professor and Head, Department of Corporate Secretaryship",
      qualification: "",
      specialization: "",
      image:geethalakshmi,
      email: "Mob No : +91 9884440854",
      stream: "Self-Supporting",
    },
  ];

  const activitiesData = [
    {
      academicYear: "2025 - 2026",
      activities: [
        {
          id: 1,
          title: "Breaking Barriers, Building Bridges",
          imageUrl: activity1,
          description:
            "On 26th August 2025, the Centre for Women's Studies, Ethiraj College, celebrated Women's Equality Day at M.Ct. Muthaiah Chettiar Boys Higher Secondary School, Purasaiwakkam. Themed 'Breaking Barriers, Building Bridges,' the outreach programme engaged 450 students through dance, singing, street play, and Silambam, promoting gender equality and sensitization.",
        },
        {
          id: 2,
          title: "Effective Management of Emotions and Resilience",
          imageUrl: activity2,
          description:
            "A workshop on 'Effective Management of Emotions and Resilience' by Ms. Kavitha Hariharan, Counselling Psychologist and Sex Educator at Apollo Shine and Ms. Vanitharaj W, Student Counsellor at Ethiraj College for Women was also conducted, focusing on emotional well-being and mental strength. The celebration encouraged confidence, leadership, and empowerment among students.",
        },
        {
          id: 3,
          title: "International Day for the Elimination of Violence Against Women",
          imageUrl: activity3,
          description:
            "On 27th November 2025, the Centre observed the International Day for the Elimination of Violence Against Women through a pledge and awareness activities. Students conducted a face painting campaign and classroom outreach, encouraging peers to reflect on gender-based violence. The initiative reached approximately 6,000 students and reinforced commitment towards a safe and inclusive campus.",
        },
        {
          id: 4,
          title: "Year End Reflection & Gratitude Wall",
          imageUrl: activity4,
          description:
            "On 22nd December 2025, the Centre organized 'Year End Reflection' as an emotional well-being initiative. Activities such as 'Bursting the Burden' and the 'Gratitude Wall' provided students with a space for emotional expression and reflection. Around 550 balloons were burst, indicating enthusiastic participation. The programme promoted positivity and emotional resilience.",
        },
        {
          id: 5,
          title: "Self-Defense Workshop for National Girl Child Day",
          imageUrl: activity5,
          description:
            "On 29th January 2026, the Centre organized a Self-Defense Workshop in observance of National Girl Child Day. The session introduced students to basic defensive techniques and safety strategies. A total of 100 students participated actively. The workshop enhanced confidence and awareness regarding personal safety.",
        },
      ],
    },
  ];
  return (
    <Box
      sx={{
        mt: 4,
        mb: 6,
        // px: { xs: 2, sm: 3, md: 4, lg: 6 },
        // px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
      }}
    >
      {/* Breadcrumb */}
      <CustomBannerSection bannerDatas={bannerDatas} />

      <Box
        sx={{
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
        }}
      >
        <Box
          sx={{
            py: { lg: "24px", md: "18px", sm: "20px", xs: "8px" },
          }}
        >
          {/* Description */}
          <Typography
            variant="typographyBodyInterMaintext"
            sx={{ mt: 2, mb: 3, color: "black" }}
          >
            The Centre for Women's Studies at Ethiraj College stands as a beacon
            for Women Empowerment and Equality. Guided by esteemed Directors in
            the past, the Centre is dedicated to fostering Gender Awareness
            through impactful Outreach Programs, Dynamic Workshops, and
            thought-provoking Seminars and Conferences. Notable achievements
            include hosting an International Conference and conducting numerous
            Outreach Programs in schools and colleges and observance of
            important days. Membership
          </Typography>
        </Box>

        <Divider
          sx={{ borderColor: "black" }}
          //   sx={{ my: 3 }}
        />

        {/* Course Info */}
        <Grid container spacing={3} sx={{ padding: "20px 10px" }}>
          <Grid item size={{ md: 4, xs: 6 }}>
            <Typography
              variant="headingTextInterMedium"
              sx={{ color: "#6B3C58", mb: "10px" }}
            >
              Course
            </Typography>
            <Typography variant="typographyBodyInterNormal">
              60 hours (40 hours of class and 20 hours of field work)
            </Typography>
            {/* <Typography variant="typographyBodyInterNormal">
               {courseData.degreeDuration}
             </Typography> */}
          </Grid>

          <Grid
            item
            size={{ xs: 6, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
              alignItems: { xs: "start", md: "center" },
            }}
          >
            <Box>
              <Typography
                variant="headingTextInterMedium"
                sx={{ color: "#6B3C58", mb: "10px" }}
              >
                Stream
              </Typography>
              {/* {courseData.streams.map((stream, i) => ( */}
              <Typography variant="typographyBodyInterNormal">
                Self Supporting
              </Typography>
              {/* ))} */}
            </Box>
          </Grid>

          <Grid
            item
            size={{ xs: 6, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
              alignItems: { xs: "start", md: "center" },
            }}
          >
            <Box>
              <Typography
                variant="headingTextInterMedium"
                sx={{ color: "#6B3C58", mb: "10px" }}
              >
                Credits
              </Typography>
              <Typography variant="typographyBodyInterNormal">2</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider
          sx={{ borderColor: "black" }}
          //   sx={{ my: 3 }}
        />

        {/* Program Outcomes */}
        <Grid container spacing={3} sx={{ mt: 6 }}>
          <Grid item size={{ xs: 12, md: 5 }}>
            <Typography
              variant="headingTextNewsreaderMedium"
              sx={{ mt: { sm: "30px", xs: "12px", md: 0 } }}
            >
              Program Outcomes
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, md: 7 }}>
            <Grid container columnSpacing={6} rowSpacing={4}>
              {programOutcomes?.map((item, index) => (
                <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                  <Typography variant="headingTextInterMediumProgram">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="typographyBodyInterNormal"
                    //
                    sx={{ mt: { sm: "16px", xs: "8px" } }}
                  >
                    {item.description}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* <Divider sx={{ my: 6 }} /> */}

        {/* Syllabus, Value Added Courses, Career Paths */}
        <Grid
          container
          spacing={4}
          sx={{ mt: { lg: "96px", md: "80px", sm: "60px", xs: "60px" } }}
        >
          {/* Syllabus */}

          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography variant="headingTextNewsreaderMedium">
              Syllabus
            </Typography>
            <Typography
              variant="typographyBodyInterNormal"
              sx={{ mt: { xs: "40px" } }}
            >
              This interdisciplinary certificate course explores the concept of
              gender and its profound influence on society. It critically
              examines how gender roles are socially constructed and how they
              shape human experiences across health, education, work, science,
              media, and politics — equipping students with the knowledge and
              skills to champion Gender Equality and Women's Rights.
            </Typography>
            <Button
              component="a"
              // href={syllabus?.pdfUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<Box component="img" src={downloadPdfIconImage} />}
              // disabled={!syllabus?.pdfUrl}
              sx={{
                //   mt: 2,
                textTransform: "none",
                borderRadius: "24px",
                borderColor: "#000",
                color: "#000",
                mt: { xs: "80px", md: "50px", lg: "80px" },
              }}
            >
              <Typography
                variant="typographyBodyInterNormal"
                sx={{ fontSize: "14px !important" }}
              >
                {/* {syllabus.buttonText} */}
                Download the Syllabus
              </Typography>
            </Button>
            {/* <Divider /> */}
          </Grid>
        </Grid>

        {/* <FacultySection facultyData={facultyData} /> */}
        <Box sx={{ mt: { lg: "96px", md: "80px", sm: "60px", xs: "60px" } }}>
          <Typography variant="headingTextNewsreaderMedium" fontWeight={600}>
            Faculty Members
          </Typography>

          <Box sx={{ mt: 3 }}>
            <CustomImageSliderNext items={facultyData} link={true} />
          </Box>
        </Box>

        <Box sx={{ mt: { lg: "96px", md: "80px", sm: "60px", xs: "60px" } }}>
          <Activities activitiesData={activitiesData} />
        </Box>

        {/* Contact Details Section */}
        <Box sx={{ my: { lg: "96px", md: "80px", sm: "60px", xs: "60px" } }}>
          <Typography variant="headingTextInterMediumProgram" sx={{ mb: 1 }}>
            Contact Details
          </Typography>
          <Typography variant="typographyBodyInterNormal">
            <a
              href="mailto:womenstudiescentre@ethirajcollege.edu.in"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              womenstudiescentre@ethirajcollege.edu.in
            </a>
          </Typography>
        </Box>
        {/* Admissions Section */}
      </Box>
    </Box>
  );
};

export default CentreofWomenStudies;
