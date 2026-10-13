// src/components/GoToTopButton.jsx
import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Fab, Zoom } from "@mui/material";

const CustomGoToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={visible}>
      <Fab
        color="primary"
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          background: "#f2f2f2",
          border: "1px dashed gray",

          boxShadow: "none",

          zIndex: 100000000,
        }}
      >
        <ArrowUpwardIcon style={{ color: "gray" }} />
      </Fab>
    </Zoom>
  );
};

export default CustomGoToTopButton;
