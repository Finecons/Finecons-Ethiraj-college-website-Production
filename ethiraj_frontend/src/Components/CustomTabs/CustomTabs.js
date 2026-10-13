import React, { useState, useRef, useEffect } from "react";
import {
  Tabs,
  Tab,
  Box,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function CustomTabs({ sections, isStickyActive, padding }) {
  const [value, setValue] = useState(0);
  const [isSticky, setIsSticky] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  /* ---------------- REFS ---------------- */

  // Dynamic section refs (safe on navigation)
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current = sections.map(
      (_, i) => sectionRefs.current[i] || React.createRef(),
    );
  }, [sections]);

  const desktopTabsRef = useRef(null);
  const mobileTabsRef = useRef(null);
  const navbarRef = useRef(null); // if you attach it

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (event, newValue) => {
    setValue(newValue);

    const targetRef = sectionRefs.current[newValue];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* ---------------- SCROLL SYNC ---------------- */

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRefs.current.length) return;

      const navbarHeight = navbarRef.current
        ? navbarRef.current.getBoundingClientRect().height
        : 0;

      const threshold = navbarHeight + 25;

      // Compute section offsets safely
      const offsets = sectionRefs.current.map((ref) => {
        if (!ref?.current) return Number.POSITIVE_INFINITY;
        return ref.current.getBoundingClientRect().top - threshold;
      });

      // Determine active tab
      let activeIndex = 0;
      for (let i = 0; i < offsets.length; i++) {
        if (offsets[i] <= 0) activeIndex = i;
      }

      if (activeIndex !== value) {
        setValue(activeIndex);
      }

      // Sticky logic
      const tabsRef = isMobile ? mobileTabsRef : desktopTabsRef;

      if (tabsRef.current && navbarRef.current) {
        const tabsRect = tabsRef.current.getBoundingClientRect();
        const navbarRect = navbarRef.current.getBoundingClientRect();
        setIsSticky(!(tabsRect.top <= navbarRect.bottom));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [value, isMobile]);

  /* ---------------- RENDER ---------------- */

  return (
    <Box
      sx={{
        width: "100%",
        position: isStickyActive ? "sticky" : "relative",
        top: isStickyActive ? 0 : "auto",
        // zIndex: 1200,
        background: "#fff",
        zIndex: 1,
      }}
    >
      {/* ---------------- DESKTOP ---------------- */}
      {!isMobile && (
        <Box
          ref={desktopTabsRef}
          sx={{
            position: isStickyActive ? "sticky" : "relative",
            top: 0,
            background: "#fff",
            // zIndex: 1200,
            borderTop: "1px solid #e0e0e0",
            borderBottom: "1px solid #e0e0e0",
        zIndex: 1,
            
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            TabIndicatorProps={{
              children: <span />,
              sx: {
                display: "flex",
                justifyContent: "center",
                backgroundColor: "transparent",
                "& > span": {
                  width: "93%",
                  height: 2,
                  backgroundColor: "black",
                  borderRadius: 1,
                },
              },
            }}
            sx={{
              borderTop: "1px solid #e0e0e0",
              borderBottom: "1px solid #e0e0e0",
              "& .MuiTab-root": {
                textTransform: "none",
                position: "relative",
                height: "76px",
                pt: 3,
                color: "var(--brand-palette-text-secondary)",
              },
              "& .MuiTab-root:hover::after": {
                content: '""',
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: 0,
                height: 2,
                color: "red",
                width: "93%",
                backgroundColor: "black",
                transition: "all 0.3s ease",
              },
              "& .css-126jrej-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                color: "black",
              },
            }}
          >
            {sections.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
        </Box>
      )}

      {/* ---------------- MOBILE ---------------- */}
      {isMobile && (
        <Box
          ref={mobileTabsRef}
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "sticky",
            top: 0,
            background: "#fff",
            zIndex: 1200,
            borderBottom: "1px solid lightgray",
            borderTop: "1px solid lightgray",
          }}
        >
          <Select
            value={value}
            onChange={(e) => handleChange(null, e.target.value)}
            sx={{
              my: 1,
              width: "95%",
              borderRadius: 2,
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "25px",
                borderColor: "#343A40",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
            }}
          >
            {sections.map((tab, index) => (
              <MenuItem key={index} value={index}>
                {tab.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}

      {/* ---------------- SECTIONS ---------------- */}
      <Box>
        {sections.map((tab, index) => (
          <Box
            key={index}
            ref={sectionRefs.current[index]}
            sx={{
              minHeight: "100%",
              scrollMarginTop: "160px",
            }}
          >
            {tab.component}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
