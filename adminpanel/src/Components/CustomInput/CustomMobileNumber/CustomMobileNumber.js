// // // // // // import React from "react";
// // // // // // import "./CustomInputLogin.css";
// // // // // // import "../ComponentsCss/componet.css";
// // // // // // import { Field, ErrorMessage } from "formik";
// // // // // // import { InputAdornment } from "@mui/material";
// // // // // // import { Email } from "@mui/icons-material";

// // // // // // const CustomMobileNumber= ({ label, name, custPlaceholder, image, inputType, ...rest }) => {
// // // // // //         const validateInput = (value) => {
// // // // // //             let error;
// // // // // //             if (!value) {
// // // // // //                 error = `Field is Required`;
// // // // // //             } else if (inputType === "number" && isNaN(value)) {
// // // // // //                 error = "Field is Required";
// // // // // //             }
// // // // // //             return error;
// // // // // //         };

// // // // // //         return (
// // // // // //             <div style={{ width: "95%" }}>
// // // // // //                 <div style={{ width: "100%" }}>
// // // // // //                     <div>
// // // // // //                         <label
// // // // // //                             htmlFor={name}
// // // // // //                             className="input-heading12"
// // // // // //                             style={{ fontSize: "16px" }}
// // // // // //                         >
// // // // // //                             {label}
// // // // // //                         </label>
// // // // // //                     </div>
// // // // // //                     <div style={{ position: "relative", width: "100%" }}>
// // // // // //                         {/* Email Icon as Start Adornment */}
// // // // // //                         {image && (
// // // // // //                             < InputAdornment position="start" style={{ position: "absolute", top: "50%", left: "8px", transform: "translateY(-50%)" }}>
// // // // // //                                 <img src={image} style={{ color: "black", height: "17px" }} />
// // // // // //                             </InputAdornment>
// // // // // //                         )}
// // // // // //                         {/* Input Field */}
// // // // // //                         <Field
// // // // // //                             id={name}
// // // // // //                             name={name}
// // // // // //                             as={inputType === "textarea" ? "textarea" : "input"}
// // // // // //                             placeholder={custPlaceholder || "Enter Input"}
// // // // // //                             {...rest}
// // // // // //                             style={{
// // // // // //                                 width: "100%",
// // // // // //                                 color: "#7A7A7A",

// // // // // //                                 // paddingLeft: "40px", // Add padding to accommodate the icon
// // // // // //                                 boxSizing: "border-box",
// // // // // //                                 height: inputType === "textarea" ? "100px" : "35px",
// // // // // //                                 paddingLeft: inputType === "textarea" ? "10px" : "40px" // Add padding to accommodate the icon

// // // // // //                             }}
// // // // // //                             // sx={inputType === "textarea" ? { height: "100px" || "100px" } : {}}
// // // // // //                             className="custominput-field12"
// // // // // //                             validate={validateInput}
// // // // // //                         />
// // // // // //                     </div>
// // // // // //                     <ErrorMessage
// // // // // //                         name={name}
// // // // // //                         component="div"
// // // // // //                         className="inputs-error-msg"
// // // // // //                         style={{ color: "red" }}
// // // // // //                     />
// // // // // //                 </div>
// // // // // //             </div >
// // // // // //         );
// // // // // //     };

// // // // // // export default CustomMobileNumber;

// // // // // import React, { useState } from "react";
// // // // // import "../CustomInputLogin/CustomInputLogin.css";
// // // // // import "../ComponentsCss/componet.css";
// // // // // import { Field, ErrorMessage, useField } from "formik";
// // // // // import { InputAdornment, MenuItem, Select, FormControl, Icon, Grid } from "@mui/material";
// // // // // import { CheckCircle, Phone, Star } from "@mui/icons-material";
// // // // // import CustoDropDownRegister from "../CustomDropDown/CustoDropDownRegister";
// // // // // import { FaStarOfLife } from "react-icons/fa6";

// // // // // const CustomMobileNumber = ({
// // // // //     label,
// // // // //     name,
// // // // //     custPlaceholder,
// // // // //     image,
// // // // //     inputType,
// // // // //     inputname,
// // // // //     important,
// // // // //     ...rest
// // // // // }) => {
// // // // //     const [isValid, setIsValid] = useState(false);
// // // // //     const [countryCode, setCountryCode] = useState("+1");

// // // // //     const validateInput = (value) => {
// // // // //         let error;
// // // // //         if (!value) {
// // // // //             error = `Field is Required`;
// // // // //         } else if (value.length !== 10 || isNaN(value)) {
// // // // //             error = "Enter a valid 10-digit number";
// // // // //             setIsValid(false);
// // // // //         } else {
// // // // //             setIsValid(true);
// // // // //         }
// // // // //         return error;
// // // // //     };

// // // // //     const handleCountryCodeChange = (event) => {
// // // // //         setCountryCode(event.target.value);
// // // // //     };

// // // // //     return (
// // // // //         <div style={{ width: "100%" }}>
// // // // //             <div style={{ width: "100%" }}>
// // // // //                 <div>
// // // // //                     <label
// // // // //                         htmlFor={name}
// // // // //                         className="input-heading12"
// // // // //                         style={{ fontSize: "16px" }}
// // // // //                     >
// // // // //                         {label}
// // // // //                     </label>
// // // // //                     {important && (
// // // // //                         <FaStarOfLife style={{ color: '#F53E5C', fontSize: "8px" ,marginLeft:"3px"}} />
// // // // //                         )}
// // // // //                 </div>
// // // // //                 <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "5px" }}>

// // // // //                     <Grid xs={3}>
// // // // //                         <CustoDropDownRegister

