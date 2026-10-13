


// import React, { useRef } from 'react';
// import {
//     Dialog,
//     Typography,
//     TextField,
//     Container,
//     Button,
//     Box,
// } from '@mui/material';
// // import { BsShieldFillExclamation } from "react-icons/bs";
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
// import actions from '../../ReduxStore/actions';
// import { setInitialStateOfCustomerSignupPost } from '../../ReduxStore/Slices/LoginSignup/CustomerSignupPost';
// import { BiSolidCheckShield } from "react-icons/bi";
// import "./OtpsendModal.css"
// import { toast, ToastContainer } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';


// // const OtpSchema = Yup.object().shape({
// //     otp1: Yup.string().required("Required").length(1),
// //     otp2: Yup.string().required("Required").length(1),
// //     otp3: Yup.string().required("Required").length(1),
// //     otp4: Yup.string().required("Required").length(1),
// //     otp5: Yup.string().required("Required").length(1),
// //     otp6: Yup.string().required("Required").length(1),
// // });

// const OtpSendForAll = ({ open, onClose, setIsEditMode, onSave, heading, submittedValues, updateApiName, previewImage, onToggleForm, apiName }) => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate()
//     // const inputRefs = Array.from({ length: 6 }, () => {useRef(null)});
//     const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
//     const { CustomerSignupPost } = useSelector(
//         (state) => state?.CustomerSignupPost
//     );

//     const { ImageUploadPost } = useSelector(
//         (state) => state?.ImageUploadPost
//     );

//     const { getCustomerById } = useSelector(
//         (state) => state?.getCustomerById
//     );
//     console.log(getCustomerById, "getCustomerByIdgetCustomerByIdgetCustomerById")
//     console.log(submittedValues, "submittedValues.profileImage")
//     console.log(getCustomerById?.data?.profileImage, "submittedValues.profileImage1111")

//     const { editCustomerInfo } = useSelector(
//         (state) => state?.editCustomerInfo
//     );


//     const { editOperatorInfo } = useSelector(
//         (state) => state?.editOperatorInfo
//     );

//     const { getOperatorById } = useSelector(
//         (state) => state?.getOperatorById
//       );

//     const handleverifyotp = async (values) => {
//         console.log(ImageUploadPost, "image12212112")

//         const otpCode = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;

//         if (updateApiName === 'editCustomerInfo') {
//             const data3 = {
//                 data: {
//                     email: getCustomerById?.data?.email,

//                     newName: submittedValues.name === getCustomerById?.data?.name ? "" : submittedValues.name,
//                     newEmail: submittedValues.email === getCustomerById?.data?.email ? "" : submittedValues.email,
//                     newPhone: submittedValues.phone_number === getCustomerById?.data?.phone ? "" : submittedValues.phone_number,

//                     // newPhone: submittedValues.phone===getCustomerById?.data?.phone ? "":submittedValues.phone ,
//                     newPassword: submittedValues.password === getCustomerById?.data?.password ? "" : submittedValues.password,
//                     // newProfileImage:"uploads/images/uploadImage-1731300781513.jpg",
//                     newProfileImage: previewImage === getCustomerById?.data?.profileImage ? "" : previewImage,
//                     // email: submittedValues.email===getCustomerById?.data?.email ? submittedValues.email : getCustomerById?.data?.email,

//                     otp: otpCode,
//                 },
//                 method: "put",
//                 apiName: `editCustomerInfo/${getCustomerById?.data?.customer_id}`,
//             };


//             // dispatch(actions.CUSTOMERSIGNUPPOST(data3));
//             const EmailOtpVerify = await dispatch(actions.EDITCUSTOMERINFO(data3));
//             if (EmailOtpVerify.payload.message === "Invalid OTP") {
//                 console.log("valllass")
//                 toast.error(EmailOtpVerify.payload.message)


//             }
//             else if (EmailOtpVerify.payload.message === "Customer information updated successfully.") {
//                 toast.success(EmailOtpVerify.payload.message)
//                 // setTimeout()=>setIsEditMode(false)
//                 setTimeout(() => setIsEditMode(false), 2000);



//             }
//         } else if (updateApiName === 'editOperatorInfo') {

//             const data3 = {
//                 data: {
//                     email: getOperatorById?.data?.email,
    
//                     newName: submittedValues.name === getOperatorById?.data?.name ? "" : submittedValues.name,
//                     newEmail: submittedValues.email === getOperatorById?.data?.email ? "" : submittedValues.email,
//                     newPhone: submittedValues.phone_number === getOperatorById?.data?.phone ? "" : submittedValues.phone_number,
    
