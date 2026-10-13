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
// //   DialogTitle,
// //   DialogContent,
// // } from "@mui/material";
// // import { FiUpload } from "react-icons/fi";
// // import { HiDocumentArrowUp } from "react-icons/hi2";
// // import { RiDeleteBin2Line } from "react-icons/ri";
// // import { FaEye } from "react-icons/fa6";
// // import { IoMdCloseCircleOutline } from "react-icons/io";

// // const CustomSingleFileUpload = ({name,setUploadedFile,uploadedFile}) => {
// // //   const [uploadedFile, setUploadedFile] = useState(null);
// //   const [openPreview, setOpenPreview] = useState(false);

// //   // UPLOAD FILE
// //   const handleFileUpload = (event) => {
// //     const file = event.target.files[0];
// //     if (!file) return;

// //     const fileData = {
// //       file,
// //       name: file.name,
// //       type: file.type,
// //       url: URL.createObjectURL(file),
// //       progress: 100,
// //     };

// //     setUploadedFile(fileData);
// //   };

// //   // DELETE FILE
// //   const handleFileDelete = () => {
// //     setUploadedFile(null);
// //   };

// //   return (
// //     <Grid>
// //       <label htmlFor="single-file-upload">
// //         Upload File{" "}
// //         <span style={{ fontSize: "11px", color: "#7A7A7A" }}>
// //           (Supported: .png, .jpg, .pdf)
// //         </span>
// //       </label>

// //       <input
// //         name={name}
// //         type="file"
// //         accept=".png,.jpg,.jpeg,.pdf"
// //         id="single-file-upload"
// //         style={{ display: "none" }}
// //         onChange={handleFileUpload}
// //       />

// //       <label htmlFor="single-file-upload">
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
// //             mt: 1,
// //           }}
// //         >
// //           Browse
// //         </Button>
// //       </label>

// //       {uploadedFile && (
// //         <Grid item xs={12} mt={2}>
// //           <Paper
// //             sx={{
// //               p: 1,
// //               background: "#F7F7F7",
// //               display: "flex",
// //               alignItems: "center",
// //               boxShadow: "none",
// //             }}
// //           >
// //             <HiDocumentArrowUp
// //               style={{
// //                 fontSize: "28px",
// //                 color: "#C38F51",
// //                 marginRight: "12px",
// //               }}
// //             />

// //             <Box sx={{ width: "100%" }}>
// //               <Box display="flex" justifyContent="space-between">
// //                 <Typography fontSize="12px">{uploadedFile.name}</Typography>

// //                 <Box>
// //                   <IconButton onClick={() => setOpenPreview(true)}>
// //                     <FaEye style={{ fontSize: "14px" }} />
// //                   </IconButton>
// //                   <IconButton
// //                     onClick={handleFileDelete}
// //                     sx={{ "&:hover": { color: "red" } }}
// //                   >
// //                     <RiDeleteBin2Line style={{ fontSize: "14px" }} />
// //                   </IconButton>
// //                 </Box>
// //               </Box>

// //               <LinearProgress
// //                 variant="determinate"
// //                 value={uploadedFile.progress}
// //                 sx={{
// //                   height: "6px",
// //                   borderRadius: "10px",
// //                   my: 0.5,
// //                   backgroundColor: "lightgray",
// //                   "& .MuiLinearProgress-bar": {
// //                     backgroundColor:
// //                       uploadedFile.progress === 100 ? "#1FC45B" : "red",
// //                   },
// //                 }}
// //               />

// //               <Typography
// //                 fontSize="12px"
// //                 textAlign="right"
// //                 color={uploadedFile.progress === 100 ? "green" : "red"}
// //               >
// //                 {uploadedFile.progress === 100
// //                   ? "Upload Successful!"
// //                   : uploadedFile.progress + "%"}
// //               </Typography>
// //             </Box>
// //           </Paper>
// //         </Grid>
// //       )}

