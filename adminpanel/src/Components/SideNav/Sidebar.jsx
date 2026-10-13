// // // // import React, { useState } from 'react';
// // // // import { NavLink } from 'react-router-dom';
// // // // import { Box, Drawer, useMediaQuery, IconButton } from '@mui/material';
// // // // import { useTheme } from '@mui/material/styles';
// // // // import { PiUsersThreeFill } from "react-icons/pi";
// // // // import { RxExit } from "react-icons/rx";
// // // // import goldstake_logo from "../../Assets/Logo.png";
// // // // import { MdDashboard } from "react-icons/md";

// // // // import { ImStack } from "react-icons/im";
// // // // import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// // // // import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// // // // import { GoDotFill } from "react-icons/go";
// // // // import "./Sidebar.css";

// // // // const Sidebar = ({ open, onClose }) => {
// // // //   const theme = useTheme();
// // // //   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
// // // //   const [expandedMenu, setExpandedMenu] = useState(null); // Track the expanded menu

// // // //   // Toggle submenu visibility
// // // //   const toggleMenu = (menuName) => {
// // // //     setExpandedMenu((prevState) => (prevState === menuName ? null : menuName)); // Toggle submenu
// // // //   };

// // // //   const SidebarLink = ({ to, icon, label }) => (
// // // //     <NavLink
// // // //       to={to}
// // // //       style={({ isActive }) => ({
// // // //         display: 'flex',
// // // //         alignItems: 'center',
// // // //         padding: "10px",
// // // //         textDecoration: 'none',
// // // //         color: isActive ? "black" : "white",
// // // //         backgroundColor: isActive ? "white" : "transparent",
// // // //         borderRadius: "4px",
// // // //       })}
// // // //     >
// // // //       <Box sx={{ display: 'flex', alignItems: 'center' }}>
// // // //         {icon}
// // // //         {label}
// // // //       </Box>
// // // //     </NavLink>
// // // //   );

// // // //   // Reusable Submenu
// // // //   const SidebarSubmenu = ({ menuName, items, icon, label }) => (
// // // //     <Box>
// // // //       <Box
// // // //         onClick={() => toggleMenu(menuName)}
// // // //         style={{
// // // //           // color: expandedMenu === menuName ? '#6B3C58' : 'white',

// // // //         }}
// // // //         sx={{
// // // //           display: 'flex',
// // // //           alignItems: 'center',
// // // //           padding: 2,
// // // //           cursor: 'pointer',

// // // //           color: "white",
// // // //           '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
// // // //         }}
// // // //       >
// // // //         {icon}
// // // //         {label}
// // // //         <IconButton
// // // //           size="small"
// // // //           sx={{
// // // //             marginLeft: 'auto',
// // // //             height: '100%', // Make icon take full height of the container
// // // //             color: 'white', // Ensure icon color is white
// // // //           }}
// // // //         >
// // // //           {expandedMenu === menuName ? <ExpandLessIcon /> : <ExpandMoreIcon />}
// // // //         </IconButton>
// // // //       </Box>
// // // //       {expandedMenu === menuName && (
// // // //         <Box sx={{ paddingLeft: 2 }}>
// // // //           {items.map((item) => (
// // // //             <SidebarLink key={item.to} to={item.to} icon={<GoDotFill style={{ color: "#C39045" }} />} label={item.label} />
// // // //           ))}
// // // //         </Box>
// // // //       )}
// // // //     </Box>
// // // //   );

// // // //   return (
// // // //     <Drawer
// // // //       anchor="left"
// // // //       open={open}
// // // //       onClose={onClose}
// // // //       variant={isMobile ? 'temporary' : 'permanent'}
// // // //       // style={{ background: "black" }}
// // // //       sx={{
// // // //         width: 280,
// // // //         height: "100%",
// // // //         flexShrink: 0,

