// import React, { useState } from "react";
// import {
//     Box,
//     Grid,
//     Typography,
//     TextField,
//     MenuItem,
//     Button,
//     InputAdornment,
// } from "@mui/material";
// import { AccountCircle, Email, Phone, Public } from "@mui/icons-material";
// import CustomInputLogin from "../../Components/CustomInputLogin/CustomInputLogin";

// const countries = [
//     { value: "India", label: "India" },
//     { value: "USA", label: "USA" },
//     { value: "UK", label: "UK" },
//     { value: "Australia", label: "Australia" },
// ];

// const ContactUsection = () => {


//     return (
//         <Grid>
//             <Box sx={{ maxWidth: '80%', margin: '0 auto' }}>
//                 <Typography variant="h4" textAlign="center" gutterBottom fontSize="30px" sx={{ mb: 2 }}>
//                     <span style={{ fontWeight: '800' }}>Get in Touch</span>
//                 </Typography>
//                 <Typography
//                     sx={{
//                         paddingBottom: 4,
//                         maxWidth: '900px',
//                         margin: '0 10px',
//                         textAlign: 'center',
//                         color: '#b0aaaa',
//                         fontSize: '14px',

//                     }}
//                 >
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the industry’s standard dummy text ever since the
//                     1500s, when an unknown printer took a galley of type and scrambled it to
//                     make a type specimen book.
//                 </Typography>


//             </Box>
//             <Grid container spacing={4} sx={{ maxWidth: "90%", margin: "0 auto" }}>
//                 {/* Left Section */}
//                 <Grid item xs={12} md={5}>
//                     <Typography variant="h4" fontWeight="bold" gutterBottom>
//                         Contact
//                     </Typography>
//                     <Typography sx={{ mb: 2 }}>
//                         📍 6th Main Road, V Block, Anna Nagar, Chennai - 600040
//                     </Typography>
//                     <Typography sx={{ mb: 2 }}>📞 +91 9876543210</Typography>
//                     <Typography>📧 info@goldstack.com</Typography>
//                 </Grid>

//                 {/* Right Section */}
//                 <Grid item xs={12} md={7}>
//                     <Box
//                         component="form"
//                         // onSubmit={handleSubmit}
//                         sx={{
//                             display: "flex",
//                             flexDirection: "column",
//                             gap: 2,
//                         }}
//                     >

//                         <CustomInputLogin
//                             name="fullname"
//                             // label="Name"
//                             custPlaceholder="Full Name"
//                             inputType="text"
//                         />

//                         <CustomInputLogin
//                             name="email"
//                             // label="Name"
//                             custPlaceholder="Email"
//                             inputType="email"
//                         />
//                         <CustomInputLogin
//                             name="phonenumber"
//                             // label="Name"
//                             custPlaceholder="Phone Number"
//                             inputType="number"
//                         />
//                         <CustomInputLogin
//                             name="message"
//                             // label="Name"
//                             custPlaceholder="Message"
//                             inputType="textarea"
//                         />





//                         {/* Message */}


//                         {/* Submit Button */}
//                         <Button
//                             type="submit"
//                             variant="contained"
//                             sx={{
//                                 backgroundColor: "#d8a35e",
//                                 color: "#fff",
//                                 fontWeight: "bold",
//                                 "&:hover": { backgroundColor: "#c28f4a" },
//                             }}
//                         >
//                             Submit
//                         </Button>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </Grid>
//     );
// };

// export default ContactUsection;



