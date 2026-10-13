
// // // // // import React, { useState } from "react";
// // // // // import PropTypes from 'prop-types';
// // // // // import "./CustomInputIcon.css";
// // // // // import "../ComponentsCss/componet.css";
// // // // // import { Field } from "formik";
// // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // import { faImage, faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons';
// // // // // import Tooltip from '@mui/material/Tooltip';
// // // // // import { styled, tooltipClasses } from "@mui/material";

// // // // // const BootstrapTooltip = styled(({ className, ...props }) => (
// // // // //   <Tooltip {...props} arrow classes={{ popper: className }} />
// // // // // ))(({ theme }) => ({
// // // // //   [`& .${tooltipClasses.arrow}`]: {
// // // // //     color: theme.palette.common.black,
// // // // //   },
// // // // //   [`& .${tooltipClasses.tooltip}`]: {
// // // // //     backgroundColor: theme.palette.common.black,
// // // // //   },
// // // // // }));


// // // // // const CustomInputIcon = ({ label, name, inputType, custPlaceholder, InputProps, ...rest }) => {
// // // // //   const [isFocused, setIsFocused] = useState(false);

// // // // //   const handleFocus = () => setIsFocused(true);
// // // // //   const handleBlur = () => setIsFocused(false);

// // // // //   const validateInput = (value) => {
// // // // //     let error;
// // // // //     if (!value) {
// // // // //       error = `Please enter ${inputType === "text" ? "text" : "a number"}`;
// // // // //     } else if (inputType === "number" && isNaN(value)) {
// // // // //       error = "Please enter a valid number";
// // // // //     } else if (inputType === "text" && !/^[a-zA-Z]*$/i.test(value)) {
// // // // //       error = "Only alphabetic characters are allowed";
// // // // //     }
// // // // //     return error;
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ width: "100%",padding:"20px" }} >
// // // // //       <div
// // // // //         className={`full-div ${isFocused ? "focused" : ""}`}
// // // // //       >
// // // // //         <div className="icon-container">
// // // // //           <BootstrapTooltip title="Insert Image" placement="top">
// // // // //             <FontAwesomeIcon icon={faImage} className="quizz-inputicon" />
// // // // //           </BootstrapTooltip>
// // // // //           <BootstrapTooltip title="Record Audio" placement="top">
// // // // //             <FontAwesomeIcon icon={faMicrophone} className="quizz-inputicon" />
// // // // //           </BootstrapTooltip>
// // // // //           <BootstrapTooltip title="Record Video" placement="top">
// // // // //             <FontAwesomeIcon icon={faVideo} className="quizz-inputicon" />
// // // // //           </BootstrapTooltip>
// // // // //         </div>
// // // // //         <div className="input-container1">
// // // // //           <Field
// // // // //             id={name}
// // // // //             name={name}
// // // // //             type={inputType}
// // // // //             InputProps={InputProps}
// // // // //             validate={validateInput}
// // // // //             placeholder={custPlaceholder || "Enter Input"}
// // // // //             {...rest}
// // // // //             className={`custominput-field1 ${isFocused ? "focused-placeholder" : ""}`}
// // // // //             onFocus={handleFocus}
// // // // //             onBlur={handleBlur}

// // // // //           />
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // CustomInputIcon.propTypes = {
// // // // //   label: PropTypes.string,
// // // // //   name: PropTypes.string.isRequired,
// // // // //   inputType: PropTypes.string.isRequired,
// // // // //   custPlaceholder: PropTypes.string,
// // // // //   InputProps: PropTypes.object,
// // // // // };

// // // // // export default CustomInputIcon;



// // // // import React, { useState } from "react";
// // // // import PropTypes from 'prop-types';
// // // // import "./CustomInputIcon.css";
// // // // import "../ComponentsCss/componet.css";
// // // // import { Field } from "formik";
// // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // import { faImage, faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons';
// // // // import Tooltip from '@mui/material/Tooltip';
// // // // import { styled, tooltipClasses } from "@mui/material";
// // // // import ImageUpload from '../../Pages/Admin/Create/EditorQuestion/Modals/ImageUpload';

// // // // const BootstrapTooltip = styled(({ className, ...props }) => (
// // // //   <Tooltip {...props} arrow classes={{ popper: className }} />
// // // // ))(({ theme }) => ({
// // // //   [`& .${tooltipClasses.arrow}`]: {
// // // //     color: theme.palette.common.black,
// // // //   },
// // // //   [`& .${tooltipClasses.tooltip}`]: {
// // // //     backgroundColor: theme.palette.common.black,
// // // //   },
// // // // }));

// // // // const CustomInputIcon = ({ label, name, inputType, custPlaceholder, InputProps, ...rest }) => {
// // // //   const [isFocused, setIsFocused] = useState(false);
// // // //   const [openDialog, setOpenDialog] = useState(false); // State for dialog
// // // //   const [croppedImage, setCroppedImage] = useState(null); // State to store cropped image

// // // //   console.log(croppedImage,"crop")
// // // //   const handleFocus = () => setIsFocused(true);
// // // //   const handleBlur = () => setIsFocused(false);

// // // //   const validateInput = (value) => {
// // // //     let error;
// // // //     if (!value) {
// // // //       error = `Please enter ${inputType === "text" ? "text" : "a number"}`;
// // // //     } else if (inputType === "number" && isNaN(value)) {
// // // //       error = "Please enter a valid number";
// // // //     } else if (inputType === "text" && !/^[a-zA-Z]*$/i.test(value)) {
// // // //       error = "Only alphabetic characters are allowed";
// // // //     }
// // // //     return error;
// // // //   };

// // // //   const handleImageIconClick = () => {
// // // //     setOpenDialog(true); // Open the dialog
// // // //   };

// // // //   const handleCloseDialog = () => {
// // // //     setOpenDialog(false); // Close the dialog
// // // //   };

// // // //   const handleCrop = (image) => {
// // // //     setCroppedImage(image); // Set the cropped image
// // // //   };

// // // //   return (
// // // //     <div style={{ width: "100%", padding: "20px" }}>
// // // //       <div className={`full-div ${isFocused ? "focused" : ""}`}>
// // // //         <div className="icon-container">
// // // //           <BootstrapTooltip title="Insert Image" placement="top">
// // // //             <FontAwesomeIcon
// // // //               icon={faImage}
// // // //               className="quizz-inputicon"
// // // //               onClick={handleImageIconClick} // Handle image icon click
// // // //             />
// // // //           </BootstrapTooltip>
// // // //           <BootstrapTooltip title="Record Audio" placement="top">
// // // //             <FontAwesomeIcon icon={faMicrophone} className="quizz-inputicon" />
// // // //           </BootstrapTooltip>
// // // //           <BootstrapTooltip title="Record Video" placement="top">
// // // //             <FontAwesomeIcon icon={faVideo} className="quizz-inputicon" />
// // // //           </BootstrapTooltip>
// // // //         </div>
// // // //         <div className="input-container1">
// // // //           <Field
// // // //             id={name}
// // // //             name={name}
// // // //             type={inputType}
// // // //             InputProps={InputProps}
// // // //             validate={validateInput}
// // // //             placeholder={custPlaceholder || "Enter Input"}
// // // //             {...rest}
// // // //             className={`custominput-field1 ${isFocused ? "focused-placeholder" : ""}`}
// // // //             onFocus={handleFocus}
// // // //             onBlur={handleBlur}
// // // //           />
// // // //         </div>
// // // //       </div>

// // // //       {/* ImageUpload dialog */}
// // // //       <ImageUpload
// // // //         open={openDialog}
// // // //         onClose={handleCloseDialog}
// // // //         onCrop={handleCrop} // Handle cropped image
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // CustomInputIcon.propTypes = {
// // // //   label: PropTypes.string,
// // // //   name: PropTypes.string.isRequired,
// // // //   inputType: PropTypes.string.isRequired,
// // // //   custPlaceholder: PropTypes.string,
// // // //   InputProps: PropTypes.object,
// // // // };

// // // // export default CustomInputIcon;


// // // import React, { useState, useEffect } from "react";
// // // import PropTypes from 'prop-types';
// // // import "./CustomInputIcon.css";
// // // import "../ComponentsCss/componet.css";
// // // import { Field, useFormikContext } from "formik";
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faImage, faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons';
// // // import Tooltip from '@mui/material/Tooltip';
// // // import { styled, tooltipClasses } from "@mui/material";
// // // import ImageUpload from "../../Pages/Admin/Create/EditorQuestion/Modals/ImageUpload";

// // // const BootstrapTooltip = styled(({ className, ...props }) => (
// // //   <Tooltip {...props} arrow classes={{ popper: className }} />
// // // ))(({ theme }) => ({
// // //   [`& .${tooltipClasses.arrow}`]: {
// // //     color: theme.palette.common.black,
// // //   },
// // //   [`& .${tooltipClasses.tooltip}`]: {
// // //     backgroundColor: theme.palette.common.black,
// // //   },
// // // }));

// // // const CustomInputIcon = ({ label, name, inputType, custPlaceholder, InputProps, ...rest }) => {
// // //   const [isFocused, setIsFocused] = useState(false);
// // //   const [openDialog, setOpenDialog] = useState(false); // State for dialog
// // //   const [croppedImage, setCroppedImage] = useState(null); // State to store cropped image
// // //   const [imageUrl, setImageUrl] = useState(""); // State to display the cropped image URL

// // //   const { setFieldValue } = useFormikContext(); // Formik context

// // //   const handleFocus = () => setIsFocused(true);
// // //   const handleBlur = () => setIsFocused(false);

// // //   const validateInput = (value) => {
// // //     let error;
// // //     if (!value) {
// // //       error = `Please enter ${inputType === "text" ? "text" : "a number"}`;
// // //     } else if (inputType === "number" && isNaN(value)) {
// // //       error = "Please enter a valid number";
// // //     } else if (inputType === "text" && !/^[a-zA-Z]*$/i.test(value)) {
// // //       error = "Only alphabetic characters are allowed";
// // //     }
// // //     return error;
// // //   };

// // //   const handleImageIconClick = () => {
// // //     setOpenDialog(true); // Open the dialog
// // //   };

// // //   const handleCloseDialog = () => {
// // //     setOpenDialog(false); // Close the dialog
// // //   };

// // //   const handleCrop = (image) => {
// // //     // setCroppedImage(image); // Set the cropped image
// // //     // setImageUrl(image); // Update image URL state
// // //     // setFieldValue(name, image); // Update Formik field value
// // //     // console.log(image,"imagevalla")
// // //     // ------------
// // //     setCroppedImage(image);
// // //     setImageUrl(image);
// // //     // setFieldValue(name, image); 
// // //     // -------------
// // //     if (setFieldValue && name) {
// // //       setFieldValue(name, image); // Update Formik field value
// // //     } else {
// // //       console.error("goto");
// // //     }
// // //   };

// // //   // Use useEffect to update image URL when croppedImage changes
// // //   useEffect(() => {
// // //     if (croppedImage) {
// // //       setImageUrl(croppedImage); // Update image URL state
// // //     }
// // //   }, [croppedImage]);

// // //   return (
// // //     <div style={{ width: "100%", padding: "20px" }}>
// // //       <div className={`full-div ${isFocused ? "focused" : ""}`}>
// // //         <div className="icon-container">
// // //           <BootstrapTooltip title="Insert Image" placement="top">
// // //             <FontAwesomeIcon
// // //               icon={faImage}
// // //               className="quizz-inputicon"
// // //               onClick={handleImageIconClick} // Handle image icon click
// // //             />
// // //           </BootstrapTooltip>
// // //           <BootstrapTooltip title="Record Audio" placement="top">
// // //             <FontAwesomeIcon icon={faMicrophone} className="quizz-inputicon" />
// // //           </BootstrapTooltip>
// // //           <BootstrapTooltip title="Record Video" placement="top">
// // //             <FontAwesomeIcon icon={faVideo} className="quizz-inputicon" />
// // //           </BootstrapTooltip>
// // //         </div>
// // //         <div className="input-container1">
// // //           <Field
// // //             id={name}
// // //             name={name}
// // //             type={inputType}
// // //             InputProps={InputProps}
// // //             validate={validateInput}
// // //             placeholder={custPlaceholder || "Enter Input"}
// // //             {...rest}
// // //             className={`custominput-field1 ${isFocused ? "focused-placeholder" : ""}`}
// // //             onFocus={handleFocus}
// // //             onBlur={handleBlur}
// // //           />
// // //           {/* Display cropped image URL */}
// // //           {imageUrl && <img src={imageUrl} alt="Cropped" style={{ marginTop: '20px', maxWidth: '100%' }} />}
// // //         </div>
// // //       </div>

