import React, { useState } from "react";
import {
  Grid,
  Box,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ImageGallerySection = ({ images }) => {
  const [index, setIndex] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const itemsPerView = isMobile ? 1 : isTablet ? 2 : 3;

  const maxIndex = Math.max(0, images.length - itemsPerView);

  const handleNext = () => {
    if (index < maxIndex) {
      setIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(prev => prev - 1);
    }
  };

  /* visible images */
  const visibleImages = images.slice(index, index + itemsPerView);

  return (
    <Box sx={{ width: "100%", py: 3 }}>

      <Grid
        container
        spacing={3}
        alignItems="flex-start"
        sx={{
          transition: "opacity 0.5s ease-in-out",
          mb: 4
        }}
      >

        {visibleImages.map((img, i) => {

          let mdSize = 3.5; // square
          let ratio = "1 / 1";

          // For tablet with 2 items, each takes 6 units
          if (isTablet) {
            mdSize = 6;
            ratio = "1 / 1";
          }

          /* Apply special layout only on desktop */
          if (!isTablet && !isMobile && i === 1) {
            mdSize = 5;
            ratio = "16 / 11";
          }

          return (
            <Grid
              key={i}
              item
              size={{ xs: 12, sm: 6, md: mdSize }}
              sx={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: ratio,
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  component="img"
                  src={img.img}
                  alt={img.title || `gallery-${i}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          );
        })}

      </Grid>

      {/* arrows */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          display: isMobile || isTablet ? "flex" : "none",
          justifyContent: "flex-end"
        }}
      >
        <IconButton
          onClick={handlePrev}
          disabled={index === 0}
          sx={{ border: "1px dashed #343A40" }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        <IconButton
          onClick={handleNext}
          disabled={index >= maxIndex}
          sx={{ border: "1px dashed #343A40" }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Stack>

    </Box>
  );
};

export default ImageGallerySection;