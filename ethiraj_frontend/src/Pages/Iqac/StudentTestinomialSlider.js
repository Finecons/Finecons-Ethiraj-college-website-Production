import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const studentSayAboutOutCollege11 = [
  {
    text: "Ethiraj has been a remarkable journey that shaped my academic and personal growth. From being part of the PIT Committee, publishing research papers, and completing internships to organising events and engaging in social initiatives like blood donation and teaching, every experience helped me discover my potential. I’m truly grateful to Ethiraj.",
    name: "Sara Fiza M",
    course: "Masters of Computer Applications",
    year: "2025",
    img: "https://i.pravatar.cc/100?img=47",
  },
  {
    text: "The faculty at Ethiraj always encouraged us to take up challenges. My leadership and communication skills improved tremendously here.",
    name: "Priya S",
    course: "B.Com Accounting & Finance",
    year: "2024",
    img: "https://i.pravatar.cc/100?img=32",
  },
  {
    text: "Being part of multiple extracurricular activities helped me balance both academics and personal development. Truly a memorable journey!",
    name: "Anitha R",
    course: "B.Sc Computer Science",
    year: "2023",
    img: "https://i.pravatar.cc/100?img=12",
  },
];

const TestimonialSlider = ({ studentSayAboutOutCollege }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % studentSayAboutOutCollege?.length);
  };

  const handlePrev = () => {
    setIndex(
      (prev) =>
        (prev - 1 + studentSayAboutOutCollege?.length) %
        studentSayAboutOutCollege?.length
    );
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="headingTextNewsreaderMedium">
        What do our past <br /> students say about us?
      </Typography>

      <Paper
        elevation={0}
        sx={{
          mt: 4,
          mx: "auto",
          p: {
            l: "100px 100px",
            md: "80px 80px",
            sm: "100px 24px",
            xs: "48px 24px",
          },
          //   maxWidth: 900,
          bgcolor: "#FBEAFE",
          borderRadius: 4,
          textAlign: "left",
        }}
      >
        <Typography
          variant="typographySliderText"
          sx={{ fontFamily: "Inter !important" }}
        >
          {studentSayAboutOutCollege[index]?.description}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          // justifyContent="center"
          sx={{
            mt: { lg: "48px", md: "35px", xs: "20px" },
            gap: "16px",
            ml: "20px",
          }}
        >
          <Avatar
            src={studentSayAboutOutCollege[index]?.studentImage_url}
            sx={{
              //   width: 50,
              //   height: 50,
              width: { md: "98px", xs: "90px" },
              height: { md: "131px", xs: "100px" },
              // aspectRatio: "98/131",
              borderRadius: { md: "131px", xs: "80px" },
              objectFit: "cover",
            }}
          />
          <Box>
            <Typography
              variant="typographyCardContentHeading"
              sx={{ fontWeight: "600 !important", fontFamily: "Newsreader" }}
            >
              {studentSayAboutOutCollege[index]?.student_name}
            </Typography>
            <Typography
              variant="typographyBodyInterMaintext"
              sx={{ fontFamily: "Inter !important" }}
            >
              {studentSayAboutOutCollege[index]?.program}
            </Typography>
            <Typography
              variant="typographyTableTextNewsreader"
              sx={{ fontFamily: "Inter !important" }}
            >
              {studentSayAboutOutCollege[index]?.year}
            </Typography>
          </Box>
        </Stack>
      </Paper>

      {/* Dots */}

      {studentSayAboutOutCollege?.length > 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction="row" justifyContent="center" spacing={1} mt={3}>
            {studentSayAboutOutCollege?.map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  bgcolor: index === i ? "#5B2E90" : "#C0C0C0",
                  cursor: "pointer",
                }}
                onClick={() => setIndex(i)}
              />
            ))}
          </Stack>
          {/* Navigation Buttons */}
          <Stack direction="row" spacing={2} justifyContent="end" mt={3}>
            <IconButton onClick={handlePrev} sx={{ border: "1px dashed #999" }}>
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={handleNext} sx={{ border: "1px dashed #999" }}>
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default TestimonialSlider;