// // // //         // borderTopRightRadius: "20px",
// // // //         '& .MuiDrawer-paper': {
// // // //           width: 280,
// // // //           boxSizing: 'border-box',
// // // //           background: "black"
// // // //         },
// // // //       }}
// // // //     >
// // // //       {/* <Box
// // // //         sx={{
// // // //           display: 'flex',
// // // //           flexDirection: 'column',
// // // //           // bgcolor: "black",
// // // //           maxWidth: "260px",
// // // //           minHeight:"100vh",
// // // //           overflow:"auto",
// // // //           // borderTopRightRadius: "20px",
// // // //           // borderBottomRightRadius: "10px",
// // // //           borderRight: `1px solid ${theme.palette.divider}`,
// // // //           boxShadow: 1,
// // // //         }}
// // // //       > */}
// // // //       <NavLink to="/" style={{ textDecoration: 'none' }}>
// // // //         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "20px" }}>
// // // //           <img src={goldstake_logo} alt="logo" style={{ height: '40px', width: '150px' }} />
// // // //         </Box>
// // // //       </NavLink>

// // // //       {/* Sidebar Menu */}
// // // //       <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, px: 1 }}>
// // // //         <SidebarLink to="/" icon={<MdDashboard style={{ marginRight: "10px" }} />} label="Dashboard" />
// // // //         {/* <SidebarLink to="/alluserlist" icon={<MdDashboard style={{ marginRight: "10px" }} />} label="Dashboard" /> */}

// // // //         <SidebarSubmenu
// // // //           menuName="Operator Registration"
// // // //           icon={<ImStack style={{ marginRight: "10px", color: "white" }} />}
// // // //           label="Operator Registration"
// // // //           items={[
// // // //             { to: "/alluserlist", label: "All User List" },
// // // //             { to: "/purchaserlist", label: "Purchaser List" },
// // // //             { to: "/referrerlist", label: "Referrer List" },
// // // //             { to: "/finanicalconsultantlist", label: "Financial Consultant List" },
// // // //           ]}
// // // //         />

// // // //         <SidebarSubmenu
// // // //           menuName="schememanagement"
// // // //           icon={<PiUsersThreeFill style={{ marginRight: "10px", color: "white" }} />}
// // // //           label="Scheme Management"
// // // //           items={[
// // // //             { to: "/admin/allorders", label: "Gold Stake Schemes" },
// // // //             { to: "/admin/neworders", label: "Referrals Scheme" },
// // // //           ]}
// // // //         />

// // // //         <SidebarSubmenu
// // // //           menuName="ContentManagement"
// // // //           icon={<PiUsersThreeFill style={{ marginRight: "10px", color: "white" }} />}
// // // //           label="Content Management"
// // // //           items={[
// // // //             { to: "/ContentManagement-home", label: "Home" },
// // // //             { to: "/ContentManagement-stakenow", label: "Stake Now" },
// // // //             { to: "/ContentManagement-referrals", label: "Referrals" },
// // // //             { to: "/ContentManagement-aboutus", label: "About Us" },
// // // //             { to: "/ContentManagement-blogs", label: "Blogs" },
// // // //             { to: "/ContentManagement-contactus", label: "Contact Us" },
// // // //           ]}
// // // //         />

// // // //         <SidebarSubmenu
// // // //           menuName="Masters"
// // // //           icon={<PiUsersThreeFill style={{ marginRight: "10px", color: "white" }} />}
// // // //           label="Masters"
// // // //           items={[
// // // //             { to: "/user-role", label: "User Roles" },
// // // //             { to: "/user-list", label: "User List" },
// // // //           ]}
// // // //         />
// // // //       </Box>

// // // //       {/* Logout Button */}
// // // //       <Box
// // // //         className="sidenav-text"
// // // //         sx={{
// // // //           display: 'flex',
// // // //           alignItems: 'center',
// // // //           p: 2,
// // // //           color: "white",
// // // //           cursor: 'pointer',
// // // //           m: 'auto',
// // // //           '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
// // // //         }}
// // // //       >
// // // //         <RxExit
// // // //           style={{ marginRight: "10px" }}
// // // //         />
// // // //         Logout
// // // //       </Box>
// // // //       {/* </Box> */}
// // // //     </Drawer>
// // // //   );
// // // // };

