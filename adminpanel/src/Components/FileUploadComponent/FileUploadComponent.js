// // // import React, { useState } from "react";
// // // import {
// // //   Grid,
// // //   Button,
// // //   Box,
// // //   Typography,
// // //   Paper,
// // //   LinearProgress,
// // //   IconButton,
// // // } from "@mui/material";
// // // import { FiUpload } from "react-icons/fi";
// // // import { HiDocumentArrowUp } from "react-icons/hi2";
// // // import { RiDeleteBin2Line } from "react-icons/ri";
// // // import { AiOutlineProfile } from "react-icons/ai";

// // // const FileUploadComponent = ({name}) => {
// // //   const [uploadedFile, setUploadedFile] = useState(null);

// // //   const handleFileUpload = (event) => {
// // //     const file = event.target.files[0];
// // //     if (file) {
// // //       const fileData = {
// // //         name: file.name,
// // //         type: file.type || "Unknown Type",
// // //         progress: 100, // Assume successful upload for now
// // //       };
// // //       setUploadedFile(fileData);
// // //     }
// // //   };

// // //   const handleFileDelete = () => {
// // //     setUploadedFile(null);
// // //   };

// // //   return (
// // //     <Grid>
// // //       <label htmlFor="file-upload" fontSize="16px" paddingBottom="10px">
// // //         Upload Image{" "}
// // //         <span style={{ fontSize: "11px", color: "#7A7A7A" }}>
// // //           (File supported .png, jpg, Pdf)
// // //         </span>
// // //       </label>
// // //       <input
// // //         accept=".png,.jpg,.pdf"
// // //         style={{ display: "none" }}
// // //         id="file-upload"
// // //         type="file"
// // //         name={name}
// // //         onChange={handleFileUpload}
// // //       />
// // //       <label htmlFor="file-upload" style={{ marginTop: "10px" }}>
// // //         <Button
// // //           component="span"
// // //           startIcon={<FiUpload style={{ fontSize: "14px" }} />}
// // //           sx={{
// // //             width: "100%",
// // //             color: "white",
// // //             background: "#252525",
// // //             borderRadius: "5px",
// // //             fontSize: "14px",
// // //             textTransform: "none",
// // //           }}
// // //         >
// // //           Browse
// // //         </Button>
// // //       </label>

// // //       {uploadedFile ? (
// // //         <Grid item xs={12} mt={2}>
// // //           <Paper
// // //             elevation={3}
// // //             style={{
// // //               paddingBottom: "5px",
// // //               paddingRight: "5px",
// // //               paddingLeft: "5px",
// // //               background: "#F7F7F7",
// // //               border: "none",
// // //               boxShadow: "none",
// // //               display: "flex",
// // //               justifyContent: "space-between",
// // //               alignItems: "center",
// // //             }}
// // //           >
// // //             <Box
// // //               style={{
// // //                 display: "flex",
// // //                 justifyContent: "center",
// // //                 alignItems: "center",
// // //               }}
// // //             >
// // //               <HiDocumentArrowUp
// // //                 style={{ fontSize: "30px", color: "#C38F51", marginRight: "10px" }}
// // //               />
// // //             </Box>
// // //             <Box sx={{ width: "-webkit-fill-available" }}>
// // //               <Box
// // //                 sx={{
// // //                   display: "flex",
// // //                   justifyContent: "space-between",
// // //                   alignItems: "center",
// // //                 }}
// // //               >
// // //                 <Typography variant="body1" sx={{ fontSize: "12px" }}>
// // //                   {uploadedFile.type}
// // //                 </Typography>
// // //                 <IconButton
// // //                   onClick={handleFileDelete}
// // //                   sx={{
// // //                     color: "black",
// // //                     background: "none",
// // //                     "&:hover": {
// // //                       color: "red",
// // //                       background: "none",
// // //                     },
// // //                   }}
// // //                 >
// // //                   <RiDeleteBin2Line
// // //                     style={{ fontSize: "14px", fontWeight: "800" }}
// // //                   />
// // //                 </IconButton>
// // //               </Box>
// // //               <LinearProgress
// // //                 variant="determinate"
// // //                 value={uploadedFile.progress}
// // //                 sx={{
// // //                   height: "6px",
// // //                   borderRadius: "10px",
// // //                   backgroundColor: "lightgray",
// // //                   "& .MuiLinearProgress-bar": {
// // //                     backgroundColor:
// // //                       uploadedFile.progress === 100 ? "#1FC45B" : "red",
// // //                   },
// // //                 }}
// // //               />
// // //               <Box display="flex" justifyContent="end">

