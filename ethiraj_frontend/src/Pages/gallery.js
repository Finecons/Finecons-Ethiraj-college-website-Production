// pages/gallery.js
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// Import your images
import img1 from "../Assets/gallery1.png";
import img2 from "../Assets/gallery2.jpg";
import img3 from "../Assets/gallery3.jpg";
import img4 from "../Assets/gallery1.png";
import img5 from "../Assets/gallery5.jpg";
import { adminUrl } from "../constants";

// Define per-image style rules
// const galleryImages = [
//   {
//     src: img1,
//     style: { width: 400, height: 300, borderRadius: 5, opacity: 1 },
//   },
//   {
//     src: img2,
//     style: { width: 300, height: 400, borderRadius: 5, opacity: 1 },
//   },
//   {
//     src: img3,
//     style: { width: 400, height: 300, borderRadius: 5, opacity: 1 },
//   },
//   {
//     src: img4,
//     style: { width: 400, height: 300, borderRadius: 5, opacity: 1 },
//   },
//   {
//     src: img5,
//     style: { width: 300, height: 400, borderRadius: 5, opacity: 1 },
//   },
// ];

export default function Gallery({ galleryDatas }) {
  // Duplicate list for infinite scroll
  const getDynamicStyle = (img) => ({
    width: img.isVertical ? 300 : 400,
    height: img.isVertical ? 400 : 300,
    borderRadius: 5,
    opacity: 1,
  });
const galleryImages =
  galleryDatas[0]?.additional_data?.banner?.length > 0
    ? galleryDatas[0].additional_data?.banner?.map((data, index) => {
        const isVertical = index % 2 !== 0; // odd index = vertical
        const src = `${data}`;

        return {
          src,
          isVertical,
          style: getDynamicStyle({ isVertical }),
        };
      })
    : [img1,img2,img3,img4,img5 ].map((src, index) => {
        const isVertical = index % 2 !== 0; // odd index = vertical

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
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },

        //  background: "linear-gradient(#fff,#f9f9f9)"
        background: "none",
      }}
    >
      <Box>
        <Typography
          // variant="headingTextNewsreaderMedium"
          variant="h4"
          align="left"
          sx={{ fontWeight: 500, fontFamily: "Newsreader", pb: 8 }}
        >
          Gallery
        </Typography>

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
