


// import React, { useState } from 'react';
// import { Grid, TextField, IconButton, useMediaQuery, useTheme, Dialog, DialogContent, DialogTitle } from '@mui/material';
// import { Crop, Edit, Delete } from '@mui/icons-material';
// import { RxCross1 } from "react-icons/rx";
// import ImageUpload from '../../Pages/Admin/Create/EditorQuestion/Modals/ImageUpload';



// const CustomChoiceInput = ({
//   name,
//   inputType,
  
//   textColor,
//   custPlaceholder,
//   InputProps,
//   value,
//   imageValue,
//   onChange,
//   onImageInsert,
//   openImageUpload,
//   choices,
//   handleImageUploadClose,
//   // setCroppedImageUrl,
//   handleImageCrop,
//   handleImageUploadOpen,
//   updateChoiceImage, // Ensure this prop is defined and passed correctly
//   currentChoiceIndex, // Use this to identify the current choice index
//   ...rest
// }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [fullImage, setFullImage] = useState('');
//   const theme = useTheme();
//   const isLg = useMediaQuery(theme.breakpoints.up('lg'));
//   const isSm = useMediaQuery(theme.breakpoints.down('sm'));
//   const isMd = useMediaQuery(theme.breakpoints.down('md'));
//   const [showIcons, setShowIcons] = useState(false);

//   const handleImageClick = () => {
   
//     setFullImage(imageValue);
//     setDialogOpen(true);

//   };



//   const handleEditClick = () => {
//     // if (updateChoiceImage && typeof updateChoiceImage === 'function') {
//     //   updateChoiceImage(currentChoiceIndex, ''); // Clear image by calling the passed function
//     // } 
//     setFullImage("")
//     handleImageUploadOpen()
//     // Open the modal with the current index
//   };
  

//   const handleDialogClose = () => {
//     setDialogOpen(false);
//   };

//   // Ensure handleDelete uses updateChoiceImage correctly
//   const handleDelete = () => {
//     if (updateChoiceImage && typeof updateChoiceImage === 'function') {
//       updateChoiceImage(currentChoiceIndex, ''); // Clear image by calling the passed function
//       setFullImage("")
//     } else {
//       console.error('updateChoiceImage is not a function');
//     }
//   };

