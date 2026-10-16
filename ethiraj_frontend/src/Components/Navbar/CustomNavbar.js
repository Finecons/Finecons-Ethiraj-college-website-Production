
import React, { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Box,
  MenuItem,
  Grow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import downArrow from "../../Assets/Down_arrow.svg";
import CustomSearchFeild from "../SearchField/CustomSearchFeild";
import logoDesktop from "../../Assets/logoDesktop.png";

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
  const activeMenu = activeIndex !== null ? navData[activeIndex] : null;
  const groupedItems =
    activeMenu?.groups && activeMenu.groups.length > 0
      ? activeMenu.groups
      : getColumns(activeMenu?.items || [], 5).map((items) => ({
          title: "",
          items,
        }));

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
  const handleNavigation = (link, state, openInNewTab = false) => {
    if (openInNewTab) {
      window.open(link, '_blank');
    } else {
      navigate(link, { state }); // ✅ Pass state if available
    }
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
        zIndex: isMainTabsActive ? 0 : 1300,
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
                  key={menu.label}
                  onMouseLeave={handleClose} // close submenu if mouse leaves entire menu area
                  sx={{
                    position: "relative",
                  }}
                >
                  <Box>
                    <Typography
                      variant="navbarMenuItemText"
                      onMouseEnter={() => handleOpen(index)}
                      onClick={() => {
                        handleNavigation(menu?.link, menu?.state, menu?.openInNewTab);
                      }}
                      sx={{
                        color: activeIndex === index ? "#000" : "#868E96",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: { lg: "10px", md: "5px" },
                        pb: "4px",
                        "&:hover": {
                          borderBottom: "1px solid black",
                        },
                      }}
                    >
                      {menu.label}
                      {menu.items && <img src={downArrow} alt="dropdown" />}
                    </Typography>
                    {activeIndex === index && menu.items ? (
                      <Box
                        sx={{
                          position: "absolute",
                          left: "50%",
                          transform: "translateX(-50%)",
                          top: { lg: "45px", md: "45px" },
                          width: 0,
                          height: 0,
                          borderLeft: "5px solid transparent",
                          borderRight: "5px solid transparent",
                          borderBottom: "8px solid #7a3d66",
                          zIndex: 10000,
                          pointerEvents: "none",
                        }}
                      />
                    ) : null}
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
                      top: { lg: "65px", md: "55px" },
                      right: 0,
                      backgroundColor: "white",
                      zIndex: 1200,
                      boxShadow: "0px 10px 12px -6px rgba(0,0,0,0.12)",
                      borderRadius: "0 0 14px 14px",
                      padding: { md: "28px 24px", lg: "32px 28px" },
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
                          {activeMenu?.dropdownTitle || activeMenu?.label}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            gap: { md: 3, lg: 4 },
                            flexWrap: "nowrap",
                            mt: { md: "20px", lg: "24px" },
                          }}
                        >
                          {groupedItems.map((group, colIdx) => (
                            <Box
                              key={`${group.title || "group"}-${colIdx}`}
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                minWidth: { md: "170px", lg: "190px" },
                              }}
                            >
                              {group.sections && group.sections.length > 0 ? (
                                group.sections.map((section, sectionIdx) => (
                                  <Box
                                    key={`${section.title || "section"}-${sectionIdx}`}
                                    sx={{
                                      mt: sectionIdx === 0 ? 0 : 1.5,
                                    }}
                                  >
                                    {section.title ? (
                                      <Typography
                                        variant="secondaryTextInterRegular"
                                        sx={{
                                          px: 2,
                                          mb: 0.6,
                                          color: "#1C1C1C",
                                          fontSize: { md: "16px", lg: "18px" },
                                          fontWeight: "500 !important",
                                        }}
                                      >
                                        {section.title}
                                      </Typography>
                                    ) : null}
                                    {section.items.map((item, idx) => (
                                      <MenuItem
                                        key={`${item.label}-${idx}`}
                                        component="a"
                                        onClick={() => {
                                          handleNavigation(item?.link, item.state, item.openInNewTab);
                                        }}
                                        sx={{
                                          fontSize: { md: "14px", lg: "16px" },
                                          py: 0.5,
                                          color: "#333",
                                          borderRadius: 1,
                                        }}
                                      >
                                        {item.label}
                                      </MenuItem>
                                    ))}
                                  </Box>
                                ))
                              ) : (
                                <>
                                  {group.title ? (
                                    <Typography
                                      variant="secondaryTextInterRegular"
                                      sx={{
                                        px: 2,
                                        mb: 0.6,
                                        color: "#1C1C1C",
                                        fontSize: { md: "16px", lg: "18px" },
                                        fontWeight: "500 !important",
                                      }}
                                    >
                                      {group.title}
                                    </Typography>
                                  ) : null}
                                  {group.items.map((item, idx) => (
                                    <MenuItem
                                      key={`${item.label}-${idx}`}
                                      component="a"
                                      onClick={() => {
                                        handleNavigation(item?.link, item.state, item.openInNewTab);
                                      }}
                                      sx={{
                                        fontSize: { md: "14px", lg: "16px" },
                                        py: 0.5,
                                        color: "#333",
                                        borderRadius: 1,
                                      }}
                                    >
                                      {item.label}
                                    </MenuItem>
                                  ))}
                                </>
                              )}
                            </Box>
                          ))}
                        </Box>
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