// // //                 <Typography
// // //                   variant="body1"
// // //                   fontSize="12px"
// // //                   color={uploadedFile.progress === 100 ? "green" : "red"}
// // //                 >
// // //                   {uploadedFile.progress === 100
// // //                     ? "Upload Successful!"
// // //                     : `${uploadedFile.progress}%`}
// // //                 </Typography>
// // //               </Box>
// // //             </Box>
// // //           </Paper>
// // //         </Grid>
// // //       ) : (
// // //         // <Box sx={{ textAlign: "center", color: "#E5E5E5" }}>
// // //         //   <AiOutlineProfile style={{ fontSize: "100px" }} />
// // //         //   <Typography
// // //         //     variant="body1"
// // //         //     sx={{ color: "#E5E5E5", textAlign: "center" }}
// // //         //   >
// // //         //     No uploads available.
// // //         //   </Typography>
// // //         // </Box>
// // //         null
// // //       )}
// // //     </Grid>
// // //   );
// // // };

// // // export default FileUploadComponent;

// // import React, { useState } from "react";
// // import {
// //   Grid,
// //   Button,
// //   Box,
// //   Typography,
// //   Paper,
// //   LinearProgress,
// //   IconButton,
// //   Dialog,
// //   DialogContent,
// //   DialogTitle,
// // } from "@mui/material";
// // import { FiUpload } from "react-icons/fi";
// // import { HiDocumentArrowUp } from "react-icons/hi2";
// // import { RiDeleteBin2Line } from "react-icons/ri";
// // import { AiOutlineProfile } from "react-icons/ai";
// // import actions from "../../ReduxStore/actions";
// // import { useDispatch } from "react-redux";
// // import { FaEye } from "react-icons/fa6";
// // import { adminUrl } from "../../constants";
// // import { IoMdCloseCircleOutline } from "react-icons/io";
// // import image from "../../Assets/login_bgImage.png"

// // const FileUploadComponent = ({
// //   name,
// //   onFileUpload,
// //   uploadedFile,
// //   setUploadedFile,
// //   selectedDocumentType,
// // }) => {

// //   console.log(uploadedFile,"uploadedFile")
// //   // const [uploadedFile, setUploadedFile] = useState(null);

// //   // const handleFileUpload = (event) => {
// //   //     const file = event.target.files[0];
// //   //     if (file) {
// //   //         const fileData = {
// //   //             name: file.name,
// //   //             type: selectedDocumentType ? selectedDocumentType.type : file.type ,
// //   //             // || "Unknown Type",
// //   //             progress: 100, // Assume successful upload for now
// //   //         };
// //   //         setUploadedFile(fileData);
// //   //         onFileUpload(file); // Notify parent
// //   //     }
// //   // };

// //   const handleFileDelete = () => {
// //     setUploadedFile(null);
// //     onFileUpload(null); // Clear parent field
// //   };

// //   const dispatch = useDispatch();

// //   const handleFileUpload = async (event) => {
// //     const file = event.target.files[0];

// //     console.log(file, "filefilefilefile");

// //     if (file) {
// //       const formData = new FormData();

// //       // Append the file to the FormData object
// //       formData.append("uploadFile", file);

// //       const data1 = {
// //         data: formData,
// //         method: "post",
// //         apiName: "uploadPdfAndImage",
// //       };

// //       const uploadPdfAndImageResponse = await dispatch(
// //         actions.UPLOADPDFANDIMAGE(data1)
// //       );

// //       console.log(
// //         uploadPdfAndImageResponse.payload.data.fileUrl,
// //         "formData12121"
// //       );
// //       onFileUpload(uploadPdfAndImageResponse.payload.data.fileUrl); // Notify parent
// //       setUploadedFile(
// //         {
// //           fileUrl: uploadPdfAndImageResponse.payload.data.fileUrl,
// //           type: selectedDocumentType ? selectedDocumentType.type : file.type,
// //           progress: 100,
// //         });

