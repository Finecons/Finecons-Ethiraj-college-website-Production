// // OurPrograms.js
// import { Box, Typography, Paper, Grid, Divider, Stack,SvgIcon  } from "@mui/material";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import OurProgramsImg1 from "../Assets/source_image.png";
// import ArrowPng from "../Assets/arrowIcon.svg"; // if your file is jpg/png

// function ArrowIcon(props) {
//   return (
//     <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: 24 }} {...props}>
//       <image href={ArrowPng} width="24" height="24" />
//     </SvgIcon>
//   );
// }

// export default function OurPrograms() {
//   return (
//     <Box sx={{ px: { xs: 2, sm: 3, md: 6 }, py: { xs: 6, md: 10 }, maxWidth: 1400, mx: "auto" }}>
//       <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
//         {/* LEFT: Stack with 3 rows */}
//         <Grid item xs={12} md={6}>
//           <Typography
//             variant="h4"
//             fontWeight={700}
//             sx={{ fontSize: { xs: 26, sm: 32, md: 36 }, mb: { xs: 2, sm: 3 } }}
//           >
//             Our Programs
//           </Typography>

//           <Typography variant="body1" color="text.secondary" sx={{ mb: { xs: 3, sm: 4 }, maxWidth: 560 }}>
//             Discover 70+ programs across Science, Commerce, Business, and more guided by expert faculty. [8]
//           </Typography>

//           <Stack spacing={0}>
//             {/* Row 1 */}
//             <Box sx={{ py: { xs: 2, sm: 3 }, borderBottom: (t) => `1px solid ${t.palette.divider}` }}>
//               <Grid container alignItems="center" columnSpacing={1}>
//                 <Grid item xs>
//                   <Typography variant="h5" fontWeight={800} sx={{ fontSize: { xs: 22, sm: 26, md: 28 } }}>
//                     UNDER GRADUATE
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ :: 1, pr: { sm: 5 } }}>
//                     The college offers 26 undergraduate programs such as B.A, BBA, B.Com, B.Com (Hons), and B.Sc.
//                   </Typography>
//                 </Grid>
//                 <Grid item>
//                   <ArrowIcon sx={{ color: "text.primary" }} />
//                 </Grid>
//               </Grid>
//             </Box>

//             {/* Row 2 */}
//             <Box sx={{ py: { xs: 2, sm: 3 }, borderBottom: (t) => `1px solid ${t.palette.divider}` }}>
//               <Grid container alignItems="center" columnSpacing={1}>
//                 <Grid item xs>
//                   <Typography variant="h5" fontWeight={800} sx={{ fontSize: { xs: 22, sm: 26, md: 28 } }}>
//                     POST GRADUATE
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ :: 1, pr: { sm: 5 } }}>
//                     22 postgraduate programs including MBA and MCA.
//                   </Typography>
//                 </Grid>
//                 <Grid item>
//                   <ArrowIcon sx={{ color: "text.primary" }} />
//                 </Grid>
//               </Grid>
//             </Box>

//             {/* Row 3 */}
//             <Box sx={{ py: { xs: 2, sm: 3 }, borderBottom: (t) => `1px solid ${t.palette.divider}` }}>
//               <Grid container alignItems="center" columnSpacing={1}>
//                 <Grid item xs>
//                   <Typography variant="h5" fontWeight={800} sx={{ fontSize: { xs: 22, sm: 26, md: 28 } }}>
//                     RESEARCH PROGRAMS
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ :: 1, pr: { sm: 5 } }}>
//                     20+ Doctoral programmes offered by University of Madras.
//                   </Typography>
//                 </Grid>
//                 <Grid item>
//                   <ArrowIcon sx={{ color: "text.primary" }} />
//                 </Grid>
//               </Grid>
//             </Box>
//           </Stack>
//         </Grid>

//         {/* RIGHT: Image (stays right on md+, stacks below on xs/sm) */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               height: { xs: 260, sm: 340, md: 480 },
//               borderRadius: { xs: 3, md: 6 },
//               overflow: "hidden",
//             }}
//           >
//             <Box
//               component="img"
//               alt="Students collaborating"
//               src={OurProgramsImg1}
//               sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
//             />
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// OurPrograms.js
import { Box, Typography, Grid, Stack, SvgIcon } from "@mui/material";
import OurProgramsImg1 from "../Assets/source_image.png";
import OurProgramsImg2 from "../Assets/gallery4.jpg";

import ArrowAsset from "../Assets/arrowIcon.svg"; // or .png/.jpg
import CustomImageSlider from "../Components/CustomImageSlider/CustomImageSlider";
import { useNavigate } from "react-router-dom";
import CustomNextArrowIcon from "../Components/CustomNextArrowIcon/CustomNextArrowIcon";
import { adminUrl } from "../constants";

// Prefer SVG. If ArrowAsset is an SVG file, this stays crisp at any size.
// For PNG/JPG it still works, just won't recolor via CSS.
function ArrowIcon(props) {
  return (
    <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: 24 }} {...props}>
      <image href={ArrowAsset} width="24px" />
    </SvgIcon>
  );
}

const sections1 = [
  {
    key: "ug",
    title: "UNDER GRADUATE",
    description:
      "The college offers 26 undergraduate programs for aided and self-supporting candidates such as B.A, BBA, B.Com, B.Com (Hons), and B.Sc programmes.",
  },
  {
    key: "pg",
    title: "POST GRADUATE",
    description:
      "22 programs at the postgraduate level are offered for candidates including Master of Business Administration (MBA) and Master of Computer Application (MCA).",
  },
  {
    key: "research",
    title: "RESEARCH PROGRAMS",
    description:
      "20+ Doctoral programmes and it is offered by University of Madras",
  },
];