// // // // //                             name={inputname}
// // // // //                             // label="County"
// // // // //                             // custPlaceholder="select"
// // // // //                             options={[
// // // // //                                 { label: "+91", value: "91" },
// // // // //                                 { label: "+01", value: "01" },
// // // // //                             ]}
// // // // //                         />
// // // // //                     </Grid>
// // // // //                     <Grid xs={9} style={{ position: "relative", width: "100%" }}>
// // // // //                         {/* Input Field */}
// // // // //                         <Field
// // // // //                             id={name}
// // // // //                             name={name}
// // // // //                             placeholder={custPlaceholder || "Enter Mobile Number"}
// // // // //                             {...rest}
// // // // //                             style={{
// // // // //                                 borderRadius:"3px",
// // // // //                                 width: "100%",
// // // // //                                 color: "#7A7A7A",
// // // // //                                 height: "35px",
// // // // //                                 // paddingLeft: "40px", // Add padding to accommodate the icon
// // // // //                                 boxSizing: "border-box",
// // // // //                             }}
// // // // //                             className="custominput-field12"
// // // // //                             validate={validateInput}
// // // // //                         />
// // // // //                         {/* Phone Icon */}

// // // // //                         {/* Validation Icon */}
// // // // //                         {isValid && (
// // // // //                             <InputAdornment
// // // // //                                 position="end"
// // // // //                                 style={{
// // // // //                                     position: "absolute",
// // // // //                                     top: "50%",
// // // // //                                     right: "8px",
// // // // //                                     transform: "translateY(-50%)",
// // // // //                                 }}
// // // // //                             >
// // // // //                                 <CheckCircle style={{ color: "green" }} />
// // // // //                             </InputAdornment>
// // // // //                         )}
// // // // //                     </Grid>
// // // // //                 </div>
// // // // //                 <ErrorMessage
// // // // //                     name={name}
// // // // //                     component="div"
// // // // //                     className="inputs-error-msg"
// // // // //                     // style={{ color: "red" }}
// // // // //                     style={{ color: "red", fontSize: "14px", fontWeight: '400' }}

// // // // //                 />
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default CustomMobileNumber;

// // // // import React, { useState, useEffect } from "react";
// // // // import "../CustomInputLogin/CustomInputLogin.css";
// // // // import "../ComponentsCss/componet.css";
// // // // import { Field, ErrorMessage } from "formik";
// // // // import { InputAdornment, Button, Grid } from "@mui/material";
// // // // import { CheckCircle } from "@mui/icons-material";
// // // // import { FaStarOfLife } from "react-icons/fa6";
// // // // import CustoDropDownRegister from "../CustomDropDown/CustoDropDownRegister";

// // // // const CustomPhoneVerifyInput = ({
// // // //     label = "Phone Number",
// // // //     name,
// // // //     custPlaceholder = "Enter Phone Number",
// // // //     important,
// // // //     setFieldValue,
// // // //     ...rest
// // // // }) => {
// // // //     const [isOtpSent, setIsOtpSent] = useState(false);
// // // //     const [otpValues, setOtpValues] = useState(["", "", "", ""]);
// // // //     const [timer, setTimer] = useState(300); // 5 minutes in seconds
// // // //     const [isVerified, setIsVerified] = useState(false);
// // // //     const [phoneInput, setPhoneInput] = useState(""); // Track phone number input
// // // //     const [otpVerifiedError, setOtpVerifiedError] = useState(false); // Error state for OTP verification

// // // //     useEffect(() => {
// // // //         if (setFieldValue) {
// // // //             setFieldValue("isVerified", isVerified); // Inform Formik about OTP verification status
// // // //         }
// // // //     }, [isVerified, setFieldValue]);

// // // //     const handleSendOtp = () => {
// // // //         if (!/^\d{10}$/.test(phoneInput)) {
// // // //             alert("Please enter a valid 10-digit phone number.");
// // // //             return;
// // // //         }
// // // //         setIsOtpSent(true);
// // // //         setTimer(300); // Reset timer to 5 minutes
// // // //     };

// // // //     const handleVerify = () => {
// // // //         const enteredOtp = otpValues.join(""); // Combine all OTP input values into a single string
// // // //         if (enteredOtp === "1234") {
// // // //             setIsVerified(true);
// // // //             setIsOtpSent(false);
// // // //             setOtpVerifiedError(false); // Clear error after successful verification
// // // //         } else {
// // // //             setOtpVerifiedError(true); // Set error if OTP is incorrect
// // // //             alert("Incorrect OTP. Please try again.");
// // // //         }
// // // //     };

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

// // // //     const handleResend = () => {
// // // //         setTimer(60); // Reset the timer to 60 seconds
// // // //         handleSendOtp(); // Function to resend the OTP
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
// // // //                 <div style={{ marginBottom: "5px", display: "flex", alignItems: "center" }}>
// // // //                     <label
// // // //                         htmlFor={name}
// // // //                         className="input-heading12"
// // // //                         style={{ fontSize: "15px", fontWeight: "450", marginRight: "10px" }}
// // // //                     >
// // // //                         {label}
// // // //                         {important && <FaStarOfLife style={{ color: "#F53E5C", fontSize: "8px", marginLeft: "3px" }} />}
// // // //                     </label>
// // // //                     {isOtpSent && (
// // // //                         <span style={{ fontSize: "12px", color: "#555" }}>
// // // //                             {phoneInput}
// // // //                         </span>
// // // //                     )}
// // // //                 </div>

// // // //                 <div style={{ position: "relative", width: "100%" }}>
// // // //                     {!isOtpSent && !isVerified && (
// // // //                         <>
// // // //                             <Grid xs={3}>
// // // //                                 <CustoDropDownRegister

// // // //                                     // name={inputname}
// // // //                                     name="valla"

