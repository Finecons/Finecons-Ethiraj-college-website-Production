import React, { useState } from "react";
import { Box, Card, CardMedia, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const images = [
  "https://images.unsplash.com/photo-1584515933487-779824d29309",
  "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289",
  "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b"
];

export default function ImageSilder() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box display="flex" justifyContent="center">
      <Card
        sx={{
          width: 500,
          borderRadius: 3,
          overflow: "hidden",
          position: "relative"
        }}
      >
        <CardMedia
          component="img"
          height="320"
          image={images[index]}
          alt="slider"
        />

        {/* Bottom arrows */}
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 2,
            background: "rgba(255,255,255,0.7)",
            borderRadius: 2,
            px: 1
          }}
        >
          <IconButton onClick={handlePrev} size="small">
            <ArrowBackIcon />
          </IconButton>

          <IconButton onClick={handleNext} size="small">
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Card>
    </Box>
  );
}