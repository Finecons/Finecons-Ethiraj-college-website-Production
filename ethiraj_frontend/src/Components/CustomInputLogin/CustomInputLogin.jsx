// // // // import React, { useState } from "react";
// // // // import "./CustomInputLogin.css";
// // // // import "../ComponentsCss/componet.css";
// // // // import { Field, ErrorMessage } from "formik";
// // // // import { colors, InputAdornment } from "@mui/material";
// // // // import { Email } from "@mui/icons-material";

// // // // const CustomInputLogin = ({ label, name, custPlaceholder, inputType, ...rest }) => {
// // // //   const validateInput = (value) => {
// // // //     let error;
// // // //     if (!value) {
// // // //       error = ` Field is ${inputType === "text" ? "Required" : "Required"}`;
// // // //     } else if (inputType === "number" && isNaN(value)) {
// // // //       error = "Field is Required";

// // // //     }
// // // //     return error;
// // // //   };
// // // //   return (
// // // //     <div style={{ width: "95%" }}>
// // // //       <div style={{ width: "100%" }}>
// // // //         <div>
// // // //           <label
// // // //             htmlFor={name}
// // // //             className="input-heading12"
// // // //             style={{ fontSize: "16px", fontWeight: "700" }}
// // // //           >
// // // //             {label}
// // // //           </label>
// // // //         </div>
// // // //          <InputAdornment position="start" style={{ position: "absolute", top: "50%", left: "8px", transform: "translateY(-50%)" }}>
// // // //             <Email style={{ color: "black" }} />
// // // //           </InputAdornment>
// // // //         <Field
// // // //           id={name}
// // // //           name={name}
// // // //           // type={inputType}
// // // //           as={inputType === "textarea" ? "textarea" : "input"} //
// // // //           placeholder={`${custPlaceholder ? custPlaceholder : "Enter Input"}`}
// // // //           // autoComplete="off" // Disable autofill
// // // //           {...rest}
// // // //           style={inputType === "textarea" ? { height: "100px" || "100px" } : {}}

// // // //           className='custominput-field12'
// // // //           InputProps={{
// // // //             startAdornment: (
// // // //               <InputAdornment position="start">
// // // //                 <Email style={{color:"bla"}} />
// // // //               </InputAdornment>
// // // //             ),
// // // //           }}

// // // //         // validate={validateInput}

// // // //         />
// // // //         <ErrorMessage name={name} component="div" className="inputs-error-msg" style={{ color: "red" }} />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CustomInputLogin;

// // // import React from "react";
// // // import "./CustomInputLogin.css";
// // // import "../ComponentsCss/componet.css";
// // // import { Field, ErrorMessage } from "formik";
// // // import { InputAdornment } from "@mui/material";
// // // import { Email } from "@mui/icons-material";

// // // const CustomInputLogin = ({ label, name, custPlaceholder, image, inputType, ...rest }) => {
// // //   const validateInput = (value) => {
// // //     let error;
// // //     if (!value) {
// // //       error = `Field is Required`;
// // //     } else if (inputType === "number" && isNaN(value)) {
// // //       error = "Field is Required";
// // //     }
// // //     return error;
// // //   };

// // //   return (
// // //     <div style={{ width: "100%" }}>
// // //       <div style={{ width: "100%" }}>
// // //         <div style={{paddingBottom:"4px"}}>
// // //           <label
// // //             htmlFor={name}
// // //             className="input-heading12"
// // //             style={{ fontSize: "16px"}}
// // //           >
// // //             {label}
// // //           </label>
// // //         </div>
// // //         <div style={{ position: "relative", width: "100%" }}>
// // //           {/* Email Icon as Start Adornment */}
// // //           {image && (
// // //             < InputAdornment position="start" style={{ position: "absolute", top: "50%", left: "8px", transform: "translateY(-50%)" }}>
// // //               <img src={image} style={{ color: "black", height: "17px" }} />
// // //             </InputAdornment>
// // //           )}
// // //           {/* Input Field */}
// // //           <Field
// // //             id={name}
// // //             name={name}
// // //             type={inputType === "textarea" ? "textarea" : inputType}
// // //             placeholder={custPlaceholder || "Enter Input"}
// // //             {...rest}
// // //             style={{

// // //               borderRadius:"3px",
// // //               width: "100%",
// // //               color: "#7A7A7A",
// // //               fontSize:"14px",

// // //               // paddingLeft: "40px", // Add padding to accommodate the icon
// // //               boxSizing: "border-box",
// // //               height: inputType === "textarea" ? "115px" : "35px",
// // //               paddingLeft: inputType === "textarea" ? "10px" : "10px" // Add padding to accommodate the icon

// // //             }}
// // //             // sx={inputType === "textarea" ? { height: "100px" || "100px" } : {}}
// // //             className="custominput-field12"
// // //             // validate={validateInput}

