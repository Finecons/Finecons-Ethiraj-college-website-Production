// import React from 'react';
// import { AppBar, Toolbar, IconButton, Typography, InputBase, Button, Menu, MenuItem, Select, FormControl, InputLabel, Chip } from '@mui/material';
// import { Menu as MenuIcon, Search as SearchIcon, Notifications as NotificationsIcon, ArrowBack as ArrowBackIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
// import { styled } from '@mui/system';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import SearchWithDropdown from './SearchWithDropdown';

// // Custom styles for the header
// const theme = createTheme({
//   components: {
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: '#f5f5f5', // Light background
//           borderBottom: '1px solid #e0e0e0', // Border color
//           boxShadow: 'none',
//         },
//       },
//     },
//     MuiToolbar: {
//       styleOverrides: {
//         root: {
//           display: 'flex',
//           justifyContent: 'space-between',
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           fontSize: '0.875rem', // Small font size
//         },
//       },
//     },
//     MuiInputBase: {
//       styleOverrides: {
//         root: {
//           borderRadius: '4px',
//           backgroundColor: '#f0f0f0',
//         },
//       },
//     },
//     MuiSelect: {
//       styleOverrides: {
//         root: {
//           fontSize: '0.875rem', // Small font size
//         },
//       },
//     },
//   },
// });

// const SearchInput = styled(InputBase)(({ theme }) => ({
//   paddingLeft: theme.spacing(4),
//   width: '100%',
//   height: '100%',
// }));

// const Header = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [selectedOption, setSelectedOption] = React.useState('My library');

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = (option) => {
//     setSelectedOption(option);
//     setAnchorEl(null);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <AppBar position="static" style={{background:"white"}}>
//         <Toolbar>
//           {/* Logo and Menu Button */}
//           <IconButton edge="start" color="inherit">
//             <MenuIcon />
//           </IconButton>

//           {/* Search Bar */}
//           <SearchWithDropdown />

//           {/* Select Box */}
//           <FormControl variant="outlined" style={{ marginLeft: 16 }}>
//             <InputLabel id="select-label">Select</InputLabel>
//             <Select
//               labelId="select-label"
//               value={selectedOption}
//               onChange={(event) => setSelectedOption(event.target.value)}
//               endAdornment={<ExpandMoreIcon />}
//               label="Select"
//             >
//               <MenuItem value="Quizizz library">Quizizz library</MenuItem>
//               <MenuItem value="My library">My library</MenuItem>
//               <MenuItem value="Reports">Reports</MenuItem>
//             </Select>
//           </FormControl>

//           {/* Buttons */}
//           <Button variant="outlined" color="secondary" style={{ marginLeft: 8 ,fontSize:"10px",width:"150px",height:"45px",fontWeight:"bold",padding:"0px"}}>
//             Enter code
//           </Button>
//           <IconButton color="inherit" style={{ marginLeft: 8 }}>
//             <NotificationsIcon  style={{color:"blue"}}/>
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//     </ThemeProvider>
//   );
// };

// export default Header;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  Menu,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Avatar,
  Badge,
  AvatarGroup,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { Box, Grid, styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { MdNotificationsNone } from "react-icons/md";
import profile_icon from "../../Assets/user_man_image.png";
import Stack from "@mui/material/Stack";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logout, logoutUser } from "../../ReduxStore/Slices/authSlice";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #e0e0e0",
          boxShadow: "none",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-between",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          backgroundColor: "#f0f0f0",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
        },
      },
    },
  },
});

const SearchInput = styled(InputBase)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  width: "100%",
  height: "100%",
}));

