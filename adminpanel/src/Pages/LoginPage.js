// // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // import { useDispatch } from 'react-redux';
// // // // // // // // // // // // import { login } from './slices/authSlice';
// // // // // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // // // // import { login } from '../ReduxStore/Slices/authSlice';

// // // // // // // // // // // const LoginPage = () => {
// // // // // // // // // // //     const [username, setUsername] = useState('');
// // // // // // // // // // //     const [password, setPassword] = useState('');
// // // // // // // // // // //     const dispatch = useDispatch();
// // // // // // // // // // //     const navigate = useNavigate();

// // // // // // // // // // //     const handleLogin = () => {
// // // // // // // // // // //         // This is just an example. Replace this with actual authentication logic
// // // // // // // // // // //         const userRole = 'Super Admin'; // This should come from your API response
// // // // // // // // // // //         const token = 'sample_auth_token'; // This should be the token returned from your API

// // // // // // // // // // //         // Dispatch the login action
// // // // // // // // // // //         dispatch(login({ token, role: userRole }));
// // // // // // // // // // //         // console.log(login.role, "data")
// // // // // // // // // // //         // Navigate to the protected route
// // // // // // // // // // //         navigate('/');
// // // // // // // // // // //     };

// // // // // // // // // // //     return (
// // // // // // // // // // //         <div>
// // // // // // // // // // //             <h2>Login</h2>
// // // // // // // // // // //             <input
// // // // // // // // // // //                 type="text"
// // // // // // // // // // //                 value={username}
// // // // // // // // // // //                 onChange={(e) => setUsername(e.target.value)}
// // // // // // // // // // //                 placeholder="Username"
// // // // // // // // // // //             />
// // // // // // // // // // //             <input
// // // // // // // // // // //                 type="password"
// // // // // // // // // // //                 value={password}
// // // // // // // // // // //                 onChange={(e) => setPassword(e.target.value)}
// // // // // // // // // // //                 placeholder="Password"
// // // // // // // // // // //             />
// // // // // // // // // // //             <button onClick={handleLogin}>Login</button>
// // // // // // // // // // //         </div>
// // // // // // // // // // //     );
// // // // // // // // // // // };

// // // // // // // // // // // export default LoginPage;

// // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // import { useDispatch } from 'react-redux';
// // // // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // // // import { login } from '../ReduxStore/Slices/authSlice';

// // // // // // // // // // const LoginPage = () => {
// // // // // // // // // //     const [email, setEmail] = useState('');
// // // // // // // // // //     const [password, setPassword] = useState('');
// // // // // // // // // //     const dispatch = useDispatch();
// // // // // // // // // //     const navigate = useNavigate();

// // // // // // // // // //     const handleLogin = () => {
// // // // // // // // // //         // Sample user data for login simulation
// // // // // // // // // //         const users = [
// // // // // // // // // //             { email: 'superadmin@gmail.com', password: '1234', role: 'Super Admin' },
// // // // // // // // // //             { email: 'management@gmail.com', password: '1234', role: 'Management' },
// // // // // // // // // //         ];

// // // // // // // // // //         const user = users.find((user) => user.email === email && user.password === password);

// // // // // // // // // //         if (user) {
// // // // // // // // // //             const token = 'sample_auth_token'; // This should be replaced with actual token from your API
// // // // // // // // // //             dispatch(login({ token, role: user.role }));
// // // // // // // // // //             navigate('/'); // Redirect to the dashboard or homepage after successful login
// // // // // // // // // //         } else {
// // // // // // // // // //             alert('Invalid email or password');
// // // // // // // // // //         }
// // // // // // // // // //     };

// // // // // // // // // //     return (
// // // // // // // // // //         <div>
// // // // // // // // // //             <h2>Login</h2>
// // // // // // // // // //             <input
// // // // // // // // // //                 type="email"
// // // // // // // // // //                 value={email}
// // // // // // // // // //                 onChange={(e) => setEmail(e.target.value)}
// // // // // // // // // //                 placeholder="Email"
// // // // // // // // // //             />
// // // // // // // // // //             <input
// // // // // // // // // //                 type="password"
// // // // // // // // // //                 value={password}
// // // // // // // // // //                 onChange={(e) => setPassword(e.target.value)}
// // // // // // // // // //                 placeholder="Password"
// // // // // // // // // //             />
// // // // // // // // // //             <button onClick={handleLogin}>Login</button>
// // // // // // // // // //         </div>
// // // // // // // // // //     );
// // // // // // // // // // };

// // // // // // // // // // export default LoginPage;

// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import { useDispatch } from 'react-redux';
// // // // // // // // // // import { loginUser } from '../features/auth/authSlice';
// // // // // // // // // import  {rolePermissions} from '../utils/rolePermissions'; // Import role permissions mapping
// // // // // // // // // import loginUser  from '../ReduxStore/Slices/authSlice';

// // // // // // // // // const Login = () => {
// // // // // // // // //     console.log(rolePermissions,"rolePermissionsrolePermissions")
// // // // // // // // //   const dispatch = useDispatch();
// // // // // // // // //   const [email, setEmail] = useState('');
// // // // // // // // //   const [password, setPassword] = useState('');
// // // // // // // // //   const [error, setError] = useState('');

// // // // // // // // //   // Hardcoded user credentials
// // // // // // // // //   const users = {
// // // // // // // // //     'admin@gmail.com': { password: '1234', role: 'admin' },
// // // // // // // // //     'superadmin@gmail.com': { password: '1234', role: 'super_admin' },
// // // // // // // // //     'management@gmail.com': { password: '1234', role: 'management' },
// // // // // // // // //     'operator@gmail.com': { password: '1234', role: 'operator' },
// // // // // // // // //   };

// // // // // // // // //   const handleLogin = () => {
// // // // // // // // //     if (users[email] && users[email].password === password) {
// // // // // // // // //       const role = users[email].role;
// // // // // // // // //       console.log(role,"role1212")
// // // // // // // // //       console.log(rolePermissions,"rolePermissions")
// // // // // // // // //       const permissions = rolePermissions.role; // Get the permissions for the user role
// // // // // // // // //       dispatch(loginUser({ role, permissions }));
// // // // // // // // //       setError(''); // Reset error message
// // // // // // // // //     } else {
// // // // // // // // //       setError('Invalid credentials');
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="login-container">
// // // // // // // // //       <h2>Login</h2>
// // // // // // // // //       <input
// // // // // // // // //         type="email"
// // // // // // // // //         placeholder="Email"
// // // // // // // // //         value={email}
// // // // // // // // //         onChange={(e) => setEmail(e.target.value)}
// // // // // // // // //       />
// // // // // // // // //       <input
// // // // // // // // //         type="password"
// // // // // // // // //         placeholder="Password"
// // // // // // // // //         value={password}
// // // // // // // // //         onChange={(e) => setPassword(e.target.value)}
// // // // // // // // //       />
// // // // // // // // //       <button onClick={handleLogin}>Login</button>
// // // // // // // // //       {error && <p className="error">{error}</p>}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Login;

// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { useDispatch } from 'react-redux';
// // // // // // // // // import { loginUser } from '../features/auth/authSlice';
// // // // // // // // import  rolePermissions  from '../utils/rolePermissions'; // Import role permissions mapping
// // // // // // // // import loginUser from '../ReduxStore/Slices/authSlice';

