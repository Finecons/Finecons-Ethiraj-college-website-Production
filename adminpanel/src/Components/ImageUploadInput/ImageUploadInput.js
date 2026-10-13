// import React, { useState, useRef, useEffect } from "react";
// import { Field, ErrorMessage } from "formik";
// import { adminUrl as baseUrl } from "../../constants";
// import { useDispatch, useSelector } from "react-redux";
// import actions from "../../ReduxStore/actions/index";
// import axios from "axios";
// import './ImageBox.css'; // Import your CSS file

// const ImageUploadInput = ({ label, name, isSubmitting, ...rest }) => {
//   const [preview, setPreview] = useState(null);
//   const fileInputRef = useRef(null);

//   // Handle image change
//   const handleImageChange = async (event, setFieldValue) => {
//     const file = await event.currentTarget.files[0];
//     try {
//       // Create a new FormData object
//       const formData = new FormData();

//       // Append the file to the FormData object
//       formData.append("uploadImage", file);

//       // Make a POST request to the API
//       const response = await axios.post(
//         "http://localhost:4000/api/v1/uploadImage",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       // Handle the response
//       const data = await response.data;
//       setFieldValue(name, `${baseUrl}${data.imageUrl}`);
//     } catch (error) {
//       // Handle any errors
//       console.error("Error uploading image:", error);
//     }

//     // Set the selected image in Formik's field value

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result); // Set image preview
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setPreview(null); // Clear preview if no file selected
//     }
//   };

//   // Reset preview and file input when the form is reset or submitting
//   useEffect(() => {
//     if (isSubmitting) {
//       setPreview(null); // Clear preview on form submission
//       if (fileInputRef.current) {
//         fileInputRef.current.value = ""; // Clear file input value
//       }
//     }
//   }, [isSubmitting]);

//   return (
//     <div style={{ width: "85%" }}>
//       <div>
//         <label htmlFor={name} className="input-heading">
//           {label}
//         </label>
//       </div>
//       <Field name={name}>
//         {({ field, form }) => (
//           <div>
//             <input
//               ref={fileInputRef}
//               id={name}
//               type="file"
//               accept="image/*"
//               onChange={(event) => handleImageChange(event, form.setFieldValue)}
//               className="image-upload-input"
//               {...rest}
//             />
//             {preview && (
//               <div className="image-preview">
//                 <img src={preview} alt="Preview" style={{ width: "100px" }} />
//               </div>
//             )}
//           </div>
//         )}
//       </Field>
//       <ErrorMessage name={name} component="div" className="inputs-error-msg" />
//     </div>
//   );
// };

// export default ImageUploadInput;


