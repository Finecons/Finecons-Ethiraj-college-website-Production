// // import React from "react";
// // import { Box, Grid, Typography, Link, Divider } from "@mui/material";

// // const ContactDetails = () => {
// //   return (
// //     <Box sx={{ py: 6 }}>
// //       <Grid
// //         container
// //         spacing={6}
// //         alignItems="stretch" // ⭐ important
// //       >
// //         {/* Left Content */}
// //         <Grid
// //           // item
// //           size={{ xs: 12, md: 5 }}
// //           sx={{
// //             display: "flex",
// //             flexDirection: "column !important",
// //             gap: "10px",
// //           }}
// //         >
// //           <Typography variant="subHeadingTextInterMedium">
// //             Important Links
// //           </Typography>

// //           {/* <Link href="#" sx={{ fontSize: 14, textDecoration: "underline" }}>
// //             Guidlines
// //           </Link> */}

// //           <Typography
// //             variant="typographyBodyInterNormalSmall"
// //             component="a"
// //             href="#"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             sx={{
// //               color: "#003BD1",
// //               // textDecoration: "none",
// //               // fontWeight: 500,
// //             }}
// //           >
// //             Guidlines
// //           </Typography>

// //           {/* <Link href="#" sx={{ fontSize: 14, textDecoration: "underline" }}>
// //             Apply here
// //           </Link> */}


// //           <Typography
// //             variant="typographyBodyInterNormalSmall"
// //             component="a"
// //             href="https://ethiraj.frontend.finecons.com/#/academics/programlist"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             sx={{
// //               color: "#003BD1",
// //               // textDecoration: "none",
// //               // fontWeight: 500,
// //             }}
// //           >
// //             Apply here
// //           </Typography>
// //         </Grid>

// //         {/* Right Image */}
// //         <Grid
// //           item
// //           size={{ xs: 12, md: 7 }}
// //           sx={{
// //             display: "flex",
// //             flexDirection: "column !important",
// //             gap: "10px",
// //           }}
// //         >
// //           <Typography variant="subHeadingTextInterMedium">
// //             Contact Details
// //           </Typography>
// //           <Box>
// //             <Typography variant="secondaryTextInterRegular">
// //               Mrs. A. Anbu Selvi
// //             </Typography>
// //             <Typography variant="typographyBodyInterNormal">
// //               Research Co-ordinator (Include Dean of Research)
// //             </Typography>
// //           </Box>

// //           {/* <Link href="#" sx={{ fontSize: 14, textDecoration: "underline" }}>
// //             Email
// //           </Link> */}

// //           <Typography
// //             variant="typographyBodyInterNormalSmall"
// //             component="a"
// //             href="#"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             sx={{
// //               color: "#003BD1",
// //               // textDecoration: "none",
// //               // fontWeight: 500,
// //             }}
// //           >
// //             Email
// //           </Typography>

// //         </Grid>
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default ContactDetails;

// import React from "react";
// import { Box, Grid, Typography } from "@mui/material";

// const ContactDetails = ({ecricPhdFellowshipsDatas}) => {
//   console.log(ecricPhdFellowshipsDatas, "ecricPhdFellowshipsDatas");

//   // Extract policy URLs from ecricPhdFellowshipsDatas if available
//   const guidelinesUrl = ecricPhdFellowshipsDatas?.[0]?.additional_data?.guidelines || "#";
//   const applyHereUrl = ecricPhdFellowshipsDatas?.[0]?.additional_data?.apply_here || "https://ethiraj.frontend.finecons.com/#/academics/programlist";

//   return (
//     <Box sx={{ py:{ xs: "20px", sm: "18px", md: "18px" } }}>
//       <Grid container spacing={4} alignItems="stretch">
        
//         {/* Important Links */}
//         <Grid
//           item
//           size={{ xs: 12, sm: 6, md: 5 }}
//           sx={{ display: "flex" }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "10px",
//               height: "100%",
//               width: "100%",
//             }}
//           >
//             <Typography variant="subHeadingTextInterMedium">
//               Important Links
//             </Typography>

//             <Typography
//               variant="typographyBodyInterNormal"
//               component="a"
//               href={guidelinesUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{ color: "#003BD1" }}
//             >
//               Guidelines
//             </Typography>