// // //       {/* ImageUpload dialog */}
// // //       <ImageUpload
// // //         open={openDialog}
// // //         onClose={handleCloseDialog}
// // //         onCrop={handleCrop} // Handle cropped image
// // //       />
// // //     </div>
// // //   );
// // // };

// // // CustomInputIcon.propTypes = {
// // //   label: PropTypes.string,
// // //   name: PropTypes.string.isRequired,
// // //   inputType: PropTypes.string.isRequired,
// // //   custPlaceholder: PropTypes.string,
// // //   InputProps: PropTypes.object,
// // // };

// // // export default CustomInputIcon;



// // import React, { useState, useEffect } from "react";
// // import PropTypes from 'prop-types';
// // import "./CustomInputIcon.css";
// // import "../ComponentsCss/componet.css";
// // import { Field, useFormikContext } from "formik";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faImage, faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons';
// // import Tooltip from '@mui/material/Tooltip';
// // import { styled, tooltipClasses } from "@mui/material";
// // import ImageUpload from "../../Pages/Admin/Create/EditorQuestion/Modals/ImageUpload";

// // const BootstrapTooltip = styled(({ className, ...props }) => (
// //   <Tooltip {...props} arrow classes={{ popper: className }} />
// // ))(({ theme }) => ({
// //   [`& .${tooltipClasses.arrow}`]: {
// //     color: theme.palette.common.black,
// //   },
// //   [`& .${tooltipClasses.tooltip}`]: {
// //     backgroundColor: theme.palette.common.black,
// //   },
// // }));

// // const CustomInputIcon = ({ label, name, inputType, custPlaceholder,onImageUpload, InputProps, ...rest }) => {
// //   const [isFocused, setIsFocused] = useState(false);
// //   const [openDialog, setOpenDialog] = useState(false);
// //   const [croppedImage, setCroppedImage] = useState(null);
// //   const [imageUrl, setImageUrl] = useState("");

// //   const { setFieldValue } = useFormikContext();

// //   const handleFocus = () => setIsFocused(true);
// //   const handleBlur = () => setIsFocused(false);

// //   const validateInput = (value) => {
// //     let error;
// //     if (!value) {
// //       error = `Please enter ${inputType === "text" ? "text" : "a number"}`;
// //     } else if (inputType === "number" && isNaN(value)) {
// //       error = "Please enter a valid number";
// //     } else if (inputType === "text" && !/^[a-zA-Z]*$/i.test(value)) {
// //       error = "Only alphabetic characters are allowed";
// //     }
// //     return error;
// //   };

// //   const handleImageIconClick = () => {
// //     setOpenDialog(true);
// //   };

// //   const handleCloseDialog = () => {
// //     setOpenDialog(false);
// //   };

// //   const handleCrop = (image) => {
// //     setCroppedImage(image);
// //     setImageUrl(image);
// //     // if (setFieldValue && name) {
// //     //   setFieldValue(name, image);
// //     // } else {
// //     //   console.error("Failed to update Formik field value");
// //     onImageUpload(image)
// //     // }
// //   };

// //   useEffect(() => {
// //     if (croppedImage) {
// //       setImageUrl(croppedImage);
// //     }
// //   }, [croppedImage]);

// //   return (
// //     <div style={{ width: "100%", padding: "20px" }}>
// //       <div className={`full-div ${isFocused ? "focused" : ""}`}>
// //         <div className="icon-container">
// //           <BootstrapTooltip title="Insert Image" placement="top">
// //             <FontAwesomeIcon
// //               icon={faImage}
// //               className="quizz-inputicon"
// //               onClick={handleImageIconClick}
// //             />
// //           </BootstrapTooltip>
// //           <BootstrapTooltip title="Record Audio" placement="top">
// //             <FontAwesomeIcon icon={faMicrophone} className="quizz-inputicon" />
// //           </BootstrapTooltip>
// //           <BootstrapTooltip title="Record Video" placement="top">
// //             <FontAwesomeIcon icon={faVideo} className="quizz-inputicon" />
// //           </BootstrapTooltip>
// //         </div>
// //         <div className="input-container1">
// //           <Field
// //             id={name}
// //             name={name}
// //             type={inputType}
// //             InputProps={InputProps}
// //             validate={validateInput}
// //             placeholder={custPlaceholder || "Enter Input"}
// //             {...rest}
// //             className={`custominput-field1 ${isFocused ? "focused-placeholder" : ""}`}
// //             onFocus={handleFocus}
// //             onBlur={handleBlur}
// //           />
// //           {imageUrl && <img src={imageUrl} alt="Cropped" style={{ marginTop: '20px', maxWidth: '100%' }} />}
// //         </div>
// //       </div>

// //       <ImageUpload
// //         open={openDialog}
// //         onClose={handleCloseDialog}
// //         onCrop={handleCrop}
// //       />
// //     </div>
// //   );
// // };

// // CustomInputIcon.propTypes = {
// //   label: PropTypes.string,
// //   name: PropTypes.string.isRequired,
// //   inputType: PropTypes.string.isRequired,
// //   custPlaceholder: PropTypes.string,
// //   InputProps: PropTypes.object,
// // };

// // export default CustomInputIcon;

// import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import "./CustomInputIcon.css";
// import "../ComponentsCss/componet.css";
// import { Field, useFormikContext, Formik, Form } from "formik";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons';
// import Tooltip from '@mui/material/Tooltip';
// import { styled, tooltipClasses } from "@mui/material";
// import ImageUpload from "../../Pages/Admin/Create/EditorQuestion/Modals/ImageUpload";

// const BootstrapTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} arrow classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.arrow}`]: {
//     color: theme.palette.common.black,
//   },
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.black,
//   },
// }));

// const CustomInputIcon = ({ label, name, inputType, custPlaceholder, InputProps, ...rest }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [croppedImage, setCroppedImage] = useState(null);
//   const [imageUrl, setImageUrl] = useState("");

//   const { setFieldValue, values, handleSubmit } = useFormikContext();

//   const handleFocus = () => setIsFocused(true);
//   const handleBlur = () => setIsFocused(false);

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

