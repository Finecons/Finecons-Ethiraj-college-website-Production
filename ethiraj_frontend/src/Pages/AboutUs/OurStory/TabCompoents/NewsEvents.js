

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
// import NewsImg from "../../../../Assets/source_image.png";
import NewsImg from "../../../../Assets/new1.png";

import ArrowAsset from "../../../../Assets/arrowIcon.svg"; // SVG preferred; PNG/JPG
import CustomMetaChips from "../../../../Components/CustomMetaChips/CustomMetaChips";

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
      {/* <Typography
        variant="headingTextNewsreaderMedium"
        sx={{
          color: "var(--heading-text-primary)",
          mb: { xs: 2, sm: 2 },
        }}
      >
        Recent News
      </Typography> */}

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
        <CustomMetaChips date="AUGUST 2025" topic="ADMINISTRATION"/>
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
          Ethiraj College for Women Ranked “Best College of 2025” by India Today
          & The Week
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

const eventsList = [
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
  {
    day: "07",
    mon: "Sep",
    title: "Physics Association",
  },
  {
    day: "08",
    mon: "Sep",
    title: "BCA Association / Geography Association",
  },
  {
    day: "15",
    mon: "Sep",
    title: "Continuous Assessment – II",
    time: "15, 16, 17, 18, 21 & 22 September",
  },
  {
    day: "23",
    mon: "Sep",
    title: "Accounting & Finance Association",
  },
  {
    day: "24",
    mon: "Sep",
    title: "Visual Communication & Journalism Association",
  },
  {
    day: "25",
    mon: "Sep",
    title: "Commerce Hons Association",
  },
  {
    day: "28",
    mon: "Sep",
    title: "Tamil Association – CND Endowment Lecture",
  },
  {
    day: "29",
    mon: "Sep",
    title: "Tamil Association",
  },
  {
    day: "30",
    mon: "Sep",
    title: "Chemistry Association / History & TTM World Tourism Day Celebrations / Biochemistry",
  },
];

export default function NewsEvents() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={{ xs: 4, md: 5, lg: 6 }}>
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
            boxShadow: "none",
          }}
        >
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              color: "var(--heading-text-primary)",
              mb: { xs: 2, sm: 2 },
            }}
          >
            Upcoming Events
          </Typography>

          <Card elevation={0} sx={{ borderRadius: 0, boxShadow: "none", background: "none" }}>
            <CardContent sx={{ px: 0, pt: 0 }}>
              {eventsList.map((event, index) => (
                <EventRow
                  key={index}
                  day={event.day}
                  mon={event.mon}
                  title={event.title}
                  time={event.time}
                  last={index === eventsList.length - 1}
                />
              ))}
            </CardContent>
          </Card>

          {/* <Divider sx={{ my: 2 }} />

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
        </Grid>
      </Grid>
    </Box>
  );
}