// //       console.log(uploadedFile, "uploadedFilesuploadedFilesuploadedFiles");
// //     }
// //   };

// //   const [openPreview, setOpenPreview] = useState(false);
// //   const handleFileView = () => {
// //     setOpenPreview(true);
// //   };

// //   return (
// //     <Grid>
// //       <label htmlFor="file-upload" fontSize="16px" paddingBottom="10px">
// //         Upload Image{" "}
// //         <span style={{ fontSize: "11px", color: "#7A7A7A" }}>
// //           (File supported .png, jpg, Pdf)
// //         </span>
// //       </label>
// //       <input
// //         accept=".png,.jpg,.pdf"
// //         style={{ display: "none" }}
// //         // id="file-upload"
// //         id={`file-upload-${name}`}

// //         type="file"
// //         name={name}
// //         onChange={handleFileUpload}
// //       />
// //       <label htmlFor={`file-upload-${name}`} style={{ marginTop: "10px" }}>
// //         <Button
// //           component="span"
// //           startIcon={<FiUpload style={{ fontSize: "14px" }} />}
// //           sx={{
// //             width: "100%",
// //             color: "white",
// //             background: "#252525",
// //             borderRadius: "5px",
// //             fontSize: "14px",
// //             textTransform: "none",
// //           }}
// //         >
// //           Browse
// //         </Button>
// //       </label>

// //       {uploadedFile ? (
// //         <Grid item xs={12} mt={2}>
// //           <Paper
// //             elevation={3}
// //             style={{
// //               paddingBottom: "5px",
// //               paddingRight: "5px",
// //               paddingLeft: "5px",
// //               background: "#F7F7F7",
// //               border: "none",
// //               boxShadow: "none",
// //               display: "flex",
// //               justifyContent: "space-between",
// //               alignItems: "center",
// //             }}
// //           >
// //             <Box
// //               style={{
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //               }}
// //             >
// //               <HiDocumentArrowUp
// //                 style={{
// //                   fontSize: "30px",
// //                   color: "#C38F51",
// //                   marginRight: "10px",
// //                 }}
// //               />
// //             </Box>
// //             <Box sx={{ width: "-webkit-fill-available" }}>
// //               <Box
// //                 sx={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   alignItems: "center",
// //                 }}
// //               >
// //                 <Typography variant="body1" sx={{ fontSize: "12px" }}>
// //                   {uploadedFile.type}
// //                 </Typography>
// //                 <Box>
// //                   <IconButton
// //                     // onClick={handleFileDelete}
// //                     onClick={handleFileView}
// //                     sx={{
// //                       color: "black",
// //                       background: "none",
// //                       // "&:hover": {
// //                       //   color: "red",
// //                       //   background: "none",
// //                       // },
// //                     }}
// //                   >
// //                     <FaEye
// //                       style={{ fontSize: "14px", fontWeight: "800" }}
// //                     />
// //                   </IconButton>
// //                   <IconButton
// //                     onClick={handleFileDelete}
// //                     sx={{
// //                       color: "black",
// //                       background: "none",
// //                       "&:hover": {
// //                         color: "red",
// //                         background: "none",
// //                       },
// //                     }}
// //                   >
// //                     <RiDeleteBin2Line
// //                       style={{ fontSize: "14px", fontWeight: "800" }}
// //                     />
// //                   </IconButton>
// //                 </Box>
// //               </Box>
// //               <LinearProgress
// //                 variant="determinate"
// //                 value={uploadedFile.progress}
// //                 sx={{
// //                   height: "6px",
// //                   borderRadius: "10px",
// //                   backgroundColor: "lightgray",
// //                   "& .MuiLinearProgress-bar": {
// //                     backgroundColor:
// //                       uploadedFile.progress === 100 ? "#1FC45B" : "red",
// //                   },
// //                 }}
// //               />
// //               <Box display="flex" justifyContent="end">
// //                 <Typography
// //                   variant="body1"
// //                   fontSize="12px"
// //                   color={uploadedFile.progress === 100 ? "green" : "red"}
// //                 >
// //                   {uploadedFile.progress === 100
// //                     ? "Upload Successful!"
// //                     : `${uploadedFile.progress}%`}
// //                 </Typography>
// //               </Box>
// //             </Box>
// //           </Paper>
// //         </Grid>
// //       ) : null}