// // // // export default Sidebar;

// // // import React, { useEffect, useState } from 'react';
// // // import { NavLink, useNavigate } from 'react-router-dom';
// // // import { Box, Drawer, useMediaQuery, IconButton } from '@mui/material';
// // // import { useTheme } from '@mui/material/styles';
// // // import { PiUsersThreeFill } from "react-icons/pi";
// // // import { RxExit } from "react-icons/rx";
// // // import goldstake_logo from "../../Assets/Logo.png";
// // // import { MdDashboard } from "react-icons/md";
// // // import { ImStack } from "react-icons/im";
// // // import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// // // import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// // // import { GoDotFill } from "react-icons/go";
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { logout } from '../../ReduxStore/Slices/authSlice';

// // // const Sidebar = ({ open, onClose }) => {
// // //   const theme = useTheme();
// // //   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
// // //   const [expandedMenu, setExpandedMenu] = useState(null);

// // //   const toggleMenu = (menuName) => {
// // //     setExpandedMenu((prevState) => (prevState === menuName ? null : menuName));
// // //   };

// // //   const role = useSelector((state) => state.auth.userRole); // Get the role from Redux state
// // //   console.log(role, "role")

// // //   const dispatch = useDispatch();
// // //   const navigate = useNavigate();

// // //   const handleLogout = () => {
// // //     dispatch(logout());
// // //     navigate('/login'); // Redirect to login after logout
// // //   };

// // //   // useEffect(() => {
// // //   //   if (role === "Super Admin") {
// // //   //     navigate("/superadmin");
// // //   //   } else if (role === "Management") {
// // //   //     navigate("/management");
// // //   //   }
// // //   // }, [role, navigate]);

// // //   const SidebarLink = ({ to, icon, label }) => (
// // //     <NavLink
// // //       to={to}
// // //       style={({ isActive }) => ({
// // //         display: 'flex',
// // //         alignItems: 'center',
// // //         padding: "10px",
// // //         textDecoration: 'none',
// // //         color: isActive ? "black" : "white",
// // //         backgroundColor: isActive ? "white" : "transparent",
// // //         borderRadius: "4px",
// // //       })}
// // //     >
// // //       <Box sx={{ display: 'flex', alignItems: 'center' }}>
// // //         {icon}
// // //         {label}
// // //       </Box>
// // //     </NavLink>
// // //   );

// // //   const SidebarSubmenu = ({ menuName, items, icon, label }) => (
// // //     <Box>
// // //       <Box
// // //         onClick={() => toggleMenu(menuName)}
// // //         sx={{
// // //           display: 'flex',
// // //           alignItems: 'center',
// // //           padding: 2,
// // //           cursor: 'pointer',
// // //           color: "white",
// // //           '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
// // //         }}
// // //       >
// // //         {icon}
// // //         {label}
// // //         <IconButton
// // //           size="small"
// // //           sx={{ marginLeft: 'auto', color: 'white' }}
// // //         >
// // //           {expandedMenu === menuName ? <ExpandLessIcon /> : <ExpandMoreIcon />}
// // //         </IconButton>
// // //       </Box>
// // //       {expandedMenu === menuName && (
// // //         <Box sx={{ paddingLeft: 2 }}>
// // //           {items.map((item) => (
// // //             <SidebarLink key={item.to} to={item.to} icon={<GoDotFill style={{ color: "#C39045" }} />} label={item.label} />
// // //           ))}
// // //         </Box>
// // //       )}
// // //     </Box>
// // //   );

