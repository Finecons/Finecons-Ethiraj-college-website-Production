import React from "react";
import BannerSection from "./BannerSection";
import { Box, Grid, Paper, Typography } from "@mui/material";

import CampusLifeLabsSection from "../../../Components/CampusLifeLabsSection/CampusLifeLabsSection";
import facilityImage1 from "../../../Assets/research_image3.jpg";
import facilityImage2 from "../../../Assets/research21.jpg";
import facilityImage3 from "../../../Assets/researchHome3.jpg";
import ContactSection from "./ContactSection";
import cmplife_lab1 from "../../../Assets/cmplife_lab1.png";
import cmplife_lab2 from "../../../Assets/cmplife_lab2.png";
import cmplife_lab3 from "../../../Assets/cmplife_lab3.png";
import ImageGallerySection2 from "../../../Components/CustomGallerySildeShow/ImageGallerySection2";
import ImageGallerySection from "../../../Components/CustomGallerySildeShow/ImageGallerySection";
import computerLabImage1 from "../../../Assets/computerab1.jpg";
import computerLabImage2 from "../../../Assets/Computing facilities with internet access.jpg";
import auditoriumImage1 from "../../../Assets/auditorium1.jpg";
import auditoriumImage2 from "../../../Assets/auditorium2.jpg";
import auditoriumImage3 from "../../../Assets/auditorium3.png";
import canteeImage1 from "../../../Assets/canteen1.jpg";
import canteeImage2 from "../../../Assets/canteen2.jpg";
import canteeImage3 from "../../../Assets/canteen3.jpg";
import canteeImage4 from "../../../Assets/canteen4.jpg";

const Facilities = () => {
  const description = [
    "The campus includes a well-stocked library, fully equipped science and computer labs, a modern auditorium for events and presentations, and up-to-date equipment that enhances practical learning. These resources ensure students have everything they need for an enriching academic experience.",
  ];

  const description2 = [
    "The Ethiraj Center for Research, Innovation & Creativity (ECRIC), established serves as a dynamic hub for advancing a vibrant research ecosystem at Ethiraj College for Women. ECRIC has labs that offer a comprehensive list of research equipment.",
  ];

  const computerLabsDescription = [
    "Ethiraj College for Women is equipped with state-of-the-art computer laboratories featuring the latest hardware and software, high-speed internet connectivity, and a conducive learning environment — preparing students with practical expertise essential for today's competitive world.",
  ];

  const auditoriumsDescription = [
    "The Ethiraj College auditorium is a spacious, well-equipped venue designed to host academic events, seminars, and cultural events, providing students and faculty a vibrant platform to showcase their talents, ideas, and achievements.",
  ];

  const canteenDescription = [
    "The Ethiraj College canteen offers a warm, hygienic, and affordable culinary space featuring a variety of nutritious meals and refreshments that keep the Ethiraj community energized and refreshed throughout the day.",
  ];

  const librarySections1 = [
    {
      title: "Related Links",
      links: [
        {
          label: "View List of Instruments",
          url: "#",
        },
        {
          label: "Learn more about ECRIC",
          url: "#",
        },
      ],
    },
  ];

  const libraryDescription = [
    "The Library is a central part of campus life and academic learning, supporting students with high-quality resources, technology, and study spaces. Students have access to a vast collection of over 1.17 lakh books, along with M.Phil. and Ph.D. theses, and a strong mix of national and international print journals. Digital learning is supported through 95,000+ online journals and e-books available via INFLIBNET N-LIST and EBSCO databases.",
    "The Library is fully automated with RFID technology and upgraded management software, ensuring easy access and efficient services. Individual study spaces with desktop computers allow students to comfortably explore e-resources and work independently, making the Library an essential part of everyday campus learning.",
  ];

  const librarySections = [
    {
      title: "Related Links",
      links: [
        {
          label: "General Rules",
          url: "#",
        },
        {
          label: "Book Lending & Circulation Rules",
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          label: "Open Access Databases",
          url: "#",
        },
        {
          label: "Open Access E-Journals",
          url: "#",
        },
      ],
    },
  ];

  const Images = [
    {
      title: "img1",
      img: facilityImage3,
    },
    {
      title: "img2",
      img: facilityImage2,
    },
    {
      title: "img3",
      img: facilityImage1,
    },
  ];

  const Images2 = [
    {
      title: "img1",
      img: cmplife_lab1,
    },
    {
      title: "img2",
      img: cmplife_lab2,
    },
    {
      title: "img3",
      img: cmplife_lab3,
    },
  ];

  const computerLabImages = [
    {
      title: "Computer Lab 1",
      img: computerLabImage1,
    },
    {
      title: "Computer Lab 2",
      img: computerLabImage2,
    },
  ];

  const auditoriumImages = [
    {
      title: "Auditorium 1",
      img: auditoriumImage1,
    },
    {
      title: "Auditorium 2",
      img: auditoriumImage2,
    },
    {
      title: "Auditorium 3",
      img: auditoriumImage3,
    },
  ];

  const canteenImages = [
    {
      title: "Canteen 1",
      img: canteeImage1,
    },
    {
      title: "Canteen 2",
      img: canteeImage2,
    },
    {
      title: "Canteen 3",
      img: canteeImage3,
    },
    {
      title: "Canteen 4",
      img: canteeImage4,
    },
  ];

  return (
    <div>
      <BannerSection />
      <Box sx={{ px: { xs: 2, sm: 3, md: "74px", lg: "94px" }, py: { lg: "72px", md: "60px", xs: "20px", sm: "50px" }, }}>
        <Box sx={{ mb: 2 }}>
          <Paper
            elevation={0}
            sx={{
              background: "none",
            }}
          >
            <Grid container spacing={6}>
              <Grid item size={{ xs: 12, md: 6 }}>
                {description.map((text, index) => (
                  <>
                    <Typography
                      key={index}
                      variant="typographySubheadingText"
                      sx={{
                        color: "var(--brand-palatte-text-color)",
                      }}
                    >
                      {text}
                    </Typography>
                    <br />
                  </>
                ))}
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Box>
          <CampusLifeLabsSection
            title="Research Labs"
            description={description2}
            sections={librarySections1}
          />
          <Box
            sx={{
              pb: { lg: "43.2px", md: "36px", xs: "12px", sm: "30px", }
            }}
          >
            <ImageGallerySection2 images={Images} />
          </Box>

          {/* Computer Labs Section */}
          <CampusLifeLabsSection
            title="Computer Labs"
            description={computerLabsDescription}
            sections={[]}
          />
          <Box
            sx={{
              pb: { lg: "43.2px", md: "36px", xs: "12px", sm: "30px", }
            }}
          >
            <ImageGallerySection2 images={computerLabImages} />
          </Box>

          {/* Auditoriums Section */}
          <CampusLifeLabsSection
            title="Auditoriums"
            description={auditoriumsDescription}
            sections={[]}
          />
          <Box
            sx={{
              pb: { lg: "43.2px", md: "36px", xs: "12px", sm: "30px", }
            }}
          >
            <ImageGallerySection2 images={auditoriumImages} />
          </Box>

          {/* Canteen Section */}
          <CampusLifeLabsSection
            title="Canteen"
            description={canteenDescription}
            sections={[]}
          />
          <Box
            sx={{
              pb: { lg: "43.2px", md: "36px", xs: "12px", sm: "30px", }
            }}
          >
            <ImageGallerySection2 images={canteenImages} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Facilities;
