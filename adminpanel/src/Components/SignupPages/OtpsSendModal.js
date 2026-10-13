
// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //     Dialog,
// // //     DialogTitle,
// // //     DialogContent,
// // //     DialogActions,
// // //     IconButton,
// // //     Button,
// // //     Box,
// // //     Typography,
// // // } from '@mui/material';
// // // import { Close as CloseIcon, Mic as MicIcon } from '@mui/icons-material';
// // // import { Formik, Form } from 'formik';
// // // import CustomInput from '../../Components/CustomInput2/CustomInput';
// // // import { BsFillFuelPumpFill } from "react-icons/bs";
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import actions from '../../ReduxStore/actions';
// // // import { setInitialStateOfCustomerSignupPost } from '../../ReduxStore/Slices/LoginSignup/CustomerSignupPost';


// // // const OtpsSendModal = ({ open, onClose, onSave, heading, submittedValues, previewImage }) => {
// // //     // State to hold services and quantity values
// // //     const [posCalculateData, setPosCalculateData] = useState('');

// // //     console.log(posCalculateData, "services")
// // //     // console.log(quantity,"quantity")
// // //     const dispatch = useDispatch();


// // //     // Update services whenever the heading prop changes
// // //     const { CustomerSignupPost } = useSelector(
// // //         (state) => state?.CustomerSignupPost
// // //     );
// // //     console.log(CustomerSignupPost, "CustomerSignupPostCustomerSignupPost")

// // //     const { OtpSendPost } = useSelector(
// // //         (state) => state?.OtpSendPost
// // //     );

// // //     // const [submittedValues, setSubmittedValues] = useState("")
// // //     const handleverifyotp = (values) => {
// // //         const data3 = {
// // //             data: {
// // //                 name: submittedValues.customer_name,
// // //                 email: submittedValues.email,
// // //                 phone: submittedValues.mobile_number,
// // //                 password: submittedValues.customer_pin,
// // //                 profileImage: previewImage,
// // //                 otp: values.send_otp
// // //             }, // Pass FormData object here
// // //             method: "post",
// // //             apiName: "register/customer",
// // //         };

// // //         dispatch(actions.CUSTOMERSIGNUPPOST(data3));
// // //         dispatch(setInitialStateOfCustomerSignupPost())
// // //         // setSubmittedValues(values)

// // //     }




// // //     return (
// // //         <>
// // //             <Dialog
// // //                 open={open}
// // //                 onClose={onClose}
// // //                 fullWidth
// // //                 maxWidth="md"
// // //                 sx={{ '& .MuiDialog-paper': { borderRadius: 2, width: "300px" } }}
// // //             >
// // //                 <Box sx={{ position: 'relative' }}>
// // //                     <IconButton
// // //                         aria-label="Close"
// // //                         onClick={onClose}
// // //                         sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
// // //                     >
// // //                         <CloseIcon />
// // //                     </IconButton>
// // //                     <DialogTitle sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
// // //                         <Box
// // //                             sx={{
// // //                                 display: 'flex',
// // //                                 alignItems: 'center',
// // //                                 justifyContent: 'center',
// // //                                 width: 40,
// // //                                 height: 40,
// // //                                 borderRadius: '50%',
// // //                                 backgroundColor: 'var(--button-bgcolor)',
// // //                                 // color: 'rgb(136 84 192)',
// // //                                 color: "white",

// // //                                 marginRight: 1,
// // //                             }}
// // //                         >
// // //                             <BsFillFuelPumpFill />
// // //                         </Box>
// // //                         <Box>
// // //                             <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
// // //                                 Otp Verify
// // //                             </Typography>
// // //                         </Box>
// // //                     </DialogTitle>

