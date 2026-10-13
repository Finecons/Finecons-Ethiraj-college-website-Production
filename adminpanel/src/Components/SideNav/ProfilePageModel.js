// import React, { useEffect, useRef, useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   IconButton,
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Avatar,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableRow,
//   Paper,
// } from "@mui/material";
// import { Close as CloseIcon } from "@mui/icons-material";
// import { toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import CustomInputLogin from "../CustomInputLogin/CustomInputLogin";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import actions from "../../ReduxStore/actions";

// import { adminUrl as baseUrl } from "../../constants";
// import OtpSendForAll from "../SignupPages/OtpSendForAll";


// const ProfilePageModel = ({ open, onClose, updateApiName, checkApiName,edit,
//   userProfile,
//   onSaveProfile, profileData }) => {
//   const navigate = useNavigate();
//   console.log(profileData, "profileDataprofileDataprofileData")
//   console.log(userProfile.profileImage, "profileImageprofileImageprofileImage")


//   const [isEditMode, setIsEditMode] = useState(false);
//   //   const [cancelEdit,setCancelEdit] = useState(false);
//   const [editableProfile, setEditableProfile] = useState({
//     name: userProfile?.name || "",
//     email: userProfile?.email || "",
//     phone: userProfile?.phone || "",
//     profileImage: userProfile?.profileImage || "",
//   });

//   console.log(userProfile?.profileImage, "previewImagepreviewImage1212121")

//   const [previewImage, setPreviewImage] = useState();

//   useEffect(() => {
//     if (userProfile?.profileImage) {
//       setPreviewImage(userProfile.profileImage);
//     }
//   }, [userProfile?.profileImage]);

//   console.log(previewImage, "previewImagepreviewImage");

//   const handleLogout = () => {
//     toast.success("Logged out successfully");
//     setTimeout(() => {
//       navigate("/");
//       onClose();
//     }, 3000);
//   };

//   const { getCustomerById } = useSelector(
//     (state) => state?.getCustomerById
//   );
//   console.log(getCustomerById, "getCustomerByIdgetCustomerByIdgetCustomerById")
//   const formikRef = useRef();

//   const { getOperatorById } = useSelector(
//     (state) => state?.getOperatorById
//   );

//   useEffect(() => {
//     if (formikRef.current && formikRef.current.setFieldValue) {
//       const { setFieldValue } = formikRef.current;
//       // const { setFieldValue } = formikRef.current;
//       if (checkApiName === "checkEmailPhoneAvailabilityForCustomer") {
//         setFieldValue("email", getCustomerById?.data?.email);
//         setFieldValue("password", getCustomerById?.data?.password);
//         setFieldValue("name", getCustomerById?.data?.name);
//         setFieldValue("phone_number", getCustomerById?.data?.phone);
//         setFieldValue("image", getCustomerById?.data?.profileImage);
//         // setEditableProfile(`${baseUrl}${userProfile?.profileImage}`)
//       } else if (checkApiName === "checkEmailPhoneAvailabilityForOperator") {

//         setFieldValue("email", getOperatorById?.data?.email);
//         setFieldValue("password", getOperatorById?.data?.password);
//         setFieldValue("name", getOperatorById?.data?.name);
//         setFieldValue("phone_number", getOperatorById?.data?.phone);
//         setFieldValue("image", getOperatorById?.data?.profileImage);
//         // setEditableProfile(`${baseUrl}${userProfile?.profileImage}`)

//       }

//     }
//   }, [getCustomerById, getOperatorById])
//   const sessionCustomerId = sessionStorage.getItem('sessionCustomerId');
//   const sessionoOeratorId = sessionStorage.getItem('sessionoOeratorId');



//   const dispatch = useDispatch();


//   const { editCustomerInfo } = useSelector(
//     (state) => state?.editCustomerInfo
//   );

//   // useEffect(()=>{
//   //   const data4 = {
//   //     data: {},
//   //     method: "get",
//   //     apiName: `getCustomerById/${sessionCustomerId}`
//   //   }
//   //   // dispatch(actions.GETOPERATORBYID(data4));
//   //   // const CustomerProfile = await dispatch(actions.GETCUSTOMERBYID(data4));
//   //   dispatch(actions.GETCUSTOMERBYID(data4));


//   // },[dispatch,editCustomerInfo])

//   const handleEditToggle = async () => {
//     if (checkApiName === "checkEmailPhoneAvailabilityForCustomer") {