// // // //                                     // label="County"
// // // //                                     // custPlaceholder="select"
// // // //                                     options={[
// // // //                                         { label: "+91", value: "91" },
// // // //                                         { label: "+01", value: "01" },
// // // //                                     ]}
// // // //                                 />
// // // //                             </Grid>
// // // //                             <Field
// // // //                                 id={name}
// // // //                                 name={name}
// // // //                                 type="tel"
// // // //                                 placeholder={custPlaceholder}
// // // //                                 value={phoneInput} // Bind value to state
// // // //                                 onChange={(e) => setPhoneInput(e.target.value)} // Update state on change
// // // //                                 {...rest}
// // // //                                 style={{
// // // //                                     borderRadius: "3px",
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
// // // //                         <div style={{ display: "flex", gap: "5px", alignItems: "center", justifyContent: "space-around" }}>
// // // //                             {otpValues.map((value, index) => (
// // // //                                 <input
// // // //                                     key={index}
// // // //                                     id={`otp-${index}`}
// // // //                                     type="text"
// // // //                                     maxLength="1"
// // // //                                     value={value}
// // // //                                     onChange={(e) => handleOtpChange(index, e.target.value)}
// // // //                                     onKeyDown={(e) => handleKeyDown(index, e)}
// // // //                                     style={{
// // // //                                         borderRadius: "3px",
// // // //                                         width: "25%",
// // // //                                         height: "35px",
// // // //                                         textAlign: "center",
// // // //                                         border: "1px solid #ccc",
// // // //                                         borderRadius: "4px",
// // // //                                     }}
// // // //                                 />
// // // //                             ))}
// // // //                             <div style={{
// // // //                                 display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "end",
// // // //                                 width: "100%"
// // // //                             }}>
// // // //                                 {timer > 0 ? (
// // // //                                     <>
// // // //                                         <span style={{ color: "#555", fontSize: "10px", textAlign: "center" }}>
// // // //                                             Resend <span>{formatTime(timer)}</span>
// // // //                                         </span>
// // // //                                         <Button
// // // //                                             onClick={handleVerify}
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
// // // //                                             Verify
// // // //                                         </Button>
// // // //                                     </>
// // // //                                 ) : (
// // // //                                     <Button
// // // //                                         onClick={handleResend}
// // // //                                         style={{
// // // //                                             textTransform: "none",
// // // //                                             fontSize: "10px",
// // // //                                             height: "25px",
// // // //                                             width: "70px",
// // // //                                             backgroundColor: "#C38F51",
// // // //                                             color: "white",
// // // //                                             borderRadius: "23px",
// // // //                                         }}
// // // //                                     >
// // // //                                         Resend
// // // //                                     </Button>
// // // //                                 )}
// // // //                             </div>
// // // //                         </div>
// // // //                     )}

// // // //                     {isVerified && (
// // // //                         <div style={{ position: "relative" }}>
// // // //                             <Field
// // // //                                 id={name}
// // // //                                 name={name}
// // // //                                 type="tel"
// // // //                                 value={phoneInput} // Show the latest phone input value
// // // //                                 readOnly
// // // //                                 style={{
// // // //                                     width: "100%",
// // // //                                     borderRadius: "3px",
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
// // // //                     style={{ color: "red", fontSize: "11px", fontWeight: "400" }}
// // // //                 />
// // // //             </div>

// // // //             {otpVerifiedError && (
// // // //                 <div style={{ color: "red", fontSize: "12px" }}>
// // // //                     Please verify the OTP before submitting.
// // // //                 </div>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default CustomPhoneVerifyInput;

// // // import React, { useState, useEffect } from "react";
// // // import { Field, ErrorMessage } from "formik";
// // // import { Button, Grid, InputAdornment } from "@mui/material";
// // // import { CheckCircle } from "@mui/icons-material";
// // // import { FaStarOfLife } from "react-icons/fa6";
// // // import CustoDropDownRegister from "../CustomDropDown/CustoDropDownRegister";

// // // const CustomPhoneVerifyInput = ({
// // //     label = "Phone Number",
// // //     name,
// // //     custPlaceholder = "Enter Phone Number",
// // //     important,
// // //     setFieldValue,
// // //     ...rest
// // // }) => {
// // //     const [isOtpSent, setIsOtpSent] = useState(false);
// // //     const [otpValues, setOtpValues] = useState(["", "", "", ""]);
// // //     const [timer, setTimer] = useState(300); // 5 minutes in seconds
// // //     const [isVerified, setIsVerified] = useState(false);
// // //     const [phoneInput, setPhoneInput] = useState(""); // Track phone number input
// // //     const [otpVerifiedError, setOtpVerifiedError] = useState(false); // Error state for OTP verification
// // //     const [phoneCode, setPhoneCode] = useState("+91"); // Default phone code

// // //     useEffect(() => {
// // //         if (setFieldValue) {
// // //             setFieldValue("isVerified", isVerified); // Inform Formik about OTP verification status
// // //         }
// // //     }, [isVerified, setFieldValue]);

// // //     const handleSendOtp = () => {
// // //         if (!/^\d{10}$/.test(phoneInput)) {
// // //             alert("Please enter a valid 10-digit phone number.");
// // //             return;
// // //         }
// // //         setIsOtpSent(true);
// // //         setTimer(300); // Reset timer to 5 minutes
// // //     };

// // //     const handleVerify = () => {
// // //         const enteredOtp = otpValues.join(""); // Combine all OTP input values into a single string
// // //         if (enteredOtp === "1234") {
// // //             setIsVerified(true);
// // //             setIsOtpSent(false);
// // //             setOtpVerifiedError(false); // Clear error after successful verification
// // //         } else {
// // //             setOtpVerifiedError(true); // Set error if OTP is incorrect
// // //             alert("Incorrect OTP. Please try again.");
// // //         }
// // //     };

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

