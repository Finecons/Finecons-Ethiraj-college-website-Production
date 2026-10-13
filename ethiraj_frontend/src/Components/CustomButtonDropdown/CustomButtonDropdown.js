
import React, { useState } from "react";
import {
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Paper,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const CustomButtonDropdown = ({
  title = "PAY FEES",
  borderColor,
  expandBackgroundColor,
  items = [],
  color = "#868E96",
  background = "#1a1732",
  fontSize = "14px !important",
  fontWeight = "400",

  width = "150px",
  hoverBackground = "rgba(255,255,255,0.1)",
  borderRadius = "24px",
  arrowColor,
  onSelect,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [animatingOpen, setAnimatingOpen] = useState(false);
  const closedArrowColor = arrowColor || color;

  const handleToggle = () => setOpen((prev) => !prev);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setOpen(false);
    if (onSelect) onSelect(item);
    if (item.onClick) item.onClick();
  };

  return (
    <Box sx={{ position: "relative",minWidth: width }}>
      {/* Wrapper Paper (only for button part) */}
      <Paper
        sx={{
          border: "1px solid",
          borderColor: borderColor,
          boxShadow: "none",
          // px:"20px",
          
          borderRadius:
            open || animatingOpen
              ? `${borderRadius} ${borderRadius} 0 0`
              : borderRadius,
          backgroundColor: open ? expandBackgroundColor : background,
          transition: "background-color 0.3s ease, border-radius 0.2s ease",
        }}
        elevation={3}
      >
        {/* Button */}
        <Button
          onClick={handleToggle}
          endIcon={
            <ArrowDropDownIcon
              sx={{
                fontSize: "20px",
                color: open ? "#ffffff" : closedArrowColor,
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease, color 0.3s ease",
              }}
            />
          }
          sx={{
            color: open ? "white" : color,
            textTransform: "none",
            fontWeight: fontWeight,
            width: "100%",
            fontSize: fontSize,
            // justifyContent: "space-between",
            backgroundColor: "transparent",
            borderRadius: 0,
            boxShadow: "none",
          }}
        >
          {selectedItem ? selectedItem.label : title}
        </Button>
      </Paper>

      {/* Dropdown (Overlay) */}
      <Collapse
        in={open}
        timeout={300}
        unmountOnExit
        onEnter={() => setAnimatingOpen(true)}
        onEntered={() => setAnimatingOpen(false)}
        onExit={() => setAnimatingOpen(true)}
        onExited={() => setAnimatingOpen(false)}
        sx={{
          position: "absolute",
          top: "100%",
          left: 0,
          width: "100%",
          zIndex: 50,
        }}
      >
        <Paper
          sx={{
            backgroundColor: expandBackgroundColor,
            borderRadius:
              open || animatingOpen
                ? `0 0 ${borderRadius} ${borderRadius}`
                : borderRadius,
            // `0 0 ${borderRadius} ${borderRadius}`,

            overflow: "hidden",
            border: "1px solid",
            borderColor: borderColor,
            borderTop: "none", // so it looks connected to button
            boxShadow: "none",
          }}
          elevation={3}
        >
          <List sx={{ p: 0 }}>
            {items.map((item, index) => (
              <ListItemButton
                key={index}
                onClick={() => handleSelect(item)}
                selected={selectedItem?.label === item.label}
                sx={{
                  pl: 2,
                  color: "#868E96",
                  fontWeight: fontWeight,
                  fontSize: fontSize,
                  "&:hover": {
                    backgroundColor: "none",
                    color: "white",
                  },
                  "&.Mui-selected": {
                    // backgroundColor: "rgba(255,255,255,0.15)",
                    fontWeight: fontWeight,
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: fontSize,
                    "&:hover": {
                      backgroundColor: expandBackgroundColor,
                      color: "white",
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default CustomButtonDropdown;