const Header = ({
  onMenuClick,
  isMobile,
  headerTitleName,
  edit,
  updateApiName,
  checkApiName,
  heading,
  icon,
  profileData,
  ProfileImageHeader,
  sessionNameHeader,
}) => {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedOption, setSelectedOption] = React.useState('My library');
  console.log(sessionNameHeader, ProfileImageHeader, "headerImage")
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //  const headerName = useSelector((state) => state.header.title); // Get header name
  const headerName = useSelector((state) => state.header); // Get header name

  const userRole =
    sessionStorage.getItem("role").charAt(0).toUpperCase() +
    sessionStorage.getItem("role").slice(1);
  console.log(userRole, "userRoleSSSS");

  const handleMenuClose = () => {
    // setSidebarOpen(isSidebarOpen)
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    // handleProfileClick()
    setModalOpen(true);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 const dispatch=useDispatch()
  const navigate = useNavigate();

  const handleClose = () => {
    
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    // navigate("/login"); // Redirect to login after logout
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        style={{
          // background: "rgb(242 242 242)",
          background: "#F7F7F7 ",

          borderBottom: "none",
          // paddingTop: "10px"
        }}
      >
        <Toolbar sx={{ p: 0 }}>
          {/* Menu Button */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              {/* {!isMobile && <IconButton edge="start" style={{ color: "var(--button-bgcolor)" }} onClick={handleMenuClose}>
                  {icon}
                </IconButton>
                } */}
              {isMobile && (
                <IconButton edge="start" color="black" onClick={onMenuClick}>
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h3"
                sx={{ color: "black", fontSize: { xs: "15px", md: "22px" } }}
              >
                {headerName.title}{" "}
                {headerName?.subTitle && (
                  <>
                    {" "}
                    /
                    <span style={{ color: "#C38F51" }}>
                      {headerName.subTitle}
                    </span>
                  </>
                )}
                {/* Dashboard */}
              </Typography>
            </Box>
          </Box>
          <Grid
            container
            spacing={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* 
            <IconButton color="inherit" >
              <NotificationsIcon style={{ color: "black" }} />
            </IconButton> */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* <Stack spacing={4} direction="row">
                <Badge
                  background="black"
                  sx={{
                    ".MuiBadge-badge": { color: "white", background: "black" },
                  }}
                  badgeContent={3}
                >
                  <MdNotificationsNone
                    style={{ color: "#C38F51", fontSize: "25px" }}
                  />
                </Badge>
              </Stack> */}
            </Box>
            <Box
              sx={{
                // border: '1px solid black',

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // border: "1px solid white",
                p: "10px 16px",
                // background: "white"
                // height: { xs: "20px", md: '35px' },
                // width: { xs: "20px", md: '35px' },
              }}
            >
              <Box>
                <Avatar
                  sx={{
                    height: { xs: "14px", md: "40px" }, // Adjust height based on screen size
                    width: { xs: "14px", md: "40px" }, // Adjust width based on screen size
                  }}
                >
                  {/* Placeholder Icon */}
                  <Box
                    component="img"
                    src={profile_icon} // Source of the image (profile icon)
                    alt="profile-icon" // Alt text for the image
                    sx={{
                      height: { xs: "14px", md: "40px" }, // Adjust height based on screen size
                      width: { xs: "14px", md: "40px" }, // Adjust width based on screen size
                    }}
                  />
                </Avatar>
              </Box>
              {/* <Box
                sx={{
                  paddingLeft: { xs: "5px", md: "10px", textAlign: "start" },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "12px", md: "14px", color: "black" } }}
                >
                  My Account
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "10px", md: "12px" },
                    color: "#AAAAAA",
                  }}
                >
                  {userRole}
                </Typography>
              </Box> */}
              <Box>
                <Box
                  sx={{
                    paddingLeft: { xs: "5px", md: "10px" },
                    textAlign: "start",
                    cursor: "pointer",
                  }}
                  onClick={handleClick}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                      color: "black",
                    }}
                  >
                    My Account
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "10px", md: "12px" },
                      color: "#AAAAAA",
                    }}
                  >
                    {userRole} 
                  </Typography>
                </Box>

                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Box>
            </Box>
          </Grid>
        </Toolbar>

        {/* <ProfilePageModel
            edit={edit}

            checkApiName={checkApiName}
            updateApiName={updateApiName}
            sessionNameHeader={sessionNameHeader}
            profileData={profileData}
            open={isModalOpen}
            onClose={handleCloseModal}
            onSave={handleOpenModal}
            // confirmPageValues={confirmPageValues}
            userProfile={{ name: profileData.name, email: profileData.email, phone: profileData.phone, profileImage: profileData.profileImage }}
          /> */}
        {/* <ProfilePageOperatorModal
          sessionNameHeader={sessionNameHeader}
          profileData={profileData}
          open={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleOpenModal}
          // confirmPageValues={confirmPageValues}
          userProfile={{ name: profileData.name, email: profileData.email, phone: profileData.phone, profileImage: profileData.profileImage }}
        /> */}
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
