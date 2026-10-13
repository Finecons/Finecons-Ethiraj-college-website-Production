// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import "../CustomInputLogin/CustomInputLogin.css";
// // // // // // // import "../ComponentsCss/componet.css";
// // // // // // // import { Field, ErrorMessage } from "formik";
// // // // // // // import { InputAdornment, Button } from "@mui/material";
// // // // // // // import { Email, CheckCircle } from "@mui/icons-material";

// // // // // // // const CustomEmailVerifyInput = ({ label, name, custPlaceholder, image, inputType, ...rest }) => {
// // // // // // //   const [isOtpSent, setIsOtpSent] = useState(false);
// // // // // // //   const [otpValues, setOtpValues] = useState(["", "", "", ""]);
// // // // // // //   const [timer, setTimer] = useState(300); // 5 minutes in seconds
// // // // // // //   const [isVerified, setIsVerified] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     let countdown;
// // // // // // //     if (isOtpSent && timer > 0) {
// // // // // // //       countdown = setInterval(() => {
// // // // // // //         setTimer((prev) => prev - 1);
// // // // // // //       }, 1000);
// // // // // // //     } else if (timer === 0) {
// // // // // // //       clearInterval(countdown);
// // // // // // //     }
// // // // // // //     return () => clearInterval(countdown);
// // // // // // //   }, [isOtpSent, timer]);

// // // // // // //   const handleSendOtp = () => {
// // // // // // //     setIsOtpSent(true);
// // // // // // //     setTimer(300); // Reset timer to 5 minutes
// // // // // // //   };

// // // // // // //   const handleVerify = () => {
// // // // // // //     // Dummy verification logic
// // // // // // //     if (otpValues.every((val) => val === "1")) {
// // // // // // //       setIsVerified(true);
// // // // // // //       setIsOtpSent(false);
// // // // // // //     } else {
// // // // // // //       alert("Incorrect OTP. Please try again.");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleOtpChange = (index, value) => {
// // // // // // //     const updatedOtp = [...otpValues];
// // // // // // //     updatedOtp[index] = value.slice(-1); // Ensure only one character
// // // // // // //     setOtpValues(updatedOtp);
// // // // // // //   };

// // // // // // //   const formatTime = (seconds) => {
// // // // // // //     const minutes = Math.floor(seconds / 60);
// // // // // // //     const secs = seconds % 60;
// // // // // // //     return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div style={{ width: "100%" }}>
// // // // // // //       <div style={{ width: "100%" }}>
// // // // // // //         <div style={{ marginBottom: "5px" }}>
// // // // // // //           <label
// // // // // // //             htmlFor={name}
// // // // // // //             className="input-heading12"
// // // // // // //             style={{ fontSize: "15px", fontWeight: "450" }}
// // // // // // //           >
// // // // // // //             {label}
// // // // // // //           </label>
// // // // // // //         </div>

// // // // // // //         <div style={{ position: "relative", width: "100%" }}>
// // // // // // //           {!isOtpSent && !isVerified && (
// // // // // // //             <>
// // // // // // //               <Field
// // // // // // //                 id={name}
// // // // // // //                 name={name}
// // // // // // //                 type={inputType || "text"}
// // // // // // //                 placeholder={custPlaceholder || "Enter Email"}
// // // // // // //                 {...rest}
// // // // // // //                 style={{
// // // // // // //                   width: "calc(100% - 100px)",
// // // // // // //                   boxSizing: "border-box",
// // // // // // //                   height: "35px",
// // // // // // //                   paddingLeft: "10px",
// // // // // // //                 }}
// // // // // // //                 className="custominput-field12"
// // // // // // //               />
// // // // // // //               <Button
// // // // // // //                 onClick={handleSendOtp}
// // // // // // //                 style={{
// // // // // // //                   position: "absolute",
// // // // // // //                   right: "0",
// // // // // // //                   top: "0",
// // // // // // //                   height: "35px",
// // // // // // //                   width: "100px",
// // // // // // //                   backgroundColor: "#1976d2",
// // // // // // //                   color: "white",
// // // // // // //                   borderRadius: "4px",
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 Send OTP
// // // // // // //               </Button>
// // // // // // //             </>
// // // // // // //           )}

// // // // // // //           {isOtpSent && (
// // // // // // //             <>
// // // // // // //               <div style={{ display: "flex", gap: "5px" }}>
// // // // // // //                 {otpValues.map((value, index) => (
// // // // // // //                   <input
// // // // // // //                     key={index}
// // // // // // //                     type="text"
// // // // // // //                     maxLength="1"
// // // // // // //                     value={value}
// // // // // // //                     onChange={(e) => handleOtpChange(index, e.target.value)}
// // // // // // //                     style={{
// // // // // // //                       width: "20%",
// // // // // // //                       height: "35px",
// // // // // // //                       textAlign: "center",
// // // // // // //                       border: "1px solid #ccc",
// // // // // // //                       borderRadius: "4px",
// // // // // // //                     }}
// // // // // // //                   />
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //               <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
// // // // // // //                 <span style={{ marginRight: "10px", color: "#555" }}>{formatTime(timer)}</span>
// // // // // // //                 <Button
// // // // // // //                   onClick={handleVerify}
// // // // // // //                   style={{
// // // // // // //                     backgroundColor: "#1976d2",
// // // // // // //                     color: "white",
// // // // // // //                     borderRadius: "4px",
// // // // // // //                     height: "35px",
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   Verify
// // // // // // //                 </Button>
// // // // // // //               </div>
// // // // // // //             </>
// // // // // // //           )}

// // // // // // //           {isVerified && (
// // // // // // //             <div style={{ position: "relative" }}>
// // // // // // //               <Field
// // // // // // //                 id={name}
// // // // // // //                 name={name}
// // // // // // //                 type={inputType || "text"}
// // // // // // //                 value={"user@example.com"} // Replace with actual email value
// // // // // // //                 readOnly
// // // // // // //                 style={{
// // // // // // //                   width: "calc(100% - 40px)",
// // // // // // //                   boxSizing: "border-box",
// // // // // // //                   height: "35px",
// // // // // // //                   paddingLeft: "10px",
// // // // // // //                 }}
// // // // // // //                 className="custominput-field12"
// // // // // // //               />
// // // // // // //               <InputAdornment
// // // // // // //                 position="end"
// // // // // // //                 style={{
// // // // // // //                   position: "absolute",
// // // // // // //                   right: "10px",
// // // // // // //                   top: "50%",
// // // // // // //                   transform: "translateY(-50%)",
// // // // // // //                   color: "green",
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 <CheckCircle />
// // // // // // //               </InputAdornment>
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>

// // // // // // //         <ErrorMessage
// // // // // // //           name={name}
// // // // // // //           component="div"
// // // // // // //           className="inputs-error-msg"
// // // // // // //           style={{ color: "red" }}
// // // // // // //         />
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default CustomEmailVerifyInput;

// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import "../CustomInputLogin/CustomInputLogin.css";
// // // // // // import "../ComponentsCss/componet.css";
// // // // // // import { Field, ErrorMessage } from "formik";
// // // // // // import { InputAdornment, Button } from "@mui/material";
// // // // // // import { Email, CheckCircle } from "@mui/icons-material";

// // // // // // const CustomInputLogin = ({ label, name, custPlaceholder, image, inputType, emailValue, ...rest }) => {
// // // // // //   const [isOtpSent, setIsOtpSent] = useState(false);
// // // // // //   const [otpValues, setOtpValues] = useState(["", "", "", ""]);
// // // // // //   const [timer, setTimer] = useState(300); // 5 minutes in seconds
// // // // // //   const [isVerified, setIsVerified] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     let countdown;
// // // // // //     if (isOtpSent && timer > 0) {
// // // // // //       countdown = setInterval(() => {
// // // // // //         setTimer((prev) => prev - 1);
// // // // // //       }, 1000);
// // // // // //     } else if (timer === 0) {
// // // // // //       clearInterval(countdown);
// // // // // //     }
// // // // // //     return () => clearInterval(countdown);
// // // // // //   }, [isOtpSent, timer]);

// // // // // //   const handleSendOtp = () => {
// // // // // //     setIsOtpSent(true);
// // // // // //     setTimer(300); // Reset timer to 5 minutes
// // // // // //   };

// // // // // //   const handleVerify = () => {
// // // // // //     // Dummy verification logic
// // // // // //     if (otpValues.every((val) => val === "1")) {
// // // // // //       setIsVerified(true);
// // // // // //       setIsOtpSent(false);
// // // // // //     } else {
// // // // // //       alert("Incorrect OTP. Please try again.");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleOtpChange = (index, value) => {
// // // // // //     if (/[^0-9]/.test(value)) return; // Allow only numbers

// // // // // //     const updatedOtp = [...otpValues];
// // // // // //     updatedOtp[index] = value;
// // // // // //     setOtpValues(updatedOtp);

// // // // // //     if (value && index < otpValues.length - 1) {
// // // // // //       document.getElementById(`otp-${index + 1}`).focus();
// // // // // //     }
// // // // // //   };

// // // // // //   const handleKeyDown = (index, e) => {
// // // // // //     if (e.key === "Backspace" && otpValues[index] === "") {
// // // // // //       if (index > 0) {
// // // // // //         document.getElementById(`otp-${index - 1}`).focus();
// // // // // //       }
// // // // // //     }
// // // // // //   };

// // // // // //   const formatTime = (seconds) => {
// // // // // //     const minutes = Math.floor(seconds / 60);
// // // // // //     const secs = seconds % 60;
// // // // // //     return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={{ width: "100%" }}>
// // // // // //       <div style={{ width: "100%" }}>
// // // // // //         <div style={{ marginBottom: "5px" }}>
// // // // // //           <label
// // // // // //             htmlFor={name}
// // // // // //             className="input-heading12"
// // // // // //             style={{ fontSize: "15px", fontWeight: "450" }}
// // // // // //           >
// // // // // //             {label}
// // // // // //           </label>
// // // // // //         </div>

// // // // // //         <div style={{ position: "relative", width: "100%" }}>
// // // // // //           {!isOtpSent && !isVerified && (
// // // // // //             <>
// // // // // //               <Field
// // // // // //                 id={name}
// // // // // //                 name={name}
// // // // // //                 type={inputType || "text"}
// // // // // //                 placeholder={custPlaceholder || "Enter Email"}
// // // // // //                 {...rest}
// // // // // //                 style={{
// // // // // //                   width: "calc(100% - 100px)",
// // // // // //                   boxSizing: "border-box",
// // // // // //                   height: "35px",
// // // // // //                   paddingLeft: "10px",
// // // // // //                 }}
// // // // // //                 className="custominput-field12"
// // // // // //               />
// // // // // //               <Button
// // // // // //                 onClick={handleSendOtp}
// // // // // //                 style={{
// // // // // //                   position: "absolute",
// // // // // //                   right: "0",
// // // // // //                   top: "0",
// // // // // //                   height: "35px",
// // // // // //                   width: "100px",
// // // // // //                   backgroundColor: "#1976d2",
// // // // // //                   color: "white",
// // // // // //                   borderRadius: "4px",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 Send OTP
// // // // // //               </Button>
// // // // // //             </>
// // // // // //           )}

