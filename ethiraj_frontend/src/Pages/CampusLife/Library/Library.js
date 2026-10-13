
import React from "react";
import BannerSection from "./BannerSection";
import { Box, Card, CardMedia, Grid, Paper, Typography } from "@mui/material";

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
import annualImage from "../../../Assets/libraryAnnualEvent.jpeg";
import CustomImageSliderNext from "../Hostel/FacultySection";

import umaGowrie from "../../../Assets/umaGowrie.png";
import beulah from "../../../Assets/Library/Beulah.png";
import jayanthi from "../../../Assets/jayanthi.png";
import adeline from "../../../Assets/Library/Adeline.png";
import jhone from "../../../Assets/Library/Jhone.png";
import karpagamImage from "../../../Assets/Library/karpagam.png";
import thilakavathyImage from "../../../Assets/Library/thilagavathy.png";


const Library = () => {
  const description = [
    "The campus includes a well-stocked library, fully equipped science and computer labs, a modern auditorium for events and presentations, and up-to-date equipment that enhances practical learning. These resources ensure students have everything they need for an enriching academic experience.",
  ];

  const description2 = [
    "The Ethiraj Center for Research, Innovation & Creativity (ECRIC), established serves as a dynamic hub for advancing a vibrant research ecosystem at Ethiraj College for Women. ECRIC has labs that offer a comprehensive list of research equipment.",
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
    "In recognition of efficient use of library among UG and PG students of both aided and self-supporting stream in the academic year 2024-25, a special award “Library Best User Award” was awarded the award certificate along with a cash prize for top 4 students. In addition to these, eleven students from various departments received certificates for being among the best library users for the year.",
  ];

  const committeeMembers = [
    {
      name: "Dr. S. Uma Gowrie",
      role: "Chairperson",
      dept: "Principal & Secretary, Ethiraj College for Women (Autonomous)",
      image: umaGowrie,
    },
    {
      name: "Mrs. Beulah Jebakumari Suganthi",
      role: "Convenor",
      dept: "Vice-Principal & Head, Dept. of Corporate Secretaryship ",
      image: beulah,
    },
    {
      name: "Dr. M. Jeyanthi",
      role: "Member",
      dept: "Vice Principal (SS), Head, Department of B.Com (A&F)",
      image: jayanthi,
    },

    {
      name: "Dr. Adeline G. Albert",
      role: "Member",
      dept: "Associate Professor and Head, Dept. of French ",
      image: adeline,
    },
    {
      name: "Dr. A.V. Jhone Verjhula",

      role: "Member",
      // dept: "Department of Clinical Nutrition and Dietetics",
      dept: "Associate professor and Head, Department of Physics", //aravi
      image: jhone,
    },

    {
      name: "Dr. R. Karpagam",

      role: "Librarian",
      // dept: "Department of Clinical Nutrition and Dietetics",
      image: karpagamImage,
    },
  ];

  const librarians = [
    {
      name: "Dr. R. Karpagam",
      role: "Librarian",
      // dept: "Associate Professor, Department of English",
      image: karpagamImage,
      // profileLink:"http://vidwan.inflibnet.ac.in/profile/264686" --old
      profileLink: "http://vidwan.inflibnet.ac.in/profile/284686", //aravi
    },
    {
      name: "Mrs. N. Thilakavathy",
      role: "Librarian",
      // dept: "Deputy Warden (Establishment)",
      image: thilakavathyImage,
      profileLink: "http://vidwan.inflibnet.ac.in/profile/470916",
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

  return (
    <div>
      <BannerSection />
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          py: { lg: "72px", md: "60px", xs: "20px", sm: "50px" },
        }}
      >
        <Box sx={{}}>
          <CampusLifeLabsSection
            // title="Library"
            description={libraryDescription}
          />

          <ContactSection />
          <Grid size={{ xs: 12 }}>
            <Typography
              variant="headingTextNewsreaderMedium"
              sx={{
                mb: 3,
                mt: { xs: "24px", sm: "24px", md: "34px", lg: "48px" },
              }}
            >
              Library Committee
            </Typography>

            <Typography
              variant="subHeadingTextInterMedium"
              sx={{
                color: "#6B3C58",
                mb: { xs: "20px", md: "28px" },
              }}
            >
              Commitee Members
            </Typography>
            <CustomImageSliderNext
              items={committeeMembers}
              showDefaultDetails={false}
              renderDetails={(member) => (
                <>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ color: "#4a4f5d" }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="bodyTextInterRegular"
                    sx={{ color: "#6a6f7b" }}
                  >
                    {member.dept}
                  </Typography>
                </>
              )}
              nameVariant="subHeadingTextInterMedium"
              nameSx={{ color: "#2f2f3a", mt: "12px" }}
              trackSx={{ gap: 2 }}
            />

            <Typography
              variant="subHeadingTextInterMedium"
              sx={{
                color: "#6B3C58",
                mb: { xs: "20px", md: "28px" },
                mt: { xs: "32px", md: "48px" },
              }}
            >
              Librarian
            </Typography>
            <CustomImageSliderNext
              items={librarians}
              link={true}
              viewProfile={true}
              showDefaultDetails={false}
              renderDetails={(member) => (
                <>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ color: "#4a4f5d" }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="bodyTextInterRegular"
                    sx={{ color: "#6a6f7b" }}
                  >
                    {member.dept}
                  </Typography>
                </>
              )}
              nameVariant="subHeadingTextInterMedium"
              nameSx={{ color: "#2f2f3a", mt: "12px" }}
              trackSx={{ gap: 2 }}
            />
          </Grid>

          <Box
            sx={{
              // py: { lg: "43.2px", md: "36px", xs: "12px", sm: "30px", }
              py: { lg: "72px", md: "60px", xs: "20px", sm: "50px" },
            }}
          >
            {/* <CustomGallerySildeShow2 images={Images2} /> */}
            <ImageGallerySection images={Images2} />
          </Box>
        </Box>
        <Box id="annual-association-event">
          <Box>
            <Typography
              variant="headingTextNewsreaderMedium"
              fontWeight={600}
              sx={{ textAlign: "center" }}
            >
              Annual Event
            </Typography>
            <Grid container spacing={3} sx={{ mt: 3 }}>
              {/* ================= IMAGE COLUMN ================= */}
              <Grid size={{ xs: 12 }}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: "none",
                    width: "100%",
                    height: "100%", // follows content height
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={annualImage}
                    alt="Annual Association Event"
                    sx={{
                      width: "100%",
                      height: {
                        xs: "350px",
                        sm: "450px",
                        md: "550px",
                        lg: "649px",
                      },
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Card>
              </Grid>

              {/* ================= CONTENT COLUMN ================= */}

              <Grid size={{ xs: 12 }}>
                <Typography
                  variant="typographyBodyInterNormal"
                  sx={{ mb: "16px" }}
                >
                  Cornucopia is an annual feature of the Library of Ethiraj
                  College for Women. This year, Cornucopia – Library
                  Association, was held on August 12, 2025, at our campus to
                  motivate and expose the students to the culture of reading
                  good thought-provoking books. The Cornucopia annual event was
                  felicitated by Dr. S. Uma Gowrie, Principal &amp; Secretary
                  and the inaugural address was delivered by Thiru Selventhiran.
                  He emphasized the need to visit a Library to search for hidden
                  treasures. He suggested that young minds read anything they
                  could lay their hands on and thus ultimately cultivate the
                  habit of reading. He shared his experiences with fun-filled
                  stories that engaged the audience.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Library;