// // //   const renderSidebarContent = () => {
// // //     if (role === "Super Admin") {
// // //       return (
// // //         <>
// // //           <SidebarLink to="/" icon={<MdDashboard style={{ marginRight: "10px" }} />} label="Dashboard" />
// // //           <SidebarSubmenu
// // //             menuName="Operator Registration"
// // //             icon={<ImStack style={{ marginRight: "10px", color: "white" }} />}
// // //             label="Operator Registration"
// // //             items={[
// // //               { to: "/alluserlist", label: "All User List" },
// // //               { to: "/purchaserlist", label: "Purchaser List" },
// // //               { to: "/referrerlist", label: "Referrer List" },
// // //               { to: "/finanicalconsultantlist", label: "Financial Consultant List" },
// // //             ]}
// // //           />
// // //           <SidebarSubmenu
// // //             menuName="schememanagement"
// // //             icon={<PiUsersThreeFill style={{ marginRight: "10px", color: "white" }} />}
// // //             label="Scheme Management"
// // //             items={[
// // //               { to: "/admin/allorders", label: "Gold Stake Schemes" },
// // //               { to: "/admin/neworders", label: "Referrals Scheme" },
// // //             ]}
// // //           />

// // //           <SidebarSubmenu
// // //             menuName="ContentManagement"
// // //             icon={<PiUsersThreeFill style={{ marginRight: "10px", color: "white" }} />}
// // //             label="Content Management"
// // //             items={[
// // //               { to: "/ContentManagement-home", label: "Home" },
// // //               { to: "/ContentManagement-stakenow", label: "Stake Now" },
// // //               { to: "/ContentManagement-referrals", label: "Referrals" },
// // //               { to: "/ContentManagement-aboutus", label: "About Us" },
// // //               { to: "/ContentManagement-blogs", label: "Blogs" },
// // //               { to: "/ContentManagement-contactus", label: "Contact Us" },
// // //             ]}
// // //           />

// // // <SidebarSubmenu
// // //   menuName="Masters"
// // //   icon={<PiUsersThreeFill style={{ marginRight: "10px", color: "white" }} />}
// // //   label="Masters"
// // //   items={[
// // //     { to: "/user-role", label: "User Roles" },
// // //     { to: "/user-list", label: "User List" },
// // //   ]}
// // //           />
// // //           {/* Add more Super Admin-specific menus here */}
// // //         </>
// // //       );
// // //     } else if (role === "Management") {
// // //       return (
// // //         <>
// // //           <SidebarLink to="/" icon={<MdDashboard style={{ marginRight: "10px" }} />} label="Dashboard" />
// // //           <SidebarLink to="/content-approval" icon={<ImStack style={{ marginRight: "10px", color: "white" }} />} label="Content Approval" />
// // //           <SidebarLink to="/Registration-Approval" icon={<ImStack style={{ marginRight: "10px", color: "white" }} />} label="Registration Approval" />
// // //           <SidebarSubmenu
// // //             menuName="Scheme Approval"
// // //             icon={<PiUsersThreeFill style={{ marginRight: "10px", color: "white" }} />}
// // //             label="Scheme Approval"
// // //             items={[
// // //               { to: "/gold-schemes", label: "Gold Stake Schemes" },
// // //               { to: "/referral-schemes", label: "Referrals Schemes" },
// // //             ]}
// // //           />
// // //         </>
// // //       );
// // //     }
// // //     return null;
// // //   };

// // //   return (
// // //     <Drawer
// // //       anchor="left"
// // //       open={open}
// // //       onClose={onClose}
// // //       variant={isMobile ? 'temporary' : 'permanent'}
// // //       sx={{
// // //         width: 280,
// // //         '& .MuiDrawer-paper': {
// // //           width: 280,
// // //           boxSizing: 'border-box',
// // //           background: "black",
// // //         },
// // //       }}
// // //     >
// // //       <NavLink to="/" style={{ textDecoration: 'none' }}>
// // //         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "20px" }}>
// // //           <img src={goldstake_logo} alt="logo" style={{ height: '40px', width: '150px' }} />
// // //         </Box>
// // //       </NavLink>

// // //       <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, px: 1 }}>
// // //         {renderSidebarContent()}
// // //       </Box>

// // //       <Box
// // //         sx={{
// // //           display: 'flex',
// // //           alignItems: 'center',
// // //           p: 2,
// // //           color: "white",
// // //           cursor: 'pointer',
// // //           '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
// // //         }}
// // //         onClick={handleLogout}
// // //       >
// // //         <RxExit style={{ marginRight: "10px" }} />
// // //         Logout
// // //       </Box>
// // //     </Drawer>
// // //   );
// // // };

