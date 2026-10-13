import React from "react";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

// import image from "./Asserts/CYGNUSA_WA_LOGO (002).jpg";

function RankingOutcomessSection() {
  return (
    <Box sx={{ textAlign: "center", p: 4 }}>
      {/* Main Heading */}
      <Typography variant="h3" gutterBottom>
        Ranking & Outcomes
      </Typography>

      {/* Subheading */}
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Typography
          variant="body1"
          sx={{ fontSize: 24, width: "45%", fontFamily: "sans-serif" }}
        >
          We challenge the status quo and are honoured to be recognised for the
          impact we create.
        </Typography>
      </Box>

      {/* Ranking Section */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 4 }}
      >
        {["India Today", "The Week", "NAAC", "NIRF"].map((title, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{ borderRadius: 3, boxShadow: 3, p: 4, textAlign: "center" }}
            >
              <CardMedia
                component="img"
                // image={image}
                alt={title}
                sx={{ width: 110, height: 110, mx: "auto" }}
              />
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontFamily: "sans-serif",
                    color: "rgb(90,88,88)",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontFamily: "sans-serif", color: "grey" }}
                >
                  Ranked Best College 2025
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Student Enrollment Counter */}
      <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
        <Grid container spacing={4} justifyContent="center">
          {[8010, 8010, 8010].map((count, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box
                sx={{
                  p: 3,

                  borderRadius: 2,

                  boxShadow: 2,

                  textAlign: "center",

                  backgroundColor: "background.paper",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 27,

                    color: "rgb(47,47,47)",

                    fontFamily: "sans-serif",
                  }}
                >
                  {count}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 18,

                    fontFamily: "sans-serif",

                    color: "grey",

                    width: 150,

                    mx: "auto",
                  }}
                >
                  Student Enrolled in 2024
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default RankingOutcomessSection;
