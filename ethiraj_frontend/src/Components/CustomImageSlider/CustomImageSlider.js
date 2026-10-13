import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
// import OurProgramsImg1 from "./assets/img1.jpg";
// import OurProgramsImg2 from "./assets/img2.jpg";
// import OurProgramsImg3 from "./assets/img3.jpg";

const CustomImageSlider = ({ images }) => {
  //   const images = [OurProgramsImg1, OurProgramsImg2, OurProgramsImg3]; // your images
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const timersRef = useRef([]);

  // advance slides on an interval and trigger crossfade
  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length;
        setPrevIndex(prev);
        // trigger animation on next tick so both images render first
        const t = setTimeout(() => setIsAnimating(true), 20);
        timersRef.current.push(t);
        return next;
      });
    }, 3000); // rotate every 3s

    return () => {
      clearInterval(interval);
      // clear any pending timeouts created for animations
      timersRef.current.forEach((id) => clearTimeout(id));
      timersRef.current = [];
    };
  }, [images]);

  // when animation starts, clear previous image after transition finishes
  useEffect(() => {
    if (!isAnimating) return;
    const duration = 800; // match CSS transition (ms)
    const cleanup = setTimeout(() => {
      setIsAnimating(false);
      setPrevIndex(null);
    }, duration + 100);
    return () => clearTimeout(cleanup);
  }, [isAnimating]);

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 260, sm: "100%" },
        borderRadius: { xs: 3, md: 6 },
        overflow: "hidden",
      }}
    >
      {prevIndex !== null && (
        <Box
          component="img"
          alt="previous slide"
          src={images[prevIndex]}
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: { xs: "377px", sm: "100%" },
            objectFit: "cover",
            display: "block",
            transition: "opacity 800ms ease-in-out",
            opacity: isAnimating ? 0 : 1,
            // zIndex: 1,
          }}
        />
      )}

      <Box
        component="img"
        alt="current slide"
        src={images[currentIndex]}
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: { xs: "377px", sm: "100%" },
          objectFit: "cover",
          display: "block",
          transition: "opacity 800ms ease-in-out",
          opacity: prevIndex !== null ? (isAnimating ? 1 : 0) : 1,
          // zIndex: 2,
        }}
      />
    </Box>
  );
};

export default CustomImageSlider;