// // // export default Sidebar;

// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Drawer,
//   useMediaQuery,
//   IconButton,
//   Typography,
// } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import { PiUsersThreeFill } from "react-icons/pi";
// import { RxExit } from "react-icons/rx";
// import logo from "../../Assets/Logo.png";
// import { MdDashboard } from "react-icons/md";
// import { ImStack } from "react-icons/im";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import { GoDotFill } from "react-icons/go";
// import { useDispatch, useSelector } from "react-redux";
// import { logout, logoutUser } from "../../ReduxStore/Slices/authSlice";
// // import { logout } from '../../ReduxStore/Slices/authSlice';
// import { MdOutlineDashboard } from "react-icons/md";
// import "./Sidebar.css";
// import { FaUserCog } from "react-icons/fa";
// import { LuUserRoundCog } from "react-icons/lu";
// import { RiListSettingsLine } from "react-icons/ri";
// import { RiFileSettingsLine } from "react-icons/ri";
// import { RiVipCrown2Line } from "react-icons/ri";
// import { TbShoppingBagCheck } from "react-icons/tb";

// const Sidebar = ({ open, onClose }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [expandedMenu, setExpandedMenu] = useState(null);

//   const toggleMenu = (menuName) => {
//     setExpandedMenu((prevState) => (prevState === menuName ? null : menuName));
//   };

//   // const { role, permissions } = useSelector((state) => state.auth); /// Get role and permissions from Redux state
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login"); // Redirect to login after logout
//   };
//   // const { permissions } = useSelector((state) => state.auth);
//   // const permissions = JSON.parse(localStorage.getItem("permissions")) || {};
//   const permissions = JSON.parse(sessionStorage.getItem("permissions"));
//   const role = sessionStorage.getItem("role");

//   console.log(role, "role")

//   console.log(permissions?.OperatorRegistration?.["All User List"]?.view, "jskjjjrkejrk")
//   const SidebarLink = ({ to, icon, label }) => (
//     <NavLink
//       to={to}
//       style={({ isActive }) => ({
//         display: "flex",
//         alignItems: "center",
//         padding: "10px",
//         marginBottom: "10px",
//         textDecoration: "none",
//         color: isActive ? "#6B3C58" : "white",
//         backgroundColor: isActive ? "white" : "transparent",
//         borderRadius: "4px",
//       })}
//     >
//       <Box sx={{ display: "flex", alignItems: "center" }}>
//         {icon}
//         <Typography variant="CustomSideBarText">{label}</Typography>
//       </Box>
//     </NavLink>
//   );

//   const SidebarSubmenu = ({ menuName, items, icon, label }) => (
//     <Box>
//       <Box
//         onClick={() => toggleMenu(menuName)}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           padding: "10px",
//           marginBottom: "10px",

//           cursor: "pointer",
//           color: expandedMenu === menuName ? "#6B3C58" : "white",
//           // color: "white",
//           "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
//         }}
//       >
//         {icon}
//         {/* {label} */}
//         <Typography variant="CustomSideBarText">{label}</Typography>

//         <IconButton size="small" sx={{ marginLeft: "auto", color: "white" }}>
//           {expandedMenu === menuName ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//         </IconButton>
//       </Box>
//       {expandedMenu === menuName && (
//         <Box sx={{ paddingLeft: 3 }}>
//           {items.map(
//             (item) =>
//               item.permission && (
//                 <SidebarLink
//                   key={item.to}
//                   to={item.to}
//                   icon={
//                     <GoDotFill style={{ color: "#6B3C58", fontSize: "20px" }} />
//                   }
//                   label={item.label}
//                 />
//               )
//           )}
//         </Box>
//       )}
//     </Box>
//   );

