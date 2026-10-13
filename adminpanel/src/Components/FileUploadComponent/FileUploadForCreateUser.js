// // // // import { Box, Button, Grid, IconButton, LinearProgress, Paper, Typography } from '@mui/material';
// // // // import React from 'react'
// // // // import { AiOutlineProfile } from 'react-icons/ai';
// // // // import { FiUpload } from 'react-icons/fi';
// // // // import { HiDocumentArrowUp } from 'react-icons/hi2';
// // // // import { RiDeleteBin2Line } from 'react-icons/ri';

// // // // const FileUploadForCreateUser = ({ selectedDocumentType }) => {
// // // //     // const [selectedDocumentType, setSelectedDocumentType] = React.useState('');
// // // //     const [uploadedFiles, setUploadedFiles] = React.useState([]);

// // // //     const handleFileUpload = (event) => {
// // // //         const file = event.target.files[0];
// // // //         if (file) {
// // // //             setUploadedFiles((prevFiles) => [
// // // //                 ...prevFiles,
// // // //                 { name: file.name, type: selectedDocumentType, progress: 100 },
// // // //             ]);
// // // //         }
// // // //     };

// // // //     const handleFileDelete = (index) => {
// // // //         setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
// // // //     };
// // // //     return (
// // // //         <div>
// // // //             <>
// // // //                 {/* Documents Section (Step 3) */}
// // // //                 <Grid container spacing={4}
// // // //                     // mt="1px"
// // // //                     pt={2}
// // // //                 >
// // // //                     {/* Left Side: Dropdown and Upload Button */}
// // // //                     <Grid item xs={12} md={6}>
// // // //                         {/* Dropdown for Document Type */}
// // // //                         {/* <FormControl fullWidth>
// // // //                                                             <InputLabel>Document Type</InputLabel>
// // // //                                                             <Select
// // // //                                                                 name="documentType"
// // // //                                                                 value={selectedDocumentType}
// // // //                                                                 onChange={(e) => setSelectedDocumentType(e.target.value)}
// // // //                                                             >
// // // //                                                                 <MenuItem value="Emirates ID">Emirates ID</MenuItem>
// // // //                                                                 <MenuItem value="Passport">Passport</MenuItem>
// // // //                                                                 <MenuItem value="Driving License">Driving License</MenuItem>
// // // //                                                             </Select>
// // // //                                                         </FormControl> */}
// // // //                         {/* <CustomDropdownDocumentType
// // // //                             name="emiratesid"
// // // //                             label="Document Type"
// // // //                             custPlaceholder="select a type"
// // // //                             setFieldValue={setFieldValue}
// // // //                             selectedDocumentType={selectedDocumentType}
// // // //                             setSelectedDocumentType={setSelectedDocumentType}

// // // //                             options={[
// // // //                                 { label: "Abhu Dhabi", value: "Abhu Dhabi" },
// // // //                                 { label: "Tamil Nadu", value: "Tamil Nadu" },
// // // //                             ]}
// // // //                         /> */}


// // // //                         {/* File Upload Button */}
// // // //                         <Box mt={2} sx={{ border: "1px solid #E5E5E5", p: 4, display: 'flex', flexDirection: 'column', justifyContent: "space-between", alignItems: "center" }}>
// // // //                             <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: "10px" }}>
// // // //                                 <FiUpload style={{ color: '#C38F51', fontSize: '40px' }} />
// // // //                             </Box>

// // // //                             <input
// // // //                                 accept=".png,.jpg,.pdf"
// // // //                                 style={{ display: "none" }}
// // // //                                 id="file-upload"
// // // //                                 type="file"
// // // //                                 onChange={handleFileUpload}
// // // //                             />
// // // //                             <label htmlFor="file-upload">
// // // //                                 <Button component="span" sx={{ color: 'white', background: "#C38F51", borderRadius: "23px", p: "0 10px", fontSize: "14px", textTransform: "none" }}>
// // // //                                     Browse
// // // //                                 </Button>
// // // //                             </label>

