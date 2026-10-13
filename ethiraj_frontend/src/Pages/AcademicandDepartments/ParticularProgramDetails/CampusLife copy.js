// // CampusLife.js
// import {
//   Box,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
//   Stack,
//   SvgIcon
// } from "@mui/material";
// import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";
// import ArrowAsset from "../Assets/arrowIcon.svg"; // SVG preferred; PNG/JPG

// // Replace with real images
// import HostelImg from "../Assets/campus-hostel.png";
// import SportsImg from "../Assets/campus-sports.png";
// import ClubsImg from "../Assets/campus-clubs.png";
// import StudentsImg from "../Assets/campus-students.png";

// export function ArrowIcon(props) {
//   return (
//     <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: 18 }} {...props}>
//       <image href={ArrowAsset} width="24" height="24" />
//     </SvgIcon>
//   );
// }

// const data = [
//   {
//     title: "Hostel Life",
//     desc:
//       "Our College Hostel is a vibrant and close‑knit community that serves as a home away from home for its residents.",
//     img: HostelImg,
//   },
//   {
//     title: "Sports",
//     desc:
//       "Join a community where passion meets performance, and every athlete has the opportunity to thrive.",
//     img: SportsImg,
//   },
//   {
//     title: "Clubs",
//     desc:
//       "We offer a wide range of clubs that cater to diverse interests and talents.",
//     img: ClubsImg,
//   },
//   {
//     title: "Students",
//     desc:
//       "Our student union shapes leaders of tomorrow. They lead and manage clubs, activities and cultural events.",
//     img: StudentsImg,
//   },

// ];

// function FeatureCard({ title, desc, img }) {
//   return (
//     <Card
//       elevation={0}
//       sx={{
//         height: "100%",
//         bgcolor: "transparent",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <CardContent
//         sx={{
//           px: 0,
//           pt: 0,
//           pb: 1.5,
//           flexGrow: 1,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//         }}
//       >
//         <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pr: 0.5 }}>
//           <Typography variant="typographyContentHeading">
//             {title}
//           </Typography>
//           <ArrowIcon sx={{ color: "text.primary" }} />
//         </Stack>
//         <Typography
//           variant="typographyBodyInterNormal"
//           // color="text.secondary"
//           sx={{

//             color: "var(--brand-palette-text-secondary)",
//             // :: 1,
//             pt: { sm: "16px" },
//             pr: 2,
//             mt: 1,
//             overflow: "hidden",
//             display: "-webkit-box",
//             WebkitLineClamp: 3, // limits description to 3 lines (adjust as needed)
//             WebkitBoxOrient: "vertical",
//             textOverflow: "ellipsis",
//             flexGrow: 1,
//           }}
//         >
//           {desc}
//         </Typography>
//       </CardContent>

//       {/* Image block */}
//       <Box
//         sx={{
//           mt: 1.5,
//           borderRadius: 1,
//           overflow: "hidden",
//           border: (t) => `1px solid ${t.palette.divider}`,
//           aspectRatio: "1 / 1",
//           //   width: { xs: 200, sm: 280, md: 341 },   // explicit widths per breakpoint
//           // height: { xs: 200, sm: 280, md: 341 },  // explicit matching heights for square

//           flexShrink: 0,
//         }}
//       >
//         <CardMedia
//           component="img"
//           image={img}
//           alt={title}
//           sx={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             display: "block",
//           }}
//         />
//       </Box>
//     </Card>

//   );
// }

// export default function CampusLife() {
//   return (
//     <Box sx={{ px: { xs: 2, sm: 3, md: 6 }, py: { xs: 6, md: 10 } }}>
//       {/* Header row */}
//       <Grid container alignItems="center" spacing={2}>
//         <Grid size={{ xs: 12, md: 8 }}>
//           <Typography variant="headingTextNewsreaderMedium" sx={{
//             color: "var(--heading-text-primary)",
//             // fontFamily: "Newsreader, serif",
//             // fontStyle: "normal",
//             // fontWeight: 500,
//             // lineHeight: "52px",
//             // fontSize: { xs: "26px", sm: "32px", md: "36px", lg: "45px" },
//             mb: { xs: 2, sm: 2 },
//           }}>
//             Campus Life
//           </Typography>
//           <Typography

//             // variant="secondaryTextInterRegular"
//             //  color="text.secondary"
//             //   sx={{ mt: 2, maxWidth: 922 }}
//             variant="typographyBodyInterNormal"
//             // color="text.secondary"
//             sx={{
//               color: "var(--brand-palatte-text-color)",
//               mb: { xs: 3, sm: 4 },
//               display: "block",
//               maxWidth: "922px",
//             }}

//           >
//             With diverse activities and facilities, students enjoy a holistic campus experience balancing academics, clubs, events, and more.
//           </Typography>
//         </Grid>
//         <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" }, mt: { xs: 1, md: 0 } }}>
//           <Button
//             variant="outlined"
//             endIcon={
//               <ArrowIcon sx={{ fontSize: 20, color: "#212529", ml: "5px" }} />
//             }
//             sx={{
//               mt: { md: "64px", xs: "30px" },
//               fontSize: { md: "15px", sm: "15px" },
//               fontWeight: 400,
//               borderRadius: 999,
//               textTransform: "none",
//               color: "#212529",
//               px: 2.5,
//               height: 40,
//               borderColor: "black",
//               "& .MuiButton-endIcon": {
//                 margin: 0, // remove default margin
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center", // force center
//               },
//             }}
//           >
//             View all research articles
//           </Button>
//         </Grid>
//       </Grid>