// // // // // //           {isOtpSent && (
// // // // // //             <>
// // // // // //               <div style={{ display: "flex", gap: "5px" }}>
// // // // // //                 {otpValues.map((value, index) => (
// // // // // //                   <input
// // // // // //                     key={index}
// // // // // //                     id={`otp-${index}`}
// // // // // //                     type="text"
// // // // // //                     maxLength="1"
// // // // // //                     value={value}
// // // // // //                     onChange={(e) => handleOtpChange(index, e.target.value)}
// // // // // //                     onKeyDown={(e) => handleKeyDown(index, e)}
// // // // // //                     style={{
// // // // // //                       width: "20%",
// // // // // //                       height: "35px",
// // // // // //                       textAlign: "center",
// // // // // //                       border: "1px solid #ccc",
// // // // // //                       borderRadius: "4px",
// // // // // //                     }}
// // // // // //                   />
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //               <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
// // // // // //                 <span style={{ marginRight: "10px", color: "#555" }}>{formatTime(timer)}</span>
// // // // // //                 <Button
// // // // // //                   onClick={handleVerify}
// // // // // //                   style={{
// // // // // //                     backgroundColor: "#1976d2",
// // // // // //                     color: "white",
// // // // // //                     borderRadius: "4px",
// // // // // //                     height: "35px",
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   Verify
// // // // // //                 </Button>
// // // // // //               </div>
// // // // // //             </>
// // // // // //           )}

// // // // // //           {isVerified && (
// // // // // //             <div style={{ position: "relative" }}>
// // // // // //               <Field
// // // // // //                 id={name}
// // // // // //                 name={name}
// // // // // //                 type={inputType || "text"}
// // // // // //                 value={emailValue || ""} // Dynamic email value
// // // // // //                 readOnly
// // // // // //                 style={{
// // // // // //                   width: "calc(100% - 40px)",
// // // // // //                   boxSizing: "border-box",
// // // // // //                   height: "35px",
// // // // // //                   paddingLeft: "10px",
// // // // // //                 }}
// // // // // //                 className="custominput-field12"
// // // // // //               />
// // // // // //               <InputAdornment
// // // // // //                 position="end"
// // // // // //                 style={{
// // // // // //                   position: "absolute",
// // // // // //                   right: "10px",
// // // // // //                   top: "50%",
// // // // // //                   transform: "translateY(-50%)",
// // // // // //                   color: "green",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 <CheckCircle />
// // // // // //               </InputAdornment>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         <ErrorMessage
// // // // // //           name={name}
// // // // // //           component="div"
// // // // // //           className="inputs-error-msg"
// // // // // //           style={{ color: "red" }}
// // // // // //         />
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CustomInputLogin;

// // // // // import React, { useState, useEffect } from "react";
// // // // // import "../CustomInputLogin/CustomInputLogin.css";
// // // // // import "../ComponentsCss/componet.css";
// // // // // import { Field, ErrorMessage } from "formik";
// // // // // import { InputAdornment, Button } from "@mui/material";
// // // // // import { Email, CheckCircle } from "@mui/icons-material";

// // // // // const CustomEmailVerifyInput = ({ label, name, custPlaceholder, image, inputType, ...rest }) => {
// // // // //   const [isOtpSent, setIsOtpSent] = useState(false);
// // // // //   const [otpValues, setOtpValues] = useState(["", "", "", ""]);
// // // // //   const [timer, setTimer] = useState(300); // 5 minutes in seconds
// // // // //   const [isVerified, setIsVerified] = useState(false);
// // // // //   const [verifiedEmail, setVerifiedEmail] = useState(""); // State to store verified email
// // // // //   console.log(verifiedEmail,"verifiedEmailverifiedEmail")

// // // // //   useEffect(() => {
// // // // //     let countdown;
// // // // //     if (isOtpSent && timer > 0) {
// // // // //       countdown = setInterval(() => {
// // // // //         setTimer((prev) => prev - 1);
// // // // //       }, 1000);
// // // // //     } else if (timer === 0) {
// // // // //       clearInterval(countdown);
// // // // //     }
// // // // //     return () => clearInterval(countdown);
// // // // //   }, [isOtpSent, timer]);

// // // // //   const handleSendOtp = () => {
// // // // //     setIsOtpSent(true);
// // // // //     setTimer(300); // Reset timer to 5 minutes
// // // // //   };

// // // // //   const handleVerify = () => {
// // // // //     // Dummy verification logic
// // // // //     if (otpValues.every((val) => val === "1")) {
// // // // //       setIsVerified(true);
// // // // //       setIsOtpSent(false);
// // // // //       setVerifiedEmail(verifiedEmail); // Set verified email dynamically
// // // // //     } else {
// // // // //       alert("Incorrect OTP. Please try again.");
// // // // //     }
// // // // //   };

// // // // //   const handleOtpChange = (index, value) => {
// // // // //     if (/[^0-9]/.test(value)) return; // Allow only numbers

// // // // //     const updatedOtp = [...otpValues];
// // // // //     updatedOtp[index] = value;
// // // // //     setOtpValues(updatedOtp);

// // // // //     if (value && index < otpValues.length - 1) {
// // // // //       document.getElementById(`otp-${index + 1}`).focus();
// // // // //     }
// // // // //   };

