// // NewsEvents.js
// import {
//   Box,
//   Grid,
//   Typography,
//   Divider,
//   Button,
//   Stack,
//   Card,
//   CardContent,
//   SvgIcon
// } from "@mui/material";
// import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";

// // Replace with a real image
// import NewsImg from "../Assets/source_image.png";
// import ArrowAsset from "../Assets/arrowIcon.svg"; // SVG preferred; PNG/JPG

// export function ArrowIcon(props) {
//   return (
//     <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: 18 }} {...props}>
//       <image href={ArrowAsset} width="24" height="24" />
//     </SvgIcon>
//   );
// }

// function NewsCard() {
//   return (
//     <Box>
//       <Typography variant="headingTextNewsreaderMedium" sx={{
//         color: "var(--heading-text-primary)",
//         // fontFamily: "Newsreader, serif",
//         // fontStyle: "normal",
//         // fontWeight: 500,
//         // lineHeight: "52px",
//         // fontSize: { xs: "26px", sm: "32px", md: "36px", lg: "45px" },
//         mb: { xs: 2, sm: 2 },
//       }}>
//         Recent News
//       </Typography>

//       {/* Poster media with rounded border */}
//       <Box
//         sx={{
//           border: (t) => `1px solid ${t.palette.divider}`,
//           borderRadius: 2,
//           overflow: "hidden",
//           aspectRatio: "16 / 9",
//           bgcolor: "action.hover",
//         }}
//       >
//         <Box
//           component="img"
//           src={NewsImg}
//           alt="Recent news poster"
//           sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
//         />
//       </Box>

