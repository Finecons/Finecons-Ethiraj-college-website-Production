// // import React, { useState } from 'react';
// // import { Box, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
// // import { Navigate, Route, Routes } from 'react-router-dom';
// // import { FaUsersGear } from 'react-icons/fa6';

// // import Sidebar from '../SideNav/Sidebar'; // Adjust the path as necessary
// // import Header from '../SideNav/Header'; // Adjust the path as necessary
// // import Dashboard from '../../Pages/Dashboard/Dashboard'; // Adjust the path as necessary
// // import AllUserList from '../../Pages/OperatorRegistration/AllUserList';
// // import ContentManagement from '../../Pages/ContentManagement/Home/ContentManagement';
// // import StakeNowContentManagement from '../../Pages/ContentManagement/StakeNow/StakeNowContentManagement';
// // import PurchaserList from '../../Pages/OperatorRegistration/PurchaserList';
// // import ReferrerList from '../../Pages/OperatorRegistration/ReferrerList';
// // import FinanicalConsultantList from '../../Pages/OperatorRegistration/FinanicalConsultantList';
// // import UserRole from '../../Pages/Masters/UserRole/UserRole';
// // import UserList from '../../Pages/Masters/UserList/UserList';
// // import ProtectedRoute from '../../Pages/PrivateRoute';
// // import RegistrationApproval from '../../Pages/Management/RegistrationApproval/RegistrationApproval';

// // const Layout = () => {
// //   const [isSidebarOpen, setSidebarOpen] = useState(false);
// //   const [headerName, setHeaderName] = useState("")
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
// //   const [profileData, setProfileData] = useState([]); // Assuming profile data will be set later

// //   // Toggles sidebar visibility on menu click
// //   const handleMenuClick = () => {
// //     setSidebarOpen(!isSidebarOpen);
// //   };

// //   // Handles profile click event (add functionality later if needed)
// //   const handleProfileClick = () => {
// //     // Add profile-related logic here
// //   };

// //   return (
// //     <Box sx={{ display: 'flex', minHeight: '100vh' }}>
// //       <CssBaseline />

// //       {/* Sidebar Component */}
// //       <Sidebar
// //         open={isSidebarOpen}
// //         onClose={() => setSidebarOpen(false)}
// //       />

// //       <Box
// //         sx={{
// //           flexGrow: 1,
// //           display: 'flex',
// //           flexDirection: 'column',
// //           justifyContent: 'flex-start',
// //         }}
// //       >
// //         {/* Header Component */}
// //         <Header
// //           edit={false}
// //           onMenuClick={handleMenuClick}
// //           handleProfileClick={handleProfileClick}
// //           isMobile={isMobile}
// //           setSidebarOpen={setSidebarOpen}
// //           isSidebarOpen={isSidebarOpen}
// //           icon={<FaUsersGear />}
// //           headerName={headerName}
// //         />

// //         <Box
// //           component="main"
// //           sx={{
// //             flexGrow: 1,
// //             p: 2.5,
// //             backgroundColor: '#F7F7F7',

// //           }}
// //         >

// //           <Routes>
// //             <Route path="/dashboard" element={<Dashboard />} />

// //             {/* Protected routes */}
// //             <Route
// //               path="/registration-approval"
// //               element={
// //                 <ProtectedRoute permission="view_registration_approval">
// //                   <RegistrationApproval />
// //                 </ProtectedRoute>
// //               }
// //             />
// //             <Route
// //               path="/user-management"
// //               element={
// //                 <ProtectedRoute permission="view_user_management">
// //                   <AllUserList />
// //                 </ProtectedRoute>
// //               }
// //             />
// //             <Route
// //               path="/reports"
// //               element={
// //                 <ProtectedRoute permission="view_reports">
// //                   <UserRole />
// //                 </ProtectedRoute>
// //               }
// //             />
// //             <Route path="*" element={<Navigate to="/dashboard" />} />
// //           </Routes>

// //           {/* Main Content */}
// //           {/* <Routes>
// //             <Route
// //               path="/"
// //               element={<ProtectedRoute element={<Dashboard setHeaderName={setHeaderName} />} />}
// //             />
// //             <Route
// //               path="/alluserlist"
// //               element={<ProtectedRoute element={<AllUserList />} />}
// //             />
// //             <Route
// //               path="/purchaserlist"
// //               element={<ProtectedRoute element={<PurchaserList />} />}
// //             />
// //             <Route
// //               path="/referrerlist"
// //               element={<ProtectedRoute element={<ReferrerList />} />}
// //             />
// //             <Route
// //               path="/finanicalconsultantlist"
// //               element={<ProtectedRoute element={<FinanicalConsultantList />} />}
// //             />
// //             <Route
// //               path="/ContentManagement-home"
// //               element={<ProtectedRoute element={<ContentManagement />} />}
// //             />
// //             <Route
// //               path="/ContentManagement-stakenow"
// //               element={<ProtectedRoute element={<StakeNowContentManagement />} />}
// //             />
// //             <Route
// //               path="/user-role"
// //               element={<ProtectedRoute element={<UserRole />} />}
// //             />
// //             <Route
// //               path="/user-list"
// //               element={<ProtectedRoute element={<UserList />} />}
// //             />
// //              <Route
// //               path="/Registration-Approval"
// //               element={<ProtectedRoute element={<RegistrationApproval />} />}
// //             />

