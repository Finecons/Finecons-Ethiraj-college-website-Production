// pages/news.js
import React from "react";
// import Link from "next/link";

import {
  Box,
  Grid,
  Typography,
  Divider,
  Button,
  Stack,
  Card,
  CardContent,
} from "@mui/material";

import img1 from "../Assets/news2.png";
import img2 from "../Assets/news3.jpg";
import CustomMetaChips from "../Components/CustomMetaChips/CustomMetaChips";
import CustomNextButton from "../Components/CustomNextButton/CustomNextButton";

function NewsPage() {
  const posts = [
    {
      id: "1",
      title:
        "The Entrepreneurship Vertical of the Yuva Club, Department of B. Com Bank Management (SS), successfully organized the Business Model Canvas Workshop.",
      image: img1,
      date: "JAN 2025",
      category: "BANK MANAGEMENT",
      // href: "/news/tnsche-nomination",
    },
    {
      id: "2",
      title:
        "Chronicles ’25 – Vendetta, organised by the Ethiraj Students’ Union in association with the Literary and Debate Clubs, a dynamic celebration of intellect and expression.",
      image: img2,
      date: "DEC 2025",
      category: "STUDENT UNION",
      // href: "/news/founder-135",/
    },
  ];
  return (
    <Box
      sx={{
        // px: { xs: 2, sm: 3 },
        // px: { xs/: 2, sm: 3, md: "74px", lg: "94px" },

        py: 2,
      }}
    >
      {/* Meta and headline */}
      {posts.map((p, idx) => (
        <Box key={p.id}>
          <Grid container alignItems="flex-start" columnSpacing={2}>
            {/* Left: thumbnail */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
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
              size={{ xs: 12, sm: 6, md: 8 }}
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

          {idx < posts.length - 1 && <Divider sx={{ my: 2 }} />}
        </Box>
      ))}
      <Divider sx={{ my: 2 }} />
      <Box sx={{ mt: { xs: "48px" } }}>
        <CustomNextButton
          buttonText="VIEW ALL NEWS"
          fullWidth
          onClick="allnewsevents"
        />
      </Box>
    </Box>
  );
}

export default NewsPage;
