import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
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

export default function LineMinimap({ scrollProgress = null }) {
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

  // Check if current year is at a milestone (exact year only)
  const isAtMilestone = MILESTONES.some((milestone) => {
    const diff = Math.abs(parseInt(milestone.year) - currentYear);
    return diff === 0;
  });

  // Show card if at milestone OR hovering over a milestone
  const shouldShowCard = isAtMilestone;
  const displayMilestone = activeMilestone;
  const displayCardLeft = cardLeft;

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
    const cardWidth = 290;
    const sectionWidth = section.clientWidth;
    const minCardLeft = cardWidth / 2 + 10;
    const maxCardLeft = sectionWidth - cardWidth / 2 - 10;
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
      {/* Active Milestone Display */}
      {shouldShowCard && (
        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: `${displayCardLeft}px`,
            transform: "translateX(-50%)",
            // background: "#FFE6FF",
            // border: "2px solid #6B3C58",
            // borderRadius: "12px",
            overflow: "hidden",
            // maxWidth: "320px",
            width: "100%",
            zIndex: 10,
            transition: "left 100ms linear, opacity 0.3s ease",
            opacity: shouldShowCard ? 1 : 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "300px",
          }}
        >
          {/* Image */}
          {displayMilestone.img && (
            <Box
              component="img"
              src={displayMilestone.img}
              sx={{
                width: "241px",
                height: "164px",
                objectFit: "cover",
                display: "block",
              }}
            />
          )}
          {/* Content */}
          <Box sx={{ padding: "14px 12px" }}>
            <Box
              sx={{
                fontSize: "14px",
                color: "#666",
                lineHeight: "1.5",
                marginBottom: "12px",
              }}
            >
              {displayMilestone.description}
            </Box>
            <Box
              sx={{
                fontSize: "18px",
                color: "#6B3C58",
                fontWeight: "bold",
                textAlign:
                  displayMilestone.year === 2018 ||
                  displayMilestone.year === "2018"
                    ? "left"
                    : displayMilestone.year === 1948 ||
                        displayMilestone.year === "1948"
                      ? "left"
                      : "center",
              }}
            >
              {displayMilestone.year}
            </Box>
          </Box>
        </Box>
      )}

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
            const isHovered = false;

            return (
              <Box
                key={`milestone-${milestone.year}`}
                sx={{
                  position: "absolute",
                  left: `${position}px`,
                  top: "10px",
                  transform: "translateX(-50%)",
                  width: dotSize,
                  height: dotSize + verticalLineLength,
                  zIndex: 5,
                  pointerEvents: "auto",
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "translateX(-50%) scale(1.2)",
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
                    fontWeight: 500,
                    color: "#1a1a1a",
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
                      border: `2px solid ${isHovered ? "#ff6a00" : "#6B3C58"}`,
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
                      background: isHovered ? "#ff6a00" : "#6B3C58",
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
                    borderLeft: `2px dotted ${isHovered ? "#ff6a00" : "#6B3C58"}`,
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
        </Box>
      </Box>
    </Box>
  );
}