// // // //                             <Typography variant="body2" color="#E5E5E5" mt={1}>
// // // //                                 drop a file here
// // // //                             </Typography>
// // // //                             <Typography variant="body2" color="#252525" mt={1} fontSize="12px">
// // // //                                 <span style={{ color: "red" }}>*</span> File supported: .png, .jpg, .pdf
// // // //                             </Typography>
// // // //                         </Box>

// // // //                     </Grid>

// // // //                     {/* Right Side: Uploaded Files */}
// // // //                     <Grid item xs={12} md={6}>
// // // //                         {/* <Grid container spacing={2}> */}
// // // //                         <Typography variant="subtitle1" mb={0.5}>

// // // //                             Document Type
// // // //                         </Typography>
// // // //                         <Grid>

// // // //                             {uploadedFiles.length > 0 ? (
// // // //                                 uploadedFiles.map((file, index) => (
// // // //                                     <Grid item xs={12} key={index}>
// // // //                                         <Paper
// // // //                                             elevation={3}
// // // //                                             style={{
// // // //                                                 paddingBottom: "5px",
// // // //                                                 paddingRight: "5px",
// // // //                                                 paddingLeft: "5px",

// // // //                                                 background: "#F7F7F7",
// // // //                                                 border: "none",
// // // //                                                 boxShadow: "none",
// // // //                                                 display: "flex",
// // // //                                                 justifyContent: "space-between",
// // // //                                                 alignItems: "center",
// // // //                                             }}
// // // //                                         >
// // // //                                             <Box
// // // //                                                 style={{
// // // //                                                     display: "flex",
// // // //                                                     justifyContent: "center",
// // // //                                                     alignItems: "center",
// // // //                                                 }}
// // // //                                             >
// // // //                                                 <HiDocumentArrowUp style={{ fontSize: "30px", color: '#C38F51', marginRight: "10px" }} />
// // // //                                             </Box>
// // // //                                             <Box sx={{ width: "-webkit-fill-available" }}>
// // // //                                                 <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // //                                                     <Typography variant='body1' sx={{ fontWeight: "800px" }}>
// // // //                                                         {file.type}
// // // //                                                     </Typography>
// // // //                                                     <IconButton onClick={() => handleFileDelete(index)}
// // // //                                                         sx={{
// // // //                                                             color: "black",
// // // //                                                             background: "none",
// // // //                                                             "&:hover": {
// // // //                                                                 color: "red",
// // // //                                                                 background: "none"

// // // //                                                             }
// // // //                                                         }}
// // // //                                                     >
// // // //                                                         <RiDeleteBin2Line
// // // //                                                             style={{ fontSize: "14px", fontWeight: "800" }}
// // // //                                                         />
// // // //                                                     </IconButton>
// // // //                                                 </Box>
// // // //                                                 <LinearProgress
// // // //                                                     variant="determinate"
// // // //                                                     value={file.progress}
// // // //                                                     sx={{
// // // //                                                         height: "6px",
// // // //                                                         borderRadius: "10px",
// // // //                                                         backgroundColor: "lightgray",
// // // //                                                         "& .MuiLinearProgress-bar": {
// // // //                                                             backgroundColor: file.progress === 100 ? "#1FC45B" : "red",
// // // //                                                         },
// // // //                                                     }}
// // // //                                                 />
// // // //                                                 <Box display="flex" justifyContent="space-between">
// // // //                                                     <Typography variant='body1' sx={{ fontSize: "12px", color: "gray" }}>file.pdf</Typography>
// // // //                                                     <Typography
// // // //                                                         variant="body1"
// // // //                                                         fontSize="12px"
// // // //                                                         color={file.progress === 100 ? "green" : "red"}
// // // //                                                     >
// // // //                                                         {file.progress === 100
// // // //                                                             ? "Upload Successful!"
// // // //                                                             : `${file.progress}%`}
// // // //                                                     </Typography>
// // // //                                                 </Box>
// // // //                                             </Box>
// // // //                                         </Paper>
// // // //                                     </Grid>
// // // //                                 ))
// // // //                             ) : (
// // // //                                 <>
// // // //                                     <Box sx={{ textAlign: "center", color: "#E5E5E5" }}>
// // // //                                         <AiOutlineProfile style={{ fontSize: '100px' }} />
// // // //                                         <Typography variant='body1' sx={{ color: "#E5E5E5", textAlign: "center" }}>
// // // //                                             No uploads available.
// // // //                                         </Typography>
// // // //                                     </Box>
// // // //                                 </>
// // // //                             )}

