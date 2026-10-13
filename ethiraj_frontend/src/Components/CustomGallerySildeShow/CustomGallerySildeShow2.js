
// pages/gallery.js
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function CustomGallerySildeShow2({ images }) {
  
  console.log(images,"images")
  // Duplicate list for infinite scroll
  const getDynamicStyle = (img) => ({
    width: img.isVertical ? 500 : 350,
    height: img.isVertical ? 300 : 300,
    borderRadius: 5,
    opacity: 1,
  });
  const galleryImages = images?.map((data, index) => {
    const isVertical = index % 2 !== 0; // odd index = vertical
    const src = data?.img;

    return {
      src,
      isVertical,
      style: getDynamicStyle({ isVertical }),
    };
  });

  const imagesLoop = [...galleryImages, ...galleryImages];

  return (
    <Box
      sx={{
        // py: { xs: 6, md: 8 },
        // px: { xs: 2, sm: 3, md: "74px", lg: "94px" },

        //  background: "linear-gradient(#fff,#f9f9f9)"
        background: "none",
      }}
    >
      <Box>
        

        {/* Marquee container */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            maskImage: {
              xs: "linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)",
            },
            WebkitMaskImage: {
              xs: "linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)",
            },
          }}
        >
          <Box
            className="marquee-track"
            sx={{
              display: "flex",
              width: "max-content",
              gap: "30px",
              alignItems: "center",
              animation: "scroll-left var(--speed, 35s) linear infinite",
              "&:hover": { animationPlayState: "paused" },
            }}
          >
            {imagesLoop.map((img, i) => (
              <Box
                key={i}
                component="img"
                src={img.src}
                alt={`gallery-${i}`}
                sx={{
                  ...img.style,
                  objectFit: "cover",
                  flexShrink: 0,
                  boxShadow: 2,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* keyframes */}
      <style jsx global>{`
        @keyframes scroll-left {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </Box>
  );
}