//   return (
//     <Grid container spacing={2} alignItems="center" justifyContent="center">
//       <Grid item xs={12}>
//         <div
//           className={`full-div1 ${isFocused ? 'focused' : ''}`}
//           style={{
//             position: 'relative',
//             width: '100%',
//             height: '200px',
//             display: 'flex',
//             flexDirection: 'column',
//           }}
//         >
//           {imageValue ? (
//             <div
//               style={{ position: 'relative' }}
//               onMouseEnter={() => setShowIcons(true)}
//               onMouseLeave={() => setShowIcons(false)}
//             >
//               <img
//                 src={imageValue}
//                 alt="Choice"
//                 style={{
//                   width: '100%',
//                   height: isSm || isMd || isLg ? '160px' : '100px',
//                   objectFit: isSm || isMd ? 'fill' : 'cover',
//                   objectFit: isLg ?"cover" :"fill",
//                   marginBottom: '8px',
//                   cursor: 'pointer',
//                 }}
//                 onClick={handleImageClick}
//                 className="image-hover"
//               />
//               {showIcons && (
//                 <div
//                   className="icon-overlay"
//                   style={{
//                     position: 'absolute',
//                     top: 8,
//                     right: 8,
//                     display: 'flex',
//                     gap: '8px',
//                     zIndex: 1,
//                   }}
//                 >
//                   <IconButton
//                     color="primary"
//                     onClick={handleImageUploadOpen}
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
//                     <Crop style={{ fontSize: "15px" }} />
//                   </IconButton>
//                   <IconButton
//                     color="primary"
//                     onClick={handleEditClick}
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
//                     <Edit style={{ fontSize: "15px" }} />
//                   </IconButton>
//                   <IconButton
//                     color="primary"
//                     onClick={handleDelete}
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
//               )}
//               <TextField
//                 id={name}
//                 name={name}
//                 type={inputType}
//                 InputProps={{
//                   ...InputProps,
//                   inputProps: {
//                     style: {
//                       textAlign: 'center',
//                       padding: 0,
//                       color: textColor,
//                     },
//                   },
//                   sx: {
//                     '& .MuiOutlinedInput-root': {
//                       height: '10px',
//                       maxWidth: '100%',
//                       textAlign: 'center',
//                       '& .MuiInputBase-input': {
//                         textAlign: 'center',
//                         padding: 0,
//                         color: "wheat",
//                       },
//                     },
//                     '& .MuiOutlinedInput-notchedOutline': {
//                       border: "1px solid var(--card-bg-color)",
//                       textAlign: 'center',
//                     }
//                   },
//                   style: {
//                     height: '10px',
//                     maxWidth: '100%',
//                     color: "white",
//                     textAlign: "center !important",
//                     borderColor: "var(--card-bg-color)",
//                   },
//                 }}
//                 placeholder='Add caption here'
//                 {...rest}
//                 className={`custominput-field2 ${isFocused ? "focused-placeholder" : ""}`}
//                 value={value}
//                 onChange={onChange}
//                 onFocus={() => setIsFocused(true)}
//                 onBlur={() => setIsFocused(false)}
//                 multiline
//                 minRows={1}
//                 fullWidth
//               />
//             </div>
//           ) : (
//             <TextField
//               id={name}
//               name={name}
//               type={inputType}
//               InputProps={{
//                 ...InputProps,
//                 inputProps: {
//                   style: {
//                     textAlign: 'center',
//                     padding: 0,
//                     color: textColor,
//                   },
//                 },
//                 sx: {
//                   '& .MuiOutlinedInput-root': {
//                     height: '200px',
//                     maxWidth: '100%',
//                     textAlign: 'center',
//                     '& .MuiInputBase-input': {
//                       textAlign: 'center',
//                       padding: 0,
//                       color: "wheat",
//                     },
//                   },
//                   '& .MuiOutlinedInput-notchedOutline': {
//                     border: "1px solid var(--card-bg-color)",
//                     textAlign: 'center',
//                   }
//                 },
//                 style: {
//                   height: '200px',
//                   maxWidth: '100%',
//                   color: "white",
//                   textAlign: "center !important",
//                   borderColor: "var(--card-bg-color)",
//                 },
//               }}
//               placeholder={custPlaceholder || "Enter Input"}
//               {...rest}
//               className={`custominput-field2 ${isFocused ? "focused-placeholder" : ""}`}
//               value={value}
//               onChange={onChange}
//               onFocus={() => setIsFocused(true)}
//               onBlur={() => setIsFocused(false)}
//               multiline
//               minRows={1}
//               fullWidth
//             />
//           )}
//         </div>
//       </Grid>

//       <Dialog
//         open={dialogOpen}
//         onClose={handleDialogClose}
//         fullScreen
//         fullWidth
//         maxWidth="sm"
//         sx={{
//           '& .MuiDialog-paper': {
//             padding: "50px",
//             objectFit: 'cover',
//             width: '100%',
//             maxWidth: 'none',
//             overflowX: 'auto',
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           },
//           '& .MuiBackdrop-root': {
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//           },
//         }}
//       >
//         <DialogTitle>
//           <IconButton
//             edge="end"
//             color="inherit"
//             onClick={handleDialogClose}
//             aria-label="close"
//             sx={{ position: 'absolute', right: 10, top: 12, color: 'grey.500' }}
//           >
//             <RxCross1 />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           <img
//             src={fullImage}
//             alt="Full View"
//             style={{ width: '100%', height: "100%", objectFit: 'contain' }}
//           />
//         </DialogContent>
//       </Dialog>
//       <ImageUpload
//         open={openImageUpload}
//         onClose={handleImageUploadClose}
//         onCrop={handleImageCrop} // Handle the cropped image
//         initialImage={choices[currentChoiceIndex]?.image || ''} // Pass current image if available
//       />
//     </Grid>
//   );
// };