// // // //                         </Grid>
// // // //                         {/* </Grid> */}
// // // //                     </Grid>

// // // //                     {/* <Typography>I accept all the Terms & Conditions and Privacy Policies of goldstake.com</Typography> */}
// // // //                 </Grid>
// // // //             </>
// // // //         </div>
// // // //     )
// // // // }

// // // // export default FileUploadForCreateUser


// // // import React, { useState } from "react";
// // // import {
// // //     Grid,
// // //     Button,
// // //     Box,
// // //     Typography,
// // //     Paper,
// // //     LinearProgress,
// // //     IconButton,
// // // } from "@mui/material";
// // // import { FiUpload } from "react-icons/fi";
// // // import { HiDocumentArrowUp } from "react-icons/hi2";
// // // import { RiDeleteBin2Line } from "react-icons/ri";
// // // import { AiOutlineProfile } from "react-icons/ai";

// // // const FileUploadComponent = ({ name, onFileUpload, uploadedFile, setUploadedFile, selectedDocumentType }) => {
// // //     // const [uploadedFile, setUploadedFile] = useState(null);
// // //     console.log(selectedDocumentType,"selectedDocumentType")
// // //     console.log(uploadedFile,"uploadedFile")

// // //     const handleFileUpload = (event) => {
// // //         const file = event.target.files[0];
// // //         if (file) {
// // //             const fileData = {
// // //                 name: file.name,
// // //                 type: selectedDocumentType ? selectedDocumentType.type : file.type ,
// // //                 // || "Unknown Type",
// // //                 progress: 100, // Assume successful upload for now
// // //             };
// // //             setUploadedFile(fileData);
// // //             onFileUpload(file); // Notify parent
// // //         }
// // //     };

// // //     const handleFileDelete = () => {
// // //         setUploadedFile(null);
// // //         onFileUpload(null); // Clear parent field
// // //     };

// // //     return (
// // //         <Grid>
// // //             <label htmlFor="file-upload" fontSize="16px" paddingBottom="10px">
// // //                 Upload Image{" "}
// // //                 <span style={{ fontSize: "11px", color: "#7A7A7A" }}>
// // //                     (File supported .png, jpg, Pdf)
// // //                 </span>
// // //             </label>
// // //             <input
// // //                 accept=".png,.jpg,.pdf"
// // //                 style={{ display: "none" }}
// // //                 id="file-upload"
// // //                 type="file"
// // //                 name={name}
// // //                 onChange={handleFileUpload}
// // //             />
// // //             <label htmlFor="file-upload" style={{ marginTop: "10px" }}>
// // //                 <Button
// // //                     component="span"
// // //                     startIcon={<FiUpload style={{ fontSize: "14px" }} />}
// // //                     sx={{
// // //                         width: "100%",
// // //                         color: "white",
// // //                         background: "#252525",
// // //                         borderRadius: "5px",
// // //                         fontSize: "14px",
// // //                         textTransform: "none",
// // //                     }}
// // //                 >
// // //                     Browse
// // //                 </Button>
// // //             </label>

