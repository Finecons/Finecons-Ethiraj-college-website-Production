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

import CustomNextArrowIcon from "../CustomNextArrowIcon/CustomNextArrowIcon";
import { useNavigate } from "react-router-dom";

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

export default function CustomCampusCard({ title, desc, img, detailsLink }) {
  const navigate = useNavigate();
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        bgcolor: "transparent",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer"
      }}
      // sx={{ pr: 0.5,cursor: "pointer" }}
          onClick={() => {
            navigate(detailsLink);
          }}
    >
      {" "}
      <Box
        sx={{
            borderRadius: "20px",

          mb: "24px",
          overflow: "hidden",
          // border: (t) => `1px solid ${t.palette.divider}`,
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
            borderRadius: "20px",
          }}
        />
      </Box>
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
    </Card>
  );
}
