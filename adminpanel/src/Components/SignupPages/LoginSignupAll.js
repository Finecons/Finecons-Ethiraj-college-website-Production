
// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   TextField,
//   Box,
//   Typography,
//   Grid,
//   Avatar,
// } from "@mui/material";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import CustomInputLogin from "../CustomInputLogin/CustomInputLogin";
// import BioCNG from "../../Assets/BioCNG-1.jpeg";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// // import actions from "../../ReduxStore/actions/index";
// // import { setInitialStateOfStudentLoginPost } from '../../ReduxStore/Slices/SignUpLoginAll/StudentLoginPost'
// // import { setInitialStateOfAdminLoginPost } from '../../ReduxStore/Slices/SignUpLoginAll/AdminLoginPost';
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";
// // import { setInitialStateOfAdminSignUpPost } from '../../ReduxStore/Slices/SignUpLoginAll/AdminSignUpPost';
// // import { setInitialStateOfStudentSignUpPost } from '../../ReduxStore/Slices/SignUpLoginAll/StudentSignUpPost';
// import "./LoginSignupAll.css";
// import actions from "../../ReduxStore/actions";
// import { adminUrl as baseUrl } from "../../constants";

// import { useTheme, useMediaQuery } from "@mui/material";
// import OtpsSendModal from "./OtpsSendModal";
// import gorex_logo from "../../Assets/GoRex_logo.png";
// import { setInitialStateOfCustomerSignupPost } from "../../ReduxStore/Slices/LoginSignup/CustomerSignupPost";
// import { TbCameraPlus } from "react-icons/tb";
// import OperatorOtpSendModal from "./OperatorOtpSendModal";
// import { setInitialStateOfCustomerLoginPost } from "../../ReduxStore/Slices/LoginSignup/CustomerLoginPost";
// import { setInitialStateOfCheckAdminLogin } from "../../ReduxStore/Slices/LoginSignup/Adminlogin/CheckAdminLogin";
// import { setInitialStateOfCheckManagerLogin } from "../../ReduxStore/Slices/LoginSignup/ManagerLogin/CheckManagerLogin";
// import CustomerOtpFrgtPassdModel from "./CustomerOtpFrgtPassdModel";
// import OperatorOtpFrgtPassdModel from "./OperatorOtpFrgtPassdModel";

// function LoginSignupAll() {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [isManagement, setIsManagement] = useState(false);

//   const [isOperator, setIsOperator] = useState(false);
//   const [isCustomer, setIsCustomer] = useState(true);
//   const [forgotPassword, setForgotPassword] = useState(false);

//   const [isLogin, setIsLogin] = useState(true);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleAdminClick = () => {
//     setIsAdmin(true);
//     setIsOperator(false);
//     setIsManagement(false);
//     setIsCustomer(false);
//     setIsLogin(true);
//   };

//   const handleManagementClick = () => {
//     setIsAdmin(false);
//     setIsOperator(false);
//     setIsManagement(true);
//     setIsCustomer(false);
//     setIsLogin(true);
//   };

//   const hadlecustomerClick = () => {
//     setIsAdmin(false);
//     setIsOperator(false);
//     setIsManagement(false);
//     setIsCustomer(true);
//     setIsLogin(true);
//     setForgotPassword(false);
//   };

//   const handleOperatorClick = () => {
//     setIsAdmin(false);
//     setIsOperator(true);
//     setIsManagement(false);
//     setIsCustomer(false);
//     setIsLogin(true);
//     setForgotPassword(false);
//   };

//   const handleToggleForm = () => {
//     setIsLogin(!isLogin); // Toggle between Login and Signup form
//   };

//   const handleForgotPassword = () => {
//     setForgotPassword(!forgotPassword);
//     console.log("hiiiiiiiiiiii");
//   };

//   console.log(forgotPassword, "forgotPassword");
//   // Handle button clicks to navigate to admin or user page
//   const goToAdminPage = () => navigate("/admin");
//   const goToUserPage = () => navigate("/user");
//   const theme = useTheme();
//   // const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
//   const isLargeScreen = useMediaQuery("(min-width:960px)"); // True for screens >= 960px (Medium and up)
//   const isMediumScreen = useMediaQuery("(min-width:600px)"); // True for screens >= 600px (Small and up)

//   return (
//     <div
//       className="App-login-signup"
//       style={
//         {
//           // display: 'flex', minHeight: '100vh',
//           //  backgroundImage: isMediumScreen ? url(${BioCNG}) : ""
//         }
//       }
//     >
//       {/* Background Image Section */}

//       {/* {isLargeScreen && ( */}
//       <div
//         className="App-login-signup-left-box"
//         style={
//           {
//             // backgroundImage: url(${BioCNG}),
//             // backgroundSize: 'cover',
//             // backgroundPosition: 'center',
//             // width: '50%', // Take half of the screen width on large screens
//           }
//         }
//       >
//         <div className="left-box-login-signup-heading">
//           {/* <h1>GO REX</h1> */}
//           <img src={gorex_logo} alt="GO-REX LOGO" />
//         </div>

//         <img src={BioCNG} alt="go rex bg" />
//         {/* <Typography>GoRex</Typography> */}
//       </div>
//       {/* )} */}

//       {/* Form Section */}
//       <div
//         className="App-login-signup-right-box"
//         style={
//           {
//             // width: isLargeScreen ? '50%' : "100%",
//             // display: 'flex',
//             // justifyContent: 'center',
//             // alignItems: 'center',
//             // background: "var(--singup-bgcolor)",
//           }
//         }
//       >
//         <Box
//           className="App-login-signup-right-box-main-box"
//           sx={
//             {
//               // width: '80%',
//               // backgroundColor: "red",
//               // marginTop: "30px",
//               // marginBottom: "30px",
//               // backgroundColor: "var(--cancel-bgcolor)",
//               // padding: 4,
//               // borderRadius: 2,
//               // boxShadow: 3,
//               // border: '1px solid #ccc',
//               // minHeight: "60vh",
//               // display: "flex",
//               // alignItems: "center",
//               // justifyContent: "center"
//             }
//           }
//         >
//           <Grid>
//             {/* Form Rendering */}

//             <Grid>
//               <div className="phone-log">
//                 <img src={gorex_logo} alt="GO-REX LOGO" />
//               </div>
//               {isOperator ? (
//                 forgotPassword ? (
//                   <OperatorForgotPassword
//                     onToggleForm={handleToggleForm}
//                     setIsLogin={setIsLogin}
//                     setForgotPassword={setForgotPassword}
//                     user={"Operator"}
//                   />
//                 ) : isLogin ? (
//                   <OperatorLogin
//                     onToggleForm={handleToggleForm}
//                     handleForgotPassword={handleForgotPassword}
//                   />
//                 ) : (
//                   <OperatorSignup onToggleForm={handleToggleForm} />
//                 )
//               ) : isAdmin ? (
//                 isLogin ? (
//                   <AdminLogin onToggleForm={handleToggleForm} />
//                 ) : (
//                   <AdminSignup onToggleForm={handleToggleForm} />
//                 )
//               ) : isManagement ? (
//                 isLogin ? (
//                   <ManagementLogin onToggleForm={handleToggleForm} />
//                 ) : (
//                   <ManagementSignup onToggleForm={handleToggleForm} />
//                 )
//               ) : isCustomer ? (
//                 forgotPassword ? (
//                   <CustomerForgotPassword
//                     onToggleForm={handleToggleForm}
//                     setIsLogin={setIsLogin}
//                     setForgotPassword={setForgotPassword}
//                     user={"Customer"}
//                   />
//                 ) : isLogin ? (
//                   <CustomerLogin
//                     onToggleForm={handleToggleForm}
//                     handleForgotPassword={handleForgotPassword}
//                   />
//                 ) : (
//                   <CustomerSignup onToggleForm={handleToggleForm} />
//                 )
//               ) : (
//                 <></>
//               )}
//             </Grid>