// export default CustomChoiceInput;

// //----------------correct answer end--------------------


// import React, { useState, useEffect } from 'react';
// import { Grid, TextField, IconButton, useMediaQuery, useTheme, Dialog, DialogContent, DialogTitle } from '@mui/material';
// import { Crop, Edit, Delete } from '@mui/icons-material';
// import { RxCross1 } from "react-icons/rx";
// import ImageUpload from '../../Pages/Admin/Create/EditorQuestion/Modals/ImageUpload';
// import { useFormik } from 'formik'; // Import useFormik
// import { useSelector } from 'react-redux'; // Import useSelector

// const CustomChoiceInput = ({
//   name,
//   inputType,
//   textColor,
//   custPlaceholder,
//   InputProps,
//   value,
//   imageValue,
//   onChange,
//   onImageInsert,
//   openImageUpload,
//   choices,
//   handleImageUploadClose,
//   handleImageCrop,
//   handleImageUploadOpen,
//   updateChoiceImage, 
//   currentChoiceIndex, 
//   ...rest
// }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [fullImage, setFullImage] = useState('');
//   const theme = useTheme();
//   const isLg = useMediaQuery(theme.breakpoints.up('lg'));
//   const isSm = useMediaQuery(theme.breakpoints.down('sm'));
//   const isMd = useMediaQuery(theme.breakpoints.down('md'));
//   const [showIcons, setShowIcons] = useState(false);

//   const handleImageClick = () => {
//     setFullImage(imageValue);
//     setDialogOpen(true);
//   };

//   const handleEditClick = () => {
//     setFullImage("");
//     handleImageUploadOpen();
//   };

//   const handleDialogClose = () => {
//     setDialogOpen(false);
//   };

//   const handleDelete = () => {
//     if (updateChoiceImage && typeof updateChoiceImage === 'function') {
//       updateChoiceImage(currentChoiceIndex, '');
//       setFullImage("");
//     } else {
//       console.error('updateChoiceImage is not a function');
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       questionText: '',
//       questionImageUrl: '',
//       questionAudioUrl: '',
//       questionVideoUrl: '',
//       questionYoutubeUrl: '',
//     },
//     onSubmit: (values) => {
//       // Handle form submission
//     },
//   });

//   const { GetQuestionById } = useSelector((state) => state?.GetQuestionById);
//   const questionData = GetQuestionById?.data;

//   useEffect(() => {
//     if (questionData) {
//       formik.setFieldValue('questionText', questionData.questionText || '');
//       formik.setFieldValue('questionImageUrl', questionData.questionImageUrl || '');
//       formik.setFieldValue('questionAudioUrl', questionData.questionAudioUrl || '');
//       formik.setFieldValue('questionVideoUrl', questionData.questionVideoUrl || '');
//       formik.setFieldValue('questionYoutubeUrl', questionData.questionYoutubeUrl || '');
//     }
//   }, [questionData, formik]);

