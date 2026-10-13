
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "../CustomInput/CustomInput";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import OtpsSendModal from "../OtpSendModal/OtpsSendModal";
import actions from "../../ReduxStore/actions";
import { useNavigate } from "react-router-dom";
import { setInitialStateOfresetPasswordForCustomer } from "../../ReduxStore/Slices/VerificationOtp/resetPasswordForCustomer";

const ForgotPasswordForm = ({ toggleSignIn }) => {
  const dispatch = useDispatch();

  // Redux state selectors
  const { EmailSendOtp } = useSelector((state) => state?.EmailSendOtp);
  const { EmailVerifyOtp } = useSelector((state) => state?.EmailVerifyOtp);
  const { resetPasswordForCustomer } = useSelector(
    (state) => state?.resetPasswordForCustomer
  );

  const navigate = useNavigate();
  // Component state
  const [isModalOpen, setModalOpen] = useState(false);
  const [submittedValues, setSubmittedValues] = useState("");

  // Modal handlers
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  // Formik initial values
  const initialValues = {
    email: "",
    password: "",
  };

  // Separate validation schemas
  const validationSchemaBeforeOTP = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const validationSchemaAfterOTP = Yup.object({
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      if (EmailVerifyOtp?.message === "OTP verified successfully") {
        const requestData = {
          data: {
            email: values.email,
            newPassword: values.password,
          },
          method: "post",
          apiName: "resetPasswordForCustomer",
        };

        const newPasswordData = await dispatch(
          actions.RESETPASSWORDFORCUSTOMER(requestData)
        );

        console.log(
          newPasswordData,
          "newPasswordDatanewPasswordDatanewPasswordData"
        );
        if (
          newPasswordData?.payload?.message ===
          "Password has been reset successfully."
        ) {
          dispatch(setInitialStateOfresetPasswordForCustomer());
          toast.success("Password has been reset successfully.");

          console.log("hejnjnknbkjbkjbky");

          // Await the state reset to ensure it completes before moving forward

          // Delay navigation to ensure user sees the success message
          setTimeout(() => {
            toggleSignIn();
          }, 1500);
        } else {
          toast.error(
            newPasswordData?.payload?.message || "Failed to reset the password."
          );
        }
      } else {
        const requestData = {
          data: { email: values.email },
          method: "post",
          apiName: "sendOTP",
        };

        const OtpSendData = await dispatch(actions.EMAILSENDOTP(requestData));

        if (OtpSendData?.payload?.message === "OTP sent successfully!") {
          toast.success("OTP sent successfully.");
          setSubmittedValues(values.email); // Store email in the state
          handleOpenModal();
        } else {
          toast.error("Please enter a valid email.");
        }
      }
    } catch (error) {
      console.error("Error during handleSubmit:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={
          EmailVerifyOtp?.message === "OTP verified successfully"
            ? validationSchemaAfterOTP
            : validationSchemaBeforeOTP
        }
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form style={{ width: "100%" }}>
            <Box mb={2}>
              {/* Email Input */}
              {EmailVerifyOtp?.message !== "OTP verified successfully" && (
                <CustomInput
                  name="email"
                  label="Email"
                  custPlaceholder="Enter Email"
                  inputType="email"
                />
              )}

              {/* Password Input */}
              {EmailVerifyOtp?.message === "OTP verified successfully" && (
                <>
                  <CustomInput
                    name="email"
                    label="Email"
                    custPlaceholder="Enter Email"
                    inputType="text"
                    value={values.email}
                    readOnly
                  />
                  <CustomInput
                    name="password"
                    label="New password"
                    custPlaceholder="Enter New Password"
                    inputType="password"
                  />
                </>
              )}
            </Box>

            {/* Submit Button */}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: 23,
                py: "7px",
                color: "white",
                backgroundColor: "#C38F51",
                "&:hover": {
                  backgroundColor: "#B37E42",
                },
              }}
              aria-label="Submit"
            >
              {EmailVerifyOtp?.message === "OTP verified successfully"
                ? "Reset password"
                : "Send OTP"}
            </Button>

            {/* OTP Modal */}
            <OtpsSendModal
              open={isModalOpen}
              onClose={handleCloseModal}
              submittedValues={submittedValues}
            />

            {/* Back Button */}
            {toggleSignIn && (
              <Typography
                variant="body1"
                onClick={toggleSignIn}
                sx={{
                  mt: 2,
                  textAlign: "center",
                  cursor: "pointer",
                  color: "#C38F51",
                }}
              >
                Go Back
              </Typography>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ForgotPasswordForm;
