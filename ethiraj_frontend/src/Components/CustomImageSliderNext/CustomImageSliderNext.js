
import React, { useState, useRef, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function CustomImageSliderNext({ 
  items = [],
  showDefaultDetails = false,
  nameVariant = "body1",
  nameSx = {},
  trackSx = {},
  sportsAppointmentDetails = false
}) {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const lastIndex = Math.max(0, items.length - 1);

  // Scroll to a specific index (robust calculation)
  const scrollToIndex = (index) => {
    const el = sliderRef.current;
    if (!el) return;
    const child = el.children[index];
    if (!child) return;

    // compute scrollLeft needed to align child's left edge with container's left
    const containerRect = el.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    const targetScrollLeft =
      el.scrollLeft + (childRect.left - containerRect.left);

    el.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
    setCurrent(index);
  };

  const nextSlide = () => {
    if (current < lastIndex) scrollToIndex(current + 1);
  };

  const prevSlide = () => {
    if (current > 0) scrollToIndex(current - 1);
  };


  useEffect(() => {
  const el = sliderRef.current;
  if (!el) return;

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      // Re-check inside RAF because el could have unmounted
      if (!sliderRef.current) {
        ticking = false;
        return;
      }

      const containerRect = sliderRef.current.getBoundingClientRect();
      let nearest = 0;
      let minDiff = Infinity;

      Array.from(sliderRef.current.children).forEach((child, idx) => {
        if (!child) return; // Guard for safety
        const childRect = child.getBoundingClientRect();
        const diff = Math.abs(childRect.left - containerRect.left);
        if (diff < minDiff) {
          minDiff = diff;
          nearest = idx;
        }
      });

      if (nearest !== current) setCurrent(nearest);
      ticking = false;
    });
  };

  el.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    el.removeEventListener("scroll", onScroll);
  };
}, [current, items]);

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "& > *": { scrollSnapAlign: "start" },
          alignItems: "start",
          py: 1,
          ...trackSx,
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 80%",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={item.image || item.src}
              alt={item.name || item.caption || `slide-${index}`}
              sx={{
                width: "100%",
                height: 300,
                objectFit: "cover",
                borderRadius: 2,
                display: "block",
              }}
            />
            {showDefaultDetails && (
              <Box sx={{ mt: 2 }}>
                <Typography variant={nameVariant} sx={{ textAlign: "start", ...nameSx }}>
                  {item.name || item.caption}
                </Typography>
                {item.role && !sportsAppointmentDetails && (
                  <Typography variant="body2" sx={{ textAlign: "start", mt: 0.5, color: "#666" }}>
                    {item.role}
                  </Typography>
                )}
                {item.discipline && (
                  <Typography variant="body2" sx={{ textAlign: "start", mt: 0.5, color: "#666" }}>
                    {item.discipline}
                  </Typography>
                )}
                {item.achievement && (
                  <Typography variant="body2" sx={{ textAlign: "start", mt: 0.5, color: "#666" }}>
                    {item.achievement}
                  </Typography>
                )}
                {sportsAppointmentDetails && (
                  <>
                    {item.dept && (
                      <Typography variant="body2" sx={{ textAlign: "start", mt: 0.5, color: "#666" }}>
                        {item.dept}
                      </Typography>
                    )}
                    {item.role && (
                      <Typography variant="body2" sx={{ textAlign: "start", mt: 0.5, color: "#666" }}>
                        {item.role}
                      </Typography>
                    )}
                    {item.program && (
                      <Typography variant="body2" sx={{ textAlign: "start", mt: 0.5, color: "#666" }}>
                        {item.program}
                      </Typography>
                    )}
                  </>
                )}
              </Box>
            )}
            {!showDefaultDetails && (
              <Box sx={{ mt: 2 }}>
                <Typography variant={nameVariant} sx={{ textAlign: "start", fontWeight: 600, lineHeight: 1.2, ...nameSx }}>
                  {item.name}
                </Typography>
                {item.caption && (
                  <Typography sx={{ mt: 1, textAlign: "start", fontSize: { xs: "14px", sm: "14px", md: "15px" }, color: "#444", fontWeight: 500, lineHeight: 1.3 }}>
                    {item.caption}
                  </Typography>
                )}
              </Box>
            )}
          </Box>
        ))}
      </Box>

      {/* Prev Button - bottom-right, left of Next */}
      <Box sx={{ display: "flex", justifyContent: "end", gap: "20px" }}>
        <IconButton
          onClick={prevSlide}
          disabled={current === 0}
          sx={{
            // position: "absolute",
            // bottom: 0,
            // right: 72, // place it left of next button
            bgcolor: "#FFE6FF",
            color: "#b39ddb",
            "&:hover": {
              bgcolor: "#FFE6FF",
              color: "#b39ddb",
            },

            zIndex: 20,
            boxShadow: "none",
            "&:disabled": { opacity: 0.4, border: "1px solid lightgray" },
          }}
          aria-label="previous"
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* Next Button - bottom-right corner */}
        <IconButton
          onClick={nextSlide}
          disabled={current === lastIndex}
          sx={{
            // position: "absolute",
            // bottom: 12,
            // right: 12,
            bgcolor: "#FFE6FF",
            color: "#b39ddb",
            "&:hover": {
              bgcolor: "#FFE6FF",
              color: "#b39ddb",
            },

            zIndex: 20,
            boxShadow: "none",
            "&:disabled": { opacity: 0.4, border: "1px solid lightgray" },
          }}
          aria-label="next"
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
