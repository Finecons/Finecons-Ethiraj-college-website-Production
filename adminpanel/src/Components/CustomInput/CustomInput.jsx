// import React, { useState } from "react";
// import "./CustomInput.css";
// import "../ComponentsCss/componet.css";
// import { Field, ErrorMessage } from "formik";

// const CustomInput = ({ label, name,inputType,custPlaceholder,InputProps, ...rest }) => {
//   const validateInput = (value) => {
//     let error;
//     if (!value) {
//       error = `Please enter ${inputType === "text" ? "text" : "a number"}`;
//     } else if (inputType === "number" && isNaN(value)) {
//       error = "Please enter a valid number";
//     } else if (inputType === "text" && !/^[a-zA-Z]*$/i.test(value)) {
//       error = "Only alphabetic characters are allowed";
//     }
//     return error;
//   };
//   return (
//     <div style={{ width: "100%" }}>
//       {/* <InputLabel
//         htmlFor="movie-name"
//         className="input-heading"
//         sx={{ fontSize: "14px", fontWeight: "700" }}
//       >
//        {inputHeading?inputHeading : "InputText"}
//       </InputLabel>
//       <TextField
//         autoComplete="off"
//         type="text"
//         id="movie-name"
//         placeholder={`${inputPlaceholder?inputPlaceholder:"Enter Input"}`}
//         variant="outlined"
//         value={value}
//         className="custominput-field"
//         onChange={handleChange}
//         InputProps={{
//           sx: {
//             height: "37px",
//             borderRadius: "12px",
//             fontSize:"14px"
//             // width:"90%" ,
//           },
//         }}
//       /> */}

//       <div style={{ width: "90%" }}>
//         <div>
//           <label
//             htmlFor={name}
//             className="input-heading"
//             style={{ fontSize: "14px", fontWeight: "700" }}
//           >
//             {label}
//           </label>
//         </div>
//         <Field
//           id={name}
//           name={name}
//           type={inputType}
//           InputProps={InputProps}
//           validate={validateInput}
//           placeholder={`${custPlaceholder?custPlaceholder:"Enter Input"}`}
//           {...rest}
//           className='custominput-field'

//         />
//         <ErrorMessage name={name} component="div" />
//       </div>
//     </div>
//   );
// };

// export default CustomInput;

// import React from "react";
// import "./CustomInputIcon.css";
// import "../ComponentsCss/componet.css";
// import { Field, ErrorMessage } from "formik";

// const CustomInputIcon = ({ label, name, inputType, custPlaceholder, InputProps, icon, ...rest }) => {
//   const validateInput = (value) => {
//     let error;
//     if (!value) {
//       error = `Please enter ${inputType === "text" ? "text" : "a number"}`;
//     } else if (inputType === "number" && isNaN(value)) {
//       error = "Please enter a valid number";
//     } else if (inputType === "text" && !/^[a-zA-Z]*$/i.test(value)) {
//       error = "Only alphabetic characters are allowed";
//     }
//     return error;
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <div>
//         <label
//           htmlFor={name}
//           className="input-heading1"
//           style={{ fontSize: "14px", fontWeight: "700" }}
//         >
//           {label}
//         </label>
//       </div>
//       <div className="input-container1">
//         {icon && <span className="input-icon1">{icon}</span>}
//         <Field
//           id={name}
//           name={name}
//           type={inputType}
//           InputProps={InputProps}
//           validate={validateInput}
//           placeholder={`${custPlaceholder ? custPlaceholder : "Enter Input"}`}
//           {...rest}
//           className='custominput-field1'
//         />
//       </div>
//       <ErrorMessage name={name} component="div" />
//     </div>
//   );
// };

// export default CustomInputIcon;

import React from "react";
import "./CustomInputIcon.css";
import "../ComponentsCss/componet.css";
import { Field, ErrorMessage } from "formik";
import { Height } from "@mui/icons-material";

const CustomInput = ({
  label,
  name,
  inputType,
  custPlaceholder,
  passedClassName,
  InputProps,
  color,
  icon,
  ...rest
}) => {
  const validateInput = (value) => {
    let error;
    if (!value) {
      error = `Please enter ${inputType === "text" ? "text" : "a number"}`;
    } else if (inputType === "number" && isNaN(value)) {
      error = "Please enter a valid number";
    } else if (inputType === "text" && !/^[a-zA-Z]*$/i.test(value)) {
      error = "Only alphabetic characters are allowed";
    }
    return error;
  };

  return (
    <div style={{ width: "95%" }}>
      <div>
        <label
          htmlFor={name}
          className="input-heading"
          style={{ fontSize: "14px", fontWeight: "700", color: color }}
        >
          {label}
        </label>
      </div>
      <div className="input-container1">
        {icon && (
          <span
            className="input-icon1"
            style={{
              borderRight: "1px solid #ccc",
              paddingRight: "8px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            {icon}
          </span>
        )}
        <Field
          id={name}
          name={name}
          type={inputType}
          InputProps={InputProps}
          validate={validateInput}
          placeholder={`${custPlaceholder ? custPlaceholder : "Enter Input"}`}
          {...rest}
          className={passedClassName ? passedClassName : "custominput-field1"}
          style={{
            height: "37px",
            width: "100%",
            // paddingLeft: "40px",
            fontSize: "14px",
            outline: "none",
            border: "1px solid #ced4da",
            boxSizing: "border-box",
          }}
          // style={{height:height}}
        />
      </div>
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default CustomInput;

<CustomInput />;