// // // // //   const handleKeyDown = (index, e) => {
// // // // //     if (e.key === "Backspace" && otpValues[index] === "") {
// // // // //       if (index > 0) {
// // // // //         document.getElementById(`otp-${index - 1}`).focus();
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   const formatTime = (seconds) => {
// // // // //     const minutes = Math.floor(seconds / 60);
// // // // //     const secs = seconds % 60;
// // // // //     return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ width: "100%" }}>
// // // // //       <div style={{ width: "100%" }}>
// // // // //         <div style={{ marginBottom: "5px" }}>
// // // // //           <label
// // // // //             htmlFor={name}
// // // // //             className="input-heading12"
// // // // //             style={{ fontSize: "15px", fontWeight: "450" }}
// // // // //           >
// // // // //             {label}
// // // // //           </label>
// // // // //         </div>

// // // // //         <div style={{ position: "relative", width: "100%" }}>
// // // // //           {!isOtpSent && !isVerified && (
// // // // //             <>
// // // // //               <Field
// // // // //                 id={name}
// // // // //                 name={name}
// // // // //                 type={inputType || "text"}
// // // // //                 placeholder={custPlaceholder || "Enter Email"}
// // // // //                 {...rest}
// // // // //                 style={{
// // // // //                   width: "calc(100% - 100px)",
// // // // //                   boxSizing: "border-box",
// // // // //                   height: "35px",
// // // // //                   paddingLeft: "10px",
// // // // //                 }}
// // // // //                 className="custominput-field12"
// // // // //               />
// // // // //               <Button
// // // // //                 onClick={handleSendOtp}
// // // // //                 style={{
// // // // //                   position: "absolute",
// // // // //                   right: "0",
// // // // //                   top: "0",
// // // // //                   height: "35px",
// // // // //                   width: "100px",
// // // // //                   backgroundColor: "#1976d2",
// // // // //                   color: "white",
// // // // //                   borderRadius: "4px",
// // // // //                 }}
// // // // //               >
// // // // //                 Send OTP
// // // // //               </Button>
// // // // //             </>
// // // // //           )}

// // // // //           {isOtpSent && (
// // // // //             <>
// // // // //               <div style={{ display: "flex", gap: "5px" }}>
// // // // //                 {otpValues.map((value, index) => (
// // // // //                   <input
// // // // //                     key={index}
// // // // //                     id={`otp-${index}`}
// // // // //                     type="text"
// // // // //                     maxLength="1"
// // // // //                     value={value}
// // // // //                     onChange={(e) => handleOtpChange(index, e.target.value)}
// // // // //                     onKeyDown={(e) => handleKeyDown(index, e)}
// // // // //                     style={{
// // // // //                       width: "20%",
// // // // //                       height: "35px",
// // // // //                       textAlign: "center",
// // // // //                       border: "1px solid #ccc",
// // // // //                       borderRadius: "4px",
// // // // //                     }}
// // // // //                   />
// // // // //                 ))}
// // // // //               </div>
// // // // //               <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
// // // // //                 <span style={{ marginRight: "10px", color: "#555" }}>{formatTime(timer)}</span>
// // // // //                 <Button
// // // // //                   onClick={handleVerify}
// // // // //                   style={{
// // // // //                     backgroundColor: "#1976d2",
// // // // //                     color: "white",
// // // // //                     borderRadius: "4px",
// // // // //                     height: "35px",
// // // // //                   }}
// // // // //                 >
// // // // //                   Verify
// // // // //                 </Button>
// // // // //               </div>
// // // // //             </>
// // // // //           )}

// // // // //           {isVerified && (
// // // // //             <div style={{ position: "relative" }}>
// // // // //               <Field
// // // // //                 id={name}
// // // // //                 name={name}
// // // // //                 type={inputType || "text"}
// // // // //                 value={verifiedEmail || ""}
// // // // //                 readOnly
// // // // //                 style={{
// // // // //                   width: "calc(100% - 40px)",
// // // // //                   boxSizing: "border-box",
// // // // //                   height: "35px",
// // // // //                   paddingLeft: "10px",
// // // // //                 }}
// // // // //                 className="custominput-field12"
// // // // //               />
// // // // //               <InputAdornment
// // // // //                 position="end"
// // // // //                 style={{
// // // // //                   position: "absolute",
// // // // //                   right: "10px",
// // // // //                   top: "50%",
// // // // //                   transform: "translateY(-50%)",
// // // // //                   color: "green",
// // // // //                 }}
// // // // //               >
// // // // //                 <CheckCircle />
// // // // //               </InputAdornment>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>

// // // // //         <ErrorMessage
// // // // //           name={name}
// // // // //           component="div"
// // // // //           className="inputs-error-msg"
// // // // //           style={{ color: "red" }}
// // // // //         />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CustomEmailVerifyInput;

// // // // import React, { useState, useEffect } from "react";
// // // // import "../CustomInputLogin/CustomInputLogin.css";
// // // // import "../ComponentsCss/componet.css";
// // // // import { Field, ErrorMessage } from "formik";
// // // // import { InputAdornment, Button } from "@mui/material";
// // // // import { Email, CheckCircle } from "@mui/icons-material";

// // // // const CustomEmailVerifyInput = ({ label, name, custPlaceholder, image, inputType, ...rest }) => {
// // // //     const [isOtpSent, setIsOtpSent] = useState(false);
// // // //     const [otpValues, setOtpValues] = useState(["", "", "", ""]);
// // // //     const [timer, setTimer] = useState(300); // 5 minutes in seconds
// // // //     const [isVerified, setIsVerified] = useState(false);
// // // //     const [emailInput, setEmailInput] = useState(""); // Track email input

// // // //     useEffect(() => {
// // // //         let countdown;
// // // //         if (isOtpSent && timer > 0) {
// // // //             countdown = setInterval(() => {
// // // //                 setTimer((prev) => prev - 1);
// // // //             }, 1000);
// // // //         } else if (timer === 0) {
// // // //             clearInterval(countdown);
// // // //         }
// // // //         return () => clearInterval(countdown);
// // // //     }, [isOtpSent, timer]);

// // // //     const handleSendOtp = () => {
// // // //         setIsOtpSent(true);
// // // //         setTimer(300); // Reset timer to 5 minutes
// // // //     };

// // // //     const handleVerify = () => {
// // // //         // Dummy verification logic
// // // //         if (otpValues.every((val) => val === "1")) {
// // // //             setIsVerified(true);
// // // //             setIsOtpSent(false);
// // // //         } else {
// // // //             alert("Incorrect OTP. Please try again.");
// // // //         }
// // // //     };

// // // //     const handleResend = () => {
// // // //         setTimer(60); // Reset the timer to 60 seconds (or your desired duration)
// // // //         handleSendOtp();  // Function to resend the OTP
// // // //     };

// // // //     const handleOtpChange = (index, value) => {
// // // //         if (/[^0-9]/.test(value)) return; // Allow only numbers

// // // //         const updatedOtp = [...otpValues];
// // // //         updatedOtp[index] = value;
// // // //         setOtpValues(updatedOtp);

// // // //         if (value && index < otpValues.length - 1) {
// // // //             document.getElementById(`otp-${index + 1}`).focus();
// // // //         }
// // // //     };

// // // //     const handleKeyDown = (index, e) => {
// // // //         if (e.key === "Backspace" && otpValues[index] === "") {
// // // //             if (index > 0) {
// // // //                 document.getElementById(`otp-${index - 1}`).focus();
// // // //             }
// // // //         }
// // // //     };

// // // //     const formatTime = (seconds) => {
// // // //         const minutes = Math.floor(seconds / 60);
// // // //         const secs = seconds % 60;
// // // //         return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
// // // //     };

// // // //     return (
// // // //         <div style={{ width: "100%" }}>
// // // //             <div style={{ width: "100%" }}>
// // // //                 <div style={{ marginBottom: "5px" }}>
// // // //                     <label
// // // //                         htmlFor={name}
// // // //                         className="input-heading12"
// // // //                         style={{ fontSize: "15px", fontWeight: "450" }}
// // // //                     >
// // // //                         {label}{!isOtpSent &(<div>valla</div>)}
// // // //                     </label>
// // // //                 </div>

// // // //                 <div style={{ position: "relative", width: "100%" }}>
// // // //                     {!isOtpSent && !isVerified && (
// // // //                         <>
// // // //                             <Field
// // // //                                 id={name}
// // // //                                 name={name}
// // // //                                 type={inputType || "text"}
// // // //                                 placeholder={custPlaceholder || "Enter Email"}
// // // //                                 value={emailInput} // Bind value to state
// // // //                                 onChange={(e) => setEmailInput(e.target.value)} // Update state on change
// // // //                                 {...rest}
// // // //                                 style={{
// // // //                                     //   width: "calc(100% - 100px)",
// // // //                                     width: "100%",

// // // //                                     boxSizing: "border-box",
// // // //                                     height: "35px",
// // // //                                     paddingLeft: "10px",
// // // //                                 }}
// // // //                                 className="custominput-field12"
// // // //                             />
// // // //                             <Button
// // // //                                 onClick={handleSendOtp}
// // // //                                 style={{
// // // //                                     textTransform: "none",
// // // //                                     fontSize: "10px",

// // // //                                     position: "absolute",
// // // //                                     right: "10px",
// // // //                                     fontSize: "10px",
// // // //                                     top: "5px",
// // // //                                     height: "25px",
// // // //                                     width: "70px",
// // // //                                     backgroundColor: "#C38F51",
// // // //                                     color: "white",
// // // //                                     borderRadius: "23px",
// // // //                                 }}
// // // //                             >
// // // //                                 Send OTP
// // // //                             </Button>
// // // //                         </>
// // // //                     )}

// // // //                     {isOtpSent && (
// // // //                         <>
// // // //                             <div style={{ display: "flex", gap: "5px", alignItems: "center", justifyContent: "space-around" }}>
// // // //                                 {otpValues.map((value, index) => (
// // // //                                     <input
// // // //                                         key={index}
// // // //                                         id={`otp-${index}`}
// // // //                                         type="text"
// // // //                                         maxLength="1"
// // // //                                         value={value}
// // // //                                         onChange={(e) => handleOtpChange(index, e.target.value)}
// // // //                                         onKeyDown={(e) => handleKeyDown(index, e)}
// // // //                                         style={{
// // // //                                             width: "25%",
// // // //                                             height: "35px",
// // // //                                             textAlign: "center",
// // // //                                             border: "1px solid #ccc",
// // // //                                             borderRadius: "4px",
// // // //                                         }}
// // // //                                     />
// // // //                                 ))}
// // // //                                 <div style={{
// // // //                                     display: "flex", alignItems: "center", flexDirection: "column",justifyContent:"end",
// // // //                                     width: "100%"
// // // //                                 }}>
// // // //                                     {timer > 0 ? (
// // // //                                         <>
// // // //                                             <span style={{ color: "#555",fontSize:"10px",textAlign:"center" }}>
// // // //                                                 Resend <span>{formatTime(timer)}</span>
// // // //                                             </span>
// // // //                                             <Button
// // // //                                                 onClick={handleVerify}
// // // //                                                 style={{
// // // //                                                     textTransform: "none",
// // // //                                                     fontSize: "10px",
// // // //                                                     height: "25px",
// // // //                                                     width: "70px",
// // // //                                                     backgroundColor: "#C38F51",
// // // //                                                     color: "white",
// // // //                                                     borderRadius: "23px",
// // // //                                                 }}
// // // //                                             >
// // // //                                                 Verify
// // // //                                             </Button>
// // // //                                         </>
// // // //                                     ) : (
// // // //                                         <Button
// // // //                                             onClick={handleResend}
// // // //                                             style={{
// // // //                                                 textTransform: "none",
// // // //                                                 fontSize: "10px",
// // // //                                                 height: "25px",
// // // //                                                 width: "70px",
// // // //                                                 backgroundColor: "#C38F51",
// // // //                                                 color: "white",
// // // //                                                 borderRadius: "23px",
// // // //                                             }}
// // // //                                         >
// // // //                                             Resend
// // // //                                         </Button>
// // // //                                     )}
// // // //                                 </div>
// // // //                             </div>
// // // //                         </>
// // // //                     )}

// // // //                     {isVerified && (
// // // //                         <div style={{ position: "relative" }}>
// // // //                             <Field
// // // //                                 id={name}
// // // //                                 name={name}
// // // //                                 type={inputType || "text"}
// // // //                                 value={emailInput} // Show the latest email input value
// // // //                                 readOnly
// // // //                                 style={{
// // // //                                     width: "calc(100% - 40px)",
// // // //                                     boxSizing: "border-box",
// // // //                                     height: "35px",
// // // //                                     paddingLeft: "10px",
// // // //                                 }}
// // // //                                 className="custominput-field12"
// // // //                             />
// // // //                             <InputAdornment
// // // //                                 position="end"
// // // //                                 style={{
// // // //                                     position: "absolute",
// // // //                                     right: "10px",
// // // //                                     top: "50%",
// // // //                                     transform: "translateY(-50%)",
// // // //                                     color: "green",
// // // //                                 }}
// // // //                             >
// // // //                                 <CheckCircle />
// // // //                             </InputAdornment>
// // // //                         </div>
// // // //                     )}
// // // //                 </div>

// // // //                 <ErrorMessage
// // // //                     name={name}
// // // //                     component="div"
// // // //                     className="inputs-error-msg"
// // // //                     style={{ color: "red" }}
// // // //                 />
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default CustomEmailVerifyInput;

// // // import React, { useState, useEffect } from "react";
// // // import "../CustomInputLogin/CustomInputLogin.css";
// // // import "../ComponentsCss/componet.css";
// // // import { Field, ErrorMessage } from "formik";
// // // import { InputAdornment, Button } from "@mui/material";
// // // import { Email, CheckCircle } from "@mui/icons-material";

// // // const CustomEmailVerifyInput = ({ label, name, custPlaceholder, image, inputType, ...rest }) => {
// // //     const [isOtpSent, setIsOtpSent] = useState(false);
// // //     const [otpValues, setOtpValues] = useState(["", "", "", ""]);
// // //     const [timer, setTimer] = useState(300); // 5 minutes in seconds
// // //     const [isVerified, setIsVerified] = useState(false);
// // //     const [emailInput, setEmailInput] = useState(""); // Track email input

// // //     useEffect(() => {
// // //         let countdown;
// // //         if (isOtpSent && timer > 0) {
// // //             countdown = setInterval(() => {
// // //                 setTimer((prev) => prev - 1);
// // //             }, 1000);
// // //         } else if (timer === 0) {
// // //             clearInterval(countdown);
// // //         }
// // //         return () => clearInterval(countdown);
// // //     }, [isOtpSent, timer]);

// // //     const handleSendOtp = () => {
// // //         if (emailInput.trim() === "") {
// // //             alert("Please enter a valid email.");
// // //             return;
// // //         }
// // //         setIsOtpSent(true);
// // //         setTimer(300); // Reset timer to 5 minutes
// // //     };

// // //     const handleVerify = () => {
// // //         // Dummy verification logic
// // //         if (otpValues.every((val) => val === "1")) {
// // //             setIsVerified(true);
// // //             setIsOtpSent(false);
// // //         } else {
// // //             alert("Incorrect OTP. Please try again.");
// // //         }
// // //     };

// // //     const handleResend = () => {
// // //         setTimer(60); // Reset the timer to 60 seconds (or your desired duration)
// // //         handleSendOtp();  // Function to resend the OTP
// // //     };

// // //     const handleOtpChange = (index, value) => {
// // //         if (/[^0-9]/.test(value)) return; // Allow only numbers

// // //         const updatedOtp = [...otpValues];
// // //         updatedOtp[index] = value;
// // //         setOtpValues(updatedOtp);

// // //         if (value && index < otpValues.length - 1) {
// // //             document.getElementById(`otp-${index + 1}`).focus();
// // //         }
// // //     };

// // //     const handleKeyDown = (index, e) => {
// // //         if (e.key === "Backspace" && otpValues[index] === "") {
// // //             if (index > 0) {
// // //                 document.getElementById(`otp-${index - 1}`).focus();
// // //             }
// // //         }
// // //     };

// // //     const formatTime = (seconds) => {
// // //         const minutes = Math.floor(seconds / 60);
// // //         const secs = seconds % 60;
// // //         return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
// // //     };

// // //     return (
// // //         <div style={{ width: "100%" }}>
// // //             <div style={{ width: "100%" }}>
// // //                 <div style={{ marginBottom: "5px", display: "flex", alignItems: "center" }}>
// // //                     <label
// // //                         htmlFor={name}
// // //                         className="input-heading12"
// // //                         style={{ fontSize: "15px", fontWeight: "450", marginRight: "10px" }}
// // //                     >
// // //                         {label}
// // //                     </label>
// // //                     {isOtpSent && (
// // //                         <span style={{ fontSize: "12px", color: "#555" }}>
// // //                             {emailInput}
// // //                         </span>
// // //                     )}
// // //                 </div>

// // //                 <div style={{ position: "relative", width: "100%" }}>
// // //                     {!isOtpSent && !isVerified && (
// // //                         <>
// // //                             <Field
// // //                                 id={name}
// // //                                 name={name}
// // //                                 type={inputType || "text"}
// // //                                 placeholder={custPlaceholder || "Enter Email"}
// // //                                 value={emailInput} // Bind value to state
// // //                                 onChange={(e) => setEmailInput(e.target.value)} // Update state on change
// // //                                 {...rest}
// // //                                 style={{
// // //                                     width: "100%",
// // //                                     boxSizing: "border-box",
// // //                                     height: "35px",
// // //                                     paddingLeft: "10px",
// // //                                 }}
// // //                                 className="custominput-field12"
// // //                             />
// // //                             <Button
// // //                                 onClick={handleSendOtp}
// // //                                 style={{
// // //                                     textTransform: "none",
// // //                                     fontSize: "10px",
// // //                                     position: "absolute",
// // //                                     right: "10px",
// // //                                     top: "5px",
// // //                                     height: "25px",
// // //                                     width: "70px",
// // //                                     backgroundColor: "#C38F51",
// // //                                     color: "white",
// // //                                     borderRadius: "23px",
// // //                                 }}
// // //                             >
// // //                                 Send OTP
// // //                             </Button>
// // //                         </>
// // //                     )}

// // //                     {isOtpSent && (
// // //                         <>
// // //                             <div style={{ display: "flex", gap: "5px", alignItems: "center", justifyContent: "space-around" }}>
// // //                                 {otpValues.map((value, index) => (
// // //                                     <input
// // //                                         key={index}
// // //                                         id={`otp-${index}`}
// // //                                         type="text"
// // //                                         maxLength="1"
// // //                                         value={value}
// // //                                         onChange={(e) => handleOtpChange(index, e.target.value)}
// // //                                         onKeyDown={(e) => handleKeyDown(index, e)}
// // //                                         style={{
// // //                                             width: "25%",
// // //                                             height: "35px",
// // //                                             textAlign: "center",
// // //                                             border: "1px solid #ccc",
// // //                                             borderRadius: "4px",
// // //                                         }}
// // //                                     />
// // //                                 ))}
// // //                                 <div style={{
// // //                                     display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "end",
// // //                                     width: "100%"
// // //                                 }}>
// // //                                     {timer > 0 ? (
// // //                                         <>
// // //                                             <span style={{ color: "#555", fontSize: "10px", textAlign: "center" }}>
// // //                                                 Resend <span>{formatTime(timer)}</span>
// // //                                             </span>
// // //                                             <Button
// // //                                                 onClick={handleVerify}
// // //                                                 style={{
// // //                                                     textTransform: "none",
// // //                                                     fontSize: "10px",
// // //                                                     height: "25px",
// // //                                                     width: "70px",
// // //                                                     backgroundColor: "#C38F51",
// // //                                                     color: "white",
// // //                                                     borderRadius: "23px",
// // //                                                 }}
// // //                                             >
// // //                                                 Verify
// // //                                             </Button>
// // //                                         </>
// // //                                     ) : (
// // //                                         <Button
// // //                                             onClick={handleResend}
// // //                                             style={{
// // //                                                 textTransform: "none",
// // //                                                 fontSize: "10px",
// // //                                                 height: "25px",
// // //                                                 width: "70px",
// // //                                                 backgroundColor: "#C38F51",
// // //                                                 color: "white",
// // //                                                 borderRadius: "23px",
// // //                                             }}
// // //                                         >
// // //                                             Resend
// // //                                         </Button>
// // //                                     )}
// // //                                 </div>
// // //                             </div>
// // //                         </>
// // //                     )}

// // //                     {isVerified && (
// // //                         <div style={{ position: "relative" }}>
// // //                             <Field
// // //                                 id={name}
// // //                                 name={name}
// // //                                 type={inputType || "text"}
// // //                                 value={emailInput} // Show the latest email input value
// // //                                 readOnly
// // //                                 style={{
// // //                                     width: "100%",
// // //                                     boxSizing: "border-box",
// // //                                     height: "35px",
// // //                                     paddingLeft: "10px",
// // //                                 }}
// // //                                 className="custominput-field12"
// // //                             />
// // //                             <InputAdornment
// // //                                 position="end"
// // //                                 style={{
// // //                                     position: "absolute",
// // //                                     right: "10px",
// // //                                     top: "50%",
// // //                                     transform: "translateY(-50%)",
// // //                                     color: "green",
// // //                                 }}
// // //                             >
// // //                                 <CheckCircle />
// // //                             </InputAdornment>
// // //                         </div>
// // //                     )}
// // //                 </div>

// // //                 <ErrorMessage
// // //                     name={name}
// // //                     component="div"
// // //                     className="inputs-error-msg"
// // //                     style={{ color: "red" }}
// // //                 />
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default CustomEmailVerifyInput;

// // import React, { useState, useEffect } from "react";
// // import "../CustomInputLogin/CustomInputLogin.css";
// // import "../ComponentsCss/componet.css";
// // import { Field, ErrorMessage } from "formik";
// // import { InputAdornment, Button } from "@mui/material";
// // import { Email, CheckCircle } from "@mui/icons-material";

// // const CustomEmailVerifyInput = ({ label, name, custPlaceholder, image, inputType, setFieldValue, ...rest }) => {
// //     const [isOtpSent, setIsOtpSent] = useState(false);
// //     const [otpValues, setOtpValues] = useState(["", "", "", ""]);
// //     const [timer, setTimer] = useState(300); // 5 minutes in seconds
// //     const [isVerified, setIsVerified] = useState(false);
// //     const [emailInput, setEmailInput] = useState(""); // Track email input

// //     useEffect(() => {
// //         let countdown;
// //         if (isOtpSent && timer > 0) {
// //             countdown = setInterval(() => {
// //                 setTimer((prev) => prev - 1);
// //             }, 1000);
// //         } else if (timer === 0) {
// //             clearInterval(countdown);
// //         }
// //         return () => clearInterval(countdown);
// //     }, [isOtpSent, timer]);

// //     const handleSendOtp = () => {
// //         if (emailInput.trim() === "") {
// //             alert("Please enter a valid email.");
// //             return;
// //         }
// //         setIsOtpSent(true);
// //         setTimer(300); // Reset timer to 5 minutes
// //         // setFieldValue(name, emailInput); // Update Formik's state with the email value
// //         setFieldValue(name, emailInput);
// //     };

// //     const handleVerify = () => {
// //         // Dummy verification logic
// //         if (otpValues.every((val) => val === "1")) {
// //             setIsVerified(true);
// //             setIsOtpSent(false);
// //         } else {
// //             alert("Incorrect OTP. Please try again.");
// //         }
// //     };

// //     const handleResend = () => {
// //         setTimer(60); // Reset the timer to 60 seconds (or your desired duration)
// //         handleSendOtp();  // Function to resend the OTP
// //     };

// //     const handleOtpChange = (index, value) => {
// //         if (/[^0-9]/.test(value)) return; // Allow only numbers

// //         const updatedOtp = [...otpValues];
// //         updatedOtp[index] = value;
// //         setOtpValues(updatedOtp);

// //         if (value && index < otpValues.length - 1) {
// //             document.getElementById(`otp-${index + 1}`).focus();
// //         }
// //     };

// //     const handleKeyDown = (index, e) => {
// //         if (e.key === "Backspace" && otpValues[index] === "") {
// //             if (index > 0) {
// //                 document.getElementById(`otp-${index - 1}`).focus();
// //             }
// //         }
// //     };

// //     const formatTime = (seconds) => {
// //         const minutes = Math.floor(seconds / 60);
// //         const secs = seconds % 60;
// //         return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
// //     };

// //     return (
// //         <div style={{ width: "100%" }}>
// //             <div style={{ width: "100%" }}>
// //                 <div style={{ marginBottom: "5px", display: "flex", alignItems: "center" }}>
// //                     <label
// //                         htmlFor={name}
// //                         className="input-heading12"
// //                         style={{ fontSize: "15px", fontWeight: "450", marginRight: "10px" }}
// //                     >
// //                         {label}
// //                     </label>
// //                     {isOtpSent && (
// //                         <span style={{ fontSize: "12px", color: "#555" }}>
// //                             {emailInput}
// //                         </span>
// //                     )}
// //                 </div>

// //                 <div style={{ position: "relative", width: "100%" }}>
// //                     {!isOtpSent && !isVerified && (
// //                         <>

// //                             <Field
// //                                 id={name}
// //                                 name={name}
// //                                 type={inputType || "text"}
// //                                 placeholder={custPlaceholder || "Enter Email"}
// //                                 {...rest}
// //                                 style={{
// //                                     width: "100%",
// //                                     boxSizing: "border-box",
// //                                     height: "35px",
// //                                     paddingLeft: "10px",
// //                                 }}
// //                                 className="custominput-field12"
// //                             />

// //                             <Button
// //                                 onClick={handleSendOtp}
// //                                 style={{
// //                                     textTransform: "none",
// //                                     fontSize: "10px",
// //                                     position: "absolute",
// //                                     right: "10px",
// //                                     top: "5px",
// //                                     height: "25px",
// //                                     width: "70px",
// //                                     backgroundColor: "#C38F51",
// //                                     color: "white",
// //                                     borderRadius: "23px",
// //                                 }}
// //                             >
// //                                 Send OTP
// //                             </Button>
// //                         </>
// //                     )}

// //                     {isOtpSent && (
// //                         <>
// //                             <div style={{ display: "flex", gap: "5px", alignItems: "center", justifyContent: "space-around" }}>
// //                                 {otpValues.map((value, index) => (
// //                                     <input
// //                                         key={index}
// //                                         id={`otp-${index}`}
// //                                         type="text"
// //                                         maxLength="1"
// //                                         value={value}
// //                                         onChange={(e) => handleOtpChange(index, e.target.value)}
// //                                         onKeyDown={(e) => handleKeyDown(index, e)}
// //                                         style={{
// //                                             width: "25%",
// //                                             height: "35px",
// //                                             textAlign: "center",
// //                                             border: "1px solid #ccc",
// //                                             borderRadius: "4px",
// //                                         }}
// //                                     />
// //                                 ))}
// //                                 <div style={{
// //                                     display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "end",
// //                                     width: "100%"
// //                                 }}>
// //                                     {timer > 0 ? (
// //                                         <>
// //                                             <span style={{ color: "#555", fontSize: "10px", textAlign: "center" }}>
// //                                                 Resend <span>{formatTime(timer)}</span>
// //                                             </span>
// //                                             <Button
// //                                                 onClick={handleVerify}
// //                                                 style={{
// //                                                     textTransform: "none",
// //                                                     fontSize: "10px",
// //                                                     height: "25px",
// //                                                     width: "70px",
// //                                                     backgroundColor: "#C38F51",
// //                                                     color: "white",
// //                                                     borderRadius: "23px",
// //                                                 }}
// //                                             >
// //                                                 Verify
// //                                             </Button>
// //                                         </>
// //                                     ) : (
// //                                         <Button
// //                                             onClick={handleResend}
// //                                             style={{
// //                                                 textTransform: "none",
// //                                                 fontSize: "10px",
// //                                                 height: "25px",
// //                                                 width: "70px",
// //                                                 backgroundColor: "#C38F51",
// //                                                 color: "white",
// //                                                 borderRadius: "23px",
// //                                             }}
// //                                         >
// //                                             Resend
// //                                         </Button>
// //                                     )}
// //                                 </div>
// //                             </div>
// //                         </>
// //                     )}

// //                     {isVerified && (
// //                         <div style={{ position: "relative" }}>
// //                             <Field
// //                                 id={name}
// //                                 name={name}
// //                                 type={inputType || "text"}
// //                                 value={emailInput} // Show the latest email input value

// //                                 readOnly
// //                                 style={{
// //                                     width: "100%",
// //                                     boxSizing: "border-box",
// //                                     height: "35px",
// //                                     paddingLeft: "10px",
// //                                 }}
// //                                 className="custominput-field12"
// //                             />
// //                             <InputAdornment
// //                                 position="end"
// //                                 style={{
// //                                     position: "absolute",
// //                                     right: "10px",
// //                                     top: "50%",
// //                                     transform: "translateY(-50%)",
// //                                     color: "green",
// //                                 }}
// //                             >
// //                                 <CheckCircle />
// //                             </InputAdornment>
// //                         </div>
// //                     )}
// //                 </div>

// //                 <ErrorMessage
// //                     name={name}
// //                     component="div"
// //                     className="inputs-error-msg"
// //                     style={{ color: "red" }}
// //                 />
// //             </div>
// //         </div>
// //     );
// // };

// // export default CustomEmailVerifyInput;

// // ===============

// // import React, { useState, useEffect } from "react";
// // import { Field, ErrorMessage, Formik, Form } from "formik";
// // import { InputAdornment, Button } from "@mui/material";
// // import { Email, CheckCircle } from "@mui/icons-material";
// // import { FaStarOfLife } from "react-icons/fa6";

// // const CustomEmailVerifyInput = ({ label, name, custPlaceholder, image, inp, setFieldValue ,important}) => {
// //     const [isOtpSent, setIsOtpSent] = useState(false);
// //     const [otpValues, setOtpValues] = useState(["", "", "", ""]);
// //     const [timer, setTimer] = useState(300); // 5 minutes in seconds
// //     const [isVerified, setIsVerified] = useState(false);
// //     const [emailInput, setEmailInput] = useState(""); // Track email input
// //     const [otpVerifiedError, setOtpVerifiedError] = useState(false); // Error state for OTP verification

// //     const handleSendOtp = () => {
// //         if (emailInput.trim() === "") {
// //             alert("Please enter a valid email.");
// //             return;
// //         }
// //         setIsOtpSent(true);
// //         setTimer(300); // Reset timer to 5 minutes
// //     };

// //     const handleVerify = (handleSubmit) => {
// //         const enteredOtp = otpValues.join(""); // Combine all OTP input values into a single string
// //         if (enteredOtp === "1234") { // Compare with the manually set OTP
// //             setIsVerified(true);
// //             setFieldValue(name, emailInput); // Update Formik's state with the email value
// //             setIsOtpSent(false);
// //             setOtpVerifiedError(false); // Clear error after successful verification
// //             handleSubmit(); // Trigger form submission after verification
// //         } else {
// //             setOtpVerifiedError(true); // Set error if OTP is incorrect
// //             alert("Incorrect OTP. Please try again.");
// //         }
// //     };

// //     useEffect(() => {
// //         let countdown;
// //         if (isOtpSent && timer > 0) {
// //             countdown = setInterval(() => {
// //                 setTimer((prev) => prev - 1);
// //             }, 1000);
// //         } else if (timer === 0) {
// //             clearInterval(countdown);
// //         }
// //         return () => clearInterval(countdown);
// //     }, [isOtpSent, timer]);

// //     const handleResend = () => {
// //         setTimer(60); // Reset the timer to 60 seconds (or your desired duration)
// //         handleSendOtp();  // Function to resend the OTP
// //     };

// //     const handleOtpChange = (index, value) => {
// //         if (/[^0-9]/.test(value)) return; // Allow only numbers

// //         const updatedOtp = [...otpValues];
// //         updatedOtp[index] = value;
// //         setOtpValues(updatedOtp);

// //         if (value && index < otpValues.length - 1) {
// //             document.getElementById(`otp-${index + 1}`).focus();
// //         }
// //     };

// //     const handleKeyDown = (index, e) => {
// //         if (e.key === "Backspace" && otpValues[index] === "") {
// //             if (index > 0) {
// //                 document.getElementById(`otp-${index - 1}`).focus();
// //             }
// //         }
// //     };

// //     const formatTime = (seconds) => {
// //         const minutes = Math.floor(seconds / 60);
// //         const secs = seconds % 60;
// //         return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
// //     };

// //     return (
// //         <Formik
// //             initialValues={{ [name]: "", isVerified: false }}
// //             onSubmit={(values) => {
// //                 console.log("Form Submitted", values);
// //             }}
// //         >
// //             {({ handleSubmit }) => (
// //                 <Form onSubmit={handleSubmit}>
// //                     <div style={{ width: "100%" }}>
// //                         <div style={{ width: "100%" }}>
// //                             <div style={{ marginBottom: "5px", display: "flex", alignItems: "center" }}>
// //                                 <label
// //                                     htmlFor={name}
// //                                     className="input-heading12"
// //                                     style={{ fontSize: "15px", fontWeight: "450", marginRight: "10px" }}
// //                                 >
// //                                     {label}  {important && (
// //                                         <FaStarOfLife style={{ color: '#F53E5C', fontSize: "8px", marginLeft: "3px" }} />
// //                                     )}
// //                                 </label>
// //                                 {isOtpSent && (
// //                                     <span style={{ fontSize: "12px", color: "#555" }}>
// //                                         {emailInput}
// //                                     </span>
// //                                 )}
// //                             </div>

// //                             <div style={{ position: "relative", width: "100%" }}>
// //                                 {!isOtpSent && !isVerified && (
// //                                     <>
// //                                         <Field
// //                                             id={name}
// //                                             name={name}
// //                                             type="email"
// //                                             placeholder={custPlaceholder || "Enter Email"}
// //                                             value={emailInput} // Bind value to state
// //                                             onChange={(e) => setEmailInput(e.target.value)} // Update state on change
// //                                             style={{
// //                                                 borderRadius: "3px",
// //                                                 width: "100%",
// //                                                 boxSizing: "border-box",
// //                                                 height: "35px",
// //                                                 paddingLeft: "10px",
// //                                             }}
// //                                             className="custominput-field12"
// //                                         />
// //                                         <Button
// //                                             onClick={handleSendOtp}
// //                                             style={{
// //                                                 textTransform: "none",
// //                                                 fontSize: "10px",
// //                                                 position: "absolute",
// //                                                 right: "10px",
// //                                                 top: "5px",
// //                                                 height: "25px",
// //                                                 width: "70px",
// //                                                 backgroundColor: "#C38F51",
// //                                                 color: "white",
// //                                                 borderRadius: "23px",
// //                                             }}
// //                                         >
// //                                             Send OTP
// //                                         </Button>
// //                                     </>
// //                                 )}

// //                                 {isOtpSent && (
// //                                     <>
// //                                         <div style={{ display: "flex", gap: "5px", alignItems: "center", justifyContent: "space-around" }}>
// //                                             {otpValues.map((value, index) => (
// //                                                 <input
// //                                                     key={index}
// //                                                     id={`otp-${index}`}
// //                                                     type="text"
// //                                                     maxLength="1"
// //                                                     value={value}
// //                                                     onChange={(e) => handleOtpChange(index, e.target.value)}
// //                                                     onKeyDown={(e) => handleKeyDown(index, e)}
// //                                                     style={{
// //                                                         borderRadius: "3px",
// //                                                         width: "25%",
// //                                                         height: "35px",
// //                                                         textAlign: "center",
// //                                                         border: "1px solid #ccc",
// //                                                         borderRadius: "4px",
// //                                                     }}
// //                                                 />
// //                                             ))}
// //                                             <div style={{
// //                                                 display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "end",
// //                                                 width: "100%"
// //                                             }}>
// //                                                 {timer > 0 ? (
// //                                                     <>
// //                                                         <span style={{ color: "#555", fontSize: "10px", textAlign: "center" }}>
// //                                                             Resend <span>{formatTime(timer)}</span>
// //                                                         </span>
// //                                                         <Button
// //                                                             onClick={() => handleVerify(handleSubmit)}
// //                                                             style={{
// //                                                                 textTransform: "none",
// //                                                                 fontSize: "10px",
// //                                                                 height: "25px",
// //                                                                 width: "70px",
// //                                                                 backgroundColor: "#C38F51",
// //                                                                 color: "white",
// //                                                                 borderRadius: "23px",
// //                                                             }}
// //                                                         >
// //                                                             Verify
// //                                                         </Button>
// //                                                     </>
// //                                                 ) : (
// //                                                     <Button
// //                                                         onClick={handleResend}
// //                                                         style={{
// //                                                             textTransform: "none",
// //                                                             fontSize: "10px",
// //                                                             height: "25px",
// //                                                             width: "70px",
// //                                                             backgroundColor: "#C38F51",
// //                                                             color: "white",
// //                                                             borderRadius: "23px",
// //                                                         }}
// //                                                     >
// //                                                         Resend
// //                                                     </Button>
// //                                                 )}
// //                                             </div>
// //                                         </div>
// //                                     </>
// //                                 )}

// //                                 {isVerified && (
// //                                     <div style={{ position: "relative" }}>
// //                                         <Field
// //                                             id={name}
// //                                             name={name}
// //                                             type="email"
// //                                             value={emailInput} // Show the latest email input value
// //                                             readOnly
// //                                             style={{
// //                                                 width: "100%",
// //                                                 borderRadius: "3px",
// //                                                 boxSizing: "border-box",
// //                                                 height: "35px",
// //                                                 paddingLeft: "10px",
// //                                             }}
// //                                             className="custominput-field12"
// //                                         />
// //                                         <InputAdornment
// //                                             position="end"
// //                                             style={{
// //                                                 position: "absolute",
// //                                                 right: "10px",
// //                                                 top: "50%",
// //                                                 transform: "translateY(-50%)",
// //                                                 color: "green",
// //                                             }}
// //                                         >
// //                                             <CheckCircle />
// //                                         </InputAdornment>
// //                                     </div>
// //                                 )}
// //                             </div>

// //                             <ErrorMessage
// //                                 name={name}
// //                                 component="div"
// //                                 className="inputs-error-msg"
// //                                 style={{ color: "red", fontSize: "11px", fontWeight: '400' }}
// //                             />
// //                         </div>

// //                         {otpVerifiedError && (
// //                             <div style={{ color: 'red', fontSize: '12px' }}>
// //                                 Please verify the OTP before submitting.
// //                             </div>
// //                         )}
// //                     </div>
// //                 </Form>
// //             )}
// //         </Formik>
// //     );
// // };

// // export default CustomEmailVerifyInput;

// // ===============================

// // import React, { useState, useEffect } from "react";
// // import "../CustomInputLogin/CustomInputLogin.css";
// // import "../ComponentsCss/componet.css";
// // import { Field, ErrorMessage } from "formik";
// // import { InputAdornment, Button } from "@mui/material";
// // import { Email, CheckCircle } from "@mui/icons-material";
// // import { FaStarOfLife } from "react-icons/fa6";
// // import actions from "../../ReduxStore/actions";
// // import { useDispatch, useSelector } from "react-redux";

// // const CustomEmailVerifyInput = ({ label, name, custPlaceholder, image, inputType, important, setFieldValue, ...rest }) => {
// //     const [isOtpSent, setIsOtpSent] = useState(false);
// //     const [otpValues, setOtpValues] = useState(["", "", "", ""]);
// //     const [timer, setTimer] = useState(300); // 5 minutes in seconds
// //     const [isVerified, setIsVerified] = useState(false);
// //     const [emailInput, setEmailInput] = useState(""); // Track email input
// //     console.log(emailInput, "emailInput12345")
// //     const [otpVerifiedError, setOtpVerifiedError] = useState(false); // Error state for OTP verification

// //     const dispatch = useDispatch()

// //     const { EmailSendOtp } = useSelector((state) => state?.EmailSendOtp);
// //     const { EmailVerifyOtp } = useSelector((state) => state?.EmailVerifyOtp);

// //     console.log(EmailSendOtp, "EmailSendOtpEmailSendOtp")
// //     const handleSendOtpApi = () => {
// //         console.log("3333333handlesend")

// //         const data1 = {
// //             data: {
// //                 email: emailInput

// //             }, method: "post", apiName: "sendOTP"
// //         };
// //         dispatch(actions.EMAILSENDOTP(data1));

// //     }

// //     // const handleVerifyOtpApi = () => {
// //     //     console.log("3333333handlesend")

// //     //     const data1 = {
// //     //         data: {
// //     //             email: emailInput,
// //     //             otp: otpValues

// //     //         }, method: "post", apiName: "verifyOTP"
// //     //     };
// //     //     dispatch(actions.EMAILVERIFYOTP(data1));

// //     // }

// //     const handleSendOtp = () => {
// //         if (emailInput.trim() === "") {
// //             alert("Please enter a valid email.");
// //             return;
// //         }
// //         handleSendOtpApi()
// //         setIsOtpSent(true);
// //         setTimer(300); // Reset timer to 5 minutes
// //     };

// //     // const handleVerify = () => {
// //     //     if (otpValues.every((val) => val === "1")) {
// //     //         setIsVerified(true);
// //     //         setIsOtpSent(false);
// //     //     } else {
// //     //         alert("Incorrect OTP. Please try again.");
// //     //     }
// //     // };

// //     const handleVerify = async () => {
// //         const enteredOtp = otpValues.join("");
// //         const otp = Number(enteredOtp);
// //         const data1 = {
// //             data: {
// //                 email: emailInput,
// //                 otp: otp

// //             }, method: "post", apiName: "verifyOTP"
// //         };
// //         const verifyOtp = await dispatch(actions.EMAILVERIFYOTP(data1));
// //         console.log(verifyOtp, "verifyOtpverifyOtp")

// //         // const enteredOtp = otpValues.join(""); // Combine all OTP input values into a single string
// //         // if (verifyOtp?.payload?.message === "OTP verified successfully") { // Compare with the manually set OTP
// //         //     setIsVerified(true);
// //         //     setFieldValue(name, emailInput);
// //         //     setIsOtpSent(false);
// //         //     setOtpVerifiedError(false); // Clear error after successful verification
// //         // } else {
// //         //     setOtpVerifiedError(true); // Set error if OTP is incorrect
// //         //     alert("Incorrect OTP. Please try again.");
// //         // }

// //         if (verifyOtp?.payload?.message === "OTP verified successfully") {
// //             setIsVerified(true);
// //             setFieldValue(name, emailInput); // Set Formik's email value
// //             setFieldValue('isVerified', true); // Set Formik's isVerified field to true
// //             setIsOtpSent(false);
// //             setOtpVerifiedError(false); // Clear error after successful verification
// //         } else {
// //             setOtpVerifiedError(true); // Set error if OTP is incorrect
// //             alert("Incorrect OTP. Please try again.");
// //         }
// //     };

// //     useEffect(() => {
// //         let countdown;
// //         if (isOtpSent && timer > 0) {
// //             countdown = setInterval(() => {
// //                 setTimer((prev) => prev - 1);
// //             }, 1000);
// //         } else if (timer === 0) {
// //             clearInterval(countdown);
// //         }
// //         return () => clearInterval(countdown);
// //     }, [isOtpSent, timer]);

// //     // const handleSendOtp = () => {
// //     //     if (emailInput.trim() === "") {
// //     //         alert("Please enter a valid email.");
// //     //         return;
// //     //     }
// //     //     setIsOtpSent(true);
// //     //     setTimer(300); // Reset timer to 5 minutes
// //     //     // setFieldValue(name, emailInput); // Update Formik's state with the email value
// //     // };

// //     // const handleVerify = () => {
// //     //     // Dummy verification logic
// //     //     if (otpValues.every((val) => val === "1")) {
// //     //         setIsVerified(true);
// //     //         setIsOtpSent(false);
// //     //         setOtpVerifiedError(false); // Clear error after successful verification
// //     //     } else {
// //     //         setOtpVerifiedError(true); // Set error if OTP is incorrect
// //     //         alert("Incorrect OTP. Please try again.");
// //     //     }
// //     // };

// //     const handleResend = () => {
// //         setTimer(60); // Reset the timer to 60 seconds (or your desired duration)
// //         handleSendOtp();  // Function to resend the OTP
// //     };

// //     const handleOtpChange = (index, value) => {
// //         if (/[^0-9]/.test(value)) return; // Allow only numbers

// //         const updatedOtp = [...otpValues];
// //         updatedOtp[index] = value;
// //         setOtpValues(updatedOtp);

// //         if (value && index < otpValues.length - 1) {
// //             document.getElementById(`otp-${index + 1}`).focus();
// //         }
// //     };

// //     const handleKeyDown = (index, e) => {
// //         if (e.key === "Backspace" && otpValues[index] === "") {
// //             if (index > 0) {
// //                 document.getElementById(`otp-${index - 1}`).focus();
// //             }
// //         }
// //     };

// //     const formatTime = (seconds) => {
// //         const minutes = Math.floor(seconds / 60);
// //         const secs = seconds % 60;
// //         return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
// //     };

// //     // const handlePhoneChange = (e) => {
// //     //     const { value } = e.target;
// //     //     if (/^[0-9]*$/.test(value)) { // Allow only numbers
// //     //         setPhoneInput(value);
// //     //         setFieldValue(name, value); // Update Formik's state
// //     //     }
// //     // };

// //     return (
// //         <div style={{ width: "100%" }}>
// //             <div style={{ width: "100%" }}>
// //                 <div style={{ marginBottom: "5px", display: "flex", alignItems: "center" }}>
// //                     <label
// //                         htmlFor={name}
// //                         className="input-heading12"
// //                         style={{ fontSize: "15px", fontWeight: "450", marginRight: "10px" }}
// //                     >
// //                         {label}  {important && (
// //                             <FaStarOfLife style={{ color: '#F53E5C', fontSize: "8px", marginLeft: "3px" }} />
// //                         )}
// //                     </label>
// //                     {isOtpSent && (
// //                         <span style={{ fontSize: "12px", color: "#555" }}>
// //                             {emailInput}
// //                         </span>
// //                     )}
// //                 </div>

// //                 <div style={{ position: "relative", width: "100%" }}>
// //                     {!isOtpSent && !isVerified && (
// //                         <>
// //                             <Field
// //                                 id={name}
// //                                 name={name}
// //                                 type={inputType || "text"}
// //                                 placeholder={custPlaceholder || "Enter Email"}
// //                                 value={emailInput} // Bind value to state
// //                                 onChange={(e) => setEmailInput(e.target.value)} // Update state on change
// //                                 {...rest}
// //                                 style={{
// //                                     borderRadius: "3px",
// //                                     width: "100%",
// //                                     boxSizing: "border-box",
// //                                     height: "35px",
// //                                     paddingLeft: "10px",
// //                                 }}
// //                                 className="custominput-field12"
// //                             />
// //                             <Button
// //                                 onClick={handleSendOtp}
// //                                 style={{
// //                                     textTransform: "none",
// //                                     fontSize: "10px",
// //                                     position: "absolute",
// //                                     right: "10px",
// //                                     top: "5px",
// //                                     height: "25px",
// //                                     width: "70px",
// //                                     backgroundColor: "#C38F51",
// //                                     color: "white",
// //                                     borderRadius: "23px",
// //                                 }}
// //                             >
// //                                 Send OTP
// //                             </Button>
// //                         </>
// //                     )}

// //                     {isOtpSent && (
// //                         <>
// //                             <div style={{ display: "flex", gap: "5px", alignItems: "center", justifyContent: "space-around" }}>
// //                                 {otpValues.map((value, index) => (
// //                                     <input
// //                                         key={index}
// //                                         id={`otp-${index}`}
// //                                         type="text"
// //                                         maxLength="1"
// //                                         value={value}
// //                                         onChange={(e) => handleOtpChange(index, e.target.value)}
// //                                         onKeyDown={(e) => handleKeyDown(index, e)}
// //                                         style={{
// //                                             borderRadius: "3px",
// //                                             width: "25%",
// //                                             height: "35px",
// //                                             textAlign: "center",
// //                                             border: "1px solid #ccc",
// //                                             borderRadius: "4px",
// //                                         }}
// //                                     />
// //                                 ))}
// //                                 <div style={{
// //                                     display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "end",
// //                                     width: "100%"
// //                                 }}>
// //                                     {timer > 0 ? (
// //                                         <>
// //                                             <span style={{ color: "#555", fontSize: "10px", textAlign: "center" }}>
// //                                                 Resend <span>{formatTime(timer)}</span>
// //                                             </span>
// //                                             <Button
// //                                                 onClick={handleVerify}
// //                                                 style={{
// //                                                     textTransform: "none",
// //                                                     fontSize: "10px",
// //                                                     height: "25px",
// //                                                     width: "70px",
// //                                                     backgroundColor: "#C38F51",
// //                                                     color: "white",
// //                                                     borderRadius: "23px",
// //                                                 }}
// //                                             >
// //                                                 Verify
// //                                             </Button>
// //                                         </>
// //                                     ) : (
// //                                         <Button
// //                                             onClick={handleResend}
// //                                             style={{
// //                                                 textTransform: "none",
// //                                                 fontSize: "10px",
// //                                                 height: "25px",
// //                                                 width: "70px",
// //                                                 backgroundColor: "#C38F51",
// //                                                 color: "white",
// //                                                 borderRadius: "23px",
// //                                             }}
// //                                         >
// //                                             Resend
// //                                         </Button>
// //                                     )}
// //                                 </div>
// //                             </div>
// //                         </>
// //                     )}

// //                     {isVerified && (
// //                         <div style={{ position: "relative" }}>
// //                             <Field
// //                                 id={name}
// //                                 name={name}
// //                                 type={inputType || "text"}
// //                                 value={emailInput} // Show the latest email input value
// //                                 readOnly
// //                                 style={{
// //                                     width: "100%",
// //                                     borderRadius: "3px",
// //                                     boxSizing: "border-box",
// //                                     height: "35px",
// //                                     paddingLeft: "10px",
// //                                 }}
// //                                 className="custominput-field12"
// //                             />
// //                             <InputAdornment
// //                                 position="end"
// //                                 style={{
// //                                     position: "absolute",
// //                                     right: "10px",
// //                                     top: "50%",
// //                                     transform: "translateY(-50%)",
// //                                     color: "green",
// //                                 }}
// //                             >
// //                                 <CheckCircle />
// //                             </InputAdornment>
// //                         </div>
// //                     )}
// //                 </div>
// //                 {!isOtpSent && (
// //                     <ErrorMessage
// //                         name={name}
// //                         component="div"
// //                         className="inputs-error-msg"
// //                         // style={{ color: "red" }}

// //                         style={{ color: "red", fontSize: "11px", fontWeight: '400' }}

// //                     />
// //                 )}
// //             </div>

// //             {/* Submit Button */}

// //             {otpVerifiedError && (
// //                 <div style={{ color: 'red', fontSize: '12px' }}>
// //                     Please verify the OTP before submitting.
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default CustomEmailVerifyInput;

// import React, { useState, useEffect } from "react";
// import "../../CustomInputLogin/CustomInputLogin.css";
// import "../../ComponentsCss/componet.css";
// import { Field, ErrorMessage } from "formik";
// import { InputAdornment, Button } from "@mui/material";
// import { Email, CheckCircle } from "@mui/icons-material";
// import { FaStarOfLife } from "react-icons/fa6";
// import actions from "../../../ReduxStore/actions";
// import { useDispatch, useSelector } from "react-redux";

// const CustomEmailVerifyInput = ({ label, name,emailInput,setEmailInput, custPlaceholder, image, inputType,isVerified, setIsVerified, important, setFieldValue, ...rest }) => {
//     const [isOtpSent, setIsOtpSent] = useState(false);
//     const [otpValues, setOtpValues] = useState(["", "", "", ""]);
//     const [timer, setTimer] = useState(300); // 5 minutes in seconds
//     // const [isVerified, setIsVerified] = useState(false);
//     console.log(emailInput, "emailInput12345")
//     const [otpVerifiedError, setOtpVerifiedError] = useState(false); // Error state for OTP verification

//     const dispatch = useDispatch()

//     const { EmailSendOtp } = useSelector((state) => state?.EmailSendOtp);
//     const { EmailVerifyOtp } = useSelector((state) => state?.EmailVerifyOtp);

//     console.log(EmailSendOtp, "EmailSendOtpEmailSendOtp")
//     const handleSendOtpApi = () => {
//         console.log("3333333handlesend")

//         const data1 = {
//             data: {
//                 email: emailInput

//             }, method: "post", apiName: "sendOTP"
//         };
//         dispatch(actions.EMAILSENDOTP(data1));

//     }

//     const handleSendOtp = () => {
//         if (emailInput.trim() === "") {
//             alert("Please enter a valid email.");
//             return;
//         }
//         handleSendOtpApi()
//         setIsOtpSent(true);
//         setTimer(300); // Reset timer to 5 minutes
//     };

//     const handleVerify = async () => {
//         const enteredOtp = otpValues.join("");
//         const otp = Number(enteredOtp);
//         const data1 = {
//             data: {
//                 email: emailInput,
//                 otp: otp

//             }, method: "post", apiName: "verifyOTP"
//         };
//         const verifyOtp = await dispatch(actions.EMAILVERIFYOTP(data1));
//         console.log(verifyOtp, "verifyOtpverifyOtp")

//         if (verifyOtp?.payload?.message === "OTP verified successfully") {
//             setIsVerified(true);
//             setFieldValue(name, emailInput); // Set Formik's email value
//             // setFieldValue('isVerified', true); // Set Formik's isVerified field to true
//             setIsOtpSent(false);
//             setOtpVerifiedError(false); // Clear error after successful verification
//         } else {
//             setOtpVerifiedError(true); // Set error if OTP is incorrect
//             alert("Incorrect OTP. Please try again.");
//         }
//     };

//     useEffect(() => {
//         let countdown;
//         if (isOtpSent && timer > 0) {
//             countdown = setInterval(() => {
//                 setTimer((prev) => prev - 1);
//             }, 1000);
//         } else if (timer === 0) {
//             clearInterval(countdown);
//         }
//         return () => clearInterval(countdown);
//     }, [isOtpSent, timer]);

//     const handleResend = () => {
//         setTimer(60); // Reset the timer to 60 seconds (or your desired duration)
//         handleSendOtp();  // Function to resend the OTP
//     };

//     const handleOtpChange = (index, value) => {
//         if (/[^0-9]/.test(value)) return; // Allow only numbers

//         const updatedOtp = [...otpValues];
//         updatedOtp[index] = value;
//         setOtpValues(updatedOtp);

//         if (value && index < otpValues.length - 1) {
//             document.getElementById(`otp-${index + 1}`).focus();
//         }
//     };

//     const handleKeyDown = (index, e) => {
//         if (e.key === "Backspace" && otpValues[index] === "") {
//             if (index > 0) {
//                 document.getElementById(`otp-${index - 1}`).focus();
//             }
//         }
//     };

//     const formatTime = (seconds) => {
//         const minutes = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
//     };

//     // const handlePhoneChange = (e) => {
//     //     const { value } = e.target;
//     //     if (/^[0-9]*$/.test(value)) { // Allow only numbers
//     //         setPhoneInput(value);
//     //         setFieldValue(name, value); // Update Formik's state
//     //     }
//     // };

//     return (
//         <div style={{ width: "100%" }}>
//             <div style={{ width: "100%" }}>
//                 <div style={{ marginBottom: "5px", display: "flex", alignItems: "center" }}>
//                     <label
//                         htmlFor={name}
//                         className="input-heading12"
//                         style={{ fontSize: "15px", fontWeight: "450", marginRight: "10px" }}
//                     >
//                         {label}  {important && (
//                             <FaStarOfLife style={{ color: '#F53E5C', fontSize: "8px", marginLeft: "3px" }} />
//                         )}
//                     </label>
//                     {isOtpSent && (
//                         <span style={{ fontSize: "12px", color: "#555" }}>
//                             {emailInput}
//                         </span>
//                     )}
//                 </div>

//                 <div style={{ position: "relative", width: "100%" }}>
//                     {!isOtpSent && !isVerified && (
//                         <>
//                             <Field
//                                 id={name}
//                                 name={name}
//                                 type={inputType || "text"}

//                                 placeholder={custPlaceholder || "Enter Email"}
//                                 value={emailInput} // Bind to emailInput state
//                                 onChange={(e) => {
//                                     setEmailInput(e.target.value); // Update local state
//                                     setFieldValue(name, e.target.value); // Update Formik's state
//                                 }}
//                                 {...rest}
//                                 style={{
//                                     borderRadius: "3px",
//                                     width: "100%",
//                                     boxSizing: "border-box",
//                                     height: "35px",
//                                     paddingLeft: "10px",
//                                 }}
//                                 className="custominput-field12"
//                             />
//                             <Button
//                                 onClick={handleSendOtp}
//                                 style={{
//                                     textTransform: "none",
//                                     fontSize: "10px",
//                                     position: "absolute",
//                                     right: "10px",
//                                     top: "5px",
//                                     height: "25px",
//                                     width: "70px",
//                                     backgroundColor: "#C38F51",
//                                     color: "white",
//                                     borderRadius: "23px",
//                                 }}
//                             >
//                                 Send OTP
//                             </Button>
//                         </>
//                     )}

//                     {isOtpSent && (
//                         <>
//                             <div style={{ display: "flex", gap: "5px", alignItems: "center", justifyContent: "space-around" }}>
//                                 {otpValues.map((value, index) => (
//                                     <input
//                                         key={index}
//                                         id={`otp-${index}`}
//                                         type="text"
//                                         name="emailOtp"
//                                         maxLength="1"
//                                         value={value}
//                                         onChange={(e) => handleOtpChange(index, e.target.value)}
//                                         onKeyDown={(e) => handleKeyDown(index, e)}
//                                         style={{
//                                             borderRadius: "3px",
//                                             width: "25%",
//                                             height: "35px",
//                                             textAlign: "center",
//                                             border: "1px solid #ccc",
//                                             borderRadius: "4px",
//                                         }}
//                                     />
//                                 ))}
//                                 <div style={{
//                                     display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "end",
//                                     width: "100%"
//                                 }}>
//                                     {timer > 0 ? (
//                                         <>
//                                             <span style={{ color: "#555", fontSize: "10px", textAlign: "center" }}>
//                                                 Resend <span>{formatTime(timer)}</span>
//                                             </span>
//                                             <Button
//                                                 onClick={handleVerify}
//                                                 style={{
//                                                     textTransform: "none",
//                                                     fontSize: "10px",
//                                                     height: "25px",
//                                                     width: "70px",
//                                                     backgroundColor: "#C38F51",
//                                                     color: "white",
//                                                     borderRadius: "23px",
//                                                 }}
//                                             >
//                                                 Verify
//                                             </Button>
//                                         </>
//                                     ) : (
//                                         <Button
//                                             onClick={handleResend}
//                                             style={{
//                                                 textTransform: "none",
//                                                 fontSize: "10px",
//                                                 height: "25px",
//                                                 width: "70px",
//                                                 backgroundColor: "#C38F51",
//                                                 color: "white",
//                                                 borderRadius: "23px",
//                                             }}
//                                         >
//                                             Resend
//                                         </Button>
//                                     )}
//                                 </div>
//                             </div>
//                         </>
//                     )}

//                     {isVerified && (
//                         <div style={{ position: "relative" }}>
//                             <Field
//                                 id={name}
//                                 name={name}
//                                 type={inputType || "text"}
//                                 value={emailInput} // Show the latest email input value
//                                 readOnly
//                                 style={{
//                                     width: "100%",
//                                     borderRadius: "3px",
//                                     boxSizing: "border-box",
//                                     height: "35px",
//                                     paddingLeft: "10px",
//                                 }}
//                                 className="custominput-field12"
//                             />
//                             <InputAdornment
//                                 position="end"
//                                 style={{
//                                     position: "absolute",
//                                     right: "10px",
//                                     top: "50%",
//                                     transform: "translateY(-50%)",
//                                     color: "green",
//                                 }}
//                             >
//                                 <CheckCircle />
//                             </InputAdornment>
//                         </div>
//                     )}
//                 </div>
//                 {!isOtpSent && (
//                     <ErrorMessage
//                         name={name}
//                         component="div"
//                         className="inputs-error-msg"
//                         // style={{ color: "red" }}

//                         style={{ color: "red", fontSize: "11px", fontWeight: '400' }}

//                     />
//                 )}
//             </div>

//             {/* Submit Button */}

//             {otpVerifiedError && (
//                 <div style={{ color: 'red', fontSize: '12px' }}>
//                     Please verify the OTP before submitting.
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CustomEmailVerifyInput;

import React, { useState, useEffect } from "react";
import "../../CustomInputLogin/CustomInputLogin.css";
import "../../ComponentsCss/componet.css";
import { Field, ErrorMessage } from "formik";
import { InputAdornment, Button, Box } from "@mui/material";
import { Email, CheckCircle, Edit } from "@mui/icons-material";
import { FaStarOfLife } from "react-icons/fa6";
import actions from "../../../ReduxStore/actions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const CustomEmailVerifyInput = ({
  label,
  name,
  emailInput,
  setEmailInput,
  custPlaceholder,
  image,
  inputType,
  isVerified,
  setIsVerified,
  important,
  setFieldValue,
  ...rest
}) => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  // const [isVerified, setIsVerified] = useState(false);
  console.log(emailInput, "emailInput12345");
  const [otpVerifiedError, setOtpVerifiedError] = useState(false); // Error state for OTP verification

  const dispatch = useDispatch();

  const { EmailSendOtp } = useSelector((state) => state?.EmailSendOtp);
  const { EmailVerifyOtp } = useSelector((state) => state?.EmailVerifyOtp);

  console.log(EmailSendOtp, "EmailSendOtpEmailSendOtp");
  const handleSendOtpApi = async () => {
    console.log("3333333handlesend");
    const data2 = {
      data: {
        email: emailInput,
      },
      method: "post",
      apiName: "register/checkCustomerExistForEmailRegister",
    };
    const verifyEmail = await dispatch(
      actions.CHECKCUSTOMEREXISTFOREMAILREGISTER(data2)
    );
    if (verifyEmail?.payload?.message === "Success") {
      const data1 = {
        data: {
          email: emailInput,
        },
        method: "post",
        apiName: "sendOTP",
      };
      dispatch(actions.EMAILSENDOTP(data1));
      setIsOtpSent(true);
      setTimer(300); // Reset timer to 5 minutes
      toast.success("OTP send Successfully");
    } else {
      toast.error(verifyEmail?.payload?.message);
    }
  };
  const handleSendOtp = () => {
    if (emailInput.trim() === "") {
      // alert("Please enter a valid email.");
      toast.error("Please enter a email.");
      return;
    }
    handleSendOtpApi();
  };

  const handleVerify = async () => {
    const enteredOtp = otpValues.join("");
    const otp = Number(enteredOtp);
    const data1 = {
      data: {
        email: emailInput,
        otp: otp,
      },
      method: "post",
      apiName: "verifyOTP",
    };
    const verifyOtp = await dispatch(actions.EMAILVERIFYOTP(data1));
    console.log(verifyOtp, "verifyOtpverifyOtp");

    if (verifyOtp?.payload?.message === "OTP verified successfully") {
      setIsVerified(true);
      setFieldValue(name, emailInput); // Set Formik's email value
      setFieldValue("isVerified", true); // Set Formik's isVerified field to true
      setIsOtpSent(false);
      setOtpVerifiedError(false); // Clear error after successful verification
    } else {
      setOtpVerifiedError(true); // Set error if OTP is incorrect
      alert("Incorrect OTP. Please try again.");
    }
  };

  useEffect(() => {
    let countdown;
    if (isOtpSent && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [isOtpSent, timer]);

  const handleResend = () => {
    setTimer(60); // Reset the timer to 60 seconds (or your desired duration)
    handleSendOtp(); // Function to resend the OTP
  };

  const handleOtpChange = (index, value) => {
    if (/[^0-9]/.test(value)) return; // Allow only numbers

    const updatedOtp = [...otpValues];
    updatedOtp[index] = value;
    setOtpValues(updatedOtp);

    if (value && index < otpValues.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && otpValues[index] === "") {
      if (index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
      }
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  // const handlePhoneChange = (e) => {
  //     const { value } = e.target;
  //     if (/^[0-9]*$/.test(value)) { // Allow only numbers
  //         setPhoneInput(value);
  //         setFieldValue(name, value); // Update Formik's state
  //     }
  // };

  const handleEditClick = () => {
    setIsOtpSent(false);
    setIsVerified(false);
    console.log(isVerified, "isVerifiedisVerified");
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%" }}>
        <div
          style={{ marginBottom: "5px", display: "flex", alignItems: "center" }}
        >
          <label
            htmlFor={name}
            className="input-heading12"
            style={{ fontSize: "15px", fontWeight: "450", marginRight: "10px" }}
          >
            {label}{" "}
            {important && (
              <FaStarOfLife
                style={{ color: "#F53E5C", fontSize: "8px", marginLeft: "3px" }}
              />
            )}
          </label>
          {isOtpSent && (
            <>
              <span style={{ fontSize: "12px", color: "#555" }}>
                {emailInput}
              </span>
              <Box onClick={handleEditClick}>
                <Edit
                  style={{
                    color: "gray",
                    fontSize: "15px",
                    marginLeft: "7px",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </>
          )}
        </div>

        <div style={{ position: "relative", width: "100%" }}>
          {!isOtpSent && !isVerified && (
            <>
              <Field
                id={name}
                name={name}
                type={inputType || "text"}
                placeholder={custPlaceholder || "Enter Email"}
                value={emailInput} // Bind to emailInput state
                onChange={(e) => {
                  setEmailInput(e.target.value); // Update local state
                  setFieldValue(name, e.target.value); // Update Formik's state
                }}
                {...rest}
                style={{
                  borderRadius: "3px",
                  width: "100%",
                  boxSizing: "border-box",
                  height: "35px",
                  paddingLeft: "10px",
                }}
                className="custominput-field12"
              />
              <Button
                onClick={handleSendOtp}
                style={{
                  textTransform: "none",
                  fontSize: "10px",
                  position: "absolute",
                  right: "10px",
                  top: "5px",
                  height: "25px",
                  width: "70px",
                  backgroundColor: "#C38F51",
                  color: "white",
                  borderRadius: "23px",
                }}
              >
                Send OTP
              </Button>
            </>
          )}

          {isOtpSent && (
            <>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    name="emailOtp"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    style={{
                      borderRadius: "3px",
                      width: "25%",
                      height: "35px",
                      textAlign: "center",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                ))}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "end",
                    width: "100%",
                  }}
                >
                  {timer > 0 ? (
                    <>
                      <span
                        style={{
                          color: "#555",
                          fontSize: "10px",
                          textAlign: "center",
                        }}
                      >
                        Resend <span>{formatTime(timer)}</span>
                      </span>
                      <Button
                        onClick={handleVerify}
                        style={{
                          textTransform: "none",
                          fontSize: "10px",
                          height: "25px",
                          width: "70px",
                          backgroundColor: "#C38F51",
                          color: "white",
                          borderRadius: "23px",
                        }}
                      >
                        Verify
                      </Button>
                    </>
                  ) : (
                    <Button
                      onClick={handleResend}
                      style={{
                        textTransform: "none",
                        fontSize: "10px",
                        height: "25px",
                        width: "70px",
                        backgroundColor: "#C38F51",
                        color: "white",
                        borderRadius: "23px",
                      }}
                    >
                      Resend
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}

          {isVerified && (
            <div style={{ position: "relative" }}>
              <Field
                id={name}
                name={name}
                type={inputType || "text"}
                value={emailInput} // Show the latest email input value
                readOnly
                style={{
                  width: "100%",
                  borderRadius: "3px",
                  boxSizing: "border-box",
                  height: "35px",
                  paddingLeft: "10px",
                }}
                className="custominput-field12"
              />
              <InputAdornment
                position="end"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "green",
                }}
              >
                <CheckCircle />
              </InputAdornment>
            </div>
          )}
        </div>
        {!isOtpSent && (
          <ErrorMessage
            name={name}
            component="div"
            className="inputs-error-msg"
            // style={{ color: "red" }}

            style={{ color: "red", fontSize: "11px", fontWeight: "400" }}
          />
        )}
      </div>

      {/* Submit Button */}

      {otpVerifiedError && (
        <div style={{ color: "red", fontSize: "12px" }}>
          Please verify the OTP before submitting.
        </div>
      )}
    </div>
  );
};

export default CustomEmailVerifyInput;