//   const handleImageIconClick = () => {
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleCrop = (image) => {


//   };

//   useEffect(() => {
//     if (croppedImage) {
//       setImageUrl(croppedImage);
//     }
//   }, [croppedImage]);

//   const handleFormSubmit = () => {
//     console.log('Text Input Value:', values[name]);
//     console.log('Cropped Image URL:', imageUrl);
//   };

//   return (
//     <div style={{ width: "100%", padding: "20px" }}>
//       <Formik
//         initialValues={{ [name]: '' }}
//         onSubmit={handleFormSubmit}
//       >
//         {({ handleSubmit }) => (
//           <Form onSubmit={handleSubmit}>
//             <div className={`full-div ${isFocused ? "focused" : ""}`}>
//               <div className="icon-container">
//                 <BootstrapTooltip title="Insert Image" placement="top">
//                   <FontAwesomeIcon
//                     icon={faImage}
//                     className="quizz-inputicon"
//                     onClick={handleImageIconClick}
//                   />
//                 </BootstrapTooltip>
//                 <BootstrapTooltip title="Record Audio" placement="top">
//                   <FontAwesomeIcon icon={faMicrophone} className="quizz-inputicon" />
//                 </BootstrapTooltip>
//                 <BootstrapTooltip title="Record Video" placement="top">
//                   <FontAwesomeIcon icon={faVideo} className="quizz-inputicon" />
//                 </BootstrapTooltip>
//               </div>
//               <div className="input-container1">
//                 <Field
//                   id={name}
//                   name={name}
//                   type={inputType}
//                   InputProps={InputProps}
//                   validate={validateInput}
//                   placeholder={custPlaceholder || "Enter Input"}
//                   {...rest}
//                   className={`custominput-field1 ${isFocused ? "focused-placeholder" : ""}`}
//                   onFocus={handleFocus}
//                   onBlur={handleBlur}
//                 />
//                 {imageUrl && <img src={imageUrl} alt="Cropped" style={{ marginTop: '20px', maxWidth: '100%' }} />}
//               </div>
//               <button >Submit</button>
//             </div>
//           </Form>
//         )}
//       </Formik>

//       <ImageUpload
//         open={openDialog}
//         onClose={handleCloseDialog}
//         onCrop={handleCrop}
//       />
//     </div>
//   );
// };

// CustomInputIcon.propTypes = {
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   inputType: PropTypes.string.isRequired,
//   custPlaceholder: PropTypes.string,
//   InputProps: PropTypes.object,
// };

// export default CustomInputIcon;


// corect Code start--------------------------------------------------

// import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import "./CustomInputIcon.css";
// import "../ComponentsCss/componet.css";
// import { Field, useFormikContext, Formik, Form } from "formik";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons';
// import Tooltip from '@mui/material/Tooltip';
// import { styled, tooltipClasses } from "@mui/material";
// import ImageUpload from "../../Pages/Admin/Create/EditorQuestion/Modals/ImageUpload";
// import { Code } from "@mui/icons-material";

// const BootstrapTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} arrow classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.arrow}`]: {
//     color: theme.palette.common.black,
//   },
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.black,
//   },
// }));

// const CustomInputIcon = ({ label, name, inputType, custPlaceholder,value,onChange,setQuestionImage,questionImage, InputProps, ...rest }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [croppedImage, setCroppedImage] = useState(null);
//   // const [imageUrl, setImageUrl] = useState("");

//   // const { setFieldValue, values, handleSubmit } = useFormikContext();

//   const handleFocus = () => setIsFocused(true);
//   const handleBlur = () => setIsFocused(false);

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

//   const handleImageIconClick = () => {
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleCrop = (image) => {
//     setCroppedImage(image);
//   };

//   useEffect(() => {
//     if (croppedImage) {
//       setQuestionImage(croppedImage);
//     }
//   }, [croppedImage]);

//   const handleFormSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     console.log('Text Input Value:', value);
//     console.log('Cropped Image URL:', questionImage);
//   };

//   return (
//     <div style={{ width: "100%", padding: "20px" }}>
//       <Formik
//         initialValues={{ [name]: '' }}
//         // onSubmit={handleFormSubmit} // Use handleFormSubmit directly
//       >
//         {({ }) => (
//           <Form > {/* Attach handleSubmit to the Form */}
//             <div className={`full-div ${isFocused ? "focused" : ""}`}>
//               <div className="icon-container">
//                 <BootstrapTooltip title="Insert Image" placement="top">
//                   <FontAwesomeIcon
//                     icon={faImage}
//                     className="quizz-inputicon"
//                     onClick={handleImageIconClick}
//                   />
//                 </BootstrapTooltip>
//                 <BootstrapTooltip title="Record Audio" placement="top">
//                   <FontAwesomeIcon icon={faMicrophone} className="quizz-inputicon" />
//                 </BootstrapTooltip>
//                 <BootstrapTooltip title="Record Video" placement="top">
//                   <FontAwesomeIcon icon={faVideo} className="quizz-inputicon" />
//                 </BootstrapTooltip>
//               </div>
//               <div className="input-container1">
//                 <Field
//                   id={name}
//                   name={name}
//                   type={inputType}
//                   InputProps={InputProps}
//                   validate={validateInput}
//                   value={value}
//                   onChange={onChange}
//                   placeholder={custPlaceholder || "Enter Input"}
//                   {...rest}
//                   className={`custominput-field1 ${isFocused ? "focused-placeholder" : ""}`}
//                   onFocus={handleFocus}
//                   onBlur={handleBlur}
//                 />
//                 {questionImage && <img src={questionImage} alt="Cropped" style={{ marginTop: '20px', maxWidth: '100%' }} />}
//               </div>
//               <button onClick={handleFormSubmit}>Submit</button>
//             </div>
//           </Form>
//         )}
//       </Formik>

//       <ImageUpload
//         open={openDialog}
//         onClose={handleCloseDialog}
//         onCrop={handleCrop}
//       />
//     </div>
//   );
// };

// CustomInputIcon.propTypes = {
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   inputType: PropTypes.string.isRequired,
//   custPlaceholder: PropTypes.string,
//   InputProps: PropTypes.object,
// };

// export default CustomInputIcon;


// correct code end----------------------------




// import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import "./CustomInputIcon.css";
// import "../ComponentsCss/componet.css";
// import { Field, useFormikContext, Formik, Form } from "formik";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons';
// import Tooltip from '@mui/material/Tooltip';
// import { Grid, styled, tooltipClasses } from "@mui/material";
// import ImageUpload from "../../Pages/Admin/Create/EditorQuestion/Modals/ImageUpload";
// import { Code } from "@mui/icons-material";

// const BootstrapTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} arrow classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.arrow}`]: {
//     color: theme.palette.common.black,
//   },
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.black,
//   },
// }));

// const CustomInputIcon = ({ label, name, inputType, custPlaceholder, value, onChange, setQuestionImage, questionImage, InputProps, ...rest }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [croppedImage, setCroppedImage] = useState(null);
//   // const [imageUrl, setImageUrl] = useState("");

//   // const { setFieldValue, values, handleSubmit } = useFormikContext();

//   const handleFocus = () => setIsFocused(true);
//   const handleBlur = () => setIsFocused(false);

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

//   const handleImageIconClick = () => {
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleCrop = (image) => {
//     setCroppedImage(image);
//   };

//   useEffect(() => {
//     if (croppedImage) {
//       setQuestionImage(croppedImage);
//     }
//   }, [croppedImage]);

//   // const handleFormSubmit = (event) => {
//   //   event.preventDefault(); // Prevent default form submission behavior
//   //   console.log('Text Input Value:', value);
//   //   console.log('Cropped Image URL:', questionImage);
//   // };

//   return (
//     <div style={{ width: "100%", padding: "20px" }}>
//       <Formik
//         initialValues={{ [name]: '' }}
//       // onSubmit={handleFormSubmit} // Use handleFormSubmit directly
//       >
//         {({ }) => (
//           <Form > {/* Attach handleSubmit to the Form */}
//             <div className={`full-div ${isFocused ? "focused" : ""}`}>
//               {questionImage ? (
//                 <div style={{display:"flex"}}>
//                   <Grid><img src={questionImage} alt="Cropped" style={{  maxWidth: '100%' }} /></Grid>
//                   <div className="input-container1">
//                     <Field
//                       id={name}
//                       name={name}
//                       type={inputType}
//                       InputProps={InputProps}
//                       validate={validateInput}
//                       value={value}
//                       onChange={onChange}
//                       placeholder={custPlaceholder || "Enter Input"}
//                       {...rest}
//                       className={`custominput-field1 ${isFocused ? "focused-placeholder" : ""}`}
//                       onFocus={handleFocus}
//                       onBlur={handleBlur}
//                     />

//                   </div>

//                 </div>
//               ) : (
//                 <>
//                   <div className="icon-container">
//                     <BootstrapTooltip title="Insert Image" placement="top">
//                       <FontAwesomeIcon
//                         icon={faImage}
//                         className="quizz-inputicon"
//                         onClick={handleImageIconClick}
//                       />
//                     </BootstrapTooltip>
//                     <BootstrapTooltip title="Record Audio" placement="top">
//                       <FontAwesomeIcon icon={faMicrophone} className="quizz-inputicon" />
//                     </BootstrapTooltip>
//                     <BootstrapTooltip title="Record Video" placement="top">
//                       <FontAwesomeIcon icon={faVideo} className="quizz-inputicon" />
//                     </BootstrapTooltip>
//                   </div>
//                   <div className="input-container1">
//                     <Field
//                       id={name}
//                       name={name}
//                       type={inputType}
//                       InputProps={InputProps}
//                       validate={validateInput}
//                       value={value}
//                       onChange={onChange}
//                       placeholder={custPlaceholder || "Enter Input"}
//                       {...rest}
//                       className={`custominput-field1 ${isFocused ? "focused-placeholder" : ""}`}
//                       onFocus={handleFocus}
//                       onBlur={handleBlur}
//                     />

//                   </div>
//                   {/* <button onClick={handleFormSubmit}>Submit</button> */}
//                 </>
//               )}

//             </div>
//           </Form>
//         )}
//       </Formik>

//       <ImageUpload
//         open={openDialog}
//         onClose={handleCloseDialog}
//         onCrop={handleCrop}
//       />
//     </div >
//   );
// };

// CustomInputIcon.propTypes = {
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   inputType: PropTypes.string.isRequired,
//   custPlaceholder: PropTypes.string,
//   InputProps: PropTypes.object,
// };

// export default CustomInputIcon;





// import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import "./CustomInputIcon.css";
// import "../ComponentsCss/componet.css";
// import { Field, useFormikContext, Formik, Form } from "formik";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons';
// import Tooltip from '@mui/material/Tooltip';
// import { Grid, styled, tooltipClasses } from "@mui/material";
// import ImageUpload from "../../Pages/Admin/Create/EditorQuestion/Modals/ImageUpload";
// import { Code } from "@mui/icons-material";

// const BootstrapTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} arrow classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.arrow}`]: {
//     color: theme.palette.common.black,
//   },
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.black,
//   },
// }));

// const CustomInputIcon = ({ label, name, inputType, custPlaceholder, value, onChange, setQuestionImage, questionImage, InputProps, ...rest }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [croppedImage, setCroppedImage] = useState(null);
//   // const [imageUrl, setImageUrl] = useState("");

//   // const { setFieldValue, values, handleSubmit } = useFormikContext();

//   const handleFocus = () => setIsFocused(true);
//   const handleBlur = () => setIsFocused(false);

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

//   const handleImageIconClick = () => {
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleCrop = (image) => {
//     setCroppedImage(image);
//   };

//   useEffect(() => {
//     if (croppedImage) {
//       setQuestionImage(croppedImage);
//     }
//   }, [croppedImage]);

//   // const handleFormSubmit = (event) => {
//   //   event.preventDefault(); // Prevent default form submission behavior
//   //   console.log('Text Input Value:', value);
//   //   console.log('Cropped Image URL:', questionImage);
//   // };

//   return (
//     <div style={{ width: "100%", padding: "20px" }}>
//       <Formik
//         initialValues={{ [name]: '' }}
//       // onSubmit={handleFormSubmit} // Use handleFormSubmit directly
//       >
//         {({ }) => (
//           <Form > {/* Attach handleSubmit to the Form */}
//             <div>
//               {questionImage ? (
//                 <div style={{ display: "flex" ,width:"100%"}}>
//                   <Grid style={{ Width: '20%' , height: "180px !important"}}><img src={questionImage} alt="Cropped"  /></Grid>
//                   <div className={`full-div ${isFocused ? "focused" : ""}`}>
//                     <div className="input-container1">
//                       <Field
//                         id={name}
//                         name={name}
//                         type={inputType}
//                         InputProps={InputProps}
//                         validate={validateInput}
//                         value={value}
//                         onChange={onChange}
//                         placeholder={custPlaceholder || "Enter Input"}
//                         {...rest}
//                         className={`custominput-field1 ${isFocused ? "focused-placeholder" : ""}`}
//                         onFocus={handleFocus}
//                         onBlur={handleBlur}
//                       />

//                     </div>

//                   </div>
//                 </div>
//               ) : (
//                 <div className={`full-div ${isFocused ? "focused" : ""}`}>
//                   <div className="icon-container">
//                     <BootstrapTooltip title="Insert Image" placement="top">
//                       <FontAwesomeIcon
//                         icon={faImage}
//                         className="quizz-inputicon"
//                         onClick={handleImageIconClick}
//                       />
//                     </BootstrapTooltip>
//                     <BootstrapTooltip title="Record Audio" placement="top">
//                       <FontAwesomeIcon icon={faMicrophone} className="quizz-inputicon" />
//                     </BootstrapTooltip>
//                     <BootstrapTooltip title="Record Video" placement="top">
//                       <FontAwesomeIcon icon={faVideo} className="quizz-inputicon" />
//                     </BootstrapTooltip>
//                   </div>
//                   <div className="input-container1">
//                     <Field
//                       id={name}
//                       name={name}
//                       type={inputType}
//                       InputProps={InputProps}
//                       validate={validateInput}
//                       value={value}
//                       onChange={onChange}
//                       placeholder={custPlaceholder || "Enter Input"}
//                       {...rest}
//                       className={`custominput-field1 ${isFocused ? "focused-placeholder" : ""}`}
//                       onFocus={handleFocus}
//                       onBlur={handleBlur}
//                     />

//                   </div>
//                   {/* <button onClick={handleFormSubmit}>Submit</button> */}
//                 </div>

//               )}

//             </div>
//           </Form>
//         )}
//       </Formik>

//       <ImageUpload
//         open={openDialog}
//         onClose={handleCloseDialog}
//         onCrop={handleCrop}
//       />
//     </div >
//   );
// };

// CustomInputIcon.propTypes = {
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   inputType: PropTypes.string.isRequired,
//   custPlaceholder: PropTypes.string,
//   InputProps: PropTypes.object,
// };

// export default CustomInputIcon;



// import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import "./CustomInputIcon.css";
// import "../ComponentsCss/componet.css";
// import { Field, Formik, Form } from "formik";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons';
// import Tooltip from '@mui/material/Tooltip';
// import { Grid, IconButton, styled, tooltipClasses } from "@mui/material";
// import ImageUpload from "../../Pages/Admin/Create/EditorQuestion/Modals/ImageUpload";
// import { Crop, Delete, Edit } from "@mui/icons-material";

// const BootstrapTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} arrow classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.arrow}`]: {
//     color: theme.palette.common.black,
//   },
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.black,
//   },
// }));

// const CustomInputIcon = ({ label, name, inputType, custPlaceholder, value, onChange, setQuestionImage, questionImage, InputProps, ...rest }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [croppedImage, setCroppedImage] = useState(null);

//   const handleFocus = () => setIsFocused(true);
//   const handleBlur = () => setIsFocused(false);

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

//   const handleImageIconClick = () => {
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleCrop = (image) => {
//     setCroppedImage(image);
//   };

//   useEffect(() => {
//     if (croppedImage) {
//       setQuestionImage(croppedImage);
//     }
//   }, [croppedImage, setQuestionImage]);

//   return (
//     <div style={{ width: "100%", padding: "20px" }}>
//       <Formik
//         initialValues={{ [name]: '' }}
//       >
//         {() => (
//           <Form>
//             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//               {questionImage ? (
//                 <React.Fragment>
//                   <Grid style={{ width: '40%' }}>
//                     <img src={questionImage} alt="Cropped" style={{ width: "100%", height: "90%", objectFit: "cover" }} />
//                     {showIcon && (
//                       <div
//                         className="icon-overlay"
//                         style={{
//                           position: 'absolute',
//                           top: 8,
//                           right: 8,
//                           display: 'flex',
//                           gap: '8px',
//                           zIndex: 1,
//                         }}
//                       >
//                         <IconButton
//                           color="primary"
//                           // onClick={handleImageUploadOpen}
//                           style={{
//                             backgroundColor: 'transparent',
//                             transition: 'background-color 0.3s',
//                             border: "1px solid white",
//                             borderRadius: "3px",
//                             height: "25px", width: "25px",
//                             background: "white",
//                             color: "black"
//                           }}
//                         >
//                           <Crop style={{ fontSize: "15px" }} />
//                         </IconButton>
//                         <IconButton
//                           color="primary"
//                           // onClick={handleImageUploadOpen}
//                           style={{
//                             backgroundColor: 'transparent',
//                             transition: 'background-color 0.3s',
//                             border: "1px solid white",
//                             borderRadius: "3px",
//                             height: "25px", width: "25px",
//                             background: "white",
//                             color: "black"
//                           }}
//                         >
//                           <Edit style={{ fontSize: "15px" }} />
//                         </IconButton>
//                         <IconButton
//                           color="primary"
//                           // onClick={handleDelete}
//                           style={{
//                             backgroundColor: 'transparent',
//                             transition: 'background-color 0.3s',
//                             border: "1px solid white",
//                             borderRadius: "3px",
//                             height: "25px", width: "25px",
//                             background: "white",
//                             color: "black"
//                           }}
//                         >
//                           <Delete style={{ fontSize: "15px" }} />
//                         </IconButton>
//                       </div>
//                     )}
//                   </Grid>
//                   <div className={`full-div ${isFocused ? "focused" : ""}`} style={{ width: "60%", padding: "0", height: "190px !important" }}>
//                     <div className="input-container1">
//                       <Field
//                         id={name}
//                         name={name}
//                         type={inputType}
//                         InputProps={InputProps}
//                         validate={validateInput}
//                         value={value}
//                         onChange={onChange}
//                         placeholder={custPlaceholder || "Enter Input"}
//                         {...rest}
//                         className={`custominput-field2 ${isFocused ? "focused-placeholder" : ""}`}
//                         // sx={{height:"210px !important"}}
//                         onFocus={handleFocus}
//                         onBlur={handleBlur}
//                       />
//                     </div>
//                   </div>
//                 </React.Fragment>
//               ) : (
//                 <div className={`full-div ${isFocused ? "focused" : ""}`} style={{ width: "100%" }}>
//                   <div className="icon-container">
//                     <BootstrapTooltip title="Insert Image" placement="top">
//                       <FontAwesomeIcon
//                         icon={faImage}
//                         className="quizz-inputicon"
//                         onClick={handleImageIconClick}
//                       />
//                     </BootstrapTooltip>
//                     <BootstrapTooltip title="Record Audio" placement="top">
//                       <FontAwesomeIcon icon={faMicrophone} className="quizz-inputicon" />
//                     </BootstrapTooltip>
//                     <BootstrapTooltip title="Record Video" placement="top">
//                       <FontAwesomeIcon icon={faVideo} className="quizz-inputicon" />
//                     </BootstrapTooltip>
//                   </div>
//                   <div className="input-container1">
//                     <Field
//                       id={name}
//                       name={name}
//                       type={inputType}
//                       InputProps={InputProps}
//                       validate={validateInput}
//                       value={value}
//                       onChange={onChange}
//                       placeholder={custPlaceholder || "Enter Input"}
//                       {...rest}
//                       className={`custominput-field1 ${isFocused ? "focused-placeholder" : ""}`}
//                       onFocus={handleFocus}
//                       onBlur={handleBlur}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </Form>
//         )}
//       </Formik>

//       <ImageUpload
//         open={openDialog}
//         onClose={handleCloseDialog}
//         onCrop={handleCrop}
//       />
//     </div>
//   );
// };

// CustomInputIcon.propTypes = {
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   inputType: PropTypes.string.isRequired,
//   custPlaceholder: PropTypes.string,
//   InputProps: PropTypes.object,
//   setQuestionImage: PropTypes.func.isRequired,
//   questionImage: PropTypes.string,
// };

// export default CustomInputIcon;



// import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import "./CustomInputIcon.css";
// import "../ComponentsCss/componet.css";
// import { Field, Formik, Form } from "formik";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons';
// import Tooltip from '@mui/material/Tooltip';
// import { Grid, IconButton, styled, tooltipClasses } from "@mui/material";
// import ImageUpload from "../../Pages/Admin/Create/EditorQuestion/Modals/ImageUpload";
// import { Crop, Delete, Edit } from "@mui/icons-material";
// import AudioModal from "../../Pages/Admin/Create/EditorQuestion/Modals/AudioModal";

// const BootstrapTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} arrow classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.arrow}`]: {
//     color: theme.palette.common.black,
//   },
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.black,
//   },
// }));

// const CustomInputIcon = ({ label, name, inputType, custPlaceholder, value, onChange, setQuestionImage, questionImage, InputProps, ...rest }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [croppedImage, setCroppedImage] = useState(null);
//   const [audioURL, setAudioURL] = useState('');


//   console.log(audioURL,"aaaaaaaaaaaaaaaa")
//   // AudioModel----
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Function to handle opening the modal
//   const handleOpenModal = () => {
//     setAudioURL("")
//     setIsModalOpen(true);
//   };

//   // Function to handle closing the modal
//   const handleCloseModal = () => {
//     setAudioURL("")
//     setIsModalOpen(false);
//   };
// // ------------------------------

//   const handleFocus = () => setIsFocused(true);
//   const handleBlur = () => setIsFocused(false);

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

//   const handleImageIconClick = () => {
//     setOpenDialog(true);
//   };

//   const handleImageIconClick1 = () => {
//     // setQuestionImage("")

//     setQuestionImage("")
//     setCroppedImage("");

//     setOpenDialog(true);

//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleCrop = (image) => {
//     setCroppedImage(image);
//     setOpenDialog(false);
//   };

//   const handleDelete = () => {
//     setQuestionImage(null);
//     setCroppedImage(null);
//     // setQuestionImage("")
//   };

//   // useEffect(() => {
//   //   if (croppedImage===null && questionImage===null) {
//   //     setQuestionImage("")
//   //   }
//   //   else{
//   //     setQuestionImage(croppedImage)
//   //   }
//   // }, [croppedImage, setQuestionImage]);

//   useEffect(() => {
//     // Update questionImage whenever croppedImage changes
//     if (!croppedImage) {
//       setQuestionImage("");
//     } else {
//       setQuestionImage(croppedImage);
//     }
//   }, [croppedImage, setQuestionImage]);


//   return (
//     <div style={{ width: "100%", padding: "20px" }}>
//       <Formik
//         initialValues={{ [name]: '' }}
//       >
//         {() => (
//           <Form>
//             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//               {questionImage ? (
//                 <React.Fragment>
//                   <Grid style={{ width: '40%', position: 'relative' }}>
//                     <img src={questionImage} alt="Cropped" style={{ width: "100%", height: "90%", objectFit: "cover" }} />
//                     <div className="icon-overlay">
//                       {/* <IconButton
//                         color="primary"
//                         onClick={handleImageIconClick}
//                         style={{
//                           backgroundColor: 'transparent',
//                           transition: 'background-color 0.3s',
//                           border: "1px solid white",
//                           borderRadius: "3px",
//                           height: "25px", width: "25px",
//                           background: "white",
//                           color: "black"
//                         }}
//                       > 
//                         <Crop style={{ fontSize: "15px" }} />
//                       </IconButton>*/}
//                       <IconButton
//                         color="primary"
//                         onClick={handleImageIconClick1}
//                         style={{
//                           backgroundColor: 'transparent',
//                           transition: 'background-color 0.3s',
//                           border: "1px solid white",
//                           borderRadius: "3px",
//                           height: "25px", width: "25px",
//                           background: "white",
//                           color: "black"
//                         }}
//                       >
//                         <Edit style={{ fontSize: "15px" }} />
//                       </IconButton>
//                       <IconButton
//                         color="primary"
//                         onClick={handleDelete}
//                         style={{
//                           backgroundColor: 'transparent',
//                           transition: 'background-color 0.3s',
//                           border: "1px solid white",
//                           borderRadius: "3px",
//                           height: "25px", width: "25px",
//                           background: "white",
//                           color: "black"
//                         }}
//                       >
//                         <Delete style={{ fontSize: "15px" }} />
//                       </IconButton>
//                     </div>
//                   </Grid>
//                   <div className={`full-div ${isFocused ? "focused" : ""}`} style={{ width: "60%", padding: "0", height: "190px !important" }}>
//                     <div className="input-container1">
//                       <Field
//                         id={name}
//                         name={name}
//                         type={inputType}
//                         InputProps={InputProps}
//                         validate={validateInput}
//                         value={value}
//                         onChange={onChange}
//                         placeholder={custPlaceholder || "Enter Input"}
//                         {...rest}
//                         className={`custominput-field2 ${isFocused ? "focused-placeholder" : ""}`}
//                         onFocus={handleFocus}
//                         onBlur={handleBlur}
//                       />
//                     </div>
//                   </div>
//                 </React.Fragment>
//               ) : (
//                 <div className={`full-div ${isFocused ? "focused" : ""}`} style={{ width: "100%" }}>
//                   <div className="icon-container">
//                     <BootstrapTooltip title="Insert Image" placement="top">
//                       <FontAwesomeIcon
//                         icon={faImage}
//                         className="quizz-inputicon"
//                         onClick={handleImageIconClick}
//                       />
//                     </BootstrapTooltip>
//                     <BootstrapTooltip title="Record Audio" placement="top">
//                       <FontAwesomeIcon icon={faMicrophone} className="quizz-inputicon" onClick={handleOpenModal} />
//                     </BootstrapTooltip>
//                     <BootstrapTooltip title="Record Video" placement="top">
//                       <FontAwesomeIcon icon={faVideo} className="quizz-inputicon" />
//                     </BootstrapTooltip>
//                   </div>
//                   <div className="input-container1">
//                     <Field
//                       id={name}
//                       name={name}
//                       type={inputType}
//                       InputProps={InputProps}
//                       validate={validateInput}
//                       value={value}
//                       onChange={onChange}
//                       placeholder={custPlaceholder || "Enter Input"}
//                       {...rest}
//                       className={`custominput-field1 ${isFocused ? "focused-placeholder" : ""}`}
//                       onFocus={handleFocus}
//                       onBlur={handleBlur}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </Form>
//         )}
//       </Formik>

//       <ImageUpload
//         open={openDialog}
//         onClose={handleCloseDialog}
//         onCrop={handleCrop}
//       />
//       <AudioModal 
//       open={isModalOpen}
//       onClose={handleCloseModal}
//       setAudioURL={setAudioURL}
//     audioURL={audioURL}


//       />
//     </div>
//   );
// };

// CustomInputIcon.propTypes = {
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   inputType: PropTypes.string.isRequired,
//   custPlaceholder: PropTypes.string,
//   InputProps: PropTypes.object,
//   setQuestionImage: PropTypes.func.isRequired,
//   questionImage: PropTypes.string,
// };

// export default CustomInputIcon;




// import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import "./CustomInputIcon.css";
// import "../ComponentsCss/componet.css";
// import { Field, Formik, Form } from "formik";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons';
// import Tooltip from '@mui/material/Tooltip';
// import { Grid, IconButton, styled, tooltipClasses } from "@mui/material";
// import ImageUpload from "../../Pages/Admin/Create/EditorQuestion/Modals/ImageUpload";
// import { Crop, Delete, Edit } from "@mui/icons-material";
// import AudioModal from "../../Pages/Admin/Create/EditorQuestion/Modals/AudioModal";

// const BootstrapTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} arrow classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.arrow}`]: {
//     color: theme.palette.common.black,
//   },
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.black,
//   },
// }));

// const CustomInputIcon = ({ label, name, inputType, custPlaceholder, value, onChange, setQuestionImage, questionImage, InputProps, ...rest }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [croppedImage, setCroppedImage] = useState(null);
//   const [audioURL, setAudioURL] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false); // Audio modal state
//   const [upadteAudioURL,setUpdateAudioUrl]=useState("")

//   const handleOpenModal = () => {
//     setAudioURL("");
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setAudioURL("");
//     setIsModalOpen(false);
//   };

//   const handleFocus = () => setIsFocused(true);
//   const handleBlur = () => setIsFocused(false);

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


//   const handleImageIconClick = () => {
//     setOpenDialog(true);
//   };

//   const handleImageIconClick1 = () => {
//     setQuestionImage("");
//     setCroppedImage("");
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleCrop = (image) => {
//     setCroppedImage(image);
//     setOpenDialog(false);
//   };

//   const handleDelete = () => {
//     setQuestionImage(null);
//     setCroppedImage(null);
//   };

//   const handleDeleteAudio = () => {
//    setUpdateAudioUrl(""); // Delete audio
//   };

//   useEffect(() => {
//     if (!croppedImage) {
//       setQuestionImage("");
//     } else {
//       setQuestionImage(croppedImage);
//     }
//   }, [croppedImage, setQuestionImage]);

//   return (
//     <div style={{ width: "100%", padding: "20px" }}>
//       <Formik initialValues={{ [name]: '' }}>
//         {() => (
//           <Form>
//             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//               {questionImage ? (
//                 <React.Fragment>
//                   <Grid style={{ width: '40%', position: 'relative' }}>
//                     <img src={questionImage} alt="Cropped" style={{ width: "100%", height: "90%", objectFit: "cover" }} />
//                     <div className="icon-overlay">
//                       <IconButton
//                         color="primary"
//                         onClick={handleImageIconClick1}
//                         style={{
//                           backgroundColor: 'transparent',
//                           transition: 'background-color 0.3s',
//                           border: "1px solid white",
//                           borderRadius: "3px",
//                           height: "25px", width: "25px",
//                           background: "white",
//                           color: "black"
//                         }}
//                       >
//                         <Edit style={{ fontSize: "15px" }} />
//                       </IconButton>
//                       <IconButton
//                         color="primary"
//                         onClick={handleDelete}
//                         style={{
//                           backgroundColor: 'transparent',
//                           transition: 'background-color 0.3s',
//                           border: "1px solid white",
//                           borderRadius: "3px",
//                           height: "25px", width: "25px",
//                           background: "white",
//                           color: "black"
//                         }}
//                       >
//                         <Delete style={{ fontSize: "15px" }} />
//                       </IconButton>
//                     </div>
//                   </Grid>
//                   <div className={`full-div ${isFocused ? "focused" : ""}`} style={{ width: "60%", padding: "0", height: "190px !important" }}>
//                     <div className="input-container1">
//                       <Field
//                         id={name}
//                         name={name}
//                         type={inputType}
//                         InputProps={InputProps}
//                         validate={validateInput}
//                         value={value}
//                         onChange={onChange}
//                         placeholder={custPlaceholder || "Enter Input"}
//                         {...rest}
//                         className={`custominput-field2 ${isFocused ? "focused-placeholder" : ""}`}
//                         onFocus={handleFocus}
//                         onBlur={handleBlur}
//                       />
//                     </div>
//                   </div>
//                 </React.Fragment>
//               ) : upadteAudioURL ? (
//                 // Display Audio Player when audioURL is available
//                 <div style={{ width: '40%', position: 'relative' }}>
//                   <audio controls src={upadteAudioURL} style={{ width: "100%" }} />
//                   <IconButton
//                     color="primary"
//                     onClick={handleDeleteAudio}
//                     style={{
//                       backgroundColor: 'transparent',
//                       transition: 'background-color 0.3s',
//                       border: "1px solid white",
//                       borderRadius: "3px",
//                       height: "25px", width: "25px",
//                       background: "white",
//                       color: "black"
//                     }}
//                   >
//                     <Delete style={{ fontSize: "15px" }} />
//                   </IconButton>
//                 </div>
//               ) : (
//                 <div className={`full-div ${isFocused ? "focused" : ""}`} style={{ width: "100%" }}>
//                   <div className="icon-container">
//                     <BootstrapTooltip title="Insert Image" placement="top">
//                       <FontAwesomeIcon
//                         icon={faImage}
//                         className="quizz-inputicon"
//                         onClick={handleImageIconClick}
//                       />
//                     </BootstrapTooltip>
//                     <BootstrapTooltip title="Record Audio" placement="top">
//                       <FontAwesomeIcon icon={faMicrophone} className="quizz-inputicon" onClick={handleOpenModal} />
//                     </BootstrapTooltip>
//                     <BootstrapTooltip title="Record Video" placement="top">
//                       <FontAwesomeIcon icon={faVideo} className="quizz-inputicon" />
//                     </BootstrapTooltip>
//                   </div>
//                   <div className="input-container1">
//                     <Field
//                       id={name}
//                       name={name}
//                       type={inputType}
//                       InputProps={InputProps}
//                       validate={validateInput}
//                       value={value}
//                       onChange={onChange}
//                       placeholder={custPlaceholder || "Enter Input"}
//                       {...rest}
//                       className={`custominput-field1 ${isFocused ? "focused-placeholder" : ""}`}
//                       onFocus={handleFocus}
//                       onBlur={handleBlur}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </Form>
//         )}
//       </Formik>

//       <ImageUpload
//         open={openDialog}
//         onClose={handleCloseDialog}
//         onCrop={handleCrop}
//       />
//       <AudioModal 
//         open={isModalOpen}
//         onClose={handleCloseModal}
//         setAudioURL={setAudioURL}
//         setUpdateAudioUrl={setUpdateAudioUrl}
//         // onAudioInsert={onAudioInsert}
//         audioURL={audioURL}
//       />
//     </div>
//   );
// };

// CustomInputIcon.propTypes = {
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   inputType: PropTypes.string.isRequired,
//   custPlaceholder: PropTypes.string,
//   InputProps: PropTypes.object,
//   setQuestionImage: PropTypes.func.isRequired,
//   questionImage: PropTypes.string,
// };

// export default CustomInputIcon;


// import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import "./CustomInputIcon.css";
// import "../ComponentsCss/componet.css";
// import { Field, Formik, Form } from "formik";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons';
// import Tooltip from '@mui/material/Tooltip';
// import { Grid, IconButton, styled, tooltipClasses } from "@mui/material";
// import ImageUpload from "../../Pages/Admin/Create/EditorQuestion/Modals/ImageUpload";
// import { Crop, Delete, Edit } from "@mui/icons-material";
// import AudioModal from "../../Pages/Admin/Create/EditorQuestion/Modals/AudioModal";
// import CustomAudioPlayer from "./CustomAudioPlayer";

// const BootstrapTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} arrow classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.arrow}`]: {
//     color: theme.palette.common.black,
//   },
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.black,
//   },
// }));

// const CustomInputIcon = ({ label, name, inputType, custPlaceholder, value, onChange, setQuestionImage, questionImage, updateAudioURL, setUpdateAudioUrl, InputProps, ...rest }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [croppedImage, setCroppedImage] = useState(null);
//   const [audioURL, setAudioURL] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   // const [updateAudioURL, setUpdateAudioUrl] = useState("");
//   const [hover, setHover] = useState(false);

//   const handleOpenModal = () => {
//     setAudioURL("");
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setAudioURL("");
//     setIsModalOpen(false);
//   };

//   const handleFocus = () => setIsFocused(true);
//   const handleBlur = () => setIsFocused(false);

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

//   const handleImageIconClick = () => {
//     setOpenDialog(true);
//   };

//   const handleImageIconClick1 = () => {
//     setQuestionImage("");
//     setCroppedImage("");
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleCrop = (image) => {
//     setCroppedImage(image);
//     setOpenDialog(false);
//   };

//   const handleDelete = () => {
//     setQuestionImage(null);
//     setCroppedImage(null);
//   };

//   const handleDeleteAudio = () => {
//     setUpdateAudioUrl(""); // Delete audio
//   };

//   useEffect(() => {
//     if (!croppedImage) {
//       setQuestionImage("");
//     } else {
//       setQuestionImage(croppedImage);
//     }
//   }, [croppedImage, setQuestionImage]);

//   return (
//     <div style={{ width: "100%", padding: "20px" }}>
//       <Formik initialValues={{ [name]: '' }}>
//         {() => (
//           <Form>
//             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//               {questionImage ? (
//                 <React.Fragment>
//                   <Grid style={{ width: '40%', position: 'relative' }}>
//                     <img src={questionImage} alt="Cropped" style={{ width: "100%", height: "90%", objectFit: "cover" }} />
//                     <div className="icon-overlay">
//                       <IconButton
//                         color="primary"
//                         onClick={handleImageIconClick1}
//                         style={{
//                           backgroundColor: 'transparent',
//                           transition: 'background-color 0.3s',
//                           border: "1px solid white",
//                           borderRadius: "3px",
//                           height: "25px", width: "25px",
//                           background: "white",
//                           color: "black"
//                         }}
//                       >
//                         <Edit style={{ fontSize: "15px" }} />
//                       </IconButton>
//                       <IconButton
//                         color="primary"
//                         onClick={handleDelete}
//                         style={{
//                           backgroundColor: 'transparent',
//                           transition: 'background-color 0.3s',
//                           border: "1px solid white",
//                           borderRadius: "3px",
//                           height: "25px", width: "25px",
//                           background: "white",
//                           color: "black"
//                         }}
//                       >
//                         <Delete style={{ fontSize: "15px" }} />
//                       </IconButton>
//                     </div>
//                   </Grid>
//                   <div className={`full-div ${isFocused ? "focused" : ""}`} style={{ width: "60%", padding: "0", height: "190px !important" }}>
//                     <div className="input-container1">
//                       <Field
//                         id={name}
//                         name={name}
//                         type={inputType}
//                         InputProps={InputProps}
//                         validate={validateInput}
//                         value={value}
//                         onChange={onChange}
//                         placeholder={custPlaceholder || "Enter Input"}
//                         {...rest}
//                         className={`custominput-field2 ${isFocused ? "focused-placeholder" : ""}`}
//                         onFocus={handleFocus}
//                         onBlur={handleBlur}
//                       />
//                     </div>
//                   </div>
//                 </React.Fragment>
//               ) : updateAudioURL ? (
//                 <React.Fragment>
//                   {/* <Grid style={{ width: '40%', position: 'relative' ,border:"1px solid red",height:"210px"}}>
//                     <IconButton
//                       color="primary"
//                       onClick={handleDeleteAudio}
//                       style={{
//                         backgroundColor: 'transparent',
//                         transition: 'background-color 0.3s',
//                         border: "1px solid white",
//                         borderRadius: "3px",
//                         height: "25px", width: "25px",
//                         background: "white",
//                         color: "black"
//                       }}
//                     >
//                       <Delete style={{ fontSize: "15px" }} />
//                     </IconButton>

//                      <audio controls src={updateAudioURL} style={{ width: "100%" }} /> 
//                     <CustomAudioPlayer updateAudioURL={updateAudioURL} />

//                   </Grid> */}
//                   <Grid
//                     container
//                     className="audio-container"
//                     style={{
//                       width: '40%',
//                       position: 'relative',
//                       // border: '1px solid red',
//                       backgroundColor:"rgb(54 37 52)",
//                       // background: 'black',
//                       height: '210px',
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       overflow: 'hidden', // Ensure content does not overflow
//                       borderRadius:"3px"

//                     }}
//                     onMouseEnter={() => setHover(true)}
//                     onMouseLeave={() => setHover(false)}
//                   >
//                     <IconButton
//                       color="primary"
//                       onClick={handleDeleteAudio}
//                       className="delete-button"
//                       style={{
//                         backgroundColor: 'transparent',
//                         transition: 'background-color 0.3s, opacity 0.3s', // Smooth transition for hover effect
//                         border: '1px solid white',
//                         borderRadius: '3px',
//                         background:"white",
//                         height: '25px',
//                         width: '25px',
//                         color: 'black',
//                         position: 'absolute',
//                         top: '10px',
//                         right: '10px',
//                         opacity: hover ? 1 : 0, // Show on hover
//                       }}
//                     >
//                       <Delete style={{ fontSize: '15px' }} />
//                     </IconButton>

//                     <CustomAudioPlayer updateAudioURL={updateAudioURL} />
//                   </Grid>
//                   <div className={`full-div ${isFocused ? "focused" : ""}`} style={{ width: "60%", padding: "0", height: "190px !important" }}>
//                     <div className="input-container1">
//                       <Field
//                         id={name}
//                         name={name}
//                         type={inputType}
//                         InputProps={InputProps}
//                         validate={validateInput}
//                         value={value}
//                         onChange={onChange}
//                         placeholder={custPlaceholder || "Enter Input"}
//                         {...rest}
//                         className={`custominput-field2 ${isFocused ? "focused-placeholder" : ""}`}
//                         onFocus={handleFocus}
//                         onBlur={handleBlur}
//                       />
//                     </div>
//                   </div>
//                 </React.Fragment>

//               ) : (
//                 <div className={`full-div ${isFocused ? "focused" : ""}`} style={{ width: "100%" }}>
//                   <div className="icon-container">
//                     <BootstrapTooltip title="Insert Image" placement="top">
//                       <FontAwesomeIcon
//                         icon={faImage}
//                         className="quizz-inputicon"
//                         onClick={handleImageIconClick}
//                       />
//                     </BootstrapTooltip>
//                     <BootstrapTooltip title="Record Audio" placement="top">
//                       <FontAwesomeIcon icon={faMicrophone} className="quizz-inputicon" onClick={handleOpenModal} />
//                     </BootstrapTooltip>
//                     <BootstrapTooltip title="Record Video" placement="top">
//                       <FontAwesomeIcon icon={faVideo} className="quizz-inputicon" />
//                     </BootstrapTooltip>
//                   </div>
//                   <div className="input-container1">
//                     <Field
//                       id={name}
//                       name={name}
//                       type={inputType}
//                       InputProps={InputProps}
//                       validate={validateInput}
//                       value={value}
//                       onChange={onChange}
//                       placeholder={custPlaceholder || "Enter Input"}
//                       {...rest}
//                       className={`custominput-field1 ${isFocused ? "focused-placeholder" : ""}`}
//                       onFocus={handleFocus}
//                       onBlur={handleBlur}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </Form>
//         )}
//       </Formik>

//       <ImageUpload
//         open={openDialog}
//         onClose={handleCloseDialog}
//         onCrop={handleCrop}
//       />
//       <AudioModal
//         open={isModalOpen}
//         onClose={handleCloseModal}
//         setAudioURL={setAudioURL}
//         setUpdateAudioUrl={setUpdateAudioUrl}
//         audioURL={audioURL}
//       />

//     </div>
//   );
// };

// CustomInputIcon.propTypes = {
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   inputType: PropTypes.string.isRequired,
//   custPlaceholder: PropTypes.string,
//   InputProps: PropTypes.object,
//   setQuestionImage: PropTypes.func.isRequired,
//   questionImage: PropTypes.string,
// };

// export default CustomInputIcon;




// import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import "./CustomInputIcon.css";
// import "../ComponentsCss/componet.css";
// import { Field, Formik, Form } from "formik";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons';
// import Tooltip from '@mui/material/Tooltip';
// import { Grid, IconButton, styled, tooltipClasses } from "@mui/material";
// import ImageUpload from "../../Pages/Admin/Create/EditorQuestion/Modals/ImageUpload";
// import { Crop, Delete, Edit } from "@mui/icons-material";
// import AudioModal from "../../Pages/Admin/Create/EditorQuestion/Modals/AudioModal";
// import CustomAudioPlayer from "./CustomAudioPlayer";
// import VideoModal from "../../Pages/Admin/Create/EditorQuestion/Modals/VideoModal";
// import { useSelector } from "react-redux";
// import { adminUrl as baseUrl } from "../../constants";
// // import { adminUrl as baseUrl } from "../../constants";

// const BootstrapTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} arrow classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.arrow}`]: {
//     color: theme.palette.common.black,
//   },
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.black,
//   },
// }));

// const CustomInputIcon = ({ label, name, inputType, custPlaceholder, value, onChange, setUpdateVideoURL, updateVideoURL, setQuestionImage, questionImage, updateAudioURL, setUpdateAudioUrl, InputProps, ...rest }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [croppedImage, setCroppedImage] = useState(null);
//   const [audioURL, setAudioURL] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
//   // const [updateAudioURL, setUpdateAudioUrl] = useState("");
//   const [hover, setHover] = useState(false);
//   const [videoURL, setVideoURL] = useState('');
//   // const [image, setImage] = useState(null);
//   // console.log(image,"imagenn")

// console.log(videoURL,"videoUrlLLLLKAXKSK")

// console.log(questionImage,"questionImage///////////")

//   const handleDeleteVideo = () => {
//     setUpdateVideoURL(null);
//     setIsYouTube(false);
//   }

//   // useEffect(() => {
//   //   if (updateVideoURL) {
//   //     // Create a URL for the video file
//   //     const url = URL.createObjectURL(updateVideoURL);
//   //     setUpdateVideoURL(url);

//   //     // Clean up the URL object when the component unmounts or the file changes
//   //     return () => URL.revokeObjectURL(url);
//   //   }
//   // }, [updateVideoURL]);
//   // useEffect(() => {
//   //   console.log('updateVideoURL:', updateVideoURL);
//   //   if (updateVideoURL && updateVideoURL instanceof File) {
//   //     const url = URL.createObjectURL(updateVideoURL);
//   //     console.log('Created video URL:', url);
//   //     setVideoURL(url);

//   //     return () => URL.revokeObjectURL(url);
//   //   }
//   // }, [updateVideoURL]);

//   const [isYouTube, setIsYouTube] = useState(false);
//   const { QuestionVideoPost } = useSelector((state) => state?.QuestionVideoPost);

//   useEffect(() => {
//     if (updateVideoURL) {
//       console.log(updateVideoURL,"yhuf udnd dfdlast update video")
//       // if (updateVideoURL instanceof File) {
//       if(QuestionVideoPost.data.videoUrl){
//         // Handle file uploads
//         // const url = URL.createObjectURL(updateVideoURL);

//         // setVideoURL(url);
//         setVideoURL(`${baseUrl}${QuestionVideoPost.data.videoUrl}`)
//         // setUpdateAudioUrl(videoURL)
//         setIsYouTube(false);
//         // return () => URL.revokeObjectURL(url);
//       } else if (typeof updateVideoURL === 'string' && updateVideoURL.includes('youtube.com')) {
//         // Handle YouTube URLs
//         setVideoURL(updateVideoURL);
//         setIsYouTube(true);
//       } else {
//         // Handle other cases or reset
//         setVideoURL('');
//         setIsYouTube(false);
//       }
//     }
//   }, [updateVideoURL]);

//   const handleMouseEnter = () => setHover(true);
//   const handleMouseLeave = () => setHover(false);
//   // Extract YouTube video ID from URL
//   const getYouTubeVideoId = (url) => {
//     const match = url.match(/youtube\.com\/watch\?v=([^&]+)/);
//     return match ? match[1] : null;
//   };

//   const youtubeVideoId = isYouTube ? getYouTubeVideoId(videoURL) : null;



//   const handleOpenModal = () => {
//     setAudioURL("");
//     setIsModalOpen(true);
//   };
//   const handleVideoOpenModal = () => {
//     // setAudioURL("");
//     setIsVideoModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setAudioURL("");
//     setIsModalOpen(false);
//   };

//   const handleVideoCloseModal = () => {

//     setVideoURL("")
//     setIsVideoModalOpen(false);
//   };

//   const handleFocus = () => setIsFocused(true);
//   const handleBlur = () => setIsFocused(false);

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

//   const handleImageIconClick = () => {
//     setOpenDialog(true);
//     setQuestionImage("");
//     setCroppedImage("");
//     // setImage(null)

//   };

//   const handleImageIconClick1 = () => {
//     setQuestionImage("");
//     setCroppedImage("");
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     // setImage(null)

//   };

//   const { ImageUploadPost } = useSelector((state) => state?.ImageUploadPost);
//   console.log(ImageUploadPost,"ImageUploadPostvvvvvvvvvvvvvvvvvvvvvvv")
//   // const handleCrop = (image) => {


//   //   // Ensure ImageUploadPost and ImageUploadPost.data are defined
//   //   console.log("outside the if condition and inside the handle crop fnc")
//   //   if (ImageUploadPost && ImageUploadPost.data && ImageUploadPost.data.imageUrl) {
//   //     console.log("the image if is work ")
//   //     const imageUrl = ImageUploadPost.data.imageUrl;
//   //     // console.log(imageUrl, "the image 12121212121");
//   //     const fullImageUrl = `${baseUrl}${imageUrl}`;
//   //     setCroppedImage(fullImageUrl);
//   //     setOpenDialog(false);
//   //   } else {
//   //     console.error('ImageUploadPost or imageUrl is undefined');
//   //   }
//   // };

//   const [isReadyToCrop, setIsReadyToCrop] = useState(false); // State to control when cropping should happen

//   useEffect(() => {
//     // When ImageUploadPost is updated and the imageUrl is available, set the flag to true
//     if (ImageUploadPost?.data?.imageUrl) {
//       setIsReadyToCrop(true);
//     } else {
//       setIsReadyToCrop(false); // Reset if imageUrl is not available
//     }
//   }, [ImageUploadPost]); // Listen to changes in ImageUploadPost

//   // const handleCrop = () => {
//   //   console.log("Attempting to crop image...");

//   //   if (ImageUploadPost?.data?.imageUrl) {
//   //     console.log("Image URL is available, cropping...");
//   //     const imageUrl = ImageUploadPost.data.imageUrl;
//   //     const fullImageUrl = `${baseUrl}${imageUrl}`;
//   //     // setCroppedImage(fullImageUrl);
//   //     setQuestionImage(fullImageUrl);
//   //     setOpenDialog(false);
//   //   } else {
//   //     console.error('ImageUploadPost or imageUrl is undefined');
//   //   }
//   // };



//   const handleCrop = () => {
//     console.log("Attempting to crop image...");

//     if (ImageUploadPost?.data?.imageUrl) {
//       console.log("Image URL is available, cropping...");
//       const imageUrl = ImageUploadPost.data.imageUrl;
//       const fullImageUrl = `${baseUrl}${imageUrl}`;
//       setCroppedImage(fullImageUrl)

//       // Set the question image with the full image URL
//       setQuestionImage(fullImageUrl);
//       console.log(fullImageUrl,"fullImage123")


//       // Close the dialog
//       setOpenDialog(false);

//       // Optionally set the image to null after processing, depending on your use case
//     // Adjust the delay as needed
//     } else {
//       console.error('ImageUploadPost or imageUrl is undefined');
//     }
//     setQuestionImage("");
//   };


//   // Effect to delay the handleCrop call until isReadyToCrop is true
//   // useEffect(() => {
//   //   if (isReadyToCrop) {
//   //     handleCrop();
//   //   }
//   // }, [isReadyToCrop]); 

//   console.log(croppedImage,"croppinnngg")

//   const handleDelete = () => {
//     setQuestionImage(null);
//     setCroppedImage(null);
//   };

//   const handleDeleteAudio = () => {
//     setUpdateAudioUrl(""); // Delete audio
//   };

//   useEffect(() => {
//     if (!croppedImage) {
//       setQuestionImage("");
//     } else {
//       setQuestionImage(croppedImage);
//     }
//   }, [croppedImage, setQuestionImage]);
//   console.log(questionImage,"qeeeewwwewwwewewewew")

//   return (
//     <div style={{ width: "100%", padding: "20px" }}>
//       <Formik initialValues={{ [name]: '' }}>
//         {() => (
//           <Form>
//             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//               {questionImage ? (
//                 <React.Fragment>
//                   <Grid style={{ width: '40%', position: 'relative' }}>
//                     <img src={questionImage} alt="Cropped" style={{ width: "100%", height: "90%", objectFit: "cover" }} />
//                     <div className="icon-overlay">
//                       <IconButton
//                         color="primary"
//                         onClick={handleImageIconClick1}
//                         style={{
//                           backgroundColor: 'transparent',
//                           transition: 'background-color 0.3s',
//                           border: "1px solid white",
//                           borderRadius: "3px",
//                           height: "25px", width: "25px",
//                           background: "white",
//                           color: "black"
//                         }}
//                       >
//                         <Edit style={{ fontSize: "15px" }} />
//                       </IconButton>
//                       <IconButton
//                         color="primary"
//                         onClick={handleDelete}
//                         style={{
//                           backgroundColor: 'transparent',
//                           transition: 'background-color 0.3s',
//                           border: "1px solid white",
//                           borderRadius: "3px",
//                           height: "25px", width: "25px",
//                           background: "white",
//                           color: "black"
//                         }}
//                       >
//                         <Delete style={{ fontSize: "15px" }} />
//                       </IconButton>
//                     </div>
//                   </Grid>
//                   <div className={`full-div ${isFocused ? "focused" : ""}`} style={{ width: "60%", padding: "0", height: "190px !important" }}>
//                     <div className="input-container1">
//                       <Field
//                         id={name}
//                         name={name}
//                         type={inputType}
//                         InputProps={InputProps}
//                         validate={validateInput}
//                         value={value}
//                         onChange={onChange}
//                         placeholder={custPlaceholder || "Enter Input"}
//                         {...rest}
//                         className={`custominput-field2 ${isFocused ? "focused-placeholder" : ""}`}
//                         // onFocus={handleFocus}
//                         // onBlur={handleBlur}
//                       />
//                     </div>
//                   </div>
//                 </React.Fragment>
//               ) : updateAudioURL ? (
//                 <React.Fragment>
//                   {/* <Grid style={{ width: '40%', position: 'relative' ,border:"1px solid red",height:"210px"}}>
//                     <IconButton
//                       color="primary"
//                       onClick={handleDeleteAudio}
//                       style={{
//                         backgroundColor: 'transparent',
//                         transition: 'background-color 0.3s',
//                         border: "1px solid white",
//                         borderRadius: "3px",
//                         height: "25px", width: "25px",
//                         background: "white",
//                         color: "black"
//                       }}
//                     >
//                       <Delete style={{ fontSize: "15px" }} />
//                     </IconButton>

//                      <audio controls src={updateAudioURL} style={{ width: "100%" }} /> 
//                     <CustomAudioPlayer updateAudioURL={updateAudioURL} />

//                   </Grid> */}
//                   <Grid
//                     container
//                     className="audio-container"
//                     style={{
//                       width: '40%',
//                       position: 'relative',
//                       // border: '1px solid red',
//                       backgroundColor: "rgb(54 37 52)",
//                       // background: 'black',
//                       height: '210px',
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       overflow: 'hidden', // Ensure content does not overflow
//                       borderRadius: "3px"

//                     }}
//                     // onMouseEnter={() => setHover(true)}
//                     // onMouseLeave={() => setHover(false)}
//                   >
//                     <IconButton
//                       color="primary"
//                       onClick={handleDeleteAudio}
//                       className="delete-button"
//                       style={{
//                         backgroundColor: 'transparent',
//                         transition: 'background-color 0.3s, opacity 0.3s', // Smooth transition for hover effect
//                         border: '1px solid white',
//                         borderRadius: '3px',
//                         background: "white",
//                         height: '25px',
//                         width: '25px',
//                         color: 'black',
//                         position: 'absolute',
//                         top: '10px',
//                         right: '10px',
//                         opacity: hover ? 1 : 0, // Show on hover
//                       }}
//                     >
//                       <Delete style={{ fontSize: '15px' }} />
//                     </IconButton>

//                     <CustomAudioPlayer updateAudioURL={updateAudioURL} />
//                   </Grid>
//                   <div className={`full-div ${isFocused ? "focused" : ""}`} style={{ width: "60%", padding: "0", height: "190px !important" }}>
//                     <div className="input-container1">
//                       <Field
//                         id={name}
//                         name={name}
//                         type={inputType}
//                         InputProps={InputProps}
//                         validate={validateInput}
//                         value={value}
//                         onChange={onChange}
//                         placeholder={custPlaceholder || "Enter Input"}
//                         {...rest}
//                         className={`custominput-field2 ${isFocused ? "focused-placeholder" : ""}`}
//                         // onFocus={handleFocus}
//                         // onBlur={handleBlur}
//                       />
//                     </div>
//                   </div>
//                 </React.Fragment>

//               ) : updateVideoURL ? (

//                 <React.Fragment>
//                   <Grid
//                     container
//                     className="video-container"
//                     // onMouseEnter={handleMouseEnter}
//                     // onMouseLeave={handleMouseLeave}
//                     style={{
//                       width: '40%',
//                       position: 'relative',
//                       backgroundColor: 'rgb(54 37 52)',
//                       height: '210px',
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       overflow: 'hidden',
//                       borderRadius: '3px',
//                     }}
//                   >
//                     <IconButton
//                       color="primary"
//                       onClick={handleDeleteVideo}

//                       className="delete-button"
//                       style={{
//                         backgroundColor: 'white',
//                         transition: 'background-color 0.3s, opacity 0.3s',
//                         border: '1px solid white',
//                         borderRadius: '3px',
//                         background: 'white',
//                         height: '25px',
//                         width: '25px',
//                         color: 'black',
//                         position: 'absolute',
//                         top: '10px',
//                         right: '10px',
//                         opacity: hover ? 1 : 1,
//                       }}
//                     >
//                       <Delete style={{ fontSize: '15px' }} />
//                     </IconButton>

//                     {isYouTube ? (
//                       youtubeVideoId ? (
//                         <iframe
//                           width="100%"
//                           height="100%"
//                           src={`https://www.youtube.com/embed/${youtubeVideoId}`}
//                           title="YouTube video player"
//                           frameBorder="0"
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                           allowFullScreen
//                         />
//                       ) : (
//                         <p>Invalid YouTube URL</p>
//                       )
//                     ) : (
//                       <video
//                         src={videoURL}
//                         style={{ width: '100%', height: '100%' }}
//                         controls
//                       />
//                     )}
//                   </Grid>
//                   <div className={`full-div ${isFocused ? 'focused' : ''}`} style={{ width: '60%', padding: '0', height: '190px !important' }}>
//                     <div className="input-container1">
//                       <Field
//                         id={name}
//                         name={name}
//                         type={inputType}
//                         InputProps={InputProps}
//                         validate={validateInput}
//                         value={value}
//                         onChange={onChange}
//                         placeholder={custPlaceholder || 'Enter Input'}
//                         {...rest}
//                         className={`custominput-field2 ${isFocused ? 'focused-placeholder' : ''}`}
//                         // onFocus={handleFocus}
//                         // onBlur={handleBlur}
//                       />
//                     </div>
//                   </div>
//                 </React.Fragment>

//               )

//                 : (
//                   <div className={`full-div ${isFocused ? "focused" : ""}`} style={{ width: "100%" }}>
//                     <div className="icon-container">
//                       <BootstrapTooltip title="Insert Image" placement="top">
//                         <FontAwesomeIcon
//                           icon={faImage}
//                           className="quizz-inputicon"
//                           onClick={handleImageIconClick}
//                         />
//                       </BootstrapTooltip>
//                       <BootstrapTooltip title="Record Audio" placement="top">
//                         <FontAwesomeIcon icon={faMicrophone} className="quizz-inputicon" onClick={handleOpenModal} />
//                       </BootstrapTooltip>
//                       <BootstrapTooltip title="Record Video" placement="top">
//                         <FontAwesomeIcon icon={faVideo} className="quizz-inputicon" onClick={handleVideoOpenModal} />
//                       </BootstrapTooltip>
//                     </div>
//                     <div className="input-container1">
//                       <Field
//                         id={name}
//                         name={name}
//                         type={inputType}
//                         InputProps={InputProps}
//                         validate={validateInput}
//                         value={value}
//                         onChange={onChange}
//                         placeholder={custPlaceholder || "Enter Input"}
//                         {...rest}
//                         className={`custominput-field1 ${isFocused ? "focused-placeholder" : ""}`}
//                         // onFocus={handleFocus}
//                         // onBlur={handleBlur}
//                       />
//                     </div>
//                   </div>
//                 )}
//             </div>
//           </Form>
//         )}
//       </Formik>

//       <ImageUpload
//         open={openDialog}
//         onClose={handleCloseDialog}
//         onCrop={handleCrop}
//         // image={image}
//         // setImage={setImage}
//         setQuestionImage={setQuestionImage}
//         setCroppedImage={setCroppedImage}
//       />
//       <AudioModal
//         open={isModalOpen}
//         onClose={handleCloseModal}
//         setAudioURL={setAudioURL}
//         setUpdateAudioUrl={setUpdateAudioUrl}
//         audioURL={audioURL}
//         updateAudioURL={updateAudioURL}
//       />
//       <VideoModal
//         open={isVideoModalOpen}
//         onClose={handleVideoCloseModal}
//         setVideoURL={setVideoURL}
//         videoURL={videoURL}
//         setUpdateVideoURL={setUpdateVideoURL}
//       // setAudioURL={setAudioURL}
//       // setUpdateAudioUrl={setUpdateAudioUrl}
//       // audioURL={audioURL}
//       />
//     </div>
//   );
// };

// CustomInputIcon.propTypes = {
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   inputType: PropTypes.string.isRequired,
//   custPlaceholder: PropTypes.string,
//   InputProps: PropTypes.object,
//   setQuestionImage: PropTypes.func.isRequired,
//   questionImage: PropTypes.string,
// };

// export default CustomInputIcon;



// //-----------------------correct answer end-----------------------------// //



import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "./CustomInputIcon.css";
import "../ComponentsCss/componet.css";
import { Field, Formik, Form } from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@mui/material/Tooltip';
import { Grid, IconButton, styled, tooltipClasses } from "@mui/material";
import ImageUpload from "../../Pages/Admin/Create/EditorQuestion/Modals/ImageUpload";
import { Crop, Delete, Edit } from "@mui/icons-material";
import AudioModal from "../../Pages/Admin/Create/EditorQuestion/Modals/AudioModal";
import CustomAudioPlayer from "./CustomAudioPlayer";
import VideoModal from "../../Pages/Admin/Create/EditorQuestion/Modals/VideoModal";
import { useSelector } from "react-redux";
import { adminUrl as baseUrl } from "../../constants";
// import { adminUrl as baseUrl } from "../../constants";
import { useDispatch } from 'react-redux';
import actions from "../../ReduxStore/actions/index";
import { setInitialStateOfQuestionImageUpload } from "../../ReduxStore/Slices/QuestionEdit/QuestionImageUpload";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const CustomInputIcon = ({ label, name, inputType, custPlaceholder, value, onChange, setUpdateVideoURL, updateVideoURL, questionRef, setQuestionImage, questionImage, updateAudioURL, setUpdateAudioUrl, InputProps, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  const [audioURL, setAudioURL] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  // const [updateAudioURL, setUpdateAudioUrl] = useState("");
  const [hover, setHover] = useState(false);
  const [videoURL, setVideoURL] = useState('');
  // const [image, setImage] = useState(null);
  // console.log(image,"imagenn")
  const dispatch = useDispatch();
  console.log(videoURL, "videoUrlLLLLKAXKSK")

  const [image, setImage] = useState(null)
  // const [image, setImage] = useState('');

  console.log(questionImage, "questionImage///////////")

  const handleDeleteVideo = () => {
    setUpdateVideoURL(null);
    setIsYouTube(false);
  }



  const [isYouTube, setIsYouTube] = useState(false);
  const { QuestionVideoPost } = useSelector((state) => state?.QuestionVideoPost);

  useEffect(() => {
    if (updateVideoURL) {
      console.log(updateVideoURL, "yhuf udnd dfdlast update video")
      // if (updateVideoURL instanceof File) {
      if (QuestionVideoPost.data.videoUrl) {
        // Handle file uploads
        // const url = URL.createObjectURL(updateVideoURL);

        // setVideoURL(url);
        setVideoURL(`${baseUrl}${QuestionVideoPost.data.videoUrl}`)
        // setUpdateAudioUrl(videoURL)
        setIsYouTube(false);
        // return () => URL.revokeObjectURL(url);
      } else if (typeof updateVideoURL === 'string' && updateVideoURL.includes('youtube.com')) {
        // Handle YouTube URLs
        setVideoURL(updateVideoURL);
        setIsYouTube(true);
      } else {
        // Handle other cases or reset
        setVideoURL('');
        setIsYouTube(false);
      }
    }
  }, [updateVideoURL]);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const match = url.match(/youtube\.com\/watch\?v=([^&]+)/);
    return match ? match[1] : null;
  };

  const youtubeVideoId = isYouTube ? getYouTubeVideoId(videoURL) : null;



  const handleOpenModal = () => {
    setAudioURL("");
    setIsModalOpen(true);
  };
  const handleVideoOpenModal = () => {
    // setAudioURL("");
    setIsVideoModalOpen(true);
  };

  const handleCloseModal = () => {
    setAudioURL("");
    setIsModalOpen(false);
  };

  const handleVideoCloseModal = () => {

    setVideoURL("")
    setIsVideoModalOpen(false);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

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

  const handleImageIconClick = () => {
    setOpenDialog(true);
    setQuestionImage("");
    setCroppedImage("");
    // setImage(null)

  };

  const handleImageIconClick1 = () => {
    setQuestionImage("");
    setCroppedImage("");
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    // setImage(null)

  };

  const { QuestionImageUpload } = useSelector((state) => state?.QuestionImageUpload);
  const { ImageUploadPost } = useSelector((state) => state?.ImageUploadPost);
  console.log(QuestionImageUpload, "ImageUploadPostvvvvvvvvvvvvvvvvvvvvvvv")

  const [isReadyToCrop, setIsReadyToCrop] = useState(false); // State to control when cropping should happen

  useEffect(() => {
    // When ImageUploadPost is updated and the imageUrl is available, set the flag to true
    if (QuestionImageUpload?.data?.imageUrl) {
      setIsReadyToCrop(true);
      // handleCrop()

    } else {
      setIsReadyToCrop(false); // Reset if imageUrl is not available
    }
  }, [QuestionImageUpload?.data?.imageUrl]); // Listen to changes in ImageUploadPost





  const handleCrop = (formData) => {
    console.log("Attempting to crop image...");
    if (formData) {
      const data3 = {
        data: formData, // Pass FormData object here
        method: "post",
        apiName: "uploadImage",
      };

      dispatch(actions.QUESTIONIMAGEUPLOAD(data3));
    }


    // setQuestionImage("");
  };


  useEffect(() => {
    if (QuestionImageUpload?.data?.imageUrl) {
      console.log("Image URL is available, cropping...");
      const imageUrl = QuestionImageUpload.data.imageUrl;
      const fullImageUrl = `${baseUrl}${imageUrl}`;
      // setCroppedImage(fullImageUrl)

      // Set the question image with the full image URL
      setQuestionImage(fullImageUrl);
      console.log(fullImageUrl, "fullImage123")
      setOpenDialog(false);
      dispatch(setInitialStateOfQuestionImageUpload())
      setImage(null)
    } else {
      console.error('ImageUploadPost or imageUrl is undefined');
    }
  }, [QuestionImageUpload?.data, dispatch])


  console.log(croppedImage, "croppinnngg")

  const handleDelete = () => {
    setQuestionImage(null);
    setCroppedImage(null);
  };

  const handleDeleteAudio = () => {
    setUpdateAudioUrl(""); // Delete audio
  };

  // useEffect(() => {
  //   if (!croppedImage) {
  //     setQuestionImage("");
  //   } else {
  //     setQuestionImage(croppedImage);
  //   }
  // }, [croppedImage, setQuestionImage]);
  // console.log(questionImage,"qeeeewwwewwwewewewew")

  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <Formik initialValues={{ [name]: '' }}
        innerRef={questionRef}
      >
        {({ setFieldValue }) => (
          <Form>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {questionImage ? (
                <React.Fragment>
                  <Grid style={{ width: '40%', position: 'relative' }}>
                    <img src={questionImage} alt="Cropped" style={{ width: "100%", height: "90%", objectFit: "cover" }} />
                    <div className="icon-overlay">
                      <IconButton
                        color="primary"
                        onClick={handleImageIconClick1}
                        style={{
                          backgroundColor: 'transparent',
                          transition: 'background-color 0.3s',
                          border: "1px solid white",
                          borderRadius: "3px",
                          height: "25px", width: "25px",
                          background: "white",
                          color: "black"
                        }}
                      >
                        <Edit style={{ fontSize: "15px" }} />
                      </IconButton>
                      <IconButton
                        color="primary"
                        onClick={handleDelete}
                        style={{
                          backgroundColor: 'transparent',
                          transition: 'background-color 0.3s',
                          border: "1px solid white",
                          borderRadius: "3px",
                          height: "25px", width: "25px",
                          background: "white",
                          color: "black"
                        }}
                      >
                        <Delete style={{ fontSize: "15px" }} />
                      </IconButton>
                    </div>
                  </Grid>
                  <div className={`full-div ${isFocused ? "focused" : ""}`} style={{ width: "60%", padding: "0", height: "190px !important" }}>
                    <div className="input-container1">
                      <Field
                        id={name}
                        name={name}
                        type={inputType}
                        InputProps={InputProps}
                        validate={validateInput}
                        value={value}
                        onChange={onChange}
                        placeholder={custPlaceholder || "Enter Input"}
                        {...rest}
                        className={`custominput-field2 ${isFocused ? "focused-placeholder" : ""}`}
                        style={{ fontSize: "20px" }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      />
                    </div>
                  </div>
                </React.Fragment>
              ) : updateAudioURL ? (
                <React.Fragment>

                  <Grid
                    container
                    className="audio-container"
                    style={{
                      width: '40%',
                      position: 'relative',
                      // border: '1px solid red',
                      backgroundColor: "rgb(54 37 52)",
                      // background: 'black',
                      height: '210px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden', // Ensure content does not overflow
                      borderRadius: "3px"

                    }}
                  // onMouseEnter={() => setHover(true)}
                  // onMouseLeave={() => setHover(false)}
                  >
                    {/* <IconButton
                      color="primary"
                      onClick={handleDeleteAudio}
                      className="delete-button"
                      style={{
                        backgroundColor: 'transparent',
                        transition: 'background-color 0.3s, opacity 0.3s', // Smooth transition for hover effect
                        border: '1px solid white',
                        borderRadius: '3px',
                        background: "white",
                        height: '25px',
                        width: '25px',
                        color: 'white',
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        opacity: hover ? 1 : 0, // Show on hover
                      }}
                    >
                      <Delete style={{ fontSize: '15px' ,color:"white"}} />
                    </IconButton> */}
                    <IconButton
                      color="primary"
                      onClick={handleDeleteAudio}
                      className="delete-button"
                      style={{
                        backgroundColor: 'transparent',
                        transition: 'background-color 0.3s, opacity 0.3s', // Smooth transition for hover effect
                        border: '1px solid white',
                        borderRadius: '3px',
                        background: "white", // Keep background white
                        height: '25px',
                        width: '25px',
                        color: 'white',
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        opacity: hover ? 1 : 0, // Show on hover
                      }}
                    >
                      <Delete style={{ fontSize: '15px', color: 'black' }} /> {/* Change the icon color to black */}
                    </IconButton>


                    <CustomAudioPlayer updateAudioURL={updateAudioURL} />
                  </Grid>
                  <div className={`full-div ${isFocused ? "focused" : ""}`} style={{ width: "60%", padding: "0", height: "190px !important" }}>
                    <div className="input-container1">
                      <Field
                        id={name}
                        name={name}
                        type={inputType}
                        InputProps={InputProps}
                        validate={validateInput}
                        value={value}
                        onChange={onChange}
                        placeholder={custPlaceholder || "Enter Input"}
                        {...rest}
                        className={`custominput-field2 ${isFocused ? "focused-placeholder" : ""}`}
                        style={{ fontSize: "20px" }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      />
                    </div>
                  </div>
                </React.Fragment>

              ) : updateVideoURL ? (

                <React.Fragment>
                  <Grid
                    container
                    className="video-container"
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    style={{
                      width: '40%',
                      position: 'relative',
                      backgroundColor: 'rgb(54 37 52)',
                      height: '210px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden',
                      borderRadius: '3px',
                    }}
                  >
                    <IconButton
                      color="primary"
                      onClick={handleDeleteVideo}

                      className="delete-button"
                      style={{
                        backgroundColor: 'white',
                        transition: 'background-color 0.3s, opacity 0.3s',
                        border: '1px solid white',
                        borderRadius: '3px',
                        background: 'white',
                        height: '25px',
                        width: '25px',
                        color: 'black',
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        opacity: hover ? 1 : 1,
                      }}
                    >
                      <Delete style={{ fontSize: '15px' }} />
                    </IconButton>

                    {isYouTube ? (
                      youtubeVideoId ? (
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <p>Invalid YouTube URL</p>
                      )
                    ) : (
                      <video
                        src={videoURL}
                        style={{ width: '100%', height: '100%' }}
                        controls
                      />
                    )}
                  </Grid>
                  <div className={`full-div ${isFocused ? 'focused' : ''}`} style={{ width: '60%', padding: '0', height: '190px !important' }}>
                    <div className="input-container1">
                      <Field
                        id={name}
                        name={name}
                        type={inputType}
                        InputProps={InputProps}
                        validate={validateInput}
                        value={value}
                        onChange={onChange}
                        placeholder={custPlaceholder || 'Enter Input'}
                        {...rest}
                        className={`custominput-field2 ${isFocused ? 'focused-placeholder' : ''}`}
                        style={{ fontSize: "20px" }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      />
                    </div>
                  </div>
                </React.Fragment>

              )

                : (
                  <div className={`full-div ${isFocused ? "focused" : ""}`} style={{ width: "100%" }}>
                    <div className="icon-container">
                      <BootstrapTooltip title="Insert Image" placement="top">
                        <FontAwesomeIcon
                          icon={faImage}
                          className="quizz-inputicon"
                          onClick={handleImageIconClick}
                        />
                      </BootstrapTooltip>
                      <BootstrapTooltip title="Record Audio" placement="top">
                        <FontAwesomeIcon icon={faMicrophone} className="quizz-inputicon" onClick={handleOpenModal} />
                      </BootstrapTooltip>
                      <BootstrapTooltip title="Record Video" placement="top">
                        <FontAwesomeIcon icon={faVideo} className="quizz-inputicon" onClick={handleVideoOpenModal} />
                      </BootstrapTooltip>
                    </div>
                    <div className="input-container1">
                      <Field
                        id={name}
                        name={name}
                        type={inputType}
                        InputProps={InputProps}
                        validate={validateInput}
                        value={value}
                        onChange={onChange}
                        placeholder={custPlaceholder || "Enter Input"}
                        {...rest}
                        className={`custominput-field1 ${isFocused ? "focused-placeholder" : ""}`}
                        style={{ fontSize: "20px" }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      />
                    </div>
                  </div>
                )}
            </div>
          </Form>
        )}
      </Formik>

      <ImageUpload
        open={openDialog}
        onClose={handleCloseDialog}
        onCrop={handleCrop}
        image={image}
        setImage={setImage}
        setQuestionImage={setQuestionImage}
        setCroppedImage={setCroppedImage}
      />
      <AudioModal
        open={isModalOpen}
        onClose={handleCloseModal}
        setAudioURL={setAudioURL}
        setUpdateAudioUrl={setUpdateAudioUrl}
        audioURL={audioURL}
        updateAudioURL={updateAudioURL}
      />
      <VideoModal
        open={isVideoModalOpen}
        onClose={handleVideoCloseModal}
        setVideoURL={setVideoURL}
        videoURL={videoURL}
        setUpdateVideoURL={setUpdateVideoURL}

      />
    </div>
  );
};

CustomInputIcon.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  custPlaceholder: PropTypes.string,
  InputProps: PropTypes.object,
  setQuestionImage: PropTypes.func.isRequired,
  questionImage: PropTypes.string,
};

export default CustomInputIcon;