// // //     const handleResend = () => {
// // //         setTimer(60); // Reset the timer to 60 seconds
// // //         handleSendOtp(); // Function to resend the OTP
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
// // //                         {important && <FaStarOfLife style={{ color: "#F53E5C", fontSize: "8px", marginLeft: "3px" }} />}
// // //                     </label>
// // //                     {isOtpSent && (
// // //                         <span style={{ fontSize: "12px", color: "#555" }}>
// // //                             {phoneCode} {phoneInput}
// // //                         </span>
// // //                     )}
// // //                 </div>

// // //                 <div style={{ position: "relative", width: "100%" }}>
// // //                     {!isOtpSent && !isVerified && (
// // //                         <>

// // //                             <Grid xs={3}>
// // //                                 <CustoDropDownRegister
// // //                                     name="phoneCode"
// // //                                     value={phoneCode}
// // //                                     onChange={(e) => setPhoneCode(e.target.value)}
// // //                                     options={[
// // //                                         { label: "+91", value: "+91" },
// // //                                         { label: "+1", value: "+1" },
// // //                                         // Add other country codes as necessary
// // //                                     ]}
// // //                                 />
// // //                             </Grid>
// // //                             <Grid xs={9}>

// // //                                 <Field
// // //                                     id={name}
// // //                                     name={name}
// // //                                     type="tel"
// // //                                     placeholder={custPlaceholder}
// // //                                     value={phoneInput} // Bind value to state
// // //                                     onChange={(e) => setPhoneInput(e.target.value)} // Update state on change
// // //                                     {...rest}
// // //                                     style={{
// // //                                         borderRadius: "3px",
// // //                                         width: "100%",
// // //                                         boxSizing: "border-box",
// // //                                         height: "35px",
// // //                                         paddingLeft: "10px",
// // //                                     }}
// // //                                     className="custominput-field12"
// // //                                 />
// // //                                 <Button
// // //                                     onClick={handleSendOtp}
// // //                                     style={{
// // //                                         textTransform: "none",
// // //                                         fontSize: "10px",
// // //                                         position: "absolute",
// // //                                         right: "10px",
// // //                                         top: "5px",
// // //                                         height: "25px",
// // //                                         width: "70px",
// // //                                         backgroundColor: "#C38F51",
// // //                                         color: "white",
// // //                                         borderRadius: "23px",
// // //                                     }}
// // //                                 >
// // //                                     Send OTP
// // //                                 </Button>
// // //                             </Grid>
// // //                         </>
// // //                     )}

// // //                     {isOtpSent && (
// // //                         <div style={{ display: "flex", gap: "5px", alignItems: "center", justifyContent: "space-around" }}>
// // //                             {otpValues.map((value, index) => (
// // //                                 <input
// // //                                     key={index}
// // //                                     id={`otp-${index}`}
// // //                                     type="text"
// // //                                     maxLength="1"
// // //                                     value={value}
// // //                                     onChange={(e) => handleOtpChange(index, e.target.value)}
// // //                                     onKeyDown={(e) => handleKeyDown(index, e)}
// // //                                     style={{
// // //                                         borderRadius: "3px",
// // //                                         width: "25%",
// // //                                         height: "35px",
// // //                                         textAlign: "center",
// // //                                         border: "1px solid #ccc",
// // //                                         borderRadius: "4px",
// // //                                     }}
// // //                                 />
// // //                             ))}
// // //                             <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "end", width: "100%" }}>
// // //                                 {timer > 0 ? (
// // //                                     <>
// // //                                         <span style={{ color: "#555", fontSize: "10px", textAlign: "center" }}>
// // //                                             Resend <span>{formatTime(timer)}</span>
// // //                                         </span>
// // //                                         <Button
// // //                                             onClick={handleVerify}
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
// // //                                             Verify
// // //                                         </Button>
// // //                                     </>
// // //                                 ) : (
// // //                                     <Button
// // //                                         onClick={handleResend}
// // //                                         style={{
// // //                                             textTransform: "none",
// // //                                             fontSize: "10px",
// // //                                             height: "25px",
// // //                                             width: "70px",
// // //                                             backgroundColor: "#C38F51",
// // //                                             color: "white",
// // //                                             borderRadius: "23px",
// // //                                         }}
// // //                                     >
// // //                                         Resend
// // //                                     </Button>
// // //                                 )}
// // //                             </div>
// // //                         </div>
// // //                     )}

// // //                     {isVerified && (
// // //                         <div style={{ position: "relative" }}>
// // //                             <Field
// // //                                 id={name}
// // //                                 name={name}
// // //                                 type="tel"
// // //                                 value={phoneInput} // Show the latest phone input value
// // //                                 readOnly
// // //                                 style={{
// // //                                     width: "100%",
// // //                                     borderRadius: "3px",
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
// // //                     style={{ color: "red", fontSize: "11px", fontWeight: "400" }}
// // //                 />
// // //             </div>

// // //             {otpVerifiedError && (
// // //                 <div style={{ color: "red", fontSize: "12px" }}>
// // //                     Please verify the OTP before submitting.
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default CustomPhoneVerifyInput;

// // import React, { useState, useEffect } from "react";
// // import { Field, ErrorMessage } from "formik";
// // import { Button, Grid, InputAdornment } from "@mui/material";
// // import { CheckCircle } from "@mui/icons-material";
// // import { FaStarOfLife } from "react-icons/fa6";
// // import CustoDropDownRegister from "../CustomDropDown/CustoDropDownRegister";