//   return (
//     <Grid container spacing={2} alignItems="center" justifyContent="center">
//       <Grid item xs={12}>
//         <div
//           className={`full-div1 ${isFocused ? 'focused' : ''}`}
//           style={{
//             position: 'relative',
//             width: '100%',
//             height: '200px',
//             display: 'flex',
//             flexDirection: 'column',
//           }}
//         >
//           {imageValue ? (
//             <div
//               style={{ position: 'relative' }}
//               onMouseEnter={() => setShowIcons(true)}
//               onMouseLeave={() => setShowIcons(false)}
//             >
//               <img
//                 src={imageValue}
//                 alt="Choice"
//                 style={{
//                   width: '100%',
//                   height: isSm || isMd || isLg ? '160px' : '100px',
//                   objectFit: 'cover',
//                   marginBottom: '8px',
//                   cursor: 'pointer',
//                 }}
//                 onClick={handleImageClick}
//                 className="image-hover"
//               />
//               {showIcons && (
//                 <div
//                   className="icon-overlay"
//                   style={{
//                     position: 'absolute',
//                     top: 8,
//                     right: 8,
//                     display: 'flex',
//                     gap: '8px',
//                     zIndex: 1,
//                   }}
//                 >
//                   <IconButton
//                     color="primary"
//                     onClick={handleImageUploadOpen}
//                     style={{
//                       backgroundColor: 'transparent',
//                       transition: 'background-color 0.3s',
//                       border: "1px solid white",
//                       borderRadius: "3px",
//                       height: "25px",
//                       width: "25px",
//                       background: "white",
//                       color: "black"
//                     }}
//                   >
//                     <Crop style={{ fontSize: "15px" }} />
//                   </IconButton>
//                   <IconButton
//                     color="primary"
//                     onClick={handleEditClick}
//                     style={{
//                       backgroundColor: 'transparent',
//                       transition: 'background-color 0.3s',
//                       border: "1px solid white",
//                       borderRadius: "3px",
//                       height: "25px",
//                       width: "25px",
//                       background: "white",
//                       color: "black"
//                     }}
//                   >
//                     <Edit style={{ fontSize: "15px" }} />
//                   </IconButton>
//                   <IconButton
//                     color="primary"
//                     onClick={handleDelete}
//                     style={{
//                       backgroundColor: 'transparent',
//                       transition: 'background-color 0.3s',
//                       border: "1px solid white",
//                       borderRadius: "3px",
//                       height: "25px",
//                       width: "25px",
//                       background: "white",
//                       color: "black"
//                     }}
//                   >
//                     <Delete style={{ fontSize: "15px" }} />
//                   </IconButton>
//                 </div>
//               )}
//               <TextField
//                 id={name}
//                 name={name}
//                 type={inputType}
//                 InputProps={{
//                   ...InputProps,
//                   inputProps: {
//                     style: {
//                       textAlign: 'center',
//                       padding: 0,
//                       color: textColor,
//                     },
//                   },
//                   sx: {
//                     '& .MuiOutlinedInput-root': {
//                       height: '10px',
//                       maxWidth: '100%',
//                       textAlign: 'center',
//                       '& .MuiInputBase-input': {
//                         textAlign: 'center',
//                         padding: 0,
//                         color: "wheat",
//                       },
//                     },
//                     '& .MuiOutlinedInput-notchedOutline': {
//                       border: "1px solid var(--card-bg-color)",
//                       textAlign: 'center',
//                     }
//                   },
//                   style: {
//                     height: '10px',
//                     maxWidth: '100%',
//                     color: "white",
//                     textAlign: "center !important",
//                     borderColor: "var(--card-bg-color)",
//                   },
//                 }}
//                 placeholder='Add caption here'
//                 {...rest}
//                 className={`custominput-field2 ${isFocused ? "focused-placeholder" : ""}`}
//                 value={value}
//                 onChange={onChange}
//                 onFocus={() => setIsFocused(true)}
//                 onBlur={() => setIsFocused(false)}
//                 multiline
//                 minRows={1}
//                 fullWidth
//               />
//             </div>
//           ) : (
//             <TextField
//               id={name}
//               name={name}
//               type={inputType}
//               InputProps={{
//                 ...InputProps,
//                 inputProps: {
//                   style: {
//                     textAlign: 'center',
//                     padding: 0,
//                     color: textColor,
//                   },
//                 },
//                 sx: {
//                   '& .MuiOutlinedInput-root': {
//                     height: '200px',
//                     maxWidth: '100%',
//                     textAlign: 'center',
//                     '& .MuiInputBase-input': {
//                       textAlign: 'center',
//                       padding: 0,
//                       color: "wheat",
//                     },
//                   },
//                   '& .MuiOutlinedInput-notchedOutline': {
//                     border: "1px solid var(--card-bg-color)",
//                     textAlign: 'center',
//                   }
//                 },
//                 style: {
//                   height: '200px',
//                   maxWidth: '100%',
//                   color: "white",
//                   textAlign: "center !important",
//                   borderColor: "var(--card-bg-color)",
//                 },
//               }}
//               placeholder={custPlaceholder || "Enter Input"}
//               {...rest}
//               className={`custominput-field2 ${isFocused ? "focused-placeholder" : ""}`}
//               value={value}
//               onChange={onChange}
//               onFocus={() => setIsFocused(true)}
//               onBlur={() => setIsFocused(false)}
//               multiline
//               minRows={1}
//               fullWidth
//             />
//           )}
//         </div>
//       </Grid>

