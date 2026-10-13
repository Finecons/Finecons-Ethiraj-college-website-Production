import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomBannerSection from "../../Components/CustomBannerSection/CustomBannerSection";
import image from "../../Assets/admissionsBanner.png";
import quickImage from "../../Assets/quicklinkImage.jpg";
import pgProspectus from "../../Assets/Admissions/PG_Prospectus 2026 -2027_Mam (1).pdf";
import mcaProspectus from "../../Assets/Admissions/_ MCA Prospectus 2026_mam.pdf";
import ugProspectus from "../../Assets/Admissions/_UG_Prospectus 2026 -2027_Mam (1).pdf";
import mbaProspectus from "../../Assets/Admissions/MBA Prospectus 2026_Mam (1).pdf";
import faq from "../../Assets/Admissions/Admissions-FAQ.pdf";

const policySections = [
  {
    title: "Eligibility for Pre-Registration",
    points: [
      "PG Applicants: Students who have completed an Undergraduate degree or are awaiting final semester results.",
    ],
  },
  {
    title: "Pre-Registration Process",
    points: [
      "Candidates must fill the Pre-Registration Form available on the official website.",
      "Required details may include:",
    ],
    subPoints: [
      "Name of the candidate",
      "Date of Birth",
      "Mobile Number and Email ID",
      "Programme of Interest",
      "Academic details (basic)",
    ],
  },
  {
    title: "Verification and Communication",
    points: [
      "All communication will be sent to the registered email ID and mobile number.",
      "Pre-registration does not guarantee admission.",
      "Candidates will be notified when the full application form is open.",
    ],
  },
  {
    title: "Transition to Full Application",
    points: [
      "Pre-registered candidates must:",
    ],
    subPoints: [
      "Log in using registered credentials",
      "Complete the full application form",
      "Upload required documents",
      "Pay the prescribed application fee",
    ],
  },
  {
    title: "Validity of Pre-Registration",
    points: [
      "Pre-registration is valid only for the current admission cycle (academic year).",
      "It will automatically expire after the admission cycle closes.",
    ],
  },
  {
    title: "Cancellation / Modification",
    points: [
      "Candidates may update or correct their details before final submission of the full application.",
      "The institution reserves the right to cancel pre-registration if incorrect information is provided.",
    ],
  },
  {
    title: "Eligibility",
    points: ["A minimum of 60% marks is required for pre-registration."],
  },
  {
    title: "Payment Details",
    points: [
      "An amount of Rs. 5,000 as pre-registration fee may be paid.",
      "If the candidate is selected for the course, this amount will be adjusted towards the college fees.",
    ],
  },
  {
    title: "Refund Policy",
    points: [
      "The pre-registration amount of Rs. 5,000 is non-refundable if the candidate does not meet the required criteria.",
    ],
  },
];
 const quickLinks = [
    { label: "UG Prospectus 26-27", to: ugProspectus, isPdf: true },
    { label: "PG Prospectus 26-27", to: pgProspectus, isPdf: true },
    { label: "MBA Prospectus 26-27", to: mbaProspectus, isPdf: true },
    { label: "MCA Prospectus 26-27", to: mcaProspectus, isPdf: true },
    { label: "Pay Fees", to: "https://ethiraj.ibossems.com/", external: true },
    { label: "Eligibility Criteria", to: "/admissions/eligibility-criteria" },
    { label: "Track Application Status", to: "https://ethiraj.ibossems.com/default/onlineappln/applnsearch", external: true },
    { label: "How to Apply", to: "/admissions/how-to-apply" },
    // { label: "Merit List", to: "/admissions/merit-list" },
    { label: "Admission Policy", to: "/admissions/policy" },
    { label: "FAQ", to: faq, isPdf: true },
    { label: "Transfer & Refunds", to: "https://ethiraj.ibossems.com/default/onlineappln/applntransfer", external: true },
    { label: "Student Login", to: "https://ethiraj.ibossems.com/", external: true },

  ];


const leftQuickLinks = quickLinks.filter((_, index) => index % 2 === 0);
const rightQuickLinks = quickLinks.filter((_, index) => index % 2 !== 0);

