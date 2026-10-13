



// import React, { useState } from 'react';
// import { Box, Button, Grid, IconButton, TextField, Typography, Link } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { Formik, Field, Form } from 'formik';
// import * as Yup from 'yup';  // Optional: For validation
// import login_bgImage from "../../Assets/login_bgImage.png";
// import CustomInput from '../CustomInput/CustomInput';
// import CustomInputLogin from '../CustomInputLogin/CustomInputLogin';
// import logo_login_image from "../../Assets/new_logo.png";
// import { useNavigate } from 'react-router-dom';
// import { AiFillRightCircle } from 'react-icons/ai';
// import { CiCircleCheck } from 'react-icons/ci';
// import { FaCircleCheck } from "react-icons/fa6";



// const RegisterComplete = () => {

//     const navigate = useNavigate()

//     const handleGoCustomerDassbord= () => {
//         navigate("/Customer-dashboard")
//     }

//     const [showPassword, setShowPassword] = useState(false);

//     // Toggle password visibility
//     const togglePasswordVisibility = () => {
//         setShowPassword((prev) => !prev);
//     };

//     const initialValues = {
//         emailid: '',
//         password: ''
//     };

//     // Optional: validation schema using Yup
//     const validationSchema = Yup.object({
//         emailid: Yup.string().required('Email Id is reuired'),
//         password: Yup.string().required('Password is required')
//     });

//     const handleSubmit = (values) => {
//         // Add form submission logic
//         console.log(values, "values");  // You can log the form values or handle API calls here
//     };

//     return (
//         <Grid container sx={{ boxShadow: 3, height: '100vh' }}>
//             <Grid
//                 item
//                 md={5}
//                 sx={{
//                     display: { xs: 'none', md: 'flex' },
//                     backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 11%, rgba(84, 84, 84, 0) 100%), url(${login_bgImage})`,
//                     backgroundSize: 'cover',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center',
//                     boxShadow: 5,
//                     width: '100%',
//                     height: '100vh',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     flexDirection: 'column', // Ensures content stacks vertically
//                     // mb:2
//                 }}
//             >
//                 <img
//                     src={logo_login_image}
//                     alt="logo"
//                     width="213px"
//                     height="61px"
//                 />
//                 <Box
//                     display="flex"
//                     // alignItems="center"
//                     justifyContent="center"
//                     flexWrap="wrap"
//                     mt={2}
//                 >
//                     {/* Left Section */}
//                     <Box
//                         sx={{

//                             color: "#fff",
//                         }}
//                     >
//                         <Typography
//                             variant="h1"
//                             textAlign="center"
//                             sx={{
//                                 fontWeight: "bold",
//                                 fontSize: "50px",
//                                 mb: "1px"
//                             }}
//                         >
//                             The Best Gold
//                         </Typography>
//                         <Typography
//                             variant="h2"
//                             textAlign="center"
//                             sx={{
//                                 fontWeight: "bold",
//                                 fontSize: "35px",
//                                 mb: 2,
//                             }}
//                         >
//                             Staking Company
//                         </Typography>
//                         <Typography
//                             variant="body1"
//                             textAlign="center"
//                             sx={{
//                                 // mb: 5,
//                                 lineHeight: "1.6",
//                                 color: "#ffffff",
//                                 // width:"55%",
//                                 maxWidth: "500px",

//                                 letterSpacing: "0px",
//                                 color: "#b0aaaa",
//                                 opacity: 1
//                             }}
//                         >
//                             We are committed to providing our customers with exceptional
//                             service while offering our employees the best training service while offering our employees.
//                             We are committed to providing our customers with exceptional
//                             service while offering our employees
//                         </Typography>
//                     </Box>
//                 </Box>
//             </Grid>
//             <Grid
//                 item
//                 xs={12}
//                 md={7}
//                 sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     p: 2,
//                     background: '#FFFFFF',
//                     width: '100%',
//                 }}
//             >
//                 <Box
//                     sx={{
//                         width: '100%',
//                         // maxWidth: 350, // Added for consistent width
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center', // Aligns all children centrally
//                         justifyContent: 'center',
//                     }}
//                 >
//                     <Typography
//                         variant="h3"
//                         textAlign="center"
//                         sx={{ fontWeight: "600", mb: 2 }}
//                     >
//                         Registration Complete
//                     </Typography>
//                     <Typography
//                         variant="body1"
//                         textAlign="center"
//                         sx={{
//                             // mb: 5,
//                             lineHeight: "1.6",
//                             color: "#ffffff",
//                             // width:"55%",
//                             maxWidth: "500px",