// //         </Routes> */}
// //         </Box>

// //         {/* Footer Component (Optional) */}
// //         {/* <FooterPage /> */}
// //       </Box>
// //     </Box >
// //   );
// // };

// // export default Layout;

// import React, { useState } from 'react';
// import { Box, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { FaUsersGear } from 'react-icons/fa6';

// import Sidebar from '../SideNav/Sidebar'; // Adjust the path as necessary
// import Header from '../SideNav/Header'; // Adjust the path as necessary
// import Dashboard from '../../Pages/Dashboard/Dashboard'; // Adjust the path as necessary
// import AllUserList from '../../Pages/OperatorRegistration/AllUserList';
// import ContentManagement from '../../Pages/ContentManagement/Home/ContentManagement';
// import StakeNowContentManagement from '../../Pages/ContentManagement/StakeNow/StakeNowContentManagement';
// import PurchaserList from '../../Pages/OperatorRegistration/PurchaserList';
// import ReferrerList from '../../Pages/OperatorRegistration/ReferrerList';
// import FinanicalConsultantList from '../../Pages/OperatorRegistration/FinanicalConsultantList';
// import UserRole from '../../Pages/Masters/UserRole/UserRole';
// import UserList from '../../Pages/Masters/UserList/UserList';
// import ProtectedRoute from '../../Pages/PrivateRoute';
// import RegistrationApproval from '../../Pages/Management/RegistrationApproval/RegistrationApproval';

// const Layout = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [headerName, setHeaderName] = useState("")
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [profileData, setProfileData] = useState([]); // Assuming profile data will be set later

//   // Toggles sidebar visibility on menu click
//   const handleMenuClick = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   // Handles profile click event (add functionality later if needed)
//   const handleProfileClick = () => {
//     // Add profile-related logic here
//   };

//   return (
//     <Box sx={{ display: 'flex', minHeight: '100vh' }}>
//       <CssBaseline />

//       {/* Sidebar Component */}
//       <Sidebar
//         open={isSidebarOpen}
//         onClose={() => setSidebarOpen(false)}
//       />

//       <Box
//         sx={{
//           flexGrow: 1,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'flex-start',
//         }}
//       >
//         {/* Header Component */}
//         <Header
//           edit={false}
//           onMenuClick={handleMenuClick}
//           handleProfileClick={handleProfileClick}
//           isMobile={isMobile}
//           setSidebarOpen={setSidebarOpen}
//           isSidebarOpen={isSidebarOpen}
//           icon={<FaUsersGear />}
//           headerName={headerName}
//         />

//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             p: 2.5,
//             backgroundColor: '#F7F7F7',

//           }}
//         >

//           <Routes>
//             <Route path="/" element={<Dashboard />} />

//             {/* Protected routes */}
//             <Route
//               path="/registration-approval"
//               element={
//                 <ProtectedRoute permission="view_registration_approval">
//                   <RegistrationApproval />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/alluserlist"
//               element={
//                 <ProtectedRoute permission="view_user_management">
//                   <AllUserList />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/reports"
//               element={
//                 <ProtectedRoute permission="view_reports">
//                   <UserRole />
//                 </ProtectedRoute>
//               }
//             />
//             {/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
//           </Routes>

//           {/* Main Content */}
//           {/* <Routes>
//             <Route
//               path="/"
//               element={<ProtectedRoute element={<Dashboard setHeaderName={setHeaderName} />} />}
//             />
//             <Route
//               path="/alluserlist"
//               element={<ProtectedRoute element={<AllUserList />} />}
//             />
//             <Route
//               path="/purchaserlist"
//               element={<ProtectedRoute element={<PurchaserList />} />}
//             />
//             <Route
//               path="/referrerlist"
//               element={<ProtectedRoute element={<ReferrerList />} />}
//             />
//             <Route
//               path="/finanicalconsultantlist"
//               element={<ProtectedRoute element={<FinanicalConsultantList />} />}
//             />
//             <Route
//               path="/ContentManagement-home"
//               element={<ProtectedRoute element={<ContentManagement />} />}
//             />
//             <Route
//               path="/ContentManagement-stakenow"
//               element={<ProtectedRoute element={<StakeNowContentManagement />} />}
//             />
//             <Route
//               path="/user-role"
//               element={<ProtectedRoute element={<UserRole />} />}
//             />
//             <Route
//               path="/user-list"
//               element={<ProtectedRoute element={<UserList />} />}
//             />
//              <Route
//               path="/Registration-Approval"
//               element={<ProtectedRoute element={<RegistrationApproval />} />}
//             />

//         </Routes> */}
//         </Box>

//         {/* Footer Component (Optional) */}
//         {/* <FooterPage /> */}
//       </Box>
//     </Box >
//   );
// };

// export default Layout;

