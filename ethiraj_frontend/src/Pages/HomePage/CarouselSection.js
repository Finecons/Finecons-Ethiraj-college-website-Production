// // import React from "react";
// // import Slider from "react-slick";
// // import { Box, Typography, Grid, Divider, IconButton } from "@mui/material";
// // import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// // import Image1 from "../../Assets/Carosoul_Image1.jpg";
// // import Image2 from "../../Assets/Carosoul_image2.jpg";
// // import Image3 from "../../Assets/Carosoul_Image1.jpg";

// // const items = [Image1, Image2, Image3];

// // // Custom Arrows
// // const NextArrow = ({ onClick }) => (
// //   <IconButton
// //     onClick={onClick}
// //     sx={{
// //       position: "absolute",
// //       right: 20,
// //       bottom: 40,
// //       zIndex: 2,
// //       color: "#fff",
// //       backgroundColor: "rgba(0,0,0,0.5)",
// //       "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
// //     }}
// //   >
// //     <ArrowForwardIos fontSize="small" />
// //   </IconButton>
// // );

// // const PrevArrow = ({ onClick }) => (
// //   <IconButton
// //     onClick={onClick}
// //     sx={{
// //       position: "absolute",
// //       right: 70,
// //       bottom: 40,
// //       zIndex: 2,
// //       color: "#fff",
// //       backgroundColor: "rgba(0,0,0,0.5)",
// //       "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
// //     }}
// //   >
// //     <ArrowBackIos fontSize="small" />
// //   </IconButton>
// // );

// // function CarouselSection() {
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 800, // increase for smoother effect
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 3000,
// //     arrows: true,
// //     nextArrow: <NextArrow />,
// //     prevArrow: <PrevArrow />,
// //     cssEase: "cubic-bezier(0.77, 0, 0.175, 1)", // easing for opposite slide
// //     appendDots: (dots) => (
// //       <Box
// //         sx={{
// //           position: "absolute",
// //           bottom: 10,
// //           right: 20,
// //           display: "flex",
// //           justifyContent: "center",
// //           alignItems: "center",
// //           zIndex: 2,
// //         }}
// //       >
// //         <ul style={{ margin: 0, padding: 0, display: "flex" }}>{dots}</ul>
// //       </Box>
// //     ),
// //     customPaging: () => (
// //       <Box
// //         sx={{
// //           width: 10,
// //           height: 10,
// //           bgcolor: "white",
// //           borderRadius: "50%",
// //           display: "inline-block",
// //         }}
// //       />
// //     ),
// //   };

// //   return (
// //     <Grid sx={{ m: "70px 20px", position: "relative" }}>
// //       {/* Top Heading */}
// //       <Box
// //         sx={{
// //           display: "flex",
// //           flexDirection: { md: "row", xs: "column" },
// //           justifyContent: { md: "space-between" },
// //           alignItems: "center",
// //         }}
// //       >
// //         <Typography
// //           variant="primaryHeadingText"
// //           gutterBottom
// //           sx={{ width: { lg: "850px", md: "650px" }, padding: 0 }}
// //         >
// //           Empowering Generations of Women since 1948.
// //         </Typography>

// //         <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
// //           <Divider
// //             orientation="vertical"
// //             flexItem
// //             sx={{
// //               height: "144px",
// //               color: "#6c757d",
// //               borderWidth: "1px",
// //               display: { md: "block", xs: "none" },
// //             }}
// //           />

// //           <Typography
// //             variant="secondaryTextInterRegular"
// //             sx={{
// //               width: { lg: "521px", md: "450px" },
// //               color: "var(--brand-palatte-text-color)",
// //             }}
// //           >
// //             For over seven decades, we’ve nurtured minds, inspired leaders, and
// //             built a community grounded in values that stand the test of time.
// //           </Typography>
// //         </Box>
// //       </Box>

// //       {/* Carousel */}
// //       <Box sx={{ mt: "80px", position: "relative", overflow: "hidden" }}>
// //         <Slider {...settings}>
// //           {items.map((item, index) => (
// //             <Box
// //               key={index}
// //               component="img"
// //               src={item}
// //               sx={{
// //                 borderRadius: 2,
// //                 height: "691px",
// //                 width: "100%",
// //                 objectFit: "cover",
// //                 transition: "transform 0.8s ease-in-out", // smooth slide effect
// //               }}
// //             />
// //           ))}
// //         </Slider>
// //       </Box>
// //     </Grid>
// //   );
// // }

