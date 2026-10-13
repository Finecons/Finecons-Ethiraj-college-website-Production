// // // import React from "react";
// // // import { Field, ErrorMessage } from "formik";
// // // import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// // // import { Switch } from "@mui/material";
// // // import "./CustomDropdownWithSwitch.css";
// // // import CircularProgress from "@mui/material/CircularProgress"; // MUI spinner

// // // const CustomDropdownWithSwitch = ({ name, options, formikValues,button_text,isOpen, publishId, toggleDropdown, onSwitchChange, loading }) => {
// // //   return (
// // //     <div className="dropdown-wrapper-Switch">
// // //       <button
// // //         type="button"
// // //         className="Switch-dropdown-toggle"
// // //         onClick={toggleDropdown}
// // //       >
// // //         Select student
// // //         {isOpen ? <FaChevronUp /> : <FaChevronDown />}
// // //       </button>

// // //       <div className={`dropdown-list ${isOpen ? "open" : ""}`}>
// // //         {/* Display the loading spinner if data is being fetched */}
// // //         {loading ? (
// // //           <div className="spinner-container">
// // //             <CircularProgress size={24} /> {/* Spinner from MUI */}
// // //           </div>
// // //         ) : (
// // //           <Field name={name}>
// // //             {({ field, form }) => (
// // //               <div>
// // //                 {formikValues.map((option) => (
// // //                   <div key={option.value} className="dropdown-item">
// // //                     <span className="dropdown-item-label">{option.label}</span>

// // //                     <Switch
// // //                       checked={option.access_granted}
// // //                       onChange={(event) => {
// // //                         const newValue = event.target.checked;
// // //                         const updatedOptions = formikValues.map((opt) =>
// // //                           opt.value === option.value
// // //                             ? { ...opt, access_granted: newValue }
// // //                             : opt
// // //                         );
// // //                         form.setFieldValue(name, updatedOptions);
// // //                         console.log(option.value, "option.value");

// // //                         // Call parent handler to update state
// // //                         onSwitchChange(option.value, newValue);
// // //                       }}
// // //                        size="small"
// // //                       color="default" // You can set default to avoid the default color
// // //                       sx={{
// // //                         '& .MuiSwitch-switchBase.Mui-checked': {
// // //                           color: 'green',
// // //                         },
// // //                         '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
// // //                           backgroundColor: 'green',
// // //                         },
// // //                         '& .MuiSwitch-switchBase': {
// // //                           color: 'red',
// // //                         },
// // //                         '& .MuiSwitch-track': {
// // //                           backgroundColor: 'red',
// // //                         },
// // //                         // transform: 'scale(0.8)', // Reduces the overall size
// // //                         // '& .MuiSwitch-thumb': {
// // //                         //   width: 20, // Thumb size
// // //                         //   height: 20,
// // //                         // },
// // //                         // '& .MuiSwitch-track': {
// // //                         //   width: 26, // Track width
// // //                         //   height: 14, // Track height
// // //                         // },
// // //                       }}
// // //                     />
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </Field>
// // //         )}
// // //       </div>
// // //       <ErrorMessage name={name} component="div" className="inputs-error-msg" />
// // //     </div>
// // //   );
// // // };

// // // export default CustomDropdownWithSwitch;



// // import React from "react";
// // import { Field, ErrorMessage } from "formik";
// // import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// // import { Switch } from "@mui/material";
// // import CircularProgress from "@mui/material/CircularProgress"; // MUI spinner
// // import "./CustomDropdownWithSwitch.css";

// // const CustomDropdownWithSwitch = ({
// //   name,
// //   options,
// //   formikValues,
// //   button_text,
// //   isOpen,
// //   publishId,
// //   toggleDropdown,
// //   setSelectedDropData,
// //   onSwitchChange,
// //   loading,
// // }) => {
// //   return (
// //     <div className="dropdown-wrapper-Switch">
// //       <button
// //         type="button"
// //         className="Switch-dropdown-toggle"
// //         onClick={toggleDropdown}
// //       >
// //         {button_text}
// //         {isOpen ? <FaChevronUp /> : <FaChevronDown />}
// //       </button>

// //       <div className={`dropdown-list ${isOpen ? "open" : ""}`}>
// //         {/* Display the loading spinner if data is being fetched */}
// //         {loading ? (
// //           <div className="spinner-container">
// //             <CircularProgress size={24} /> {/* Spinner from MUI */}
// //           </div>
// //         ) : (
// //           <Field name={name}>
// //             {({ field, form }) => (
// //               <div>
// //                 {formikValues.map((option) => (
// //                   <div key={option.value} className="dropdown-item">
// //                     <span className="dropdown-item-label">{option.label}</span>

// //                     <Switch
// //                       checked={option.access_granted}
// //                       onChange={(event) => {
// //                         const newValue = event.target.checked;
// //                         const updatedOptions = formikValues.map((opt) =>
// //                           opt.value === option.value
// //                             ? { ...opt, access_granted: newValue }
// //                             : opt
// //                         );
// //                         form.setFieldValue(name, updatedOptions);
// //                         setSelectedDropData([option.value, option.label])

// //                         // Log the selected value and label
// //                         console.log(`Selected value: ${option.value}`);
// //                         console.log(`Selected label: ${option.label}`);
// //                         console.log(newValue, option.value,"valal")

