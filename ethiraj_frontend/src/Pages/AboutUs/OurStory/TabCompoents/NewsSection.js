
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Divider,
  useMediaQuery,
} from "@mui/material";
import image1 from "../../../../Assets/Carosoul_image2.jpg";
import image2 from "../../../../Assets/Carosoul_Image1.jpg";
import image3 from "../../../../Assets/campus-hostel.png";
import CalenderIconImageSvg from "../../../../Components/CalenderIconImageSvg/CalenderIconImageSvg";
import CalendarIconImageSvg from "../../../../Components/CalenderIconImageSvg/CalenderIconImageSvg";
import { ArrowIcon } from "../../../NewsEvents";
import { useNavigate } from "react-router-dom";
import CustomMetaChips from "../../../../Components/CustomMetaChips/CustomMetaChips";
import CustomNextButton from "../../../../Components/CustomNextButton/CustomNextButton";

const newsData = [
  {
    id: 1,
    title:
      "Ethiraj College for Women Ranked “Best College of 2025” by India Today & The Week",
    category: "Administration",
    date: "June 2025",
    tag: "News Story",
    image: image1, // Replace with actual image
  },
  {
    id: 2,
    title:
      "New Study Demonstrates Sustainable Catalytic Use of Hydroxyapatite for Water Purification",
    category: "Chemistry",
    date: "June 2025",
    tag: "Research",
    image: image2,
  },
  {
    id: 3,
    title: "Commemorating the 135th Birth Anniversary of Our Founder",
    category: "Chemistry",
    date: "June 2025",
    tag: "Event",
    image: image3,
  },
];

const NewsSection = () => {
  const [latestNews, ...otherNews] = newsData;
  const navigate = useNavigate();

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  return (
    <Box
      sx={{
        // px: { xs: 2, sm: 3, md: "30px", lg: "36px" },
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },

        mt: { lg: "72px", md: "50px", xs: "30px" },
      }}
    >
      <Grid container spacing={3}>
        <Grid item size={{ xs: 12 }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              color: "var(--heading-text-primary)",
              mb: { xs: 2, sm: 2, md: "10px", lg: "48px" },
            }}
          >
            News
          </Typography>
        </Grid>

        {/* Latest News - Left side */}
        <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
          <Card
            sx={{
              // borderRadius: "20px",
              boxShadow: "none",
              background: "none",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: { lg: "451px", md: "400px", borderRadius: "20px" },
              }}
              image={latestNews.image}
              alt={latestNews.title}
            />
            <CardContent>
              {/* <Typography
                variant="bodyTextSmallInterRegular"
                color="text.secondary"
                sx={{ display: "flex", gap: "24px" }}
              >
                <span>{latestNews.category}</span>{" "}
                <span>{latestNews.tag} </span>{" "}
                <span style={{ display: "flex", alignItems: "center" }}>
                  <span>
                    <CalenderIconImageSvg />
                  </span>
                  <span>
                  {latestNews.date}</span>
                </span>
              </Typography> */}
              <Typography
                variant="bodyTextSmallInterRegular"
                color="var(--brand-palette-text-tertiary)"
                sx={{ display: "flex", gap: "24px" }}
              >
                {/* Category */}
                <Box component="span">{latestNews.category}</Box>

                {/* Tag */}
                <Box component="span">{latestNews.tag}</Box>

                {/* Date with Icon */}
                <Box
                  component="span"
                  sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <CalendarIconImageSvg />
                  {latestNews.date}
                </Box>
              </Typography>
              <Typography
                variant="headingTextNewsreaderMedium"
                // component="h2
                sx={{ mt: 1, cursor: "pointer" }}
              >
                {latestNews.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Other News - Right side */}
        <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {otherNews.map((p, idx) => (
              <Box key={p.id}>
                <Grid container alignItems="flex-start" columnSpacing={2}>
                  {/* Left: thumbnail */}
                  <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                    <Box
                      component="img"
                      src={p.image}
                      alt={p.title}
                      sx={{
                        width: "100%",
                        height: 248,
                        objectFit: "cover",
                        borderRadius: 1,
                      }}
                    />
                  </Grid>

                  {/* Right: title + meta */}
                  <Grid
                    size={{ xs: 12, sm: 6, md: 6 }}
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: "space-between",
                      flexDirection: "column",
                      minHeight: { sm: "248px" },
                      maxHeight: "100%",
                    }}
                  >
                    <Typography
                      // component={p.href ? "Link" : "h3"}
                      href={p.href || undefined}
                      variant="typographyContentHeading"
                      sx={{
                        display: "inline-block",
                        textDecoration: "none",
                        color: "text.primary",
                        lineHeight: 1.4,
                        // "&:hover": { textDecoration: p.href ? "underline" : "none" },
                      }}
                    >
                      {p.title}
                    </Typography>

                    <Box sx={{ gap: 2 }}>
                      <CustomMetaChips date={p.date} topic={p.category} />
                    </Box>
                  </Grid>
                </Grid>

                {idx < otherNews.length - 1 && <Divider sx={{ my: 2 }} />}
              </Box>
            ))}
          </Box>
          <Box
          // sx={{
          //   display: "flex",
          //   justifyContent: "flex-end",
          //   mt: { lg: "48px", md: "48px", xs: "48px" },
          //   // mb: { lg: "48px", md: "48px", xs: "48px" },
          // }}
          >
            {/* <Button
              variant="outlined"
              sx={{
                borderRadius: "50px",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              View All News →
            </Button> */}
            {/* <Button
              onClick={() => {
                navigate("/aboutus/allnewsevents");
              }}
              variant="outlined"
              endIcon={
                <ArrowIcon sx={{ fontSize: 20, color: "#212529", ml: "5px" }} />
              }
          // fullWidth={isSmallScreen}
              sx={{
                // mt: { md: "64px", xs: "30px" },
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
              View All News
            </Button> */}
          </Box>
        </Grid>

        {/* View All Button */}
        {/*  */}
        {/* <Grid
          item
          size={{ xs: 12 }}
       
        ></Grid> */}
      </Grid>
      <Box sx={{ mb: "64px", mt: "24px" }}>
        <CustomNextButton buttonText="VIEW ALL NEWS" fullWidth />
      </Box>
    </Box>
  );
};

export default NewsSection;
