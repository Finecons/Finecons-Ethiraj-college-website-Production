// // ResearchAtEthiraj.js
// import {
//   Box,
//   Grid,
//   Typography,
//   Stack,
//   Chip,
//   Button,
//   Card,
//   CardContent,
//   SvgIcon,
//   Table,
//   TableBody,
//   TableRow,
//   TableCell,
// } from "@mui/material";
// import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";

// // Replace with real images
// import Patent1 from "../Assets/ResearchAtEthirajImg1.png";
// import Patent2 from "../Assets/ResearchAtEthirajImg2.png";
// import CustomMetaChips from "../Components/CustomMetaChips/CustomMetaChips";
// import ArrowAsset from "../Assets/arrowIcon.svg"; // or .png/.jpg
// import CustomImageSlider from "../Components/CustomImageSlider/CustomImageSlider";
// import CustomImageSliderNext from "../Components/CustomImageSliderNext/CustomImageSliderNext";
// import CustomNextButton from "../Components/CustomNextButton/CustomNextButton";
// import CustomGallerySildeShow from "../Components/CustomGallerySildeShow/CustomGallerySildeShow";
// import facilityImage1 from "../Assets/researchHome1.jpg";
// import facilityImage2 from "../Assets/research21.jpg";
// import facilityImage3 from "../Assets/researchHome3.jpg";

// // Prefer SVG. If ArrowAsset is an SVG file, this stays crisp at any size.
// // For PNG/JPG it still works, just won't recolor via CSS.
// function ArrowIcon(props) {
//   return (
//     <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: 24 }} {...props}>
//       <image
//         href={ArrowAsset}
//         width="24"
//         height="24"
//         x="0"
//         y="0"
//         preserveAspectRatio="xMidYMid meet"
//       />
//     </SvgIcon>
//   );
// }

// function PatentThumb({ src, caption }) {
//   return (
//     <Box>
//       <Box
//         component="img"
//         src={src}
//         alt={caption}
//         sx={{
//           // width: { xs: 160, sm: "100%", md: "300px", lg: "361px" },
//           width: "100%",

//           height: { xs: 160, sm: "320px", md: "300px", lg: "361px" },
//           objectFit: "cover",
//           borderRadius: 1,
//           border: (t) => `1px solid ${t.palette.divider}`,
//         }}
//       />
//       <Typography
//         variant="typographyBodyInterNormalSmall"
//         // color="text.secondary"
//         sx={{
//           mt: 1,
//           display: "block",
//           color: "var(--brand-palatte-text-color)",
//         }}
//       >
//         {caption}
//       </Typography>
//     </Box>
//   );
// }

// function MetaChips({ date, topic }) {
//   return (
//     <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
//       <Chip size="small" variant="outlined" label={date} />
//       <Chip size="small" variant="outlined" label={topic} />
//     </Stack>
//   );
// }
// const patentItems = [
//   {
//     src: Patent1,
//     caption: "Patent for coagulant/ dye synthesis (sheet)",
//   },
//   {
//     src: Patent2,
//     caption: "Patent for fortified spices (sheet)",
//   },
// ];

// function ArticleCard({ title, blurb, date, topic }) {
//   return (
//     <Card
//       elevation={0}
//       sx={{
//         borderRadius: 0,
//         background: "none",
//         p: 0,
//         borderBottom: (t) => `1px solid ${t.palette.divider}`,
//       }}
//     >
//       <CardContent sx={{ p: { xs: 0, sm: "0" } }}>
//         <Typography
//           variant="typographyContentHeadingResearch"
//           sx={{
//             // fontSize: { xs: 18, sm: 20 },
//             // fontWeight: 700,
//             // lineHeight: 1.4,
//             pb: "24px",
//             color: "var(--brand-palatte-text-color)",
//           }}
//         >
//           {title}
//         </Typography>
//         <Typography
//           variant="typographyBodyContent"
//           sx={{
//             color: "var(--brand-palette-text-secondary)",
//             pb: { sm: "24px", xs: "14px" },
//           }}
//         >
//           {blurb}
//         </Typography>
//         <CustomMetaChips date={date} topic={topic} />
//       </CardContent>
//     </Card>
//   );
// }