// // const CustomPhoneVerifyInput = ({
// //     label = "Phone Number",
// //     name,
// //     custPlaceholder = "Enter Phone Number",
// //     important,
// //     setFieldValue,
// //     ...rest
// // }) => {
// //     const [isOtpSent, setIsOtpSent] = useState(false);
// //     const [otpValues, setOtpValues] = useState(["", "", "", ""]);
// //     const [timer, setTimer] = useState(300); // 5 minutes in seconds
// //     const [isVerified, setIsVerified] = useState(false);
// //     const [phoneInput, setPhoneInput] = useState(""); // Track phone number input
// //     const [otpVerifiedError, setOtpVerifiedError] = useState(false); // Error state for OTP verification
// //     const [phoneCode, setPhoneCode] = useState("+91"); // Default phone code

// //     useEffect(() => {
// //         if (setFieldValue) {
// //             setFieldValue("isVerified", isVerified); // Inform Formik about OTP verification status
// //         }
// //     }, [isVerified, setFieldValue]);

// //     const handleSendOtp = () => {
// //         if (!/^\d{10}$/.test(phoneInput)) {
// //             alert("Please enter a valid 10-digit phone number.");
// //             return;
// //         }
// //         setIsOtpSent(true);
// //         setTimer(300); // Reset timer to 5 minutes
// //     };

// //     const handleVerify = () => {
// //         const enteredOtp = otpValues.join(""); // Combine all OTP input values into a single string
// //         if (enteredOtp === "1234") {
// //             setIsVerified(true);
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

// //     const handleResend = () => {
// //         setTimer(60); // Reset the timer to 60 seconds
// //         handleSendOtp(); // Function to resend the OTP
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
// //                         {important && <FaStarOfLife style={{ color: "#F53E5C", fontSize: "8px", marginLeft: "3px" }} />}
// //                     </label>
// //                     {isOtpSent && (
// //                         <span style={{ fontSize: "12px", color: "#555" }}>
// //                             {phoneCode} {phoneInput}
// //                         </span>
// //                     )}
// //                 </div>

// //                 <div style={{ position: "relative", width: "100%" }}>
// //                     {!isOtpSent && !isVerified && (
// //                         <>
// //                             <Grid container spacing={1} alignItems="center">
// //                                 <Grid item xs={4}>
// //                                     <CustoDropDownRegister
// //                                         name="phoneCode"
// //                                         value={phoneCode}
// //                                         onChange={(e) => setPhoneCode(e.target.value)}
// //                                         options={[
// //                                             { label: "+91", value: "+91" },
// //                                             { label: "+1", value: "+1" },
// //                                             // Add other country codes as necessary
// //                                         ]}
// //                                     />
// //                                 </Grid>
// //                                 <Grid item xs={8}>
// //                                     <Field
// //                                         id={name}
// //                                         name={name}
// //                                         type="tel"
// //                                         placeholder={custPlaceholder}
// //                                         value={phoneInput} // Bind value to state
// //                                         onChange={(e) => setPhoneInput(e.target.value)} // Update state on change
// //                                         {...rest}
// //                                         style={{
// //                                             borderRadius: "3px",
// //                                             width: "100%",
// //                                             boxSizing: "border-box",
// //                                             height: "35px",
// //                                             paddingLeft: "10px",
// //                                         }}
// //                                         className="custominput-field12"
// //                                     />
// //                                     <Button
// //                                         onClick={handleSendOtp}
// //                                         style={{
// //                                             textTransform: "none",
// //                                             fontSize: "10px",
// //                                             position: "absolute",
// //                                             right: "10px",
// //                                             top: "13px",
// //                                             height: "25px",
// //                                             width: "70px",
// //                                             backgroundColor: "#C38F51",
// //                                             color: "white",
// //                                             borderRadius: "23px",
// //                                         }}
// //                                     >
// //                                         Send OTP
// //                                     </Button>
// //                                 </Grid>
// //                             </Grid>
// //                         </>
// //                     )}

// //                     {isOtpSent && (
// //                         <div style={{ display: "flex", gap: "5px", alignItems: "center", justifyContent: "space-around" }}>
// //                             {otpValues.map((value, index) => (
// //                                 <input
// //                                     key={index}
// //                                     id={`otp-${index}`}
// //                                     type="text"
// //                                     maxLength="1"
// //                                     value={value}
// //                                     onChange={(e) => handleOtpChange(index, e.target.value)}
// //                                     onKeyDown={(e) => handleKeyDown(index, e)}
// //                                     style={{
// //                                         borderRadius: "3px",
// //                                         width: "25%",
// //                                         height: "35px",
// //                                         textAlign: "center",
// //                                         border: "1px solid #ccc",
// //                                         borderRadius: "4px",
// //                                     }}
// //                                 />
// //                             ))}
// //                             <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "end", width: "100%" }}>
// //                                 {timer > 0 ? (
// //                                     <>
// //                                         <span style={{ color: "#555", fontSize: "10px", textAlign: "center" }}>
// //                                             Resend <span>{formatTime(timer)}</span>
// //                                         </span>
// //                                         <Button
// //                                             onClick={handleVerify}
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
// //                                             Verify
// //                                         </Button>
// //                                     </>
// //                                 ) : (
// //                                     <Button
// //                                         onClick={handleResend}
// //                                         style={{
// //                                             textTransform: "none",
// //                                             fontSize: "10px",
// //                                             height: "25px",
// //                                             width: "70px",
// //                                             backgroundColor: "#C38F51",
// //                                             color: "white",
// //                                             borderRadius: "23px",
// //                                         }}
// //                                     >
// //                                         Resend
// //                                     </Button>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     )}

// //                     {isVerified && (
// //                         <div style={{ position: "relative" }}>
// //                             <Field
// //                                 id={name}
// //                                 name={name}
// //                                 type="tel"
// //                                 value={phoneInput} // Show the latest phone input value
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

