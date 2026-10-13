import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import HostelImg from "../../../Assets/Campuslife/Hostel.jpg";
import LibraryImg from "../../../Assets/cmplife_lab2.png";
import SportsImg from "../../../Assets/Campuslife/Sports.jpg";
import StudentsImg from "../../../Assets/Campuslife/StudentUnion.png";
import clubs from "../../../Assets/Campuslife/Clubs.png";
import facilities from "../../../Assets/Campuslife/Facilities.jpg";
import Dining from "../../../Assets/Campuslife/DiningCanteen.jpg";
import Health from "../../../Assets/Campuslife/healthwellnesImageSlider1.png";
import Career from "../../../Assets/Campuslife/Career Development (2).png";
import Activities from "../../../Assets/Campuslife/Activities & Events.jpg";

import CustomCampusCard from "../../../Components/CustomCampusCard/CustomCampusCard";
import CustomBannerSection from "../../../Components/CustomBannerSection/CustomBannerSection";
import image from "../../../Assets/collage_img.jpg";

const CampusLifeMainPageAllSections = () => {
  const data = [
    {
      title: "Hostel",
      desc: "The Ethiraj College Hostel is a vibrant and close-knit community that serves as a home away from home for its residents.",
      img: HostelImg,
      detailsLink:"/campuslife/hostel"
    },
    {
      title: "Clubs",
      desc: "At Ethiraj, you can choose to participate from a wide range of clubs that cater to diverse interests and talents.",
      img: clubs,
      detailsLink:"/campuslife/clubs"
    },
    {
      title: "Sports",
      desc: "Our comprehensive sports programs offer students the opportunity to develop their athletic skills while balancing academic excellence.",
      img: SportsImg,
      detailsLink:"/campuslife/sports"


    },

    {
      title: "Facilities",
      desc: "The campus includes facilities to ensure students have everything they need for an enriching academic experience.",
      img: facilities,
      detailsLink:"/campuslife/facilities"
      
    },
    {
      title: "Library",
      desc: "The library is designed to enrich the academic experience by giving students access to knowledge, study spaces, and learning support.",
      img: LibraryImg,
      detailsLink:"/campuslife/library"
      
    },
    {
      title: "Dining & Canteen",
      desc: "We ensure exemplary dining experiences that contribute to the development of a vibrant campus community.",
      img: Dining,
    },
    {
      title: "Health & Wellness",
      desc: "The college campus is a Apollo Certified Safe Campus and provide services for our students health and wellbeing. ",
      img: Health,
      detailsLink:"/campuslife/healthandwellness"
      
      
    },
    {
      title: "Student Union",
      desc: "Our student union is responsible for maintaining a vibrant student community through events, workshops and other activities.",
      img: StudentsImg,
      detailsLink:"/campuslife/studentunion"
      
    },
    {
      title: "Career Development",
      desc: "Through our trained student counsellors we offer career development and guidance opportunities.",
      img: Career,
      detailsLink:"/campuslife/careerdevelopment"
    },
    {
      title: "Activities & Events",
      desc: "The campus includes traditions and events that bring students together and creates a thriving educational environment.",
      img: Activities,
    },
  ];
  const bannerDatas = {
    image: image,
    breadCrumbsData: [{ name: "Home", to: "/" }, { name: "Campus Life" }],
    title: "Campus Life",
  };
  return (
    <div>
      <CustomBannerSection bannerDatas={bannerDatas} />
      <Box sx={{ px: { xs: 2, sm: 3, md: "74px", lg: "94px" } }}>
        <Box sx={{ borderBottom: "1px solid black", mb: 2 }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              textAlign: "center",
              py: "50px",
            }}
          >
            At Ethiraj College for Women, we are committed to providing our
            students with a holistic and inclusive experience.
          </Typography>
        </Box>
        <Box
          sx={{
            // px: { xs: 2, sm: 3, md: 6 },
            py: { xs: 6, md: 10 },
          }}
        >
          {/* Header row */}
          <Grid container alignItems="center" spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant="headingTextNewsreaderMedium"
                sx={{
                  color: "var(--heading-text-primary)",
                  // fontFamily: "Newsreader, serif",
                  // fontStyle: "normal",
                  // fontWeight: 500,
                  // lineHeight: "52px",
                  // fontSize: { xs: "26px", sm: "32px", md: "36px", lg: "45px" },
                  mb: { xs: 2, sm: 2 },
                }}
              >
                Campus Life
              </Typography>
              <Typography
                // variant="secondaryTextInterRegular"
                //  color="text.secondary"
                //   sx={{ mt: 2, maxWidth: 922 }}
                variant="typographySubheadingText"
                // color="text.secondary"
                sx={{
                  color: "var(--brand-palatte-text-color)",
                  mb: { xs: "32px", sm: "32px" },
                  display: "block",
                  maxWidth: "922px",
                }}
              >
                With diverse activities and facilities, students enjoy a
                holistic campus experience balancing academics, clubs, events,
                and more.
              </Typography>
            </Grid>
            <Grid
              container
              spacing={{ xs: 8, md: 4 }}
              sx={{
                // mt: { xs: "94px", md: "74px", lg: "94px" },
                px: { xs: "20px", md: 0 },
              }}
            >
              {data.map((item) => (
                <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
                  <CustomCampusCard {...item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default CampusLifeMainPageAllSections;