//       const data4 = {
//         data: {},
//         method: "get",
//         apiName: `getCustomerById/${sessionCustomerId}`
//       }
//       // dispatch(actions.GETOPERATORBYID(data4));
//       // const CustomerProfile = await dispatch(actions.GETCUSTOMERBYID(data4));
//       dispatch(actions.GETCUSTOMERBYID(data4));
//     }
//     else if (checkApiName === "checkEmailPhoneAvailabilityForOperator") {
//       const data4 = {
//         data: {},
//         method: "get",
//         apiName: `getOperatorById/${sessionoOeratorId}`
//       }
//       // dispatch(actions.GETOPERATORBYID(data4));
//       // const CustomerProfile = await dispatch(actions.GETCUSTOMERBYID(data4));
//       dispatch(actions.GETOPERATORBYID(data4));
//     }

//     setIsEditMode(true);
//   };
//   const handleEditCancel = () => {
//     setIsEditMode(false);
//   };


//   const { ImageUploadPost } = useSelector(
//     (state) => state?.ImageUploadPost
//   );

//   const handleImageChange = async (e) => {
//     console.log("hiiiiiiii");

//     const file = e.target.files[0];
//     if (file) {
//       console.log("pravin");

//       console.log(file, "1111111111111")
//       const formData = new FormData();

//       // Append the file to the FormData object
//       formData.append("uploadImage", file);
//       console.log(formData, "formData")

//       const data = {
//         data: formData,
//         method: "post",
//         apiName: "uploadImage"
//       };
//       // console.log("Dispatching MOVIESTABLEGETALL action:", data);
//       const imageData = await dispatch(actions.IMAGEUPLOADPOST(data));

//       console.log(imageData.payload.data.imageUrl, "imageDataimageData")
//       setPreviewImage(imageData.payload.data.imageUrl)
//       // setPreviewImage(URL.createObjectURL(file));
//     }
//   };




//   const { checkEmailPhoneAvailabilityForCustomer } = useSelector(
//     (state) => state?.checkEmailPhoneAvailabilityForCustomer
//   );

//   const { checkEmailPhoneAvailabilityForOperator } = useSelector(
//     (state) => state?.checkEmailPhoneAvailabilityForOperator
//   );
//   const [isModalOpen, setModalOpen] = useState(false)
//   const [submittedValues, setSubmittedValues] = useState("")


//   const handleEditUser = async (values) => {
//     console.log("hiiiiiiiiiiiiiiiii");

//     console.log(values, "hiiiiiiiiiiiiiiiii");
//     // toast.success("Profile updated successfully");


//     if (checkApiName === "checkEmailPhoneAvailabilityForCustomer") {

//       const data4 = {
//         data: {

//           email: values.email,
//           phone: values.phone_number,

//         },
//         method: "post",
//         apiName: `checkEmailPhoneAvailabilityForCustomer/${sessionCustomerId}`,
//       };

//       // dispatch(actions.CUSTOMERSIGNUPPOST(data4));
//       // dispatch(setInitialStateOfCustomerSignupPost());

//       const EmailCheck = await dispatch(actions.CHECKEMAILPHONEAVAILABILITYFORCUSTOMER(data4));
//       console.log(EmailCheck.payload, "EmailCheck")
//       if (EmailCheck.payload.message === "Email and phone are available.") {
//         toast.success("OTP send succussfully")
//         setSubmittedValues(values)

//         const data3 = {
//           data: { email: values.email }, // Pass FormData object here
//           method: "post",
//           apiName: "sendOTP",
//         };

//         dispatch(actions.OTPSENDPOST(data3));
//         // setSubmittedValues(values)
//         setModalOpen(true)


//       }
//       else if (EmailCheck.payload.message === "Email already exists." || EmailCheck.payload.message === "Phone number already exists.") {
//         toast.error(EmailCheck.payload.message)


//       }
//     }
//     else if (checkApiName === "checkEmailPhoneAvailabilityForOperator") {
//       const data4 = {
//         data: {

//           email: values.email,
//           phone: values.phone_number,

//         },
//         method: "post",
//         apiName: `checkEmailPhoneAvailabilityForOperator/${sessionoOeratorId}`,
//       };

//       // dispatch(actions.CUSTOMERSIGNUPPOST(data4));
//       // dispatch(setInitialStateOfCustomerSignupPost());

//       const EmailCheck = await dispatch(actions.CHECKEMAILPHONEAVAILABILITYFOROPERATOR(data4));
//       console.log(EmailCheck.payload, "EmailCheck")
//       if (EmailCheck.payload.message === "Email and phone are available.") {
//         toast.success("OTP send succussfully")
//         setSubmittedValues(values)