// //       {/* PREVIEW DIALOG */}
// //       <Dialog
// //         open={openPreview}
// //         onClose={() => setOpenPreview(false)}
// //         maxWidth="md"
// //       >
// //         <DialogTitle sx={{ position: "relative" }}>
// //           Preview
// //           <IconButton
// //             onClick={() => setOpenPreview(false)}
// //             sx={{ position: "absolute", right: 8, top: 8 }}
// //           >
// //             <IoMdCloseCircleOutline />
// //           </IconButton>
// //         </DialogTitle>

// //         <DialogContent>
// //           {uploadedFile && uploadedFile.type.includes("pdf") ? (
// //             <iframe
// //               src={uploadedFile.url}
// //               title="PDF Preview"
// //               style={{ width: "100%", height: "400px" }}
// //             />
// //           ) : (
// //             <img
// //               src={uploadedFile?.url}
// //               alt="Preview"
// //               style={{ maxWidth: "100%" }}
// //             />
// //           )}
// //         </DialogContent>
// //       </Dialog>
// //     </Grid>
// //   );
// // };

// // export default CustomSingleFileUpload;


// import React, { useState, useEffect } from "react";
// import {
//   Grid,
//   Button,
//   Box,
//   Typography,
//   Paper,
//   LinearProgress,
//   IconButton,
//   Dialog,
//   DialogTitle,
//   DialogContent,
// } from "@mui/material";
// import { FiUpload } from "react-icons/fi";
// import { HiDocumentArrowUp } from "react-icons/hi2";
// import { RiDeleteBin2Line } from "react-icons/ri";
// import { FaEye } from "react-icons/fa6";
// import { IoMdCloseCircleOutline } from "react-icons/io";

// const CustomSingleFileUpload = ({
//   name,
//   setFieldValue,
//   uploadedFile,
//   setUploadedFile,
//   existingUrl,   // OPTIONAL for Edit mode (existing image url)
// }) => {
//   const [openPreview, setOpenPreview] = useState(false);

//   // If editing and image_url exists, show preview
//   useEffect(() => {
//     if (existingUrl && !uploadedFile) {
//       setUploadedFile({
//         file: null,
//         name: existingUrl?.split("/").pop(),
//         type: "image",
//         url: existingUrl,
//         progress: 100,
//       });
//     }
//   }, [existingUrl]);

//   // UPLOAD FILE
//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//      if (file) {
//           const formData = new FormData();
    
//           // Append the file to the FormData object
//           formData.append("uploadFile", file);
    
//           const data1 = {
//             data: formData,
//             method: "post",
//             apiName: "uploadPdfAndImage",
//           };
    
//           const uploadPdfAndImageResponse = await dispatch(
//             actions.UPLOADPDFANDIMAGE(data1)
//           );
    
//           console.log(
//             uploadPdfAndImageResponse.payload.data.fileUrl,
//             "formData12121"
//           );
//           onFileUpload(uploadPdfAndImageResponse.payload.data.fileUrl); // Notify parent
//           setUploadedFile(
//             {
//               fileUrl: uploadPdfAndImageResponse.payload.data.fileUrl,
//               type: selectedDocumentType ? selectedDocumentType.type : file.type,
//               progress: 100,
//             });
    
//           console.log(uploadedFile, "uploadedFilesuploadedFilesuploadedFiles");
//         }

//     const fileData = {
//       file,
//       name: file.name,
//       type: file.type,
//       url: URL.createObjectURL(file),
//       progress: 100,
//     };

//     setUploadedFile(fileData);
//     setFieldValue(name, file); // ✅ Send File to Formik
//   };

//   // DELETE FILE
//   const handleFileDelete = () => {
//     setUploadedFile(null);
//     setFieldValue(name, null); // ✅ Reset Formik value
//   };

//   return (
//     <Grid>
//       <label htmlFor={`single-file-upload-${name}`}>
//         Upload File{" "}
//         <span style={{ fontSize: "11px", color: "#7A7A7A" }}>
//           (Supported: .png, .jpg, .pdf)
//         </span>
//       </label>