//             <Typography
//               variant="typographyBodyInterNormal"
//               component="a"
//               href={applyHereUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{ color: "#003BD1" }}
//             >
//               Apply here
//             </Typography>
//           </Box>
//         </Grid>

//         {/* Contact Details */}
//         <Grid
//           size={{ xs: 12, sm: 6, md: 7 }}
//           sx={{ display: "flex" }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "10px",
//               height: "100%",
//               width: "100%",
//             }}
//           >
//             <Typography variant="subHeadingTextInterMedium">
//               Contact Details
//             </Typography>

//             <Box>
//               <Typography variant="secondaryTextInterRegular">
//                 Mrs. A. Anbu Selvi
//               </Typography>

//               <Typography variant="typographyBodyInterNormal">
//                 Research Co-ordinator (Include Dean of Research)
//               </Typography>
//             </Box>

//             <Typography
//               variant="typographyBodyInterNormal"
//               component="a"
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{ color: "#003BD1" }}
//             >
//               Email
//             </Typography>
//           </Box>
//         </Grid>

//       </Grid>
//     </Box>
//   );
// };

// export default ContactDetails;


import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const ContactDetails = ({ ecricPhdFellowshipsDatas }) => {
  console.log(ecricPhdFellowshipsDatas, "ecricPhdFellowshipsDatas");

  // Extract policy URLs from ecricPhdFellowshipsDatas if available
  const guidelinesUrl =
    ecricPhdFellowshipsDatas?.[0]?.additional_data?.guidelines || "#";
  const applyHereUrl =
    ecricPhdFellowshipsDatas?.[0]?.additional_data?.apply_here ||
    "https://ethiraj.frontend.finecons.com/#/academics/programlist";

  return (
  <Box sx={{ py: { xs: 2.5, sm: 2.2, md: 2.2 } }}>
    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="flex-start">

      {/* IMPORTANT LINKS */}
      <Grid item size={{xs:12, md:5}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1, sm: 1.2, md: 1.5 },
            width: "100%",
          }}
        >
          <Typography variant="subHeadingTextInterMedium">
            Important Links
          </Typography>

          <Typography
            component="a"
            href={guidelinesUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#003BD1",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              // textDecoration: "none",
              // "&:hover": { textDecoration: "underline" },
            }}
          >
            Guidelines
          </Typography>

          <Typography
            component="a"
            href={applyHereUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#003BD1",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              // textDecoration: "none",
              // "&:hover": { textDecoration: "underline" },
            }}
          >
            Apply here
          </Typography>
        </Box>
      </Grid>

      {/* CONTACT DETAILS */}
      <Grid item size={{xs:12,md:7}} sx={{mt:{xs:"20px",md:0}}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, sm: 3.5, md: 3 },
            width: "100%",
          }}
        >
          <Typography variant="subHeadingTextInterMedium" sx={{ fontWeight: 600 }}>
            Contact Details
          </Typography>

          {/* CONTACT ROW */}
          <Grid container spacing={{ xs: 2, sm: 2, md: 4 }} justifyContent="flex-start">

            {/* PADMINI */}
            <Grid item xs={12} sm={12} md={6}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="secondaryTextInterRegular" >
                  Dr. P. Padmini
                </Typography>

                <Typography>Dean of Research (Aided)</Typography>
                <Typography>Associate Professor</Typography>
                <Typography>Department of English</Typography>

                <Typography
                  component="a"
                  href="mailto:padmini_p@ethirajcollege.edu.in"
                  sx={{
                    color: "#003BD1",
                    textDecoration: "none",
                    wordBreak: "break-word",
                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  padmini_p@ethirajcollege.edu.in
                </Typography>
              </Box>
            </Grid>

            {/* MALATHI */}
            <Grid item xs={12} sm={12} md={6}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="secondaryTextInterRegular" >
                  Dr. V. Malathi
                </Typography>

                <Typography>Dean of Research (Self-Supporting)</Typography>
                <Typography>Associate Professor</Typography>
                <Typography>Department of Biochemistry</Typography>

                <Typography
                  component="a"
                  href="mailto:malathi_v@ethirajcollege.edu.in"
                  sx={{
                    color: "#003BD1",
                    textDecoration: "none",
                    wordBreak: "break-word",
                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  malathi_v@ethirajcollege.edu.in
                </Typography>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Grid>

    </Grid>
  </Box>
);
};

export default ContactDetails;