// // //             {uploadedFile ? (
// // //                 <Grid item xs={12} mt={2}>
// // //                     <Paper
// // //                         elevation={3}
// // //                         style={{
// // //                             paddingBottom: "5px",
// // //                             paddingRight: "5px",
// // //                             paddingLeft: "5px",
// // //                             background: "#F7F7F7",
// // //                             border: "none",
// // //                             boxShadow: "none",
// // //                             display: "flex",
// // //                             justifyContent: "space-between",
// // //                             alignItems: "center",
// // //                         }}
// // //                     >
// // //                         <Box
// // //                             style={{
// // //                                 display: "flex",
// // //                                 justifyContent: "center",
// // //                                 alignItems: "center",
// // //                             }}
// // //                         >
// // //                             <HiDocumentArrowUp
// // //                                 style={{ fontSize: "30px", color: "#C38F51", marginRight: "10px" }}
// // //                             />
// // //                         </Box>
// // //                         <Box sx={{ width: "-webkit-fill-available" }}>
// // //                             <Box
// // //                                 sx={{
// // //                                     display: "flex",
// // //                                     justifyContent: "space-between",
// // //                                     alignItems: "center",
// // //                                 }}
// // //                             >
// // //                                 <Typography variant="body1" sx={{ fontSize: "12px" }}>
// // //                                     {uploadedFile.type}
// // //                                 </Typography>
// // //                                 <IconButton
// // //                                     onClick={handleFileDelete}
// // //                                     sx={{
// // //                                         color: "black",
// // //                                         background: "none",
// // //                                         "&:hover": {
// // //                                             color: "red",
// // //                                             background: "none",
// // //                                         },
// // //                                     }}
// // //                                 >
// // //                                     <RiDeleteBin2Line
// // //                                         style={{ fontSize: "14px", fontWeight: "800" }}
// // //                                     />
// // //                                 </IconButton>
// // //                             </Box>
// // //                             <LinearProgress
// // //                                 variant="determinate"
// // //                                 value={uploadedFile.progress}
// // //                                 sx={{
// // //                                     height: "6px",
// // //                                     borderRadius: "10px",
// // //                                     backgroundColor: "lightgray",
// // //                                     "& .MuiLinearProgress-bar": {
// // //                                         backgroundColor:
// // //                                             uploadedFile.progress === 100 ? "#1FC45B" : "red",
// // //                                     },
// // //                                 }}
// // //                             />
// // //                             <Box display="flex" justifyContent="end">
// // //                                 <Typography
// // //                                     variant="body1"
// // //                                     fontSize="12px"
// // //                                     color={uploadedFile.progress === 100 ? "green" : "red"}
// // //                                 >
// // //                                     {uploadedFile.progress === 100
// // //                                         ? "Upload Successful!"
// // //                                         : `${uploadedFile.progress}%`}
// // //                                 </Typography>
// // //                             </Box>
// // //                         </Box>
// // //                     </Paper>
// // //                 </Grid>
// // //             ) : null}
// // //         </Grid>
// // //     );
// // // };


// // // export default FileUploadComponent;


// // import React, { useState } from "react";
// // import {
// //     Grid,
// //     Button,
// //     Box,
// //     Typography,
// //     Paper,
// //     LinearProgress,
// //     IconButton,
// // } from "@mui/material";
// // import { FiUpload } from "react-icons/fi";
// // import { HiDocumentArrowUp } from "react-icons/hi2";
// // import { RiDeleteBin2Line } from "react-icons/ri";

// // const FileUploadForCreateUser = ({ name, onFileUpload, uploadedFiles, setUploadedFiles, selectedDocumentType }) => {
// //     const handleFileUpload = (event) => {
// //         const files = Array.from(event.target.files);

// //         const uploadedFileData = files.map((file) => {
// //             const fileExtension = file.name.split(".").pop();
// //             return {
// //                 id: Date.now() + Math.random(), // Unique identifier
// //                 name: file.name,
// //                 type: `${selectedDocumentType || "Unknown Type"}.${fileExtension}`,
// //                 progress: 100, // Assume successful upload for now
// //             };
// //         });

// //         setUploadedFiles((prevFiles) => [...prevFiles, ...uploadedFileData]);
// //         onFileUpload(uploadedFileData); // Notify parent
// //     };

// //     const handleFileDelete = (fileId) => {
// //         const updatedFiles = uploadedFiles.filter((file) => file.id !== fileId);
// //         setUploadedFiles(updatedFiles);
// //         onFileUpload(updatedFiles); // Notify parent
// //     };

