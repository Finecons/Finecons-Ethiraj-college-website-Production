import React, { useState, useRef, useEffect } from "react";
import { Field, ErrorMessage } from "formik";
import { adminUrl as baseUrl } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../ReduxStore/actions/index";
import { Box, Typography } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import axios from "axios";
import "./ImageBox.css"; // Import your CSS file
// import { adminUrl as baseUrl } from "../../constants";


const CustImageUploadInput = ({ label, name, isSubmitting, ...rest }) => {
  const [viewImgApi, setViewImgApi] = useState(null);

  const fileInputRef = useRef(null);



  const handleImageChange = async (event, setFieldValue) => {
    const file = await event.currentTarget.files[0];
    try {
      // Create a new FormData object
      const formData = new FormData();
  
      // Append the file to the FormData object
      formData.append("uploadImage", file);
      console.log(formData,"formData12121")
  
      // Make a POST request to the API
      const response = await axios.post(
        `${baseUrl}uploadImage`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      // Handle the response
      const data = response.data; // This is the entire response object
  
      // Now navigate to data.data.imageUrl to get the correct URL
      if (data && data.data && data.data.imageUrl) {
        const imageUrl = data.data.imageUrl;
        setFieldValue(name, `${baseUrl}${imageUrl}`);
        setViewImgApi(`${baseUrl}${imageUrl}`);
      } else {
        console.error("Image URL not found in response:", data);
      }
    } catch (error) {
      // Handle any errors
      console.error("Error uploading image:", error);
    }
  
    // Set the selected image in Formik's field value
  };
  
  // Reset preview and file input when the form is reset or submitting
  useEffect(() => {
    if (isSubmitting) {
      setViewImgApi(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Clear file input value
      }
    }
  }, [isSubmitting]);
  

  
  return (
    <Box className="image-box">
      {viewImgApi ? (
        <img src={viewImgApi} className="view-img-api" />
      ) : (
        <>
          <Field name={name}>
            {({ field, form }) => (
              <div>
                <input
                  ref={fileInputRef}
                  id={name}
                  type="file"
                  accept="image/*"
                  onChange={(event) =>
                    handleImageChange(event, form.setFieldValue)
                  }
                  className="image-box-input"
                  style={{
                    // position: "absolute",
                    // width: "100%",
                    // height: "100%",
                    opacity: 0,
                    cursor: "pointer",
                  }}
                  {...rest}
                />
              </div>
            )}
          </Field>
          <label htmlFor={name}>
            <Box className="image-box-button">
              <AddIcon sx={{ fontSize: "14px" }} />
            </Box>
          </label>
          <Typography variant="caption" sx={{ color: "#666" }}>
            {label}
          </Typography>
        </>
      )}
      <ErrorMessage name={name} component="div" className="inputs-error-msg" />
    </Box>
  );
};

export default CustImageUploadInput;

// <Box
//   className="image-box"
//   sx={{
//     display: "flex",
//     height: "100%",
//     width: "100%",
//     backgroundColor: "#f5f5f5", // Replace with your color for bg-light-2
//     cursor: "pointer",
//     borderRadius: "4px",
//     border: "2px dashed #ccc", // Replace with your color for border-dark-6
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: "8px",
//     position: "relative",
//   }}
// >
//   <input
//     type="file"
//     id="file-upload"
//     // onChange={handleFileChange}
//     style={{
//       position: "absolute",
//       width: "100%",
//       height: "100%",
//       opacity: 0,
//       cursor: "pointer",
//     }}
//   />
//   <label htmlFor="file-upload">
//     <Box
//       className="image-box-button"
//       sx={{
//         width: "36px",
//         height: "36px",
//         backgroundColor: "#333", // Replace with your color for bg-dark-50%
//         color: "#fff", // Replace with your color for text-light
//         borderRadius: "50%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         "&:hover": {
//           backgroundColor: "#222", // Replace with your color for hover:bg-dark-60%
//         },
//         "&:active": {
//           backgroundColor: "#333", // Replace with your color for active:bg-dark-50%
//         },
//         minWidth: "max-content",
//         position: "relative",
//       }}
//     >
//       <AddIcon sx={{ fontSize: "14px" }} />
//     </Box>
//   </label>
//   <Typography variant="caption" sx={{ color: "#666" }}>
//     Add cover image
//   </Typography>
// </Box>;