// export default function ResearchAtEthiraj() {
//   const Images = [
//     {
//       title: "img1",
//       img: facilityImage1,
//     },
//     {
//       title: "img2",
//       img: facilityImage2,
//     },
//     {
//       title: "img3",
//       img: facilityImage3,
//     },
//   ];

//   const researchHighlights = [
//     {
//       title:
//         "Research published on environmental remediation on Material Chemistry and Physics",
//       facultyName: "Kowsalya S. and Sudhaparmila S.",
//       // publisher: "Material Chemistry and Physics",
//       date: "2025",
//     },
//     {
//       title:
//         "Collaborative Research with scientists from Amrita Vishwa Vidyapeetham, published in ScienceDirect.",
//       facultyName: "Sushira Selvam",
//       // publisher: "ScienceDirect",
//       date: "2025",
//     },
//     {
//       title: "Received patent for Copolyester and Synthesis thereof",
//       facultyName: "Patent no. 465582",
//       // publisher: "Patent no. 465582",
//       date: "2022",
//     },
//     {
//       title: "Received patent for fortified eggless cake premix",
//       facultyName: "Patent no. 411596",
//       // publisher: "Patent no. 411596",
//       date: "2019",
//     },
//   ];

//   return (
//     <Box
//       // sx={{ px: { xs: 2, sm: 3, md: 6 },
//       sx={{
//         // px: { xs: 2, sm: 3, md: "74px",lg:"94px"},

//         py: { xs: 6, md:6 },
//       }}
//     >
//       <Grid container spacing={{ xs: 2, md: 4 }}>
//         {/* LEFT: Patents column */}
//         <Grid size={{ xs: 12 }}>
//           <Typography
//             variant="headingTextNewsreaderMedium"
//             sx={{
//               // pb: { sm: "48px", xs: "24px" },
//               color: "var(--heading-text-primary)",
//               // width: { sm: "274px", md: "100%" },
//             }}
//           >
//             Research at Ethiraj
//           </Typography>
//         </Grid>
//         <Grid size={{ xs: 12, sm: 9, md: 9, lg: 9 }}>
//           <Typography
//             variant="typographySubheadingText"
//             sx={{
//               // maxWidth: 841,
//               color: "var(--brand-palatte-text-color)",
//             }}
//           >
//             Ethiraj Centre for Research Innovation and Creativity (ECRIC) drives
//             faculty and student research, supporting projects and patents across
//             sciences, humanities, and applied disciplines to create real‑world
//             impact.
//           </Typography>
//         </Grid>
//         <Grid size={{ xs: 12, sm: 3, md: 3, lg: 3 }}>
//           <Typography
//             variant="headingTextNewsreaderMedium"
//             sx={{
//               pb: { sm: "48px", xs: "24px" },
//               color: "var(--heading-text-primary)",
//               width: { sm: "274px", md: "100%" },
//             }}
//           >
//             <CustomNextButton buttonText="LEARN MORE" />
//           </Typography>
//         </Grid>

//         {/* RIGHT: Articles column */}
//         <Grid size={{ xs: 12 }}>
//           <Typography
//             variant="subHeadingTextInterMedium"
//             id="facilities-section"
//             sx={{ mb: "16px" }}
//           >
//             Infrastructure & Facilities
//           </Typography>

//           <CustomGallerySildeShow images={Images} />
//           <Typography
//             variant="subHeadingTextInterMedium"
//             sx={{ pb: "15px", mt: { xs: "44px", md: "40px"} }}
//           >
//             Research Highlights
//           </Typography>

//           <Table>
//             <TableBody>
//               {researchHighlights?.map((item, index) => (
//                 <TableRow key={index} spacing={2}>
//                   {/* <TableCell sx={{ width: "55%" }}></TableCell> */}
//                   <TableCell
//                     sx={{
//                       textAlign: "start",
//                       pl: 0,
//                       pt: {
//                         lg: "53px",
//                         md: "40px",
//                         sm: "40px",
//                         xs: "32px",
//                       },
//                       pb: {
//                         lg: "29px",
//                         md: "24px",
//                         sm: "24px",
//                         xs: "16px",
//                       },
//                       borderBottom: "1px solid gray",
//                       verticalAlign: "top",
//                     }}
//                   >
//                     <Typography
//                       variant="typographyBodyInterMaintext"
//                       sx={{
//                         fontFamily: "Newsreader",
//                         fontWeight: "500 !important",
//                       }}
//                     >
//                       {item?.title}
//                     </Typography>
//                   </TableCell>
//                   <TableCell
//                     sx={{
//                       textAlign: "start",
//                       verticalAlign: "top",