// // // // // // // // const Login = () => {
// // // // // // // //     const dispatch = useDispatch();
// // // // // // // //     const [email, setEmail] = useState('');
// // // // // // // //     const [password, setPassword] = useState('');
// // // // // // // //     const [error, setError] = useState('');
// // // // // // // //     console.log(rolePermissions.admin, "rolePermissionsrolePermissions")
// // // // // // // //     // Hardcoded user credentials
// // // // // // // //     const users = {
// // // // // // // //         'admin@gmail.com': { password: '1234', role: 'admin' },
// // // // // // // //         'superadmin@gmail.com': { password: '1234', role: 'super_admin' },
// // // // // // // //         'management@gmail.com': { password: '1234', role: 'management' },
// // // // // // // //         'operator@gmail.com': { password: '1234', role: 'operator' },
// // // // // // // //     };

// // // // // // // //     const handleLogin = () => {
// // // // // // // //         if (users[email] && users[email].password === password) {
// // // // // // // //             const role = users[email].role;
// // // // // // // //             console.log(role,"role")
// // // // // // // //             if (rolePermissions) { // Ensure rolePermissions exists for the role
// // // // // // // //                 console.log(rolePermissions[role],"permissions44444")
// // // // // // // //                 const permissions = rolePermissions[role]; // Get the permissions for the user role
// // // // // // // //                 console.log(permissions,"permissions")

