// import React from 'react';
// import { Box, Typography, Container, Grid } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: 'relative',
//     background: 'url("/path-to-your-image.jpg") no-repeat center center',
//     backgroundSize: 'cover',
//     height: '100vh',
//     color: '#fff',
//   },
//   header: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     textAlign: 'center',
//     zIndex: 1,
//   },
//   BannerSection: {
//     position: 'absolute',
//     bottom: 20,
//     left: '50%',
//     transform: 'translateX(-50%)',
//     zIndex: 1,
//   },
//   content: {
//     padding: theme.spacing(4),
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     marginTop: '20px',
//     borderRadius: '8px',
//   },
// }));

// const BannerSection = () => {
//   const classes = useStyles();

//   return (
//     <Box className={classes.root}>
//       <Container className={classes.header}>
//         <Typography variant="h3" component="h1">
//           About Us
//         </Typography>
//       </Container>

//       <Container className={classes.BannerSection}>
//         <Typography variant="h5" align="center">
//           Ethiraj College for Women is situated in the heart of Chennai. Our esteemed institution pioneers pathways to success, fosters knowledge, and shapes future leaders committed to service and scholarship.
//         </Typography>
//       </Container>

//       {/* Add content section */}
//       <Container className={classes.content}>
//         <Typography variant="body1">
//           Ethiraj College for Women offers a transformative learning environment with a commitment to academic excellence. It provides opportunities for holistic development through various programs and initiatives. The institution believes in fostering leadership qualities and academic prowess.
//         </Typography>
//       </Container>
//     </Box>
//   );
// };

// export default BannerSection;

import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
// import image from "../../../Assets/Facilities_banner_img.jpg";
import image from "../../../Assets/cmplife_lab2.png";

import CustomBreadCrumbs from "../../../Components/CustomBreadCrumbs/CustomBreadCrumbs";
import { adminUrl } from "../../../constants";

const BannerSection = ({ bannerDatas }) => {

  return (
    <Box
      sx={{
        maxWidth: "100vw",
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
            items={[{ name: "Home", to: "/" }, { name: "Campus Life",to:"/campuslife" },{name:"Library"}]}
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
          <Typography variant="primaryHeadingText">Library</Typography>
        </Grid>
       
      </Grid>
      {/* </Box> */}
    </Box>
  );
};

export default BannerSection;
