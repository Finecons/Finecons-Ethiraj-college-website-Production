// import React, { useState } from "react";
// import {
//   Grid,
//   Button,
//   Box,
//   Typography,
//   Paper,
//   LinearProgress,
//   IconButton,
//   Dialog,
//   DialogContent,
//   DialogTitle,
// } from "@mui/material";
// import { FiUpload } from "react-icons/fi";
// import { HiDocumentArrowUp } from "react-icons/hi2";
// import { RiDeleteBin2Line } from "react-icons/ri";
// import { AiOutlineProfile } from "react-icons/ai";
// import actions from "../../ReduxStore/actions";
// import { useDispatch } from "react-redux";
// import { FaEye } from "react-icons/fa6";
// import { adminUrl } from "../../constants";
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import image from "../../Assets/login_bgImage.png"

// const FileUploadComponent = ({
//   name,
//   onFileUpload,
//   uploadedFile,
//   setUploadedFile,
//   selectedDocumentType,
// }) => {


//   console.log(uploadedFile,"uploadedFile")

//   const handleFileDelete = () => {
//     setUploadedFile(null);
//     onFileUpload(null); // Clear parent field
//   };

//   const dispatch = useDispatch();

//   const handleFileUpload = async (event) => {
//     const file = event.target.files[0];

//     console.log(file, "filefilefilefile");

//     if (file) {
//       const formData = new FormData();

//       // Append the file to the FormData object
//       formData.append("uploadFiles", file);

//       const data1 = {
//         data: formData,
//         method: "post",
//         apiName: "multiplefiles",
//       };

//       const uploadPdfAndImageResponse = await dispatch(
//         actions.UPLOADPDFANDIMAGE(data1)
//       );

//       console.log(
//         uploadPdfAndImageResponse.payload.data.fileUrl,
//         "formData12121"
//       );
//       onFileUpload(uploadPdfAndImageResponse.payload.data.fileUrl); // Notify parent
//       setUploadedFile(
//         {
//           fileUrl: uploadPdfAndImageResponse.payload.data.fileUrl,
//           type: selectedDocumentType ? selectedDocumentType.type : file.type,
//           progress: 100,
//         });

//       console.log(uploadedFile, "uploadedFilesuploadedFilesuploadedFiles");
//     }
//   };

//   const [openPreview, setOpenPreview] = useState(false);
//   const handleFileView = () => {
//     setOpenPreview(true);
//   };


//   return (
//     <Grid>
//       <label htmlFor="file-upload" fontSize="16px" paddingBottom="10px">
//         Upload Image{" "}
//         <span style={{ fontSize: "11px", color: "#7A7A7A" }}>
//           (File supported .png, jpg, Pdf)
//         </span>
//       </label>
//       <input
//         accept=".png,.jpg,.pdf"
//         style={{ display: "none" }}
//         // id="file-upload"
//         id={`file-upload-${name}`}

//         type="file"
//         name={name}
//         onChange={handleFileUpload}
//       />
//       <label htmlFor={`file-upload-${name}`} style={{ marginTop: "10px" }}>
//         <Button
//           component="span"
//           startIcon={<FiUpload style={{ fontSize: "14px" }} />}
//           sx={{
//             width: "100%",
//             color: "white",
//             background: "#252525",
//             borderRadius: "5px",
//             fontSize: "14px",
//             textTransform: "none",
//           }}
//         >
//           Browse
//         </Button>
//       </label>