// // //                     <Formik
// // //                         initialValues={{ send_otp: "" }}// Initial value for quantity
// // //                         enableReinitialize // This allows Formik to update when initialValues change
// // //                         onSubmit={(values, { resetForm }) => {
// // //                             // Update quantity state
// // //                             handleverifyotp(values)
// // //                             resetForm()
// // //                             // onClose();
// // //                         }}
// // //                     >
// // //                         {({ values, handleChange, handleSubmit }) => (
// // //                             <Form  >
// // //                                 <DialogContent dividers sx={{ paddingX: 4 }}>
// // //                                     <Box
// // //                                         sx={{
// // //                                             border: '1px dashed',
// // //                                             borderColor: 'divider',
// // //                                             height: 200,
// // //                                             display: 'flex',
// // //                                             flexDirection: 'column',
// // //                                             justifyContent: 'center',
// // //                                             alignItems: 'center',
// // //                                             backgroundColor: 'rgb(249 249 249)',
// // //                                             position: 'relative',
// // //                                             padding: 2,
// // //                                         }}
// // //                                     >
// // //                                         <CustomInput
// // //                                             label="Enter OTP:"
// // //                                             name="send_otp"
// // //                                             inputType="number"
// // //                                             custPlaceholder="Enter a otp"
// // //                                         // value={values[`${heading}_Quantity`]}
// // //                                         // onChange={handleChange}
// // //                                         // step="0.01"  // Allow decimal values
// // //                                         />
// // //                                         {CustomerSignupPost?.message === "Invalid OTP" && (
// // //                                             <p style={{ color: "red" }}>invalid otp!!</p>)}
// // //                                     </Box>
// // //                                 </DialogContent>
// // //                                 <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
// // //                                     <Button
// // //                                         onClick={onClose}
// // //                                         variant="text"
// // //                                         sx={{
// // //                                             color: "black",
// // //                                             cursor: "pointer",
// // //                                             background: "var(--cancel-bgcolor)",
// // //                                             '&:hover': {
// // //                                                 color: "black",
// // //                                                 cursor: "pointer",
// // //                                                 background: "var(--cancel-bgcolor)",
// // //                                             },
// // //                                         }}
// // //                                     >
// // //                                         Cancel
// // //                                     </Button>
// // //                                     <Button
// // //                                         type="submit"
// // //                                         variant="contained"
// // //                                         sx={{
// // //                                             // background: "rgb(136 84 192)", color: "white" 
// // //                                             color: "var(--button-color)",
// // //                                             cursor: "pointer",
// // //                                             background: "var(--button-bgcolor)",
// // //                                         }}
// // //                                     >
// // //                                         Save
// // //                                     </Button>
// // //                                 </DialogActions>
// // //                             </Form>
// // //                         )}
// // //                     </Formik>
// // //                 </Box>
// // //             </Dialog>
// // //         </>
// // //     );
// // // };

// // // export default OtpsSendModal;






// // import React, { useState, useEffect } from 'react';
// // import {
// //     Dialog,
// //     DialogTitle,
// //     DialogContent,
// //     DialogActions,
// //     IconButton,
// //     Button,
// //     Box,
// //     Typography,
// //     TextField,
// //     Container,
// // } from '@mui/material';
// // import { Close as CloseIcon, Mic as MicIcon } from '@mui/icons-material';
// // import { Formik, Form } from 'formik';
// // import CustomInput from '../../Components/CustomInput2/CustomInput';
// // import { BsFillFuelPumpFill, BsShieldFillExclamation } from "react-icons/bs";
// // import { useDispatch, useSelector } from 'react-redux';
// // import actions from '../../ReduxStore/actions';
// // import { setInitialStateOfCustomerSignupPost } from '../../ReduxStore/Slices/LoginSignup/CustomerSignupPost';


// // const OtpsSendModal = ({ open, onClose, onSave, heading, submittedValues, previewImage }) => {
// //     // State to hold services and quantity values
// //     const [posCalculateData, setPosCalculateData] = useState('');

// //     console.log(posCalculateData, "services")
// //     // console.log(quantity,"quantity")
// //     const dispatch = useDispatch();


// //     // Update services whenever the heading prop changes
// //     const { CustomerSignupPost } = useSelector(
// //         (state) => state?.CustomerSignupPost
// //     );
// //     console.log(CustomerSignupPost, "CustomerSignupPostCustomerSignupPost")

// //     const { OtpSendPost } = useSelector(
// //         (state) => state?.OtpSendPost
// //     );

// //     // const [submittedValues, setSubmittedValues] = useState("")
// //     const handleverifyotp = (values) => {
// //         const data3 = {
// //             data: {
// //                 name: submittedValues.customer_name,
// //                 email: submittedValues.email,
// //                 phone: submittedValues.mobile_number,
// //                 password: submittedValues.customer_pin,
// //                 profileImage: previewImage,
// //                 otp: values.send_otp
// //             }, // Pass FormData object here
// //             method: "post",
// //             apiName: "register/customer",
// //         };

// //         dispatch(actions.CUSTOMERSIGNUPPOST(data3));
// //         dispatch(setInitialStateOfCustomerSignupPost())
// //         // setSubmittedValues(values)

// //     }




