// // // // CustomDropdownMui.js
// // // import React from "react";
// // // import MenuItem from "@mui/material/MenuItem";
// // // import Select from "@mui/material/Select";
// // // import "./CustomDropdownMui.css";
// // // import "../ComponentsCss/componet.css";
// // // import { InputLabel } from "@mui/material";
// // // import { Field, ErrorMessage } from "formik";

// // // const CustomDropdownwithButton = ({
// // //   label,
// // //   name,
// // //   options,
// // //   custPlaceholder,
// // //   setFieldValue,
// // //   selectmovieIdfn,
// // //   selectCategoryIdfn,
// // //   onChange,
// // //   ...rest
// // // }) => {
// // //   console.log(options, "options122121")
// // //   return (
// // //     <div style={{ width: "95%" }}>
// // //       {label && (
// // //         <div>
// // //           <label htmlFor={name} className="input-heading12" style={{ fontSize: "16px", fontWeight: "700" }}
// // //           >
// // //             {label}
// // //           </label>
// // //         </div>
// // //       )}
// // //       {/* <Field
// // //         as="select"
// // //         id={name}
// // //         name={name}

// // //         {...rest}
// // //         className="customDropdown-input"

// // //       > */}
// // //       <Field name={name}>
// // //         {({ field, form }) => (
// // //           <select
// // //             id={name}
// // //             {...field}
// // //             {...rest}
// // //             className="customDropdown-input"
// // //             onChange={(e) => {
// // //               const selectedValue = e.target.value;
// // //               form.setFieldValue(name, selectedValue);  // Update Formik field value
// // //               if (onChange) onChange(e);                // Call custom onChange handler if provided
// // //             }}
// // //           >
// // //             {custPlaceholder && (
// // //               <option value="" disabled className="customDropdown-disabled-option">
// // //                 {custPlaceholder ? custPlaceholder : "Select dropddown"}
// // //               </option>
// // //             )}
// // //             {options.map((option) => (
// // //               <option key={option.value} value={option.value}>
// // //                 {option.label}
// // //               </option>
// // //             ))}
// // //           </select>
// // //         )}
// // //       </Field>
// // //       <ErrorMessage name={name} component="div" className="inputs-error-msg" />
// // //     </div>
// // //   );
// // // };

// // // export default CustomDropdownwithButton;


// // // CustomDropdownMui.js
// // import React, { useState } from "react";
// // import { Button, Menu, MenuItem } from "@mui/material";
// // import { ErrorMessage } from "formik";
// // import "./CustomDropdownMui.css";
// // import "../ComponentsCss/componet.css";

// // const CustomDropdownwithButton = ({
// //   label,
// //   name,
// //   options,
// //   custPlaceholder,
// //   setFieldValue,
// //   onChange,
// //   ...rest
// // }) => {
// //   const [anchorEl, setAnchorEl] = useState(null); // For opening/closing menu
// //   const [selectedValue, setSelectedValue] = useState(""); // To store selected value

// //   // Function to handle button click and open menu
// //   const handleButtonClick = (event) => {
// //     setAnchorEl(event.currentTarget); // Set anchor element for the menu
// //   };

// //   // Function to handle dropdown item selection
// //   const handleMenuItemClick = (option) => {
// //     setSelectedValue(option.label); // Set selected option as button label
// //     setAnchorEl(null); // Close the menu
// //     if (onChange) onChange(option); // Call custom onChange handler if provided
// //     setFieldValue(name, option.value); // Update Formik field value
// //   };

// //   // Function to close the menu
// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };

// //   return (
// //     <div style={{ width: "95%" }}>
// //       {label && (
// //         <div>
// //           <label htmlFor={name} className="input-heading12" style={{ fontSize: "16px", fontWeight: "700" }}>
// //             {label}
// //           </label>
// //         </div>
// //       )}

// //       {/* Button to trigger dropdown */}
// //       <Button
// //         variant="contained"
// //         color="primary"
// //         onClick={handleButtonClick}
// //       >
// //         {selectedValue || custPlaceholder || "Select Option"}
// //       </Button>