//       {/* Meta and headline */}
//       {/* <Stack spacing={0.75} sx={{ mt: 1.5 }}>
//         <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: 0.6 }}>
//           ADMINISTRATION
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           sx={{
//             fontWeight: 700,
//             lineHeight: 1.35,
//             maxWidth: 680,
//             overflowWrap: "anywhere",
//             wordBreak: "break-word",
//           }}
//         >
//           Ethiraj College for Women Ranked “Best College of 2025” by India Today & The Week
//         </Typography>
//       </Stack> */}
//     </Box>
//   );
// }

// // function EventRow({ day, mon, title, time, last = false }) {
// //   return (
// //     <Box>
// //       <Grid container alignItems="flex-start" columnSpacing={2} sx={{ py: 1.25 }}>
// //         {/* Date block */}
// //         <Grid size={{ xs: 3 }}>
// //           <Stack alignItems="center" spacing={0} sx={{ minWidth: 52 }}>
// //             <Typography
// //               variant="h6"
// //               sx={{ fontWeight: 700, color: "text.primary", lineHeight: 1 }}
// //             >
// //               {day}
// //             </Typography>
// //             <Typography
// //               variant="caption"
// //               color="text.secondary"
// //               sx={{ textTransform: "capitalize", mt: 0.25 }}
// //             >
// //               {mon}
// //             </Typography>
// //           </Stack>
// //         </Grid>

// //         {/* Content */}
// //         <Grid size={{ xs: 9 }}>
// //           <Typography
// //             variant="body1"
// //             sx={{
// //               fontWeight: 600,
// //               lineHeight: 1.35,
// //               overflowWrap: "anywhere",
// //               wordBreak: "break-word",
// //             }}
// //           >
// //             {title}
// //           </Typography>
// //           <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.75 }}>
// //             {time}
// //           </Typography>
// //         </Grid>
// //       </Grid>

// //       {!last && <Divider sx={{ my: 0.5 }} />}
// //     </Box>
// //   );
// // }

// function EventRow({ day, mon, title, time, last = false }) {
//   return (
//     <Box>
//       <Grid container alignItems="flex-start" columnSpacing={2} sx={{ py: 1.25 }}>
//         {/* Date block */}
//         <Grid size={{ xs: 3 }}>
//           <Stack alignItems="center" spacing={0} sx={{ minWidth: 52 }}>
//             <Typography
//               variant="h6"
//               sx={{
//                 fontFamily: "Inter",
//                 fontWeight: 500,
//                 fontStyle: "normal",         // "Medium" is a font-weight or font-style descriptor; use normal here
//                 fontSize: 40,
//                 lineHeight: "52px",
//                 letterSpacing: "0%",
//                 textAlign: "center",
//                 color: "#6B3C58",
//                 // leading-trim is not a standard CSS property, so it's omitted
//               }}
//             >
//               {day}
//             </Typography>
//             <Typography
//               variant="caption"
//               sx={{
//                 fontFamily: "Inter",
//                 fontWeight: 400,
//                 fontStyle: "normal",       // Regular = normal in CSS
//                 fontSize: 24,
//                 lineHeight: "32px",
//                 letterSpacing: "0%",
//                 textAlign: "center",
//                 color: "#6B3C58",          // Use color property for text color
//               }}
//             >
//               {mon}
//             </Typography>
//           </Stack>
//         </Grid>

//         {/* Content */}
//         <Grid size={{ xs: 9 }}>
//           <Typography
//             sx={{
//               color: "var(--heading-text-primary2)",
//               fontWeight: 500,
//               fontSize: "20px",
//               lineHeight: "28px",
//               fontFamily: "Inter",
//               overflowWrap: "anywhere",
//               wordBreak: "break-word",
//               '@media (min-width:768px)': {
//                 fontWeight: 500,
//                 fontSize: "20px",
//                 lineHeight: "28px",
//               },
//               '@media (min-width:1024px)': {
//                 fontWeight: 500,
//                 fontSize: "22px",
//                 lineHeight: "30px",
//               },
//               '@media (min-width:1366px)': {
//                 fontWeight: 500,
//                 fontSize: "24px",
//                 lineHeight: "32px",
//               },
//             }}
//           >
//             {title}
//           </Typography>
//           <Typography
//             sx={{
//               color: "var(--heading-text-primary2)",
//               fontWeight: 500,
//               fontSize: "16px",
//               lineHeight: "24px",
//               fontFamily: "Inter",
//               overflowWrap: "anywhere",
//               wordBreak: "break-word",
//               '@media (min-width:768px)': {
//                 fontWeight: 400,
//                 fontSize: "16px",
//                 lineHeight: "24px",
//               },
//               '@media (min-width:1024px)': {
//                 fontWeight: 400,
//                 fontSize: "15px",
//                 lineHeight: "24px",
//               },
//               '@media (min-width:1366px)': {
//                 fontWeight: 400,
//                 fontSize: "18px",
//                 lineHeight: "28px",
//               },
//             }}
//           >
//             {time}
//           </Typography>
//         </Grid>
//       </Grid>

//       {!last && <Divider sx={{ my: 0.5 }} />}
//     </Box>
//   );
// }

// export default function NewsEvents() {
//   return (
//     <Box sx={{ px: { xs: 2, sm: 3, md: 6 }, py: { xs: 6, md: 10 } }}>
//       <Grid container spacing={{ xs: 4, md: 6 }}>
//         {/* LEFT: News */}
//         <Grid size={{ xs: 12, md: 8 }}>
//           <NewsCard />
//         </Grid>

//         {/* RIGHT: Events */}
//         <Grid size={{ xs: 12, md: 4 }}>
//           <Typography variant="headingTextNewsreaderMedium" sx={{
//             color: "var(--heading-text-primary)",
//             // fontFamily: "Newsreader, serif",
//             // fontStyle: "normal",
//             // fontWeight: 500,
//             // lineHeight: "52px",
//             // fontSize: { xs: "26px", sm: "32px", md: "36px", lg: "45px" },
//             mb: { xs: 2, sm: 2 },
//           }}>
//             Events
//           </Typography>

//           <Card elevation={0} sx={{ borderRadius: 0 }}>
//             <CardContent sx={{ px: 0, pt: 0 }}>
//               <EventRow day="04" mon="April" title="Lorem Ipsum Dolor Sit Amet" time="10:00AM – 4:00PM" />
//               <EventRow day="14" mon="April" title="Lorem Ipsum Dolor Sit Amet" time="10:00AM – 4:00PM" />
//               <EventRow day="24" mon="Sep" title="Lorem Ipsum Dolor Sit Amet" time="10:00AM – 4:00PM" last />
//             </CardContent>
//           </Card>

//           <Divider sx={{ my: 2 }} />

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
//     </Box>
//   );
// }

// NewsEvents.js
import {
  Box,
  Grid,
  Typography,
  Divider,
  Button,
  Stack,
  Card,
  CardContent,
  SvgIcon,
} from "@mui/material";
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";

// Replace with a real image
import NewsImg from "../Assets/new1.png";
import ArrowAsset from "../Assets/arrowIcon.svg"; // SVG preferred; PNG/JPG
import CustomMetaChips from "../Components/CustomMetaChips/CustomMetaChips";
import CustomNextButton from "../Components/CustomNextButton/CustomNextButton";
import NewsPage from "./NewsPage";

export function ArrowIcon(props) {
  return (
    <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: 18 }} {...props}>
      <image href={ArrowAsset} width="24" height="24" />
    </SvgIcon>
  );
}

