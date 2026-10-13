
// // OurPrograms.js
// import { Box, Typography, Grid, Stack, SvgIcon, Divider, Card, CardContent, CardMedia } from "@mui/material";
// import CustomSectionAccordion from "../../../Components/CustomSectionAccordion/CustomSectionAccordion";

// import Muralidharan from "../../../Assets/Muralidharan.png";

// import Catalyst1 from "../../../Assets/Catalyst1.jpg";
// import Catalyst2 from "../../../Assets/Catalyst2.jpg";
// import Catalyst3 from "../../../Assets/Catalyst3.jpg";
// import StudentsImg from "../../../Assets/campus-students.png";
// import CustomNextArrowIcon from "../../../Components/CustomNextArrowIcon/CustomNextArrowIcon";


// function FeatureCard({ title, desc, img }) {
//     return (
//         <Card
//             elevation={0}
//             sx={{
//                 height: "100%",
//                 bgcolor: "transparent",
//                 display: "flex",
//                 flexDirection: "column",
//             }}
//         >


//             {/* Image block */}
//             <Box
//                 sx={{
//                     mt: "24px",
//                     borderRadius: 1,
//                     overflow: "hidden",
//                     border: (t) => `1px solid ${t.palette.divider}`,
//                     aspectRatio: "1 / 1",
//                     //   width: { xs: 200, sm: 280, md: 341 },   // explicit widths per breakpoint
//                     // height: { xs: 200, sm: 280, md: 341 },  // explicit matching heights for square

//                     flexShrink: 0,
//                 }}
//             >
//                 <CardMedia
//                     component="img"
//                     image={img}
//                     alt={title}
//                     sx={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                         display: "block",
//                     }}
//                 />
//             </Box>
//             <CardContent
//                 sx={{
//                     px: 0,
//                     pt: 0,
//                     pb: 1.5,
//                     flexGrow: 1,
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-between",
//                     mt: { xs: "64px", md: "44px", lg: "64px" },

//                 }}
//             >
//                 <Stack
//                     direction="row"
//                     alignItems="center"
//                     justifyContent="space-between"
//                     sx={{ pr: 0.5 }}
//                 >
//                     <Typography variant="typographyCardContentHeading">
//                         {title}
//                     </Typography>
//                     <CustomNextArrowIcon sx={{ color: "text.primary" }} />
//                 </Stack>
//                 {/* <Typography
//           variant="typographyCardContentText"
//           // color="text.secondary"
//           sx={{
//             // color: "var(--brand-palette-text-secondary)",
//             color: "#616161",
//             // :: 1,
//             pt: { xs: "24px" },
//             pr: 2,
//             // mt: 1,
//             overflow: "hidden",
//             display: "-webkit-box",
//             WebkitLineClamp: 5, // limits description to 3 lines (adjust as needed)
//             WebkitBoxOrient: "vertical",
//             textOverflow: "ellipsis",
//             flexGrow: 1,
//           }}
//         >
//           {desc}
//         </Typography> */}
//             </CardContent>
//         </Card>
//     );
// }


// function CatalystPublications() {

//     const data = [
//         {
//             title: "Catalyst 1",
//             desc: "Our College Hostel is a vibrant and close‑knit community that serves as a home away from home for its residents.",
//             img: Catalyst1,
//         },
//         {
//             title: "Catalyst 2",
//             desc: "Join a community where passion meets performance, and every athlete has the opportunity to thrive.",
//             img: Catalyst2,
//         },
//         {
//             title: "Catalyst 3",
//             desc: "We offer a wide range of clubs that cater to diverse interests and talents.",
//             img: Catalyst3,
//         },

//     ];


//     return (
//         <Box
//             sx={{
//                 // px: { xs: 2, sm: 3, md: "30px", lg: "36px" },
//                 px: { xs: 2, sm: 3, md: "74px", lg: "94px" },

//                 py: { lg: "41px", md: "30px", sm: "30px", xs: "40px" },

//                 my: { xs: "85px", md: "20px" },
//             }}
//         >
//             <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
//                 {/* LEFT: heading + intro + 3 underlined rows */}

//                 <Grid size={{ xs: 12, sm: 12, md: 12 }}>
//                     <Typography
//                         variant="headingTextNewsreaderMedium"
//                         sx={{
//                             color: "var(--heading-text-primary)",
//                             // fontFamily: "Newsreader, serif",
//                             // fontStyle: "normal",
//                             // fontWeight: 500,
//                             // lineHeight: "52px",
//                             // fontSize: { xs: "26px", sm: "32px", md: "36px", lg: "45px" },
//                             mb: { xs: 2, sm: 2, md: "10px", lg: "28px" },
//                         }}
//                     >
//                         Catalyst Publications
//                     </Typography>