// //       {/* Menu that appears below the button */}
// //       <Menu
// //         anchorEl={anchorEl}           // The anchor element (button) to position the menu below
// //         open={Boolean(anchorEl)}       // Open menu if anchorEl is not null
// //         onClose={handleClose}          // Close menu when clicked outside
// //         keepMounted
// //       >
// //         {options.map((option) => (
// //           <MenuItem
// //             key={option.value}
// //             name={name}
// //             onClick={() => handleMenuItemClick(option)} // Handle click on each option
// //           >
// //             {option.label}
// //           </MenuItem>
// //         ))}
// //       </Menu>

// //       <ErrorMessage name={name} component="div" className="inputs-error-msg" />
// //     </div>
// //   );
// // };

// // export default CustomDropdownwithButton;



// import React, { useState, useEffect } from "react";
// import { Button, Menu, MenuItem } from "@mui/material";
// import { ErrorMessage } from "formik";
// import "./CustomDropdownMui.css";
// import "../ComponentsCss/componet.css";

// const CustomDropdownwithButton = ({
//   label,
//   name,
//   options,
//   custPlaceholder,
//   setFieldValue,
//   onChange,
//   initialValue,  // Accept the initial value as a prop
//   ...rest
// }) => {
//   const [anchorEl, setAnchorEl] = useState(null); // For opening/closing menu
//   const [selectedValue, setSelectedValue] = useState(initialValue || ""); // Initialize with initialValue
// console.log(initialValue,"initialvalue")

//   console.log(selectedValue,"selectedValue")
//   useEffect(() => {
//     if (initialValue) {
//       setSelectedValue(initialValue); // Set the dropdown value to the initial value
//     }
//   }, [initialValue]);

//   const handleButtonClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuItemClick = (option) => {
//     setSelectedValue(option.label); // Set the selected option as the button label
//     setAnchorEl(null);              // Close the menu
//     if (onChange) onChange(option); // Call custom onChange handler if provided
//     setFieldValue(name, option.value); // Update Formik field value
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div style={{ width: "95%" }}>
//       {label && (
//         <div>
//           <label htmlFor={name} className="input-heading12" style={{ fontSize: "16px", fontWeight: "700" }}>
//             {label}
//           </label>
//         </div>
//       )}

//       {/* Button to trigger dropdown */}
//       <Button variant="contained" color="primary" onClick={handleButtonClick}>
//         {selectedValue}
//       </Button>

//       {/* Menu that appears below the button */}
//       <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} keepMounted>
//         {options.map((option) => (
//           <MenuItem key={option.value} name={name} onClick={() => handleMenuItemClick(option)}>
//             {option.label}
//           </MenuItem>
//         ))}
//       </Menu>

//       <ErrorMessage name={name} component="div" className="inputs-error-msg" />
//     </div>
//   );
// };

// export default CustomDropdownwithButton;






import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { ErrorMessage } from "formik";
import "./CustomDropdownMui.css";
import "../ComponentsCss/componet.css";
import { useSelector } from "react-redux";

const CustomDropdownwithButton = ({
    label,
    name,
    options,
    custPlaceholder,
    setAnchorEl,
    anchorEl,
    handleClose,
    setSelectedValue,
    setFieldValue,
    onChange,
    Ordered_Status,
    initialValue,  // Accept the initial value as a prop
    ...rest
}) => {
  
    const { GetDropDataForStatusChage } = useSelector(
        (state) => state?.GetDropDataForStatusChage
      );

    const handleMenuItemClick = (option) => {
        setSelectedValue(option.label); // Set the selected option as the button label
        setAnchorEl(null);              // Close the menu
        if (onChange) onChange(option); // Call custom onChange handler if provided
        setFieldValue(name, option.value); // Update Formik field value
    };

   

    return (
        <div style={{ width: "95%" }}>
            {label && (
                <div>
                    <label htmlFor={name} className="input-heading12" style={{ fontSize: "16px", fontWeight: "700" }}>
                        {label}
                    </label>
                </div>
            )}
            <button></button>
         
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} keepMounted>
                {options.map((option) => (
                    <MenuItem key={option.value} name={name} onClick={() => handleMenuItemClick(option)}>
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>

            <ErrorMessage name={name} component="div" className="inputs-error-msg" />
        </div>
    );
};

export default CustomDropdownwithButton;
