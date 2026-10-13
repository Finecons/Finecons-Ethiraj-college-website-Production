
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
import NewsImg from "../../../Assets/source_image.png";
import ArrowAsset from "../../../Assets/arrowIcon.svg"; // SVG preferred; PNG/JPG
import CustomMetaChips from "../../../Components/CustomMetaChips/CustomMetaChips";

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
    <Box>
      <Grid
        container
        alignItems="flex-start"
        columnSpacing={2}
        sx={{ py: 1.25 }}
      >
        {/* Date block */}
        <Grid size={{ xs: 12 }}>
          <Stack alignItems="center" spacing={0} sx={{ minWidth: 52 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontStyle: "normal", // "Medium" is a font-weight or font-style descriptor; use normal here
                fontSize: 40,
                lineHeight: "52px",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#6B3C58",
                // leading-trim is not a standard CSS property, so it's omitted
              }}
            >
              {day}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "normal", // Regular = normal in CSS
                fontSize: 24,
                lineHeight: "32px",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#6B3C58", // Use color property for text color
              }}
            >
              {mon}
            </Typography>
          </Stack>
        </Grid>

        {/* Content */}
        <Grid size={{ xs: 12 }}>
          <Typography
            sx={{
              color: "var(--heading-text-primary2)",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "28px",
              fontFamily: "Inter",
              overflowWrap: "anywhere",
              wordBreak: "break-word",
              "@media (min-width:768px)": {
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "28px",
              },
              "@media (min-width:1024px)": {
                fontWeight: 500,
                fontSize: "22px",
                lineHeight: "30px",
              },
              "@media (min-width:1366px)": {
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "32px",
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "var(--heading-text-primary2)",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily: "Inter",
              overflowWrap: "anywhere",
              wordBreak: "break-word",
              "@media (min-width:768px)": {
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
              },
              "@media (min-width:1024px)": {
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "24px",
              },
              "@media (min-width:1366px)": {
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "28px",
              },
            }}
          >
            {time}
          </Typography>
        </Grid>
      </Grid>

      {!last && <Divider sx={{ my: 0.5 }} />}
    </Box>
  );
}

export default function NewsEvents() {
  return (
    <Box
     
    
    >
      <Grid container 
      // spacing={{ xs: 4, md: 6 }}
      >
       
        <Grid
          size={{ xs: 12, md: 12 }}
          sx={{
            order: { xs: 1, md: 2 }, // Events first on mobile, second on desktop
            boxShadow:"none"
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

          <Card elevation={0} sx={{ borderRadius: 0 ,boxShadow:"none"}}>
            <CardContent sx={{ px: 0, pt: 0 ,boxShadow:"none"}}>
              <EventRow
                day="04"
                mon="April"
                title="Lorem Ipsum Dolor Sit Amet"
                time="10:00AM – 4:00PM"
              />
              <EventRow
                day="14"
                mon="April"
                title="Lorem Ipsum Dolor Sit Amet"
                time="10:00AM – 4:00PM"
              />
              <EventRow
                day="24"
                mon="Sep"
                title="Lorem Ipsum Dolor Sit Amet"
                time="10:00AM – 4:00PM"
                last
              />
            </CardContent>
          </Card>

        </Grid>
      </Grid>
    </Box>
  );
}
