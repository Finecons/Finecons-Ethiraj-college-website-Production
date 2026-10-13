// import React from "react";
// import { Box, Typography, Grid, Card } from "@mui/material";

// const CollaborationSection = ({ collaborations }) => {
//   return (
//     <Box sx={{
//

//         py: { xs: "40px", sm: "50px", md: "60px", lg: "72px" } }}>
//       <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 4 }}>
//         Collaboration
//       </Typography>

//       <Grid container spacing={4}>
//         {collaborations.map((collab, idx) => (
//           <Grid item size={{ xs: 12, md: 4 }} key={idx}>
//             <Card
//               elevation={0}
//               sx={{
//                 background: "none",
//                 border: "1px solid #D5D6DA",
//                 p: 3,
//                 textAlign: "center",
//               }}
//             >
//               <Box
//                 // sx={{
//                 //   height: "120px",
//                 //   display: "flex",
//                 //   alignItems: "center",
//                 //   justifyContent: "center",
//                 //   mb: 2,
//                 //   bgcolor: "#f5f5f5",
//                 //   borderRadius: "8px",
//                 // }}
//               >
//                 <Box
//                 component="img"
//                 src={collab.logo}
//                 alt={collab.name}
//             sx={{objectFit:"contain",width:"300px"}}

//                 />
//               </Box>
//               <Typography
//                 variant="subHeadingTextInterMedium"
//                 sx={{ mb: 1 }}
//               >
//                 {collab.name}
//               </Typography>
//               <Typography
//                 variant="typographyBodyInterNormal"
//                 sx={{ color: "#6b7280", mb: 2 }}
//               >
//                 {collab.location}
//               </Typography>
//               <Typography
//                 variant="typographyBodyInterNormalSmall"
//                 sx={{
//                   color: "#81607A",
//                   fontWeight: 600,
//                   mb: 3,
//                   textTransform: "uppercase",
//                 }}
//               >
//                 {collab.type}
//               </Typography>
//               <Box component="ul" sx={{ textAlign: "left", pl: 2 }}>
//                 {collab.details.map((detail, i) => (
//                   <Typography
//                     key={i}
//                     component="li"
//                     variant="typographyBodyInterNormalSmall"
//                     sx={{ color: "#4a4f5d", mb: 1 }}
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
import { Box, Typography, Grid, Card } from "@mui/material";

const CollaborationSection = ({ collaborations }) => {
  return (
    <Box
      id="mous-collaborations"
      sx={{
        py: { xs: "40px", sm: "50px", md: "60px", lg: "72px" },
      }}
    >
      {/* <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 4 }}> */}
      <Typography
        variant="subHeadingTextInterMedium"
        sx={{ color: "#81607A", mb: 3 }}
      >
        Collaboration
      </Typography>

      <Grid container spacing={4} alignItems="stretch">
        {collaborations.map((collab, idx) => (
          <Grid
            item
            size={{ xs: 12, md: 4 }}
            key={idx}
            sx={{ display: "flex" }}
          >
            <Card
              elevation={0}
              sx={{
                background: "none",
                // border: "1px solid #D5D6DA",
                p: 3,
                textAlign: "start",
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {/* Image Section (fixed height for alignment) */}
              <Box
                sx={{
                  height: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src={collab.logo}
                  alt={collab.name}
                  sx={{
                    objectFit: "contain",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Box>

              {/* Title */}
              <Typography
                variant="subHeadingTextInterMedium"
                sx={{ mb: 1 }} // ensures same alignment
              >
                {collab.name}
              </Typography>

              {/* Location */}
              <Typography
                variant="typographyBodyInterNormal"
                sx={{ color: "#6b7280", mb: 2 }}
              >
                {collab.location}
              </Typography>

              {/* Type */}
              <Typography
                variant="typographyBodyInterNormalSmall"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  textTransform: "uppercase",
                }}
              >
                {collab.type}
              </Typography>

              {/* Details (push to bottom evenly) */}
              <Box
                component="ul"
                sx={{
                  textAlign: "left",
                  pl: 4,
                  //   mt: "auto",  // pushes details to bottom
                }}
              >
                {collab.details.map((detail, i) => (
                  <Typography
                    key={i}
                    component="li"
                    variant="typographyBodyInterNormal"
                    sx={{ color: "#4a4f5d" }}
                  >
                    {detail}
                  </Typography>
                ))}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CollaborationSection;
