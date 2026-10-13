
import React, { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  Typography,
  Box,
  MenuItem,
  Grow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import menuImage from "../../Assets/Carosoul_Image1.jpg";
import infoIconImage from "../../Assets/info.svg";
import bookIconImage from "../../Assets/book-open-text.svg";
import notebookIconImage from "../../Assets/notebook-pen.svg";
import schoolIconImage from "../../Assets/school.svg";
import fileUserIconImage from "../../Assets/file-user.svg";
import graduationCapIconImage from "../../Assets/graduation-cap.svg";
import UserRoundOenIconImage from "../../Assets/user-round-pen.svg";
import fileTextIconImage from "../../Assets/file-text.svg";
import downArrow from "../../Assets/Down_arrow.svg";
import CustomSearchFeild from "../SearchField/CustomSearchFeild";
import logoDesktop from "../../Assets/logoDesktop.png";
import smallLogoDesktop from "../../Assets/Logo-Small Desktop.png";

const getColumns = (items, itemsPerColumn) => {
  const columns = [];
  for (let i = 0; i < items.length; i += itemsPerColumn) {
    columns.push(items.slice(i, i + itemsPerColumn));
  }
  return columns;
};

export default function CustomNavbar({ navData,isMainTabsActive }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const closeTimer = useRef(null);

  const handleOpen = (index) => {
    clearTimeout(closeTimer.current);
    setActiveIndex(index);
  };

  const handleClose = () => {
    closeTimer.current = setTimeout(() => {
      setActiveIndex(null);
    }, 200);
  };

  const cancelClose = () => {
    clearTimeout(closeTimer.current);
  };

  const navigate = useNavigate();
  const handleNavigation = (link, state) => {
    // navigate(link);
    navigate(link, { state }); // ✅ Pass state if available
    // handleMenuCloseSecondHeader();
  };

  const handleNavigationForMobileandTab = (link, state) => {
    // navigate(link);

    navigate(link, { state }); // ✅ Pass state if available
    // toggleDrawer(false);

    // handleMenuCloseSecondHeader();
  };

  return (
    <AppBar
      position="sticky"
      className={`navbar-container ${isMainTabsActive ? "navbar-hidden" : ""}`}

      sx={{
        backgroundColor: "#fff",
        borderBottom: isMainTabsActive ? "none" : "1px solid #eee",
        display: { xs: "none", md: "block" },
        zIndex: isMainTabsActive ? 0 : 1100,  // Lower z-index when hidden
        boxShadow: "none",
        transition: "opacity 0.4s ease, transform 0.4s ease, z-index 0.4s ease",
      }}
    >
      <Toolbar
        sx={{
          flexDirection: "column",
          alignItems: "stretch",
          padding: 0,
          // px: 4
        }}
      >
        {/* Logo */}
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{
            padding: { md: "20px 0", lg: "20px 0px" },
            // position: "relative",
          }}
        >
          {/* Logo */}
          <Grid item size={{ md: 3, lg: 3 }}>
            <Box display="flex" justifyContent="flex-start">
              <Box
                onClick={() => {
                  navigate("/");
                }}
                component="img"
                // src={{lg:logoDesktop,md:smallLogoDesktop}}
                src={logoDesktop} // default
                alt="logo"
                sx={{
                  display: { lg: "block", md: "none" },
                  height: "auto", // ✅ keeps logo height responsive
                  // height: { xs: "50px", md: "60px", lg: "74px" }, // ✅ keeps logo height responsive
                  maxWidth: "100%",
                  objectFit: "contain", // ✅ preserves aspect ratio
                  cursor: "pointer",
                }}
              />
              <Box
                onClick={() => {
                  navigate("/");
                }}
                component="img"
                // src={{lg:logoDesktop,md:smallLogoDesktop}}
                src={logoDesktop} // default
                alt="logo"
                sx={{
                  display: { lg: "none", md: "block" },
                  height: "auto", // ✅ keeps logo height responsive
                  // height: { xs: "50px", md: "60px", lg: "74px" }, // ✅ keeps logo height responsive
                  maxWidth: "100%",
                  objectFit: "contain", // ✅ preserves aspect ratio
                  cursor: "pointer",
                }}
              />
            </Box>
          </Grid>

          {/* Menu Items Container - position relative for absolute submenu */}
          <Grid
            item
            size={{ md: 9, lg: 9 }}
            // md="auto"
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                // gap: 4,
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "flex-end",
                gap: { md: "2.5%", lg: "32px" },
              }}
            >
              {navData.map((menu, index) => (
                <Box
                  onMouseLeave={handleClose} // close submenu if mouse leaves entire menu area
                >
                  <Box>
                    <Typography
                      variant="navbarMenuItemText"
                      // key={menu.type}
                      key={index}
                      onMouseEnter={() => handleOpen(index)}
                      onClick={() => {
                        navigate(menu?.link);
                      }}
                      sx={{
                        color: activeIndex === index ? "#000" : "#868E96",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: { lg: "10px", md: "5px" },
                        "&:hover": {
                          borderBottom: "1px solid black",
                        },
                      }}
                    >
                      {menu.label}
                      {menu.items && <img src={downArrow} alt="dropdown" />}
                    </Typography>
                  </Box>
                </Box>
              ))}

              {/* Submenu Panel (all submenus open at same position) */}
              {activeIndex !== null && (
                <Grow
                  in={activeIndex !== null}
                  timeout={300} // duration in ms
                  style={{ transformOrigin: "top right" }} // animation origin
                >
                  <Box
                    onMouseEnter={cancelClose}
                    onMouseLeave={handleClose}
                    sx={{
                      position: "absolute",
                      top: { lg: 70, md: 60 },
                      right: 0, // fixed to right edge of menu container
                      backgroundColor: "#D3D3D3",
                      // minWidth: {md:800,lg:900},
                      // maxWidth: {md:850,lg:1200},
                      zIndex: 9999,
                      // mt: {md:"4,
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                      // borderRadius: 2,

                      // p: 2,
                      borderRadius: "0 0 10px 10px",
                      padding: "32px 24px",
                      //  maxWidth: { xs: "100vw", md: "100vw", lg: "900px" }, // limit width
                      // width: "100%", // responsive
                      // overflowX: "auto", // prevent breaking
                    }}
                  >
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: { md: "50px" },
                      }}
                    >
                      {/* Left: Links */}
                      <Grid>
                        <Typography
                          variant="secondaryTextInterRegular"
                          sx={{
                            padding: "0 16px",
                            color: "#000000",
                            fontSize: { md: "20px", lg: "24px !important" },
                          }}
                          // sx={{ mb: 1, fontWeight: 600, color: "black" }}
                        >
                          {navData[activeIndex].label}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            gap: 4,
                            mt: { md: "20px", lg: "24px" },
                          }}
                        >
                          {getColumns(navData[activeIndex].items,5).map(
                            (col, colIdx) => (
                              <Box
                                key={colIdx}
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: 1,
                                }}
                              >
                                {col.map((item, idx) => (
                                  <MenuItem
                                    key={idx}
                                    component="a"
                                    onClick={() => {
                                      // navigate(item.link)
                                      handleNavigation(item?.link, item.state);
                                    }}
                                    sx={{
                                      fontSize: { md: "14px", lg: "16px" },
                                      py: 0.5,
                                      color: "#333",
                                      borderRadius: 1,
                                      // "&:hover": {
                                      //   backgroundColor: "#d8aee5",
                                      // },
                                    }}
                                  >
                                    {item.label}
                                  </MenuItem>
                                ))}
                              </Box>
                            )
                          )}
                        </Box>
                      </Grid>

                      {/* Right: Image */}
                      <Grid item>
                        <Box
                          component="img"
                          src={navData[activeIndex].image}
                          alt={navData[activeIndex].label}
                          sx={{
                            maxWidth: { lg: "327px", md: "300px" },
                            height: { lg: "233px", md: "200px" },
                            borderRadius: "8px",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grow>
              )}
              <CustomSearchFeild />
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