// // export default CarouselSection;

// import React from "react";
// import Slider from "react-slick";
// import { Box, Typography, Grid, Divider, IconButton } from "@mui/material";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// import Image1 from "../../Assets/Carosoul_Image1.jpg";
// import Image2 from "../../Assets/Carosoul_image2.jpg";
// import Image3 from "../../Assets/Carosoul_Image1.jpg";
// import { GrLinkNext } from "react-icons/gr";

// const items = [Image1, Image2, Image3];

// // Custom Arrows
// const NextArrow = ({ onClick }) => (
//   <IconButton
//     onClick={onClick}
//     sx={{
//       position: "absolute",
//       right: 40,
//       bottom: 36,
//       zIndex: 2,
//       color: "gray",
//       backgroundColor: "white",
//       "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
//     }}
//   >
//     <GrLinkNext fontSize="20px" />
//   </IconButton>
// );

// const PrevArrow = ({ onClick }) => (
//   <IconButton
//     onClick={onClick}
//     sx={{
//       position: "absolute",
//       right: 70,
//       bottom: 40,
//       zIndex: 2,
//       color: "#fff",
//       backgroundColor: "rgba(0,0,0,0.5)",
//       "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
//     }}
//   >
//     <ArrowBackIos fontSize="small" />
//   </IconButton>
// );

// function CarouselSection() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800, // increase for smoother effect
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     cssEase: "cubic-bezier(0.77, 0, 0.175, 1)", // easing for opposite slide
//     appendDots: (dots) => (
//       <Box
//         sx={{
//           position: "absolute",
//           right: 70,
//           bottom: 35,
//           display: "flex",
//           justifyContent: "center",
//           // alignItems: "center",
//           zIndex: 2,
//           width: "100px",
//           bgcolor: "white", // 🔴 full red background
//           borderRadius: "20px", // pill shape
//           px: 2, // horizontal padding for spacing
//           pt: "8px",
//           pb: "12px", // vertical padding
//           "& li.slick-active div": {
//             width: 20, // ⬛ rectangle width
//             borderRadius: "8px", // pill-style rectangle
//           },
//         }}
//       >
//         <ul style={{ margin: 0, padding: 0, display: "flex" }}>{dots}</ul>
//       </Box>
//     ),
//     customPaging: () => (
//       <Box
//         sx={{
//           width: 10,
//           height: 10,
//           bgcolor: "gray", // ⚪ white dots
//           borderRadius: "50%",
//           display: "inline-block",
//           transition: "all 0.3s ease",
//         }}
//       />
//     ),
//   };

//   return (
//     <Grid container sx={{ m: "70px 20px",
//     //  position: "relative"
//       }}>
//       {/* Top Heading */}
//       <Grid
//         size={{ xs: 12, md: 8 }}
//         sx={{
//           // display: "flex",
//           // flexDirection: { md: "row", xs: "column" },
//           // justifyContent: { md: "space-between" },
//           // alignItems: "center",
//         }}
//       >
//         <Typography
//           variant="primaryHeadingText"
//           gutterBottom
//           sx={{ maxWidth: { lg: "850px", md: "650px" }, padding: 0 }}
//         >
//           Empowering Generations of Women since 1948.
//         </Typography>
//       </Grid>

//       <Grid
//         size={{ xs: 12, md: 4 }}
//         sx={{ display: "flex", alignItems: "center", gap: "24px" }}
//       >
//         <Divider
//           orientation="vertical"
//           flexItem
//           sx={{
//             height: "144px",
//             color: "#6c757d",
//             borderWidth: "1px",
//             display: { md: "block", xs: "none" },
//           }}
//         />

//         <Typography
//           variant="secondaryTextInterRegular"
//           sx={{
//             width: { lg: "521px", md: "450px" },
//             color: "var(--brand-palatte-text-color)",
//           }}
//         >
//           For over seven decades, we’ve nurtured minds, inspired leaders, and
//           built a community grounded in values that stand the test of time.
//         </Typography>
//       </Grid>

//       {/* Carousel */}
//       <Grid size={{ xs: 12 }}>
//         <Box sx={{ mt: "80px", position: "relative", overflow: "hidden" }}>
//           <Slider {...settings}>
//             {items.map((item, index) => (
//               <Box
//                 key={index}
//                 component="img"
//                 src={item}
//                 sx={{
//                   borderRadius: 2,
//                   height: { xs: "400px",sm:"500px", md: "691px" },
//                   width: "100%",
//                   objectFit: "cover",
//                   transition: "transform 0.8s ease-in-out", // smooth slide effect
//                 }}
//               />
//             ))}
//           </Slider>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// }