// //                 <ErrorMessage
// //                     name={name}
// //                     component="div"
// //                     className="inputs-error-msg"
// //                     style={{ color: "red", fontSize: "11px", fontWeight: "400" }}
// //                 />
// //             </div>

// //             {otpVerifiedError && (
// //                 <div style={{ color: "red", fontSize: "12px" }}>
// //                     Please verify the OTP before submitting.
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default CustomPhoneVerifyInput;

// import React, { useState, useEffect } from "react";
// import { Field, ErrorMessage } from "formik";
// import { Button, Grid, InputAdornment } from "@mui/material";
// import { CheckCircle } from "@mui/icons-material";
// import { FaStarOfLife } from "react-icons/fa6";
// // import CustoDropDownRegister from "../CustomDropDown/CustoDropDownRegister";
// import { useDispatch, useSelector } from "react-redux";
// import CustoDropDownRegister from "../../CustomDropDown/CustoDropDownRegister";

// const CustomPhoneVerifyInput = ({
//     label = "Phone Number",
//     name,
//     custPlaceholder = "Enter Phone Number",
//     important,
//     setFieldValue,
//     setPhoneInput,
//     phoneInput,
//     countrycodename,

//     isVerified,
//     setIsVerified,
//     ...rest
// }) => {
//     const [isOtpSent, setIsOtpSent] = useState(false);
//     const [otpValues, setOtpValues] = useState(["", "", "", ""]);
//     const [timer, setTimer] = useState(300); // 5 minutes in seconds
//     // const [isVerified, setIsVerified] = useState(false);
//     // const [phoneInput, setPhoneInput] = useState(""); // Track phone number input
//     console.log(phoneInput, "phoneInput")
//     const [otpVerifiedError, setOtpVerifiedError] = useState(false); // Error state for OTP verification
//     const [phoneCode, setPhoneCode] = useState("+91"); // Default phone code
//     const [phoneError, setPhoneError] = useState(""); // Error state for phone input

//     const handleSendOtp = () => {

//         if (!/^\d{10}$/.test(phoneInput)) {
//             // setPhoneError("Please enter a valid 10-digit phone number.");
//             return;
//         }
//         setPhoneError(""); // Clear phone number error if it's valid
//         setIsOtpSent(true);
//         setTimer(300); // Reset timer to 5 minutes
//     };

//     const handleVerify = () => {
//         const enteredOtp = otpValues.join(""); // Combine all OTP input values into a single string
//         if (enteredOtp === "1234") {
//             setIsVerified(true); // Update the isVerified state to true
//             setIsOtpSent(false);
//             setOtpVerifiedError(false); // Clear error after successful verification
//             // setFieldValue("isVerified", true); // Update Formik's state
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
//         setTimer(60); // Reset the timer to 60 seconds
//         handleSendOtp(); // Function to resend the OTP
//     };

//     const handleOtpChange = (index, value) => {
//         if (/[^0-9]/.test(value)) return; // Allow only numbers

//         const updatedOtp = [...otpValues];
//         updatedOtp[index] = value;
//         setOtpValues(updatedOtp);

//         if (value && index < otpValues.length - 1) {
//             document.getElementById(`phoneOtp-${index + 1}`).focus();
//         }
//     };

//     const handleKeyDown = (index, e) => {
//         if (e.key === "Backspace" && otpValues[index] === "") {
//             if (index > 0) {
//                 document.getElementById(`phoneOtp-${index - 1}`).focus();
//             }
//         }
//     };

//     const formatTime = (seconds) => {
//         const minutes = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
//     };

//     useEffect(() => {
//         setFieldValue("isVerified", isVerified); // Make sure isVerified is part of Formik values
//     }, [isVerified, setFieldValue]);

//     const handlePhoneChange = (e) => {
//         const { value } = e.target;
//         if (/^[0-9]*$/.test(value)) { // Allow only numbers
//             setPhoneInput(value);
//             setFieldValue(name, value); // Update Formik's state
//         }
//     };

//     const handleCountryCodeChange = (value) => {
//         console.log(value,"valueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
//         setFieldValue("countrycode", value); // Update Formik state
//     };
//     return (
//         <div style={{ width: "100%" }}>
//             <div style={{ width: "100%" }}>
//                 <div style={{ marginBottom: "5px", display: "flex", alignItems: "center" }}>
//                     <label
//                         htmlFor={name}
//                         className="input-heading12"
//                         style={{ fontSize: "15px", fontWeight: "450", marginRight: "10px" }}
//                     >
//                         {label}
//                         {important && <FaStarOfLife style={{ color: "#F53E5C", fontSize: "8px", marginLeft: "3px" }} />}
//                     </label>
//                     {isOtpSent && (
//                         <span style={{ fontSize: "12px", color: "#555" }}>
//                             {phoneCode} {phoneInput}
//                         </span>
//                     )}
//                 </div>