//                             letterSpacing: "0px",
//                             color: "#b0aaaa",
//                             opacity: 1,

//                         }}
//                     >
//                         We are committed to providing our customers with exceptional
//                         service while offering our employees the best training service while offering our employees.
//                         We are committed to providing our customers with exceptional
//                         service while offering our employees
//                     </Typography>
//                     <Box sx={{
//                         mt: 3

//                     }}>
//                         <FaCircleCheck style={{ fontSize: "100px", color: "#1FC45B" }} />
//                     </Box>
//                     <Typography
//                         variant="h4"
//                         // component="h1"
//                         textAlign="center"
//                         sx={{
//                             // mb: 5,
//                             lineHeight: "1.6",
//                             // color: "#ffffff",
//                             // width:"55%",
//                             // maxWidth: "500px",

//                             letterSpacing: "0px",
//                             color: "#C38F51",
//                             fontWeight: "600",
//                             fontSize: "30px",
//                             opacity: 1,
//                             mt: 1

//                         }}
//                     >
//                         Mr. Mani Krish
//                     </Typography>
//                     <Typography
//                         variant="body1"
//                         textAlign="center"
//                         sx={{
//                             // mb: 5,
//                             lineHeight: "1.6",
//                             // color: "#ffffff",
//                             // width:"55%",
//                             maxWidth: "500px",
//                             fontSize: "16px",

//                             letterSpacing: "0px",
//                             color: "#7A7A7A",
//                             opacity: 1,
//                             // mt: 0.5
//                         }}
//                     >
//                         Your Registration Completed
//                     </Typography>
//                     <Typography
//                         variant="body1"
//                         textAlign="center"
//                         sx={{
//                             // mb: 5,
//                             lineHeight: "1.6",
//                             fontSize: '14px',
//                             letterSpacing: "0px",
//                             color: "black",
//                             fontWeight: "600",
//                             opacity: 1,
//                             mt: 1
//                         }}
//                     >
//                         It’s on us now… We will Review & revert by<span style={{ color: "#1FC45B" }}> 24 Hours</span> maximum
//                     </Typography>
//                     <Button
//                         variant="contained"
//                         onClick={handleGoCustomerDassbord}
//                     sx={{
//                         // backgroundColor: "#C38F51",
//                         textTransform: "none",
//                         mt: 2,
//                         color: "white",
//                         fontSize: "14px",
//                         padding: "0px 40px",
//                         minHeight: "40px",
//                         borderRadius: "23px",
//                         background: "#C38F51 0% 0% no-repeat padding-box",
//                         boxShadow: "none",
//                         "&:hover": {
//                             backgroundColor: "#C38F51",
//                         },
//                     }}
//                     >
//                     Let's Start
//                 </Button>


//             </Box>
//         </Grid>

//         </Grid >
//     );
// };

// export default RegisterComplete;






