
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import image from "../../../Assets/Sports_banner_img.jpg";
import CustomBreadCrumbs from "../../../Components/CustomBreadCrumbs/CustomBreadCrumbs";
import { adminUrl } from "../../../constants";

const BannerSection = ({ bannerDatas }) => {
  // const bannerImage =
  //   bannerDatas[0]?.additional_data?.length > 0
  //     ? `${bannerDatas[0]?.additional_data[0]?.banner}`
  //     : image;


  //     console.log(bannerImage,"bannerImage")
  return (
    <Box
      sx={{
        width: "auto",
        height: { xs: "679px" }, // adjust height as needed
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.7)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // opacity:"0.4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        objectFit: "cover",
        // padding: "40px 40px",
        color: "white",
        m: {
          lg: "32px 32px 0 32px",
          md: "25px 25px 0 25px",
          xs: "0",
          sm: "32px 20px 0 20px",
        },
        borderRadius: { sm: "15px 15px 0 0" },
      }}
    >
      <Grid containers sx={{ m: "30px" }}>
        <Grid size={{ xs: 12 }}>
          {/* <CustomBreadCrumbs /> */}
          {/* <CustomBreadCrumbs
            routeNameMap={{
              "about/our-story": "About Us",
              //   team: "Our Team",
              //   contact: "Contact Us",
            }}
          /> */}
          <CustomBreadCrumbs
            colorWhite={true}
            items={[{ name: "Home", to: "/" }, { name: "Campus Life", to: "/campuslife" }, { name: "Sports" }]}
          />
        </Grid>
        <Grid
          size={{ xs: 5 }}
          sx={{
            // mt: { lg: "20px", md: "15px" },
            p: { lg: "10px", md: "10px" },
            mb: "20px",
          }}
        >
          <Typography variant="primaryHeadingText">Sports</Typography>
        </Grid>
       
      </Grid>
      {/* </Box> */}
    </Box>
  );
};

export default BannerSection;
