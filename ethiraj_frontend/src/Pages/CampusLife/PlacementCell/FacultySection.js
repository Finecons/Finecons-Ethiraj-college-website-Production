import React, { useState, useRef, useEffect } from "react";
import { Box, IconButton, Typography, Card } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import linkIconImage from "../../../Assets/link.svg";

export default function CustomImageSliderNext({ items = [], link }) {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const lastIndex = Math.max(0, items.length - 1);

  // Scroll to specific index
  const scrollToIndex = (index) => {
    const el = sliderRef.current;
    if (!el) return;
    const child = el.children[index];
    if (!child) return;

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

  // Track current item when user scrolls manually
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        if (!sliderRef.current) {
          ticking = false;
          return;
        }
        const containerRect = sliderRef.current.getBoundingClientRect();
        let nearest = 0;
        let minDiff = Infinity;
        Array.from(sliderRef.current.children).forEach((child, idx) => {
          if (!child) return;
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
    return () => el.removeEventListener("scroll", onScroll);
  }, [current, items]);

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {/* Slider container */}
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "& > *": { scrollSnapAlign: "start" },
          alignItems: "start",
          py: 1,
        }}
      >
        {items.map((faculty, index) => (
          <Card
            key={index}
            sx={{
              flex: "0 0 25%", // Show 4 cards at a time on large screens
              minWidth: { xs: "45%", sm: "45%", md: "28%" },
              borderRadius: 2,
              boxShadow: "none",
              background: "none",
              textAlign: "start",
            }}
          >
            <Box
              component="img"
              src={faculty.image}
              alt={faculty.name}
              sx={{
                width: "100%",
                height: { xs: 255, md: 255, lg: 305 },
                maxWidth: { xs: 150, sm: 180, md: 200 },

                objectFit: "contain",
              }}
            />

            <Typography
              variant="leadershipContentTextNewsreaderMedium"
              sx={{ mt: { md: "18px", lg: "24px" } }}
            >
              {faculty.name}
            </Typography>
            {faculty.title && faculty.title.split(',').map((part, idx) => (
              <Typography
                key={idx}
                variant="typographyBodyInterMaintext"
                sx={{ mt: idx === 0 ? "5px" : 0 }}
              >
                {part.trim()}{idx < faculty.title.split(',').length - 1 ? ',' : ''}
              </Typography>
            ))}

            <Typography variant="typographyBodyInterNormal" sx={{ mt: "5px" }}>
              {faculty.qualification}
            </Typography>


            {faculty?.email && (
              <Box sx={{ my: { lg: "20px", md: "16px", xs: "10px" } }}>
                <Typography
                  variant="typographyBodyInterNormal"
                  // display="block"
                  // sx={{ textDecoration: "underline" }}
                >
                  {faculty.email}
                </Typography>
              </Box>
            )}
            {faculty?.approveLetter && faculty?.approvalLetterLink && (
              <Box sx={{ my: { lg: "20px", md: "16px", xs: "10px" } }}>
                <Typography
                  component="a"
                  href={faculty.approvalLetterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="typographyBodyInterNormal"
                  display="block"
                  sx={{
                    textDecoration: "underline",
                    color: "#003BD1",
                    cursor: "pointer",
                  }}
                >
                  Approval Letter
                </Typography>
              </Box>
            )}
            {link && faculty?.profileLink && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                <Box
                  component="a"
                  href={faculty.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    textDecoration: "none",
                    gap: "5px",
                    color: "rgba(0, 59, 209, 1)",
                    "&:hover .profile-text": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={linkIconImage}
                    alt="Profile Link"
                    sx={{
                      maxHeight: "24px",
                      maxWidth: "24px",
                      cursor: "pointer",
                      mr: 0.5,
                    }}
                  />
                  <Box className="profile-text">View Profile</Box>
                </Box>
                
              </Box>
            )}
          </Card>
        ))}
      </Box>

      {/* Navigation Buttons */}

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 1 }}>
        <IconButton
          size="small"
          onClick={prevSlide}
          disabled={current === 0}
          sx={{ border: "1px dashed #343A40" }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          onClick={nextSlide}
          disabled={current === lastIndex}
          sx={{ border: "1px dashed #343A40" }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