//       <Dialog
//         open={dialogOpen}
//         onClose={handleDialogClose}
//         fullScreen
//         fullWidth
//         maxWidth="sm"
//         sx={{
//           '& .MuiDialog-paper': {
//             padding: "50px",
//             objectFit: 'cover',
//             width: '100%',
//             maxWidth: 'none',
//             overflowX: 'auto',
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           },
//           '& .MuiBackdrop-root': {
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//           },
//         }}
//       >
//         <DialogTitle>
//           <IconButton
//             edge="end"
//             color="inherit"
//             onClick={handleDialogClose}
//             aria-label="close"
//             sx={{ position: 'absolute', right: 10, top: 12, color: 'grey.500' }}
//           >
//             <RxCross1 />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           <img
//             src={fullImage}
//             alt="Full View"
//             style={{ width: '100%', height: "100%", objectFit: 'contain' }}
//           />
//         </DialogContent>
//       </Dialog>
//       <ImageUpload
//         open={openImageUpload}
//         onClose={handleImageUploadClose}
//         onCrop={handleImageCrop}
//         initialImage={choices[currentChoiceIndex]?.image || ''}
//       />
//     </Grid>
//   );
// };

// export default CustomChoiceInput;





import React, { useState } from 'react';
import { Grid, TextField, IconButton, useMediaQuery, useTheme, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Crop, Edit, Delete } from '@mui/icons-material';
import { RxCross1 } from "react-icons/rx";
import ImageUpload from '../../Pages/Admin/Create/EditorQuestion/Modals/ImageUpload';