// // //           />
// // //         </div>
// // //         <ErrorMessage
// // //           name={name}
// // //           component="div"
// // //           // fontSize="10px"
// // //           // className="inputs-error-msg"
// // //           style={{ color: "black",fontSize:"10px" ,color:"red"}}
// // //           // sx={{fontSize:"30px"}}
// // //         />
// // //       </div>
// // //     </div >
// // //   );
// // // };

// // // export default CustomInputLogin;

// // import React from "react";
// // import "./CustomInputLogin.css";
// // import "../ComponentsCss/componet.css";
// // import { Field, ErrorMessage } from "formik";
// // import { InputAdornment } from "@mui/material";

// // const CustomInputLogin = ({
// //   label,
// //   name,
// //   custPlaceholder,
// //   image,
// //   setFieldValue,
// //   inputType,
// //   currency,
// //   ...rest
// // }) => {
// //   return (
// //     <div style={{ width: "100%" }}>
// //       <div style={{ paddingBottom: "4px" }}>
// //         <label
// //           htmlFor={name}
// //           className="input-heading12"
// //           style={{ fontSize: "16px" }}
// //         >
// //           {label}
// //         </label>
// //       </div>

// //       {/* Container for input and currency */}
// //       <div
// //         style={{
// //           display: "flex",
// //           alignItems: "center",
// //           width: "100%",
// //           gap: "8px",
// //         }}
// //       >
// //         <div style={{ position: "relative", flex: "1" }}>
// //           {/* Icon as Start Adornment */}
// //           {image && (
// //             <InputAdornment
// //               position="start"
// //               style={{
// //                 position: "absolute",
// //                 top: "50%",
// //                 left: "8px",
// //                 transform: "translateY(-50%)",
// //               }}
// //             >
// //               <img src={image} style={{ height: "17px" }} />
// //             </InputAdornment>
// //           )}

// //           {/* Input Field */}
// //           {/* <Field
// //             id={name}
// //             name={name}
// //             type={inputType}
// //             placeholder={custPlaceholder || "Enter Input"}
// //             {...rest}
// //             style={{
// //               borderRadius: "3px",
// //               width: "100%",
// //               color: "#7A7A7A",
// //               fontSize: "14px",
// //               boxSizing: "border-box",
// //               height: "35px",
// //               paddingLeft: image ? "30px" : "10px",
// //             }}
// //             className="custominput-field12"
// //           />
// //         </div> */}

// //           <Field
// //             id={name}
// //             name={name}
// //             type={inputType === "textarea" ? "textarea" : inputType}
// //             placeholder={custPlaceholder || "Enter Input"}
// //             {...rest}
// //             style={{
// //               borderRadius: "3px",
// //               width: "100%",
// //               color: "#7A7A7A",
// //               fontSize: "14px",

// //               // paddingLeft: "40px", // Add padding to accommodate the icon
// //               boxSizing: "border-box",
// //               height: inputType === "textarea" ? "115px" : "35px",
// //               paddingLeft: inputType === "textarea" ? "10px" : "10px", // Add padding to accommodate the icon
// //             }}
// //             // sx={inputType === "textarea" ? { height: "100px" || "100px" } : {}}
// //             className="custominput-field12"
// //             // validate={validateInput}
// //           />
// //         </div>

// //         {/* Currency Dropdown (or any adjacent input) */}
// //         {currency && (
// //           <Field
// //             as="select"
// //             name="currency"
// //             onChange={(e) => setFieldValue("currency", e.target.value)}
// //             style={{
// //               borderRadius: "3px",
// //               width: "80px",
// //               height: "35px",
// //               fontSize: "14px",
// //               padding: "5px",
// //             }}
// //           >
// //             <option value="USD">$ USD</option>
// //             <option value="EUR">€ EUR</option>
// //             <option value="GBP">£ GBP</option>
// //           </Field>
// //         )}
// //       </div>

// //       {/* Error Message */}
// //       <ErrorMessage
// //         name={name}
// //         component="div"
// //         style={{ color: "red", fontSize: "10px" }}
// //       />
// //     </div>
// //   );
// // };

// // export default CustomInputLogin;


// // import React, { useState } from "react";
// // import "./CustomInputLogin.css";
// // import "../ComponentsCss/componet.css";
// // import { Field, ErrorMessage } from "formik";
// // import { colors, InputAdornment } from "@mui/material";
// // import { Email } from "@mui/icons-material";

// // const CustomInputLogin = ({ label, name, custPlaceholder, inputType, ...rest }) => {
// //   const validateInput = (value) => {
// //     let error;
// //     if (!value) {
// //       error = ` Field is ${inputType === "text" ? "Required" : "Required"}`;
// //     } else if (inputType === "number" && isNaN(value)) {
// //       error = "Field is Required";