//       <input
//         name={name}
//         type="file"
//         accept=".png,.jpg,.jpeg,.pdf"
//         id={`single-file-upload-${name}`}
//         style={{ display: "none" }}
//         onChange={handleFileUpload}
//       />

//       <label htmlFor={`single-file-upload-${name}`}>
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
//             mt: 1,
//           }}
//         >
//           Browse
//         </Button>
//       </label>

//       {uploadedFile && (
//         <Grid item xs={12} mt={2}>
//           <Paper
//             sx={{
//               p: 1,
//               background: "#F7F7F7",
//               display: "flex",
//               alignItems: "center",
//               boxShadow: "none",
//             }}
//           >
//             <HiDocumentArrowUp
//               style={{
//                 fontSize: "28px",
//                 color: "#C38F51",
//                 marginRight: "12px",
//               }}
//             />

//             <Box sx={{ width: "100%" }}>
//               <Box display="flex" justifyContent="space-between">
//                 <Typography fontSize="12px">{uploadedFile.name}</Typography>

//                 <Box>
//                   {/* Preview button */}
//                   <IconButton onClick={() => setOpenPreview(true)}>
//                     <FaEye style={{ fontSize: "14px" }} />
//                   </IconButton>

//                   {/* Delete button */}
//                   <IconButton
//                     onClick={handleFileDelete}
//                     sx={{ "&:hover": { color: "red" } }}
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
//                   my: 0.5,
//                   backgroundColor: "lightgray",
//                   "& .MuiLinearProgress-bar": {
//                     backgroundColor:
//                       uploadedFile.progress === 100 ? "#1FC45B" : "red",
//                   },
//                 }}
//               />

//               <Typography
//                 fontSize="12px"
//                 textAlign="right"
//                 color={uploadedFile.progress === 100 ? "green" : "red"}
//               >
//                 {uploadedFile.progress === 100
//                   ? "Upload Successful!"
//                   : uploadedFile.progress + "%"}
//               </Typography>
//             </Box>
//           </Paper>
//         </Grid>
//       )}

//       {/* PREVIEW DIALOG */}
//       <Dialog
//         open={openPreview}
//         onClose={() => setOpenPreview(false)}
//         maxWidth="md"
//       >
//         <DialogTitle sx={{ position: "relative" }}>
//           Preview
//           <IconButton
//             onClick={() => setOpenPreview(false)}
//             sx={{ position: "absolute", right: 8, top: 8 }}
//           >
//             <IoMdCloseCircleOutline />
//           </IconButton>
//         </DialogTitle>

//         <DialogContent>
//           {uploadedFile && uploadedFile.type?.includes("pdf") ? (
//             <iframe
//               src={uploadedFile.url}
//               title="PDF Preview"
//               style={{ width: "100%", height: "400px" }}
//             />
//           ) : (
//             <img
//               src={uploadedFile?.url}
//               alt="Preview"
//               style={{ maxWidth: "100%" }}
//             />
//           )}
//         </DialogContent>
//       </Dialog>
//     </Grid>
//   );
// };

// export default CustomSingleFileUpload;

import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
  Paper,
  LinearProgress,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { FiUpload } from "react-icons/fi";
import { HiDocumentArrowUp } from "react-icons/hi2";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaEye } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";

// 🔥 IMPORTANT: import dispatch + actions
import { useDispatch } from "react-redux";
import actions from "../../ReduxStore/actions";
import { adminUrl } from "../../constants";
// import actions from "../../redux/actions"; // <-- update path if needed

