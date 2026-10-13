import React from "react";
import { Box, Typography, Grid } from "@mui/material";

import BannerSection from "./CustomBannerSection";
import bannerimage from "../../../Assets/ControllerofExaminationsBannerImage.jpg";
import maya from "../../../Assets/Dr. R. K. Maya.png";
import Ezhilarasi from "../../../Assets/Dr. K. Ezhilarasi Hilda Stanley.png";
import { useNavigate } from "react-router-dom";
import certificaterulespdf from "../../../Assets/CERTIFICATE-RULES-1.pdf";
import examIstructions from "../../../Assets/CODE-OF-CONDUCT-FOR-EXAMINATIONS-2.pdf";
import coeCircularPdf from "../../../Assets/COE_Circular.pdf";

const ControllerofExaminations = () => {
  const coeInchargesData = [
    {
      id: 1,
      name: "Dr. R. K. Maya",
      position: "Associate Professor and Controller of Examinations",
      qualification: "M.A., Ph.D, M.PHIL, NET",
      specialization: "Labour History, Human Rights, Womens Studies",
      image: maya,
    },
    {
      id: 2,
      name: "Dr. K. Ezhilarasi Hilda Stanley",
      position:
        "Associate Professor & Head, Additional Controller of Examinations",
      qualification: "M.SC, M.PHIL, Ph. D",
      specialization: "Graph Theory",
      image: Ezhilarasi,
    },
  ];

  const bannerDatas = {
    title: "Controller of Examinations",
    bannerimage: bannerimage,

    breadcrumbsItems: [
      { name: "Home", to: "/" },
      { name: "Academics & Departments", to: "/academicsanddepartments" },

      { name: "Controller of Examinations" },
    ],
  };

  const navigate = useNavigate();

  return (
    <Box>
      <BannerSection bannerDatas={bannerDatas} />

      {/* About COE Section */}
      <Box sx={{ mt: 4, mb: 6, px: { xs: 2, sm: 3, md: "74px", lg: "94px" } }}>
        <Typography
          variant="headingTextNewsreaderMedium"
          sx={{
            mb: { xs: "32px", sm: "32px", md: "32px", lg: "48px" },
          }}
        >
          About COE
        </Typography>

        <Typography
          variant="typographyBodyInterNormal"
          sx={{ maxWidth: { xs: "100%", md: "80%" } }}
        >
          The Office Of The Controller Of Examinations Was Established After The
          College Was Conferred Its Autonomous Status In 1999. Since Then,
          Various Examination Procedures And Examination Was Introduced. When
          The Choice Based Credit System (CBCS) Curriculum Was Implemented By
          The Tamil Nadu State Council Of Higher Education (TANSCHE) From The
          Academic Year 2008-09.
          <br />
          <br />
          The Controller Of Examinations Has Held Additional Charge As The
          Deputy Registrar (Academic) For The Automation Of The Workflow From
          Nominal Roll Creation, Entry And Submission Of Various Components Of
          Continuous Assessment Marks, Attendance, Payment Of Other Examination
          Fees, Its Reconciliation And Timely Publication Of Results Are The
          Hallmarks Of This Office. From The Academic Year 2014-2015,
          Code-m-Cert, A Security Feature In The Mark Sheets, Course Completion
          Certificates & Consolidated Mark Sheets Is Provided To The Students.
          The Office Is Sensitive To The Just Demands Of The Students And Their
          Welfare Is A Top Priority. This Office Is Currently Headed By Dr. H.
          K. Maya [Controller Of Examinations], Assisted By Dr. T. Mydhili
          [Additional Controller] As Well As A Committed Team Of 11 Technical
          And Clerical Staff.
        </Typography>
      </Box>

      {/* Examination Governance & Academic Processes Section */}
      <Box sx={{ mt: 6, mb: 8, px: { xs: 2, sm: 3, md: "74px", lg: "94px" } }}>
        <Typography
          variant="headingTextNewsreaderMedium"
          sx={{
            mb: 4,
          }}
        >
          Examination Governance & Academic Processes
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
          {/* Left Column - Image */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={bannerimage}
              alt="Examination Governance"
              sx={{
                width: { xs: "100%" },
                height: { xs: "auto", sm: "289px", md: "416px", lg: "591px" },
                borderRadius: "8px",
              }}
            />
          </Grid>

          {/* Right Column - Links */}
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(160px, max-content))",
                },
                columnGap: { xs: 0, sm: 6, md: 8 },
                rowGap: 1.5,
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Typography
                variant="typographyBodyInterNormal"
                onClick={() => {
                  navigate("/examshedule");
                }}
                sx={{
                  textDecoration: "underline",
                  color: "#003BD1",
                  cursor: "pointer",
                  width: "max-content",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Exam Schedule
              </Typography>

              <Typography
                variant="typographyBodyInterNormal"
                component="a"
                href="http://coe.ethirajcollege.in/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "underline",
                  color: "#003BD1",
                  cursor: "pointer",
                  width: "max-content",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Hall Ticket Download
              </Typography>

              <Typography
                variant="typographyBodyInterNormal"
                component="a"
                href="https://newresults.worldcolleges.info/ethirajresults/apr2026/index.php"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "underline",
                  color: "#003BD1",
                  cursor: "pointer",
                  width: "max-content",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Exam Results
              </Typography>

              <Typography
                onClick={() => {
                  navigate("/transcript");
                }}
                variant="typographyBodyInterNormal"
                sx={{
                  textDecoration: "underline",
                  color: "#003BD1",
                  cursor: "pointer",
                  width: "max-content",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Transcript Request
              </Typography>

              <Typography
                variant="typographyBodyInterNormal"
                component="a"
                href={examIstructions}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "underline",
                  color: "#003BD1",
                  cursor: "pointer",
                  width: "max-content",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Exam Instructions
              </Typography>

              <Typography
                variant="typographyBodyInterNormal"
                component="a"
                href={certificaterulespdf}
                // href="#certificate-rules"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "underline",
                  color: "#003BD1",
                  cursor: "pointer",
                  width: "max-content",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Certificate Rules
              </Typography>

              <Typography
                variant="typographyBodyInterNormal"
                component="a"
                href="http://coe.ethirajcollege.in/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "underline",
                  color: "#003BD1",
                  cursor: "pointer",
                  width: "max-content",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Fees Payments
              </Typography>

              <Typography
                variant="typographyBodyInterNormal"
                component="a"
                href={coeCircularPdf}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "underline",
                  color: "#003BD1",
                  cursor: "pointer",
                  width: "max-content",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Circular
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* COE Incharges Section */}
      <Box sx={{ mt: 8, mb: 8, px: { xs: 2, sm: 3, md: "74px", lg: "94px" } }}>
        <Typography
          variant="headingTextNewsreaderMedium"
          sx={{
            mb: { xs: "32px", sm: "32px", md: "32px", lg: "48px" },
          }}
        >
          COE Incharges
        </Typography>

        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 6 }}
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
          {coeInchargesData.map((person) => (
            <Grid item size={{ xs: 12, sm: 6, md: 3.5 }} key={person.id}>
              <Box
                sx={{
                  //   textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  //   alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={person.image}
                  alt={person.name}
                  sx={{
                    width: "100%",
                    height: { xs: 255, md: 255, lg: 305 },
                    maxWidth: { xs: 150, sm: 180, md: 200 },

                    objectFit: "contain",
                  }}
                />
                <Typography
                  variant="leadershipContentTextNewsreaderMedium"
                  sx={{ mt: { md: "18px", lg: "24px" } }}
                >
                  {person.name}
                </Typography>
                <Typography
                  variant="typographyBodyInterMaintext"
                  sx={{ mt: "5px" }}
                >
                  {person.position}
                </Typography>
                <Typography
                  variant="typographyBodyInterNormal"
                  sx={{ mt: "5px" }}
                >
                  {person.qualification}
                </Typography>
                <Box sx={{ my: { lg: "24px", md: "18px", xs: "10px" } }}>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ fontWeight: "500 !important" }}
                  >
                    Area of Specialization
                  </Typography>
                  <Typography
                    variant="typographyBodyInterNormal"
                    display="block"
                  >
                    {person.specialization}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Get in Touch Section */}
        <Box
          sx={{
            mt: 8,
            mb: 8,
          }}
        >
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              mb: { xs: "32px", sm: "32px", md: "32px", lg: "48px" },
            }}
          >
            Get in Touch
          </Typography>

          <Box sx={{ maxWidth: "600px" }}>
            <Typography variant="typographyBodyInterMaintext" sx={{}}>
              Office of the Controller of Examinations - Helpdesk
            </Typography>

            <br />

            <Typography variant="typographyBodyInterMaintext">
              No. 70, Ethiraj Salai, Egmore, Chennai - 600008, Tamil Nadu, India
            </Typography>
            <br />

            <Typography variant="typographyBodyInterMaintext">
              +91 - 044 - 28240592
            </Typography>
            <br />

            <Typography
              variant="typographyBodyInterMaintext"
              component="a"
              href="mailto:coe@ethiraj.edu.in"
              sx={{
                color: "#003BD1",
                // textDecoration: "none",
                cursor: "pointer",
                textDecoration: "underline",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              coe@ethirajcollege.edu.in
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ControllerofExaminations;