//         const data3 = {
//           data: { email: values.email }, // Pass FormData object here
//           method: "post",
//           apiName: "sendOTP",
//         };

//         dispatch(actions.OTPSENDPOST(data3));
//         // setSubmittedValues(values)
//         setModalOpen(true)


//       }
//       else if (EmailCheck.payload.message === "Email already exists." || EmailCheck.payload.message === "Phone number already exists.") {
//         toast.error(EmailCheck.payload.message)


//       }
//     }


//     // setTimeout(() => setIsEditMode(false), 3000);
//   };
//   const handleCloseModal = () => {
//     setModalOpen(false)
//   }


//   return (
//     <>
//       <Dialog
//         open={open}
//         fullWidth={false}
//         // maxWidth="sm"
//         sx={{
//           "& .MuiDialog-paper": {
//             borderRadius: 2,
//             width: "450px",
//             background: "red",
//           },
//         }}
//       >
//         <Box sx={{ position: "relative" }}>
//           <IconButton
//             onClick={() => {
//               handleEditCancel();
//               onClose();
//             }}
//             sx={{ position: "absolute", top: 8, right: 8 }}
//           >
//             <CloseIcon />
//           </IconButton>
//           <DialogContent
//             sx={{
//               backgroundColor: "white", // Change this to your desired background color
//               padding: "20px", // Adjust padding if necessary
//             }}
//           >
//             <Typography
//               sx={{
//                 textAlign: "center",
//                 fontSize: "24px",
//                 fontWeight: "700",
//                 marginBottom: "20px",
//               }}
//             >
//               {isEditMode ? "Edit Profile" : "User Profile"}
//             </Typography>

//             {!isEditMode && (
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   gap: 2,
//                 }}
//               >
//                 <Avatar
//                   // src={previewImage}
//                   // src={`${baseUrl}${getCustomerById?.data?.profileImage}`}
//                   // src={userProfile?.profileImage}
//                   src={`${baseUrl}${userProfile?.profileImage}`}


//                   alt="Profile Image"
//                   sx={{ width: 70, height: 70 }}
//                 />
//                 {/* {isEditMode && (
//                 <Button
//                   variant="contained"
//                   component="label"
//                   sx={{ background: "var(--tablehead-bgcolor)" }}
//                 >
//                   Change Profile Image
//                   <input
//                     type="file"
//                     hidden
//                     accept="image/*"
//                     onChange={handleImageChange}
//                   />
//                 </Button> */}

//               </Box>)}
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 flexDirection: "column",
//                 gap: 2,
//                 mt: 2,
//               }}
//             >
//               {isEditMode ? (
//                 <Box
//                   sx={{
//                     width: "100%",
//                   }}
//                 >
//                   <Formik
//                     initialValues={{
//                       email: "",
//                       password: "",
//                       name: "",
//                       phone_number: "",
//                       image: ""
//                     }}
//                     validationSchema={Yup.object({
//                       email: Yup.string()
//                         .email("Invalid email format")
//                         .matches(
//                           /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
//                           "Must be a valid Gmail address"
//                         )
//                         .required("Email Required"),
//                       password: Yup.string().required("Password Required"),
//                       phone_number: Yup.string()
//                         .required("phone number Required")
//                         .matches(
//                           /^[0-9]{10}$/,
//                           "Phone number must be between 10 digits"
//                         ),
//                       name: Yup.string().required("name Required"),
//                       // image: Yup.string().required("name Required"),

//                     })}
//                     onSubmit={handleEditUser}
//                     innerRef={formikRef}
//                   >
//                     {({ errors, touched, handleChange, setFieldValue }) => (
//                       <Form autocomplete="off">
//                         <Box
//                           sx={{
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                             gap: 2,
//                           }}
//                         >
//                           <Avatar
//                             // src={previewImage}
//                             // src={`${baseUrl}${userProfile?.profileImage}`}
//                             src={`${baseUrl}${previewImage}`}
//                             // src={userProfile?.profileImage}
//                             alt="Profile Image"
//                             sx={{ width: 70, height: 70 }}
//                           />
//                           {isEditMode && (
//                             <Button
//                               variant="contained"
//                               component="label"
//                               sx={{ background: "var(--tablehead-bgcolor)" }}
//                             >
//                               Change Profile Image
//                               <input
//                                 type="file"
//                                 hidden
//                                 name="image"
//                                 accept="image/*"
//                                 onChange={handleImageChange}
//                               />
//                             </Button>
//                           )}
//                         </Box>