// import React, { useState } from "react";
// import {
//   Box,
//   CssBaseline,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { Routes, Route } from "react-router-dom";
// import Sidebar from "../SideNav/Sidebar";
// import Header from "../SideNav/Header";
// import ProtectedRoute from "../../Pages/PrivateRoute";

// import AcademicsandDepartments from "../../Pages/ContentManagement/AcademicsandDepartments/AcademicsandDepartments";
// import AboutUsAllComponents from "../../Pages/ContentManagement/AboutUs/AboutUsAllComponents";
// import HomeAllComponents from "../../Pages/ContentManagement/HomePage/HomeAllComponents";
// import AcademicsAllSectionPage from "../../Pages/ContentManagement/AcademicsandDepartments/AcademicsAllSectionPage";
// import IqacAllComponents from "../../Pages/ContentManagement/Iqac/IqacAllComponents";
// // import AboutUsManagementAboutUsContentManagement from "../../Pages/ContentManagement/AboutUs/AboutUsContentManagement";
// // import SchemeApprovalTabs from "../../Pages/Management/SchemeApproval/SchemeApprovalTabs";

// const Layout = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   // const { isLoggedIn, permissions, role } = useSelector((state) => state.auth);
//   const [headerTitleName, setHeaderTitleName] = useState("");
//   const handleMenuClick = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const role = sessionStorage.getItem("role");
//   console.log(role, "roleeeeeeeee");

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         minHeight: "100vh",
//         padding: { md: 1.5 },
//         backgroundColor: "#F7F7F7",
//       }}
//     >
//       <CssBaseline />
//       {/* <Sidebar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} /> */}
//       <Sidebar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
//       <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
//         <Header
//           headerTitleName={headerTitleName}
//           onMenuClick={handleMenuClick}
//           isMobile={isMobile}
//           isSidebarOpen={isSidebarOpen}
//         />
//         <Box
//           component="main"
//           sx={{ flexGrow: 1, p: 2.5, backgroundColor: "#F7F7F7" }}
//         >
//           <Routes>
//             <Route element={<ProtectedRoute />}>
//               <Route path="/" element={<HomeAllComponents />} />
//               <Route path="/aboutus" element={<AboutUsAllComponents />} />
//               <Route
//                 path="/academicspage"
//                 element={<AcademicsAllSectionPage />}
//               />

//               <Route
//                 path="/departmentsandprograms"
//                 element={<AcademicsandDepartments />}
//               />
//               <Route path="/iqac" element={<IqacAllComponents />} />
//             </Route>
//           </Routes>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Layout;

import React, { useState } from "react";
import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Sidebar from "../SideNav/Sidebar";
import Header from "../SideNav/Header";
import ProtectedRoute from "../../Pages/PrivateRoute";

import AcademicsandDepartments from "../../Pages/ContentManagement/AcademicsandDepartments/AcademicsandDepartments";
import AboutUsAllComponents from "../../Pages/ContentManagement/AboutUs/AboutUsAllComponents";
import HomeAllComponents from "../../Pages/ContentManagement/HomePage/HomeAllComponents";
import AcademicsAllSectionPage from "../../Pages/ContentManagement/AcademicsandDepartments/AcademicsAllSectionPage";
import IqacAllComponents from "../../Pages/ContentManagement/Iqac/IqacAllComponents";
import ResearchAllComponents from "../../Pages/ContentManagement/Research/ResearchAllComponents";
import CampuslifeAllComponent from "../../Pages/ContentManagement/CampusLife/CampuslifeAllComponent";
import ExamScheduleAllComponents from "../../Pages/ContentManagement/ExamSchedule/ExamScheduleAllComponents";
import AdmissionsAllComponents from "../../Pages/ContentManagement/Admissions/AdmissionsAllComponents";

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [headerTitleName, setHeaderTitleName] = useState("");

  const handleMenuClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#F7F7F7",
        width: "100%",
        padding: { md: 1.5 }, // ❌ causes overflow clipping

        overflow: "hidden", // prevent body overflow
      }}
    >
      <CssBaseline />

      {/* Sidebar */}
      <Sidebar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Wrapper */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0, // 🔥 REQUIRED for horizontal scroll
        }}
      >
        {/* Header */}
        <Header
          headerTitleName={headerTitleName}
          onMenuClick={handleMenuClick}
          isMobile={isMobile}
          isSidebarOpen={isSidebarOpen}
        />

        {/* Main Page Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 2.5,
            backgroundColor: "#F7F7F7",
            width: "100%",
            overflowX: "auto", // 🔥 TABLE SCROLL FIX
          }}
        >
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomeAllComponents />} />
              <Route path="/aboutus" element={<AboutUsAllComponents />} />
              <Route
                path="/academicspage"
                element={<AcademicsAllSectionPage />}
              />
              <Route
                path="/departmentsandprograms"
                element={<AcademicsandDepartments />}
              />
              <Route path="/iqac" element={<IqacAllComponents />} />
              <Route path="/research" element={<ResearchAllComponents />} />
              <Route path="/campuslife" element={<CampuslifeAllComponent />} />
              <Route path="/examschedule" element={<ExamScheduleAllComponents />} />
              <Route path="/admissions" element={<AdmissionsAllComponents />} />
              

              
            </Route>
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
