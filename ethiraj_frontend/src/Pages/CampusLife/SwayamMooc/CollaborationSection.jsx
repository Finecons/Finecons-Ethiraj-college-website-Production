// // import React from "react";
// // import { Box, Typography, Grid, Card } from "@mui/material";

// // const CollaborationSection = ({ collaborations }) => {
// //   return (
// //     <Box sx={{
// //

// //         py: { xs: "40px", sm: "50px", md: "60px", lg: "72px" } }}>
// //       <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 4 }}>
// //         Collaboration
// //       </Typography>

// //       <Grid container spacing={4}>
// //         {collaborations.map((collab, idx) => (
// //           <Grid item size={{ xs: 12, md: 4 }} key={idx}>
// //             <Card
// //               elevation={0}
// //               sx={{
// //                 background: "none",
// //                 border: "1px solid #D5D6DA",
// //                 p: 3,
// //                 textAlign: "center",
// //               }}
// //             >
// //               <Box
// //                 // sx={{
// //                 //   height: "120px",
// //                 //   display: "flex",
// //                 //   alignItems: "center",
// //                 //   justifyContent: "center",
// //                 //   mb: 2,
// //                 //   bgcolor: "#f5f5f5",
// //                 //   borderRadius: "8px",
// //                 // }}
// //               >
// //                 <Box
// //                 component="img"
// //                 src={collab.logo}
// //                 alt={collab.name}
// //             sx={{objectFit:"contain",width:"300px"}}

// //                 />
// //               </Box>
// //               <Typography
// //                 variant="subHeadingTextInterMedium"
// //                 sx={{ mb: 1 }}
// //               >
// //                 {collab.name}
// //               </Typography>
// //               <Typography
// //                 variant="typographyBodyInterNormal"
// //                 sx={{ color: "#6b7280", mb: 2 }}
// //               >
// //                 {collab.location}
// //               </Typography>
// //               <Typography
// //                 variant="typographyBodyInterNormalSmall"
// //                 sx={{
// //                   color: "#81607A",
// //                   fontWeight: 600,
// //                   mb: 3,
// //                   textTransform: "uppercase",
// //                 }}
// //               >
// //                 {collab.type}
// //               </Typography>
// //               <Box component="ul" sx={{ textAlign: "left", pl: 2 }}>
// //                 {collab.details.map((detail, i) => (
// //                   <Typography
// //                     key={i}
// //                     component="li"
// //                     variant="typographyBodyInterNormalSmall"
// //                     sx={{ color: "#4a4f5d", mb: 1 }}
// //                   >
// //                     {detail}
// //                   </Typography>
// //                 ))}
// //               </Box>
// //             </Card>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default CollaborationSection;

// import React from "react";
// import { Box, Typography, Grid, Card } from "@mui/material";

// const CollaborationSection = ({ collaborations }) => {
//   return (
//     <Box
//       sx={{

//         py: { xs: "40px", sm: "50px", md: "60px", lg: "72px" },
//       }}
//     >
//       {/* <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 4 }}> */}
//            <Typography
//                 variant="subHeadingTextInterMedium"
//                 sx={{ color: "#81607A", mb: 3 }}
//               >
//         Collaboration
//       </Typography>

//       <Grid container spacing={4} alignItems="stretch">
//         {collaborations.map((collab, idx) => (
//           <Grid item size={{ xs: 12, md: 4 }} key={idx} sx={{ display: "flex" }}>
//             <Card
//               elevation={0}
//               sx={{
//                 background: "none",
//                 // border: "1px solid #D5D6DA",
//                 p: 3,
//                 textAlign: "start",
//                 display: "flex",
//                 flexDirection: "column",
//                 width: "100%",
//               }}
//             >
//               {/* Image Section (fixed height for alignment) */}
//               <Box
//                 sx={{
//                   height: "120px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   mb: 2,
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={collab.logo}
//                   alt={collab.name}
//                   sx={{
//                     objectFit: "contain",
//                     maxWidth: "100%",
//                     maxHeight: "100%",
//                   }}
//                 />
//               </Box>

//               {/* Title */}
//               <Typography
//                 variant="subHeadingTextInterMedium"
//                 sx={{ mb: 1 }} // ensures same alignment
//               >
//                 {collab.name}
//               </Typography>

//               {/* Location */}
//               <Typography
//                 variant="typographyBodyInterNormal"
//                 sx={{ color: "#6b7280", mb: 2, }}
//               >
//                 {collab.location}
//               </Typography>

//               {/* Type */}
//               <Typography
//                 variant="typographyBodyInterNormalSmall"
//                 sx={{
//                   fontWeight: 600,
//                   mb:2,
//                   textTransform: "uppercase",
//                 }}
//               >
//                 {collab.type}
//               </Typography>