//   const renderSidebarContent = () => (
//     <>
//       {/* {permissions?.Dashboard?.Dashboard?.view && (
//         <SidebarLink
//           to="/"
//           icon={<MdOutlineDashboard className="sidebar-icon" />}
//           label="Dashboard"
//         />
//       )} */}
//       {/* {permissions?.OperatorRegistration?.["All User List"].view ||
//       permissions?.OperatorRegistration?.["Purchaser List"].view ||
//       permissions?.OperatorRegistration?.["Referrer List"].view ||
//       permissions?.OperatorRegistration?.["Financial Consultant List"].view && (
//         <SidebarLink
//           to="/Registration-Approval"
//           icon={<MdOutlineDashboard className="sidebar-icon" />}
//           label="Registration Approval"
//         />
//       )} */}
//       {/* {(permissions?.OperatorRegistration?.["All User List"]?.view ||
//         permissions?.OperatorRegistration?.["Purchaser List"]?.view ||
//         permissions?.OperatorRegistration?.["Referrer List"]?.view ||
//         permissions?.OperatorRegistration?.["Financial Consultant List"]?.view) && (
//           <SidebarSubmenu
//             menuName="Operator Registration"
//             icon={<LuUserRoundCog className="sidebar-icon" />}
//             label="Operator Registration"
//             items={[
//               {
//                 to: "/alluserlist",
//                 label: "All User List",
//                 permission: permissions?.OperatorRegistration?.["All User List"]?.view,
//               },
//               {
//                 to: "/purchaserlist",
//                 label: "Purchaser List",
//                 permission: permissions?.OperatorRegistration?.["Purchaser List"]?.view,
//               },
//               {
//                 to: "/referrerlist",
//                 label: "Referrer List",
//                 permission: permissions?.OperatorRegistration?.["Referrer List"]?.view,
//               },
//               {
//                 to: "/finanicalconsultantlist",
//                 label: "Financial Consultant List",
//                 permission: permissions?.OperatorRegistration?.["Financial Consultant List"]?.view,
//               },
//             ]}
//           />
//         )} */}
//       {/* {(permissions?.SchemeManagement?.["Gold Stake Schemes"]?.view ||
//         permissions?.SchemeManagement?.["Referral Schemes"]?.view

//       ) && (
//           <SidebarSubmenu
//             menuName="Scheme Management"
//             icon={<RiListSettingsLine className="sidebar-icon" />}
//             label="Scheme Management"
//             items={[
//               {
//                 to: "/scheme-management",
//                 label: "Gold Stake Schemes",
//                 permission: permissions?.SchemeManagement?.["Gold Stake Schemes"]?.view,
//               },
//               {
//                 to: "/referrals-schemes",
//                 label: "Referrals Scheme",
//                 permission: permissions?.SchemeManagement?.["Referral Schemes"]?.view,
//               },
//             ]}
//           />
//         )} */}
//       {(
//         permissions?.ContentManagement?.Home?.view ||
//         permissions?.ContentManagement?.["Stake Now"]?.view ||
//         permissions?.ContentManagement?.Referrals?.view ||

//         permissions?.ContentManagement?.["About Us"]?.view ||
//         permissions?.ContentManagement?.Blog?.view ||
//         permissions?.ContentManagement?.["Contact Us"]?.view

//       ) && (
//           <SidebarSubmenu
//             menuName="ContentManagement"
//             icon={<RiFileSettingsLine className="sidebar-icon" />}
//             label="Content Management"
//             items={[
//               {
//                 to: "/",
//                 label: "Home page",
//                 // permission: permissions?.ContentManagement?.Home?.view,
//               },
//               {
//                 to: "/contentmanagement-aboutus",
//                 label: "About Us",
//                 permission: permissions?.ContentManagement?.["About Us"]?.view,
//               },

