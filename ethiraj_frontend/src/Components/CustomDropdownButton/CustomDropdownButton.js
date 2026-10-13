
import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const ButtonWithDropdown = ({
  buttonText = "PAY FEES",
  buttonColor = "#473F93",
  menuItems = [],
  onItemSelect = () => {},
  fullWidth = false,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelect = (route, label) => {
    handleCloseMenu();
     // Open link in new tab
  window.open(route, "_blank", "noopener,noreferrer");
    // onItemSelect(route, label);
  };

  // Hide button if no data
  if (menuItems.length === 0) {
    return null;
  }

  return (
    <>
      <Button
        fullWidth={fullWidth}
        variant="contained"
        sx={{
          borderRadius: "32px",
          background: buttonColor,
          padding: { lg: "8px 20px", md: "8px 15px" },
          fontSize: { md: "12.5px", lg: "16px" },
          lineHeight: "normal",
          boxShadow: "none",
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
        onClick={handleOpenMenu}
      >
        {buttonText}
        <MdExpandMore size={18} />
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        PaperProps={{
          sx: {
            backgroundColor: buttonColor,
            color: "white",
            borderRadius: "14px",
            mt: 1,
            "& .MuiMenuItem-root:hover": {
              backgroundColor: `rgba(0, 0, 0, 0.2)`,
            },
          },
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => handleSelect(item.link, item.text)}
          >
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ButtonWithDropdown;