//               {/* Details (push to bottom evenly) */}
//               <Box
//                 component="ul"
//                 sx={{
//                   textAlign: "left",
//                   pl: 4,
//                 //   mt: "auto",  // pushes details to bottom
//                 }}
//               >
//                 {collab.details.map((detail, i) => (
//                   <Typography
//                     key={i}
//                     component="li"
//                     variant="typographyBodyInterNormal"
//                     sx={{ color: "#4a4f5d"}}
//                   >
//                     {detail}
//                   </Typography>
//                 ))}
//               </Box>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default CollaborationSection;

import React from "react";
import { Box, Typography, Grid, Card, Divider, Link } from "@mui/material";
import Meharunnisa from "../../../Assets/Meharunnisa.png";
import portalImage from "../../../Assets/portalImage.png";
import { BorderLeft } from "@mui/icons-material";
const CollaborationSection = () => {
  return (
    <Box
      sx={{
        py: { xs: "40px", sm: "50px", md: "60px", lg: "72px" },
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },

      }}
    >
    

      <Box
        elevation={0}
        sx={{
          // border: "1px solid #D5D6DA",
          // borderRadius: "0px",
          backgroundColor: "none",
          // overflow: "hidden",
        }}
      >
        <Grid container>
          {/* Left Section */}
          <Grid item size={{ xs: 12, md: 4 }}>
            <Box sx={{ height: "100%" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "serif",
                  mb: 4,
                  lineHeight: 1.2,
                }}
              >
                Single Point of Contact
                <br />
                (SPOC)
              </Typography>

              <Box
                component="img"
              src={Meharunnisa}
                alt="SPOC"
                sx={{
              width: "100%",
                height: { xs: 255, md: 255, lg: 305 },
                maxWidth: { xs: 190, sm: 180, md: 200,lg:230 },
                objectFit: "cover",
                }}
              />

              <Typography
                variant="leadershipContentTextNewsreaderMedium"
                sx={{ mt: { md: "18px", lg: "24px" } }}
              >
                Ms. M. Meharunnisa
              </Typography>

              <Typography
                variant="typographyBodyInterMainText"
                sx={{ my: "5px" }}
              >
                Assistant Professor, BCA
              </Typography>

              <Typography variant="typographyBodyInterNormal" sx={{ mb: 1 }}>
                Partnering since : July 2017
              </Typography>

              <Typography variant="typographyBodyInterNormal" sx={{ mb: 1 }}>
                College Id: 1276
              </Typography>

              <Typography variant="typographyBodyInterNormal" sx={{ mb: 2 }}>
                Institute Type: College
              </Typography>

              <Link
                href="mailto:spoc.ethirajcollege@gmail.com"
                underline="hover"
                color="inherit"
                sx={{ fontSize: "14px" }}
              >
                <Typography variant="typographyBodyInterNormal" sx={{ mb: 2 }}>
                  spoc.ethirajcollege@gmail.com
                </Typography>
              </Link>
            </Box>
          </Grid>

          {/* Center Section */}
          <Grid item size={{ xs: 12, md: 4 }} sx={{borderLeft:{md:"1px solid black"},pl:{md:'30px'}}}>
            <Box sx={{ height: "100%" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "serif",
                  mb: 4,
                }}
              >
                How to Enroll
              </Typography>

              {[
                "Visit the official SWAYAM portal",
                "Browse courses based on your interest or discipline",
                "Register using your email ID",
                "Enroll in your preferred course",
                "Complete lectures, assignments, and assessments",
                "Appear for the certification exam (if applicable)",
              ].map((step, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                  <Typography variant="typographyBodyInterMainText" sx={{ fontWeight: 600, mb: 1 }}>
                    STEP {index + 1}
                  </Typography>

                  <Typography variant="typographyBodyInterNormal">{step}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          
          {/* Right Section */}
          <Grid item size={{ xs: 12, md: 4 }} sx={{borderLeft:{md:"1px solid black"},pl:{md:'30px'}}}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "100%",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "serif",
                  mb: 5,
                }}
              >
                Official Swayam Portal
              </Typography>

              <Box
                component="img"
                src={portalImage}
                alt="Swayam"
                sx={{
                  width: "220px",
                  maxWidth: "100%",
                  objectFit: "contain",
                  mb: 4,
                }}
              />

              <Link
                href="https://swayam.gov.in/NPTEL"
                target="_blank"
                rel="noopener noreferrer"
                underline="always"
               
              >
              <Typography variant="typographyBodyInterNormal" sx={{ mb: 2 }}>
                
                Click to Enroll Here
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CollaborationSection;