//             <Box
//               sx={{
//                 display: "flex",
//                 gap: 1,
//                 justifyContent: "space-between",
//                 width: "95%",
//               }}
//             >
//               <Button
//                 variant={!isAdmin ? "contained" : "outlined"}
//                 style={{
//                   color: "var(--button-color)",
//                   cursor: "pointer",
//                   background: "var(--button-bgcolor)",
//                   fontSize: "10px",
//                   height: "23px",
//                 }}
//                 onClick={handleAdminClick}
//               >
//                 Admin
//               </Button>
//               <Button
//                 variant={isAdmin ? "contained" : "outlined"}
//                 style={{
//                   color: "var(--button-color)",
//                   cursor: "pointer",
//                   background: "var(--button-bgcolor)",
//                   fontSize: "10px",
//                   height: "23px",
//                 }}
//                 onClick={handleManagementClick}
//               >
//                 Management
//               </Button>
//               <Button
//                 variant={isAdmin ? "contained" : "outlined"}
//                 style={{
//                   color: "var(--button-color)",
//                   cursor: "pointer",
//                   background: "var(--button-bgcolor)",
//                   fontSize: "10px",
//                   height: "23px",
//                 }}
//                 onClick={handleOperatorClick}
//               >
//                 Operator
//               </Button>
//               <Button
//                 variant={isAdmin ? "contained" : "outlined"}
//                 style={{
//                   color: "var(--button-color)",
//                   cursor: "pointer",
//                   background: "var(--button-bgcolor)",
//                   fontSize: "10px",
//                   height: "23px",
//                 }}
//                 onClick={hadlecustomerClick}
//               >
//                 Dealer
//               </Button>
//             </Box>
//           </Grid>
//         </Box>
//       </div>
//     </div>
//   );
// }

// const CustomerForgotPassword = ({ setIsLogin, setForgotPassword, user }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [isModalOpen, setModalOpen] = useState(false);
//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleSaveModal = (values) => {
//     console.log("Save button clicked");
//     console.log(values, "values");
//   };
//   const [submittedValues, setSubmittedValues] = useState("");

//   return (
//     <div>
//       <Formik
//         initialValues={{ email: "", newPassword: "" }}
//         validationSchema={Yup.object({
//           email: Yup.string()
//             .email("Invalid email format")
//             .test(
//               "email-type-validation",
//               "Email must match a recognized format (e.g., Gmail, Corporate, Educational, Government, or Temporary)",
//               (value) => {
//                 // Define regex patterns for each email type
//                 const patterns = {
//                   personal:
//                     /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/,
//                   corporate: /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(com|in)$/,
//                   educational:
//                     /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(edu|ac\.in)$/,
//                   government:
//                     /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(gov|gov\.[a-z]{2,3})$/,
//                   disposable:
//                     /^[a-zA-Z0-9._%+-]+@(temp-mail\.org|mailinator\.com)$/,
//                 };

//                 // Check if the email matches any of the patterns
//                 return (
//                   patterns.personal.test(value) ||
//                   patterns.corporate.test(value) ||
//                   patterns.educational.test(value) ||
//                   patterns.government.test(value) ||
//                   patterns.disposable.test(value)
//                 );
//               }
//             )
//             .required("Email is required"),
//           newPassword: Yup.string()
//             .matches(/^\d{4}$/, "Must be a 4-digit pin")
//             .required("Pin required"),
//         })}
//         onSubmit={(values) => {
//           // Handle password reset logic
//           toast.success("OTP send succussfully");

//           const data3 = {
//             data: { email: values.email }, // Pass FormData object here
//             method: "post",
//             apiName: "sendOTP",
//           };

//           dispatch(actions.OTPSENDPOST(data3));
//           setSubmittedValues(values);
//           //   setModalOpen(true);
//           setSubmittedValues(values);
//           setModalOpen(true);
//           console.log("Forgot password form submitted:", values);
//         }}
//       >
//         {({ errors, touched }) => (
//           <Form>
//             <h4>{user} Reset Password</h4>
//             <CustomInputLogin
//               name="email"
//               label="Email"
//               custPlaceholder="Enter your email"
//               inputType="text"
//             />
//             <CustomInputLogin
//               name="newPassword"
//               label="New Password"
//               custPlaceholder="Enter your New Password"
//               inputType="text"
//             />
//             <Button
//               fullWidth
//               variant="contained"
//               className="login_button"
//               sx={{
//                 background: "var(--button-bgcolor)",
//                 color: "var(--button-color)",
//               }}
//               type="submit"
//             >
//               Send Reset Otp
//             </Button>
//             <p
//               style={{ textAlign: "center" }}
//               onClick={() => {
//                 setIsLogin(true);
//                 setForgotPassword(false);
//               }}
//             >
//               Remembered your password? <a href="#login">Login here</a>
//             </p>
//           </Form>
//         )}
//       </Formik>
//       {isModalOpen && (
//         <CustomerOtpFrgtPassdModel
//           open={isModalOpen}
//           onClose={handleCloseModal}
//           onSave={handleSaveModal}
//           submittedValues={submittedValues}
//           setIsLogin={setIsLogin}
//           setForgotPassword={setForgotPassword}
//         //   previewImage={previewImage}
//         //   onToggleForm={onToggleForm}

//         // Pass the selected heading to the modal
//         />
//       )}
//       <ToastContainer
//         position="top-right" // or "top-center", "bottom-left", etc.
//         autoClose={1500} // Auto close duration in ms
//         hideProgressBar={false} // Hide or show progress bar
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </div>
//   );
// };

// const OperatorForgotPassword = ({ setIsLogin, setForgotPassword, user }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [isModalOpen, setModalOpen] = useState(false);
//   const [submittedValues, setSubmittedValues] = useState("");
//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleSaveModal = (values) => {
//     console.log("Save button clicked");
//     console.log(values, "values");
//   };
//   return (
//     <div>
//       <Formik
//         initialValues={{ email: "", newPassword: "" }}
//         validationSchema={Yup.object({
//           email: Yup.string()
//             .email("Invalid email format")
//             .test(
//               "email-type-validation",
//               "Email must match a recognized format (e.g., Gmail, Corporate, Educational, Government, or Temporary)",
//               (value) => {
//                 // Define regex patterns for each email type
//                 const patterns = {
//                   personal:
//                     /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/,
//                   corporate: /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(com|in)$/,
//                   educational:
//                     /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(edu|ac\.in)$/,
//                   government:
//                     /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(gov|gov\.[a-z]{2,3})$/,
//                   disposable:
//                     /^[a-zA-Z0-9._%+-]+@(temp-mail\.org|mailinator\.com)$/,
//                 };