//       {uploadedFile ? (
//         <Grid item xs={12} mt={2}>
//           <Paper
//             elevation={3}
//             style={{
//               paddingBottom: "5px",
//               paddingRight: "5px",
//               paddingLeft: "5px",
//               background: "#F7F7F7",
//               border: "none",
//               boxShadow: "none",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <Box
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <HiDocumentArrowUp
//                 style={{
//                   fontSize: "30px",
//                   color: "#6B3C58",
//                   marginRight: "10px",
//                 }}
//               />
//             </Box>
//             <Box sx={{ width: "-webkit-fill-available" }}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <Typography variant="body1" sx={{ fontSize: "12px" }}>
//                   {uploadedFile.type}
//                 </Typography>
//                 <Box>
//                   <IconButton
//                     // onClick={handleFileDelete}
//                     onClick={handleFileView}
//                     sx={{
//                       color: "black",
//                       background: "none",
//                       // "&:hover": {
//                       //   color: "red",
//                       //   background: "none",
//                       // },
//                     }}
//                   >
//                     <FaEye
//                       style={{ fontSize: "14px", fontWeight: "800" }}
//                     />
//                   </IconButton>
//                   <IconButton
//                     onClick={handleFileDelete}
//                     sx={{
//                       color: "black",
//                       background: "none",
//                       "&:hover": {
//                         color: "red",
//                         background: "none",
//                       },
//                     }}
//                   >
//                     <RiDeleteBin2Line
//                       style={{ fontSize: "14px", fontWeight: "800" }}
//                     />
//                   </IconButton>
//                 </Box>
//               </Box>
//               <LinearProgress
//                 variant="determinate"
//                 value={uploadedFile.progress}
//                 sx={{
//                   height: "6px",
//                   borderRadius: "10px",
//                   backgroundColor: "lightgray",
//                   "& .MuiLinearProgress-bar": {
//                     backgroundColor:
//                       uploadedFile.progress === 100 ? "#1FC45B" : "red",
//                   },
//                 }}
//               />
//               <Box display="flex" justifyContent="end">
//                 <Typography
//                   variant="body1"
//                   fontSize="12px"
//                   color={uploadedFile.progress === 100 ? "green" : "red"}
//                 >
//                   {uploadedFile.progress === 100
//                     ? "Upload Successful!"
//                     : `${uploadedFile.progress}%`}
//                 </Typography>
//               </Box>
//             </Box>
//           </Paper>
//         </Grid>
//       ) : null}


//       <Dialog open={openPreview} onClose={() => setOpenPreview(false)}>
//         <DialogTitle>
//           <Typography variant="subtitle1">
//             Preview
//           </Typography>

//           <IconButton
//             aria-label="close"
//             onClick={() => setOpenPreview(false)}
//             sx={{
//               position: "absolute",
//               right: 8,
//               top: 8,
//             }}
//           >
//             <IoMdCloseCircleOutline />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           {uploadedFile?.fileUrl && (
//             <img
//               src={`${adminUrl}${uploadedFile.fileUrl}`}
//               // src={image}

//               alt="Preview"
//               style={{ maxWidth: "100%" }}
//             />
//           )}
//         </DialogContent>
//       </Dialog>
//     </Grid >
//   );
// };

// export default FileUploadComponent;


import React, { useState } from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
  Paper,
  LinearProgress,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FiUpload } from "react-icons/fi";
import { HiDocumentArrowUp } from "react-icons/hi2";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaEye } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import actions from "../../ReduxStore/actions"; // Assuming this is correctly pathed
import { adminUrl } from "../../constants"; // Assuming this is correctly pathed
import { ErrorMessage } from "formik";