// //     return (
// //         <>
// //             <Dialog
// //                 open={open}
// //                 onClose={onClose}
// //                 fullWidth
// //                 maxWidth="md"
// //                 sx={{ '& .MuiDialog-paper': { borderRadius: 2, width: "300px" } }}
// //             >
// //                 <Container
// //                     maxWidth="xs"
// //                     sx={{
// //                         display: "flex",
// //                         flexDirection: "column",
// //                         alignItems: "center",
// //                         padding: 3,
// //                         border: "1px solid #ddd",
// //                         borderRadius: "8px",
// //                     }}
// //                 >
// //                     <header>
// //                         <BsShieldFillExclamation fontSize="large" color="primary" />
// //                     </header>
// //                     <Typography variant="h5" gutterBottom>
// //                         Enter OTP Code
// //                     </Typography>
// //                     <Box component="form" sx={{ mt: 2 }}>
// //                         <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
// //                             <TextField
// //                                 type="number"
// //                                 inputProps={{ maxLength: 1 }}
// //                                 sx={{ width: "3rem", textAlign: "center" }}
// //                             />
// //                             <TextField
// //                                 type="number"
// //                                 inputProps={{ maxLength: 1 }}
// //                                 sx={{ width: "3rem", textAlign: "center" }}
// //                             />
// //                             <TextField
// //                                 type="number"
// //                                 inputProps={{ maxLength: 1 }}
// //                                 sx={{ width: "3rem", textAlign: "center" }}
// //                             />
// //                             <TextField
// //                                 type="number"
// //                                 inputProps={{ maxLength: 1 }}
// //                                 sx={{ width: "3rem", textAlign: "center" }}
// //                             />
// //                         </Box>
// //                         <Button
// //                             variant="contained"
// //                             color="primary"
// //                             fullWidth
// //                             sx={{ mt: 2 }}
// //                         >
// //                             Verify OTP
// //                         </Button>
// //                     </Box>
// //                 </Container>
// //             </Dialog>
// //         </>
// //     );
// // };

// // export default OtpsSendModal;


// import React, { useState } from 'react';
// import {
//     Dialog,
//     Typography,
//     TextField,
//     Container,
//     Button,
//     Box,
// } from '@mui/material';
// import { BsShieldFillExclamation } from "react-icons/bs";
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
// import actions from '../../ReduxStore/actions';
// import { setInitialStateOfCustomerSignupPost } from '../../ReduxStore/Slices/LoginSignup/CustomerSignupPost';

// const OtpSchema = Yup.object().shape({
//     otp1: Yup.string().required("Required").length(1),
//     otp2: Yup.string().required("Required").length(1),
//     otp3: Yup.string().required("Required").length(1),
//     otp4: Yup.string().required("Required").length(1),
// });

// const OtpsSendModal = ({ open, onClose, onSave, heading, submittedValues, previewImage }) => {
//     const dispatch = useDispatch();
//     const { CustomerSignupPost } = useSelector((state) => state?.CustomerSignupPost);

//     const handleverifyotp = (values) => {
//         const otpCode = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;
//         const data3 = {
//             data: {
//                 name: submittedValues.customer_name,
//                 email: submittedValues.email,
//                 phone: submittedValues.mobile_number,
//                 password: submittedValues.customer_pin,
//                 profileImage: previewImage,
//                 otp: otpCode,
//             },
//             method: "post",
//             apiName: "register/customer",
//         };

//         dispatch(actions.CUSTOMERSIGNUPPOST(data3));
//         dispatch(setInitialStateOfCustomerSignupPost());
//     };

//     return (
//         <Dialog
//             open={open}
//             onClose={onClose}
//             fullWidth
//             maxWidth="xs"
//             sx={{ '& .MuiDialog-paper': { borderRadius: 2, width: "300px" } }}
//         >
//             <Container
//                 sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     padding: 3,
//                     border: "1px solid #ddd",
//                     borderRadius: "8px",
//                 }}
//             >
//                 <header>
//                     <BsShieldFillExclamation fontSize="large" color="primary" />
//                 </header>
//                 <Typography variant="h5" gutterBottom>
//                     Enter OTP Code
//                 </Typography>
//                 <Formik
//                     initialValues={{ otp1: '', otp2: '', otp3: '', otp4: '' }}
//                     validationSchema={OtpSchema}
//                     onSubmit={handleverifyotp}
//                 >
//                     {({ errors, touched }) => (
//                         <Form>
//                             <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
//                                 {['otp1', 'otp2', 'otp3', 'otp4'].map((field, index) => (
//                                     <Field
//                                         as={TextField}
//                                         key={field}
//                                         name={field}
//                                         type="text"
//                                         inputProps={{ maxLength: 1 }}
//                                         sx={{ width: "3rem", textAlign: "center" }}
//                                         error={touched[field] && !!errors[field]}
//                                         helperText={touched[field] && errors[field]}
//                                     />
//                                 ))}
//                             </Box>
//                             <Button
//                                 type="submit"
//                                 variant="contained"
//                                 color="primary"
//                                 fullWidth
//                                 sx={{ mt: 2 }}
//                             >
//                                 Verify OTP
//                             </Button>
//                         </Form>
//                     )}
//                 </Formik>
//             </Container>
//         </Dialog>
//     );
// };

// export default OtpsSendModal;