//                     <>
//                         <Typography
//                             // key={index}
//                             variant="typographySubheadingText"
//                             sx={{
//                                 color: "var(--brand-palatte-text-color)",
//                                 // mb: 2,
//                             }}
//                         >
//                             Annual academic publication to highlight research conducted by faculty members and students. It
//                         </Typography>
//                         <Typography
//                             // key={index}
//                             variant="typographySubheadingText"
//                             sx={{
//                                 color: "var(--brand-palatte-text-color)",
//                                 // mb: 2,
//                             }}
//                         >
//                             encourages scholarly writing, critical inquiry, and ethical research practices across disciplines.
//                         </Typography>
//                     </>
//                 </Grid>

//             </Grid>

//             <Grid
//                 container
//                 spacing={{ xs: 8, md: 4 }}
//                 sx={{
//                     // mt: { xs: "94px", md: "74px", lg: "94px" },
//                     px: { xs: "20px", md: 0 },
//                 }}
//             >
//                 {data.map((item) => (
//                     <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
//                         <FeatureCard {...item} />
//                     </Grid>
//                 ))}
//             </Grid>

//         </Box>
//     );
// }
// export default CatalystPublications;


// OurPrograms.js

import {
  Box,
  Typography,
  Grid,
  Stack,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

import CustomNextArrowIcon from "../../../Components/CustomNextArrowIcon/CustomNextArrowIcon";

// Images
import Catalyst1 from "../../../Assets/Catalyst1.jpg";
import Catalyst2 from "../../../Assets/Catalyst2.jpg";
import Catalyst3 from "../../../Assets/catalyst3.jpg";

// PDFs
import Catalyst1PDF from "../../../Assets/catelyst1pdf.pdf";
import Catalyst2PDF from "../../../Assets/catelyst2pdf.pdf";
import Catalyst3PDF from "../../../Assets/catelyst3pdf.pdf";



/* ============================= */
/* ======== Feature Card ======= */
/* ============================= */

function FeatureCard({ title, img, pdf }) {
  return (
    <a
      href={pdf}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Card
        elevation={0}
        sx={{
          height: "100%",
          bgcolor: "transparent",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        {/* Image Block */}
        <Box
          sx={{
            mt: "24px",
            borderRadius: 1,
            overflow: "hidden",
            border: (t) => `1px solid ${t.palette.divider}`,
            aspectRatio: "1 / 1",
            flexShrink: 0,
          }}
        >
          <CardMedia
            component="img"
            image={img}
            alt={title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>

        {/* Content */}
        <CardContent
          sx={{
            px: 0,
            pt: 0,
            pb: 1.5,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            mt: { xs: "64px", md: "44px", lg: "64px" },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ pr: 0.5 }}
          >
            <Typography variant="typographyCardContentHeading">
              {title}
            </Typography>
            <CustomNextArrowIcon sx={{ color: "text.primary" }} />
          </Stack>
        </CardContent>
      </Card>
    </a>
  );
}



/* ===================================== */
/* ===== Catalyst Publications ========= */
/* ===================================== */

function CatalystPublications({catalystPublicationsDatas}) {
  console.log(catalystPublicationsDatas,"catalystPublicationsDatas");
  
  // Static fallback data
  const staticData = [
    {
      title: "Catalyst 1",
      img: Catalyst1,
      pdf: Catalyst1PDF,
    },
    {
      title: "Catalyst 2",
      img: Catalyst2,
      pdf: Catalyst2PDF,
    },
    {
      title: "Catalyst 3",
      img: Catalyst3,
      pdf: Catalyst3PDF,
    },
  ];

  // Use API data if available, otherwise use static data
  const data = (catalystPublicationsDatas && catalystPublicationsDatas.length > 0 && catalystPublicationsDatas[0]?.additional_data?.publications?.length > 0)
    ? catalystPublicationsDatas[0].additional_data.publications.map((publication) => ({
      title: publication.title,
      img: publication.square_image,
      pdf: publication.pdf
    }))
    : staticData;

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
        py: { lg: "41px", md: "30px", sm: "30px", xs: "40px" },
        my: { xs: "85px", md: "20px" },
      }}
      id="annual-publications"
    >
      {/* Heading Section */}
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
        <Grid item size={{xs:12}}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              color: "var(--heading-text-primary)",
              mb: { xs: 2, sm: 2, md: "10px", lg: "28px" },
            }}
          >
            Catalyst Publications
          </Typography>

          <Typography
            variant="typographySubheadingText"
            sx={{ color: "var(--brand-palatte-text-color)" }}
          >
            Annual academic publication to highlight research conducted by faculty members and students. It encourages scholarly writing, critical inquiry, and ethical research practices across disciplines.
          </Typography>
        </Grid>
      </Grid>

      {/* Cards Section */}
      <Grid
        container
        spacing={{ xs: 8, md: 4 }}
        sx={{ px: { xs: "20px", md: 0 } }}
      >
        {data.map((item) => (
          <Grid item key={item.title} size={{xs:12,sm:6,md:4}}>
            <FeatureCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CatalystPublications;