const MultiFileUploadComponent = ({
  name,
  onFileUpload,
  uploadedFile, // This prop will be treated as an array
  setUploadedFile, // This function will update the array
  selectedDocumentType,
}) => {
  const dispatch = useDispatch();
  const [openPreview, setOpenPreview] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  console.log(uploadedFile,"uploadedfieles")

  // Ensure 'uploadedFile' is treated as an array internally
  const filesArray = Array.isArray(uploadedFile) ? uploadedFile : [];

  const handleFileUpload = async (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const formData = new FormData();
      // Append all files to the same field
      for (const file of files) {
        formData.append("uploadFiles", file);
      }

      const data1 = {
        data: formData,
        method: "post",
        apiName: "multiplefiles",
      };

      try {
        // Dispatch the action once with all files
        const uploadResponse = await dispatch(actions.UPLOADPDFANDIMAGE(data1));

        // Check if the API call was successful and returned the expected data structure
        if (uploadResponse.payload && uploadResponse.payload.data && uploadResponse.payload.data.files) {
          
          // Map the API response to the format needed by the component's state
          const newFilesData = uploadResponse.payload.data.files.map(fileInfo => ({
            fileUrl: fileInfo.fileUrl,
            type: fileInfo.fileName, // Using fileName for display
            progress: 100,
          }));

          // Append new files to the existing ones
          const updatedFiles = [...filesArray, ...newFilesData];
          
          setUploadedFile(updatedFiles);
          onFileUpload(updatedFiles.map(f => f.fileUrl)); // Notify parent with all URLs
        }
      } catch (error) {
        console.error("File upload failed:", error);
        // Optionally, handle batch upload errors (e.g., show a general error message)
      }
    }
  };

  const handleFileDelete = (indexToDelete) => {
    const updatedFiles = filesArray.filter((_, index) => index !== indexToDelete);
    setUploadedFile(updatedFiles);
    onFileUpload(updatedFiles.map(f => f.fileUrl));
  };

  const handleFileView = (file) => {
    setPreviewFile(file);
    setOpenPreview(true);
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
    setPreviewFile(null);
  };

  return (
    <Grid>
      <label htmlFor={`file-upload-${name}`} style={{ fontSize: "16px", paddingBottom: "10px" }}>
        Upload Images{" "}
        <span style={{ fontSize: "11px", color: "#7A7A7A" }}>
          (Files supported: .png, .jpg, .jpeg)
        </span>
      </label>
      <input
        accept=".png,.jpg,.jpeg"
        style={{ display: "none" }}
        id={`file-upload-${name}`}
        type="file"
        name={name}
        multiple // Keep this to allow selecting multiple files
        onChange={handleFileUpload}
      />
      <label htmlFor={`file-upload-${name}`} style={{ marginTop: "10px" }}>
        <Button
          component="span"
          startIcon={<FiUpload style={{ fontSize: "14px" }} />}
          sx={{
            width: "100%",
            color: "white",
            background: "#252525",
            borderRadius: "5px",
            fontSize: "14px",
            textTransform: "none",
          }}
        >
          Browse
        </Button>
      </label>

      {filesArray?.length > 0 && (
        <Grid item xs={12} mt={2}>
          {filesArray.map((file, index) => (
            <Paper
              key={index}
              elevation={3}
              style={{
                padding: "5px 10px",
                background: "#F7F7F7",
                border: "none",
                boxShadow: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <HiDocumentArrowUp style={{ fontSize: "30px", color: "#6B3C58", marginRight: "10px" }} />
              <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant="body1" sx={{ fontSize: "12px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {file.type}
                  </Typography>
                  <Box>
                    <IconButton onClick={() => handleFileView(file)} size="small">
                      <FaEye style={{ fontSize: "14px" }} />
                    </IconButton>
                    <IconButton onClick={() => handleFileDelete(index)} size="small">
                      <RiDeleteBin2Line style={{ fontSize: "14px" }} />
                    </IconButton>
                  </Box>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={file.progress}
                  sx={{
                    height: "6px",
                    borderRadius: "10px",
                    backgroundColor: "lightgray",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: file.progress === 100 ? "#1FC45B" : "red",
                    },
                  }}
                />
                <Box display="flex" justifyContent="end">
                  <Typography
                    variant="body2"
                    fontSize="11px"
                    color={file.progress === 100 ? "green" : "red"}
                  >
                    {file.progress === 100 ? "Upload Successful" : "Uploading..."}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </Grid>
      )}

      <Dialog open={openPreview} onClose={handleClosePreview}>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Preview
          <IconButton
            aria-label="close"
            onClick={handleClosePreview}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <IoMdCloseCircleOutline />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {previewFile?.fileUrl && (
            <img
              src={previewFile.fileUrl}
              alt="Preview"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </DialogContent>
      </Dialog>
      <ErrorMessage
        name={name}
        component="div"
        className="inputs-error-msg"
        style={{ color: "red", fontSize: "12px", fontWeight: '400' }}
      />
    </Grid>
  );
};

export default MultiFileUploadComponent;