import React, { useState } from 'react';
import { Box, Button, Grid, IconButton, TextField, Typography, Link } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';  // Optional: For validation
import login_bgImage from "../../Assets/login_bgImage.png";
import CustomInput from '../CustomInput/CustomInput';
import CustomInputLogin from '../CustomInputLogin/CustomInputLogin';
import logo_login_image from "../../Assets/new_logo.png";
import { useNavigate } from 'react-router-dom';
import { AiFillRightCircle } from 'react-icons/ai';
import { CiCircleCheck } from 'react-icons/ci';
import { FaCircleCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";



const RegisterComplete = () => {

    const navigate = useNavigate()

    const handleGoCustomerDassbord = () => {
        navigate("/login")
        // navigate("/Customer-dashboard")
        
    }

    const [showPassword, setShowPassword] = useState(false);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const initialValues = {
        emailid: '',
        password: ''
    };

    // Optional: validation schema using Yup
    const validationSchema = Yup.object({
        emailid: Yup.string().required('Email Id is reuired'),
        password: Yup.string().required('Password is required')
    });

    const handleSubmit = (values) => {
        // Add form submission logic
        console.log(values, "values");  // You can log the form values or handle API calls here
    };


    const { customerRegister } = useSelector((state) => state?.customerRegister);

    console.log(customerRegister, "customerRegistercustomerRegistercustomerRegister");
    return (
        <Grid container sx={{ boxShadow: 3, height: '100vh' }}>
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
                    flexDirection: 'column', // Ensures content stacks vertically
                    // mb:2
                }}
            >
                <img
                    src={logo_login_image}
                    alt="logo"
                    width="213px"
                    height="61px"
                />
                <Box
                    display="flex"
                    // alignItems="center"
                    justifyContent="center"
                    flexWrap="wrap"
                    mt={2}
                >
                    {/* Left Section */}
                    <Box
                        sx={{

                            color: "#fff",
                        }}
                    >
                        <Typography
                            variant="h1"
                            textAlign="center"
                            sx={{
                                fontWeight: "bold",
                                fontSize: "50px",
                                mb: "1px"
                            }}
                        >
                            The Best Gold
                        </Typography>
                        <Typography
                            variant="h2"
                            textAlign="center"
                            sx={{
                                fontWeight: "bold",
                                fontSize: "35px",
                                mb: 2,
                            }}
                        >
                            Staking Company
                        </Typography>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            sx={{
                                // mb: 5,
                                lineHeight: "1.6",
                                color: "#ffffff",
                                // width:"55%",
                                maxWidth: "500px",

                                letterSpacing: "0px",
                                color: "#b0aaaa",
                                opacity: 1
                            }}
                        >
                            We are committed to providing our customers with exceptional
                            service while offering our employees the best training service while offering our employees.
                            We are committed to providing our customers with exceptional
                            service while offering our employees
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                md={7}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    background: '#FFFFFF',
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        // maxWidth: 350, // Added for consistent width
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Aligns all children centrally
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant="h3"
                        textAlign="center"
                        sx={{ fontWeight: "600", mb: 2 }}
                    >
                        Registration Completed
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{
                            // mb: 5,
                            lineHeight: "1.6",
                            color: "#ffffff",
                            // width:"55%",
                            maxWidth: "500px",

                            letterSpacing: "0px",
                            color: "#b0aaaa",
                            opacity: 1,

                        }}
                    >
                        We are committed to providing our customers with exceptional
                        service while offering our employees the best training service while offering our employees.
                        We are committed to providing our customers with exceptional
                        service while offering our employees
                    </Typography>
                    <Box sx={{
                        mt: 3

                    }}>
                        <FaCircleCheck style={{ fontSize: "100px", color: "#1FC45B" }} />
                    </Box>
                    <Typography
                        variant="h4"
                        // component="h1"
                        textAlign="center"
                        sx={{
                            // mb: 5,
                            lineHeight: "1.6",
                            // color: "#ffffff",
                            // width:"55%",
                            // maxWidth: "500px",

                            letterSpacing: "0px",
                            color: "#C38F51",
                            fontWeight: "600",
                            fontSize: "30px",
                            opacity: 1,
                            mt: 1

                        }}
                    >
                        {`${customerRegister?.data?.first_name} ${customerRegister?.data?.last_name}` || "Mr. Guest"}
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{
                            // mb: 5,
                            lineHeight: "1.6",
                            // color: "#ffffff",
                            // width:"55%",
                            maxWidth: "500px",
                            fontSize: "16px",

                            letterSpacing: "0px",
                            color: "#7A7A7A",
                            opacity: 1,
                            // mt: 0.5
                        }}
                    >
                        Your Registration Completed
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{
                            // mb: 5,
                            lineHeight: "1.6",
                            fontSize: '14px',
                            letterSpacing: "0px",
                            color: "black",
                            fontWeight: "600",
                            opacity: 1,
                            mt: 1
                        }}
                    >
                        It’s on us now… We will Review & revert by<span style={{ color: "#1FC45B" }}> 24 Hours</span> maximum
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={handleGoCustomerDassbord}
                        sx={{
                            // backgroundColor: "#C38F51",
                            textTransform: "none",
                            mt: 2,
                            color: "white",
                            fontSize: "14px",
                            padding: "0px 40px",
                            minHeight: "40px",
                            borderRadius: "23px",
                            background: "#C38F51 0% 0% no-repeat padding-box",
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "#C38F51",
                            },
                        }}
                    >
                        Let's Start
                    </Button>


                </Box>
            </Grid>

        </Grid >
    );
};

export default RegisterComplete;