// export default CarouselSection;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Typography, Grid, Divider, IconButton } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { GrLinkNext } from "react-icons/gr";
import axios from "axios";

// Static fallback images
import Image1 from "../../Assets/Carosoul_image2.jpg";
import Image2 from "../../Assets/Carosoul_Image1.jpg";
import Image3 from "../../Assets/Carosoul_image2.jpg";
import actions from "../../ReduxStore/actions";
import { useDispatch } from "react-redux";
import { adminUrl } from "../../constants";

const API_URL =
  "https://ethiraj.api.cygnusa.in/api/v1/getAllHomeSectionsBySectionName";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right:35,
      bottom: 36,
      zIndex: 2,
      color: "gray",
      backgroundColor: "white",
       transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#5D5A84",
        color: "white",
      },
    }}
  >
    <GrLinkNext fontSize="20px" />
  </IconButton>
);



function CarouselSection({ bannerDatas }) {
  const [sectionData, setSectionData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const dispatch = useDispatch();
  console.log(bannerDatas, "bannerDatasbannerDatas");
  const FALLBACK_ITEMS = bannerDatas[0]?.additional_data?.banner
    ? bannerDatas[0]?.additional_data?.banner?.map((data) => data)
    : [Image1, Image2, Image3];


  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: (
      <NextArrow
        
      />
    ),
    // prevArrow: <PrevArrow />,
    cssEase: "cubic-bezier(0.77, 0, 0.175, 1)",
    appendDots: (dots) => (
      <Box
        sx={{
          position: "absolute",
          right: 70,
          bottom: 35,
          display: "flex",
          justifyContent: "center",
          zIndex: 2,
          width: "100px",
          bgcolor: "white",
          borderRadius: "20px",
          px: 2,
          pt: "8px",
          pb: "12px",

          "& li.slick-active div": {
            width: 20,
            bgcolor:'#5D5A84',
            borderRadius: "8px",
          },
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: "flex" }}>{dots}</ul>
      </Box>
    ),
    customPaging: () => (
      <Box
        sx={{
          width: 10,
          height: 10,
          bgcolor: "gray",
          borderRadius: "50%",
          display: "inline-block",
          transition: "all 0.3s ease",
        }}
      />
    ),
  };


  return (
    <Grid container sx={{ m: "70px 20px" }}>
      {/* Top Heading */}
      <Grid size={{ xs: 12, md: 8 }}>
        <Typography
          variant="primaryHeadingText"
          gutterBottom
          sx={{ maxWidth: { lg: "850px", md: "650px" }, padding: 0 }}
        >
          {bannerDatas[0]?.heading
            ? bannerDatas[0]?.heading
            : "Empowering Generations of Women since 1948."}
          {/* Empowering Generations of Women since 1948. */}
        </Typography>
      </Grid>

      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{ display: "flex", alignItems: "center", gap: "24px" }}
      >
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            height: "144px",
            color: "#6c757d",
            borderWidth: "1px",
            display: { md: "block", xs: "none" },
          }}
        />

        <Typography
          variant="secondaryTextInterRegular"
          sx={{
            maxWidth: { lg: "521px", md: "450px", sm: "600px" },
            color: "var(--brand-palatte-text-color)",
          }}
        >
         
          {bannerDatas[0]?.content
            ? bannerDatas[0]?.content
            : "For over seven decades, we’ve nurtured minds, inspired leaders, and built a community grounded in values that stand the test of time."}
        </Typography>
      </Grid>

      {/* Carousel */}
      <Grid size={{ xs: 12 }}>
        <Box
          sx={{
            mt: { xs: "64px", sm: "80px", md: "64px", lg: "80px" },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Slider {...settings}>
          
            {FALLBACK_ITEMS.map((item, index) => (
              <Box
                key={index}
                component="img"
                src={item}
                sx={{
                  
                  borderRadius: 2,
                  height: { xs: "500px", sm: "500px", md: "691px" },
                  width: "100%",
                  transition: "transform 0.8s ease-in-out",
                  objectFit: "cover",
                }}
              />
            ))}
          </Slider>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CarouselSection;