// //     return (
// //         <Grid>
// //             <label htmlFor="file-upload" fontSize="16px" paddingBottom="10px">
// //                 Upload Files{" "}
// //                 <span style={{ fontSize: "11px", color: "#7A7A7A" }}>
// //                     (Supported formats: .png, .jpg, .pdf)
// //                 </span>
// //             </label>
// //             <input
// //                 accept=".png,.jpg,.pdf"
// //                 style={{ display: "none" }}
// //                 id="file-upload"
// //                 type="file"
// //                 name={name}
// //                 onChange={handleFileUpload}
// //                 multiple
// //             />
// //             <label htmlFor="file-upload" style={{ marginTop: "10px" }}>
// //                 <Button
// //                     component="span"
// //                     startIcon={<FiUpload style={{ fontSize: "14px" }} />}
// //                     sx={{
// //                         width: "100%",
// //                         color: "white",
// //                         background: "#252525",
// //                         borderRadius: "5px",
// //                         fontSize: "14px",
// //                         textTransform: "none",
// //                     }}
// //                 >
// //                     Browse
// //                 </Button>
// //             </label>

// //             {uploadedFiles.length > 0 && (
// //                 <Grid container spacing={2} mt={2}>
// //                     {uploadedFiles.map((file) => (
// //                         <Grid item xs={12} key={file.id}>
// //                             <Paper
// //                                 elevation={3}
// //                                 style={{
// //                                     padding: "5px",
// //                                     background: "#F7F7F7",
// //                                     display: "flex",
// //                                     justifyContent: "space-between",
// //                                     alignItems: "center",
// //                                 }}
// //                             >
// //                                 <Box
// //                                     style={{
// //                                         display: "flex",
// //                                         justifyContent: "center",
// //                                         alignItems: "center",
// //                                     }}
// //                                 >
// //                                     <HiDocumentArrowUp
// //                                         style={{
// //                                             fontSize: "30px",
// //                                             color: "#C38F51",
// //                                             marginRight: "10px",
// //                                         }}
// //                                     />
// //                                 </Box>
// //                                 <Box sx={{ width: "-webkit-fill-available" }}>
// //                                     <Box
// //                                         sx={{
// //                                             display: "flex",
// //                                             justifyContent: "space-between",
// //                                             alignItems: "center",
// //                                         }}
// //                                     >
// //                                         <Typography variant="body1" sx={{ fontSize: "12px" }}>
// //                                             {file.type}
// //                                         </Typography>
// //                                         <IconButton
// //                                             onClick={() => handleFileDelete(file.id)}
// //                                             sx={{
// //                                                 color: "black",
// //                                                 background: "none",
// //                                                 "&:hover": {
// //                                                     color: "red",
// //                                                     background: "none",
// //                                                 },
// //                                             }}
// //                                         >
// //                                             <RiDeleteBin2Line
// //                                                 style={{
// //                                                     fontSize: "14px",
// //                                                     fontWeight: "800",
// //                                                 }}
// //                                             />
// //                                         </IconButton>
// //                                     </Box>
// //                                     <LinearProgress
// //                                         variant="determinate"
// //                                         value={file.progress}
// //                                         sx={{
// //                                             height: "6px",
// //                                             borderRadius: "10px",
// //                                             backgroundColor: "lightgray",
// //                                             "& .MuiLinearProgress-bar": {
// //                                                 backgroundColor:
// //                                                     file.progress === 100
// //                                                         ? "#1FC45B"
// //                                                         : "red",
// //                                             },
// //                                         }}
// //                                     />
// //                                     <Box display="flex" justifyContent="end">
// //                                         <Typography
// //                                             variant="body1"
// //                                             fontSize="12px"
// //                                             color={file.progress === 100 ? "green" : "red"}
// //                                         >
// //                                             {file.progress === 100
// //                                                 ? "Upload Successful!"
// //                                                 : `${file.progress}%`}
// //                                         </Typography>
// //                                     </Box>
// //                                 </Box>
// //                             </Paper>
// //                         </Grid>
// //                     ))}
// //                 </Grid>
// //             )}
// //         </Grid>
// //     );
// // };

// // export default FileUploadForCreateUser;

// import React, { useState } from "react";
// import {
//     Grid,
//     Button,
//     Box,
//     Typography,
//     Paper,
//     LinearProgress,
//     IconButton,
// } from "@mui/material";
// import { FiUpload } from "react-icons/fi";
// import { HiDocumentArrowUp } from "react-icons/hi2";
// import { RiDeleteBin2Line } from "react-icons/ri";

