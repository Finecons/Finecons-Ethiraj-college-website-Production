// pages/rankings.js
import React from "react";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid2";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Divider from "@mui/material/Divider";

import {
  Box,
  Grid,
  Container,
  Typography,
  Divider,
  Button,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import rankingImage1 from "../Assets/Ranking_image1.png";
import rankingImage2 from "../Assets/Ranking_image2.png";
import rankingImage3 from "../Assets/Ranking_image3.png";
import rankingImage4 from "../Assets/Ranking_image4.png";
import { adminUrl } from "../constants";

// const stats = [
//   {
//     id: "students",
//     value: "8010",
//     labelTop: "Students Enrolled in 2024",
//     // labelBottom: "in 2024",
//   },
//   {
//     id: "programs",
//     value: "70+",
//     labelTop: "Programmes Offered",
//     // labelBottom: "Offered",
//   },
//   {
//     id: "faculty",
//     value: "370+",
//     labelTop: "Faculty Members",
//     // labelBottom: "Members"
//   },
// ];

export default function RankingsPage({ rankingDatas }) {
  const badges =
    rankingDatas[0]?.additional_data?.card_design?.length > 0
      ? rankingDatas[0]?.additional_data?.card_design?.map((data, index) => ({
          id: index,
          title: data?.title,
          subtitle: data?.content,
          logo: `${data?.logo}`,
        }))
      : [
          {
            id: "india-today",
            title: "India Today",
            subtitle: "Ranked Best College 2025",
            logo: rankingImage1,
          },
          {
            id: "the-week",
            title: "The Week",
            subtitle: "Ranked Best College 2025",
            logo: rankingImage2,
          },
          {
            id: "naac",
            title: "NAAC",
            subtitle: "A+ Grade",
            logo: rankingImage3,
          },
          {
            id: "nirf",
            title: "NIRF",
            subtitle: "#64 Rank Nationally",
            logo: rankingImage4,
          },
        ];

  console.log(rankingDatas, "badges");

  const stats =
    rankingDatas[0]?.additional_data?.card_count?.length > 0
      ? rankingDatas[0]?.additional_data?.card_count?.map((data, index) => ({
          id: index,
          value: data?.count,
          labelTop: data?.content,
        }))
      : [
          {
            id: "students",
            value: "8010",
            labelTop: "Students Enrolled in 2024",
            // labelBottom: "in 2024",
          },
          {
            id: "programs",
            value: "70+",
            labelTop: "Programmes Offered",
            // labelBottom: "Offered",
          },
          {
            id: "faculty",
            value: "370+",
            labelTop: "Faculty Members",
            // labelBottom: "Members"
          },
        ];
  return (
    <Box
      sx={{
        pb: { xs: 4, md: 10 },
        // faint bottom gradient like the screenshot
        // position: "relative",
        // "&:after": {
        //   content: '""',
        //   position: "absolute",
        //   left: 0,
        //   right: 0,
        //   bottom: 0,
        //   height: 140,
        //   background:
        //     "linear-gradient(to bottom, rgba(133,76,255,0) 0%, rgba(133,76,255,0.08) 100%)",
        //   pointerEvents: "none",
        // },
      }}
    >
      <Box>
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: { xs: "24px", sm: "48px" } }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{ fontWeight: 600 }}
          >
            {rankingDatas[0]?.heading
              ? rankingDatas[0]?.heading
              : "Rankings & Outcomes"}
          </Typography>
          <Typography
            variant="secondaryTextInterRegular"
            // color="text.secondary"
            sx={{
              display: "block",
              // mt: 2,
              // color:"#303030"
              mt: { sm: "24px", xs: "12.8px" },
              maxWidth: { xs: "318px", sm: "595px", md: "500px", lg: "595px" },
              mx: "auto",
            }}
          >
            {rankingDatas[0]?.content
              ? rankingDatas[0]?.content
              : "We challenge the status quo and are honoured to be recognised for the impact we create."}
          </Typography>
        </Box>

        {/* Badges row */}
        <Grid
          container
          spacing={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            mb: { xs: 4, md: 6 },
            // , px: "48px"
          }}
        >
          {badges?.map((b) => (
            <Grid
              key={b.id}
              size={{
                xs: 6,
                md: 2.5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  // maxWidth: "261px",
                  // maxHeight: "120.00994110107422px",
                }}
              >
                <Box
                  component="img"
                  src={b.logo}
                  alt={b.title}
                  sx={{
                    width: 90,
                    height: 90,
                    objectFit: "contain",
                    mx: "auto",
                    mb: 2,
                  }}
                />
                <Typography
                  variant="navbarMenuItemText"
                  sx={{
                    display: "block",
                    color: "var(--brand-palatte-text-color)",
                  }}
                >
                  {b.title}
                </Typography>
                <Typography
                  variant="bodyTextSmallInterRegularForRanking"
                  color="var(--brand-palette-text-secondary)"
                >
                  {b.subtitle}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* <Divider /> */}

        {/* Stats row */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ pt: { xs: 3, md: "80px" }, px: "10px" }}
        >
          {stats.map((s) => (
            <Grid key={s.id} size={{ xs: 4, sm: 3, md: 2.5 }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="primaryHeadingTextForRanking"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    display: "block",
                  }}
                >
                  {s.value}+
                </Typography>
                {/* variant="navbarMenuItemText" */}
                <Typography
                  variant="typographyBodyContentRanking"
                  color="text.secondary"
                >
                  {s.labelTop}
                </Typography>
                {/* <Typography variant="typographyBodyContentRanking" color="text.secondary">
                  {s.labelBottom}
                </Typography> */}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

// // pages/rankings.js
// import React from "react";
// // import Box from "@mui/material/Box";
// // import Grid from "@mui/material/Grid2";
// // import Typography from "@mui/material/Typography";
// // import Container from "@mui/material/Container";
// // import Divider from "@mui/material/Divider";

// import {
//   Box,
//   Grid,
//   Container,
//   Typography,
//   Divider,
//   Button,
//   Stack,
//   Card,
//   CardContent,
// } from "@mui/material";
// import rankingImage1 from "../Assets/Ranking_image1.png";
// import rankingImage2 from "../Assets/Ranking_image2.png";
// import rankingImage3 from "../Assets/Ranking_image3.png";
// import rankingImage4 from "../Assets/Ranking_image4.png";

// const badges = [
//   {
//     id: "india-today",
//     title: "India Today",
//     subtitle: "Ranked Best College 2025",
//     logo: rankingImage1,
//   },
//   {
//     id: "the-week",
//     title: "The Week",
//     subtitle: "Ranked Best College 2025",
//     logo: rankingImage2,
//   },
//   {
//     id: "naac",
//     title: "NAAC",
//     subtitle: "A+ Grade",
//     logo: rankingImage3,
//   },
//   {
//     id: "nirf",
//     title: "NIRF",
//     subtitle: "#64 Rank Nationally",
//     logo: rankingImage4,
//   },
// ];

// const stats = [
//   {
//     id: "students",
//     value: "8010",
//     labelTop: "Students Enrolled in 2024",
//     // labelBottom: "in 2024",
//   },
//   {
//     id: "programs",
//     value: "70+",
//     labelTop: "Programmes Offered",
//     // labelBottom: "Offered",
//   },
//   { id: "faculty", value: "370+", labelTop: "Faculty", labelBottom: "Members" },
// ];

// export default function RankingsPage() {
//   return (
//     <Box
//       sx={{
//         pb: { xs: 4, md: 10 },
//         // faint bottom gradient like the screenshot
//         // position: "relative",
//         // "&:after": {
//         //   content: '""',
//         //   position: "absolute",
//         //   left: 0,
//         //   right: 0,
//         //   bottom: 0,
//         //   height: 140,
//         //   background:
//         //     "linear-gradient(to bottom, rgba(133,76,255,0) 0%, rgba(133,76,255,0.08) 100%)",
//         //   pointerEvents: "none",
//         // },
//       }}
//     >
//       <Box>
//         {/* Heading */}
//         <Box sx={{ textAlign: "center", mb: { xs: "24px", sm: "48px" } }}>
//           <Typography
//             variant="headingTextNewsreaderMedium"
//             sx={{ fontWeight: 600 }}
//           >
//             Rankings & Outcomes
//           </Typography>
//           <Typography
//             variant="secondaryTextInterRegular"
//             // color="text.secondary"
//             sx={{
//               display: "block",
//               // mt: 2,
//               // color:"#303030"
//               mt: { sm: "24px", xs: "12.8px" },
//               maxWidth: { xs: "318px", sm: "595px", md: "500px", lg: "595px" },
//               mx: "auto",
//             }}
//           >
//             We challenge the status quo and are honoured to be recognised for
//             the impact we create.
//           </Typography>
//         </Box>

//         {/* Badges row */}

//     <Grid
//       container
//       spacing={4}
//       alignItems="center" // ensures all grid items are same height
//       justifyContent="center"
//       sx={{
//         mb: { xs: 4, md: 6 },
//       }}
//     >
//       {badges.map((b) => (
//         <Grid
//           item
//           key={b.id}
//         size={{
//           xs:6,
//           md:2.5
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: "column",
//               alignItems: "center",
//               height: "100%",
//               minHeight: { xs: "0", sm: 200 }, // ensures equal card height
//             }}
//           >
//             <Box
//               sx={{
//                 textAlign: "center",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 height: "100%",
//               }}
//             >
//               <Box
//                 component="img"
//                 src={b.logo}
//                 alt={b.title}
//                 sx={{
//                   width: { xs: "40%", sm: "30%", md: "20%", lg: "40%" },
//                   height: "auto",
//                   objectFit: "cover",
//                   mx: "auto",
//                   mb: 2,
//                 }}
//               />
//             </Box>

//             <Box sx={{ textAlign: "center" }}>
//               <Typography
//                 variant="navbarMenuItemText"
//                 sx={{
//                   display: "block",
//                   color: "var(--brand-palatte-text-color)",
//                 }}
//               >
//                 {b.title}
//               </Typography>
//               <Typography
//                 variant="bodyTextSmallInterRegular"
//                 color="var(--brand-palette-text-secondary)"
//               >
//                 {b.subtitle}
//               </Typography>
//             </Box>
//           </Box>
//         </Grid>
//       ))}
//     </Grid>

// ```

//         {/* <Divider /> */}

//         {/* Stats row */}
//         <Grid
//           container
//           spacing={4}
//           justifyContent="center"
//           sx={{ pt: { xs: 3, md: "80px" }, px: "10px" }}
//         >
//           {stats.map((s) => (
//             <Grid key={s.id} size={{ xs: 4, sm: 2.5, md: 2.5 }}>
//               <Box sx={{ textAlign: "center" }}>
//                 <Typography
//                   variant="primaryHeadingText"
//                   sx={{
//                     fontFamily: "Inter",
//                     fontWeight: 500,
//                     display: "block",
//                   }}
//                 >
//                   {s.value}
//                 </Typography>
//                 {/* variant="navbarMenuItemText" */}
//                 <Typography variant="navbarMenuItemText" color="text.secondary">
//                   {s.labelTop}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {s.labelBottom}
//                 </Typography>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// }
