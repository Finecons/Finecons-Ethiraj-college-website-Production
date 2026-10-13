
import React, { useState, useRef, useEffect } from "react";
import { Box, IconButton, Typography, Card } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import linkIconImage from "../../Assets/link.svg";

export default function CustomImageSliderNext({
  items = [],
  link,
  showDefaultDetails = true,
  renderDetails,
  sportsAppointmentDetails = false,
  nameVariant = "leadershipContentTextNewsreaderMedium",
  nameSx,
  trackSx,
  onReadMore,
}) {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const lastIndex = Math.max(0, items.length - 1);

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
      {/* Slider */}
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
          ...trackSx,
        }}
      >
        {items.map((item, index) => (
          <Card
            key={index}
            sx={{
              flex: "0 0 25%",
              minWidth: { xs: "60%", sm: "28%", md: "25%",lg:"15%" },
              borderRadius: "10px",
              boxShadow: "none",
              background: "none",
              textAlign: "start",
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={item.image}
              alt={item.name}
              sx={{
              borderRadius: "10px",
                
                width: "100%",
                height: { xs: 255, md: 255, lg: 305 },
                maxWidth: { xs: 190, sm: 180, md: 230,lg:230 },
                objectFit: "cover",
              }}
            />

            {/* Name */}
            <Typography
              variant="leadershipContentTextNewsreaderMedium"
              sx={{ mt: { md: "18px", lg: "24px" }, ...nameSx,mb:"5px" }}
            >
              {item.name}
            </Typography>

            {/* ✅ Coach Discipline/Role (caption field only) */}
            {item.caption && !showDefaultDetails && !sportsAppointmentDetails && (
              <Typography
                variant="typographyBodyInterNormal"
                sx={{ mt: "2px", color: "#555", fontWeight: 500 }}
              >
                {item.caption} Coach
              </Typography>
            )}

            {/* ✅ Default Details (ONLY if enabled) */}
            {showDefaultDetails && (
              <>
                {item.title && (
                  <Typography
                    variant="typographyBodyInterMainText"
                    sx={{ mt: "5px" }}
                  >
                    {item.title}
                  </Typography>
                )}

                {item.qualification && (
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ mt: "5px" }}
                  >
                    {item.qualification}
                  </Typography>
                )}

                {item.specialization && (
                  <Box sx={{ my: { lg: "24px", md: "18px", xs: "10px" } }}>
                    <Typography
                      variant="typographyBodyInterNormal"
                      sx={{ fontWeight: "500 !important" }}
                    >
                      Area of Specialization
                    </Typography>
                    <Typography variant="typographyBodyInterNormal">
                      {item.specialization}
                    </Typography>
                  </Box>
                )}
              </>
            )}

            {/* ✅ Custom Details (Sports Section) */}
            {sportsAppointmentDetails && !renderDetails && (
              <>
                <Typography variant="typographyBodyInterNormal">
                  {item.dept}
                </Typography>
                <Typography
                  variant="typographyBodyInterMainText"
                  sx={{ mt: 0.5 }}
                >
                  {item.role}
                </Typography>
                <Typography
                  variant="typographyBodyInterNormalSmall"
                  sx={{ mt: 1.5, fontWeight: 500, color: "#1D1D1D" }}
                >
                  Program
                </Typography>
                <Typography
                  variant="typographyBodyInterNormalSmall"
                  color="text.secondary"
                >
                  {item.program}
                </Typography>
              </>
            )}
            {renderDetails ? renderDetails(item) : null}

            {/* Link */}
            {link && item?.profileLink && (
              <Box sx={{ display: "flex", gap: "24px", mt: 1 }}>
                <Box
                  component="a"
                  href={item.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    component="img"
                    src={linkIconImage}
                    alt="link"
                    sx={{ width: 24, height: 24 }}
                  />
                </Box>
              </Box>
            )}

            {/* Read More Button */}
            {onReadMore && (
              <Box sx={{ mt: "16px" }}>
                <Box
                  component="button"
                  onClick={() => onReadMore(item)}
                  sx={{
                    background: "none",
                    border: "none",
                    color: "#2563eb",
                    cursor: "pointer",
                    textDecoration: "underline",
                    fontSize: "14px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    padding: 0,
                    "&:hover": {
                      color: "#1d4ed8",
                    },
                  }}
                >
                  Read More
                </Box>
              </Box>
            )}
          </Card>
        ))}
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "end", gap: 2, mt: 2 }}>
        <IconButton
          size="small"
          onClick={prevSlide}
          disabled={current === 0}
          sx={{
            border: "1px dashed #343A40",
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        <IconButton
          size="small"
          onClick={nextSlide}
          disabled={current === lastIndex}
          sx={{
            border: "1px dashed #343A40",
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}