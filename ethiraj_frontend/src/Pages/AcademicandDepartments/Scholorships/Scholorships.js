import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CustomBannerSection from "../../../Components/CustomBannerSection/CustomBannerSection";
import CustomImageSlider from "../../../Components/CustomImageSlider/CustomImageSlider";
import scholorImage from "../../../Assets/scholarshipsBannerImage.png";
import gallery1 from "../../../Assets/scholarshipGalleryImage2.jpg";

import ImageWidthSlider from "./ImageWidthSlider";

const Scholorships = ({ isMainTabsActive, mainTabsRef }) => {
  const bannerDatas = {
    image: scholorImage,
    breadCrumbsData: [
      { name: "Home", to: "/" },
      { name: "Academics", to: "/academics" },
      { name: "Scholarships" },
    ],
    title: "Scholarships",
  };

  const scholarshipData = [
    {
      name: "75th YearJubilee Celebration Scholarship - Right From Ethiraj (RFE)",
      description:
        "The Scholarship is instituted by the Management to 20 students from economically lower background, particularly those raised by single parent and those with notable sports achievement. The Scholarship is paid for the entire course.",
    },
    {
      name: "Shyam Kothari Excellence Award -One Time Educational Scholarship",
      description:
        "One time educational scholarship by Shyam Kothari Foundation to the deserving economically weak students.",
    },
    {
      name: "Laxmi Charities",
      description:
        "Scholarship to meritorious students to pursue higher education without financial hardship.",
    },
    {
      name: "Management Scholarship",
      description:
        "Scholarship to the deserving student from each class every year on Merit cum Means basis.",
    },
    {
      name: "Shyam Kothari Endowment Scholarship",
      description: "Scholarship to 12 Best Outgoing Students every year.",
    },
    {
      name: "Endowment Scholarship",
      description:
        "Many other Endowment Scholarships on Merit cum Means basis to the deserving students.",
    },
  ];

  const galleryImages = [
    { src: scholorImage, alt: "Gallery 1", size: "large" },
    { src: gallery1, alt: "Gallery 2", size: "large" },

  ];

  return (
    <Box>
      <CustomBannerSection bannerDatas={bannerDatas} />
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          pb: { lg: "72px", md: "60px", xs: "20px", sm: "50px" },
        }}
      >
        <Typography
          variant="typographyBodyInterMaintext"
          sx={{
            my: { lg: "72px", md: "60px", xs: "40px", sm: "50px" },
            color: "#333",
          }}
        >
          Our College is committed to promote Inclusive and Quality Education by
          providing various scholarship opportunities to the deserving and
          meritorious students. Scholarships are offered to support students
          from economically weaker sections, socially disadvantaged backgrounds,
          and those who demonstrate outstanding Academic Excellence and Sports
          Achievements.
        </Typography>
        {/* Scholarship Information Section */}
        <Box >
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
           
                           color: "#333",
            }}
          >
            Scholarship Information
          </Typography>

          <Typography
          variant="typographyBodyInterMaintext"
            sx={{
              my: { xs: "24px", sm: "24px", md: "34px", lg: "48px" }
          
            }}
          >
            Ethiraj College for Women offers a wide range of scholarships
            including government, merit-based, management, alumni-funded, and
            sports awards — ensuring financial support reaches every deserving
            student.
          </Typography>

      <Box
          sx={{
            // mt: 4,
            // pt: { lg: "52px", md: "40px", xs: "20px", sm: "30px" },
          }}
        >
         
    
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            {scholarshipData.map((row, idx) => (
              <Box key={idx} sx={{ pb: 2.5, mb: 2.5, borderBottom: "1px solid #b6bcc6" }}>
                <Typography
                  variant="secondaryTextInterRegular"
                  sx={{ color: "#8b94a1", mb: 1 }}
                >
                  NAME OF THE SCHOLARSHIP
                </Typography>
                <Typography variant="typographyBodyInterMaintext" sx={{ fontFamily:"Newsreader",color: "#1f1f1f", mb: 2.5 }}>
                  {row.name}
                </Typography>
    
                <Typography
                  variant="secondaryTextInterRegular"
                  sx={{ color: "#8b94a1", mb: 1 }}
                >
            DESCRIPTION
                </Typography>
                <Typography variant="typographyBodyInterNormal" sx={{ color: "#1f1f1f" }}>
                  {row.description ||
                    "Description will be updated soon."}
                </Typography>
              </Box>
            ))}
          </Box>
    
          <TableContainer sx={{ boxShadow: "none", display: { xs: "none", sm: "block" } }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      color: "#999999",
                      width: "50%",
                      padding: "12px 0",
                      textTransform: "none",
                    }}
                  >
                    <Typography variant="secondaryTextInterRegular" sx={{ color: "#999999" }}>
                      NAME OF THE SCHOLARSHIP
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ padding: "12px 0", textTransform: "none" }}>
                    <Typography variant="secondaryTextInterRegular" sx={{ color: "#999999" }}>
                      DESCRIPTION
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scholarshipData.map((row, idx) => (
                  <TableRow key={idx} sx={{ borderBottom: "1px solid black" }}>
                    <TableCell sx={{ padding: "14px 0" }}>
                      <Typography variant="typographyBodyInterMaintext" sx={{fontFamily:"Newsreader" }}>
                        {row.name}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ padding: "14px 0", verticalAlign: "top" }}>
                      <Typography variant="typographyBodyInterNormal" sx={{color: "#1f1f1f"}}>
                        {row.description ||
                          "Description will be updated soon."}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        </Box>

        {/* Gallery Section */}
        <Box sx={{ pt: { xs: "30px", sm: "40px", md: "50px" } }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
            // pb: { xs: "20px", sm: "30px", md: "40px" },
              mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" }
            
            }}
          >


            Gallery
          </Typography>

          {/* Image Slider */}
          <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
            <ImageWidthSlider items={galleryImages} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Scholorships;