const PreRegistrationPolicyPGSS = () => {
  const navigate = useNavigate();
  const [isDeclarationChecked, setIsDeclarationChecked] = useState(false);

  const bannerDatas = {
    image: image,
    breadCrumbsData: [
      { name: "Home", to: "/" },
      { name: "Admissions", to: "/admissions" },
      { name: "Admission Policy", to: "/admissions/policy" },
      { name: "Pre - Registration Policy PG (SS)" },
    ],
    title: "Pre - Registration Policy - PG (SS)",
  };

 
  const handleNavigation = (linkItem) => {
    if (!linkItem || !linkItem.to || linkItem.to === "#") {
      return;
    }
    
   if (linkItem.isPdf || linkItem.external) {
      window.open(linkItem.to, "_blank");
    } else {
      navigate(linkItem.to);
    }
  };

  return (
    <Box>
      <CustomBannerSection bannerDatas={bannerDatas} />

      <Box
        sx={{
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          py: { lg: "64px", md: "56px", xs: "24px", sm: "44px" },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="headingTextNewsreaderMedium" sx={{ color: "#2f2f3a", mb: 3 }}>
              Pre - Registration Policy - PG (SS)
            </Typography>

            <Stack spacing={3}>
              {policySections.map((section) => (
                <Box key={section.title}>
                  <Typography
                    variant="subHeadingTextInterMedium"
                    sx={{ color: "#6B3C58", fontWeight: 700, mb: 1.5 }}
                  >
                    {section.title}
                  </Typography>

                  <Stack spacing={1.1}>
                    {section.points.map((point, index) => (
                      <Box key={`${section.title}-${index}`} sx={{ display: "flex", gap: 1.5 }}>
                        <Box
                          sx={{
                            minWidth: 24,
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            backgroundColor: "#ecdff0",
                            color: "#7d587f",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "12px",
                            fontWeight: 700,
                            mt: "2px",
                          }}
                        >
                          {index + 1}
                        </Box>
                        <Typography variant="typographyBodyInterNormal" sx={{ color: "#5b5f67" }}>
                          {point}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  {!!section.subPoints?.length && (
                    <Box sx={{ pl: { xs: 4.5, md: 5 }, pt: 0.8 }}>
                      {section.subPoints.map((subPoint) => (
                        <Typography
                          key={subPoint}
                          variant="bodyTextInterRegular"
                          sx={{ color: "#5b5f67", lineHeight: 1.5 }}
                        >
                          • {subPoint}
                        </Typography>
                      ))}
                    </Box>
                  )}

                  <Divider sx={{ mt: 2.2, borderColor: "#b8bcc8" }} />
                </Box>
              ))}
            </Stack>

            <FormControlLabel
              sx={{ mt: 3 }}
              control={
                <Checkbox
                  checked={isDeclarationChecked}
                  onChange={(event) => setIsDeclarationChecked(event.target.checked)}
                  sx={{ color: "#6B3C58" }}
                />
              }
              label={
                <Typography variant="bodyTextInterRegular" sx={{ color: "#33373f" }}>
                  I have carefully read the prospectus, instructions, and eligibility criteria for applying to
                  the programmes offered by the College. I understand and agree to abide by all the
                  instructions and guidelines for applying for admission to Ethiraj College for Women.
                </Typography>
              }
            />

            <Button
                      variant="contained"
                      disabled={!isDeclarationChecked}
                      onClick={() => handleNavigation({ to: "/admissions/applynow" })}
                      sx={{
                        backgroundColor: "#5f5b84",
                        color: "#ffffff",
                        textTransform: "none",
                        borderRadius: "24px",
                        px: 4,
                        minWidth: "145px",
                        fontSize: "14px",
                        fontWeight: 500,
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: "#4f4a75",
                          boxShadow: "none",
                        },
                        "&.Mui-disabled": {
                          backgroundColor: "#b8b6cc",
                          color: "#ffffff",
                        },
                      }}
                    >
                Apply Now
                    </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component="img"
              src={quickImage}
              alt="Pre-registration"
              sx={{
                width: "100%",
                borderRadius: "18px",
                objectFit: "cover",
                minHeight: { xs: "280px", md: "400px" },
                maxHeight: { md: "460px" },
              }}
            />

            <Box sx={{ mt: { xs: 4, md: 6 } }}>
              <Typography
                variant="headingTextNewsreaderMedium"
                sx={{
                  color: "#2f2f3a",
                  mb: 2,
                }}
              >
                Quick Links
              </Typography>

              <Grid container spacing={{ xs: 1.8, md: 2 }}>
                <Grid size={{ xs: 6 }}>
                  <Stack spacing={{ xs: 1.5, md: 2 }}>
                    {leftQuickLinks.map((linkItem) => (
                      <Box
                        key={linkItem.label}
                       onClick={() => handleNavigation(linkItem)}
                          sx={{
                            color: "#2d5fcb",
                            fontSize: "16px",
                            fontWeight: 500,
                            lineHeight: 1.2,
                            cursor: "pointer",
                            textDecoration: "underline",
                            "&:hover": {
                              opacity: 0.8,
                            },
                          }}
                      >
                        <Link underline="always" color="inherit" component="span">
                          <Typography variant="typographyBodyInterNormal">{linkItem.label}</Typography>
                        </Link>
                      </Box>
                    ))}
                  </Stack>
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Stack spacing={{ xs: 1.5, md: 2 }}>
                    {rightQuickLinks.map((linkItem) => (
                      <Box
                        key={linkItem.label}
                    onClick={() => handleNavigation(linkItem)}
                          sx={{
                            color: "#2d5fcb",
                            fontSize: "16px",
                            fontWeight: 500,
                            lineHeight: 1.2,
                            cursor: "pointer",
                            textDecoration: "underline",
                            "&:hover": {
                              opacity: 0.8,
                            },
                          }}
                      >
                        <Link underline="always" color="inherit" component="span">
                          <Typography variant="typographyBodyInterNormal">{linkItem.label}</Typography>
                        </Link>
                      </Box>
                    ))}
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PreRegistrationPolicyPGSS;