//                       pl: 0,

//                       pt: {
//                         lg: "53px",
//                         md: "40px",
//                         sm: "40px",
//                         xs: "32px",
//                       },
//                       pb: {
//                         lg: "29px",
//                         md: "24px",
//                         sm: "24px",
//                         xs: "16px",
//                       },
//                       borderBottom: "1px solid gray",
//                       px: "20px",
//                     }}
//                   >
//                     <Box>
//                       <Typography variant="typographyBodyInterNormal">
//                         {item?.facultyName}
//                       </Typography>
//                     </Box>
//                   </TableCell>

//                   <TableCell
//                     sx={{
//                       textAlign: "start",
//                       pl: 0,

//                       pt: {
//                         lg: "53px",
//                         md: "40px",
//                         sm: "40px",
//                         xs: "32px",
//                       },
//                       pb: {
//                         lg: "29px",
//                         md: "24px",
//                         sm: "24px",
//                         xs: "16px",
//                       },

//                       borderBottom: "1px solid gray",
//                       verticalAlign: "top",
//                     }}
//                   >
//                     <Typography variant="typographyBodyInterNormal">
//                       {item?.date}
//                     </Typography>
//                   </TableCell>
//                   {/* <TableCell>{item.person}</TableCell> */}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// ResearchAtEthiraj.js
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Stack,
  Chip,
  Button,
  Card,
  CardContent,
  SvgIcon,
  IconButton,
} from "@mui/material";
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Replace with real images
import Patent1 from "../Assets/ResearchAtEthirajImg1.png";
import Patent2 from "../Assets/ResearchAtEthirajImg2.png";
import CustomMetaChips from "../Components/CustomMetaChips/CustomMetaChips";
import ArrowAsset from "../Assets/arrowIcon.svg";

function ArrowIcon(props) {
  return (
    <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: 24 }} {...props}>
      <image
        href={ArrowAsset}
        width="24"
        height="24"
        x="0"
        y="0"
        preserveAspectRatio="xMidYMid meet"
      />
    </SvgIcon>
  );
}

function PatentThumb({ src, caption }) {
  return (
    <Box>
      <Box
        component="img"
        src={src}
        alt={caption}
        sx={{
          width: { xs: "100%", sm: "100%", md: "300px", lg: "361px" },
          height: { xs: 350, sm: 350, md: "300px", lg: "361px" },
          // height:"auto",
          objectFit: "contian",
          alignSelf: "stretch",
          borderRadius: 1,
          border: (t) => `1px solid ${t.palette.divider}`,
        }}
      />
      <Typography
        variant="typographyBodyInterNormalSmall"
        sx={{
          mt: 1,
          display: "block",
          color: "var(--brand-palatte-text-color)",
        }}
      >
        {caption}
      </Typography>
    </Box>
  );
}

function ArticleCard({ title, blurb, date, topic }) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 0,
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <CardContent sx={{ P: "20px" }}>
        <Typography
          variant="typographyContentHeading"
          sx={{
            pb: "24px",
            color: "var(--brand-palatte-text-color)",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="typographyBodyContent"
          sx={{
            color: "var(--brand-palette-text-secondary)",
            pb: { sm: "24px", xs: "14px" },
          }}
        >
          {blurb}
        </Typography>
        <CustomMetaChips date={date} topic={topic} />
      </CardContent>
    </Card>
  );
}