// const FileUploadForCreateUser = ({
//     name,
//     onFileUpload,
//     uploadedFile,
//     setUploadedFile,
//     selectedDocumentType,
// }) => {
//     const handleFileUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const fileData = {
//                 name: file.name,
//                 type: `${selectedDocumentType || ""}.${file.type.split("/").pop()}`,
//                 progress: 100, // Assume successful upload for now
//             };
//             setUploadedFile(fileData);
//             onFileUpload(file); // Notify parent
//         }
//     };

//     const handleFileDelete = () => {
//         setUploadedFile(null);
//         onFileUpload(null); // Clear parent field
//     };

//     return (
//         <Grid>
//             <label htmlFor="file-upload" fontSize="16px" paddingBottom="10px">
//                 Upload Image{" "}
//                 <span style={{ fontSize: "11px", color: "#7A7A7A" }}>
//                     (File supported .png, .jpg, .pdf)
//                 </span>
//             </label>
//             <input
//                 accept=".png,.jpg,.pdf"
//                 style={{ display: "none" }}
//                 id="file-upload"
//                 type="file"
//                 name={name}
//                 onChange={handleFileUpload}
//             />
//             <label htmlFor="file-upload" style={{ marginTop: "10px" }}>
//                 <Button
//                     component="span"
//                     startIcon={<FiUpload style={{ fontSize: "14px" }} />}
//                     sx={{
//                         width: "100%",
//                         color: "white",
//                         background: "#252525",
//                         borderRadius: "5px",
//                         fontSize: "14px",
//                         textTransform: "none",
//                     }}
//                 >
//                     Browse
//                 </Button>
//             </label>

//             {uploadedFile ? (
//                 <Grid item xs={12} mt={2}>
//                     <Paper
//                         elevation={3}
//                         style={{
//                             paddingBottom: "5px",
//                             paddingRight: "5px",
//                             paddingLeft: "5px",
//                             background: "#F7F7F7",
//                             border: "none",
//                             boxShadow: "none",
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                         }}
//                     >
//                         <Box
//                             style={{
//                                 display: "flex",
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                             }}
//                         >
//                             <HiDocumentArrowUp
//                                 style={{
//                                     fontSize: "30px",
//                                     color: "#C38F51",
//                                     marginRight: "10px",
//                                 }}
//                             />
//                         </Box>
//                         <Box sx={{ width: "-webkit-fill-available" }}>
//                             <Box
//                                 sx={{
//                                     display: "flex",
//                                     justifyContent: "space-between",
//                                     alignItems: "center",
//                                 }}
//                             >
//                                 <Typography variant="body1" sx={{ fontSize: "12px" }}>
//                                     {uploadedFile.type || "Unknown Type"}
//                                 </Typography>
//                                 <IconButton
//                                     onClick={handleFileDelete}
//                                     sx={{
//                                         color: "black",
//                                         background: "none",
//                                         "&:hover": {
//                                             color: "red",
//                                             background: "none",
//                                         },
//                                     }}
//                                 >
//                                     <RiDeleteBin2Line
//                                         style={{ fontSize: "14px", fontWeight: "800" }}
//                                     />
//                                 </IconButton>
//                             </Box>
//                             <LinearProgress
//                                 variant="determinate"
//                                 value={uploadedFile.progress || 0}
//                                 sx={{
//                                     height: "6px",
//                                     borderRadius: "10px",
//                                     backgroundColor: "lightgray",
//                                     "& .MuiLinearProgress-bar": {
//                                         backgroundColor:
//                                             uploadedFile.progress === 100 ? "#1FC45B" : "red",
//                                     },
//                                 }}
//                             />
//                             <Box display="flex" justifyContent="end">
//                                 <Typography
//                                     variant="body1"
//                                     fontSize="12px"
//                                     color={uploadedFile.progress === 100 ? "green" : "red"}
//                                 >
//                                     {uploadedFile.progress === 100
//                                         ? "Upload Successful!"
//                                         : `${uploadedFile.progress}%`}
//                                 </Typography>
//                             </Box>
//                         </Box>
//                     </Paper>
//                 </Grid>
//             ) : null}
//         </Grid>
//     );
// };