//                 // Check if the email matches any of the patterns
//                 return (
//                   patterns.personal.test(value) ||
//                   patterns.corporate.test(value) ||
//                   patterns.educational.test(value) ||
//                   patterns.government.test(value) ||
//                   patterns.disposable.test(value)
//                 );
//               }
//             )
//             .required("Email is required"),
//           newPassword: Yup.string()
//             .matches(/^\d{4}$/, "Must be a 4-digit pin")
//             .required("Pin required"),
//         })}
//         onSubmit={(values) => {
//           // Handle password reset logic
//           console.log("Forgot password form submitted:", values);
//           // Handle password reset logic
//           toast.success("OTP send succussfully");

//           const data3 = {
//             data: { email: values.email }, // Pass FormData object here
//             method: "post",
//             apiName: "sendOTP",
//           };

//           dispatch(actions.OTPSENDPOST(data3));
//           setSubmittedValues(values);
//           //   setModalOpen(true);
//           setSubmittedValues(values);
//           setModalOpen(true);
//           console.log("Forgot password form submitted:", values);
//         }}
//       >
//         {({ errors, touched }) => (
//           <Form>
//             <h4>{user} Reset Password</h4>
//             <CustomInputLogin
//               name="email"
//               label="Email"
//               custPlaceholder="Enter your email"
//               inputType="text"
//             />
//             <CustomInputLogin
//               name="newPassword"
//               label="New Password"
//               custPlaceholder="Enter your New Password"
//               inputType="text"
//             />
//             {/* <Button fullWidth variant="contained" type="submit">
//               Send Reset Link
//             </Button> */}
//             <Button
//               fullWidth
//               variant="contained"
//               className="login_button"
//               sx={{
//                 background: "var(--button-bgcolor)",
//                 color: "var(--button-color)",
//               }}
//               type="submit"
//             >
//               Send Reset Otp
//             </Button>
//             <p
//               style={{ textAlign: "center" }}
//               onClick={() => {
//                 setIsLogin(true);
//                 setForgotPassword(false);
//               }}
//             >
//               Remembered your password? <a href="#login">Login here</a>
//             </p>
//           </Form>
//         )}
//       </Formik>
//       {isModalOpen && (
//         <OperatorOtpFrgtPassdModel
//           open={isModalOpen}
//           onClose={handleCloseModal}
//           onSave={handleSaveModal}
//           submittedValues={submittedValues}
//           setIsLogin={setIsLogin}
//           setForgotPassword={setForgotPassword}
//         // previewImage={previewImage}
//         // onToggleForm={onToggleForm}

//         // Pass the selected heading to the modal
//         />
//       )}
//       <ToastContainer
//         position="top-right" // or "top-center", "bottom-left", etc.
//         autoClose={1500} // Auto close duration in ms
//         hideProgressBar={false} // Hide or show progress bar
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </div>
//   );
// };

// const AdminLogin = ({ onToggleForm }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const handleAdminLoginSubmit = async (values) => {
//     console.log(values, "values-values");

//     // const { CheckAdminLogin } = useSelector(
//     //     (state) => state?.CheckAdminLogin
//     // );

//     const data4 = {
//       data: {
//         email: values.email,
//         password: values.password,
//       },
//       method: "post",
//       apiName: "login/admin",
//     };

//     // dispatch(actions.CUSTOMERLOGINPOST(data4));
//     const CheckAdminLogin = await dispatch(actions.CHECKADMINLOGIN(data4));

//     // console.log(EmailCheck.payload, "EmailCheck")
//     if (CheckAdminLogin.payload.message === "Admin logged in successfully") {
//       sessionStorage.setItem(
//         "sessionAdminId",
//         CheckAdminLogin.payload?.data.admin_id
//       );
//       sessionStorage.setItem(
//         "sessionAdminName",
//         CheckAdminLogin.payload?.data.name
//       );
//       sessionStorage.setItem(
//         "sessionAdminProfileImage",
//         CheckAdminLogin.payload?.data.profileImage
//       );

//       toast.success("Admin logged in successfully");
//       dispatch(setInitialStateOfCheckAdminLogin());

//       // navigate('/customer')
//       setTimeout(() => navigate("/admin"), 1500);
//     } else {
//       toast.error(CheckAdminLogin.payload.message);
//     }
//   };

//   return (
//     <Formik
//       initialValues={{ email: "", password: "" }} // Updated to use `email`
//       validationSchema={Yup.object({
//         email: Yup.string()
//           // .email('Invalid email format')
//           // .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Must be a valid Gmail address')
//           // .required('Email Required'),
//           .email("Invalid email format")
//           .test(
//             "email-type-validation",
//             "Email must match a recognized format (e.g., Gmail, Corporate, Educational, Government, or Temporary)",
//             (value) => {
//               // Define regex patterns for each email type
//               const patterns = {
//                 personal:
//                   /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/,
//                 corporate: /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(com|in)$/,
//                 educational:
//                   /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(edu|ac\.in)$/,
//                 government:
//                   /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(gov|gov\.[a-z]{2,3})$/,
//                 disposable:
//                   /^[a-zA-Z0-9._%+-]+@(temp-mail\.org|mailinator\.com)$/,
//               };

//               // Check if the email matches any of the patterns
//               return (
//                 patterns.personal.test(value) ||
//                 patterns.corporate.test(value) ||
//                 patterns.educational.test(value) ||
//                 patterns.government.test(value) ||
//                 patterns.disposable.test(value)
//               );
//             }
//           )
//           .required("Email is required"),
//         password: Yup.string()
//           .matches(/^\d{4}$/, "Must be a 4-digit pin")
//           .required("Pin required"),

//         // password: Yup.string().required('Password Required'),
//       })}
//       onSubmit={handleAdminLoginSubmit}
//     >
//       {({ errors, touched, handleChange, setFieldValue }) => (
//         <Form>
//           <Box>
//             <h2
//               style={{
//                 textAlign: "center",
//                 fontSize: "25px",
//                 marginTop: "0",
//                 marginBottom: "30px",
//               }}
//             >
//               ADMIN LOGIN
//             </h2>
//             <CustomInputLogin
//               name="email" // Update name to `email`
//               label="Email"
//               custPlaceholder="Enter email"
//               inputType="text"
//             />
//             <CustomInputLogin
//               name="password"
//               label="Password"
//               custPlaceholder="Enter password"
//               inputType="password"
//             />
//             <Button
//               fullWidth
//               className="login_button"
//               sx={{
//                 background: "var(--button-bgcolor)",
//                 color: "var(--button-color)",
//                 marginBottom: "20px"
//               }}
//               type="submit"
//             >
//               Login
//             </Button>
//             {/* <p style={{ textAlign: "center" }}>
//               Not registered?{" "}
//               <a href="#signup" onClick={onToggleForm}>
//                 Signup here
//               </a>
//             </p> */}
//           </Box>
//           <ToastContainer
//             position="top-right" // or "top-center", "bottom-left", etc.
//             autoClose={1500} // Auto close duration in ms
//             hideProgressBar={false} // Hide or show progress bar
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// // Admin Signup Form
// const AdminSignup = ({ onToggleForm }) => {
//   const dispatch = useDispatch();