//                         <Box>
//                           <CustomInputLogin
//                             name="name"
//                             label="Name"
//                             custPlaceholder="Enter name"
//                             inputType="text"
//                           />

//                           <CustomInputLogin
//                             name="email"
//                             label="Email"
//                             custPlaceholder="Enter email"
//                             inputType="email"
//                           />
//                           <CustomInputLogin
//                             name="phone_number"
//                             label="Phone Number"
//                             custPlaceholder="Enter phone number"
//                             inputType="number"
//                           />
//                           <CustomInputLogin
//                             name="password"
//                             label="Password"
//                             custPlaceholder="Enter password"
//                             inputType="number"
//                           />
//                           <Box
//                             sx={{
//                               width: "95%",
//                               display: "flex",
//                               justifyContent: "space-between",
//                             }}
//                           >
//                             <Button
//                               //   onClick={handleSaveProfile}
//                               variant="contained"
//                               type="submit"
//                               color="primary"
//                               sx={{
//                                 fontWeight: "700",
//                                 background: "var(--button-bgcolor)",
//                               }}
//                             >
//                               Save
//                             </Button>
//                             <Button
//                               onClick={handleEditCancel}
//                               variant="contained"
//                               // color="secondary"
//                               sx={{
//                                 fontWeight: "700",
//                                 background: "var(--tablesearch-bgcolor)",
//                                 color: "black",
//                               }}
//                             >
//                               Cancel
//                             </Button>
//                           </Box>
//                         </Box>
//                         <ToastContainer
//                           position="top-right" // or "top-center", "bottom-left", etc.
//                           autoClose={1500} // Auto close duration in ms
//                           hideProgressBar={false} // Hide or show progress bar
//                           newestOnTop={false}
//                           closeOnClick
//                           rtl={false}
//                           pauseOnFocusLoss
//                           draggable
//                           pauseOnHover
//                           theme="dark"
//                         />
//                         <OtpSendForAll
//                         updateApiName={updateApiName}
//                           open={isModalOpen}
//                           onClose={handleCloseModal}
//                           onSave={handleEditUser}
//                           submittedValues={submittedValues}
//                           previewImage={previewImage}
//                           setIsEditMode={setIsEditMode}

//                         // Pass the selected heading to the modal
//                         />
//                       </Form>
//                     )}
//                   </Formik>
//                 </Box>
//               ) : (
//                 <TableContainer>
//                   <Table>
//                     <TableBody>
//                       <TableRow>
//                         <TableCell
//                           sx={{
//                             fontWeight: "900",
//                             width: "50%",
//                             paddingLeft: "30%",
//                             fontSize: "17px",
//                             // textAlign: "end",
//                           }}
//                         >
//                           Name
//                         </TableCell>
//                         <TableCell sx={{ width: "50%", fontSize: "14px" }}>
//                           {userProfile?.name || "N/A"}
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell
//                           sx={{
//                             fontWeight: "900",
//                             width: "50%",
//                             paddingLeft: "30%",
//                             fontSize: "17px",
//                             // textAlign: "end",
//                           }}
//                         >
//                           Email
//                         </TableCell>
//                         <TableCell sx={{ width: "50%", fontSize: "14px" }}>
//                           {userProfile?.email || "N/A"}
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell
//                           sx={{
//                             fontWeight: "900",
//                             width: "50%",
//                             paddingLeft: "30%",

//                             fontSize: "17px",
//                             // textAlign: "end",
//                           }}
//                         >
//                           Phone
//                         </TableCell>
//                         <TableCell sx={{ width: "50%", fontSize: "14px" }}>
//                           {userProfile?.phone || "N/A"}
//                         </TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               )}
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 marginTop: 3,
//                 gap: 2,
//               }}
//             >
//               {isEditMode ? (
//                 <></>
//               ) : (
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     width: "100%",
//                     // marginTop: 3,
//                     gap: 2,
//                   }}
//                 >
//                   <Button
//                     onClick={handleLogout}
//                     variant="contained"
//                     color="error"
//                     sx={{ fontWeight: "700" }}
//                   >
//                     Logout
//                   </Button>
//                   {edit &&
//                   <Button
//                     onClick={handleEditToggle}
//                     variant="contained"
//                     // color="primary"
//                     sx={{
//                       fontWeight: "700",
//                       background: "var(--tablehead-bgcolor)",
//                     }}
//                   >
//                     Edit
//                   </Button>}
//                 </Box>
//               )}
//             </Box>
//           </DialogContent>
//         </Box>

//       </Dialog>
//     </>
//   );
// };

// export default ProfilePageModel;

