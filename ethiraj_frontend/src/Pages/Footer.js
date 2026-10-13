import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Link,
} from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import logo from "../Assets/Footer_logo.png";
import CustomInputLogin from "../Components/CustomInputLogin/CustomInputLogin";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import actions from "../ReduxStore/actions";
import { useDispatch } from "react-redux";

const contactValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const quickLinks = [
  { text: "Terms & Conditions", href: "#" },
  { text: "Privacy Policy", href: "#" },
  { text: "Harassment / Discrimination", href: "#" },
  { text: "Tenders", href: "#" },
  { text: "Academic Calendar", href: "/academics/academiccalendar" },
  { text: "Results", href: "#" },
  { text: "Campus Directory", href: "#" },
  { text: "Grievance Cell", href: "#" },
];

export default function Footer() {
  const dispatch = useDispatch();
  const handleContactSubmit = async (values, { resetForm }) => {
    console.log(values,"values");

    const data1 = {
      data: {
        // full_name: "test",
        email: values.email,
        // country: "India",
        // phone_number: "1234567890",
        message: values.message,
      },
      method: "Post",
      apiName: `postContactUsForm`,
    };
    const responseData = await dispatch(actions.POSTCONTACTUSFORM(data1));
    // API call here
    // postContactUsForm
    resetForm();
  };

  return (
    <Box sx={{ bgcolor: "#5D5A84", color: "white" }}>
      {/* --- Main Footer Section --- */}
      <Box
        sx={{
          // maxWidth: "1400px",
          // mx: "auto",
          width: "100%",
          p: { xs: "10px", sm: "18px", md: "30px" },
          // pt: { xs: 3, md: 4 },
          // pb: { xs: 1, md: 2 },
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{
            width: "100%",
          }}
        >
          <Grid
            container
            alignItems="flex-start"
            justifyContent="space-between"
            sx={{
              width: "100%",
            }}
          >
            {/* Left: Logo & Contact */}
            <Grid
              item
              size={{ md: 4 }}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Box display="flex" alignItems="flex-start" gap={2}>
                <Box>
                  <Box
                    component="img"
                    src={logo}
                    alt="Ethiraj College Logo"
                    sx={{ width: "90%", height: 84, mt: 0.5, mb: "28px" }}
                  />
                  <Typography
                    variant="typographyFooterHeading2Text"
                    sx={{ mb: "8px" }}
                  >
                    Address:
                  </Typography>
                  <Typography
                    variant="typographyFooterText"
                    sx={{ mb: "24px" }}
                  >
                    70, Ethiraj Salai, Egmore
                    <br />
                    Chennai 600008, Tamilnadu, India
                  </Typography>
                  <Typography
                    variant="typographyFooterHeading2Text"
                    sx={{ mb: "8px" }}
                  >
                    Phone
                  </Typography>
                  <Typography
                    variant="typographyFooterText"
                    sx={{ mb: "24px" }}
                  >
                    +(91)-44-2827 9189
                  </Typography>
                  <Typography
                    variant="typographyFooterHeading2Text"
                    sx={{ mb: "8px" }}
                  >
                    Email
                  </Typography>
                  <Typography variant="typographyFooterText">
                    principal@ethirajcollege.edu.in
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Center: Quick Links & Socials */}
            <Grid
              item
              size={{ md: 4 }}
              sx={{ display: { xs: "none", md: "flex" } }}
              flexDirection="column"
              alignItems="flex-start"
            >
              <Typography
                variant="typographyFooterHeadingText"
                sx={{ mb: "47px" }}
              >
                Quick Links
              </Typography>
              <Box
                display="flex"
                width="100%"
                gap={4}
                justifyContent="flex-start"
              >
                <Box>
                  {quickLinks.slice(0, 4).map((link, i) => (
                    <Typography
                      component="a"
                      variant="typographyFooterText"
                      key={i}
                      href={link.href}
                      color="inherit"
                      display="block"
                      sx={{
                        textDecoration: "none",
                        mb: "24px",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "white",
                          opacity: 0.8,
                        },
                      }}
                    >
                      {link.text}
                    </Typography>
                  ))}
                </Box>
                <Box>
                  {quickLinks.slice(4).map((link, i) => (
                    <Typography
                      component="a"
                      variant="typographyFooterText"
                      key={i}
                      href={link.href}
                      color="inherit"
                      display="block"
                      sx={{
                        textDecoration: "none",
                        mb: "24px",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "white",
                          opacity: 0.8,
                        },
                      }}
                    >
                      {link.text}
                    </Typography>
                  ))}
                </Box>
              </Box>
              <Box display="flex" alignItems="center" mt={3.2}>
                <Typography variant="typographyFooterHeadingText">
                  Follow us on
                </Typography>
                <IconButton
                  color="inherit"
                  size="small"
                  component="a"
                  href="https://www.instagram.com/ethiraj_college_for_women/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram fontSize="small" />
                </IconButton>
                <IconButton
                  color="inherit"
                  size="small"
                  component="a"
                  href="https://www.facebook.com/profile.php?id=61572290288364"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook fontSize="small" />
                </IconButton>
                <IconButton
                  color="inherit"
                  size="small"
                  component="a"
                  href="https://x.com/ECWChennai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter fontSize="small" />
                </IconButton>
              </Box>
            </Grid>

            {/* Right: Contact Form */}
            <Grid
              item
              size={{ md: 4 }}
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Box width="100%">
                <Typography
                  variant="typographyFooterHeadingText"
                  sx={{ mb: "19px" }}
                >
                  Can’t find what you’re looking for?
                </Typography>
                <Formik
                  initialValues={{
                    email: "",
                    message: "",
                  }}
                  validationSchema={contactValidationSchema}
                  onSubmit={handleContactSubmit}
                >
                  {({
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                  }) => (
                    <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
                      <CustomInputLogin
                        label="Enter email ID"
                        name="email"
                        placeholder="Enter email ID"
                      />

                      <CustomInputLogin
                        label="Enter message"
                        name="message"
                        placeholder="Write to us ..."
                        inputType="textarea"
                      />
                      <Button
                        type="submit"
                        variant="outlined"
                        fullWidth
                        sx={{
                          borderRadius: "22px",
                          borderColor: "white",
                          color: "white",
                          fontSize: 14,
                          py: 1,
                          "&:hover": {
                            bgcolor: "rgba(255,255,255,0.1)",
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Grid>
          </Grid>

          {/* --- Tablet Layout (md: none, sm: flex) --- */}
          <Grid
            item
            xs={12}
            sm={12}
            md={0}
            lg={0}
            sx={{
              display: { xs: "none", sm: "flex", md: "none" },
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "stretch" },
              gap: 4,
              width: "100%",
            }}
          >
            {/* Left: logo/info/contact form as column */}
            <Box sx={{ flex: 1, minWidth: 260 }}>
              <Box display="flex" gap={2} mb={1}>
                <Box
                  component="img"
                  src={logo}
                  alt="Ethiraj College Logo"
                  sx={{ width: "90%", height: 84, mt: 0.5, mb: "28px" }}
                />
              </Box>
              <Box>
                <Typography
                  variant="typographyFooterHeading2Text"
                  sx={{ mb: "8px" }}
                >
                  Address:
                </Typography>
                <Typography variant="typographyFooterText" sx={{ mb: "28px" }}>
                  70, Ethiraj Salai, Egmore
                  <br />
                  Chennai 600008, Tamilnadu, India
                </Typography>
                <Typography
                  variant="typographyFooterHeading2Text"
                  sx={{ mb: "8px" }}
                >
                  Phone
                </Typography>
                <Typography variant="typographyFooterText" sx={{ mb: "28px" }}>
                  + (91)-44-2827 9189
                </Typography>
                <Typography
                  variant="typographyFooterHeading2Text"
                  sx={{ mb: "8px" }}
                >
                  Email
                </Typography>
                <Typography variant="typographyFooterText" sx={{ mb: "51px" }}>
                  principal@ethirajcollege.edu.in
                </Typography>
              </Box>
              <Box mt={4}>
                <Typography
                  variant="typographyFooterHeadingText"
                  sx={{ mb: "19px" }}
                >
                  Can’t find what you’re looking for?
                </Typography>
                    <Formik
                  initialValues={{
                    email: "",
                    message: "",
                  }}
                  validationSchema={contactValidationSchema}
                  onSubmit={handleContactSubmit}
                >
                  {({
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                  }) => (
                    <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
                      <CustomInputLogin
                        label="Enter email ID"
                        name="email"
                        placeholder="Enter email ID"
                      />

                      <CustomInputLogin
                        label="Enter message"
                        name="message"
                        placeholder="Write to us ..."
                        inputType="textarea"
                      />
                      <Button
                        type="submit"
                        variant="outlined"
                        fullWidth
                        sx={{
                          borderRadius: "22px",
                          borderColor: "white",
                          color: "white",
                          fontSize: 14,
                          py: 1,
                          "&:hover": {
                            bgcolor: "rgba(255,255,255,0.1)",
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Box>
            {/* Right: Quick Links/social */}
            <Box sx={{ flex: 1, pl: { sm: 4 } }}>
              <Typography
                variant="typographyFooterHeadingText"
                sx={{ mb: "47px" }}
              >
                Quick Links
              </Typography>
              <Grid container gap={2}>
                <Grid item xs={6}>
                  <Box>
                    {quickLinks.slice(0, 4).map((link, i) => (
                      <Typography
                        component="a"
                        variant="typographyFooterText"
                        key={i}
                        href={link.href}
                        color="inherit"
                        display="block"
                        sx={{
                          textDecoration: "none",
                          mb: "24px",
                          "&:hover": {
                            textDecoration: "underline",
                            color: "white",
                            opacity: 0.8,
                          },
                        }}
                      >
                        {link.text}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    {quickLinks.slice(4).map((link, i) => (
                      <Typography
                        component="a"
                        variant="typographyFooterText"
                        key={i}
                        href={link.href}
                        color="inherit"
                        display="block"
                        sx={{
                          textDecoration: "none",
                          mb: "24px",
                          "&:hover": {
                            textDecoration: "underline",
                            color: "white",
                            opacity: 0.8,
                          },
                        }}
                      >
                        {link.text}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
              </Grid>
              <Box mt={"58px"}>
                <Typography variant="typographyFooterHeadingText">
                  Follow us on
                </Typography>
                <IconButton
                  color="inherit"
                  component="a"
                  href="https://www.instagram.com/ethiraj_college_for_women/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  color="inherit"
                  component="a"
                  href="https://www.facebook.com/profile.php?id=61572290288364"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  color="inherit"
                  component="a"
                  href="https://x.com/ECWChennai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* --- Mobile Layout --- */}
          <Grid
            item
            xs={12}
            sx={{
              display: { xs: "block", sm: "none" },
              width: "100%",
            }}
          >
            {/* Logo */}
            <Box display="flex" alignItems="flex-start" mb={"60px"} gap={2}>
              <Box
                component="img"
                src={logo}
                alt="Ethiraj College Logo"
                sx={{ width: "95%", height: 84, mt: 0.5 }}
              />
            </Box>
            {/* Address Info */}
            <Box mt={"28px"} mb={"37px"}>
              <Typography
                variant="typographyFooterHeading2Text"
                sx={{ mb: "8px" }}
              >
                Address:
              </Typography>
              <Typography variant="typographyFooterText" sx={{ mb: "28px" }}>
                70, Ethiraj Salai, Egmore
                <br />
                Chennai 600008, Tamilnadu, India
              </Typography>
              <Typography
                variant="typographyFooterHeading2Text"
                sx={{ mb: "8px" }}
              >
                Phone
              </Typography>
              <Typography variant="typographyFooterText" sx={{ mb: "28px" }}>
                + (91)-44-2827 9189
              </Typography>
              <Typography
                variant="typographyFooterHeading2Text"
                sx={{ mb: "8px" }}
              >
                Email
              </Typography>
              <Typography variant="typographyFooterText" sx={{ mb: "28px" }}>
                principal@ethirajcollege.edu.in
              </Typography>
            </Box>
            {/* Quick Links */}
            <Typography
              variant="typographyFooterHeadingText"
              sx={{ mb: "32px" }}
            >
              Quick Links
            </Typography>
            <Grid container gap={3}>
              <Grid item xs={6}>
                <Box>
                  {quickLinks.slice(0, 4).map((link, i) => (
                    <Typography
                      component="a"
                      variant="typographyFooterText"
                      key={i}
                      href={link.href}
                      color="inherit"
                      display="block"
                      sx={{
                        textDecoration: "none",
                        mb: "24px",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "white",
                          opacity: 0.8,
                        },
                      }}
                    >
                      {link.text}
                    </Typography>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  {quickLinks.slice(4).map((link, i) => (
                    <Typography
                      component="a"
                      variant="typographyFooterText"
                      key={i}
                      href={link.href}
                      color="inherit"
                      display="block"
                      sx={{
                        textDecoration: "none",
                        mb: "24px",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "white",
                          opacity: 0.8,
                        },
                      }}
                    >
                      {link.text}
                    </Typography>
                  ))}
                </Box>
              </Grid>
            </Grid>
            {/* Contact */}
            <Box mt={"37px"} mb={"37px"}>
              <Typography
                variant="typographyFooterHeadingText"
                sx={{ mb: "24px" }}
              >
                Can’t find what you’re looking for?
              </Typography>
               <Formik
                  initialValues={{
                    email: "",
                    message: "",
                  }}
                  validationSchema={contactValidationSchema}
                  onSubmit={handleContactSubmit}
                >
                  {({
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                  }) => (
                    <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
                      <CustomInputLogin
                        label="Enter email ID"
                        name="email"
                        inputType="email"
                        placeholder="Enter email ID"
                      />

                      <CustomInputLogin
                        label="Enter message"
                        name="message"
                        inputType="textarea"
                        placeholder="Write to us ..."
                      />
                      <Button
                        type="submit"
                        variant="outlined"
                        fullWidth
                        sx={{
                          borderRadius: "22px",
                          borderColor: "white",
                          color: "white",
                          fontSize: 14,
                          py: 1,
                          "&:hover": {
                            bgcolor: "rgba(255,255,255,0.1)",
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
             
            </Box>

            {/* Social */}
            <Box display="flex" alignItems="center" mb={"37px"}>
              <Typography variant="typographyFooterHeadingText">
                Follow us on
              </Typography>
              <IconButton
                color="inherit"
                component="a"
                href="https://www.instagram.com/ethiraj_college_for_women/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="inherit"
                component="a"
                href="https://www.facebook.com/profile.php?id=61572290288364"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                component="a"
                href="https://x.com/ECWChennai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* --- Footer Bottom Copyright --- */}
      <Box
        sx={{
          py: 1,
          px: 0,
          bgcolor: "rgba(57, 55, 97, 0.8)",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontStyle: "normal", // "Regular" in Figma = "normal" in CSS
            fontSize: "14px",
            lineHeight: "16px",
            letterSpacing: "0",
            color: "white",
            textAlign: "center",
          }}
        >
          Copyrights @ ethiraj college 2025
        </Typography>
      </Box>
    </Box>
  );
}