//   return (
//     <Formik
//       initialValues={{ staff_name: "", email: "", password: "" }}
//       validationSchema={Yup.object({
//         staff_name: Yup.string().required("Staff name Required"),
//         email: Yup.string()
//           .email("Invalid email format")
//           .matches(
//             /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
//             "Must be a valid Gmail address"
//           )
//           .required("Email Required"),
//         password: Yup.string().required("Password Required"),
//       })}
//     //   onSubmit={AdminSignupSubmit}
//     >
//       {({ errors, touched, handleChange, setFieldValue }) => (
//         <Form>
//           <Box>
//             <h2
//               style={{
//                 textAlign: "center",
//                 fontSize: "25px",
//                 marginTop: "0",
//                 marginBottom: "30px",
//               }}
//             >
//               ADMIN SIGNUP
//             </h2>
//             <CustomInputLogin
//               name="staff_name"
//               label="Staff Name"
//               custPlaceholder="Enter user name"
//               inputType="text"
//             />
//             <CustomInputLogin
//               name="email"
//               label="email"
//               custPlaceholder="Enter email"
//               inputType="email"
//             />
//             <CustomInputLogin
//               name="password"
//               label="Password"
//               custPlaceholder="Enter Password"
//               inputType="password"
//             />
//             <Button
//               fullWidth
//               variant="contained"
//               className="login_button"
//               sx={{
//                 background: "var(--button-bgcolor)",
//                 color: "var(--button-color)",
//               }}
//               type="submit"
//             >
//               Signup
//             </Button>
//             <p style={{ textAlign: "center" }}>
//               Already have an account?{" "}
//               <a href="#login" onClick={onToggleForm}>
//                 Login here
//               </a>
//             </p>
//           </Box>
//           <ToastContainer
//             position="top-right" // or "top-center", "bottom-left", etc.
//             autoClose={1500} // Auto close duration in ms
//             hideProgressBar={false} // Hide or show progress bar
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// const ManagementLogin = ({ onToggleForm }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleManagerLoginSubmit = async (values) => {
//     console.log(values, "values-values");

//     // const { CheckAdminLogin } = useSelector(
//     //     (state) => state?.CheckAdminLogin
//     // );

//     const data4 = {
//       data: {
//         email: values.email,
//         password: values.password,
//       },
//       method: "post",
//       apiName: "login/manager",
//     };

//     // dispatch(actions.CUSTOMERLOGINPOST(data4));
//     const CheckManagerLogin = await dispatch(actions.CHECKMANAGERLOGIN(data4));
//     console.log(CheckManagerLogin, "CheckManagerLogin")
//     // console.log(EmailCheck.payload, "EmailCheck")
//     if (
//       CheckManagerLogin.payload.message === "Manager logged in successfully"
//     ) {
//       sessionStorage.setItem(
//         "sessionManagerId",
//         CheckManagerLogin.payload?.data.manager_id
//       );
//       sessionStorage.setItem(
//         "sessionManagerName",
//         CheckManagerLogin.payload?.data.name
//       );
//       sessionStorage.setItem(
//         "sessionManagerProfileImage",
//         CheckManagerLogin.payload?.data.profileImage
//       );

//       toast.success("Manager logged in successfully");
//       dispatch(setInitialStateOfCheckManagerLogin());

//       // navigate('/customer')
//       setTimeout(() => navigate("/Management"), 1500);
//     } else {
//       toast.error(CheckManagerLogin.payload.message);
//     }
//   };