import React from "react";
import {
    Box,
    Grid,
    Typography,
    Button,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInputLogin from "../../../Components/CustomInputLogin/CustomInputLogin";
import CustomDropdownMui from "../../../Components/CustomDropDown/CustomDropdown";
import user_icon_image from "../../../Assets/User_icon_image.svg"
import email_input_icon from "../../../Assets/email_input_icon.svg"

import country_icon from "../../../Assets/country_icon.svg"

import phone_input_icon from "../../../Assets/phone_input_icon.svg"

import location_icon from "../../../Assets/location_icon.svg"

import call_icon from "../../../Assets/call_icon.svg"

import mail_icon from "../../../Assets/mail_icon.svg"

import actions from "../../../ReduxStore/actions/index";
import { useDispatch, useSelector } from "react-redux";


const countries = [
    { value: "India", label: "India" },
    { value: "USA", label: "USA" },
    { value: "UK", label: "UK" },
    { value: "Australia", label: "Australia" },
];

// Validation schema using Yup
const validationSchema = Yup.object({
    full_name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone_number: Yup.string()
        .matches(/^[0-9]+$/, "Must be a number")
        .min(10, "Must be at least 10 digits")
        .required("Phone Number is required"),
    message: Yup.string().required("Message is required"),
    country: Yup.string().required("Countries is required"),

});

const ContactUsection = ({ getInTouchDates }) => {


    const { postContactUsForm } = useSelector((state) => state?.postContactUsForm);

    console.log(postContactUsForm);

 const dispatch = useDispatch();
    const initialValues = {
        full_name: "",
        email: "",
        country: "",
        phone_number: "",
        message: "",
    };

    const handleSubmit = (values, { resetForm }) => {
        console.log("Form Values of contact form:", values);


        const data1 = { data: values, method: "post", apiName: "postContactUsForm" };

        dispatch(actions.POSTCONTACTUSFORM(data1));

        resetForm();

    };

    return (
        <Grid>
            <Box

                sx={{ maxWidth: { xs: "100%", md: '70%' }, margin: "0 auto", pt: 4 }}
            >
                <Typography
                    variant="h3"
                    textAlign="center"
                    gutterBottom
                    // fontSize="30px"
                    sx={{ mb: 2 }}
                >
                    <span style={{ fontWeight: "800" }}>{getInTouchDates?.[0]?.heading || "Default Heading"}</span>
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        paddingBottom: 4,
                        maxWidth: "800px",
                        margin: "0 10px",
                        textAlign: "center",
                        color: "#b0aaaa",

                    }}
                >
                    {getInTouchDates?.[0]?.content || "Default Content"}
                </Typography>
            </Box>
            <Grid container spacing={4} sx={{ maxWidth: "90%", margin: { xs: "0", md: "0 auto" }, pb: "30px" }}>
                {/* Left Section */}
                <Grid item xs={12} md={7}>
                    <Typography variant="h6" gutterBottom>
                        Contact
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <img src={location_icon} alt="Location Icon" style={{ marginRight: "8px" }} />
                        <Typography
                            variant="body1"
                            sx={{ maxWidth: "250px", color: "#3B4056" }}
                        >
                            {getInTouchDates?.[0]?.additional_data?.contact?.address || "Default Content"}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <img src={mail_icon} alt="Call Icon" style={{ marginRight: "8px" }} />
                        <Typography
                            variant="body1"
                            sx={{ maxWidth: "200px", color: "#3B4056" }}

                        >{getInTouchDates?.[0]?.additional_data?.contact?.mobile_no || "Default Content"}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img src={call_icon} alt="Mail Icon" style={{ marginRight: "8px" }} />
                        <Typography
                            variant="body1"
                            sx={{ maxWidth: "300px", color: "#3B4056" }}

                        >{getInTouchDates?.[0]?.additional_data?.contact?.email || "Default Content"}</Typography>
                    </Box>

                </Grid>

                {/* Right Section */}
                <Grid item xs={12} md={5}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, errors, touched, handleChange, handleBlur }) => (
                            <Form>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 2,
                                    }}
                                >
                                    <Grid xs={12}>
                                        <CustomInputLogin
                                            name="full_name"
                                            custPlaceholder="Full Name"
                                            inputType="text"
                                            image={user_icon_image}

                                        />

                                    </Grid>
                                    <Grid xs={12}>
                                        <CustomInputLogin
                                            name="email"
                                            custPlaceholder="Email"
                                            inputType="email"
                                            image={email_input_icon}

                                        />
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <CustomDropdownMui
                                                name="country"
                                                options={countries}
                                                custPlaceholder="Select Country"
                                                image={country_icon}
                                            // important={true}

                                            />
                                        </Grid>
                                        <Grid item xs={8}>
                                            <CustomInputLogin
                                                name="phone_number"
                                                custPlaceholder="Phone Number"
                                                inputType="number"
                                                image={phone_input_icon}


                                            />
                                        </Grid>
                                    </Grid>


                                    <CustomInputLogin
                                        name="message"
                                        custPlaceholder="Message"
                                        inputType="textarea"

                                    />

                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                textTransform: "none",
                                                color: "white",
                                                fontSize: "16px",
                                                // padding: "0px 40px",
                                                padding: { xs: "0px 20px", md: "0px 60px" },
                                                boxShadow: "none",

                                                minHeight: "40px",
                                                borderRadius: "23px",
                                                background: "#C38F51 0% 0% no-repeat padding-box",
                                                "&:hover": {
                                                    backgroundColor: "#3B4056",

                                                },
                                            }}
                                        >
                                            Submit
                                        </Button>
                                    </Box>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ContactUsection;
