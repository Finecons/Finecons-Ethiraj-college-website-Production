import React, { useEffect, useRef } from "react";
import {
  Dialog,
  Typography,
  TextField,
  Container,
  Button,
  Box,
} from "@mui/material";
import { BsShieldFillExclamation } from "react-icons/bs";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../ReduxStore/actions";
import { setInitialStateOfCustomerSignupPost } from "../../ReduxStore/Slices/LoginSignup/CustomerSignupPost";
import { setInitialStateOfOtpVerification } from "../../ReduxStore/Slices/LoginSignup/OtpVerification/OtpVerification";
import { BiSolidCheckShield } from "react-icons/bi";
import "./OtpsendModal.css";
import { toast, ToastContainer } from "react-toastify";

// const OtpSchema = Yup.object().shape({
//     otp1: Yup.string().required("Required").length(1),
//     otp2: Yup.string().required("Required").length(1),
//     otp3: Yup.string().required("Required").length(1),
//     otp4: Yup.string().required("Required").length(1),
//     otp5: Yup.string().required("Required").length(1),
//     otp6: Yup.string().required("Required").length(1),
// });

const CustomerOtpFrgtPassdModel = ({
  open,
  onClose,
  onSave,
  heading,
  submittedValues,
  previewImage,
  onToggleForm,
  setPreviewImage,
  setIsLogin,
  setForgotPassword,
}) => {
  const dispatch = useDispatch();
  // const inputRefs = Array.from({ length: 6 }, () => {useRef(null)});
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    // Delay the focus operation to ensure the dialog is fully rendered
    if (open) {
      setTimeout(() => {
        if (inputRefs[0].current) {
          inputRefs[0].current.focus();
        }
      }, 100); // Wait for 100ms before setting focus
    }
  }, [open]); // Only run when 'open' changes

  const handleverifyotp = async (values) => {
    // console.log(,"submittedValues valuee");

    const otpCode = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;
    const data3 = {
      data: {
        email: submittedValues.email,
        otp: otpCode,
      },
      method: "post",
      apiName: "verifyOTP",
    };

    // dispatch(actions.CUSTOMERSIGNUPPOST(data3));
    const OtpVerify = await dispatch(actions.OTPVERIFICATION(data3));
    if (OtpVerify.payload.message === "Invalid OTP") {
      console.log("vallaasss");
      toast.error(OtpVerify.payload.message);
      // toast.success("Otp verify successfully")
    } else if (OtpVerify.payload.message === "OTP verified successfully") {
        console.log(submittedValues,"submittedValuessubmittedValues");
        
      const data4 = {
        data: submittedValues,
        method: "post",
        apiName: "resetPasswordForCustomer",
      };

      const resetPasswordForCustomer = await dispatch(
        actions.REASTPASSWORDFORCUSTOMER(data4)
      );

      if (
        resetPasswordForCustomer.payload.message ===
        "Password has been reset successfully."
      ) {
        console.log("OTP verified successfully");

        toast.success(resetPasswordForCustomer.payload.message);
        setTimeout(() => {
            setIsLogin(true);
        setForgotPassword(false);
        }, 2000);
        dispatch(setInitialStateOfOtpVerification());
      } else if (
        resetPasswordForCustomer.payload.message ===
        "Customer not found! Please sign up."
      ) {
        toast.error(resetPasswordForCustomer.payload.message);
        setTimeout(() => {
            setIsLogin(true);
        setForgotPassword(false);
        }, 2000);
        
      } else {
        toast.error(resetPasswordForCustomer.payload.message);
      }

      // setPreviewImage("")
      // setTimeout(() => onToggleForm(), 1500)
    }
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

  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowRight" && index < 3) {
      inputRefs[index + 1].current.focus(); // Move to the next input on right arrow
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs[index - 1].current.focus(); // Move to the previous input on left arrow
    }
  };

  const handleInputFocus = (e) => {
    // Ensuring the cursor remains after the character
    const input = e.target;
    const length = input.value.length;
    input.setSelectionRange(length, length); // Set the cursor position after the last character
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      sx={{ "& .MuiDialog-paper": { borderRadius: "20px", width: "320px" } }}
    >
      <Container className="container" sx={{}}>
        <header className="icon">
          <BiSolidCheckShield fontSize="large" color="primary" />
        </header>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontSize: "1.25rem",
            color: "rgb(51, 51, 51)",
            fontWeight: "600",
          }}
        >
          Enter OTP Code
        </Typography>
        <Formik
          initialValues={{
            otp1: "",
            otp2: "",
            otp3: "",
            otp4: "",
            otp5: "",
            otp6: "",
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
                    type="text" // Change type to text to remove arrows
                    inputMode="numeric" // Ensures only numeric keyboard on mobile
                    pattern="[0-9]*"
                    inputProps={{ maxLength: 1 }}
                    sx={{ width: "3rem", textAlign: "center" }}
                    error={
                      touched[`otp${index + 1}`] && !!errors[`otp${index + 1}`]
                    }
                    helperText={
                      touched[`otp${index + 1}`] && errors[`otp${index + 1}`]
                    }
                    inputRef={inputRefs[index]}
                    onChange={(e) => handleInputChange(e, index, setFieldValue)}
                    onKeyDown={(e) => handleKeyDown(e, index)} // Handle arrow keys
                    onFocus={(e) => handleInputFocus(e, index)} // Ensure cursor stays after character
                  />
                ))}
              </Box>

              <Button
                type="submit"
                variant="contained"
                // color="primary"
                fullWidth
                sx={{
                  mt: 2,
                  background: "var(--button-bgcolor)",
                  fontWeight: "600",
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
    </Dialog>
  );
};

export default CustomerOtpFrgtPassdModel;