// //                         // Call parent handler to update state
// //                         onSwitchChange(option.value, newValue);
// //                       }}
// //                       size="small"
// //                       color="default"
// //                       sx={{
// //                         "& .MuiSwitch-switchBase.Mui-checked": {
// //                           color: "green",
// //                         },
// //                         "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
// //                           backgroundColor: "green",
// //                         },
// //                         "& .MuiSwitch-switchBase": {
// //                           color: "red",
// //                         },
// //                         "& .MuiSwitch-track": {
// //                           backgroundColor: "red",
// //                         },
// //                       }}
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </Field>
// //         )}
// //       </div>
// //       <ErrorMessage name={name} component="div" className="inputs-error-msg" />
// //     </div>
// //   );
// // };

// // export default CustomDropdownWithSwitch;



// import React from "react";
// import { Field, ErrorMessage } from "formik";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import CircularProgress from "@mui/material/CircularProgress"; // MUI spinner
// import "./CustomDropdownWithSwitch.css";

// const CustomDropdownWithSwitch = ({
//   name,
//   formikValues,
//   button_text,
//   isOpen,
//   toggleDropdown,
//   setSelectedDropData,
//   loading,
// }) => {
//   console.log(formikValues,"formikvalues")
//   return (
//     <div className="dropdown-wrapper-Switch">
//       <button
//         type="button"
//         className="Switch-dropdown-toggle"
//         onClick={toggleDropdown}
//       >
//         {button_text}
//         {isOpen ? <FaChevronUp /> : <FaChevronDown />}
//       </button>

//       <div className={`dropdown-list ${isOpen ? "open" : ""}`}>
//         {/* Display the loading spinner if data is being fetched */}
//         {loading ? (
//           <div className="spinner-container">
//             <CircularProgress size={24} /> {/* Spinner from MUI */}
//           </div>
//         ) : (
//           <Field name={name}>
//             {({ field, form }) => (
//               <div>
//                 {formikValues.map((option) => (
//                   <div
//                     key={option.value}
//                     className={`dropdown-item ${
//                       option.tracing_status ? "disabled" : ""
//                     }`}
//                     onClick={() => {
//                       if (!option.tracking_status) {
//                         const updatedOptions = formikValues.map((opt) =>
//                           opt.value === option.value
//                             ? { ...opt, tracking_status: true }
//                             : opt
//                         );
//                         form.setFieldValue(name, updatedOptions);
//                         setSelectedDropData([option.value, option.label]);

//                         // Log the selected value and label
//                         console.log(`Selected value: ${option.value}`);
//                         console.log(`Selected label: ${option.label}`);

//                         // Mark as selected and disabled
//                       }
//                     }}
//                   >
//                     <span className="dropdown-item-label">{option.label}</span>

//                     {/* Disable option if tracking_status is true */}
//                     {option.tracking_status && (
//                       <span className="disabled-text">Disabled</span>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </Field>
//         )}
//       </div>
//       <ErrorMessage name={name} component="div" className="inputs-error-msg" />
//     </div>
//   );
// };

// export default CustomDropdownWithSwitch;



import React from "react";
import { Field, ErrorMessage } from "formik";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import CircularProgress from "@mui/material/CircularProgress"; // MUI spinner
import "./CustomDropdownWithSwitch.css";

const CustomDropdownWithSwitch = ({
  name,
  formikValues,
  button_text,
  isOpen,
  toggleDropdown,
  setSelectedDropData,
  handleDropdataClick,
  loading,
}) => {
  console.log(formikValues, "formikvalues");
  console.log(button_text,"button_text")
  return (
    <div className="dropdown-wrapper-Switch">
      <button
        type="button"
        className="Switch-dropdown-toggle"
        onClick={toggleDropdown}
      >
        {button_text}
        {isOpen ? <FaChevronUp style={{fontSize:'14px'}} /> : <FaChevronDown style={{fontSize:'14px'}}/>}
      </button>

      <div className={`dropdown-list ${isOpen ? "open" : ""}`}>
        {/* Display the loading spinner if data is being fetched */}
        {loading ? (
          <div className="spinner-container">
            <CircularProgress size={24} /> {/* Spinner from MUI */}
          </div>
        ) : (
          <Field name={name}>
            {({ field, form }) => (
              <div>
                {formikValues.map((option) => (
                  <div
                    key={option.value}
                    className={`dropdown-item ${
                      option.tracing_status ? "disabled" : ""
                    }`}
                    onClick={() => {
                      if (!option.tracing_status) {
                        const updatedOptions = formikValues.map((opt) =>
                          opt.value === option.value
                            ? { ...opt, tracking_status: true }
                            : opt
                        );
                        form.setFieldValue(name, updatedOptions);
                        setSelectedDropData([option.order_id, option.label]);
                        handleDropdataClick(option.order_id,option.label,option.value)

                        // Log the selected value and label
                        console.log(`Selected value: ${option.value}`);
                        console.log(`Selected label: ${option.label}`);
                        toggleDropdown();
                      }
                    }}
                    style={{
                      color: option.tracing_status ? "gray" : "var(--button-color)", // Change color if disabled
                      cursor: option.tracing_status ? "not-allowed" : "pointer",
                      background: option.tracing_status ? "#d1d1d1" : "var(--button-bgcolor)",

                    }}
                  >
                    <span className="dropdown-item-label">{option.label}</span>

                    {/* Disable option if tracking_status is true */}
                    {/* {option.tracing_status && (
                      <span className="disabled-text">Disabled</span>
                    )} */}
                  </div>
                ))}
              </div>
            )}
          </Field>
        )}
      </div>
      <ErrorMessage name={name} component="div" className="inputs-error-msg" />
    </div>
  );
};

export default CustomDropdownWithSwitch;
