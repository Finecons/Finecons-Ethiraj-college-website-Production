// // import React from "react";
// // import { Box, Button, Typography } from "@mui/material";
// // import { Formik, Form } from "formik";
// // import CustomInput from "../CustomInput/CustomInput";
// // import * as Yup from "yup";
// // import { useNavigate } from "react-router-dom";
// // import CustomInputLogin from "../CustomInputLogin/CustomInputLogin";

// // const SignInForm = ({ handleSubmit, toggleForgotPassword }) => {
// //   const initialValues = {
// //     email: "",
// //     password: "",
// //   };

// //   const validationSchema = Yup.object({
// //     email: Yup.string().required("Email is required"),
// //     password: Yup.string().required("Password is required"),
// //   });

// //   const navigate = useNavigate();

// //   const handleGoRegistrationPage = () => {
// //     navigate("/register");
// //   };

// //   return (
// //     <Formik
// //       initialValues={initialValues}
// //       validationSchema={validationSchema}
// //       onSubmit={handleSubmit}
// //     >
// //       {({ values, handleChange, handleBlur, errors, touched }) => (
// //         <Form style={{ width: "100%" }}>
// //           <Box mb={1}>
// //             <CustomInputLogin
// //               name="email"
// //               label="Email"
// //               custPlaceholder="Enter Email"
// //               inputType="text"
// //             />
// //           </Box>

// //           <Box mb={1}>
// //             <CustomInputLogin
// //               name="password"
// //               label="Password"
// //               custPlaceholder="Enter Password"
// //               inputType="password"
// //             />
// //           </Box>

// //           <Box
// //             display="flex"
// //             justifyContent="end"
// //             alignItems="end"
// //             width="100%"
// //             mb={3}
// //             color="#6B3C58"
// //           >
// //             <Typography variant="body1" fontSize="16px">
// //               <Typography
// //                 variant="subtitle1"
// //                 onClick={toggleForgotPassword}
// //                 underline="none"
// //                 sx={{ cursor: "pointer" }}
// //                 color="#6B3C58"
// //               >
// //                 Forgot password?
// //               </Typography>
// //             </Typography>
// //           </Box>

// //           <Button
// //             fullWidth
// //             type="submit"
// //             variant="contained"
// //             sx={{
// //               borderRadius: 23,
// //               py: "7px",
// //               color: "white",
// //               backgroundColor: "#6B3C58",
// //             }}
// //           >
// //             Sign In
// //           </Button>

// //           <Typography
// //             variant="body1"
// //             mt={2}
// //             sx={{ fontSize: "16px", textAlign: "center" }}
// //           >
// //             Don't have an account?&nbsp;
// //             <Box
// //               sx={{ color: "#6B3C58", cursor: "pointer" }}
// //               onClick={handleGoRegistrationPage}
// //             >
// //               Register here
// //             </Box>
// //           </Typography>
// //         </Form>
// //       )}
// //     </Formik>
// //   );
// // };

// // export default SignInForm;

// import React from "react";
// import { Box, Button, Grid, Typography } from "@mui/material";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import CustomInputLogin from "../CustomInputLogin/CustomInputLogin";
// import CustoDropDownRegister from "../CustomDropDown/CustoDropDownRegister";

// const SignInForm = ({ handleSubmit }) => {
//   const initialValues = {
//     email: "",
//     password: "",
//     // role: "",
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: Yup.string().required("Password is required"),
//     // role: Yup.string().required("Role is required"),
//   });

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={(e,values) => {
//         handleSubmit(e,values);
//         console.log(values, "valuesvaluesvaluesvalues");
//       }}
//     >
//       {({ errors, touched }) => (
//         <Form style={{ width: "100%" }}>
//           <Grid container spacing={2}>
//             <Grid
//               item
//               xs={12}
//               // sx={{ display: "flex", justifyContent: "center" }}
//             >
//               <CustomInputLogin
//                 name="email"
//                 label="Email"
//                 custPlaceholder="Enter Email"
//                 inputType="text"
//               />
//             </Grid>
//             <Grid
//               item
//               xs={12}
//               // sx={{ display: "flex", justifyContent: "center" }}
//             >
//               <CustomInputLogin
//                 name="password"
//                 label="Password"
//                 custPlaceholder="Enter Password"
//                 inputType="password"
//               />
//             </Grid>
//             {/* <Grid
//               item
//               xs={12}
//               // sx={{ display: "flex", justifyContent: "center" }}
//             >
//               <CustoDropDownRegister
//                 name="role"
//                 label="Role"
//                 custPlaceholder="Select a role"
//                 options={[
//                   { label: "Admin", value: "Admin" },
//                   { label: "Super Admin", value: "super_admin" },
//                   { label: "Management", value: "management" },
//                   { label: "Operator", value: "Operator" },
//                 ]}
//               />
//             </Grid> */}
//             <Grid
//               item
//               xs={12}
//               // sx={{ display: "flex", justifyContent: "center" }}
//             >
//               <Button
//                 fullWidth
//                 type="submit"
//                 variant="contained"
//                 sx={{
//                   borderRadius: 23,
//                   py: "7px",
//                   color: "white",
//                   backgroundColor: "#6B3C58",
//                   mt: 1,
//                 }}
//               >
//                 Sign In
//               </Button>
//             </Grid>
//           </Grid>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default SignInForm;



import React from "react";
import { Grid, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInputLogin from "../CustomInputLogin/CustomInputLogin";

const SignInForm = ({ handleSubmit }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit} // Directly pass handleSubmit
    >
      {({ isSubmitting }) => (
        <Form style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item size={{xs:12}}>
              <CustomInputLogin name="email" label="Email" custPlaceholder="Enter Email" inputType="text" />
            </Grid>
            <Grid item size={{xs:12}}>
              <CustomInputLogin name="password" label="Password" custPlaceholder="Enter Password" inputType="password" />
            </Grid>
            <Grid item size={{xs:12}}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  borderRadius: "8px",
                  py: "11px",
                  px: 3,
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  backgroundColor: "var(--main-color)",
                  textTransform: "none",
                  mt: 2,
                  mb: 1,
                  boxShadow: "0 4px 16px rgba(25, 118, 210, 0.25)",
                  transition: "all 0.3s ease",
                  '&:hover': {
                    backgroundColor: "var(--main-color)",
                    boxShadow: "0 6px 20px rgba(25, 118, 210, 0.35)",
                    transform: "translateY(-2px)",
                  },
                  '&:active': {
                    transform: "translateY(0px)",
                  },
                  '&:disabled': {
                    backgroundColor: "#BDBDBD",
                    color: "#757575",
                    boxShadow: "none",
                  },
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