function NewsCard() {
  return (
    <Box>
      <Typography
        variant="headingTextNewsreaderMedium"
        sx={{
          color: "var(--heading-text-primary)",
          mb: { xs: 2, sm: 2 },
        }}
      >
        Recent News
      </Typography>

      {/* Poster media with rounded border */}
      <Box
        sx={{
          border: (t) => `1px solid ${t.palette.divider}`,
          borderRadius: 2,
          overflow: "hidden",
          aspectRatio: "16 / 9",
          bgcolor: "action.hover",
        }}
      >
        <Box
          component="img"
          src={NewsImg}
          alt="Recent news poster"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      {/* Meta and headline */}
      <Stack spacing={0.75} sx={{ mt: 1.5, mb: 5 }}>
        {/* <Typography
                variant="caption"
                color="text.secondary"
                sx={{ letterSpacing: 0.6, fontFamily: "Inter" }}
              >
                ADMINISTRATION
              </Typography> */}
        <CustomMetaChips date="JAN 2026" topic="ADMINISTRATION" />
        <Typography
          variant="typographyContentHeading"
          sx={{
            // fontWeight: 700,
            // lineHeight: 1.35,
            fontFamily: "Newsreader",
            maxWidth: 992,
            overflowWrap: "anywhere",
            wordBreak: "break-word",
          }}
        >
        Ethiraj College for Women, students received with gratitude, their laptops, as part of the Tamil Nadu Government’s Free Laptop Scheme. 
        </Typography>
      </Stack>
    </Box>
  );
}

// function EventRow({ day, mon, title, time, last = false }) {
//   return (
//     <Box>
//       <Grid container alignItems="flex-start" columnSpacing={2} sx={{ py: 1.25 }}>
//         {/* Date block */}
//         <Grid size={{ xs: 3 }}>
//           <Stack alignItems="center" spacing={0} sx={{ minWidth: 52 }}>
//             <Typography
//               variant="h6"
//               sx={{ fontWeight: 700, color: "text.primary", lineHeight: 1 }}
//             >
//               {day}
//             </Typography>
//             <Typography
//               variant="caption"
//               color="text.secondary"
//               sx={{ textTransform: "capitalize", mt: 0.25 }}
//             >
//               {mon}
//             </Typography>
//           </Stack>
//         </Grid>

//         {/* Content */}
//         <Grid size={{ xs: 9 }}>
//           <Typography
//             variant="body1"
//             sx={{
//               fontWeight: 600,
//               lineHeight: 1.35,
//               overflowWrap: "anywhere",
//               wordBreak: "break-word",
//             }}
//           >
//             {title}
//           </Typography>
//           <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.75 }}>
//             {time}
//           </Typography>
//         </Grid>
//       </Grid>

//       {!last && <Divider sx={{ my: 0.5 }} />}
//     </Box>
//   );
// }

function EventRow({ day, mon, title, time, last = false }) {
  return (
    <Box sx={{ py: 1.25 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "16px", sm: "24px", md: "30px" },
        }}
      >
        {/* Date block */}
        <Box
          sx={{
            minWidth: 52,
            flexShrink: 0,
            textAlign: "center",
          }}
        >
          <Stack alignItems="center" spacing={0}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: 40,
                lineHeight: "52px",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#6B3C58",
              }}
            >
              {day}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: 24,
                lineHeight: "32px",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#6B3C58",
              }}
            >
              {mon}
            </Typography>
          </Stack>
        </Box>

        {/* Content */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="typographyEventTitle">
            {title}
          </Typography>
          {time && (
            <Typography variant="typographyEventTime">
              {time}
            </Typography>
          )}
        </Box>
      </Box>

      {!last && <Divider sx={{ my: 0.5 }} />}
    </Box>
  );
}

const homeEventsList = [
  {
    day: "01",
    mon: "Sep",
    title: "N & D Association – End Semester Examination Online Fee Payment Begins",
  },
  {
    day: "02",
    mon: "Sep",
    title: "Commerce Association",
  },
  {
    day: "03",
    mon: "Sep",
    title: "English Association",
  },
];

export default function NewsEvents() {
  return (
    <Box
      sx={{
        // px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Grid container spacing={{ xs: 4, md: 6 }}>
        {/* LEFT: News */}
        <Grid
          size={{ xs: 12, md: 7 }}
          sx={{
            order: { xs: 2, md: 1 }, // News second on mobile, first on desktop
          }}
        >
          <NewsCard />
        </Grid>

        {/* RIGHT: Events */}
        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{
            order: { xs: 1, md: 2 }, // Events first on mobile, second on desktop
          }}
        >
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              color: "var(--heading-text-primary)",
              mb: { xs: 2, sm: 2 },
            }}
          >
            Events
          </Typography>

          <Card elevation={0} sx={{ borderRadius: 0, background: "none" }}>
            <CardContent sx={{ px: 0, pt: 0 }}>
              {homeEventsList.map((event, index) => (
                <EventRow
                  key={index}
                  day={event.day}
                  mon={event.mon}
                  title={event.title}
                  time={event.time}
                  last={index === homeEventsList.length - 1}
                />
              ))}
            </CardContent>
          </Card>

          {/* <Divider sx={{ my: 2 }} /> */}

          {/* <Button
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
            View all research articles
          </Button> */}
          <CustomNextButton buttonText="VIEW ALL EVENTS" fullWidth onClick="allnewsevents"/>
        </Grid>
      </Grid>
      <NewsPage />
    </Box>
  );
}
