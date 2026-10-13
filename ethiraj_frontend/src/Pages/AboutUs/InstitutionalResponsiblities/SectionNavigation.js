
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  FormControl,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const menuItems = [
  { label: "Governing Body", target: "Governing Body"},
  { label: "College Commitee", target: "College Committee" },
  { label: "Academic Council", target: "Academic Council" },
  { label: "Finance Commitee", target: "Finance Committee" },
  { label: "Board of Studies", target: "Board of Studies" },
  { label: "harassment-commitee", target: "Harassment Committee" },

];

const SectionNavigation = () => {
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [sectionOpen, setSectionOpen] = useState(false); // ✅ added this

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 100; // adjust to your layout
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // ✅ Track the active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item.target);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(item.target);
            setSelectedSection(item.label);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Filter items based on search
  const filteredItems = menuItems.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ width: { xs: "100%", md: 250 } }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
        ON THIS PAGE
      </Typography>

      {/* ✅ Mobile Dropdown */}
      <Grid container spacing={2}>
        <Grid
          sx={{ display: { xs: "block", md: "none" }, mb: 2 }}
          size={{ xs: 12, sm: 6 }}
        >
          <FormControl size="small" fullWidth>
            <Select
              value={selectedSection || ""}
              onChange={(e) => {
                const selected = menuItems.find(
                  (item) => item.label === e.target.value
                );
                setSelectedSection(selected.label);
                handleScrollToSection(selected.target);
              }}
              displayEmpty
              open={sectionOpen}
              onOpen={() => setSectionOpen(true)}
              onClose={() => setSectionOpen(false)}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#6B3C58",
                    borderRadius: "10px",
                    marginTop: "5px",
                    color: "white",
                    overflowY: "auto",
                    "& .MuiMenuItem-root:hover": {
                      backgroundColor: "#6B3C58",
                    },
                  },
                },
              }}
              sx={{
                backgroundColor: sectionOpen ? "#6B3C58" : "white",
                color: sectionOpen ? "white" : "#6B3C58",
                borderRadius: "24px",
                border: sectionOpen ? "1px solid #6B3C58" : "none",
                "& .MuiSvgIcon-root": {
                  color: sectionOpen ? "white" : "black",
                },
                fontSize: "14px",
                width: "100%",
                // maxWidth: { sm: "300px", xs: "100%" },
                transition: "background-color 0.2s ease",

                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: sectionOpen ? "none" : "1px solid #6B3C58",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: sectionOpen ? "none" : "1px solid #6B3C58",
                },

                // ✅ Ellipsis support
                "& .MuiSelect-select": {
                  display: "block !important",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  minWidth: 0,
                  width: "100%",
                },
              }}
            >
              <MenuItem value="">
                <em>Select Section</em>
              </MenuItem>
              {menuItems.map((item) => (
                <MenuItem
                  key={item.target}
                  value={item.label}
                  title={item.label}
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "280px",

                    "&.MuiMenuItem-root.Mui-selected": {
                      backgroundColor: "transparent !important",
                    },
                    "&:hover": {
                      background: "none !important",
                    },
                    background: "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.label}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* ✅ Search bar */}
        {/* <TextField
        fullWidth
        placeholder="Search"
        size="small"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          mb: 2,
          borderRadius: "24px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "24px",
            borderColor:'black'
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      /> */}
        <Grid size={{ xs: 12, sm: 6,md:12 }}>
          <TextField
            fullWidth
            placeholder="Search"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              mb: 2,
              borderRadius: "24px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "24px",
                "& fieldset": {
                  borderColor: "#6B3C58", // normal border
                },
                "&:hover fieldset": {
                  borderColor: "#6B3C58", // hover border
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#6B3C58", // ✅ removes blue and sets custom color
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      {/* ✅ Section list (auto filtered by search) */}
      <List sx={{ display: { xs: "none", md: "block" } }}>
        {filteredItems.map((item, index) => (
          <ListItem
            key={index}
            onClick={() => handleScrollToSection(item.target)}
            sx={{
              py: 0.7,
              px: 0,
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: activeSection === item.target ? 600 : 400,
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SectionNavigation;