//       {/* Cards grid */}
//       <Grid
//         container
//         spacing={{ xs: 3, md: 4 }}
//         sx={{ mt: { xs: 3, md: 5 } }}
//       >
//         {data.map((item) => (
//           <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
//             <FeatureCard {...item} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

// CampusLife.js
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
  SvgIcon,
} from "@mui/material";
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowAsset from "../Assets/arrowIcon.svg"; // SVG preferred; PNG/JPG

// Replace with real images
import HostelImg from "../Assets/campus-hostel.png";
import SportsImg from "../Assets/campus-sports.png";
import ClubsImg from "../Assets/campus-clubs.png";
import StudentsImg from "../Assets/campus-students.png";
import CustomNextButton from "../Components/CustomNextButton/CustomNextButton";
// import { GoArrowRight } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import CustomNextArrowIcon from "../Components/CustomNextArrowIcon/CustomNextArrowIcon";

// export function ArrowIcon(props) {
//   return (
//     // <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: 18 }} {...props}>
//     //   <path
//     //     d="M8 5l8 7-8 7"
//     //     fill="none"
//     //     stroke="currentColor"
//     //     strokeWidth="2"
//     //     strokeLinecap="round"
//     //     strokeLinejoin="round"
//     //   />
//     // </SvgIcon>
//     <BsArrowRight  style={{color:"red",fontSize:"30px"}}/>
//   );
// }

const data = [
  {
    title: "Hostel Life",
    desc: "Our College Hostel is a vibrant and close‑knit community that serves as a home away from home for its residents.",
    img: HostelImg,
  },
  {
    title: "Sports",
    desc: "Join a community where passion meets performance, and every athlete has the opportunity to thrive.",
    img: SportsImg,
  },
  {
    title: "Clubs",
    desc: "We offer a wide range of clubs that cater to diverse interests and talents.",
    img: ClubsImg,
  },
  {
    title: "Students",
    desc: "Our student union shapes leaders of tomorrow. They lead and manage clubs, activities and cultural events.",
    img: StudentsImg,
  },
];

function FeatureCard({ title, desc, img }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        bgcolor: "transparent",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          px: 0,
          pt: 0,
          pb: 1.5,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
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
        <Typography
          variant="typographyCardContentText"
          // color="text.secondary"
          sx={{
            // color: "var(--brand-palette-text-secondary)",
            color: "#616161",
            // :: 1,
            pt: { xs: "24px" },
            pr: 2,
            // mt: 1,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 5, // limits description to 3 lines (adjust as needed)
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
            flexGrow: 1,
          }}
        >
          {desc}
        </Typography>
      </CardContent>

      {/* Image block */}
      <Box
        sx={{
          mt: "24px",
          borderRadius: 1,
          overflow: "hidden",
          border: (t) => `1px solid ${t.palette.divider}`,
          aspectRatio: "1 / 1",
          //   width: { xs: 200, sm: 280, md: 341 },   // explicit widths per breakpoint
          // height: { xs: 200, sm: 280, md: 341 },  // explicit matching heights for square

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
    </Card>
  );
}

export default function CampusLife() {
  return (
    <Box
      sx={{
        // px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 6, md: 10 },
      }}
    >
      {/* Header row */}
      <Grid container alignItems="center" spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
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
            Campus Life
          </Typography>
          <Typography
            // variant="secondaryTextInterRegular"
            //  color="text.secondary"
            //   sx={{ mt: 2, maxWidth: 922 }}
            variant="typographySubheadingText"
            // color="text.secondary"
            sx={{
              color: "var(--brand-palatte-text-color)",
              mb: { xs: "32px", sm: "32px" },
              display: "block",
              maxWidth: "922px",
            }}
          >
            With diverse activities and facilities, students enjoy a holistic
            campus experience balancing academics, clubs, events, and more.
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            alignItems: "center",
            mt: { xs: 1, md: 0 },
          }}
        >
          {/* <Button
            variant="outlined"
            endIcon={
              <ArrowIcon sx={{ fontSize: 20, color: "#212529", ml: "5px" }} /> 
            }
            sx={{
              mt: 0,
              fontSize: { md: "15px", sm: "15px" },
              fontWeight: 400,
              borderRadius: 999,
              textTransform: "none",
              color: "#212529",
              px: 2.5,
              height: 40,
              borderColor: "black",
              "& .MuiButton-endIcon": {
                margin: 0, // remove default margin
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // force center
              },
            }}
          >
            VIEW ALL FACILITIES
          </Button> */}

          <CustomNextButton buttonText="VIEW ALL FACILITIES" />
        </Grid>
      </Grid>

      {/* Cards grid */}
      <Grid
        container
        spacing={{ xs: 8, md: 4 }}
        sx={{
          mt: { xs: "94px", md: "74px", lg: "94px" },
          px: { xs: "20px", md: 0 },
        }}
      >
        {data.map((item) => (
          <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <FeatureCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
