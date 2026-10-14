import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Search_icon from "../../Assets/Search_icon.svg";
import { openSiteSearch } from "../Search/SiteSearchModal";

const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
  transition: "all 0.2s ease",
  backgroundColor: "#fff",
  userSelect: "none",
}));

export default function CustomSearchFeild() {
  const handleOpen = () => {
    openSiteSearch();
  };

  return (
    <SearchWrapper
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      aria-label="Open search"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen();
        }
      }}
      sx={{
        width: { xs: "100%", md: "165px" },
        height: { xs: "40px", md: "32px" },
        border: "1px solid #CED4DA",
        px: 1.5,
        "&:hover": {
          borderColor: "#6B3C58",
          backgroundColor: "#FDF8FA",
        },
      }}
    >
      <Box
        component="span"
        sx={{
          color: "#8D959D",
          fontSize: "13px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Search…
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
        <Box
          component="span"
          sx={{
            display: { xs: "none", md: "inline-block" },
            fontSize: "10px",
            fontWeight: 600,
            backgroundColor: "#F1F3F5",
            color: "#868E96",
            px: 0.6,
            py: 0.2,
            borderRadius: "4px",
            lineHeight: 1,
          }}
        >
          Ctrl K
        </Box>
        <Box
          component="img"
          src={Search_icon}
          sx={{ width: 16, height: 16, opacity: 0.8 }}
          alt="Search"
        />
      </Box>
    </SearchWrapper>
  );
}
