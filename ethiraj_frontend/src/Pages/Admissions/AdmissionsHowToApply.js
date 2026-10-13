import React, { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  Link,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import CustomBannerSection from "../../Components/CustomBannerSection/CustomBannerSection";
import SectionAccordion from "./SectionAccordion";
import { useNavigate } from "react-router-dom";
import admissionsImage from "../../Assets/admissionsBanner.png";
import quickLinkImage from "../../Assets/quicklinkImagePolicy.jpg";
import pgProspectus from "../../Assets/Admissions/PG_Prospectus 2026 -2027_Mam (1).pdf";
import mcaProspectus from "../../Assets/Admissions/_ MCA Prospectus 2026_mam.pdf";
import ugProspectus from "../../Assets/Admissions/_UG_Prospectus 2026 -2027_Mam (1).pdf";
import mbaProspectus from "../../Assets/Admissions/MBA Prospectus 2026_Mam (1).pdf";
import faq from "../../Assets/Admissions/Admissions-FAQ.pdf";

const AdmissionsHowToApply = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");

  const bannerDatas = {
    image: admissionsImage,
    breadCrumbsData: [
      { name: "Home", to: "/" },
      { name: "Admissions", to: "/admissions" },
      { name: "How to Apply" },
    ],
    title: "How to Apply",
  };

  const languageContent = {
    en: {
      stepsTitle: "Steps to Apply for Students",
      guidelinesTitle: "Refer Admissions Guidelines",
      guidelinesContent:
        "View our official guidelines to stay informed about admissions, course requirements, college policies, and important procedures. Our comprehensive documents are designed to provide you with clear, accurate, and up-to-date information at every step of your journey.",
      guidelineLinks: [
        {
          linkText: "Refer Documents",
          link: "/admissions/policy",
        },
        {
          linkText: "Watch our Videos",
          link: "https://www.youtube.com/",
          external: true,
        },
      ],

      studentSteps: [
        {
          stepTitle: "Step 1: Registration",
          stepContent: [
            { text: "Go to the official website: https://ethirajcollege.edu.in/" },
            { text: "Navigate: Admission Menu -> APPLY NOW" },
            { text: "Select your category and stream" },
            { text: "Fill in basic details and submit" },
            {
              text: "You will receive:",
              subPoints: [
                "Application Reference Number",
                "Password (your Date of Birth) via email/SMS",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Application Fee Payment",
          stepContent: [
            { text: "After registration, payment screen appears" },
            { text: "Accept Terms and Conditions" },
            {
              text: "Choose payment method:",
              subPoints: ["Debit card / Credit card / UPI"],
            },
            {
              text: "Complete payment",
              subPoints: ["Proceed to the Main Application Form"],
            },
          ],
        },
        {
          stepTitle: "Step 3: Fill Main Application Form",
          stepContent: [
            { text: "Your basic details (name, DOB) will auto-fill" },
            { text: "Fill all mandatory fields" },
            {
              text: "Upload:",
              subPoints: [
                "Passport-size photo (no selfies allowed)",
                "Signature (white background)",
              ],
            },
            {
              text: "The form has 3 sections:",
              subPoints: [
                "Personal Details",
                "Qualifying Examination Details",
                "Other Details",
              ],
            },
            { text: "Click Save after each page" },
            { text: "You can edit any time before final submission" },
          ],
        },
        {
          stepTitle: "Step 4: Preview & Submit",
          stepContent: [
            {
              text: "Click Preview to check all details carefully",
              subPoints: ["Once satisfied, click Final Submit"],
              note: "After final submission, you cannot edit",
            },
          ],
        },
        {
          stepTitle: "Step 5: Print Application",
          stepContent: [
            { text: "Download or print your submitted form for reference" },
          ],
        },
        {
          stepTitle: "Step 6: Track Application Status",
          stepContent: [
            { text: "Go to Track Application Status page" },
            {
              text: "Enter:",
              subPoints: ["Application Reference Number", "Password (DOB)"],
            },
            {
              text: "You can:",
              subPoints: [
                "Check status",
                "Complete form (if pending)",
                "Pay fees (if not done)",
              ],
            },
          ],
        },
      ],
    },
    ta: {
      stepsTitle: "மாணவர்களுக்கான விண்ணப்பிக்கும் படிகள்",
      guidelinesTitle: "சேர்க்கை வழிகாட்டுதல்களை பார்க்கவும்",
      guidelinesContent:
        "தகுதி விதிகள், கட்டணத் திருப்பி வழங்கும் கொள்கை மற்றும் சேர்க்கை வழிமுறைகள் பற்றிய முழு தகவல்களுக்கு, அதிகாரப்பூர்வ சேர்க்கை வழிகாட்டுதல் பக்கத்தை பார்க்கவும்.",
      guidelinesLinkText:
        "முழு விவரங்களுக்கு சேர்க்கை வழிகாட்டுதல் பக்கத்தைத் திறக்கவும்.",
      guidelineLinks: [
        {
          linkText: "ஆவணங்களை பார்க்கவும்",
          link: "/admissions/policy",
        },
        {
          linkText: "வீடியோக்களை பார்க்கவும்",
          link: "https://www.youtube.com/",
          external: true,
        },
      ],
      studentSteps: [
        {
          stepTitle: "Step 1: பதிவு செய்தல்",
          stepContent: [
            { text: "அதிகாரப்பூர்வ இணையதளத்திற்கு செல்லவும்: https://ethirajcollege.edu.in/" },
            { text: "Admission Menu -> APPLY NOW என்பதை அழுத்தவும்" },
            { text: "உங்கள் வகை (Category) மற்றும் பாடப்பிரிவை (Stream) தேர்வு செய்யவும்" },
            { text: "தேவையான அடிப்படை தகவல்களை நிரப்பி Submit செய்யவும்" },
            {
              text: "Submit செய்த பிறகு:",
              subPoints: [
                "விண்ணப்ப குறிப்பு எண் (Application Reference Number) கிடைக்கும்",
                "கடவுச்சொல் (Password - உங்கள் பிறந்த தேதி) Email/SMS மூலம் வரும்",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: விண்ணப்பக் கட்டணம் செலுத்துதல்",
          stepContent: [
            { text: "பதிவு செய்தபின் Payment Screen தோன்றும்" },
            { text: "விதிமுறைகள் (Terms and Conditions) ஒப்புக்கொள்ளவும்" },
            {
              text: "கட்டணம் செலுத்தும் முறையைத் தேர்வு செய்யவும்:",
              subPoints: ["டெபிட் கார்டு", "கிரெடிட் கார்டு", "UPI"],
            },
            {
              text: "கட்டணத்தை வெற்றிகரமாகச் செலுத்தவும்",
              subPoints: ["அதன் பிறகு முக்கிய விண்ணப்பப் படிவத்திற்கு செல்லலாம்"],
            },
          ],
        },
        {
          stepTitle: "Step 3: முக்கிய விண்ணப்பப் படிவத்தை நிரப்புதல்",
          stepContent: [
            { text: "உங்கள் அடிப்படை தகவல்கள் (பெயர், பிறந்த தேதி) தானாக நிரப்பப்படும்" },
            { text: "அனைத்து கட்டாயமான (Mandatory) விவரங்களையும் கவனமாக நிரப்பவும்" },
            {
              text: "பதிவேற்றம் (Upload) செய்யவும்:",
              subPoints: [
                "பாஸ்போர்ட் அளவிலான புகைப்படம் (Selfie புகைப்படம் இல்லை)",
                "கையொப்பம் (வெள்ளை பின்னணி அவசியம்)",
              ],
            },
            {
              text: "படிவம் 3 பிரிவுகளைக் கொண்டது:",
              subPoints: [
                "தனிப்பட்ட விவரங்கள்",
                "தேர்ச்சி தகுதி பற்றிய விவரங்கள்",
                "மற்ற விவரங்கள்",
              ],
            },
            { text: "ஒவ்வொரு பக்கத்தையும் நிரப்பியபின் Save செய்யவும்" },
            { text: "Final Submit செய்வதற்கு முன் திருத்தங்கள் செய்யலாம்" },
          ],
        },
        {
          stepTitle: "Step 4: முன்னோட்டம் & இறுதி சமர்ப்பிப்பு",
          stepContent: [
            {
              text: "Preview என்பதைக் அழுத்தி அனைத்து தகவல்களையும் சரிபார்க்கவும்",
              subPoints: ["அனைத்தும் சரியாக இருந்தால் மட்டும் Final Submit செய்யவும்"],
              note: "Final Submit செய்த பிறகு எந்த மாற்றமும் செய்ய முடியாது",
            },
          ],
        },
        {
          stepTitle: "Step 5: விண்ணப்பத்தை பதிவிறக்கம் செய்தல் / அச்சிடுதல்",
          stepContent: [
            { text: "உங்கள் விண்ணப்பத்தை Download செய்து அல்லது Print எடுத்துப் பாதுகாப்பாக வைத்துக்கொள்ளவும்" },
          ],
        },
        {
          stepTitle: "Step 6: விண்ணப்ப நிலையை அறிதல்",
          stepContent: [
            { text: "Track Application Status பக்கத்திற்குச் செல்லவும்" },
            {
              text: "உங்கள் விவரங்களை உள்ளிடவும்:",
              subPoints: ["விண்ணப்பக் குறிப்பு எண்", "கடவுச்சொல் (DOB)"],
            },
            {
              text: "நீங்கள் செய்யக்கூடியவை:",
              subPoints: [
                "விண்ணப்ப நிலையைப் பார்வையிடுதல்",
                "நிரப்பப்படாத விண்ணப்பத்தை (Incomplete Form) நிரப்புதல்",
                "கட்டணம் செலுத்துதல் (செலுத்தவில்லை என்றால்)",
              ],
            },
          ],
        },
      ],
    },
  };

  const content = languageContent[language];
  const studentSteps = content.studentSteps;

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
          py: { lg: "72px", md: "60px", xs: "20px", sm: "50px" },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: { xs: 2, md: 3 } }}>
          <FormControl size="small" sx={{ minWidth: 180 }}>
            <Select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              displayEmpty
              sx={{ borderRadius: "24px", color: "#6B3C58", fontSize: "14px" }}
            >
              <MenuItem value="en">Select Language - English</MenuItem>
              <MenuItem value="ta">தமிழ்</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <SectionAccordion
          title={content.stepsTitle}
          steps={studentSteps}
          customContent={
            <Box>
              <Box
                component="img"
                src={quickLinkImage}
                alt="Students at Ethiraj"
                sx={{
                  width: "100%",
                  borderRadius: "18px",
                  objectFit: "cover",
                  minHeight: { xs: "280px", md: "500px" },
                  maxHeight: { md: "560px" },
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
                          <Link underline="always" color="inherit" component="span">
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
            </Box>
          }
          defaultOpen
        />

        <SectionAccordion
          title={content.guidelinesTitle}
          content={content.guidelinesContent}
          bottomContent2={{
            text: content.guidelinesLinkText,
            links: content.guidelineLinks,
          }}
          defaultOpen
        />
      </Box>
    </Box>
  );
};

export default AdmissionsHowToApply;