//                     // newPhone: submittedValues.phone===getOperatorById?.data?.phone ? "":submittedValues.phone ,
//                     newPassword: submittedValues.password === getOperatorById?.data?.password ? "" : submittedValues.password,
//                     // newProfileImage:"uploads/images/uploadImage-1731300781513.jpg",
//                     newProfileImage: previewImage === getOperatorById?.data?.profileImage ? "" : previewImage,
//                     // email: submittedValues.email===getOperatorById?.data?.email ? submittedValues.email : getOperatorById?.data?.email,
    
//                     otp: otpCode,
//                 },
//                 method: "put",
//                 apiName: `editOperatorInfo/${getOperatorById?.data?.operator_id}`,
//             };
    
    
//             // dispatch(actions.CUSTOMERSIGNUPPOST(data3));
//             const EmailOtpVerify = await dispatch(actions.EDITOPERATORINFO(data3));
//             console.log(EmailOtpVerify.payload,"emailcheckotp")
//             if (EmailOtpVerify.payload.message === "Invalid OTP") {
//                 console.log("valllass")
//                 toast.error(EmailOtpVerify.payload.message)
    
    
//             }
//             else if (EmailOtpVerify.payload.message === "Operator information updated successfully.") {
//                 toast.success(EmailOtpVerify.payload.message)
//                 // setTimeout()=>setIsEditMode(false)
//                 setTimeout(() => setIsEditMode(false), 2000);
    
    
    
//             }

//         }

//         // dispatch(setInitialStateOfCustomerSignupPost());

//     };

//     const handleInputChange = (e, index, setFieldValue) => {
//         const { value } = e.target;
//         if (value.length === 1 && index < 3) {
//             inputRefs[index + 1].current.focus(); // Move to the next input box
//         } else if (value === "" && index > 0) {
//             inputRefs[index - 1].current.focus(); // Move to the previous box on backspace
//         }
//         setFieldValue(`otp${index + 1}`, value);
//     };

//     return (
//         <Dialog
//             open={open}
//             onClose={onClose}
//             fullWidth
//             maxWidth="xs"
//             sx={{ '& .MuiDialog-paper': { borderRadius: '20px', width: "320px" } }}
//         >
//             <Container
//                 className='container'
//                 sx={{

//                 }}
//             >
//                 <header className='icon'>
//                     <BiSolidCheckShield fontSize="large" color="primary" />
//                 </header>
//                 <Typography variant="h6" gutterBottom sx={{
//                     fontSize: '1.25rem',
//                     color: 'rgb(51, 51, 51)',
//                     fontWeight: '600'
//                 }}>
//                     Enter OTP Code
//                 </Typography>
//                 <Formik
//                     initialValues={{
//                         otp1: '',
//                         otp2: '',
//                         otp3: '',
//                         otp4: '',
//                         otp5: '',
//                         otp6: '',
//                     }}
//                     // validationSchema={OtpSchema}
//                     onSubmit={handleverifyotp}
//                 >
//                     {({ errors, touched, setFieldValue }) => (
//                         <Form>
//                             <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
//                                 {Array.from({ length: 4 }).map((_, index) => (
//                                     <Field
//                                         as={TextField}
//                                         key={index}
//                                         name={`otp${index + 1}`}
//                                         type="text"  // Change type to text to remove arrows
//                                         inputMode="numeric" // Ensures only numeric keyboard on mobile
//                                         pattern="[0-9]*"
//                                         inputProps={{ maxLength: 1 }}
//                                         sx={{ width: "3rem", textAlign: "center" }}
//                                         error={touched[`otp${index + 1}`] && !!errors[`otp${index + 1}`]}
//                                         helperText={touched[`otp${index + 1}`] && errors[`otp${index + 1}`]}
//                                         inputRef={inputRefs[index]}
//                                         onChange={(e) => handleInputChange(e, index, setFieldValue)}
//                                     />
//                                 ))}
//                             </Box>

//                             <Button
//                                 type="submit"
//                                 variant="contained"
//                                 // color="primary"
//                                 fullWidth
//                                 sx={{
//                                     mt: 2, background: "var(--button-bgcolor)", fontWeight: "600"
//                                 }}
//                             >
//                                 {/* <div className="spinner-container">
//                                     <CircularProgress size={24} /> 
//                                 </div> */}

//                                 Verify OTP
//                             </Button>
//                         </Form>
//                     )}
//                 </Formik>
//                 {/* <ToastContainer
//                     position="top-right" // or "top-center", "bottom-left", etc.
//                     autoClose={1500} // Auto close duration in ms
//                     hideProgressBar={false} // Hide or show progress bar
//                     newestOnTop={false}
//                     closeOnClick
//                     rtl={false}
//                     pauseOnFocusLoss
//                     draggable
//                     pauseOnHover
//                     theme="dark"
//                 /> */}
//             </Container>
//         </Dialog >
//     );
// };

// export default OtpSendForAll;
