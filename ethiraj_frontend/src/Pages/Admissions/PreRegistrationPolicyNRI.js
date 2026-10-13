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
      "Applicants must qualify under the Non-Resident Indian (NRI) category as per government norms.",
      "Valid proof of NRI status is mandatory (passport, visa, sponsor details, etc.).",
    ],
  },
  {
    title: "Pre-Registration Process",
    points: [
      "Candidates may complete pre-registration online before the official admission process begins.",
      "Pre-registration is only for expression of interest and does not guarantee admission.",
      "Applicants must provide",
    ],
    subPoints: [
      "Valid email ID and mobile number",
      "Basic academic details",
      "Preferred programme(s)",
    ],
  },
  {
    title: "Application Process",
    points: [
      "Pre-registered candidates must",
      "The same email ID and mobile number used during pre-registration must be used.",
    ],
    subPoints: [
      "Submit a formal application during the official admission period",
      "Upload all required documents",
      "Pay the prescribed application fee",
    ],
  },
  {
    title: "Admission Criteria",
    points: [
      "Admission will be based on",
      "Pre-registration does not provide priority or reservation unless explicitly stated.",
    ],
    subPoints: [
      "Academic merit",
      "Availability of seats under NRI quota",
      "Institutional guidelines",
    ],
  },
  {
    title: "Fee Structure",
    points: [
      "Selected candidates under NRI category must pay",
      "Fees once paid are subject to the institution's refund policy.",
    ],
    subPoints: [
      "NRI tuition fees (as prescribed by the institution)",
      "Fees may be payable in foreign currency or INR equivalent",
    ],
  },
  {
    title: "Document Verification",
    points: [
      "Applicants must submit",
      "Admission is subject to verification of all documents.",
    ],
    subPoints: [
      "Passport copy (student and sponsor, if applicable)",
      "Visa or residence proof",
      "Relationship certificate (if sponsored)",
      "Academic certificates",
      "Any other documents required by the institution",
    ],
  },
  {
    title: "Communication",
    points: [
      "All updates will be sent to the registered email ID and mobile number.",
      "Applicants are responsible for checking updates regularly.",
    ],
  },
  {
    title: "Cancellation / Withdrawal",
    points: ["If a candidate withdraws", "Admission may be cancelled if"],
    subPoints: [
      "Refund (if applicable) will be processed as per institutional norms",
      "False information is provided",
      "Documents are invalid or incomplete",
    ],
  },
  {
    title: "General Conditions",
    points: [
      "The institution reserves the right to",
      "All decisions of the institution will be final and binding.",
    ],
    subPoints: ["Modify admission policies", "Cancel or revise NRI seats"],
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

const PreRegistrationPolicyNRI = () => {
  const navigate = useNavigate();
  const [isDeclarationChecked, setIsDeclarationChecked] = useState(false);

  const bannerDatas = {
    image: image,
    breadCrumbsData: [
      { name: "Home", to: "/" },
      { name: "Admissions", to: "/admissions" },
      { name: "Admission Policy", to: "/admissions/policy" },
      { name: "Pre - Registration Policy NRI" },
    ],
    title: "Pre - Registration Policy - NRI Applicants",
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
            <Typography
              variant="headingTextNewsreaderMedium"
              sx={{ color: "#2f2f3a", mb: 3 }}
            >
              Pre - Registration Policy - NRI Applicants
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
                      <Box
                        key={`${section.title}-${index}`}
                        sx={{ display: "flex", gap: 1.5 }}
                      >
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
                        <Typography variant="typographyBodyInterNormal">
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
                          sx={{ lineHeight: 1.5 }}
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

            {/* <FormControlLabel
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
                  
                </Typography>
              }
            /> */}

            <Box
              sx={{
                display: "flex",
                gap: 1.2,
                alignItems: "flex-start",
                mb: 2.5,
              }}
            >
              <Checkbox
                checked={isDeclarationChecked}
                onChange={(event) =>
                  setIsDeclarationChecked(event.target.checked)
                }
                sx={{
                  p: 0,
                  mt: "2px",
                  color: "#1f1f22",
                  "&.Mui-checked": {
                    color: "#1f1f22",
                  },
                }}
              />

              <Typography
                variant="typographyBodyInterNormal"
                sx={{ maxWidth: "700px" }}
              >
                I have carefully read the prospectus, instructions, and
                eligibility criteria for applying to the programmes offered by
                the College. I understand and agree to abide by all the
                instructions and guidelines for applying for admission to
                Ethiraj College for Women.
              </Typography>
            </Box>
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
              alt="Pre-registration NRI"
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
                sx={{ color: "#2f2f3a", mb: 2 }}
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
                        <Link
                          underline="always"
                          color="inherit"
                          component="span"
                        >
                          <Typography variant="typographyBodyInterNormal">
                            {linkItem.label}
                          </Typography>
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
                        <Link
                          underline="always"
                          color="inherit"
                          component="span"
                        >
                          <Typography variant="typographyBodyInterNormal">
                            {linkItem.label}
                          </Typography>
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

export default PreRegistrationPolicyNRI;