const CustomSingleFileUpload = ({
  name,
  setFieldValue,
  uploadedFile,
  setUploadedFile,
  existingUrl, // only for edit mode
}) => {
  const dispatch = useDispatch();
  const [openPreview, setOpenPreview] = useState(false);

  // ✅ If existing URL (in Edit Mode), show preview
  useEffect(() => {
    if (existingUrl && !uploadedFile) {
      setUploadedFile({
        name: existingUrl.split("/").pop(),
        url: existingUrl,
        type: existingUrl.endsWith(".pdf") ? "application/pdf" : "image",
        progress: 100,
      });

      // Store the URL directly to Formik
      setFieldValue(name, existingUrl);
    }
  }, [existingUrl]);

  // ✅ Upload File Function
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("uploadFile", file);

      const data = {
        data: formData,
        method: "post",
        apiName: "uploadPdfAndImage",
      };

      // 🔥 Call API
      const response = await dispatch(actions.UPLOADPDFANDIMAGE(data));

      const fileUrl = response?.payload?.data?.fileUrl;
      if (!fileUrl) {
        console.error("Upload failed: No fileUrl returned.");
        return;
      }

      // ✅ Update UI
      setUploadedFile({
        name: file.name,
        url: fileUrl,
        type: file.type,
        progress: 100,
      });

      // ✅ Store only fileUrl in Formik
      setFieldValue(name, fileUrl);
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };

  // ❌ Delete File
  const handleFileDelete = () => {
    setUploadedFile(null);
    setFieldValue(name, null);
  };

  return (
    <Grid>
      <label htmlFor={`single-file-upload-${name}`}>
        Upload Files{" "}
        <span style={{ fontSize: "11px", color: "#7A7A7A" }}>
          (Supported: .png, .jpg, .pdf)
        </span>
      </label>

      {/* Hidden Input */}
      <input
        name={name}
        type="file"
        accept=".png,.jpg,.jpeg,.pdf"
        id={`single-file-upload-${name}`}
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />

      {/* Browse Button */}
      <label htmlFor={`single-file-upload-${name}`}>
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
            mt: 1,
          }}
        >
          Browse
        </Button>
      </label>

      {uploadedFile!==null && (
        <Grid item xs={12} mt={2}>
          <Paper
            sx={{
              p: 1,
              background: "#F7F7F7",
              display: "flex",
              alignItems: "center",
              boxShadow: "none",
            }}
          >
            <HiDocumentArrowUp
              style={{
                fontSize: "28px",
                color: "#C38F51",
                marginRight: "12px",
              }}
            />

            <Box sx={{ width: "100%" }}>
              <Box display="flex" justifyContent="space-between">
                <Typography fontSize="12px">{uploadedFile?.name}</Typography>

                <Box>
                  {/* Preview button */}
                  <IconButton onClick={() => setOpenPreview(true)}>
                    <FaEye style={{ fontSize: "14px" }} />
                  </IconButton>

                  {/* Delete */}
                  <IconButton
                    onClick={handleFileDelete}
                    sx={{ "&:hover": { color: "red" } }}
                  >
                    <RiDeleteBin2Line style={{ fontSize: "14px" }} />
                  </IconButton>
                </Box>
              </Box>

              {/* Progress */}
              <LinearProgress
                variant="determinate"
                value={uploadedFile?.progress}
                sx={{
                  height: "6px",
                  borderRadius: "10px",
                  my: 0.5,
                  backgroundColor: "lightgray",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor:
                      uploadedFile?.progress === 100 ? "#1FC45B" : "red",
                  },
                }}
              />

              <Typography
                fontSize="12px"
                textAlign="right"
                color={uploadedFile?.progress === 100 ? "green" : "red"}
              >
                {uploadedFile?.progress === 100
                  ? "Upload Successful!"
                  : `${uploadedFile?.progress}%`}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      )}

      {/* PREVIEW MODAL */}
      <Dialog
        open={openPreview}
        onClose={() => setOpenPreview(false)}
        maxWidth="md"
      >
        <DialogTitle sx={{ position: "relative" }}>
          Preview
          <IconButton
            onClick={() => setOpenPreview(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <IoMdCloseCircleOutline />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          {uploadedFile?.type?.includes("pdf") ? (
            <iframe
              src={`${adminUrl}${uploadedFile?.url}`}
              title="PDF Preview"
              style={{ width: "100%", height: "400px" }}
            />
          ) : (
            <img
              src={`${adminUrl}${uploadedFile?.url}`}
              alt="Preview"
              style={{ maxWidth: "100%" }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default CustomSingleFileUpload;