//   return (
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       validationSchema={Yup.object({
//         email: Yup.string()
//           // .email('Invalid email format')
//           // .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Must be a valid Gmail address')
//           // .required('Email Required'),
//           .email("Invalid email format")
//           .test(
//             "email-type-validation",
//             "Email must match a recognized format (e.g., Gmail, Corporate, Educational, Government, or Temporary)",
//             (value) => {
//               // Define regex patterns for each email type
//               const patterns = {
//                 personal:
//                   /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/,
//                 corporate: /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(com|in)$/,
//                 educational:
//                   /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(edu|ac\.in)$/,
//                 government:
//                   /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(gov|gov\.[a-z]{2,3})$/,
//                 disposable:
//                   /^[a-zA-Z0-9._%+-]+@(temp-mail\.org|mailinator\.com)$/,
//               };

//               // Check if the email matches any of the patterns
//               return (
//                 patterns.personal.test(value) ||
//                 patterns.corporate.test(value) ||
//                 patterns.educational.test(value) ||
//                 patterns.government.test(value) ||
//                 patterns.disposable.test(value)
//               );
//             }
//           )
//           .required("Email is required"),
//         password: Yup.string()
//           .matches(/^\d{4}$/, "Must be a 4-digit pin")
//           .required("Pin required"),

//         // password: Yup.string().required('Password Required'),
//       })}
//       onSubmit={handleManagerLoginSubmit}
//     >
//       {({ errors, touched, handleChange, setFieldValue }) => (
//         <Form>
//           <Box>
//             <h2
//               style={{
//                 textAlign: "center",
//                 fontSize: "25px",
//                 marginTop: "0",
//                 marginBottom: "30px",
//               }}
//             >
//               MANAGEMENT LOGIN
//             </h2>

//             <CustomInputLogin
//               name="email"
//               label="Email"
//               custPlaceholder="Enter email"
//               inputType="text" // Changed to text to accept both email and phone
//             />
//             <CustomInputLogin
//               name="password"
//               label="Password"
//               custPlaceholder="Enter password"
//               inputType="password"
//             />
//             <Button
//               fullWidth
//               variant="contained"
//               className="login_button"
//               sx={{
//                 background: "var(--button-bgcolor)",
//                 color: "var(--button-color)",
//                 marginBottom: "20px"
//               }}
//               type="submit"

//             >
//               Login
//             </Button>
//             {/* <p style={{ textAlign: "center" }}>
//               Not registered?{" "}
//               <a href="#signup" onClick={onToggleForm}>
//                 Signup here
//               </a>
//             </p> */}
//           </Box>
//           <ToastContainer
//             position="top-right" // or "top-center", "bottom-left", etc.
//             autoClose={5000} // Auto close duration in ms
//             hideProgressBar={false} // Hide or show progress bar
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// // User Signup Form
// const ManagementSignup = ({ onToggleForm }) => {
//   const dispatch = useDispatch();

//   return (
//     <Formik
//       initialValues={{
//         email: "",
//         password: "",
//         student_name: "",
//         phone_number: "",
//       }}
//       validationSchema={Yup.object({
//         email: Yup.string()
//           .email("Invalid email format")
//           .matches(
//             /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
//             "Must be a valid Gmail address"
//           )
//           .required("Email Required"),
//         password: Yup.string().required("Password Required"),
//         phone_number: Yup.string()
//           .required("phone number Required")
//           .matches(/^[0-9]{10}$/, "Phone number must be between 10 digits"),
//         student_name: Yup.string().required("student name Required"),
//       })}
//       onSubmit={(values, { resetForm }) => {
//         // handleUserSignUp(values)
//         // console.log('User Signup Values:', values);
//         // resetForm()
//         return <CustomerLogin />;
//       }}
//     >
//       {({ errors, touched, handleChange, setFieldValue }) => (
//         <Form autocomplete="off">
//           <Box>
//             <h2
//               style={{
//                 textAlign: "center",
//                 fontSize: "25px",
//                 marginTop: "0",
//                 marginBottom: "30px",
//               }}
//             >
//               MANAGEMENT SIGNUP
//             </h2>

//             <CustomInputLogin
//               name="student_name"
//               label="Name"
//               custPlaceholder="Enter name"
//               inputType="text"
//             />

//             <CustomInputLogin
//               name="email"
//               label="Email"
//               custPlaceholder="Enter email"
//               inputType="email"
//             />
//             <CustomInputLogin
//               name="phone_number"
//               label="Phone Number"
//               custPlaceholder="Enter phone number"
//               inputType="number"
//             />
//             <CustomInputLogin
//               name="password"
//               label="Password"
//               custPlaceholder="Enter password"
//               inputType="password"
//             />
//             <Button
//               fullWidth
//               variant="contained"
//               className="login_button"
//               sx={{
//                 background: "var(--button-bgcolor)",
//                 color: "var(--button-color)",
//               }}
//               type="submit"
//             >
//               Signup
//             </Button>
//             <p style={{ textAlign: "center" }}>
//               Already have an account?{" "}
//               <a href="#login" onClick={onToggleForm}>
//                 Login here
//               </a>
//             </p>
//           </Box>
//           <ToastContainer
//             position="top-right" // or "top-center", "bottom-left", etc.
//             autoClose={1500} // Auto close duration in ms
//             hideProgressBar={false} // Hide or show progress bar
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// const OperatorLogin = ({ onToggleForm, handleForgotPassword }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { OperatorLoginPost } = useSelector(
//     (state) => state?.OperatorLoginPost
//   );

//   const handleOperatorLoginClick = async (values) => {
//     const data4 = {
//       data: {
//         email: values.email,
//         password: values.password,
//       },
//       method: "post",
//       apiName: "login/operator",
//     };

//     // dispatch(actions.CUSTOMERLOGINPOST(data4));
//     const OperatorLoginCheck = await dispatch(actions.OPERATORLOGINPOST(data4));

//     // console.log(EmailCheck.payload, "EmailCheck")
//     if (
//       OperatorLoginCheck.payload.message ===
//       "Your request has been approved, Login successful."
//     ) {
//       // toast.success(OperatorLoginCheck.payload.message)
//       // navigate('/operator')

//       sessionStorage.setItem(
//         "sessionoOeratorId",
//         OperatorLoginCheck.payload?.data.operator_id
//       );
//       sessionStorage.setItem(
//         "sessioProfileImage",
//         OperatorLoginCheck.payload?.data.profileImage
//       );
//       sessionStorage.setItem(
//         "sessionOperatorName",
//         OperatorLoginCheck.payload?.data.name
//       );

//       const data4 = {
//         data: {},
//         method: "get",
//         apiName: `getOperatorById/${OperatorLoginCheck.payload?.data.operator_id}`,
//       };
//       dispatch(actions.GETOPERATORBYID(data4));

//       // toast.success(")o logged in successfully")
//       toast.success(OperatorLoginCheck.payload.message);

//       dispatch(setInitialStateOfCustomerLoginPost());

//       // navigate('/customer')
//       setTimeout(() => navigate("operator"), 1500);
//     } else {
//       toast.error(OperatorLoginCheck.payload.message);

//       // "Your registration is pending approval. Please wait for admin approval."
//     }
//   };

//   return (
//     <Formik
//       initialValues={{ email: "", password: "" }} // Updated to use `email`
//       // validationSchema={Yup.object({
//       //     email: Yup.string()
//       //         .email('Invalid email format')
//       //         .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Must be a valid Gmail address')
//       //         .required('Email Required'),

//       //     password: Yup.string().required('Password Required'),

//       validationSchema={Yup.object({
//         email: Yup.string()
//           .email("Invalid email format")
//           .test(
//             "email-type-validation",
//             "Email must match a recognized format (e.g., Gmail, Corporate, Educational, Government, or Temporary)",
//             (value) => {
//               // Define regex patterns for each email type
//               const patterns = {
//                 personal:
//                   /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/,
//                 corporate: /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(com|in)$/,
//                 educational:
//                   /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(edu|ac\.in)$/,
//                 government:
//                   /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(gov|gov\.[a-z]{2,3})$/,
//                 disposable:
//                   /^[a-zA-Z0-9._%+-]+@(temp-mail\.org|mailinator\.com)$/,
//               };

//               // Check if the email matches any of the patterns
//               return (
//                 patterns.personal.test(value) ||
//                 patterns.corporate.test(value) ||
//                 patterns.educational.test(value) ||
//                 patterns.government.test(value) ||
//                 patterns.disposable.test(value)
//               );
//             }
//           )
//           .required("Email is required"),

//         password: Yup.string().required("Password is required"),
//       })}
//       onSubmit={(values) => {
//         handleOperatorLoginClick(values);
//       }}
//     >
//       {({ errors, touched, handleChange, setFieldValue }) => (
//         <Form>
//           <Box>
//             <h2
//               style={{
//                 textAlign: "center",
//                 fontSize: "25px",
//                 marginTop: "0",
//                 marginBottom: "30px",
//               }}
//             >
//               OPERATOR LOGIN
//             </h2>
//             <CustomInputLogin
//               name="email" // Update name to `email`
//               label="Email"
//               custPlaceholder="Enter your email"
//               inputType="text"
//             />
//             <CustomInputLogin
//               name="password"
//               label="Password"
//               custPlaceholder="Enter password"
//               inputType="password"
//             />
//             <Button
//               fullWidth
//               variant="contained"
//               className="login_button"
//               sx={{
//                 background: "var(--button-bgcolor)",
//                 color: "var(--button-color)",
//               }}
//               type="submit"
//             >
//               Login
//             </Button>
//             <p style={{ textAlign: "center" }}>
//               Not registered?{" "}
//               <a href="#signup" onClick={onToggleForm}>
//                 Signup here
//               </a>
//             </p>
//             <p style={{ textAlign: "center" }} onClick={handleForgotPassword}>
//               <a
//                 href="#forgotpassword"
//                 style={{ textAlign: "center", color: "white" }}
//               >
//                 Forgot your password?
//               </a>
//             </p>
//           </Box>
//           <ToastContainer
//             position="top-right" // or "top-center", "bottom-left", etc.
//             autoClose={1500} // Auto close duration in ms
//             hideProgressBar={false} // Hide or show progress bar
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// // Admin Signup Form
// const OperatorSignup = ({ onToggleForm }) => {
//   const dispatch = useDispatch();
//   const [previewImage, setPreviewImage] = useState("");

//   const { ImageUploadPost } = useSelector((state) => state?.ImageUploadPost);

//   const handleImageChange = async (e) => {
//     console.log("hiiiiiiii");

//     const file = e.target.files[0];
//     if (file) {
//       console.log("pravin");

//       console.log(file, "1111111111111");
//       const formData = new FormData();

//       // Append the file to the FormData object
//       formData.append("uploadImage", file);
//       console.log(formData, "formData");

//       const data = {
//         data: formData,
//         method: "post",
//         apiName: "uploadImage",
//       };
//       // console.log("Dispatching MOVIESTABLEGETALL action:", data);
//       const imageData = await dispatch(actions.IMAGEUPLOADPOST(data));

//       console.log(imageData.payload.data, "imageDataimageData");
//       setPreviewImage(imageData.payload.data.imageUrl);
//       // setPreviewImage(URL.createObjectURL(file));
//     }
//   };

//   // const handleOperatorSignupClick = (values) => {
//   //     console.log(values, "valuesssssss")
//   //     console.log(previewImage, "valuesssssss12")

//   // }

//   const { OtpSendPost } = useSelector((state) => state?.OtpSendPost);

//   const { OperatorSignupPost } = useSelector(
//     (state) => state?.OperatorSignupPost
//   );

//   const { CheckOperatorExistForRegisterPost } = useSelector(
//     (state) => state?.CheckOperatorExistForRegisterPost
//   );

//   const [isModalOpen, setModalOpen] = useState(false);

//   const [submittedValues, setSubmittedValues] = useState("");
//   const handleOperatorSignupClick = async (values) => {
//     const data4 = {
//       data: {
//         email: values.email,
//         phone: values.mobile_number,
//       },
//       method: "post",
//       apiName: "register/checkOperatorExistForRegister",
//     };

//     // dispatch(actions.CUSTOMERSIGNUPPOST(data4));
//     // dispatch(setInitialStateOfCustomerSignupPost());

//     const EmailCheck = await dispatch(
//       actions.CHECKOPERATOREXISTFORREGISTERPOST(data4)
//     );

//     console.log(EmailCheck.payload, "EmailCheck");
//     if (EmailCheck.payload.message === "Success") {
//       toast.success("OTP send successfully!");

//       const data3 = {
//         data: { email: values.email }, // Pass FormData object here
//         method: "post",
//         apiName: "sendOTP",
//       };

//       dispatch(actions.OTPSENDPOST(data3));
//       setSubmittedValues(values);
//       setModalOpen(true);
//     } else if (
//       EmailCheck.payload.message === "Email already exists." ||
//       EmailCheck.payload.message === "Phone number already exists."
//     ) {
//       toast.error(EmailCheck.payload.message);
//     }
//   };
//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <Formik
//       initialValues={{
//         operator_name: "",

//         email: "",
//         image: "",
//         operator_pin: "",

//         mobile_number: "",
//       }}
//       validationSchema={Yup.object({
//         operator_name: Yup.string().required("Operator name required"),
//         // operator_last_name: Yup.string().required('Customer name required'),

//         email: Yup.string()
//           //     .email('Invalid email format')
//           //     .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Must be a valid Gmail address')
//           //     .required('Email required'),
//           .email("Invalid email format")
//           .test(
//             "email-type-validation",
//             "Email must match a recognized format (e.g., Gmail, Corporate, Educational, Government, or Temporary)",
//             (value) => {
//               // Define regex patterns for each email type
//               const patterns = {
//                 personal:
//                   /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/,
//                 corporate: /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(com|in)$/,
//                 educational:
//                   /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(edu|ac\.in)$/,
//                 government:
//                   /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(gov|gov\.[a-z]{2,3})$/,
//                 disposable:
//                   /^[a-zA-Z0-9._%+-]+@(temp-mail\.org|mailinator\.com)$/,
//               };

//               // Check if the email matches any of the patterns
//               return (
//                 patterns.personal.test(value) ||
//                 patterns.corporate.test(value) ||
//                 patterns.educational.test(value) ||
//                 patterns.government.test(value) ||
//                 patterns.disposable.test(value)
//               );
//             }
//           )
//           .required("Email is required"),
//         operator_pin: Yup.string()
//           .matches(/^\d{4}$/, "Must be a 4-digit pin")
//           .required("Pin required"),
       
//           mobile_number: Yup.string()
//           .matches(/^\d+$/, "Must be a valid number")
//           .length(10, "Must be exactly 10 digits")
//           .required("Mobile number required"),

//       })}
//       onSubmit={(values, { resetForm }) => {
//         console.log(values, "Form values submitted");
//         console.log(previewImage, "Form values submitted");
//         handleOperatorSignupClick(values);
//         // handOpenModal(values)

//         // resetForm()
//       }}
//     //   onSubmit={AdminSignupSubmit}
//     >
//       {({ errors, touched, handleChange, setFieldValue }) => (
//         <Form>
//           <Box>
//             <h2
//               style={{
//                 textAlign: "center",
//                 fontSize: "25px",
//                 marginTop: "0",
//                 marginBottom: "30px",
//               }}
//             >
//               OPERATOR SIGNUP
//             </h2>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 gap: 2,
//               }}
//             >
//               <Box sx={{ position: "relative", display: "inline-block" }}>
//                 <label htmlFor="upload-avatar" style={{ cursor: "pointer" }}>
//                   <Avatar
//                     src={`${baseUrl}${previewImage}`}
//                     alt="Profile Image"
//                     sx={{ width: 80, height: 80 }}
//                   />

//                   <Box
//                     sx={{
//                       position: "absolute",
//                       bottom: 0,
//                       right: 0,
//                       bgcolor: "white",
//                       borderRadius: "50%",
//                       padding: "4px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <TbCameraPlus size={18} color="black" />
//                   </Box>
//                 </label>

//                 <input
//                   id="upload-avatar"
//                   type="file"
//                   hidden
//                   accept="image/*"
//                   onChange={handleImageChange}
//                 />
//               </Box>
//             </Box>
//             {/* <CustomInputLogin
//                             name="operator_first_name"
//                             label="First Name"
//                             custPlaceholder="Enter a name"
//                             inputType="text"
//                         /> */}
//             <CustomInputLogin
//               name="operator_name"
//               label="Operator Name"
//               custPlaceholder="Enter a name"
//               inputType="text"
//             />
//             <CustomInputLogin
//               name="mobile_number"
//               label="Phone Number"
//               custPlaceholder="Enter a Phone number"
//               inputType="number"
//             />
//             <CustomInputLogin
//               name="email"
//               label="Email"
//               custPlaceholder="Enter email"
//               inputType="email"
//             />
//             <CustomInputLogin
//               name="operator_pin"
//               label="set 4-digit pin"
//               custPlaceholder="Enter 4-digit pin"
//               inputType="number"
//             />
//             {/* <CustomInputLogin
//                             name="station"
//                             label="Name of the Station"
//                             custPlaceholder="Enter a station name"
//                             inputType="text"
//                         />
//                         <CustomInputLogin
//                             name="location"
//                             label="Location"
//                             custPlaceholder="Enter a Location"
//                             inputType="text"
//                         /> */}
//             <Button
//               fullWidth
//               variant="contained"
//               className="login_button"
//               sx={{
//                 background: "var(--button-bgcolor)",
//                 color: "var(--button-color)",
//               }}
//               type="submit"
//             >
//               Signup
//             </Button>
//             <p style={{ textAlign: "center" }}>
//               Already have an account?{" "}
//               <a href="#login" onClick={onToggleForm}>
//                 Login here
//               </a>
//             </p>
//           </Box>
//           <OperatorOtpSendModal
//             open={isModalOpen}
//             onClose={handleCloseModal}
//             // onSave={handleSaveModal}
//             submittedValues={submittedValues}
//             previewImage={previewImage}
//             onToggleForm={onToggleForm}
//             // apiName="register/operator"
//             setPreviewImage={setPreviewImage}
//           // Pass the selected heading to the modal
//           />
//           <ToastContainer
//             position="top-right" // or "top-center", "bottom-left", etc.
//             autoClose={1500} // Auto close duration in ms
//             hideProgressBar={false} // Hide or show progress bar
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// const CustomerLogin = ({ onToggleForm, handleForgotPassword }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { CustomerLoginPost } = useSelector(
//     (state) => state?.CustomerLoginPost
//   );

//   const handleCustomerLoginClick = async (values) => {
//     const data4 = {
//       data: {
//         email: values.email,
//         password: values.customer_pin,
//       },
//       method: "post",
//       apiName: "login/customer",
//     };

//     // dispatch(actions.CUSTOMERLOGINPOST(data4));
//     const CustomerLoginCheck = await dispatch(actions.CUSTOMERLOGINPOST(data4));

//     // console.log(EmailCheck.payload, "EmailCheck")
//     if (
//       CustomerLoginCheck.payload.message === "Customer logged in successfully"
//     ) {
//       sessionStorage.setItem(
//         "sessionCustomerId",
//         CustomerLoginCheck.payload?.data.customer_id
//       );
//       sessionStorage.setItem(
//         "sessionCustomerName",
//         CustomerLoginCheck.payload?.data.name
//       );
//       sessionStorage.setItem(
//         "sessionProfileImage",
//         CustomerLoginCheck.payload?.data.profileImage
//       );

//       toast.success("Dealer logged in successfully");
//       dispatch(setInitialStateOfCustomerLoginPost());

//       // navigate('/customer')
//       setTimeout(() => navigate("/Dealer"), 1500);
//     } else {
//       toast.error(CustomerLoginCheck.payload.message);
//     }
//   };

//   // useEffect(() => {
//   //     console.log(CustomerLoginPost, "CustomerLoginPostCustomerLoginPost");
//   //     // console.log(StudentLoginPost?.message,"StudentLoginPost?.message.....")

//   //     if (CustomerLoginPost?.message === "Admin logged in successfully") {
//   //         sessionStorage.setItem('sessionCustomerId', CustomerLoginPost?.data.customer_id);
//   //         sessionStorage.setItem('sessionCustomerName', CustomerLoginPost?.data.name);
//   //         //   console.log(CustomerLoginPost?.data.student.student_name, "StudentLoginPost?.data.student.student_name");

//   //         toast.success(CustomerLoginPost?.message)
//   //         dispatch(setInitialStateOfCustomerLoginPost())
//   //         setTimeout(() => navigate('/customer'), 1500)
//   //     }
//   // }, [CustomerLoginPost, navigate, dispatch]);

//   return (
//     <Formik
//       initialValues={{ email: "", customer_pin: "" }} // Updated to use `email`
//       validationSchema={Yup.object({
//         email: Yup.string()
//           // .email('Invalid email format')
//           // .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Must be a valid Gmail address')
//           // .required('Email Required'),
//           .email("Invalid email format")
//           .test(
//             "email-type-validation",
//             "Email must match a recognized format (e.g., Gmail, Corporate, Educational, Government, or Temporary)",
//             (value) => {
//               // Define regex patterns for each email type
//               const patterns = {
//                 personal:
//                   /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/,
//                 corporate: /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(com|in)$/,
//                 educational:
//                   /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(edu|ac\.in)$/,
//                 government:
//                   /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(gov|gov\.[a-z]{2,3})$/,
//                 disposable:
//                   /^[a-zA-Z0-9._%+-]+@(temp-mail\.org|mailinator\.com)$/,
//               };

//               // Check if the email matches any of the patterns
//               return (
//                 patterns.personal.test(value) ||
//                 patterns.corporate.test(value) ||
//                 patterns.educational.test(value) ||
//                 patterns.government.test(value) ||
//                 patterns.disposable.test(value)
//               );
//             }
//           )
//           .required("Email is required"),
//         customer_pin: Yup.string()
//           .matches(/^\d{4}$/, "Must be a 4-digit pin")
//           .required("Pin required"),

//         // password: Yup.string().required('Password Required'),
//       })}
//       //   onSubmit={AdminLoginSubmit}
//       onSubmit={(values, { resetForm }) => {
//         console.log(values, "Form values submitted");

//         handleCustomerLoginClick(values);
//         // resetForm()
//       }}
//     >
//       {({ errors, touched, handleChange, setFieldValue }) => (
//         <Form>
//           <Box>
//             <h2
//               style={{
//                 textAlign: "center",
//                 fontSize: "25px",
//                 marginTop: "0",
//                 marginBottom: "30px",
//               }}
//             >
//               DEALER LOGIN
//             </h2>
//             <CustomInputLogin
//               name="email" // Update name to `email`
//               label="Email"
//               custPlaceholder="Enter your email"
//               inputType="text"
//             />
//             <CustomInputLogin
//               name="customer_pin"
//               label="Password"
//               custPlaceholder="Enter your pin"
//               inputType="password"
//             />
//             <Button
//               fullWidth
//               variant="contained"
//               className="login_button"
//               sx={{
//                 background: "var(--button-bgcolor)",
//                 color: "var(--button-color)",
//               }}
//               type="submit"
//             >
//               Login
//             </Button>
//             <p style={{ textAlign: "center" }}>
//               Not registered?{" "}
//               <a href="#signup" onClick={onToggleForm}>
//                 Signup here
//               </a>
//             </p>
//             <p style={{ textAlign: "center" }} onClick={handleForgotPassword}>
//               <a
//                 href="#forgotpassword"
//                 style={{ textAlign: "center", color: "white" }}
//                 onClick={onToggleForm}
//               >
//                 Forgot your password?
//               </a>
//             </p>
//           </Box>
//           <ToastContainer
//             position="top-right" // or "top-center", "bottom-left", etc.
//             autoClose={1500} // Auto close duration in ms
//             hideProgressBar={false} // Hide or show progress bar
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// // Admin Signup Form
// const CustomerSignup = ({ onToggleForm }) => {
//   const dispatch = useDispatch();
//   const [previewImage, setPreviewImage] = useState("");
//   const [isModalOpen, setModalOpen] = useState(false);
//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleSaveModal = (values) => {
//     console.log("Save button clicked");
//     console.log(values, "values");
//   };

//   const { ImageUploadPost } = useSelector((state) => state?.ImageUploadPost);
//   console.log(previewImage, "previewImagepreviewImage");
//   const handleImageChange = async (e) => {
//     console.log("hiiiiiiii");

//     const file = e.target.files[0];
//     if (file) {
//       console.log("pravin");

//       console.log(file, "1111111111111");
//       const formData = new FormData();

//       // Append the file to the FormData object
//       formData.append("uploadImage", file);
//       console.log(formData, "formData");

//       const data = {
//         data: formData,
//         method: "post",
//         apiName: "uploadImage",
//       };
//       // console.log("Dispatching MOVIESTABLEGETALL action:", data);
//       const imageData = await dispatch(actions.IMAGEUPLOADPOST(data));

//       console.log(imageData.payload.data, "imageDataimageData");
//       setPreviewImage(imageData.payload.data.imageUrl);
//       // setPreviewImage(URL.createObjectURL(file));
//     }
//   };

//   const { OtpSendPost } = useSelector((state) => state?.OtpSendPost);

//   const { CustomerSignupPost } = useSelector(
//     (state) => state?.CustomerSignupPost
//   );

//   const { CheckCustomerExistForRegisterPost } = useSelector(
//     (state) => state?.CheckCustomerExistForRegisterPost
//   );

//   const [submittedValues, setSubmittedValues] = useState("");
//   const handleCustomerSignupClick = async (values) => {
//     const data4 = {
//       data: {
//         email: values.email,
//         phone: values.mobile_number,
//       },
//       method: "post",
//       apiName: "register/checkCustomerExistForRegister",
//     };

//     // dispatch(actions.CUSTOMERSIGNUPPOST(data4));
//     // dispatch(setInitialStateOfCustomerSignupPost());

//     const EmailCheck = await dispatch(
//       actions.CHECKCUSTIMEREXISTSFORREGISTERPOST(data4)
//     );

//     console.log(EmailCheck.payload, "EmailCheck");
//     if (EmailCheck.payload.message === "Success") {
//       toast.success("OTP send succussfully");

//       const data3 = {
//         data: { email: values.email }, // Pass FormData object here
//         method: "post",
//         apiName: "sendOTP",
//       };

//       dispatch(actions.OTPSENDPOST(data3));
//       setSubmittedValues(values);
//       setModalOpen(true);
//     } else if (
//       EmailCheck.payload.message === "Email already exists." ||
//       EmailCheck.payload.message === "Phone number already exists."
//     ) {
//       toast.error(EmailCheck.payload.message);
//     }
//   };

//   return (
//     <Formik
//       initialValues={{
//         customer_name: "",
//         email: "",
//         image: "",
//         customer_pin: "",
//         // station: "",
//         // location: "",
//         mobile_number: "",
//       }}
//       validationSchema={Yup.object({
//         customer_name: Yup.string().required("Dealer name required"),
//         email: Yup.string()
//           // .email('Invalid email format')
//           // .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Must be a valid Gmail address')
//           // .required('Email required'),

//           .email("Invalid email format")
//           .test(
//             "email-type-validation",
//             "Email must match a recognized format (e.g., Gmail, Corporate, Educational, Government, or Temporary)",
//             (value) => {
//               // Define regex patterns for each email type
//               const patterns = {
//                 personal:
//                   /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/,
//                 corporate: /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(com|in)$/,
//                 educational:
//                   /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(edu|ac\.in)$/,
//                 government:
//                   /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(gov|gov\.[a-z]{2,3})$/,
//                 disposable:
//                   /^[a-zA-Z0-9._%+-]+@(temp-mail\.org|mailinator\.com)$/,
//               };

//               // Check if the email matches any of the patterns
//               return (
//                 patterns.personal.test(value) ||
//                 patterns.corporate.test(value) ||
//                 patterns.educational.test(value) ||
//                 patterns.government.test(value) ||
//                 patterns.disposable.test(value)
//               );
//             }
//           )
//           .required("Email is required"),
//         customer_pin: Yup.string()
//           .matches(/^\d{4}$/, "Must be a 4-digit pin")
//           .required("Pin required"),
//         mobile_number: Yup.string()
//           .matches(/^\d+$/, "Must be a valid number")
//           .length(10, "Must be exactly 10 digits")
//           .required("Mobile number required"),

//         // station: Yup.string().required("Station name required"),
//         // location: Yup.string().required('Location required'),
//       })}
//       onSubmit={(values, { resetForm }) => {
//         console.log(values, "Form values submitted");
//         console.log(previewImage, "Form values submitted");
//         handleCustomerSignupClick(values);
//         // handOpenModal(values)

//         // resetForm()
//         setPreviewImage("");
//       }}
//     >
//       {({ errors, touched, handleChange, setFieldValue }) => (
//         <Form>
//           <Box>
//             <h2
//               style={{
//                 textAlign: "center",
//                 fontSize: "25px",
//                 marginTop: "0",
//                 marginBottom: "30px",
//               }}
//             >
//               DEALER SIGNUP
//             </h2>
//             {/* <Box
//                             sx={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 alignItems: "center",
//                                 gap: 2,
//                             }}
//                         >
//                             <Box sx={{ position: 'relative', display: 'inline-block' }}>
//                                 <Avatar
//                                     src={`${baseUrl}${previewImage}`}
//                                     alt="Profile Image"
//                                     sx={{ width: 70, height: 70 }}
//                                 />

//                                 <Box
//                                     sx={{
//                                         position: 'absolute',
//                                         bottom: 0,
//                                         right: 0,
//                                         bgcolor: 'white',
//                                         borderRadius: '50%',
//                                         padding: '4px',
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                     }}
//                                 >
//                                     <TbCameraPlus size={18} color="black" />
                                    
//                                 </Box>
//                             </Box>
//                             <Button
//                                 variant="contained"
//                                 component="label"
//                                 sx={{ background: "var(--tablehead-bgcolor)" }}
//                             >
                               
//                                 Change Profile Image
//                                 <input
//                                     type="file"
//                                     hidden
//                                     accept="image/*"

//                                     onChange={handleImageChange}
//                                 />
//                             </Button>

//                         </Box> */}
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 gap: 2,
//               }}
//             >
//               <Box sx={{ position: "relative", display: "inline-block" }}>
//                 <label htmlFor="upload-avatar" style={{ cursor: "pointer" }}>
//                   <Avatar
//                     src={`${baseUrl}${previewImage}`}
//                     alt="Profile Image"
//                     sx={{ width: 80, height: 80 }}
//                   />

//                   <Box
//                     sx={{
//                       position: "absolute",
//                       bottom: 0,
//                       right: 0,
//                       bgcolor: "white",
//                       borderRadius: "50%",
//                       padding: "4px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <TbCameraPlus size={18} color="black" />
//                   </Box>
//                 </label>

//                 <input
//                   id="upload-avatar"
//                   type="file"
//                   hidden
//                   accept="image/*"
//                   onChange={handleImageChange}
//                 />
//               </Box>
//             </Box>

//             <CustomInputLogin
//               name="customer_name"
//               label="Dealer Name"
//               custPlaceholder="Enter a name"
//               inputType="text"
//             />
//             <CustomInputLogin
//               name="mobile_number"
//               label="Phone Number"
//               custPlaceholder="Enter a Phone number"
//               inputType="number"
//             />
//             <CustomInputLogin
//               name="email"
//               label="Email"
//               custPlaceholder="Enter email"
//               inputType="email"
//             />
//             <CustomInputLogin
//               name="customer_pin"
//               label="set 4-digit pin"
//               custPlaceholder="Enter 4-digit pin"
//               inputType="number"
//             />
//             {/* <CustomInputLogin
//               name="station"
//               label="Name of the Station"
//               custPlaceholder="Enter a station name"
//               inputType="text"
//             /> */}
//             {/* <CustomInputLogin
//                             name="location"
//                             label="Location"
//                             custPlaceholder="Enter a Location"
//                             inputType="text"
//                         /> */}
//             <Button
//               fullWidth
//               variant="contained"
//               className="login_button"
//               sx={{
//                 background: "var(--button-bgcolor)",
//                 color: "var(--button-color)",
//               }}
//               type="submit"
//             // onClick={handOpenModal}
//             >
//               Signup
//             </Button>
//             <p style={{ textAlign: "center" }}>
//               Already have an account?{" "}
//               <a href="#login" onClick={onToggleForm}>
//                 Login here
//               </a>
//             </p>
//           </Box>
//           <OtpsSendModal
//             open={isModalOpen}
//             onClose={handleCloseModal}
//             onSave={handleSaveModal}
//             submittedValues={submittedValues}
//             previewImage={previewImage}
//             onToggleForm={onToggleForm}

//           // Pass the selected heading to the modal
//           />
//           <ToastContainer
//             position="top-right" // or "top-center", "bottom-left", etc.
//             autoClose={1500} // Auto close duration in ms
//             hideProgressBar={false} // Hide or show progress bar
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default LoginSignupAll;