import React, { useRef } from 'react';
import {
    Dialog,
    Typography,
    TextField,
    Container,
    Button,
    Box,
} from '@mui/material';
import { BsShieldFillExclamation } from "react-icons/bs";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../ReduxStore/actions';
import { setInitialStateOfCustomerSignupPost } from '../../ReduxStore/Slices/LoginSignup/CustomerSignupPost';
import { BiSolidCheckShield } from "react-icons/bi";
import "./OtpsendModal.css"
import { toast, ToastContainer } from 'react-toastify';


// const OtpSchema = Yup.object().shape({
//     otp1: Yup.string().required("Required").length(1),
//     otp2: Yup.string().required("Required").length(1),
//     otp3: Yup.string().required("Required").length(1),
//     otp4: Yup.string().required("Required").length(1),
//     otp5: Yup.string().required("Required").length(1),
//     otp6: Yup.string().required("Required").length(1),
// });

const OtpsSendModal = ({ open, onClose, onSave, heading, submittedValues, previewImage, onToggleForm, apiName }) => {
    const dispatch = useDispatch();
    // const inputRefs = Array.from({ length: 6 }, () => {useRef(null)});
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const { CustomerSignupPost } = useSelector(
        (state) => state?.CustomerSignupPost
    );

    const { ImageUploadPost } = useSelector(
        (state) => state?.ImageUploadPost
    );


    const handleverifyotp = async (values) => {
        console.log(ImageUploadPost, "image12212112")

        const otpCode = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;
        const data3 = {
            data: {
                name: submittedValues.customer_name,
                email: submittedValues.email,
                phone: submittedValues.mobile_number,
                password: submittedValues.customer_pin,
                profileImage: ImageUploadPost?.data?.imageUrl,
                otp: otpCode,
            },
            method: "post",
            apiName: 'register/customer',
        };

        // dispatch(actions.CUSTOMERSIGNUPPOST(data3));
        const EmailOtpVerify = await dispatch(actions.CUSTOMERSIGNUPPOST(data3));
        if (EmailOtpVerify.payload.message === "Invalid OTP") {
            console.log("valllass")
            toast.error(EmailOtpVerify.payload.message)
        }
        else {
            toast.success("Otp verify successfully")
            setTimeout(() => onToggleForm(), 1500)

        }

        // dispatch(setInitialStateOfCustomerSignupPost());

    };

    const handleInputChange = (e, index, setFieldValue) => {
        const { value } = e.target;
        if (value.length === 1 && index < 3) {
            inputRefs[index + 1].current.focus(); // Move to the next input box
        } else if (value === "" && index > 0) {
            inputRefs[index - 1].current.focus(); // Move to the previous box on backspace
        }
        setFieldValue(`otp${index + 1}`, value);
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="xs"
            sx={{ '& .MuiDialog-paper': { borderRadius: '20px', width: "320px" } }}
        >
            <Container
                className='container'
                sx={{

                }}
            >
                <header className='icon'>
                    <BiSolidCheckShield fontSize="large" color="primary" />
                </header>
                <Typography variant="h6" gutterBottom sx={{
                    fontSize: '1.25rem',
                    color: 'rgb(51, 51, 51)',
                    fontWeight: '600'
                }}>
                    Enter OTP Code
                </Typography>
                <Formik
                    initialValues={{
                        otp1: '',
                        otp2: '',
                        otp3: '',
                        otp4: '',
                        otp5: '',
                        otp6: '',
                    }}
                    // validationSchema={OtpSchema}
                    onSubmit={handleverifyotp}
                >
                    {({ errors, touched, setFieldValue }) => (
                        <Form>
                            <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <Field
                                        as={TextField}
                                        key={index}
                                        name={`otp${index + 1}`}
                                        type="text"  // Change type to text to remove arrows
                                        inputMode="numeric" // Ensures only numeric keyboard on mobile
                                        pattern="[0-9]*"
                                        inputProps={{ maxLength: 1 }}
                                        sx={{ width: "3rem", textAlign: "center" }}
                                        error={touched[`otp${index + 1}`] && !!errors[`otp${index + 1}`]}
                                        helperText={touched[`otp${index + 1}`] && errors[`otp${index + 1}`]}
                                        inputRef={inputRefs[index]}
                                        onChange={(e) => handleInputChange(e, index, setFieldValue)}
                                    />
                                ))}
                            </Box>

                            <Button
                                type="submit"
                                variant="contained"
                                // color="primary"
                                fullWidth
                                sx={{
                                    mt: 2, background: "var(--button-bgcolor)", fontWeight: "600"
                                }}
                            >
                                {/* <div className="spinner-container">
                                    <CircularProgress size={24} /> 
                                </div> */}

                                Verify OTP
                            </Button>
                        </Form>
                    )}
                </Formik>
                {/* <ToastContainer
                    position="top-right" // or "top-center", "bottom-left", etc.
                    autoClose={1500} // Auto close duration in ms
                    hideProgressBar={false} // Hide or show progress bar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                /> */}
            </Container>
        </Dialog >
    );
};

export default OtpsSendModal;
