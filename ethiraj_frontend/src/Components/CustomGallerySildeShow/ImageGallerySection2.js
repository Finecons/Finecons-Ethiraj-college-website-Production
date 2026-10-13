
// ==========================================================================
 
import React, { useEffect, useRef, useState } from "react";
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
 
const ImageGallerySection2 = ({ images }) => {
 
  const scrollRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(images.length > 0);
 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
 
  const updateControls = () => {
    const node = scrollRef.current;
    if (!node) {
      return;
    }

    setCanPrev(node.scrollLeft > 2);
    setCanNext(node.scrollLeft + node.clientWidth < node.scrollWidth - 2);
  };

  useEffect(() => {
    updateControls();
  }, [images.length]);

  const handleScroll = (direction) => {
    const node = scrollRef.current;
    if (!node) {
      return;
    }

    const scrollAmount = node.clientWidth * 0.3;
    node.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };
 
  return (
    <Box sx={{ width: "100%", py: 3 }}>
 
      <Box
        ref={scrollRef}
        onScroll={updateControls}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          pb: 1,
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          gap: 3,
          mb: 4
        }}
      >
        {images.map((img, i) => {

          let ratio = "4 / 3";
          let flexBasis;
          

          // For tablet with 2 items
          if (isTablet) {
            flexBasis = "calc(50% - 12px)";
            ratio = "4 / 3";
          }
          // For mobile
          else if (isMobile) {
            flexBasis = "100%";
            ratio = "4 / 3";
          }
          // For desktop - show 3 items: wide, narrow, wide, wide, narrow, wide pattern
          else {
            const patternIndex = i % 3;
            if (patternIndex === 1) {
              // Middle item (narrow and taller)
              flexBasis = "calc(22% - 8px)";
              ratio = "5 / 6.4";
            } else {
              // Side items (wider)
              flexBasis = "calc(36% - 8px)";
              ratio = "4 / 3";
            }
          }
          
          return (
            <Box
              key={i}
              sx={{
                flex: `0 0 ${flexBasis}`,
                display: "flex",
                justifyContent: "center",
                minWidth: 0
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
            </Box>
          );
        })}
 
      </Box>
 
      {/* arrows */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <IconButton
          onClick={() => handleScroll("prev")}
          disabled={!canPrev}
          sx={{ border: "1px dashed #343A40" }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        <IconButton
          onClick={() => handleScroll("next")}
          disabled={!canNext}
          sx={{ border: "1px dashed #343A40" }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Stack>
 
    </Box>
  );
};
 
export default ImageGallerySection2;
 