//               {
//                 to: "/contentmanagement-academicsanddepartments",
//                 label: "Academics & Departments",
//                 permission: permissions?.ContentManagement?.["About Us"]?.view,
//               },
//               // {
//               //   to: "/contentmanagement-aboutus",
//               //   label: "About Us",
//               //   permission: permissions?.ContentManagement?.["Stake Now"]?.view,
//               // },
//               // {
//               //   to: "/contentmanagement-referrals",
//               //   label: "Referrals",
//               //   permission: permissions?.ContentManagement?.Referrals?.view,
//               // },
//               // {
//               //   to: "/contentmanagement-blogs",
//               //   label: "Blogs",
//               //   permission: permissions?.ContentManagement?.Blog?.view,
//               // },
//               // {
//               //   to: "/contentmanagement-contactus",
//               //   label: "Contact Us",
//               //   permission: permissions?.ContentManagement?.["Contact Us"]?.view,
//               // },
//             ]}
//           />
//         )}
//       {/* {role === "superAdmin" && (
//         <SidebarSubmenu
//           menuName="Masters"
//           icon={<RiVipCrown2Line className="sidebar-icon" />}
//           label="Master"
//           items={[
//             {
//               to: "/user-role",
//               label: "User Roles",
//               permission: "master_user_list",
//             },
//             {
//               to: "/user-list",
//               label: "User List",
//               permission: "master_user_role",
//             },
//             {
//               to: "/add-country",
//               label: "Add Country",
//               permission: "master_user_role",
//             },
//           ]}
//         />
//       )} */}

//       {/* {role === "operator" && (

//         <SidebarLink
//           to="/user-registration"
//           icon={<LuUserRoundCog className="sidebar-icon" />}
//           label="User Registration"
//           permission="operator_user_registration"
//         />
//       )} */}

//       {/* {role === "management" && (

//         <SidebarLink
//           to="/registration-approval"
//           icon={<LuUserRoundCog className="sidebar-icon" />}
//           label="Registration Approval"
//           permission="operator_user_registration"
//         />
//       )} */}

//       {/* {permissions.includes("goldstakescheme_approval" || "referralsheme_approval") && ( */}
//       {/* {role === "management" && (

//         <SidebarSubmenu
//           menuName="SchemeApproval"
//           icon={<RiVipCrown2Line className="sidebar-icon" />}
//           label="Scheme Approval"
//           items={[
//             {
//               to: "/goldstakescheme-approval",
//               label: "Gold Stack Schemes",
//               permission: "goldstakescheme_approval",
//             },
//             {
//               to: "/referralscheme-approval",
//               label: "Referrals Scheme",
//               permission: "referralsheme_approval",
//             },
//           ]}
//         />
//       )} */}
//       {/* {permissions.includes("purchase_approval") && ( */}
//       {/* {role === "management" && (

//         <SidebarLink
//           to="/purchase-approval"
//           icon={<TbShoppingBagCheck className="sidebar-icon" />}
//           label="Purchase Approval"
//           permission="purchase_approval"
//         />
//       )} */}

//       {/* Add more menus as needed with permission checks */}
//     </>
//   );

//   return (
//     <Drawer
//       anchor="left"
//       open={open}
//       onClose={onClose}
//       variant={isMobile ? "temporary" : "permanent"}
//       sx={{
//         width: 260,

//         "& .MuiDrawer-paper": {
//           position: { xs: "fixed", md: "static" }, // Fixed for small screens, static for larger screens

//           width: 260,
//           boxSizing: "border-box",
//           background: "black",
//           borderRadius: "10px",
//         },
//       }}
//     >
//       <NavLink to="/" style={{ textDecoration: "none" }}>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "20px",
//           }}
//         >
//           <img
//             src={logo}
//             alt="logo"
//             style={{ width:"100%", backgroundColor:"white",objectFit:"fill" }}
//           />
//         </Box>
//       </NavLink>

//       <Box
//         sx={{ display: "flex", flexDirection: "column", flexGrow: 1, px: 1 }}
//       >
//         {renderSidebarContent()}
//       </Box>

//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           p: 2,
//           color: "white",
//           cursor: "pointer",
//           fontSize: "16px",
//           "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
//         }}
//         onClick={handleLogout}
//       >
//         <RxExit style={{ marginRight: "10px" }} />
//         Logout
//       </Box>
//     </Drawer>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  useMediaQuery,
  IconButton,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PiUsersThreeFill } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import logo from "../../Assets/Logo.png";
