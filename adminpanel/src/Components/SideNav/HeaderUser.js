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


import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button, Menu, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, Notifications as NotificationsIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchWithDropdown from './SearchWithDropdown';

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5',
          borderBottom: '1px solid #e0e0e0',
          boxShadow: 'none',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          backgroundColor: '#f0f0f0',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
        },
      },
    },
  },
});

const SearchInput = styled(InputBase)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  width: '100%',
  height: '100%',
}));

const HeaderUser = ({ onMenuClick, isMobile }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedOption, setSelectedOption] = React.useState('My library');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (option) => {
    setSelectedOption(option);
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" style={{ backgroundColor:"rgba(2, 10, 31)",
          color:"white",}}>
        <Toolbar>
          {/* Menu Button */}
          {isMobile && <IconButton edge="start" color="primary" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
          }
          {/* Search Bar */}
          <SearchWithDropdown />

          {/* Select Box */}
          {/* <FormControl variant="outlined" style={{ marginLeft: 16 }}>
            <InputLabel id="select-label">Select</InputLabel>
            <Select
              labelId="select-label"
              value={selectedOption}
              onChange={(event) => setSelectedOption(event.target.value)}
              endAdornment={<ExpandMoreIcon />}
              label="Select"
            >
              <MenuItem value="Quizizz library">Quizizz library</MenuItem>
              <MenuItem value="My library">My library</MenuItem>
              <MenuItem value="Reports">Reports</MenuItem>
            </Select>
          </FormControl> */}

          {/* Buttons */}
          <Button variant="outlined" color="secondary" style={{ marginLeft: 8, fontSize: "10px", width: "150px", height: "45px", fontWeight: "bold", padding: "0px" }}>
            Enter code
          </Button>
          <IconButton color="inherit" style={{ marginLeft: 8 }}>
            <NotificationsIcon style={{ color: "blue" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default HeaderUser;