//                 <div style={{ position: "relative", width: "100%" }}>
//                     {!isOtpSent && !isVerified && (
//                         <>
//                             <Grid container spacing={1} alignItems="center">
//                                 <Grid item xs={3}>
//                                     <CustoDropDownRegister
//                                         name="countrycode"
//                                         // value={phoneCode}
//                                         // onChange={(e) => setPhoneCode(e.target.value)}
//                                         onChange={(e) => handleCountryCodeChange(e.target.value)}
//                                         options={[
//                                             { label: "+91", value: "+91" },
//                                             { label: "+1", value: "+1" },
//                                             // Add other country codes as necessary
//                                         ]}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={9}>
//                                     <Field
//                                         id={name}
//                                         name={name}
//                                         type="tel"
//                                         placeholder={custPlaceholder}
//                                         value={phoneInput} // Bind value to state
//                                         // onChange={(e) => setPhoneInput(e.target.value)} // Update state on change
//                                         onChange={handlePhoneChange}
//                                         {...rest}
//                                         style={{
//                                             borderRadius: "3px",
//                                             width: "100%",
//                                             boxSizing: "border-box",
//                                             height: "35px",
//                                             paddingLeft: "10px",
//                                         }}
//                                         className="custominput-field12"
//                                     />
//                                     <Button
//                                         onClick={handleSendOtp}
//                                         style={{
//                                             textTransform: "none",
//                                             fontSize: "10px",
//                                             position: "absolute",
//                                             right: "10px",
//                                             top: "13px",
//                                             height: "25px",
//                                             width: "70px",
//                                             backgroundColor: "#C38F51",
//                                             color: "white",
//                                             borderRadius: "23px",
//                                         }}
//                                     >
//                                         Send OTP
//                                     </Button>
//                                 </Grid>
//                             </Grid>

//                             {phoneError && (
//                                 <div style={{ color: "red", fontSize: "12px" }}>
//                                     {phoneError} {/* Display the error message */}
//                                 </div>
//                             )}
//                         </>
//                     )}

//                     {isOtpSent && (
//                         <div style={{ display: "flex", gap: "5px", alignItems: "center", justifyContent: "space-around" }}>
//                             {otpValues.map((value, index) => (
//                                 <input
//                                     key={index}
//                                     id={`phoneOtp-${index}`}
//                                     type="text"
//                                     name="phoneOtp"

//                                     maxLength="1"
//                                     value={value}
//                                     onChange={(e) => handleOtpChange(index, e.target.value)}
//                                     onKeyDown={(e) => handleKeyDown(index, e)}
//                                     style={{
//                                         borderRadius: "3px",
//                                         width: "25%",
//                                         height: "35px",
//                                         textAlign: "center",
//                                         border: "1px solid #ccc",
//                                         borderRadius: "4px",
//                                     }}
//                                 />
//                             ))}
//                             <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "end", width: "100%" }}>
//                                 {timer > 0 ? (
//                                     <>
//                                         <span style={{ color: "#555", fontSize: "10px", textAlign: "center" }}>
//                                             Resend <span>{formatTime(timer)}</span>
//                                         </span>
//                                         <Button
//                                             onClick={handleVerify}
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
//                                             Verify
//                                         </Button>
//                                     </>
//                                 ) : (
//                                     <Button
//                                         onClick={handleResend}
//                                         style={{
//                                             textTransform: "none",
//                                             fontSize: "10px",
//                                             height: "25px",
//                                             width: "70px",
//                                             backgroundColor: "#C38F51",
//                                             color: "white",
//                                             borderRadius: "23px",
//                                         }}
//                                     >
//                                         Resend
//                                     </Button>
//                                 )}
//                             </div>
//                         </div>
//                     )}

//                     {isVerified && (
//                         <div style={{ position: "relative" }}>
//                             <Field
//                                 id={name}
//                                 name={name}
//                                 type="number"
//                                 value={phoneInput} // Show the latest phone input value
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

//                 <ErrorMessage
//                     name={name}
//                     component="div"
//                     className="inputs-error-msg"
//                     style={{ color: "red", fontSize: "11px", fontWeight: "400" }}
//                 />
//             </div>

//             {otpVerifiedError && (
//                 <div style={{ color: "red", fontSize: "12px" }}>
//                     Please verify the OTP before submitting.
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CustomPhoneVerifyInput;

import React, { useState, useEffect } from "react";
import { Field, ErrorMessage } from "formik";
import { Box, Button, Grid, InputAdornment } from "@mui/material";
import { CheckCircle, Edit } from "@mui/icons-material";
import { FaStarOfLife } from "react-icons/fa6";
import CustoDropDownRegister from "../../CustomDropDown/CustoDropDownRegister";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import { toast } from "react-toastify";