import { MdDashboard } from "react-icons/md";
import { ImStack } from "react-icons/im";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { GoDotFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { logout, logoutUser } from "../../ReduxStore/Slices/authSlice";
// import { logout } from '../../ReduxStore/Slices/authSlice';
import { MdOutlineDashboard } from "react-icons/md";
import "./Sidebar.css";
import { FaUserCog } from "react-icons/fa";
import { LuUserRoundCog } from "react-icons/lu";
import { RiListSettingsLine } from "react-icons/ri";
import { RiFileSettingsLine } from "react-icons/ri";
import { RiVipCrown2Line } from "react-icons/ri";
import { TbShoppingBagCheck } from "react-icons/tb";
const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [expandedMenu, setExpandedMenu] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = (menuName) => {
    setExpandedMenu((prev) => (prev === menuName ? null : menuName));
  };

  const SidebarLink = ({ to, icon, label }) => (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        display: "flex",
        alignItems: "center",
        padding: "10px 5px",
        marginBottom: "10px",
        textDecoration: "none",
        color: isActive ? "#6B3C58" : "white",
        backgroundColor: isActive ? "white" : "transparent",
        borderRadius: "4px",
      })}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {icon}
        <Typography variant="CustomSideBarText">{label}</Typography>
      </Box>
    </NavLink>
  );

  const SidebarSubmenu = ({ menuName, items, icon, label }) => (
    <Box>
      <Box
        onClick={() => toggleMenu(menuName)}
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "5px",
          mb: 1,
          cursor: "pointer",
          color: expandedMenu === menuName ? "white" : "white",
        }}
      >
        {icon}
        <Typography variant="CustomSideBarText">{label}</Typography>

        <IconButton size="small" sx={{ color: "white" }}>
          {expandedMenu === menuName ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>

      {expandedMenu === menuName && (
        <Box sx={{ paddingLeft: 3 }}>
          {items.map((item) => (
            <SidebarLink
              key={item.to}
              to={item.to}
              icon={<GoDotFill style={{ color: "#6B3C58", fontSize: 20 }} />}
              label={item.label}
            />
          ))}
        </Box>
      )}
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant={isMobile ? "temporary" : "permanent"}
      sx={{
        width: 280,
        "& .MuiDrawer-paper": {
          width: 280,
          background: "black",
          borderRadius: "10px",
          // margin:1.5

          position: { xs: "fixed", md: "static" }, // Fixed for small screens, static for larger screens
        },
      }}
    >
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "100%", background: "white" }}
          />
        </Box>
      </NavLink>

      <Box sx={{ px: 1 }}>
        <SidebarLink
          to="/"
          icon={<RiFileSettingsLine className="sidebar-icon" />}
          label="Home Page"
        />
        <SidebarLink
          to="/aboutus"
          icon={<RiFileSettingsLine className="sidebar-icon" />}
          label="About Us"
        />

        <SidebarSubmenu
          menuName="ContentManagement"
          icon={<RiFileSettingsLine className="sidebar-icon" />}
          label="Academics & Departments"
          items={[
            { to: "/academicspage", label: "Academics Page" },
            {
              to: "/departmentsandprograms",
              label: "Departments & Programs",
            },
          ]}
        />
        <SidebarLink
          to="/iqac"
          icon={<RiFileSettingsLine className="sidebar-icon" />}
          label="IQAC"
        />

        <SidebarLink
          to="/research"
          icon={<RiFileSettingsLine className="sidebar-icon" />}
          label="Research"
        />

        <SidebarLink
          to="/campuslife"
          icon={<RiFileSettingsLine className="sidebar-icon" />}
          label="Campus Life"
        />

        <SidebarLink
          to="/examschedule"
          icon={<RiFileSettingsLine className="sidebar-icon" />}
          label="Exam Schedule"
        />

        <SidebarLink
          to="/admissions"
          icon={<RiFileSettingsLine className="sidebar-icon" />}
          label="Admissions"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          p: 2,
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
      >
        <RxExit style={{ marginRight: 10 }} />
        Logout
      </Box>
    </Drawer>
  );
};

export default Sidebar;