// //       <Dialog open={openPreview} onClose={() => setOpenPreview(false)}>
// //         <DialogTitle>
// //           <Typography variant="subtitle1">
// //             Preview
// //           </Typography>

// //           <IconButton
// //             aria-label="close"
// //             onClick={() => setOpenPreview(false)}
// //             sx={{
// //               position: "absolute",
// //               right: 8,
// //               top: 8,
// //             }}
// //           >
// //             <IoMdCloseCircleOutline />
// //           </IconButton>
// //         </DialogTitle>
// //         <DialogContent>
// //           {uploadedFile?.fileUrl && (
// //             <img
// //               src={`${adminUrl}${uploadedFile.fileUrl}`}
// //               // src={image}

// //               alt="Preview"
// //               style={{ maxWidth: "100%" }}
// //             />
// //           )}
// //         </DialogContent>
// //       </Dialog>
// //     </Grid >
// //   );
// // };

// // export default FileUploadComponent;
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
// import { FaEye } from "react-icons/fa6";
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import { useDispatch } from "react-redux";
// import actions from "../../ReduxStore/actions";
// import { adminUrl } from "../../constants";

// const FileUploadComponent = ({
//   name,
//   onFileUpload,
//   uploadedFile,
//   setUploadedFile,
//   selectedDocumentType,
// }) => {
//   const dispatch = useDispatch();
//   const [openPreview, setOpenPreview] = useState(false);

//   console.log(uploadedFile,"uploadffile")
//   const handleFileUpload = async (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       const formData = new FormData();
//       formData.append("uploadFile", file);

//       const data1 = {
//         data: formData,
//         method: "post",
//         apiName: "uploadPdfAndImage",
//       };

//       const uploadResponse = await dispatch(actions.UPLOADPDFANDIMAGE(data1));

//       const fileUrl = uploadResponse.payload.data.fileUrl;

//       onFileUpload(fileUrl);

//       setUploadedFile({
//         fileUrl: fileUrl,
//         type: file.type, // ensures PDF detection
//         progress: 100,
//       });
//     }
//   };

//   const handleFileDelete = () => {
//     setUploadedFile(null);
//     onFileUpload(null);
//   };

//   const handleFileView = () => {
//     setOpenPreview(true);
//   };

//   return (
//     <Grid>
//       <label htmlFor="file-upload" fontSize="16px" paddingBottom="10px">
//         Upload Image{" "}
//         <span style={{ fontSize: "11px", color: "#7A7A7A" }}>
//           (File supported .png, jpg, pdf)
//         </span>
//       </label>

//       <input
//         accept=".png,.jpg,.jpeg,.pdf"
//         style={{ display: "none" }}
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

//       {uploadedFile && (
//         <Grid item xs={12} mt={2}>
//           <Paper
//             elevation={3}
//             style={{
//               padding: "5px",
//               background: "#F7F7F7",
//               border: "none",
//               boxShadow: "none",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <Box style={{ display: "flex", alignItems: "center" }}>
//               <HiDocumentArrowUp
//                 style={{
//                   fontSize: "30px",
//                   color: "#C38F51",
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
//                   <IconButton onClick={handleFileView} sx={{ color: "black" }}>
//                     <FaEye style={{ fontSize: "14px" }} />
//                   </IconButton>

//                   <IconButton
//                     onClick={handleFileDelete}
//                     sx={{
//                       color: "black",
//                       "&:hover": { color: "red" },
//                     }}
//                   >
//                     <RiDeleteBin2Line style={{ fontSize: "14px" }} />
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
//       )}

//       {/* PREVIEW DIALOG */}
//       <Dialog open={openPreview} onClose={() => setOpenPreview(false)} maxWidth="md" fullWidth>
//         <DialogTitle>
//           <Typography variant="subtitle1">Preview</Typography>

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
//             <>
//               {uploadedFile.type === "application/pdf" ? (
//                 <iframe
//                   src={`${adminUrl}${uploadedFile.fileUrl}`}
//                   title="PDF Preview"
//                   style={{
//                     width: "100%",
//                     height: "500px",
//                     border: "none",
//                   }}
//                 />
//               ) : (
//                 <img
//                   src={`${adminUrl}${uploadedFile.fileUrl}`}
//                   alt="Preview"
//                   style={{ maxWidth: "100%" }}
//                 />
//               )}
//             </>
//           )}
//         </DialogContent>
//       </Dialog>
//     </Grid>
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
import actions from "../../ReduxStore/actions";
import { adminUrl } from "../../constants";
import { ErrorMessage } from "formik";

