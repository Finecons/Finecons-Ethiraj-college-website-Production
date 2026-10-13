import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const widthBySize = {
  small: { xs: 260, sm: 280, md: 300, lg: 350 },
  large: { xs: 340, sm: 360, md: 460, lg: 620 },
};

const ImageWidthSlider = ({
  images = [],
  items,
  imageHeight = { xs: 250, md: 300 },
  itemWidth,
  renderItem,
  gap = 1.5,
}) => {
  const sliderItems = items?.length ? items : images;
  const scrollRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(sliderItems.length > 0);

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
  }, [sliderItems.length]);

  const handleScroll = (direction) => {
    const node = scrollRef.current;
    if (!node) {
      return;
    }

    const scrollAmount = node.clientWidth * 0.75;
    node.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      <Box
        ref={scrollRef}
        onScroll={updateControls}
        sx={{
          display: "flex",
          gap,
          overflowX: "auto",
          scrollBehavior: "smooth",
          pb: 1,
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {sliderItems.map((item, idx) => {
          const sizeKey = item.size === "large" ? "large" : "small";

          if (renderItem) {
            return (
              <Box
                key={`${item.alt || item.title || "item"}-${idx}`}
                sx={{
                  flex: "0 0 auto",
                  width: itemWidth || widthBySize[sizeKey],
                }}
              >
                {renderItem(item, idx)}
              </Box>
            );
          }

          return (
            <Box
              key={`${item.alt || "image"}-${idx}`}
              component="img"
              src={item.src}
              alt={item.alt || `slider image ${idx + 1}`}
              sx={{
                flex: "0 0 auto",
                width: itemWidth || widthBySize[sizeKey],
                height: imageHeight,
                borderRadius:"20px",
                objectFit: "cover",
              }}
            />
          );
        })}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 1 }}>
        <IconButton
          size="small"
          onClick={() => handleScroll("prev")}
          disabled={!canPrev}
          sx={{ border: "1px dashed #343A40" }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => handleScroll("next")}
          disabled={!canNext}
          sx={{ border: "1px dashed #343A40" }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ImageWidthSlider;