const CustomChoiceInput = ({
  name,
  inputType,
  
  textColor,
  custPlaceholder,
  InputProps,
  value,
  imageValue,
  onChange,
  onImageInsert,
  openImageUpload,
  choices,
  handleImageUploadClose,
  // setCroppedImageUrl,
  handleImageCrop,
  handleImageUploadOpen,
  updateChoiceImage, // Ensure this prop is defined and passed correctly
  currentChoiceIndex, // Use this to identify the current choice index
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [fullImage, setFullImage] = useState('');
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const [showIcons, setShowIcons] = useState(false);
  console.log(imageValue,"imageValue,,,")

  const handleImageClick = () => {
   
    setFullImage(imageValue);
    setDialogOpen(true);

  };



  const handleEditClick = () => {
    // if (updateChoiceImage && typeof updateChoiceImage === 'function') {
    //   updateChoiceImage(currentChoiceIndex, ''); // Clear image by calling the passed function
    // } 
    setFullImage("")
    handleImageUploadOpen()
    // Open the modal with the current index
  };
  

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  // Ensure handleDelete uses updateChoiceImage correctly
  const handleDelete = () => {
    if (updateChoiceImage && typeof updateChoiceImage === 'function') {
      updateChoiceImage(currentChoiceIndex, ''); // Clear image by calling the passed function
      setFullImage("")
    } else {
      console.error('updateChoiceImage is not a function');
    }
  };

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <div
          className={`full-div1 ${isFocused ? 'focused' : ''}`}
          style={{
            position: 'relative',
            width: '100%',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {imageValue ? (
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setShowIcons(true)}
              onMouseLeave={() => setShowIcons(false)}
            >
              <img
                src={imageValue}
                alt="Choice"
                style={{
                  width: '100%',
                  height: isSm || isMd || isLg ? '160px' : '100px',
                  objectFit: isSm || isMd ? 'fill' : 'cover',
                  objectFit: isLg ?"cover" :"fill",
                  marginBottom: '8px',
                  cursor: 'pointer',
                }}
                onClick={handleImageClick}
                className="image-hover"
              />
              {showIcons && (
                <div
                  className="icon-overlay"
                  style={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    display: 'flex',
                    gap: '8px',
                    zIndex: 1,
                  }}
                >
                  {/* <IconButton
                    color="primary"
                    onClick={handleImageUploadOpen}
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
                    <Crop style={{ fontSize: "15px" }} />
                  </IconButton> */}
                  <IconButton
                    color="primary"
                    onClick={handleEditClick}
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
              )}
              <TextField
                id={name}
                name={name}
                type={inputType}
                InputProps={{
                  ...InputProps,
                  inputProps: {
                    style: {
                      textAlign: 'center',
                      padding: 0,
                      color: textColor,
                    },
                  },
                  sx: {
                    '& .MuiOutlinedInput-root': {
                      height: '10px',
                      maxWidth: '100%',
                      textAlign: 'center',
                      '& .MuiInputBase-input': {
                        textAlign: 'center',
                        padding: 0,
                        color: "wheat",
                      },
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: "1px solid var(--card-bg-color)",
                      textAlign: 'center',
                    }
                  },
                  style: {
                    height: '10px',
                    maxWidth: '100%',
                    color: "white",
                    fontSize:"20px",
                    textAlign: "center !important",
                    borderColor: "var(--card-bg-color)",
                  },
                }}
                placeholder='Add caption here'
                {...rest}
                className={`custominput-field2 ${isFocused ? "focused-placeholder" : ""}`}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                multiline
                minRows={1}
                fullWidth
              />
            </div>
          ) : (
            <TextField
              id={name}
              name={name}
              type={inputType}
              InputProps={{
                ...InputProps,
                inputProps: {
                  style: {
                    textAlign: 'center',
                    padding: 0,
                    color: textColor,
                  },
                },
                sx: {
                  '& .MuiOutlinedInput-root': {
                    height: '200px',
                    maxWidth: '100%',
                    textAlign: 'center',
                    '& .MuiInputBase-input': {
                      textAlign: 'center',
                      padding: 0,
                      color: "wheat",
                    },
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: "1px solid var(--card-bg-color)",
                    textAlign: 'center',
                  }
                },
                style: {
                  height: '200px',
                  maxWidth: '100%',
                  color: "white",
                  fontSize:"20px",
                  textAlign: "center !important",
                  borderColor: "var(--card-bg-color)",
                },
              }}
              placeholder={custPlaceholder || "Enter Input"}
              {...rest}
              className={`custominput-field2 ${isFocused ? "focused-placeholder" : ""}`}
              value={value}
              onChange={onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              multiline
              minRows={1}
              fullWidth
            />
          )}
        </div>
      </Grid>

      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        fullScreen
        fullWidth
        maxWidth="sm"
        sx={{
          '& .MuiDialog-paper': {
            padding: "50px",
            objectFit: 'cover',
            width: '100%',
            maxWidth: 'none',
            overflowX: 'auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          '& .MuiBackdrop-root': {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <DialogTitle>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleDialogClose}
            aria-label="close"
            sx={{ position: 'absolute', right: 10, top: 12, color: 'grey.500' }}
          >
            <RxCross1 />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <img
            src={fullImage}
            alt="Full View"
            style={{ width: '100%', height: "100%", objectFit: 'contain' }}
          />
        </DialogContent>
      </Dialog>
      <ImageUpload
        open={openImageUpload}
        onClose={handleImageUploadClose}
        onCrop={handleImageCrop} // Handle the cropped image
        initialImage={choices[currentChoiceIndex]?.image || ''} // Pass current image if available
      />
    </Grid>
  );
};

export default CustomChoiceInput;