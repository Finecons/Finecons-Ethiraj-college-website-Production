import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import gsap from "gsap";
import timelineImage1 from "../Assets/timelineImage1.png";
import timelineImage2 from "../Assets/timelineImage2.jpg";
import timelineImage3 from "../Assets/timelineImage3.jpg";
import timelineImage4 from "../Assets/timelineImage4.jpg";
import timelineImage5 from "../Assets/timelineImage5.jpg";
import timelineImage6 from "../Assets/milestone2018.jpg";
import timelineImage7 from "../Assets/milestone2019.jpg";

const EDGE_PADDING = 20;
const START_YEAR = 1948;
const END_YEAR = 2019;
const YEAR_INTERVAL = 10;
// number of yearly ticks (inclusive)
const TOTAL_LINES = END_YEAR - START_YEAR + 1;

// Generate year scale: 1948, 1958, 1968, ..., 2018
const YEAR_SCALE = [];
for (let y = START_YEAR; y <= END_YEAR; y += YEAR_INTERVAL) {
  YEAR_SCALE.push(y);
}

const MILESTONES = [
  {
    year: "1948",
    title: "1948",
    description:
      "A historic moment: Thiru V. L. Ethiraj with Rajaji at the inauguration of Ethiraj College for Women, 1948.",
    img: timelineImage1,
  },
  {
    year: "1968",
    title: "1968",
    description:
      "A memorable moment from the 1968 College Day – Ms. Evangeline Mathew (Principal) with then Chief Minister C. N. Annadurai at Ethiraj College for Women, Chennai.",
    img: timelineImage2,
  },
  {
    year: "1973",
    title: "1973",
    description:
      "Tmt. Indira Gandhi , Prime Minister of India, unveiling the Founder's Statue during the Silver Jubilee Year - 1973",
    img: timelineImage3,
  },
  {
    year: "1990",
    title: "1990",
    description:
      "Thiru V.L. Ethiraj Centenary, 1990 – Thiru M. Karunanidhi and Thiru K. Anbazhagan addressing the gathering, with Governor Dr. Surjith Singh Barnala gracing the occasion.",
    img: timelineImage4,
  },
  {
    year: "2010",
    title: "2010",
    description:
      "Honoring the future: Dr. A P J Abdul Kalam inaugurates Campus II, dedicating it to the student community on 5th March 2010.",
    img: timelineImage5,
  },
  {
    year: "2018",
    title: "2018",
    description:
      "Platinum Jubilee Celebrations & Foundation Stone laying Ceremony of Administrative block & Indoor Sports training Centre by Thiru. M. Venkaiah Naidu, former Vice President of India on October 2018.",
    img: timelineImage6,
  },
  {
    year: "2019",
    title: "2019",
    description:
      "PG Department of Human Rights, Ethiraj College for Women, earned a Guinness World Records title (2019) for a 28 hour 34 minutes and 43 seconds human rights stage play",
    img: timelineImage7,
  },
];