// export default FileUploadForCreateUser;


import React, { useState } from "react";
import {
    Grid,
    Button,
    Box,
    Typography,
    Paper,
    LinearProgress,
    IconButton,
} from "@mui/material";
import { FiUpload } from "react-icons/fi";
import { HiDocumentArrowUp } from "react-icons/hi2";
import { RiDeleteBin2Line } from "react-icons/ri";

const FileUploadForCreateUser = ({
    name,
    onFileUpload,
    uploadedFiles,
    setUploadedFiles,
    selectedDocumentType,
}) => {
    // const handleFileUpload = (event) => {
    //     const files = Array.from(event.target.files);
    //     if (files.length) {
    //         const fileData = files.map((file) => ({
    //             name: file.name,
    //             type: `${selectedDocumentType || ""}.${file.type.split("/").pop()}`,
    //             progress: 100, // Assume successful upload for now
    //         }));
    //         setUploadedFiles((prevFiles) => [...prevFiles, ...fileData]);
    //         onFileUpload(files); // Notify parent
    //     }
    // };


    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFiles((prevFiles) => [
                ...prevFiles,
                { name: file.name, type: selectedDocumentType, progress: 100 },
            ]);
        }
    };

    const handleFileDelete = (index) => {
        setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    // const handleFileDelete = (fileName) => {
    //     setUploadedFiles((prevFiles) =>
    //         prevFiles.filter((file) => file.name !== fileName)
    //     );
    //     onFileUpload(null); // Optionally clear parent field
    // };

    return (
        <Grid>
            <label htmlFor="file-upload" style={{ fontSize:"16px",marginBottom:"6px"}} >
                Upload Files{" "}
                <span style={{ fontSize: "11px", color: "#7A7A7A" }}>
                    (Files supported: .png, .jpg, .pdf)
                </span>
            </label>
            <input
                accept=".png,.jpg,.pdf"
                style={{ display: "none" }}
                id="file-upload"
                type="file"
                name={name}
                onChange={handleFileUpload}
                multiple
            />
            <label htmlFor="file-upload" style={{ marginTop: "10px" }}>
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

            {uploadedFiles?.length > 0 && (
                <Grid container spacing={2} mt={2}>
                    {uploadedFiles.map((file) => (
                        <Grid item xs={12} key={file.name}>
                            <Paper
                                elevation={3}
                                style={{
                                    paddingBottom: "5px",
                                    paddingRight: "5px",
                                    paddingLeft: "5px",
                                    background: "#F7F7F7",
                                    border: "none",
                                    boxShadow: "none",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
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
                                            {file.type || "Unknown Type"}
                                        </Typography>
                                        <IconButton
                                            onClick={() => handleFileDelete(file.name)}
                                            sx={{
                                                color: "black",
                                                background: "none",
                                                "&:hover": {
                                                    color: "red",
                                                    background: "none",
                                                },
                                            }}
                                        >
                                            <RiDeleteBin2Line
                                                style={{
                                                    fontSize: "14px",
                                                    fontWeight: "800",
                                                }}
                                            />
                                        </IconButton>
                                    </Box>
                                    <LinearProgress
                                        variant="determinate"
                                        value={file.progress || 0}
                                        sx={{
                                            height: "6px",
                                            borderRadius: "10px",
                                            backgroundColor: "lightgray",
                                            "& .MuiLinearProgress-bar": {
                                                backgroundColor:
                                                    file.progress === 100 ? "#1FC45B" : "red",
                                            },
                                        }}
                                    />
                                    <Box display="flex" justifyContent="end">
                                        <Typography
                                            variant="body1"
                                            fontSize="12px"
                                            color={file.progress === 100 ? "green" : "red"}
                                        >
                                            {file.progress === 100
                                                ? "Upload Successful!"
                                                : `${file.progress}%`}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Grid>
    );
};

export default FileUploadForCreateUser;