// //     }
// //     return error;
// //   };
// //   return (
// //     <div style={{ width: "95%" }}>
// //       <div style={{ width: "100%" }}>
// //         <div>
// //           <label
// //             htmlFor={name}
// //             className="input-heading12"
// //             style={{ fontSize: "16px", fontWeight: "700" }}
// //           >
// //             {label}
// //           </label>
// //         </div>
// //          <InputAdornment position="start" style={{ position: "absolute", top: "50%", left: "8px", transform: "translateY(-50%)" }}>
// //             <Email style={{ color: "black" }} />
// //           </InputAdornment>
// //         <Field
// //           id={name}
// //           name={name}
// //           // type={inputType}
// //           as={inputType === "textarea" ? "textarea" : "input"} //
// //           placeholder={`${custPlaceholder ? custPlaceholder : "Enter Input"}`}
// //           // autoComplete="off" // Disable autofill 
// //           {...rest}
// //           style={inputType === "textarea" ? { height: "100px" || "100px" } : {}}

// //           className='custominput-field12'
// //           InputProps={{
// //             startAdornment: (
// //               <InputAdornment position="start">
// //                 <Email style={{color:"bla"}} />
// //               </InputAdornment>
// //             ),
// //           }}

// //         // validate={validateInput}

// //         />
// //         <ErrorMessage name={name} component="div" className="inputs-error-msg" style={{ color: "red" }} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default CustomInputLogin;


// import React from "react";
// import "../CustomInputLogin/CustomInputLogin.css";
// import "../ComponentsCss/componet.css";
// import { Field, ErrorMessage } from "formik";
// import { InputAdornment, Typography } from "@mui/material";
// import { Email } from "@mui/icons-material";
// import { FaStarOfLife } from "react-icons/fa6";

// const CustomInputLogin = ({ label, name, custPlaceholder, image, important, inputType, ...rest }) => {
//   // const validateInput = (value) => {
//   //   let error;
//   //   if (!value) {
//   //     error = `Field is Required`;
//   //   } else if (inputType === "number" && isNaN(value)) {
//   //     error = "Field is Required";
//   //   }
//   //   return error;
//   // };

  

//   return (
//     <div style={{ width: "100%" }}>
//       <div style={{ width: "100%" }}>
        
//         <div style={{ position: "relative", width: "100%" }}>
         
//           {/* Input Field */}
//           <Field
//             id={name}
//             // inputType={inputType}
//             type={inputType !== "textarea" ? inputType : "text"}
//             name={name}
//             as={inputType === "textarea" ? "textarea" : "input"}
//             placeholder={custPlaceholder || "Enter Input"}
//             {...rest}
//             style={{
//               width: "100%",
//               borderRadius: "3px",
//                backgroundColor: "transparent",
//                     border: "1px solid rgba(255,255,255,0.4)",
//                     input: { color: "white" },
//                     mb: "19px",
//                     fontSize: 13,
                    
//                     width: "100%",

//               // paddingLeft: "40px", // Add padding to accommodate the icon
//               boxSizing: "border-box",
//               height: inputType === "textarea" ? "100px" : "45px",
//               paddingLeft: inputType === "textarea" ? "10px" : "10px" // Add padding to accommodate the icon

//             }}
//             // sx={inputType === "textarea" ? { height: "100px" || "100px" } : {}}
//             // className="custominput-field12"
//             // validate={validateInput}
//           />
//         </div>

//         <ErrorMessage
//           name={name}
//           component="div"
//           className="inputs-error-msg"
//           style={{ color: "red", fontSize: "12px", fontWeight: '400' }}
//         />
//       </div>
//     </div >
//   );
// };

// export default CustomInputLogin;

import React from "react";
import { Field, ErrorMessage } from "formik";
import "../CustomInputLogin/CustomInputLogin.css";
import "../ComponentsCss/componet.css";

const CustomInputLogin = ({
  label,
  name,
  custPlaceholder,
  important,
  inputType,
  ...rest
}) => {
  return (
    <div style={{ width: "100%", marginBottom: "15px" }}>
     
      <Field
        id={name}
        name={name}
        type={inputType !== "textarea" ? inputType : "text"}
        as={inputType === "textarea" ? "textarea" : "input"}
        placeholder={custPlaceholder || "Enter Input"}
        {...rest}
        style={{
          width: "100%",
          borderRadius: "3px",
          backgroundColor: "transparent",
          border: "1px solid rgba(255,255,255,0.4)",
          color: "white",
          fontSize: "16px",
          boxSizing: "border-box",
          padding: "10px",
          fontWWeight: "400 !important",
          height: inputType === "textarea" ? "120px" : "45px",
          // resize: inputType === "textarea" ? "vertical" : "none",
          outline: "none",
        }}
      />

      <ErrorMessage
        name={name}
        component="div"
        style={{
          color: "#ff4d4f",
          fontSize: "12px",
          marginTop: "4px",
          fontWeight: 400,
        }}
      />
    </div>
  );
};

export default CustomInputLogin;