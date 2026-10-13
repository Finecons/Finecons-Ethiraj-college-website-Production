
import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Grid,
    Step,
    StepLabel,
    Stepper,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import login_bgImage from "../../Assets/login_bgImage.png";
import logo_login_image from "../../Assets/Login Logo.png";
import CustomInputLogin from '../CustomInput/CustomInput';
import CustoDropDownRegister from '../CustomDropDown/CustoDropDownRegister';
import ProfileUpload from '../ProfileUpload/ProfileUpload';
import { RiDeleteBin2Line } from "react-icons/ri";
import { AiOutlineProfile } from "react-icons/ai";
import actions from "../../ReduxStore/actions/index";
import { useDispatch, useSelector } from "react-redux";




// import React from 'react';
import {
    // Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Paper,
    LinearProgress,
    IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomEmailVerifyInput from '../CustomEmailVerifyInput/CustomEmailVerifyInput';
import CustomMobileNumber from '../CustomMobileNumber/CustomMobileNumber';
import { FiUpload } from "react-icons/fi";
import { HiDocumentArrowUp } from "react-icons/hi2";
import CustomDropdownDocumentType from '../CustomDropDown/CustomDropdownDocumentType';
import TermsandConditions from '../TermsandConditions/TermsandConditions';
import { useNavigate } from 'react-router-dom';
import CustImageUploadInput from '../ProfileUpload/ProfileUpload';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomPhoneVerifyInput from '../CustomMobileNumber/CustomMobileNumber';
import CloseIcon from '@mui/icons-material/Close';

// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// Styled Stepper with dashed lines
const DashedStepper = styled(Stepper)(({ theme }) => ({
    '& .MuiStepConnector-line': {
        borderStyle: 'dashed',
    },
    '& .MuiStepConnector-root': {
        minHeight: 1,
    },
}));




const validationSchemaStep0 = Yup.object({
    first_name: Yup.string().required('First Name is required'),
    type: Yup.string().required('Type is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required')

    ,
    isVerified: Yup.boolean()
        .oneOf([true], "Please verify your OTP before submitting"),
    phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
        .required('Phone number is required')
    ,
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

const validationSchemaStep1 = Yup.object({
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    zip_code: Yup.string().required('Zipcode is required'),
    address_1: Yup.string().required('Address Line 1 is required'),
    address_2: Yup.string().required('Address Line 2 is required'),
});

// const validationSchemaStep2 = Yup.object({
//     documentType: Yup.string().required('Document Type is required'),
//     imageupload: Yup.string().required('Image upload is required'), // Adjust as needed for file upload
// });

const RegistrationComponent = () => {
    const [emailInput, setEmailInput] = useState(""); // Track email input


    const [phoneInput, setPhoneInput] = useState(""); // Track phone number input

    const [checked, setChecked] = useState(false);

    const handleCheckChange = (isChecked) => {
        setChecked(isChecked);
    };

    // const handleGoRegisterComplete = () => {
    //     console.log('Form Submitted');
    // };

    // const [selectedDocumentType, setSelectedDocumentType] = React.useState('');
    // const [uploadedFiles, setUploadedFiles] = React.useState([]);
    // const [documentTypeDropData, setDocumentTypeDropData] = React.useState([]);

    // const dispatch = useDispatch();
    // const { getKYCByCountry } = useSelector((state) => state?.getKYCByCountry);
    // const documentdropData =setDocumentTypeDropData(getKYCByCountry?.data?.kycs)
    // console.log(documentdropData, "getKYCByCountrygetKYCByCountry")
    // const options = documentdropData.map(item => ({
    //     label: item,
    //     value: item
    // }));

    // useEffect(() => {
    //     const data1 = {
    //         data: {},
    //         method: "get",
    //         apiName: "getKYCByCountry/Dubai"
    //     };

    //     dispatch(actions.GETKYCBYCOUNTRY(data1));

    // }, [dispatch])

    const [isVerified, setIsVerified] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    
    const [selectedDocumentType, setSelectedDocumentType] = React.useState('');
    const [uploadedFiles, setUploadedFiles] = React.useState([]);
    const [documentTypeDropData, setDocumentTypeDropData] = React.useState([]);
    const dispatch = useDispatch();

    console.log(uploadedFiles,"uploaded fileee")

    const { getKYCByCountry } = useSelector((state) => state?.getKYCByCountry);

    // Ensure documentTypeDropData is set once getKYCByCountry is updated
    useEffect(() => {
        if (getKYCByCountry?.data?.kycs) {
            setDocumentTypeDropData(getKYCByCountry.data.kycs);
        }
    }, [getKYCByCountry]);

    const options = documentTypeDropData.map((item) => ({
        label: item,
        value: item
    }));

    useEffect(() => {
        const data1 = {
            data: {},
            method: "get",
            apiName: "getKYCByCountry/2"
        };

        dispatch(actions.GETKYCBYCOUNTRY(data1));
    }, [dispatch]);

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

    const [customerRegisterData, setCustomerRegisterData] = useState(null);

    const [activeStep, setActiveStep] = useState(0);

    const steps = ['Basic Information', 'Address', 'Documents'];

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        setIsVerified(true)
        setIsEmailVerified(true)
    };
    const navigate = useNavigate()


    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };
    const validationSchema = activeStep === 0
        ? validationSchemaStep0
        : activeStep === 1
            ? validationSchemaStep1
            : null;
    //  validationSchemaStep2;



    const { customerRegister } = useSelector((state) => state?.customerRegister);
    const { ImageUploadPost } = useSelector((state) => state?.ImageUploadPost);


    console.log(customerRegister);

    // const regiterFormSubmitionFn = async (values, uploadedFiles) => {
    //     console.log("hii this is submit funtion Work")
    //     if (uploadedFiles.length !== 0) {
    //         const data1 = {
    //             data: {
    //                 ...values,
    //                 // "city": "Mumbai",
    //                 // "country": "India",
    //                 // "state": "Maharashtra",
    //                 // "profileImage":ImageUploadPost?.data?.imageUrl,
    //                 "kycPdf": uploadedFiles
    //             },
    //             method: "post",
    //             apiName: "register/customer"
    //         };

    //         const customerRegister= await dispatch(actions.CUSTOMERREGISTER(data1));
    //         useEffect(() => {
    //             if (customerRegister?.data) {
    //                 if (customerRegister?.payload?.message === "Customer registered successfully") {
    //                     toast.success("Registered successfully");
    //                     sessionStorage.setItem(
    //                         "sessioncustomer_id",
    //                         customerRegister?.payload?.data.customer_id
    //                     );
    //                     sessionStorage.setItem(
    //                         "sessionFirstName",
    //                         customerRegister?.payload?.data.first_name
    //                     );
    //                     setTimeout(() => {
    //                         navigate("/registercomplete");
    //                         // onClose();
    //                     }, 2500);
    //                     // navigate('/registercomplete')
    //                 }
    //                 else {
    //                     console.log(customerRegister?.message, "hiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    //                     toast.error(customerRegister?.message);

    //                 }
    //             }
    //         }, [customerRegister])

    //     }

    // }

    const regiterFormSubmitionFn = async (values, uploadedFiles) => {
        console.log("hii this is submit function Work");
        if (uploadedFiles.length !== 0) {
            const data1 = {
                data: {
                    ...values,



                    "kycPdf": uploadedFiles
                },
                method: "post",
                apiName: "register/customer"
            };

            const result = await dispatch(actions.CUSTOMERREGISTER(data1));
            setCustomerRegisterData(result); // Set the state here
            setIsVerified(false)
            setIsEmailVerified(false)
        }
    };
    console.log(customerRegisterData?.payload, "customerRegisterData...payload?")

    useEffect(() => {

        if (customerRegisterData?.payload?.message === "Customer registered successfully") {
            toast.success("Registered successfully");
            // sessionStorage.setItem("sessioncustomer_id", customerRegisterData?.payload?.data.customer_id);
            // sessionStorage.setItem("sessionFirstName", customerRegisterData?.payload?.data.first_name);
            setTimeout(() => {
                navigate("/registercomplete");
            }, 2500);
        } else {
            console.log(customerRegisterData?.payload?.message, "hiiiiiiiiiiiiiiiiiiiiiiiiiiii");
            toast.error(customerRegisterData?.payload?.message);
        }

    }, [customerRegisterData]); // This effect will run when customerRegister changes



    // const handleGoRegisterComplete = () => {
    //     // if (customerRegister?.message === "Customer registered successfully") {
    //     //     toast.success("Registered successfully");
    //     //     sessionStorage.setItem(
    //     //         "sessioncustomer_id",
    //     //         customerRegister.payload?.data.customer_id
    //     //     );
    //     //     sessionStorage.setItem(
    //     //         "sessioProfileImage",
    //     //         customerRegister.payload?.data.first_name
    //     //     );
    //     //     setTimeout(() => {
    //     //         navigate("/registercomplete");
    //     //         // onClose();
    //     //     }, 2500);
    //     //     // navigate('/registercomplete')
    //     // }
    //     // else {
    //     //     console.log(customerRegister?.message, "hiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    //     //     toast.error(customerRegister?.message);

    //     // }
    // }




    return (
        <Grid container sx={{ boxShadow: 3, height: '100vh' }}>
            {/* Left Section */}
            <Grid
                item
                md={5}
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 11%, rgba(84, 84, 84, 0) 100%), url(${login_bgImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    boxShadow: 5,
                    width: '100%',
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <img
                    src={logo_login_image}
                    alt="logo"
                    width="213px"
                    height="61px"
                />
                <Box display="flex" justifyContent="center" flexWrap="wrap" mt={2}>
                    <Box sx={{ color: "#fff" }}>
                        <Typography
                            variant="h1"
                            textAlign="center"
                            sx={{ mb: "1px" }}
                        >
                            The Best Gold
                        </Typography>
                        <Typography
                            variant="h2"
                            textAlign="center"
                            sx={{ mb: 2 }}
                        >
                            Staking Company
                        </Typography>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            sx={{
                                lineHeight: "1.6",
                                color: "#b0aaaa",
                                maxWidth: "500px",
                                letterSpacing: "0px",
                                opacity: 1,
                            }}
                        >
                            We are committed to providing our customers with exceptional
                            service while offering our employees the best training service.
                        </Typography>
                    </Box>
                </Box>
            </Grid>

            {/* Right Section */}
            <Grid
                item
                xs={12}
                md={7}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#FFFFFF',
                    width: '100%',
                    position: 'relative'

                }}
            >

                <IconButton
                    sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        fontSize: "10px"
                    }}
                    onClick={() => {
                        navigate("/")
                    }}
                >
                    <CloseIcon />
                </IconButton>


                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 4

                    }}
                >

                    <Typography
                        variant="h3"
                        textAlign="center"
                        sx={{ fontWeight: "600", mb: 4 }}
                    >
                        Registration
                    </Typography>

                    {/* Stepper */}


                    <DashedStepper activeStep={activeStep} alternativeLabel sx={{ width: "100%" }}>
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel
                                    StepIconProps={{
                                        sx: {
                                            color: activeStep === index ? 'blue' : 'gray', // Circle color for the active and inactive steps
                                            '&.Mui-active': {
                                                color: '#C38F51', // Custom color for the active step
                                            },
                                            '&.Mui-completed': {
                                                color: '#C38F51', // Custom color for completed steps
                                            },
                                        },
                                    }}
                                >
                                    <Typography variant='body1'>
                                        {label}
                                    </Typography>
                                </StepLabel>
                            </Step>
                        ))}
                    </DashedStepper>


                    {/* Formik Form */}
                    <Grid
                    // sx={{ width: "100%" }}
                    >
                        <Formik
                            initialValues={{
                                first_name: '',
                                last_name: '',
                                type: '',
                                referred_by: '',
                                email: '',
                                phone: '',
                                isVerified: false,
                                password: '',
                                confirmPassword: '',
                                countrycode: '',

                                country: '',
                                state: "",
                                city: "",
                                zip_code: "",
                                address_1: "",
                                address_2: "",
                                profileImage: ""
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                console.log('Form Submitted1234', values);
                                console.log('Form Submitted12', uploadedFiles);

                                regiterFormSubmitionFn(values, uploadedFiles)

                                handleNext();
                            }}
                        >
                            {({ handleChange, handleBlur, values, setFieldValue, isSubmitting }) => (
                                <Form>
                                    <Grid sx={{ height: "57vh", overflowY: "auto", width: "100%", px: { xs: 0, md: 2 } }} className='content'>
                                        {activeStep === 0 && (
                                            <>
                                                <Grid container spacing={2}
                                                // mt={3}
                                                >
                                                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                                                        {/* <ProfileUpload name="imageupload" setFieldValue={setFieldValue} /> */}
                                                        <CustImageUploadInput
                                                            label="Add cover image"
                                                            name="profileImage"
                                                            isSubmitting={isSubmitting}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <CustomInputLogin
                                                            // important="important"
                                                            important={true}

                                                            name="first_name"
                                                            label="First Name"
                                                            inputType="text"
                                                            custPlaceholder="Enter first Name "

                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <CustomInputLogin
                                                            name="last_name"
                                                            label="Last Name"
                                                            inputType="text"
                                                            custPlaceholder="Enter Last Name"

                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <CustoDropDownRegister
                                                            important={true}

                                                            name="type"
                                                            label="Type"
                                                            custPlaceholder="select a type"
                                                            options={[
                                                                { label: "individual", value: "individual" },
                                                                { label: "institutional", value: "institutional" },
                                                            ]}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <CustomInputLogin
                                                            name="referred_by"
                                                            label="Referral Code(if Any)"
                                                            custPlaceholder="Referral Code"
                                                            inputType="text"


                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <CustomEmailVerifyInput
                                                            important={true}
                                                            setIsVerified={setIsEmailVerified}
                                                            isVerified={isEmailVerified}
                                                            emailInput={emailInput}
                                                            setEmailInput={setEmailInput}
                                                            name="email"
                                                            label="Email ID"
                                                            inputType="email"
                                                            setFieldValue={setFieldValue}

                                                        />
                                                    </Grid>

                                                    <Grid item xs={12} md={6}>
                                                        <CustomPhoneVerifyInput
                                                            important={true}
                                                            name="phone"
                                                            label="Mobile Number"
                                                            countrycodename="countrycode"
                                                            setIsVerified={setIsVerified}
                                                            isVerified={isVerified}
                                                            phoneInput={phoneInput}
                                                            setPhoneInput={setPhoneInput}
                                                            custPlaceholder="Enter Mobile Number"
                                                            setFieldValue={setFieldValue} // Pass setFieldValue to CustomPhoneVerifyInput
                                                        />


                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <CustomInputLogin
                                                            important={true}

                                                            name="password"
                                                            label="Password"
                                                            inputType="password"
                                                            custPlaceholder="Enter Password"

                                                        />
                                                    </Grid>

                                                    <Grid item xs={12} md={6}>
                                                        <CustomInputLogin
                                                            important={true}

                                                            name="confirmPassword"
                                                            label="Confirm Password"
                                                            inputType="password"
                                                            custPlaceholder="Re-Enter Password"

                                                        />
                                                    </Grid>

                                                </Grid>
                                            </>
                                        )}

                                        {activeStep === 1 && (
                                            <>
                                                {/* Address Section (Step 2) */}
                                                <Grid container spacing={2}
                                                    mt={1}
                                                >
                                                    {/* Add address-related fields here */}
                                                    <Grid item xs={12} md={6}>
                                                        <CustoDropDownRegister
                                                            name="country"
                                                            label="County"
                                                            custPlaceholder="select a country"
                                                            options={[
                                                                { label: "United Arab Emirates", value: "United Arab Emirates" },
                                                                { label: "India", value: "India" },
                                                            ]}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <CustoDropDownRegister
                                                            name="state"
                                                            label="State"
                                                            custPlaceholder="Select a state"
                                                            options={[
                                                                { label: "Abhu Dhabi", value: "Abhu Dhabi" },
                                                                { label: "Tamil Nadu", value: "Tamil Nadu" },
                                                            ]}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <CustoDropDownRegister
                                                            name="city"
                                                            label="City"
                                                            custPlaceholder="select a city"
                                                            options={[
                                                                { label: "AI Ain", value: "AI Ain" },
                                                                { label: "Chennai", value: "Chennai" },
                                                            ]}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <CustomInputLogin
                                                            name="zip_code"
                                                            label="Zipcode"
                                                            custPlaceholder="Eneter Zipcode"


                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <CustomInputLogin
                                                            name="address_1"
                                                            label="Address1"
                                                            custPlaceholder="Enter address1"
                                                            inputType="textarea"


                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <CustomInputLogin
                                                            name="address_2"
                                                            label="Address2"
                                                            custPlaceholder="Enter address2"
                                                            inputType="textarea"



                                                        />
                                                    </Grid>
                                                    {/* Add other address fields as needed */}
                                                </Grid>
                                            </>
                                        )}
                                        {activeStep === 2 && (
                                            <>
                                                {/* Documents Section (Step 3) */}
                                                <Grid container spacing={4}
                                                    // mt="1px"
                                                    pt={2}
                                                >
                                                    {/* Left Side: Dropdown and Upload Button */}
                                                    <Grid item xs={12} md={6}>
                                                        {/* Dropdown for Document Type */}
                                                        {/* <FormControl fullWidth>
                                                            <InputLabel>Document Type</InputLabel>
                                                            <Select
                                                                name="documentType"
                                                                value={selectedDocumentType}
                                                                onChange={(e) => setSelectedDocumentType(e.target.value)}
                                                            >
                                                                <MenuItem value="Emirates ID">Emirates ID</MenuItem>
                                                                <MenuItem value="Passport">Passport</MenuItem>
                                                                <MenuItem value="Driving License">Driving License</MenuItem>
                                                            </Select>
                                                        </FormControl> */}
                                                        <CustomDropdownDocumentType
                                                            name="emiratesid"
                                                            label="Document Type"
                                                            custPlaceholder="select a type"
                                                            setFieldValue={setFieldValue}
                                                            selectedDocumentType={selectedDocumentType}
                                                            setSelectedDocumentType={setSelectedDocumentType}

                                                            // options={[
                                                            //     { label: "Abhu Dhabi", value: "Abhu Dhabi" },
                                                            //     { label: "Tamil Nadu", value: "Tamil Nadu" },
                                                            // ]}
                                                            options={options}
                                                        />


                                                        {/* File Upload Button */}
                                                        <Box mt={2} sx={{ border: "1px solid #E5E5E5", p: 4, display: 'flex', flexDirection: 'column', justifyContent: "space-between", alignItems: "center" }}>
                                                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: "10px" }}>
                                                                <FiUpload style={{ color: '#C38F51', fontSize: '40px' }} />
                                                            </Box>

                                                            <input
                                                                accept=".png,.jpg,.pdf"
                                                                style={{ display: "none" }}
                                                                id="file-upload"
                                                                type="file"
                                                                onChange={handleFileUpload}
                                                            />
                                                            <label htmlFor="file-upload">
                                                                <Button component="span" sx={{ color: 'white', background: "#C38F51", borderRadius: "23px", p: "0 10px", fontSize: "14px", textTransform: "none" }}>
                                                                    Browse
                                                                </Button>
                                                            </label>

                                                            <Typography variant="body2" color="#E5E5E5" mt={1}>
                                                                drop a file here
                                                            </Typography>
                                                            <Typography variant="body2" color="#252525" mt={1} fontSize="12px">
                                                                <span style={{ color: "red" }}>*</span> File supported: .png, .jpg, .pdf
                                                            </Typography>
                                                        </Box>

                                                    </Grid>

                                                    {/* Right Side: Uploaded Files */}
                                                    <Grid item xs={12} md={6}>
                                                        {/* <Grid container spacing={2}> */}
                                                        <Typography variant="subtitle1" mb={0.5}>

                                                            Document Type
                                                        </Typography>
                                                        <Grid>

                                                            {uploadedFiles.length > 0 ? (
                                                                uploadedFiles.map((file, index) => (
                                                                    <Grid item xs={12} key={index}>
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
                                                                                <HiDocumentArrowUp style={{ fontSize: "30px", color: '#C38F51', marginRight: "10px" }} />
                                                                            </Box>
                                                                            <Box sx={{ width: "-webkit-fill-available" }}>
                                                                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                                                    <Typography variant='body1' sx={{ fontWeight: "800px" }}>
                                                                                        {file.type}
                                                                                    </Typography>
                                                                                    <IconButton onClick={() => handleFileDelete(index)}
                                                                                        sx={{
                                                                                            color: "black",
                                                                                            background: "none",
                                                                                            "&:hover": {
                                                                                                color: "red",
                                                                                                background: "none"

                                                                                            }
                                                                                        }}
                                                                                    >
                                                                                        <RiDeleteBin2Line
                                                                                            style={{ fontSize: "14px", fontWeight: "800" }}
                                                                                        />
                                                                                    </IconButton>
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
                                                                                <Box display="flex" justifyContent="space-between">
                                                                                    <Typography variant='body1' sx={{ fontSize: "12px", color: "gray" }}>{file.name}</Typography>
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
                                                                ))
                                                            ) : (
                                                                <>
                                                                    <Box sx={{ textAlign: "center", color: "#E5E5E5" }}>
                                                                        <AiOutlineProfile style={{ fontSize: '100px' }} />
                                                                        <Typography variant='body1' sx={{ color: "#E5E5E5", textAlign: "center" }}>
                                                                            No uploads available.
                                                                        </Typography>
                                                                    </Box>
                                                                </>
                                                            )}

                                                        </Grid>
                                                        {/* </Grid> */}
                                                    </Grid>
                                                    <Grid pl={1}>
                                                        <TermsandConditions
                                                            checked={checked}
                                                            onCheckChange={handleCheckChange}
                                                        />

                                                    </Grid>
                                                    {/* <Typography>I accept all the Terms & Conditions and Privacy Policies of goldstake.com</Typography> */}
                                                </Grid>
                                            </>
                                        )}

                                    </Grid>
                                    <Box mt={1} textAlign="right">
                                        {activeStep > 0 ? (

                                            <Button variant="contained" color="primary" onClick={handleBack}
                                                //  sx={{ mr: 2, color: "black", background: "white",borderRadius:"23px",textTransform:"none", }}
                                                sx={{
                                                    // backgroundColor: "#C38F51",
                                                    textTransform: "none",
                                                    color: "white",
                                                    fontSize: "16px",
                                                    mr: "10px",
                                                    // padding: "0px 40px",
                                                    padding: { xs: "0px 20px", md: "0px 40px" },

                                                    minHeight: "40px",
                                                    borderRadius: "23px",
                                                    background: "white",
                                                    boxShadow: "none",
                                                    color: "black",
                                                    border: "1px solid black",
                                                    "&:hover": {
                                                        backgroundColor: "#3B4056",
                                                        color: "white"
                                                    },
                                                }}
                                            >
                                                Back
                                            </Button>) : null}
                                        {activeStep === steps.length - 1 ? (
                                            <Button variant="contained" type="submit"
                                                // onClick={handleGoRegisterComplete}

                                                // onClick={handleGoRegisterComplete}
                                                disabled={!checked}
                                                // sx={{ background: "#C38F51", color: "white", borderRadius: "23px", textTransform: "none" }}
                                                sx={{
                                                    // backgroundColor: "#C38F51",
                                                    textTransform: "none",
                                                    color: "white",
                                                    fontSize: "16px",
                                                    boxShadow: "none",

                                                    // padding: "0px 40px",
                                                    padding: { xs: "0px 20px", md: "0px 40px" },

                                                    minHeight: "40px",
                                                    borderRadius: "23px",
                                                    background: "#C38F51 0% 0% no-repeat padding-box",
                                                    "&:hover": {
                                                        backgroundColor: "#3B4056",
                                                        boxShadow: "none",

                                                    },
                                                }}
                                            >
                                                Submit
                                            </Button>
                                        ) : (
                                            <Button variant="contained" type="submit"
                                                // onClick={handleGoRegisterComplete}
                                                // sx={{ textTransform: "none", background: "#C38F51", color: "white", borderRadius: "23px" }}
                                                sx={{
                                                    // backgroundColor: "#C38F51",
                                                    textTransform: "none",
                                                    color: "white",
                                                    fontSize: "16px",
                                                    // padding: "0px 40px",
                                                    padding: { xs: "0px 20px", md: "0px 40px" },

                                                    minHeight: "40px",
                                                    boxShadow: "none",

                                                    borderRadius: "23px",
                                                    background: "#C38F51 0% 0% no-repeat padding-box",
                                                    "&:hover": {
                                                        backgroundColor: "#3B4056",
                                                    },
                                                }}
                                            >
                                                Next
                                            </Button>
                                        )}
                                        {/* <Button variant="contained" type="submit"
                                            onClick={handleGoRegisterComplete}
                                            sx={{ background: "#C38F51", color: "white" }}>
                                            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                        </Button> */}
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                </Box>
                <ToastContainer
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
                />
            </Grid>
        </Grid>
    );
};

export default RegistrationComponent;