export default function LineMinimap({ scrollProgress = null, onJumpToProgress = null }) {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const pointerRef = useRef(null);
  const pointerQuickToRef = useRef(null);
  const scrollRafRef = useRef(null);
  const lastCardLeftRef = useRef(20);
  const lastYearRef = useRef(START_YEAR);
  const lastMilestoneYearRef = useRef(MILESTONES[0].year);
  const [cardLeft, setCardLeft] = useState(20);
  const [activeMilestone, setActiveMilestone] = useState(MILESTONES[0]);
  const [currentYear, setCurrentYear] = useState(START_YEAR);

  const lines = Array.from({ length: TOTAL_LINES });

  // Persistent Card: Always show active milestone card so it never abruptly vanishes
  const displayMilestone = activeMilestone;
  const displayCardLeft = cardLeft;

  const currentIndex = MILESTONES.findIndex(
    (m) => m.year === (activeMilestone?.year || MILESTONES[0].year)
  );

  const handleJumpToMilestone = useCallback(
    (milestone) => {
      if (!milestone) return;
      const milestoneYear = parseInt(milestone.year);
      const yearRange = END_YEAR - START_YEAR;
      const targetProgress = Math.max(
        0,
        Math.min(1, (milestoneYear - START_YEAR) / yearRange)
      );

      setActiveMilestone(milestone);
      setCurrentYear(milestoneYear);

      if (typeof onJumpToProgress === "function") {
        onJumpToProgress(targetProgress);
      } else {
        syncFromProgress(targetProgress);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onJumpToProgress]
  );

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    if (currentIndex > 0) {
      handleJumpToMilestone(MILESTONES[currentIndex - 1]);
    }
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    if (currentIndex < MILESTONES.length - 1) {
      handleJumpToMilestone(MILESTONES[currentIndex + 1]);
    }
  };

  useEffect(() => {
    const el = pointerRef.current;
    if (!el) return;

    pointerQuickToRef.current = gsap.quickTo(el, "left", {
      duration: 0.1,
      ease: "none",
      overwrite: "auto",
    });
  }, []);

  const syncFromProgress = useCallback((rawProgress) => {
    const scroller = scrollRef.current;
    const section = sectionRef.current;
    if (!scroller || !section) return;

    const progress = Math.max(0, Math.min(1, Number(rawProgress) || 0));
    const minX = EDGE_PADDING;
    const maxX = Math.max(minX, scroller.clientWidth - EDGE_PADDING);
    const newPointerLeft = minX + progress * (maxX - minX);
    if (pointerQuickToRef.current) {
      pointerQuickToRef.current(newPointerLeft);
    }

    // Clamp card position so it stays visible within section bounds
    const cardGroupWidth = 380;
    const sectionWidth = section.clientWidth;
    const minCardLeft = cardGroupWidth / 2 + 15;
    const maxCardLeft = Math.max(minCardLeft, sectionWidth - cardGroupWidth / 2 - 15);
    const clampedCardLeft = Math.max(
      minCardLeft,
      Math.min(maxCardLeft, newPointerLeft),
    );
    if (Math.abs(clampedCardLeft - lastCardLeftRef.current) > 0.5) {
      lastCardLeftRef.current = clampedCardLeft;
      setCardLeft(clampedCardLeft);
    }

    // Calculate current year based on progress
    const yearRange = END_YEAR - START_YEAR;
    const calcCurrentYear = Math.round(START_YEAR + progress * yearRange);
    if (calcCurrentYear !== lastYearRef.current) {
      lastYearRef.current = calcCurrentYear;
      setCurrentYear(calcCurrentYear);
    }

    // Find nearest milestone based on current year
    let nearest = MILESTONES[0];
    let nearestDiff = Math.abs(parseInt(MILESTONES[0].year) - calcCurrentYear);

    MILESTONES.forEach((milestone) => {
      const milestoneYear = parseInt(milestone.year);
      const diff = Math.abs(milestoneYear - calcCurrentYear);
      if (diff < nearestDiff) {
        nearestDiff = diff;
        nearest = milestone;
      }
    });
    if (nearest.year !== lastMilestoneYearRef.current) {
      lastMilestoneYearRef.current = nearest.year;
      setActiveMilestone(nearest);
    }
  }, []);

  const syncPointerWithScroll = useCallback(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    const maxScroll = Math.max(1, scroller.scrollWidth - scroller.clientWidth);
    const progress = scroller.scrollLeft / maxScroll;
    syncFromProgress(progress);
  }, [syncFromProgress]);

  // Track scroll position
  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    if (scrollRafRef.current) return;
    scrollRafRef.current = requestAnimationFrame(() => {
      syncPointerWithScroll();
      scrollRafRef.current = null;
    });
  };

  useEffect(() => {
    syncPointerWithScroll();
    const handleResize = () => {
      syncPointerWithScroll();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollRafRef.current) {
        cancelAnimationFrame(scrollRafRef.current);
      }
    };
  }, [syncPointerWithScroll]);

  // External progress drives the pointer position
  useEffect(() => {
    if (typeof scrollProgress !== "number") return;
    
    const clamped = Math.max(0, Math.min(1, scrollProgress));
    syncFromProgress(clamped);
  }, [scrollProgress, syncFromProgress]);
  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        boxSizing: "border-box",
        paddingTop: "330px",
        paddingX: "30px",
        paddingBottom: "50px",
      }}
    >
      {/* Active Milestone Display with Navigation Arrows */}
      <Box
        sx={{
          position: "absolute",
          top: 20,
          left: `${displayCardLeft}px`,
          transform: "translateX(-50%)",
          zIndex: 10,
          transition: "left 80ms linear",
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          width: "max-content",
        }}
      >
        {/* Previous Milestone Arrow */}
        <IconButton
          onClick={handlePrev}
          disabled={currentIndex <= 0}
          aria-label="Previous milestone"
          sx={{
            backgroundColor: "#ffffff",
            color: "#6B3C58",
            boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
            border: "1px solid rgba(107, 60, 88, 0.15)",
            width: 38,
            height: 38,
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "#6B3C58",
              color: "#ffffff",
              transform: "scale(1.08)",
            },
            "&.Mui-disabled": {
              opacity: 0.3,
              backgroundColor: "#ffffff",
            },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* Milestone Card */}
        <Box
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "14px",
            border: "1px solid rgba(107, 60, 88, 0.12)",
            boxShadow: "0 10px 30px rgba(107, 60, 88, 0.1)",
            overflow: "hidden",
            width: "300px",
            p: "14px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            transition: "transform 0.2s ease",
          }}
        >
          {/* Image */}
          {displayMilestone.img && (
            <Box
              component="img"
              src={displayMilestone.img}
              alt={displayMilestone.title}
              sx={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "8px",
                display: "block",
                backgroundColor: "#f0f0f0",
              }}
            />
          )}

          {/* Content */}
          <Box sx={{ pt: 1.5, width: "100%" }}>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#6B3C58",
                fontWeight: 700,
                fontFamily: "Inter, sans-serif",
                mb: 0.8,
              }}
            >
              {displayMilestone.year}
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                color: "#495057",
                lineHeight: 1.5,
                textAlign: "center",
              }}
            >
              {displayMilestone.description}
            </Typography>
          </Box>
        </Box>

        {/* Next Milestone Arrow */}
        <IconButton
          onClick={handleNext}
          disabled={currentIndex >= MILESTONES.length - 1}
          aria-label="Next milestone"
          sx={{
            backgroundColor: "#ffffff",
            color: "#6B3C58",
            boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
            border: "1px solid rgba(107, 60, 88, 0.15)",
            width: 38,
            height: 38,
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "#6B3C58",
              color: "#ffffff",
              transform: "scale(1.08)",
            },
            "&.Mui-disabled": {
              opacity: 0.3,
              backgroundColor: "#ffffff",
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* Timeline Container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "180px",
          background: "transparent",
          overflow: "hidden",
          flexShrink: 0,
          touchAction: "pan-x",
        }}
      >
        {/* Scrollable lines */}
        <Box
          ref={scrollRef}
          onScroll={handleScroll}
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            width: "100%",
            overflowX: "auto",
            overflowY: "hidden",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              paddingLeft: `${EDGE_PADDING}px`,
              paddingRight: `${EDGE_PADDING}px`,
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            {lines.map((_, i) => {
              const isBig = i % 10 === 0;

              return (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: "2px",
                      height: isBig ? "40px" : "20px",
                      backgroundColor: "#333",
                      opacity: isBig ? 1 : 0.5,
                    }}
                  />
                </Box>
              );
            })}
          </Box>

          {/* Year Labels Inside Scrollable Area */}
          <Box
            sx={{
              position: "absolute",
              bottom: "0px",
              left: 0,
              right: 0,
              height: "30px",
              pointerEvents: "none",
              overflow: "visible",
              display: "flex",
              alignItems: "center",
            }}
          >
            {YEAR_SCALE.map((year, idx) => {
              // Each line in flex takes: lineWidth + gap
              // Major lines are at indices: 0, 10, 20, 30, ...
              // Position = EDGE_PADDING + (lineIndex * (lineWidth + gap))
              const lineWidth = 2;
              const gap = 30;
              const majorLineIndex = idx * 10; // 0, 10, 20, 30, ...
              const position =
                EDGE_PADDING + majorLineIndex * (lineWidth + gap);

              return (
                <Box
                  key={year}
                  sx={{
                    position: "absolute",
                    left: `${position}px`,
                    bottom: "-5px",
                    transform: "translateX(-50%)",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    whiteSpace: "nowrap",
                  }}
                >
                  {year}
                </Box>
              );
            })}
          </Box>

          {/* Milestone Markers */}
          {MILESTONES.map((milestone, idx) => {
            const milestoneYear = parseInt(milestone.year);
            const isCurrentActive = activeMilestone?.year === milestone.year;
            const yearRange = END_YEAR - START_YEAR;
            const progress = (milestoneYear - START_YEAR) / yearRange;

            // Calculate position based on timeline
            const lineWidth = 2;
            const gap = 30;
            const totalWidth =
              TOTAL_LINES * lineWidth + (TOTAL_LINES - 1) * gap;
            const position = EDGE_PADDING + progress * totalWidth;
            const dotSize = 16;
            const verticalLineLength = 35;

            return (
              <Box
                key={`milestone-${milestone.year}`}
                onClick={() => handleJumpToMilestone(milestone)}
                sx={{
                  position: "absolute",
                  left: `${position}px`,
                  top: "10px",
                  transform: isCurrentActive
                    ? "translateX(-50%) scale(1.15)"
                    : "translateX(-50%)",
                  width: dotSize,
                  height: dotSize + verticalLineLength,
                  zIndex: isCurrentActive ? 6 : 5,
                  pointerEvents: "auto",
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "translateX(-50%) scale(1.25)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: milestoneYear === 1948 ? "30px" : milestoneYear === 2018 ? "-20px" : "50%",
                    top: "-8px",
                    transform:
                      idx % 2 === 0
                        ? "translateX(calc(-50% - 8px))"
                        : "translateX(calc(-50% + 8px))",
                    fontSize: "16px",
                    lineHeight: 1,
                    fontWeight: isCurrentActive ? 700 : 500,
                    color: isCurrentActive ? "#6B3C58" : "#1a1a1a",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                  }}
                >
                  {milestone.year}
                </Box>

                {/* Dot Container */}
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: 15,
                    width: `${dotSize}px`,
                    height: `${dotSize}px`,
                    borderRadius: "50%",
                    boxSizing: "border-box",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                  }}
                >
                  {/* Dotted Border Circle */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: `2px solid ${isCurrentActive ? "#ff6a00" : "#6B3C58"}`,
                      transition: "border-color 0.2s ease",
                    }}
                  />

                  {/* Solid Center Circle */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: `${dotSize / 2}px`,
                      height: `${dotSize / 2}px`,
                      borderRadius: "50%",
                      background: isCurrentActive ? "#ff6a00" : "#6B3C58",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      transition: "background 0.2s ease",
                    }}
                  />
                </Box>

                {/* Dotted Vertical Line */}
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: `${dotSize}px`,
                    width: "2px",
                    height: `${verticalLineLength}px`,
                    borderLeft: `2px dotted ${isCurrentActive ? "#ff6a00" : "#6B3C58"}`,
                    transform: "translateX(-50%)",
                    zIndex: 1,
                    transition: "border-left-color 0.2s ease",
                  }}
                />
              </Box>
            );
          })}
        </Box>

        {/* Fixed Playhead */}
        <Box
          ref={pointerRef}
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${EDGE_PADDING}px`,
            width: "2px",
            background: "#ff6a00",
            zIndex: 8,
          }}
        >
          {/* Triangle */}
          <Box
            sx={{
              position: "absolute",
              top: "-6px",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderTop: "7px solid #ff6a00",
            }}
          />

          {/* Current Year beneath playhead */}
          <Box
            sx={{
              position: "absolute",
              bottom: "-25px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "13px",
              fontWeight: 700,
              color: "#ff6a00",
              whiteSpace: "nowrap",
            }}
          >
            {currentYear}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
