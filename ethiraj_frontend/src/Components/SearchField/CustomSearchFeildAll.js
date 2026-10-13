
import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Search_icon from "../../Assets/Search_icon.svg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  border: "1px solid #8D959D",
  transition: "all 0.2s ease",
  "&:focus-within": {
    // borderColor: "#", // highlight border color when active
    border: "1.5px solid black",

    // boxShadow: "0 0 0 2px rgba(25, 118, 210, 0.2)",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  padding: "0px 20px",
  fontSize: "14px",
  color: "#495057",
  transition: "color 0.2s ease",
  "& input:focus": {
    color: "black", // change text color when typing (active)
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  right: 10,
  transform: "translateY(-50%)",
  pointerEvents: "none",
  color: "#8D959D",
}));

export default function CustomSearchFeildAll({ fullWidth, onChange, value }) {
  return (
    <Search
      sx={{
        width: { xs: "100%", md: fullWidth ? "100%" : "170px" },
        fontSize: "14px",
        height: { xs: "40px", md: "38px" },
        borderColor: { md: "#8D959D", xs: "#343A40" },
      }}
    >
      <StyledInputBase
        value={value}
        onChange={onChange}
        placeholder="Search…"
        inputProps={{
          "aria-label": "search",
        }}
        sx={{
          padding: { xs: "5px 20px", md: "3px 20px" },
          color: { md: "#8D959D", xs: "#212529" },
        }}
      />
      <SearchIconWrapper
        sx={{
          top: { xs: 22, md: 20 },
        }}
      >
        <Box component="img" src={Search_icon} />
      </SearchIconWrapper>
    </Search>
  );
}