// // // // // // // //                 dispatch(loginUser({ role, permissions }));
// // // // // // // //                 console.log(loginUser(),"wewewee")
// // // // // // // //                 setError(''); // Reset error message
// // // // // // // //             } else {
// // // // // // // //                 setError('Role permissions not found');
// // // // // // // //             }
// // // // // // // //         } else {
// // // // // // // //             setError('Invalid credentials');
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     return (
// // // // // // // //         <div className="login-container">
// // // // // // // //             <h2>Login</h2>
// // // // // // // //             <input
// // // // // // // //                 type="email"
// // // // // // // //                 placeholder="Email"
// // // // // // // //                 value={email}
// // // // // // // //                 onChange={(e) => setEmail(e.target.value)}
// // // // // // // //             />
// // // // // // // //             <input
// // // // // // // //                 type="password"
// // // // // // // //                 placeholder="Password"
// // // // // // // //                 value={password}
// // // // // // // //                 onChange={(e) => setPassword(e.target.value)}
// // // // // // // //             />
// // // // // // // //             <button onClick={handleLogin}>Login</button>
// // // // // // // //             {error && <p className="error">{error}</p>}
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default Login;

// // // // // // // import React, { useState } from "react";
// // // // // // // import { useDispatch } from "react-redux";
// // // // // // // import { loginUser } from "../ReduxStore/Slices/authSlice";
// // // // // // // import rolePermissions from "../utils/rolePermissions"; // Import role permissions mapping

// // // // // // // const Login = () => {
// // // // // // //   const dispatch = useDispatch();
// // // // // // //   const [email, setEmail] = useState("");
// // // // // // //   const [password, setPassword] = useState("");
// // // // // // //   const [error, setError] = useState("");
// // // // // // //   const [loading, setLoading] = useState(false); // New state for loading

// // // // // // //   // Hardcoded user credentials
// // // // // // //   const users = {
// // // // // // //     "admin@gmail.com": { password: "1234", role: "admin" },
// // // // // // //     "superadmin@gmail.com": { password: "1234", role: "super_admin" },
// // // // // // //     "management@gmail.com": { password: "1234", role: "management" },
// // // // // // //     "operator@gmail.com": { password: "1234", role: "operator" },
// // // // // // //   };

// // // // // // //   const handleLogin = () => {
// // // // // // //     setLoading(true); // Set loading state to true
// // // // // // //     setError(""); // Reset error

// // // // // // //     // Normalize email to lowercase
// // // // // // //     const normalizedEmail = email.toLowerCase();

// // // // // // //     // Check if the user exists
// // // // // // //     if (
// // // // // // //       users[normalizedEmail] &&
// // // // // // //       users[normalizedEmail].password === password
// // // // // // //     ) {
// // // // // // //       const role = users[normalizedEmail].role;
// // // // // // //       if (rolePermissions[role]) {
// // // // // // //         // Ensure rolePermissions exists for the role
// // // // // // //         const permissions = rolePermissions[role]; // Get the permissions for the user role
// // // // // // //         dispatch(loginUser({ role, permissions }));
// // // // // // //         setLoading(false); // Reset loading state
// // // // // // //       } else {
// // // // // // //         setLoading(false);
// // // // // // //         setError("Role permissions not found");
// // // // // // //       }
// // // // // // //     } else {
// // // // // // //       setLoading(false);
// // // // // // //       setError("Invalid credentials");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="login-container">
// // // // // // //       <Grid container sx={{ boxShadow: 3, height: "100vh" }}>
// // // // // // //         <Grid
// // // // // // //           item
// // // // // // //           md={7}
// // // // // // //           sx={{
// // // // // // //             display: { xs: "none", md: "flex" },
// // // // // // //             backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 11%, rgba(84, 84, 84, 0) 100%), url(${login_bgImage})`,
// // // // // // //             backgroundSize: "cover",
// // // // // // //             backgroundRepeat: "no-repeat",
// // // // // // //             backgroundPosition: "center",
// // // // // // //             boxShadow: 5,
// // // // // // //             width: "100%",
// // // // // // //             height: "100vh",
// // // // // // //             justifyContent: "center",
// // // // // // //             alignItems: "center",
// // // // // // //             flexDirection: "column",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           <img src={logo_login_image} alt="logo" width="213px" height="61px" />
// // // // // // //           <Box display="flex" justifyContent="center" flexWrap="wrap" mt={2}>
// // // // // // //             <Box sx={{ color: "#fff" }}>
// // // // // // //               <Typography variant="h1" textAlign="center" sx={{ mb: "1px" }}>
// // // // // // //                 The Best Gold
// // // // // // //               </Typography>
// // // // // // //               <Typography variant="h2" textAlign="center" sx={{ mb: 2 }}>
// // // // // // //                 Staking Company
// // // // // // //               </Typography>
// // // // // // //               <Typography
// // // // // // //                 variant="body1"
// // // // // // //                 textAlign="center"
// // // // // // //                 sx={{
// // // // // // //                   maxWidth: "500px",
// // // // // // //                   color: "#b0aaaa",
// // // // // // //                   opacity: 1,
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 We are committed to providing our customers with exceptional
// // // // // // //                 service while offering our employees the best training.
// // // // // // //               </Typography>
// // // // // // //             </Box>
// // // // // // //           </Box>
// // // // // // //         </Grid>

// // // // // // //         <Grid
// // // // // // //           item
// // // // // // //           xs={12}
// // // // // // //           md={5}
// // // // // // //           sx={{
// // // // // // //             display: "flex",
// // // // // // //             alignItems: "center",
// // // // // // //             justifyContent: "center",
// // // // // // //             p: 4,
// // // // // // //             background: "#FFFFFF",
// // // // // // //             width: "100%",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           <Box
// // // // // // //             sx={{
// // // // // // //               width: "100%",
// // // // // // //               maxWidth: 350,
// // // // // // //               display: "flex",
// // // // // // //               flexDirection: "column",
// // // // // // //               alignItems: "center",
// // // // // // //               justifyContent: "center",
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <Typography
// // // // // // //               variant="h4"
// // // // // // //               textAlign="center"
// // // // // // //               sx={{ fontSize: "30px", fontWeight: "600", mb: 4 }}
// // // // // // //             >
// // // // // // //               {isForgotPassword ? "Forgot Password" : "Sign In"}
// // // // // // //             </Typography>

// // // // // // //             {isForgotPassword ? (
// // // // // // //               <ForgotPasswordForm
// // // // // // //                 handleSubmit={handleForgotPasswordSubmit}
// // // // // // //                 toggleSignIn={toggleSignIn}
// // // // // // //               />
// // // // // // //             ) : (
// // // // // // //               <SignInForm
// // // // // // //                 handleSubmit={handleSignInSubmit}
// // // // // // //                 toggleForgotPassword={toggleForgotPassword}
// // // // // // //               />
// // // // // // //             )}
// // // // // // //           </Box>
// // // // // // //         </Grid>

// // // // // // //         <ToastContainer
// // // // // // //           position="top-right"
// // // // // // //           autoClose={1500}
// // // // // // //           hideProgressBar={false}
// // // // // // //           newestOnTop={false}
// // // // // // //           closeOnClick
// // // // // // //           rtl={false}
// // // // // // //           pauseOnFocusLoss
// // // // // // //           draggable
// // // // // // //           pauseOnHover
// // // // // // //           theme="dark"
// // // // // // //         />
// // // // // // //       </Grid>
// // // // // // //       <h2>Login</h2>
// // // // // // //       <div>
// // // // // // //         <input
// // // // // // //           type="email"
// // // // // // //           placeholder="Email"
// // // // // // //           value={email}
// // // // // // //           onChange={(e) => setEmail(e.target.value)}
// // // // // // //           required
// // // // // // //         />
// // // // // // //       </div>
// // // // // // //       <div>
// // // // // // //         <input
// // // // // // //           type="password"
// // // // // // //           placeholder="Password"
// // // // // // //           value={password}
// // // // // // //           onChange={(e) => setPassword(e.target.value)}
// // // // // // //           required
// // // // // // //         />
// // // // // // //       </div>
// // // // // // //       <div>
// // // // // // //         <button onClick={handleLogin} disabled={loading}>
// // // // // // //           {loading ? "Logging in..." : "Login"}
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //       {error && <p className="error">{error}</p>}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Login;

// // // // // // import React, { useState } from "react";
// // // // // // import { useDispatch } from "react-redux";
// // // // // // import { loginUser } from "../ReduxStore/Slices/authSlice";
// // // // // // import rolePermissions from "../utils/rolePermissions"; // Import role permissions mapping
// // // // // // import { Grid, Box, Typography } from "@mui/material"; // Material-UI components
// // // // // // import { ToastContainer } from "react-toastify"; // Toast notifications
// // // // // // import "react-toastify/dist/ReactToastify.css"; // Toast styles

// // // // // // // Import image assets
// // // // // // import login_bgImage from "../Assets/login_bgImage.png"; // Replace with correct path

// // // // // // import logo_login_image from "../Assets/Login Logo.svg"; // Replace with correct path
// // // // // // import SignInForm from "../Components/LoginComponent/SignInForm";
// // // // // // // import ForgotPasswordForm from "../Components/LoginComponent/ForgotPasswordForm";
// // // // // // // import SignInForm from "../Components/LoginComponent/SignInForm";

// // // // // // // Import or define forms

// // // // // // const Login = () => {
// // // // // //   const dispatch = useDispatch();
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [error, setError] = useState("");
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [isForgotPassword, setIsForgotPassword] = useState(false);

// // // // // //   // Handlers for toggling between Forgot Password and Sign In
// // // // // //   const toggleForgotPassword = () => setIsForgotPassword(!isForgotPassword);
// // // // // //   const toggleSignIn = () => setIsForgotPassword(false);

// // // // // //   // Placeholder submit handlers for forms
// // // // // //   const handleForgotPasswordSubmit = (data) => {
// // // // // //     console.log("Forgot Password Submit", data);
// // // // // //   };

// // // // // //   const handleSignInSubmit = (data) => {
// // // // // //     console.log("Sign In Submit", data);
// // // // // //   };

// // // // // //   // Hardcoded user credentials
// // // // // //   const users = {
// // // // // //     "admin@gmail.com": { password: "1234", role: "admin" },
// // // // // //     "superadmin@gmail.com": { password: "1234", role: "super_admin" },
// // // // // //     "management@gmail.com": { password: "1234", role: "management" },
// // // // // //     "operator@gmail.com": { password: "1234", role: "operator" },
// // // // // //   };

// // // // // //   const handleLogin = () => {
// // // // // //     setLoading(true); // Set loading state to true
// // // // // //     setError(""); // Reset error

// // // // // //     // Normalize email to lowercase
// // // // // //     const normalizedEmail = email.toLowerCase();

// // // // // //     // Check if the user exists
// // // // // //     if (
// // // // // //       users[normalizedEmail] &&
// // // // // //       users[normalizedEmail].password === password
// // // // // //     ) {
// // // // // //       const role = users[normalizedEmail].role;
// // // // // //       if (rolePermissions[role]) {
// // // // // //         // Ensure rolePermissions exists for the role
// // // // // //         const permissions = rolePermissions[role]; // Get the permissions for the user role
// // // // // //         dispatch(loginUser({ role, permissions }));
// // // // // //         setLoading(false); // Reset loading state
// // // // // //       } else {
// // // // // //         setLoading(false);
// // // // // //         setError("Role permissions not found");
// // // // // //       }
// // // // // //     } else {
// // // // // //       setLoading(false);
// // // // // //       setError("Invalid credentials");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="login-container">
// // // // // //       <Grid container sx={{ boxShadow: 3, height: "100vh" }}>
// // // // // //         {/* Left Side (Image and Branding) */}
// // // // // //         <Grid
// // // // // //           item
// // // // // //           md={7}
// // // // // //           sx={{
// // // // // //             display: { xs: "none", md: "flex" },
// // // // // //             backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 11%, rgba(84, 84, 84, 0) 100%), url(${login_bgImage})`,
// // // // // //             backgroundSize: "cover",
// // // // // //             backgroundRepeat: "no-repeat",
// // // // // //             backgroundPosition: "center",
// // // // // //             boxShadow: 5,
// // // // // //             width: "100%",
// // // // // //             height: "100vh",
// // // // // //             justifyContent: "center",
// // // // // //             alignItems: "center",
// // // // // //             flexDirection: "column",
// // // // // //           }}
// // // // // //         >
// // // // // //           <img src={logo_login_image} alt="logo" width="213px" height="61px" />
// // // // // //           <Box display="flex" justifyContent="center" flexWrap="wrap" mt={2}>
// // // // // //             <Box sx={{ color: "#fff" }}>
// // // // // //               <Typography variant="h1" textAlign="center" sx={{ mb: "1px" }}>
// // // // // //                 The Best Gold
// // // // // //               </Typography>
// // // // // //               <Typography variant="h2" textAlign="center" sx={{ mb: 2 }}>
// // // // // //                 Staking Company
// // // // // //               </Typography>
// // // // // //               <Typography
// // // // // //                 variant="body1"
// // // // // //                 textAlign="center"
// // // // // //                 sx={{
// // // // // //                   maxWidth: "500px",
// // // // // //                   color: "#b0aaaa",
// // // // // //                   opacity: 1,
// // // // // //                 }}
// // // // // //               >
// // // // // //                 We are committed to providing our customers with exceptional
// // // // // //                 service while offering our employees the best training.
// // // // // //               </Typography>
// // // // // //             </Box>
// // // // // //           </Box>
// // // // // //         </Grid>

// // // // // //         {/* Right Side (Login Form) */}
// // // // // //         <Grid
// // // // // //           item
// // // // // //           xs={12}
// // // // // //           md={5}
// // // // // //           sx={{
// // // // // //             display: "flex",
// // // // // //             alignItems: "center",
// // // // // //             justifyContent: "center",
// // // // // //             p: 4,
// // // // // //             background: "#FFFFFF",
// // // // // //             width: "100%",
// // // // // //           }}
// // // // // //         >
// // // // // //           <Box
// // // // // //             sx={{
// // // // // //               width: "100%",
// // // // // //               maxWidth: 350,
// // // // // //               display: "flex",
// // // // // //               flexDirection: "column",
// // // // // //               alignItems: "center",
// // // // // //               justifyContent: "center",
// // // // // //             }}
// // // // // //           >
// // // // // //             <Typography
// // // // // //               variant="h4"
// // // // // //               textAlign="center"
// // // // // //               sx={{ fontSize: "30px", fontWeight: "600", mb: 4 }}
// // // // // //             >
// // // // // //               {isForgotPassword ? "Forgot Password" : "Sign In"}
// // // // // //             </Typography>

// // // // // //             {/* {isForgotPassword ? (
// // // // // //               <ForgotPasswordForm
// // // // // //                 handleSubmit={handleForgotPasswordSubmit}
// // // // // //                 toggleSignIn={toggleSignIn}
// // // // // //               />
// // // // // //             ) : (
// // // // // //               <SignInForm
// // // // // //                 handleSubmit={handleSignInSubmit}
// // // // // //                 toggleForgotPassword={toggleForgotPassword}
// // // // // //               />
// // // // // //             )} */}

// // // // // //             <SignInForm
// // // // // //               handleSubmit={handleSignInSubmit}
// // // // // //               toggleForgotPassword={toggleForgotPassword}
// // // // // //             />
// // // // // //           </Box>
// // // // // //         </Grid>

// // // // // //         {/* Toast Notifications */}
// // // // // //         <ToastContainer
// // // // // //           position="top-right"
// // // // // //           autoClose={1500}
// // // // // //           hideProgressBar={false}
// // // // // //           newestOnTop={false}
// // // // // //           closeOnClick
// // // // // //           rtl={false}
// // // // // //           pauseOnFocusLoss
// // // // // //           draggable
// // // // // //           pauseOnHover
// // // // // //           theme="dark"
// // // // // //         />
// // // // // //       </Grid>

// // // // // //       {/* Simple Login Form */}

// // // // // //       <div>
// // // // // //         <button onClick={handleLogin} disabled={loading}>
// // // // // //           {loading ? "Logging in..." : "Login"}
// // // // // //         </button>
// // // // // //       </div>
// // // // // //       {error && <p className="error">{error}</p>}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Login;

// // // // // import React, { useState } from "react";
// // // // // import { useDispatch } from "react-redux";
// // // // // import { loginUser } from "../ReduxStore/Slices/authSlice";
// // // // // import rolePermissions from "../utils/rolePermissions"; // Import role permissions mapping
// // // // // import { Grid, Box, Typography } from "@mui/material"; // Material-UI components
// // // // // import { ToastContainer, toast } from "react-toastify"; // Toast notifications
// // // // // import "react-toastify/dist/ReactToastify.css"; // Toast styles

// // // // // import login_bgImage from "../Assets/login_bgImage.png"; // Replace with correct path
// // // // // import logo_login_image from "../Assets/Login Logo.svg"; // Replace with correct path
// // // // // import SignInForm from "../Components/LoginComponent/SignInForm";
// // // // // import actions from "../ReduxStore/actions";

// // // // // const Login = () => {
// // // // //   const dispatch = useDispatch();
// // // // //   const [error, setError] = useState("");
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   const defaultUsers = {
// // // // //     "admin@gmail.com": { password: "1234", role: "admin" },
// // // // //     "superadmin@gmail.com": { password: "1234", role: "super_admin" },
// // // // //     "management@gmail.com": { password: "1234", role: "management" },
// // // // //     "operator@gmail.com": { password: "1234", role: "Operator" },
// // // // //   };

// // // // //   const handleSignInSubmit = async ({ email, password, role, values }) => {
// // // // //     console.log(role, "valuesvalues");
// // // // //     setLoading(true);
// // // // //     setError("");

// // // // //     const normalizedEmail = email.toLowerCase();
// // // // //     const data1 = {
// // // // //       data: {
// // // // //         email,
// // // // //         password,
// // // // //         role,
// // // // //       },
// // // // //       method: "post",
// // // // //       apiName: "login/operator",
// // // // //     };

// // // // //     try {
// // // // //       const result = await dispatch(actions.LOGINOPERATOR(data1));
// // // // //       console.log(result, "resulttttttt");

// // // // //       if (
// // // // //         result?.payload?.message ===
// // // // //         "Your request has been approved, Login successful."
// // // // //       ) {
// // // // //         sessionStorage.setItem(
// // // // //           "sessionOperator_id",
// // // // //           result?.payload?.data.operator_id
// // // // //         );
// // // // //         sessionStorage.setItem(
// // // // //           "sessionFOperatorFirstName",
// // // // //           result?.payload?.data.name
// // // // //         );
// // // // //         sessionStorage.setItem(
// // // // //           "UserRole",
// // // // //           result?.payload?.data.userRole
// // // // //         );
// // // // //         const role = result?.payload?.data?.userRole;
// // // // //         console.log(role, "mainRole from API");
// // // // //         const permissions = rolePermissions[role];
// // // // //         console.log(permissions, "permissions fetched");

// // // // //         if (permissions) {
// // // // //           dispatch(loginUser({ role, permissions }));
// // // // //           toast.success("Login successful!");
// // // // //         } else {
// // // // //           setError("Role permissions not found");
// // // // //           toast.error("Role permissions not found");
// // // // //         }
// // // // //       } else if (
// // // // //         defaultUsers[normalizedEmail] &&
// // // // //         defaultUsers[normalizedEmail].password === password
// // // // //       ) {
// // // // //         const role = defaultUsers[normalizedEmail].role;
// // // // //         const permissions = rolePermissions[role];

// // // // //         if (permissions) {
// // // // //           dispatch(loginUser({ role, permissions }));
// // // // //           toast.success("Login successful!");
// // // // //         } else {
// // // // //           setError("Role permissions not found");
// // // // //           toast.error("Role permissions not found");
// // // // //         }
// // // // //       } else {
// // // // //         setError("Invalid email or password");
// // // // //         toast.error("Invalid email or password");
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error(error, "Login error");
// // // // //       setError("An error occurred during login");
// // // // //       toast.error("An error occurred during login");
// // // // //     }

// // // // //     setLoading(false);
// // // // //   };

// // // // //   return (
// // // // //     <div className="login-container">
// // // // //       <Grid container sx={{ boxShadow: 3, height: "100vh" }}>
// // // // //         {/* Left Side */}
// // // // //         <Grid
// // // // //           item
// // // // //           md={7}
// // // // //           sx={{
// // // // //             display: {
// // // // //               xs: "none",
// // // // //               md: "none",
// // // // //             },
// // // // //             backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 11%, rgba(84, 84, 84, 0) 100%), url(${login_bgImage})`,
// // // // //             backgroundSize: "cover",
// // // // //             backgroundRepeat: "no-repeat",
// // // // //             backgroundPosition: "center",
// // // // //             boxShadow: 5,
// // // // //             width: "100%",
// // // // //             height: "100vh",
// // // // //             justifyContent: "center",
// // // // //             alignItems: "center",
// // // // //             flexDirection: "column",
// // // // //           }}
// // // // //         >
// // // // //           <img src={logo_login_image} alt="logo" width="213px" height="61px" />
// // // // //           <Box display="flex" justifyContent="center" flexWrap="wrap" mt={2}>
// // // // //             <Box sx={{ color: "#fff" }}>
// // // // //               <Typography variant="h1" textAlign="center" sx={{ mb: "1px" }}>
// // // // //                 The Best Gold
// // // // //               </Typography>
// // // // //               <Typography variant="h2" textAlign="center" sx={{ mb: 2 }}>
// // // // //                 Staking Company
// // // // //               </Typography>
// // // // //               <Typography
// // // // //                 variant="body1"
// // // // //                 textAlign="center"
// // // // //                 sx={{
// // // // //                   maxWidth: "500px",
// // // // //                   color: "#b0aaaa",
// // // // //                   opacity: 1,
// // // // //                 }}
// // // // //               >
// // // // //                 We are committed to providing our customers with exceptional
// // // // //                 service while offering our employees the best training.
// // // // //               </Typography>
// // // // //             </Box>
// // // // //           </Box>
// // // // //         </Grid>

// // // // //         {/* Right Side */}
// // // // //         <Grid
// // // // //           item
// // // // //           xs={12}
// // // // //           md={12}
// // // // //           sx={{
// // // // //             display: "flex",
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center",
// // // // //             p: 4,
// // // // //             background: "#FFFFFF",
// // // // //             width: "100%",
// // // // //           }}
// // // // //         >
// // // // //           <Box
// // // // //             sx={{
// // // // //               width: "100%",
// // // // //               maxWidth: 350,
// // // // //               py: 8,
// // // // //               px: 4,
// // // // //               display: "flex",
// // // // //               flexDirection: "column",
// // // // //               alignItems: "center",
// // // // //               justifyContent: "center",
// // // // //               // border: "1px solid black",
// // // // //               boxShadow: "2px",
// // // // //               background: "#F7F7F7",
// // // // //             }}
// // // // //           >
// // // // //             {/* <Box

// // // // //             > */}
// // // // //             <Typography
// // // // //               variant="h4"
// // // // //               textAlign="center"
// // // // //               sx={{ fontSize: "30px", fontWeight: "600", mb: 4 }}
// // // // //             >
// // // // //               Sign In
// // // // //             </Typography>
// // // // //             <SignInForm handleSubmit={handleSignInSubmit} />
// // // // //             {/* </Box> */}
// // // // //           </Box>
// // // // //         </Grid>

// // // // //         <ToastContainer
// // // // //           position="top-right"
// // // // //           autoClose={1500}
// // // // //           hideProgressBar={false}
// // // // //           newestOnTop={false}
// // // // //           closeOnClick
// // // // //           rtl={false}
// // // // //           pauseOnFocusLoss
// // // // //           draggable
// // // // //           pauseOnHover
// // // // //           theme="dark"
// // // // //         />
// // // // //       </Grid>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Login;

// // // // import React, { useState } from "react";
// // // // import { useDispatch } from "react-redux";
// // // // import { loginUser } from "../ReduxStore/Slices/authSlice";
// // // // import rolePermissions from "../utils/rolePermissions"; // Import role permissions mapping
// // // // import { Grid, Box, Typography } from "@mui/material"; // Material-UI components
// // // // import { ToastContainer, toast } from "react-toastify"; // Toast notifications
// // // // import "react-toastify/dist/ReactToastify.css"; // Toast styles

// // // // import login_bgImage from "../Assets/login_bgImage.png"; // Replace with correct path
// // // // import logo_login_image from "../Assets/Login Logo.svg"; // Replace with correct path
// // // // import SignInForm from "../Components/LoginComponent/SignInForm";
// // // // import actions from "../ReduxStore/actions";

// // // // const Login = () => {
// // // //   const dispatch = useDispatch();
// // // //   const [error, setError] = useState("");
// // // //   const [loading, setLoading] = useState(false);

// // // //   const defaultUsers = {
// // // //     // "admin@gmail.com": { password: "1234", role: "admin" },
// // // //     "superadmin@gmail.com": { password: "1234", role: "super_admin" },
// // // //     "management@gmail.com": { password: "1234", role: "management" },
// // // //     // "operator@gmail.com": { password: "1234", role: "Operator" },
// // // //   };

// // // //   const handleSignInSubmit = async ({ email, password, values }) => {
// // // //     // console.log(role, "valuesvalues");
// // // //     setLoading(true);
// // // //     setError("");

// // // //     const normalizedEmail = email.toLowerCase();
// // // //     const data1 = {
// // // //       data: {
// // // //         email,
// // // //         password,

// // // //       },
// // // //       method: "post",
// // // //       apiName: "loginAuthUser",
// // // //     };

// // // //     try {
// // // //       const result = await dispatch(actions.LOGINOPERATOR(data1));
// // // //       console.log(result, "resulttttttt");

// // // //       if (result?.payload?.message === `Login successful.`) {
// // // //         console.log(result?.payload?.data?.user?.userRole, "itswrok");
// // // //         toast.success(result?.payload?.message);
// // // //         console.log("toastwork");
// // // //         sessionStorage.setItem(
// // // //           "userRole",
// // // //           result?.payload?.data?.user?.userRole
// // // //         );
// // // //         if (result?.payload?.data?.user?.userRole === "operator") {
// // // //           sessionStorage.setItem(
// // // //             "sessionOperator_id",
// // // //             result?.payload?.data.operator_id
// // // //           );
// // // //           // sessionStorage.setItem(
// // // //           //   "userRole",result?.payload?.data?.user?.userRole
// // // //           //   result?.payload?.data.userRole
// // // //           // );
// // // //           localStorage.setItem("AuthToken", result?.payload?.data?.token);
// // // //         }
// // // //         if (result?.payload?.data?.user?.userRole === "admin") {
// // // //           sessionStorage.setItem(
// // // //             "sessionOperator_id",
// // // //             result?.payload?.data?.user?.user_id
// // // //           );
// // // //           localStorage.setItem("AuthToken", result?.payload?.data?.token);

// // // //         }
// // // //         if (result?.payload?.data?.user?.userRole === "superAdmin") {
// // // //         console.log("superAdmminWork")
// // // //           sessionStorage.setItem(
// // // //             "sessionOperator_id",
// // // //             result?.payload?.data?.user?.user_id
// // // //           );
// // // //           localStorage.setItem("AuthToken", result?.payload?.data?.token);

// // // //         }

// // // //         sessionStorage.setItem(
// // // //           "sessionFOperatorFirstName",
// // // //           result?.payload?.data.name
// // // //         );

// // // //         sessionStorage.setItem("UserRole", result?.payload?.data?.user?.userRole);
// // // //         setTimeout(() => {
// // // //           const role = result?.payload?.data?.user?.userRole;
// // // //           console.log(role, "mainRole from API");
// // // //           const permissions = rolePermissions[role];
// // // //           console.log(permissions, "permissions fetched");

// // // //           if (permissions) {
// // // //             dispatch(loginUser({ role, permissions }));
// // // //             toast.success("Login successful!");
// // // //           } else {
// // // //             setError("Role permissions not found");
// // // //             toast.error("Role permissions not found");
// // // //           }
// // // //         }, 1500);
// // // //       } else if (
// // // //         defaultUsers[normalizedEmail] &&
// // // //         defaultUsers[normalizedEmail].password === password
// // // //       ) {
// // // //         const role = defaultUsers[normalizedEmail].role;
// // // //         const permissions = rolePermissions[role];
// // // //         setTimeout(() => {
// // // //           if (permissions) {
// // // //             dispatch(loginUser({ role, permissions }));
// // // //             toast.success("Login successful!");
// // // //           } else {
// // // //             setError("Role permissions not found");
// // // //             toast.error("Role permissions not found");
// // // //           }
// // // //         }, 1500);
// // // //       } else {
// // // //         setError("Invalid email or password");
// // // //         toast.error("Invalid email or password");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error(error, "Login error");
// // // //       setError("An error occurred during login");
// // // //       toast.error("An error occurred during login");
// // // //       // toast.error( result?.payload?.message)
// // // //     }

// // // //     setLoading(false);
// // // //   };

// // // //   return (
// // // //     <div className="login-container">
// // // //       <Grid container sx={{ boxShadow: 3, height: "100vh" }}>
// // // //         {/* Left Side */}
// // // //         <Grid
// // // //           item
// // // //           md={7}
// // // //           sx={{
// // // //             display: {
// // // //               xs: "none",
// // // //               md: "none",
// // // //             },
// // // //             backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 11%, rgba(84, 84, 84, 0) 100%), url(${login_bgImage})`,
// // // //             backgroundSize: "cover",
// // // //             backgroundRepeat: "no-repeat",
// // // //             backgroundPosition: "center",
// // // //             boxShadow: 5,
// // // //             width: "100%",
// // // //             height: "100vh",
// // // //             justifyContent: "center",
// // // //             alignItems: "center",
// // // //             flexDirection: "column",
// // // //           }}
// // // //         >
// // // //           <img src={logo_login_image} alt="logo" width="213px" height="61px" />
// // // //           <Box display="flex" justifyContent="center" flexWrap="wrap" mt={2}>
// // // //             <Box sx={{ color: "#fff" }}>
// // // //               <Typography variant="h1" textAlign="center" sx={{ mb: "1px" }}>
// // // //                 The Best Gold
// // // //               </Typography>
// // // //               <Typography variant="h2" textAlign="center" sx={{ mb: 2 }}>
// // // //                 Staking Company
// // // //               </Typography>
// // // //               <Typography
// // // //                 variant="body1"
// // // //                 textAlign="center"
// // // //                 sx={{
// // // //                   maxWidth: "500px",
// // // //                   color: "#b0aaaa",
// // // //                   opacity: 1,
// // // //                 }}
// // // //               >
// // // //                 We are committed to providing our customers with exceptional
// // // //                 service while offering our employees the best training.
// // // //               </Typography>
// // // //             </Box>
// // // //           </Box>
// // // //         </Grid>

// // // //         {/* Right Side */}
// // // //         <Grid
// // // //           item
// // // //           xs={12}
// // // //           md={12}
// // // //           sx={{
// // // //             display: "flex",
// // // //             alignItems: "center",
// // // //             justifyContent: "center",
// // // //             p: 4,
// // // //             background: "#FFFFFF",
// // // //             width: "100%",
// // // //           }}
// // // //         >
// // // //           <Box
// // // //             sx={{
// // // //               width: "100%",
// // // //               maxWidth: 350,
// // // //               py: 8,
// // // //               px: 4,
// // // //               display: "flex",
// // // //               flexDirection: "column",
// // // //               alignItems: "center",
// // // //               justifyContent: "center",
// // // //               // border: "1px solid black",
// // // //               boxShadow: "2px",
// // // //               background: "#F7F7F7",
// // // //             }}
// // // //           >
// // // //             {/* <Box

// // // //             > */}
// // // //             <Typography
// // // //               variant="h4"
// // // //               textAlign="center"
// // // //               sx={{ fontSize: "30px", fontWeight: "600", mb: 4 }}
// // // //             >
// // // //               Sign In
// // // //             </Typography>
// // // //             <SignInForm handleSubmit={handleSignInSubmit} />
// // // //             {/* </Box> */}
// // // //           </Box>
// // // //         </Grid>

// // // //         <ToastContainer
// // // //           position="top-right"
// // // //           autoClose={1500}
// // // //           hideProgressBar={false}
// // // //           newestOnTop={false}
// // // //           closeOnClick
// // // //           rtl={false}
// // // //           pauseOnFocusLoss
// // // //           draggable
// // // //           pauseOnHover
// // // //           theme="dark"
// // // //         />
// // // //       </Grid>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Login;

// // // import React, { useState } from "react";
// // // import { useDispatch } from "react-redux";
// // // import { loginUser } from "../ReduxStore/Slices/authSlice";
// // // import rolePermissions from "../utils/rolePermissions";
// // // import {
// // //   Grid,
// // //   Box,
// // //   Typography,
// // //   CircularProgress,
// // //   Paper,
// // // } from "@mui/material";
// // // import { ToastContainer, toast } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";

// // // import login_bgImage from "../Assets/login_bgImage.png";
// // // import logo_login_image from "../Assets/Login Logo.svg";
// // // import SignInForm from "../Components/LoginComponent/SignInForm";
// // // import actions from "../ReduxStore/actions";

// // // const Login = () => {
// // //   const dispatch = useDispatch();
// // //   const [loading, setLoading] = useState(false);

// // //   const handleSignInSubmit = async ({ email, password }) => {
// // //     setLoading(true);

// // //     const normalizedEmail = email.toLowerCase();
// // //     const requestData = {
// // //       data: { email, password },
// // //       method: "post",
// // //       apiName: "loginAuthUser",
// // //     };

// // //     try {
// // //       const result = await dispatch(actions.LOGINOPERATOR(requestData));
// // //       const userData = result?.payload?.data?.user;
// // //       const userRole = userData?.userRole;
// // //       console.log(userRole,"userRollssdbnnsd")

// // //       if (result?.payload?.message === "Login successful." && userRole) {
// // //         toast.success("Login successful!");
// // //         sessionStorage.setItem("userRole", userRole);
// // //         localStorage.setItem("AuthToken", result?.payload?.data?.token);

// // //         if (userRole === "operator" || userRole === "admin" || userRole === "superAdmin") {
// // //           sessionStorage.setItem(
// // //             "sessionOperator_id",
// // //             userRole === "operator" ? result?.payload?.data.operator_id : userData?.user_id
// // //           );
// // //         }

// // //         sessionStorage.setItem("sessionFOperatorFirstName", result?.payload?.data.name);
// // //         const getRole= result?.payload?.data?.role_id
// // //         const data1 = {
// // //           data: { },
// // //           method: "get",
// // //           apiName: `getPermissionsForAuthUser/${result?.payload?.data?.getRole}`,
// // //         };
// // //         const responseData = await dispatch(actions.GETPERMISSIONSFORAUTHUSER(data1))
// // //         const permissions = responseData?.payload?.data?.permissions || [];
// // //         console.log(permissions,"validerimissions")
// // //         dispatch(loginUser({ role: userRole, permissions }));
// // //       } else {
// // //         toast.error("Invalid email or password");
// // //       }
// // //     } catch (error) {
// // //       console.error("Login error:", error);
// // //       toast.error("An error occurred during login");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="login-container">
// // //       <Grid container sx={{ height: "100vh" }}>
// // //         {/* Left Side (Image & Branding) */}
// // //         <Grid
// // //           item
// // //           md={6}
// // //           sx={{
// // //             display: { xs: "none", md: "flex" },
// // //             backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 11%, rgba(84, 84, 84, 0) 100%), url(${login_bgImage})`,
// // //             backgroundSize: "cover",
// // //             backgroundRepeat: "no-repeat",
// // //             backgroundPosition: "center",
// // //             alignItems: "center",
// // //             justifyContent: "center",
// // //             color: "#fff",
// // //             textAlign: "center",
// // //             px: 4,
// // //           }}
// // //         >
// // //           <Box>
// // //             <img src={logo_login_image} alt="Logo" width="200px" />
// // //             <Typography variant="h3" fontWeight="600" mt={2}>
// // //               The Best Gold Staking Company
// // //             </Typography>
// // //             <Typography variant="body1" sx={{ maxWidth: "450px", mt: 1 }}>
// // //               We are committed to providing exceptional service while offering our employees the best training.
// // //             </Typography>
// // //           </Box>
// // //         </Grid>

// // //         {/* Right Side (Login Form) */}
// // //         <Grid
// // //           item
// // //           xs={12}
// // //           md={6}
// // //           sx={{
// // //             display: "flex",
// // //             alignItems: "center",
// // //             justifyContent: "center",
// // //             p: 4,
// // //             background: "#FFFFFF",
// // //           }}
// // //         >
// // //           <Paper
// // //             elevation={3}
// // //             sx={{
// // //               width: "100%",
// // //               maxWidth: 400,
// // //               p: 4,
// // //               borderRadius: "12px",
// // //               textAlign: "center",
// // //             }}
// // //           >
// // //             <Typography variant="h4" fontWeight="bold" mb={3}>
// // //               Sign In
// // //             </Typography>

// // //             {loading ? (
// // //               <Box display="flex" justifyContent="center" my={3}>
// // //                 <CircularProgress />
// // //               </Box>
// // //             ) : (
// // //               <SignInForm handleSubmit={handleSignInSubmit} />
// // //             )}
// // //           </Paper>
// // //         </Grid>
// // //       </Grid>

// // //       <ToastContainer position="top-right" autoClose={1500} />
// // //     </div>
// // //   );
// // // };

// // // export default Login;

// // import React, { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import axios from "axios";
// // import { TextField, Button, Box, Typography, CircularProgress } from "@mui/material";
// // import { useNavigate } from "react-router-dom";
// // import { adminUrl } from "../constants/url";
// // // import { logout } from "../../../redux/authSlice";

// // const Login = () => {
// //     const dispatch = useDispatch();
// //     const navigate = useNavigate();
// //     const [credentials, setCredentials] = useState({ email: "", password: "" });
// //     const [loading, setLoading] = useState(false);
// //     const [error, setError] = useState(null);

// //     const handleChange = (e) => {
// //         setCredentials({ ...credentials, [e.target.name]: e.target.value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         setLoading(true);
// //         setError(null);

// //         try {
// //             const response = await axios.post(`${adminUrl}/loginAuthUser`, credentials);
// //             const { token, role, user } = response.data;

// //             // Store token & role in local storage
// //             localStorage.setItem("token", token);

// //             // Update Redux state manually
// //             dispatch({
// //                 type: "auth/loginSuccess",
// //                 payload: { user, role, token },
// //             });

// //             navigate("/dashboard");
// //         } catch (err) {
// //             setError(err.response?.data?.message || "Login failed");
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
// //             <Box width={300} p={3} boxShadow={3} borderRadius={2}>
// //                 <Typography variant="h5" textAlign="center" mb={2}>Login</Typography>
// //                 <form onSubmit={handleSubmit}>
// //                     <TextField
// //                         fullWidth
// //                         label="Email"
// //                         name="email"
// //                         variant="outlined"
// //                         margin="normal"
// //                         value={credentials.email}
// //                         onChange={handleChange}
// //                     />
// //                     <TextField
// //                         fullWidth
// //                         label="Password"
// //                         type="password"
// //                         name="password"
// //                         variant="outlined"
// //                         margin="normal"
// //                         value={credentials.password}
// //                         onChange={handleChange}
// //                     />
// //                     {error && <Typography color="error" mt={1}>{error}</Typography>}
// //                     <Button
// //                         fullWidth
// //                         type="submit"
// //                         variant="contained"
// //                         color="primary"
// //                         sx={{ mt: 2 }}
// //                         disabled={loading}
// //                     >
// //                         {loading ? <CircularProgress size={24} /> : "Login"}
// //                     </Button>
// //                 </form>
// //             </Box>
// //         </Box>
// //     );
// // };

// // export default Login;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { TextField, Button, Box, Typography, CircularProgress } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { loginSuccess } from "../ReduxStore/Slices/authSlice";
// import { adminUrl } from "../constants/url";
// import actions from "../ReduxStore/actions";
// // import { loginSuccess } from "../redux/authSlice"; // Import Redux action

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const { permissions } = useSelector((state) => state.auth);
//   console.log(permissions, "permistionssssdss")
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setError(null);

//   //   try {
//   //     const response = await axios.post(`${adminUrl}/loginAuthUser`, credentials);
//   //     console.log(response,"message")
//   //     const token =  response?.data?.data?.token
//   //     console.log(token,"token")
//   //     if (response?.data?.Message === "Login successful.") {
//   //       const data1 = {
//   //         data: {},
//   //         method: "get",
//   //         apiName: `getPermissionsForAuthUser/${response?.data?.data?.user.role_id}`,
//   //       };
//   //       const permissionsData= await dispatch(actions.GETPERMISSIONSFORAUTHUSER(data1));
//   //       console.log(permissionsData,"permssionData")
//   //       const { roleName, permissions, user } = response?.payload?.data;
//   //       console.log( roleName,"data")
//   //       console.log( permissions,"data")
//   //         console.log( user,"data")

//   //     // Dispatch authentication success manually
//   //     dispatch(loginSuccess({ user, role: roleName, token, permissions }));
//   //     }

//   //     // Store
//   //     // token in local storage
//   //     localStorage.setItem("token", token);

//   //     navigate("/dashboard");
//   //   } catch (err) {
//   //     setError(err.response?.data?.message || "Login failed");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post(`${adminUrl}/loginAuthUser`, credentials);
//       console.log("Full response:", response);  // Log the entire response for debugging

//       const token = response?.data?.data?.token;
//       if (response?.data?.Message === "Login successful.") {
//         // Fetch permissions for the user
//         console.log("itsworrrr")
//         const data1 = {
//           data: {},
//           method: "get",
//           apiName: `getPermissionsForAuthUser/${response?.data?.data?.user.role_id}`,
//         };
//         const permissionsData = await dispatch(actions.GETPERMISSIONSFORAUTHUSER(data1));
//         console.log("Permissions Data:", permissionsData);  // Log permissions data for debugging
//         console.log(permissionsData?.payload?.data, "hydgfssfhj")

//         const { roleName, permissions, user } = permissionsData?.payload?.data;

//         // Dispatch login success with the necessary data
//         dispatch(loginSuccess({ user, role: roleName, token, permissions }));
//         console.log(roleName, "hydgfssfhj")
//         // Store the token in local storage
//         // localStorage.setItem("token", token);

//         localStorage.setItem("token", token);
//         localStorage.setItem("permissions", JSON.stringify(permissions));
//         localStorage.setItem("roleName", roleName);

//         // Redirect to the dashboard
//         // navigate("/dashboard");
//       } else {
//         setError("Invalid credentials or login error.");
//       }
//     } catch (err) {
//       console.error("Login error:", err);  // Log the error for debugging
//       setError(err?.response?.data?.message || "Login failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
//       <Box width={300} p={3} boxShadow={3} borderRadius={2}>
//         <Typography variant="h5" textAlign="center" mb={2}>Login</Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Email"
//             name="email"
//             variant="outlined"
//             margin="normal"
//             value={credentials.email}
//             onChange={handleChange}
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             name="password"
//             variant="outlined"
//             margin="normal"
//             value={credentials.password}
//             onChange={handleChange}
//           />
//           {error && <Typography color="error" mt={1}>{error}</Typography>}
//           <Button
//             fullWidth
//             type="submit"
//             variant="contained"
//             color="primary"
//             sx={{ mt: 2 }}
//             disabled={loading}
//           >
//             {loading ? <CircularProgress size={24} /> : "Login"}
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../ReduxStore/Slices/authSlice";
import { adminUrl } from "../constants/url";
import actions from "../ReduxStore/actions";
import SignInForm from "../Components/LoginComponent/SignInForm";
import { toast, ToastContainer } from "react-toastify";
import { RiZzzFill } from "react-icons/ri";
import logo from "../Assets/Ethiraj_colloge_logo.png";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { permissions } = useSelector((state) => state.auth);
  console.log(permissions, "permissions");

  const handleSubmit = async (values, { setSubmitting }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${adminUrl}loginAuthUser`, values);
      console.log("Full response:", response);

      const token = response?.data?.data?.token;
      if (response?.data?.Message === "Login successful.") {
        toast.success("Login successfully");
        setTimeout(async () => {
          // const data1 = {
          //   data: {},
          //   method: "get",
          //   apiName: `getPermissionsForAuthUser/${response?.data?.data?.user.role_id}`,
          // };

          // const permissionsData = await dispatch(actions.GETPERMISSIONSFORAUTHUSER(data1));
          // console.log("Permissions Data:", permissionsData);

          const { roleName, permissions, user } = {
            role_id: "1",
            roleName: "Admin",
            permissions: {
              Dashboard: {
                Dashboard: {
                  add: true,
                  edit: true,
                  delete: true,
                  view: true,
                },
              },
              OperatorRegistration: {
                "All User List": {
                  add: true,
                  edit: false,
                  delete: false,
                  view: true,
                },
                "Purchaser List": {
                  add: false,
                  edit: false,
                  delete: false,
                  view: true,
                },
                "Referrer List": {
                  add: false,
                  edit: false,
                  delete: false,
                  view: true,
                },
                "Financial Consultant List": {
                  add: true,
                  edit: false,
                  delete: false,
                  view: true,
                },
              },
              SchemeManagement: {
                "Gold Stake Schemes": {
                  add: true,
                  edit: true,
                  delete: false,
                  view: true,
                },
                "Referral Schemes": {
                  add: true,
                  edit: true,
                  delete: false,
                  view: true,
                },
              },
              ContentManagement: {
                Home: {
                  add: true,
                  edit: true,
                  delete: true,
                  view: true,
                },
                "Stake Now": {
                  add: true,
                  edit: true,
                  delete: true,
                  view: true,
                },
                Referrals: {
                  add: true,
                  edit: true,
                  delete: true,
                  view: true,
                },
                "About Us": {
                  add: true,
                  edit: true,
                  delete: true,
                  view: true,
                },
                Blog: {
                  add: true,
                  edit: true,
                  delete: true,
                  view: true,
                },
                "Contact Us": {
                  add: true,
                  edit: true,
                  delete: true,
                  view: true,
                },
              },
            },
          };
          // setTimeout()
          dispatch(loginSuccess({ user, role: roleName, token, permissions }));

          localStorage.setItem("token", token);
          // localStorage.setItem("permissions", JSON.stringify(permissions));
          localStorage.setItem("roleName", "Admin");
        }, 1500);
        // navigate("/");
      } else {
        toast.error(response?.data?.Message);

        setError("Invalid credentials or login error.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err?.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgba(107, 60, 88, 0.08) 0%, rgba(107, 60, 88, 0.04) 100%)",
          p: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "420px",
            p: { xs: "28px", sm: "32px", md: "36px" },
            background: "#FFFFFF",
            borderRadius: "16px",
            border: "1px solid #E0E0E0",
            boxShadow:
              "0 20px 45px rgba(15, 23, 42, 0.08), 0 2px 12px rgba(15, 23, 42, 0.04)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Logo Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <Box
              component="img"
              sx={{
                width: "80px",
                height: "80px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                fontWeight: "700",
                color: "#1976D2",
                boxShadow: "0 4px 12px rgba(25, 118, 210, 0.15)",
              }}
              src={logo}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "28px", sm: "32px" },
              fontWeight: 700,
              color: "#1F2937",
              textAlign: "center",
              mb: 1,
              letterSpacing: "-0.5px",
            }}
          >
            Welcome Back
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              color: "#6B7280",
              textAlign: "center",
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Sign in to access your account and manage website content
            efficiently.
          </Typography>

          {/* Form */}
          <Box sx={{ mb: 3 }}>
            <SignInForm handleSubmit={handleSubmit} />
          </Box>

          {/* Back to Home Link */}
        </Box>
      </Box>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{
          zIndex: 9999,
        }}
      />
    </Box>
  );
};

export default Login;