const FileUploadComponent = ({
  name,
  onFileUpload,
  uploadedFile,
  setUploadedFile,
  selectedDocumentType,
}) => {
  const dispatch = useDispatch();
  const [openPreview, setOpenPreview] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("uploadFile", file);

      const data1 = {
        data: formData,
        method: "post",
        apiName: "uploadPdfAndImage",
      };

      const uploadResponse = await dispatch(actions.UPLOADPDFANDIMAGE(data1));
      const fileUrl = uploadResponse.payload?.data?.fileUrl;

      onFileUpload(fileUrl);

      setUploadedFile({
        fileUrl: fileUrl,
        type: file.type,
        progress: 100,
      });
    }
  };

  const handleFileDelete = () => {
    setUploadedFile(null);
    onFileUpload(null);
  };

  const handleFileView = () => {
    setOpenPreview(true);
  };

  // determine full url
  const finalUrl = uploadedFile?.fileUrl?.startsWith("http")
    ? uploadedFile?.fileUrl
    : uploadedFile?.fileUrl;

  return (
    <Grid>
      <label htmlFor="file-upload" fontSize="16px" paddingBottom="10px">
        Upload Image{" "}
        <span style={{ fontSize: "11px", color: "#7A7A7A" }}>
          (File supported .png, jpg, jpeg)
        </span>
      </label>

      <input
        accept=".png,.jpg,.jpeg"
        style={{ display: "none" }}
        id={`file-upload-${name}`}
        type="file"
        name={name}
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

      {uploadedFile && (
        <Grid item size={{xs:12}} mt={2}>
          <Paper
            elevation={3}
            style={{
              padding: "5px",
              background: "#F7F7F7",
              border: "none",
              boxShadow: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              <HiDocumentArrowUp
                style={{
                  fontSize: "30px",
                  color: "#C38F51",
                  marginRight: "10px",
                }}
              />
            </Box>

            <Box sx={{ width: "-webkit-fill-available" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1" sx={{ fontSize: "12px" }}>
                  {uploadedFile?.type}
                </Typography>

                <Box>
                  <IconButton onClick={handleFileView} sx={{ color: "black" }}>
                    <FaEye style={{ fontSize: "14px" }} />
                  </IconButton>

                  <IconButton
                    onClick={handleFileDelete}
                    sx={{
                      color: "black",
                      "&:hover": { color: "red" },
                    }}
                  >
                    <RiDeleteBin2Line style={{ fontSize: "14px" }} />
                  </IconButton>
                </Box>
              </Box>

              <LinearProgress
                variant="determinate"
                value={uploadedFile?.progress || 0}
                sx={{
                  height: "6px",
                  borderRadius: "10px",
                  backgroundColor: "lightgray",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor:
                      uploadedFile?.progress === 100 ? "#1FC45B" : "red",
                  },
                }}
              />

              <Box display="flex" justifyContent="end">
                <Typography
                  fontSize="12px"
                  color={uploadedFile?.progress === 100 ? "green" : "red"}
                >
                  {uploadedFile?.progress === 100
                    ? "Upload Successful!"
                    : `${uploadedFile?.progress}%`}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      )}

      {/* PREVIEW DIALOG */}
      <Dialog
        open={openPreview}
        onClose={() => setOpenPreview(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="subtitle1">Preview</Typography>

          <IconButton
            aria-label="close"
            onClick={() => setOpenPreview(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <IoMdCloseCircleOutline />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          {uploadedFile?.fileUrl &&
            (uploadedFile?.type?.includes("pdf") ? (
              <iframe
                src={finalUrl}
                title="PDF Preview"
                style={{
                  width: "100%",
                  height: "500px",
                  border: "none",
                }}
              />
            ) : (
              <img src={finalUrl} alt="Preview" style={{ maxWidth: "100%" }} />
            ))}
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

export default FileUploadComponent;
