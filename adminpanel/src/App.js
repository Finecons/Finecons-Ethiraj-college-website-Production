
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Pages/LoginPage';
import Layout from './Components/Layout/Layout';
import FullPageLoader from './Components/FullPageLoader/FullPageLoader';
import { ThemeProvider } from '@emotion/react';
import { createTheme, Typography } from '@mui/material';
import './App.css'
import Dashboard from './Pages/Dashboard/Dashboard';
import ProtectedRoute from './Pages/PrivateRoute';



const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Default font for body
    CustomSideBarText: {
      fontFamily: "Roboto",
      // fontWeight: "bold",
      // color:"red",
      fontSize: "16px",
      [`@media (max-width:600px)`]: {
        fontSize: "14px", // Larger font size for larger screens
      },
    },
    h1: {
      fontFamily: "Poppins",
      fontWeight: "bold",
      fontSize: "50px",
      [`@media (max-width:600px)`]: {
        fontSize: "40px", // Larger font size for larger screens
      },
    },
    h2: {
      fontFamily: "Poppins",
      fontWeight: "medium",
      fontSize: "40px",
      [`@media (max-width:600px)`]: {
        fontSize: "30px", // Larger font size for larger screens
      },
    },
    h3: {
      fontFamily: "Poppins",
      fontWeight: "normal",
      fontSize: "30px",
      [`@media (max-width:600px)`]: {
        fontSize: "22px", // Larger font size for larger screens
      },
    },
    h6: {
      fontFamily: "Poppins",
      fontWeight: "medium",
      fontSize: "18px",
      color: "#252525",
      [`@media (max-width:600px)`]: {
        fontSize: "16px", // Larger font size for larger screens
      },
    },
    h5: {
      fontFamily: "Poppins",
      fontWeight: "medium",
      fontSize: "16px",
      color: "#252525",
      [`@media (max-width:600px)`]: {
        fontSize: "14px", // Larger font size for larger screens
      },

    },

    body1: {
      fontFamily: "Roboto",
      fontWeight: "normal",
      fontSize: "14px",
      [`@media (max-width:600px)`]: {
        fontSize: "11px", // Larger font size for larger screens
      },
    },
    body2: {
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "16px",
      [`@media (max-width:600px)`]: {
        fontSize: "14px", // Larger font size for larger screens
      },
    },
    subtitle1: {
      fontFamily: "Roboto",
      fontWeight: "normal",
      fontSize: "15px",
      [`@media (max-width:600px)`]: {
        fontSize: "13px", // Larger font size for larger screens
      },
    },
    subtitle2: {
      fontFamily: "poppins",
      fontWeight: "normal",
      fontSize: "16px",
      [`@media (max-width:600px)`]: {
        fontSize: "12px", // Larger font size for larger screens
      },
    },
    button: {
      fontFamily: "Roboto", // Buttons will use Poppins
      fontWeight: "normal",
      textTransform: "uppercase", // Optional: makes text uppercase
      fontSize: "16px",

      [`@media (max-width:600px)`]: {
        fontSize: "12px", // Larger font size for larger screens
      },
    },


  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       fontFamily: "Poppins", // Ensure Poppins applies to buttons
    //       fontWeight: "bold",
    //       fontSize: "0.875rem",
    //       textTransform: "uppercase", // Optional: uppercase for buttons
    //     },
    //   },
    // },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: "Poppins", // Custom font
          fontWeight: "medium",
          fontSize: "16px",
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        primary: {
          fontFamily: "Poppins", // Custom font
          fontWeight: "medium",
          fontSize: "16px",
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto", // Menu items use Roboto
          fontSize: "1rem",
          fontWeight: "normal",
        },
      },
    },
  },
});


// const App = () => {
//   const { isLoggedIn } = useSelector((state) => state.auth);

//   return (

//     <ThemeProvider theme={theme}>

//       <Router>
//         <Routes>
//           {/* Public Routes */}
//           {!isLoggedIn ? (
//             <>
//               <Route path="/" element={<Login />} />
//               <Route path="*" element={<Navigate to="/" />} />
//             </>
//           ) : (
//             // Protected Routes
//             <>
//               <Route path="/*" element={<Layout />} />
//               {/* <Route path="*" element={<Navigate to="/" />} /> */}
//             </>
//           )}
//         </Routes>
//       </Router>
//     </ThemeProvider>
//   );
// };

// export default App;



const App = () => {
  // const { isLoggedIn } = useSelector((state) => state.auth);

  const { isAuthenticated } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.loading);

  return (
    <ThemeProvider theme={theme}>
      {isLoading && <FullPageLoader />}
      <Router>
        <Routes>
          {/* <Route path="/protect" element={<ProtectedRoute />} /> */}

          {/* Public Routes */}
          {/* {!isLoggedIn ? ( */}
          {!isAuthenticated ? (
            <>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            // Protected Routes
            <>
              <Route path="/*" element={<Layout />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;