const CustomPhoneVerifyInput = ({
  label = "Phone Number",
  name,
  custPlaceholder = "Enter Phone Number",
  important,
  setFieldValue,
  setPhoneInput,
  phoneInput,
  countrycodename,

  isVerified,
  setIsVerified,
  ...rest
}) => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  // const [isVerified, setIsVerified] = useState(false);
  // const [phoneInput, setPhoneInput] = useState(""); // Track phone number input
  console.log(phoneInput, "phoneInput");
  const [otpVerifiedError, setOtpVerifiedError] = useState(false); // Error state for OTP verification
  const [phoneCode, setPhoneCode] = useState("+91"); // Default phone code
  const [phoneError, setPhoneError] = useState(""); // Error state for phone input

  const dispatch = useDispatch();

  const handleSendOtp = async () => {
    if (!phoneInput) {
      toast.error("Please enter a phone number.");
      return; // Return early if the phone number field is empty
    }

    if (!/^\d{10}$/.test(phoneInput)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return; // Return early if phone number is not valid
    }

    const data2 = {
      data: {
        phone: phoneInput,
      },
      method: "post",
      apiName: "register/checkCustomerExistPhoneForRegister",
    };
    const verifyPhone = await dispatch(
      actions.CHECKCUSTOMEREXISTFORPHONEREGISTER(data2)
    );
    if (verifyPhone?.payload?.message === "Success") {
      // const data1 = {
      //   data: {
      //     email: emailInput,
      //   },
      //   method: "post",
      //   apiName: "sendOTP",
      // };
      // dispatch(actions.EMAILSENDOTP(data1));
      // setIsOtpSent(true);
      // setTimer(300); // Reset timer to 5 minutes
      toast.success("OTP send Successfully");

      setPhoneError(""); // Clear phone number error if it's valid
      setIsOtpSent(true);
      setTimer(300); // Reset timer to 5 minutes
    } else {
      toast.error(verifyPhone?.payload?.message);
    }

    // setPhoneError("Please enter a valid 10-digit phone number.");
  };

  // const handleSendOtp = async () => {
  //   // const data2 = {
  //   //   data: {
  //   //     phone: phoneInput,
  //   //   },
  //   //   method: "post",
  //   //   apiName: "register/checkCustomerExistPhoneForRegister",
  //   // };
  //   // const verifyPhone = await dispatch(
  //   //   actions.CHECKCUSTOMEREXISTFORPHONEREGISTER(data2)
  //   // );
  //   // if (verifyPhone?.payload?.message === "Success") {
  //     // const data1 = {
  //     //   data: {
  //     //     email: emailInput,
  //     //   },
  //     //   method: "post",
  //     //   apiName: "sendOTP",
  //     // };
  //     // dispatch(actions.EMAILSENDOTP(data1));
  //     // setIsOtpSent(true);
  //     // setTimer(300); // Reset timer to 5 minutes
  //     // toast.success("OTP send Successfully");

  //   // } else {
  //   //   toast.error(verifyPhone?.payload?.message);
  //   // }

  //   if (!/^\d{10}$/.test(phoneInput)) {
  //     // alert("Please enter a valid 10-digit phone number.");
  //     return;
  //   }
  //   setPhoneError(""); // Clear phone number error if it's valid
  //   setIsOtpSent(true);
  //   setTimer(300); // Reset timer to 5 minutes
  // };

  // const handleVerify = () => {
  //     const enteredOtp = otpValues.join(""); // Combine all OTP input values into a single string
  //     if (enteredOtp === "1234") {
  //         setIsVerified(true);
  //         setIsOtpSent(false);
  //         setOtpVerifiedError(false); // Clear error after successful verification
  //     } else {
  //         setOtpVerifiedError(true); // Set error if OTP is incorrect
  //         alert("Incorrect OTP. Please try again.");
  //     }
  // };

  const handleVerify = () => {
    const enteredOtp = otpValues.join(""); // Combine all OTP input values into a single string
    if (enteredOtp === "1234") {
      setIsVerified(true); // Update the isVerified state to true
      setIsOtpSent(false);
      setOtpVerifiedError(false); // Clear error after successful verification
      setFieldValue("isVerified", true); // Update Formik's state
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
    setTimer(60); // Reset the timer to 60 seconds
    handleSendOtp(); // Function to resend the OTP
  };

  const handleOtpChange = (index, value) => {
    if (/[^0-9]/.test(value)) return; // Allow only numbers

    const updatedOtp = [...otpValues];
    updatedOtp[index] = value;
    setOtpValues(updatedOtp);

    if (value && index < otpValues.length - 1) {
      document.getElementById(`phoneOtp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && otpValues[index] === "") {
      if (index > 0) {
        document.getElementById(`phoneOtp-${index - 1}`).focus();
      }
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  useEffect(() => {
    setFieldValue("isVerified", isVerified); // Make sure isVerified is part of Formik values
  }, [isVerified, setFieldValue]);

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    if (/^[0-9]*$/.test(value)) {
      // Allow only numbers
      setPhoneInput(value);
      setFieldValue(name, value); // Update Formik's state
    }
  };

  const handleCountryCodeChange = (value) => {
    setPhoneCode(value);
    console.log(value, "valueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    setFieldValue("countrycode", value); // Update Formik state
  };

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
            {label}
            {important && (
              <FaStarOfLife
                style={{ color: "#F53E5C", fontSize: "8px", marginLeft: "3px" }}
              />
            )}
          </label>
          {isOtpSent && (
            <>
              <span style={{ fontSize: "12px", color: "#555" }}>
                {phoneCode} {phoneInput}
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
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={3}>
                  <CustoDropDownRegister
                    name="countrycode"
                    value={phoneCode}
                    // onChange={(e) => setPhoneCode(e.target.value)}
                    onChange={(e) => handleCountryCodeChange(e.target.value)}
                    options={[
                      { label: "+91", value: "+91" },
                      { label: "+1", value: "+1" },
                      // Add other country codes as necessary
                    ]}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Field
                    id={name}
                    name={name}
                    type="tel"
                    placeholder={custPlaceholder}
                    value={phoneInput} // Bind value to state
                    // onChange={(e) => setPhoneInput(e.target.value)} // Update state on change
                    onChange={handlePhoneChange}
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
                      top: "13px",
                      height: "25px",
                      width: "70px",
                      backgroundColor: "#C38F51",
                      color: "white",
                      borderRadius: "23px",
                    }}
                  >
                    Send OTP
                  </Button>
                </Grid>
              </Grid>

              {phoneError && (
                <div style={{ color: "red", fontSize: "12px" }}>
                  {phoneError} {/* Display the error message */}
                </div>
              )}
            </>
          )}

          {isOtpSent && (
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
                  id={`phoneOtp-${index}`}
                  type="text"
                  name="phoneOtp"
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
          )}

          {isVerified && (
            <div style={{ position: "relative" }}>
              <Field
                id={name}
                name={name}
                type="number"
                value={phoneInput} // Show the latest phone input value
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

        <ErrorMessage
          name={name}
          component="div"
          className="inputs-error-msg"
          style={{ color: "red", fontSize: "11px", fontWeight: "400" }}
        />
      </div>

      {otpVerifiedError && (
        <div style={{ color: "red", fontSize: "12px" }}>
          Please verify the OTP before submitting.
        </div>
      )}
    </div>
  );
};

export default CustomPhoneVerifyInput;