export default function ResearchAtEthiraj() {
  const patents = [
    {
      src: Patent1,
      caption: "Patent for coagulant/ dye synthesis (sheet)",
    },
    {
      src: Patent2,
      caption: "Patent for fortified spices (sheet)",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < patents.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 6 }, py: { xs: 6, md: 10 } }}>
      <Grid container spacing={{ xs: 4, md: 6 }}>
        {/* LEFT: Research heading */}
        <Grid size={{ xs: 12, sm: 5, md: 5, lg: 5 }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              pb: "48px",
              color: "var(--heading-text-primary)",
              width: { sm: "274px", md: "100%" },
            }}
          >
            Research at Ethiraj
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 7, md: 7, lg: 7 }}>
          <Typography
            variant="typographySubheadingText"
            sx={{ maxWidth: 841, color: "var(--brand-palatte-text-color)" }}
          >
            Ethiraj Centre for Research Innovation and Creativity (ECRIC) drives
            faculty and student research, supporting projects and patents across
            sciences, humanities, and applied disciplines to create real-world
            impact.
          </Typography>
        </Grid>

        {/* Patents section for desktop */}
        {/* <Grid
          size={{ xs: 12, md: 5, lg: 5 }}
          sx={{ display: { md: "block", xs: "none" } }}
        >
          <Typography
            variant="subHeadingTextInterMedium"
            sx={{ p: "10px", pb: "32px" }}
          >
            Patents
          </Typography>

          <Stack spacing={3}>
            <PatentThumb
              src={Patent1}
              caption="Patent for coagulant/ dye synthesis (sheet)"
            />
            <PatentThumb
              src={Patent2}
              caption="Patent for fortified spices (sheet)"
            />
          </Stack>
        </Grid> */}
        {/* Mobile patents with horizontal scroll + arrows */}
        <Grid size={{ xs: 12 }} sx={{ display: { xs: "block", md: "none" } }}>
          <Typography
            variant="subHeadingTextInterMedium"
            sx={{ p: "10px", pb: "16px" }}
          >
            Patents
          </Typography>

          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              gap: 2,
              px: 2,
            }}
          >
            {patents.map((patent, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 85%", // show full + part of next (~1/4 visible)
                  scrollSnapAlign: "start",
                }}
              >
                <PatentThumb src={patent.src} caption={patent.caption} />
              </Box>
            ))}
          </Box>
        </Grid>

        {/* RIGHT: Articles column */}
        <Grid size={{ xs: 12, md: 7, lg: 7 }}>
          <Typography variant="subHeadingTextInterMedium" sx={{ pb: "15px" }}>
            Research Articles
          </Typography>

          <Box>
            <ArticleCard
              title="New Study Demonstrates Sustainable Catalytic Use of Hydroxyapatite for Water Purification"
              blurb="Kowsalya S. and Sudhaparimala S. published on environmental remediation in Materials Chemistry and Physics (vol. 7, 47)."
              date="June 2025"
              topic="Chemistry"
            />
            <ArticleCard
              title="Do Triazolium-Based Ionic Liquids Stabilize Proteins and Enable Better Photophysical Performance? Promising Early Results"
              blurb="A collaborative research study by Sushira Selvam with scientists from Amrita Vishva Vidyapeetham, published in ScienceDirect."
              date="June 2025"
              topic="Chemistry"
            />
          </Box>

          <Button
            variant="outlined"
            endIcon={
              <ArrowIcon sx={{ fontSize: 20, color: "#212529", ml: "5px" }} />
            }
            sx={{
              mt: { md: "64px", xs: "30px" },
              fontSize: { md: "15px", sm: "15px" },
              fontWeight: 400,
              borderRadius: 999,
              textTransform: "none",
              color: "#212529",
              borderColor: "black",
              px: 2.5,
              height: 40,
              "& .MuiButton-endIcon": {
                margin: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
          >
            View all research articles
          </Button>
        </Grid>

        {/* Mobile patents with next/prev buttons */}
        <Grid size={{ xs: 12 }} sx={{ display: { xs: "block", md: "none" } }}>
          <Typography
            variant="subHeadingTextInterMedium"
            sx={{ p: "10px", pb: "16px" }}
          >
            Patents
          </Typography>

          <Box display="flex" justifyContent="center">
            <PatentThumb
              src={patents[currentIndex].src}
              caption={patents[currentIndex].caption}
            />
          </Box>

          {/* Navigation buttons */}
          <Stack
            direction="row"
            justifyContent="end"
            alignItems="center"
            sx={{ mt: 2, px: 4 }}
          >
            <IconButton
              onClick={handlePrev}
              disabled={currentIndex === 0}
              sx={{ border: "1px solid #ccc" }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={handleNext}
              disabled={currentIndex === patents.length - 1}
              sx={{ border: "1px solid #ccc" }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
