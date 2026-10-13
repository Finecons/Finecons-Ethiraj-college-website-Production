
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Search_icon from "../../Assets/Search_icon.svg";

const Search = styled("div")(({ theme, open }) => ({
  position: "relative",
  borderRadius: "20px",
  fontSize: "14px",
  transition: "all 0.3s ease",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  padding: "0px 20px",
  fontSize: "14px",
  color: "#495057",
  transition: "all 0.3s ease",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  right: 10,
  top: "50%",
  transform: "translateY(-50%)",
  color: "#8D959D",
  cursor: "pointer",
}));

export default function CustomSearchFeild() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Search
      open={open}
      sx={{
        width: { xs: "100%", md: open ? "170px" : "40px" },
        height: { xs: "40px", md: "30px" },
        border: { xs: "1px solid #343A40", md: open ? "1px solid #8D959D" : "none" },
        transition: "width 0.3s ease",
      }}
    >
      {/* Input field: visible only when open on md, always visible on xs */}
      <StyledInputBase
        sx={{
          opacity: { xs: 1,  md: open ? 1 : 0 },
          width: { xs: "100%", md: open ? "100%" : "0px" },
          padding: { xs: "5px 20px", md: open ? "0 20px" : "0px" },
          transition: "all 0.3s ease",
          color: { md: "#8D959D", xs: "#212529" },
          fontSize: { xs: "14px", md: "14px" },
        }}
        placeholder="Search…"
        inputProps={{
          "aria-label": "search",
        }}
        autoFocus={open}
      />

      {/* Icon: always visible, click toggles open/close */}
      <SearchIconWrapper onClick={toggleOpen}>
        <Box component="img" src={Search_icon} sx={{ width: 18, height: 18 }} />
      </SearchIconWrapper>
    </Search>
  );
}
