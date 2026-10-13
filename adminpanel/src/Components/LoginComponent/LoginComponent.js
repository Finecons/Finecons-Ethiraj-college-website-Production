
import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import SignInForm from './SignInForm'; // Import the SignInForm component
import ForgotPasswordForm from './ForgotPasswordForm'; // Import the ForgotPasswordForm component
import actions from '../../ReduxStore/actions';
import logo_login_image from "../../Assets/Login Logo.png";
import login_bgImage from "../../Assets/login_bgImage.png";

const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleGoRegistrationPage = () => {
    navigate("/register");
  };
  const { customerLogin } = useSelector((state) => state?.customerLogin);

  const handleSignInSubmit = async (values) => {
    console.log(values, "loginvalues");

    const data1 = {
      data: values,
      method: "post",
      apiName: "login/customer"
    };
    const loginFetch = await dispatch(actions.CUSTOMERLOGIN(data1));

    console.log(loginFetch, "loginFetch");

    if (loginFetch?.payload?.message === "Customer logged in successfully") {
      sessionStorage.setItem("sessioncustomer_id", loginFetch?.payload?.data.customer_id);
      sessionStorage.setItem("sessionFirstName", loginFetch?.payload?.data.first_name);
      toast.success("Login successfully");

      setTimeout(() => {
        navigate("/");
      }, 2500);
    } else if (loginFetch?.payload?.message === "Invalid password.") {
      toast.error("Invalid password.");
    } else if (loginFetch?.payload?.message === "Customer not found!") {
      toast.error("Customer not found!");
    } else {
      toast.warning(loginFetch?.payload?.message);
    }
  };

  const handleForgotPasswordSubmit = (values) => {
    console.log(values, "forgot password values");
    toast.success("Password reset link sent!");
    setIsForgotPassword(false);
  };

  const toggleForgotPassword = () => setIsForgotPassword(true);
  const toggleSignIn = () => setIsForgotPassword(false);

  return (
    <Grid container sx={{ boxShadow: 3, height: '100vh' }}>
      <Grid
        item
        md={7}
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
        <img src={logo_login_image} alt="logo" width="213px" height="61px" />
        <Box display="flex" justifyContent="center" flexWrap="wrap" mt={2}>
          <Box sx={{ color: "#fff" }}>
            <Typography variant="h1" textAlign="center" sx={{ mb: "1px" }}>
              The Best Gold
            </Typography>
            <Typography variant="h2" textAlign="center" sx={{ mb: 2 }}>
              Staking Company
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{
                maxWidth: "500px",
                color: "#b0aaaa",
                opacity: 1
              }}
            >
              We are committed to providing our customers with exceptional service while offering our employees the best training.
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
          background: '#FFFFFF',
          width: '100%',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 350, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" textAlign="center" sx={{ fontSize: "30px", fontWeight: "600", mb: 4 }}>
            {isForgotPassword ? "Forgot Password" : "Sign In"}
          </Typography>

          {isForgotPassword ? (
            <ForgotPasswordForm handleSubmit={handleForgotPasswordSubmit} toggleSignIn={toggleSignIn} />
          ) : (
            <SignInForm handleSubmit={handleSignInSubmit} toggleForgotPassword={toggleForgotPassword} />
          )}
        </Box>
      </Grid>

      <ToastContainer position="top-right" autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </Grid>
  );
};

export default LoginComponent;