//

export default function OurPrograms({ ourProgramDatas }) {
  const navigate = useNavigate();

  console.log(ourProgramDatas, "ourProgramDatas");

  const images1 = [OurProgramsImg1, OurProgramsImg2]; // your images
  const images =
    ourProgramDatas[0]?.additional_data?.banner?.length > 0
      ? ourProgramDatas[0]?.additional_data?.banner?.map((data) => `${data}`)
      : images1;
  const sections = [
    {
      title: "UNDER GRADUATE",
      description: ourProgramDatas[0]?.additional_data?.card_content[0]?.content
        ? ourProgramDatas[0]?.additional_data?.card_content[0]?.content
        : "dsdsThe college offers 26 undergraduate programs for aided and self-supporting candidates such as B.A, BBA, B.Com, B.Com (Hons) and B.Sc programmes.",
      link: "/academics/programlist",
      state: { level: "Undergraduate Programmes" },
    },
    {
      title: "POST GRADUATE",
      description: ourProgramDatas[0]?.additional_data?.card_content[1]?.content
        ? ourProgramDatas[0]?.additional_data?.card_content[1]?.content
        : "22 programs at the postgraduate level are offered for candidates including Master of Business Administration (MBA) and Master of Computer Application (MCA).",
      link: "/academics/programlist",
      state: { level: "Postgraduate Programmes" },
    },
    {
      title: "RESEARCH PROGRAMS",
      description: ourProgramDatas[0]?.additional_data?.card_content[2]?.content
        ? ourProgramDatas[0]?.additional_data?.card_content[2]?.content
        : "20+ Doctoral programmes and it is offered by University of Madras",
      link: "/academics/programlist",
      state: { level: "PhD Programmes" },
    },
  ];
  return (
    <Box
      sx={{
        // px: { xs: 2, sm: 3, md: 4, lg: 6 },
        // px: { xs: 2, sm: 3, md: "74px", lg: "94px" },

        py: { xs: 6, md: 10 },
      }}
    >
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
        {/* LEFT: heading + intro + 3 underlined rows */}
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              color: "var(--heading-text-primary)",
              // fontFamily: "Newsreader, serif",
              // fontStyle: "normal",
              // fontWeight: 500,
              // lineHeight: "52px",
              // fontSize: { xs: "26px", sm: "32px", md: "36px", lg: "45px" },
              mb: { xs: 2, sm: 2 },
            }}
          >
            {ourProgramDatas[0]?.heading
              ? ourProgramDatas[0]?.heading
              : "Our Programs"}
          </Typography>

          <Typography
            variant="typographyBodyInterMaintext"
            // color="text.secondary"
            sx={{
              color: "var(--brand-palatte-text-color)",
              mb: { xs: 3, sm: 4 },
              display: "block",
              maxWidth: "543px",
            }}
          >
            {ourProgramDatas[0]?.content
              ? ourProgramDatas[0]?.content
              : "Discover 70+ programs across Science, Commerce, Business, and more.At Ethiraj you’ll explore diverse fields of study guided by expert faculty."}
          </Typography>

          <Stack spacing={0} sx={{ mt: { xs: "60px", md: "60px" } }}>
            {/* Row 1 */}
            {sections.map((item, index) => (
              <Box
                key={item.index}
                onClick={() => {
                  navigate(item?.link, { state: item?.state });
                }}
                sx={{
                  py: { xs: "20px", sm: "20px" },
                  px: { xs: "5px" },
                  cursor: "pointer",

                  borderBottom: (t) => `0.535px solid #6C757D`,
                  transition: "background 0.3s ease", // smooth background transition

                  "&:hover": {
                    background: "hsla(300, 100%, 95%, 1)",
                  },
                }}
              >
                <Grid container alignItems="center" columnSpacing={4}>
                  <Grid
                    size={{ xs: 12 }}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="subHeadingTextInterMedium"
                      sx={{
                        // fontFamily: "Inter, sans-serif",
                        // fontStyle: "normal",
                        // fontWeight: 500,
                        // fontSize: { xs: "22px", sm: "26px", md: "32px" },
                        // lineHeight: "44px",

                        color: "var(--brand-palatte-text-color)",
                        textTransform: "uppercase", // keeps "UNDER GRADUATE"
                      }}
                    >
                      {item.title}
                    </Typography>
                    {/* <ArrowIcon sx={{ color: "text.primary" }} />
                     */}
                    <CustomNextArrowIcon style={{ fontSize: "25px" }} />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Typography
                      variant="typographyBodyInterNormal"
                      // color="text.secondary"
                      sx={{
                        color: "var(--brand-palette-text-secondary)",
                        // :: 1,
                        pt: { xs: "24px" },
                        display: "block",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}
           
          </Stack>
        </Grid>

        {/* RIGHT: image — stays right on md+, stacks below on xs/sm */}
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          {/* <Box
            sx={{
              height: { xs: 260, sm: 340, md: "100%" },
              borderRadius: { xs: 3, md: 6 },
              overflow: "hidden",
            }}
          >
          </Box> */}
          <CustomImageSlider images={images} />
        </Grid>
      </Grid>
    </Box>
  );
}
