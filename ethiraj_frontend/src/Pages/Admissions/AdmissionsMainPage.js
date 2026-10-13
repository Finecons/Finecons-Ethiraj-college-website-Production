import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  Grid,
  Link,
  List,
  ListItem,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

import CustomBannerSection from "../../Components/CustomBannerSection/CustomBannerSection";
import image from "../../Assets/admissionsBanner.png";
import quickImage from "../../Assets/quicklinkImage.jpg";
import pgProspectus from "../../Assets/Admissions/PG_Prospectus 2026 -2027_Mam (1).pdf";
import mcaProspectus from "../../Assets/Admissions/_ MCA Prospectus 2026_mam.pdf";
import ugProspectus from "../../Assets/Admissions/_UG_Prospectus 2026 -2027_Mam (1).pdf";
import mbaProspectus from "../../Assets/Admissions/MBA Prospectus 2026_Mam (1).pdf";
import faq from "../../Assets/Admissions/Admissions-FAQ.pdf";


import { useNavigate } from "react-router-dom";

const AdmissionsMainPage = () => {
  const [language, setLanguage] = useState("en");
  const [isDeclarationChecked, setIsDeclarationChecked] = useState(false);

  const languageContent = {
    en: {
      title: "Instructions for Admission 2026-2027",
      subtitle: "Undergraduate & Postgraduate Admissions",
      refundPolicyTitle: "Refund Policy",
      guidelinesTitle: "Guidelines",
      paymentTitle: "Mode of Payment",
      paymentIntro: "Students can pay in following methods",
      paymentNote: "NOTE: The application fee is non-refundable.",
      declaration:
        "I have carefully read the prospectus, instructions, and eligibility criteria for applying to the programmes offered by the College. I understand and agree to abide by all the instructions and guidelines for applying for admission to Ethiraj College for Women.",
      applyButton: "Apply Now",
      instructions: [
        {
          id: 1,
          title:
            "A candidate may apply for any number of programmes in Aided and Self-Supporting streams.",
        },
        {
          id: 2,
          title:
            "Candidates applying for more than one programme must submit separate application forms and pay the required registration fee for each programme.",
        },
        {
          id: 3,
          title: "While applying, candidates must provide:",
          subPoints: [
            "A valid and active email ID and mobile number",
            "The same email ID and mobile number should be used for all applications",
            "Updates will be sent only to the registered email ID and mobile number",
            "A valid Aadhaar linked with mobile number, issued on or before 1st June 2024",
            "A recent passport-size photograph (100 KB, JPG/GIF format, size: 125 x 165 pixels)",
            "Once after filling all the details, scroll down and click the SUBMIT button after previewing",
          ],
          note: "NOTE: PHOTOS IN SCHOOL UNIFORM AND SELFIES WILL NOT BE ACCEPTED",
        },
        {
          id: 4,
          title: "The application fee is Rs.50, payable online only.",
        },
        {
          id: 5,
          title:
            "SC/ST candidates are exempted from paying the application fee for the Aided & Self-Supporting stream",
        },
        {
          id: 6,
          title: "Applications with incorrect or false information will be rejected.",
        },
        {
          id: 7,
          title:
            "No changes or corrections will be allowed after submission of the application.",
        },
        {
          id: 8,
          title: "Submitting the application does not ensure admission.",
        },
        {
          id: 9,
          title:
            "Candidates seeking hostel accommodation must apply separately after getting admitted.",
        },
        {
          id: 10,
          title: "Selected candidates must pay fees through online mode only.",
        },
        {
          id: 11,
          title:
            "Candidates selected for two programmes are permitted to avail only one internal transfer, subject to the availability of seats within the 1st Three merit lists.",
        },
      ],
      refundPolicy: [
        "Candidates who wish to withdraw admission and obtain TC must apply online only.",
        "Once the TC is approved, the refund will be credited to the account provided in the application form",
        "10% of the fees paid will be deducted as processing charges.",
        "The remaining amount will be refunded as per the Guidelines fixed by the Institution.",
      ],
      guidelines: [
        "10% will be deducted if the admission is withdrawn within 15 days from the date of admission or up to 10th June 2026.",
        "20% will be deducted for withdrawals made up to 25th June 2026.",
        "No refund will be given for withdrawals made from 26th June 2026 onwards.",
      ],
      paymentModes: [
        "Net Banking",
        "IMPS (Mobile Banking)",
        "Debit / Credit Card",
        "Paytm",
        "BillDesk",
      ],
    },
    ta: {
      title: "2026-2027 ஆம் ஆண்டுக்கான சேர்க்கை வழிமுறைகள்",
      subtitle: "இளநிலை மற்றும் முதுநிலை படிப்புகளுக்கான வழிமுறைகள்",
      refundPolicyTitle: "பணத் திரும்பப்பெறும் கொள்கை",
      guidelinesTitle: "வழிகாட்டுதல்கள்",
      paymentTitle: "கட்டணம் செலுத்தும் முறைகள்",
      paymentIntro: "மாணவர்கள் பின்வரும் முறைகளில் கட்டணம் செலுத்தலாம்",
      paymentNote: "NOTE: விண்ணப்பக் கட்டணம் திருப்பி வழங்கப்படாது.",
      declaration:
        "கல்லூரி வழங்கும் படிப்புகளுக்கான விளக்கப்பிரசுரம், வழிமுறைகள் மற்றும் தகுதிச்சான்றுகளை நான் முழுமையாக படித்து புரிந்துள்ளேன். எத்திராஜ் மகளிர் கல்லூரி சேர்க்கைக்கான அனைத்து வழிமுறைகளையும் கடைப்பிடிப்பதை ஒப்புக்கொள்கிறேன்.",
      applyButton: "இப்போது விண்ணப்பிக்க",
      instructions: [
        {
          id: 1,
          title:
            "உதவி பெறும் மற்றும் சுயநிதி பாடப்பிரிவுகளில் எந்த எண்ணிக்கையிலும் விண்ணப்பிக்கலாம்.",
        },
        {
          id: 2,
          title:
            "ஒன்றுக்கும் மேற்பட்ட பாடப்பிரிவுகளுக்கு விண்ணப்பிப்பவர்கள் ஒவ்வொரு பாடத்திற்கும் தனித்தனி விண்ணப்பப் படிவம் மற்றும் கட்டணம் செலுத்த வேண்டும்.",
        },
        {
          id: 3,
          title: "விண்ணப்பிக்கும் போது வழங்க வேண்டிய விவரங்கள்",
          subPoints: [
            "செயல்பாட்டில் உள்ள மின்னஞ்சல் மற்றும் கைபேசி எண்",
            "அனைத்து விண்ணப்பங்களுக்கும் ஒரே மின்னஞ்சல் மற்றும் கைபேசி எண்ணை பயன்படுத்த வேண்டும்",
            "அனைத்து தகவல்களும் பதிவுசெய்யப்பட்ட மின்னஞ்சல் மற்றும் கைபேசி எண்ணிற்கே அனுப்பப்படும்",
            "1 ஜூன் 2024க்கு முன் வழங்கப்பட்ட, கைபேசி எண்ணுடன் இணைக்கப்பட்ட ஆதார் அட்டை",
            "சமீபத்திய பாஸ்போர்ட் அளவு புகைப்படம் (100 KB, JPG/GIF வடிவம், 125 x 165 பிக்சல்கள்)",
            "விவரங்களை நிரப்பிய பின் முன்னோட்டம் பார்த்து SUBMIT பொத்தானை அழுத்தவும்",
          ],
          note: "NOTE: பள்ளி சீருடை மற்றும் செல்ஃபி புகைப்படங்கள் ஏற்கப்படமாட்டாது",
        },
        {
          id: 4,
          title: "ரூ.50 விண்ணப்பக் கட்டணம் ஆன்லைன் மூலம் மட்டும் செலுத்த வேண்டும்.",
        },
        {
          id: 5,
          title:
            "உதவி பெறும் பாடப்பிரிவுகளுக்கு SC/ST விண்ணப்பதாரர்கள் கட்டண விலக்கு பெறுவர்.",
        },
        {
          id: 6,
          title: "தவறான அல்லது பொய்யான தகவல்களுடன் உள்ள விண்ணப்பங்கள் நிராகரிக்கப்படும்.",
        },
        {
          id: 7,
          title: "விண்ணப்பம் சமர்ப்பித்த பின் எந்த மாற்றமும் செய்ய அனுமதி இல்லை.",
        },
        {
          id: 8,
          title: "விண்ணப்பம் செய்ததாலேயே சேர்க்கை உறுதி செய்யப்படாது.",
        },
        {
          id: 9,
          title:
            "விடுதி வசதி பெற விரும்புவோர் சேர்க்கை பெற்ற பின் தனியாக விண்ணப்பிக்க வேண்டும்.",
        },
        {
          id: 10,
          title: "தேர்வு செய்யப்பட்டவர்கள் கட்டணத்தை ஆன்லைன் வழி மட்டும் செலுத்த வேண்டும்.",
        },
        {
          id: 11,
          title:
            "இரண்டு பாடப்பிரிவுகளில் தேர்வு செய்யப்பட்ட மாணவர்கள், முதல் மூன்று தரவரிசைப் பட்டியலில் இடங்கள் கிடைப்பதை பொறுத்து, ஒருமுறை உள்மாற்றம் பெறலாம்.",
        },
      ],
      refundPolicy: [
        "சேர்க்கையை ரத்து செய்து TC பெற விரும்புவோர் ஆன்லைன் மூலம் மட்டும் விண்ணப்பிக்க வேண்டும்.",
        "TC ஒப்புதல் கிடைத்ததும், கட்டணம் செலுத்திய அதே கணக்கில் பணம் திருப்பி அனுப்பப்படும்.",
        "செலுத்திய கட்டணத்தில் 10% நிர்வாகச் செலவாக கழிக்கப்படும்.",
        "மீதமுள்ள தொகை நிறுவன விதிமுறைகளின்படி திருப்பி வழங்கப்படும்.",
      ],
      guidelines: [
        "சேர்க்கை செய்யப்பட்ட நாளிலிருந்து 15 நாட்களுக்குள் அல்லது 10 ஜூன் 2026 வரை ரத்து செய்தால் 10% கட்டணம் கழிக்கப்படும்.",
        "25 ஜூன் 2026 வரை ரத்து செய்தால் 20% கட்டணம் கழிக்கப்படும்.",
        "26 ஜூன் 2026 முதல் ரத்து செய்தால் எந்த தொகையும் திருப்பி வழங்கப்படாது.",
      ],
      paymentModes: [
        "நெட் பேங்கிங்",
        "IMPS (மொபைல் பேங்கிங்)",
        "டெபிட் / கிரெடிட் கார்டு",
        "Paytm",
        "BillDesk",
      ],
    },
  };

  const content = languageContent[language];
  const instructions = content.instructions;
  const refundPolicy = content.refundPolicy;
  const guidelines = content.guidelines;
  const paymentModes = content.paymentModes;

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

  const navigate = useNavigate();

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

  const bannerDatas = {
    image: image,
    breadCrumbsData: [{ name: "Home", to: "/" }, { name: "Admissions" }],
    title: "Admissions",
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

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md:6 }}>
            <Typography
              variant="headingTextNewsreaderMedium"
              sx={{ color: "#2f2f3a" }}
            >
              {content.title}
            </Typography>

            <Typography
              variant="subHeadingTextInterMedium"
              sx={{
                color: "#6B3C58",
                fontWeight: 700,
                my: { lg: "24px", md: "20px", xs: "16px" },
              }}
            >
              {content.subtitle}
            </Typography>

            <Stack spacing={{ xs: "18px", md: "18px" }}>
              {instructions.map((step) => (
                <Box key={step.id}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: 28,
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        backgroundColor: "#e9d9ec",
                        color: "#7d587f",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "13px",
                        fontWeight: 700,
                        mt: "2px",
                      }}
                    >
                      {step.id}
                    </Box>

                    <Box>
                      <Typography variant="typographyBodyInterNormal">
                        {step.title}
                      </Typography>

                      {step.subPoints?.length ? (
                        <List sx={{ listStyleType: "disc", pl: 2.2, py: 0.5 }}>
                          {step.subPoints.map((point) => (
                            <ListItem
                              key={point}
                              sx={{
                                display: "list-item",
                                p: 0,
                                color: "#56565d",
                                fontSize: "14px",
                              }}
                            >
                              {point}
                            </ListItem>
                          ))}
                        </List>
                      ) : null}

                      {step.note && (
                        <Typography
                          variant="bodyTextInterRegular"
                          sx={{
                            mt: 0.6,
                            color: "#6f6f77",
                            lineHeight: 1.4,
                            fontSize: "12px",
                            letterSpacing: "0.2px",
                          }}
                        >
                          {step.note}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Stack>

            <Divider sx={{ my: 3.2, borderColor: "#b9b9bf" }} />

            <Typography
              variant="subHeadingTextInterMedium"
              sx={{ color: "#6B3C58", mb: 1 }}
            >
              {content.refundPolicyTitle}
            </Typography>

            <Stack spacing={1.3} sx={{ mb: 3.2 }}>
              {refundPolicy.map((item, index) => (
                <Box key={item} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
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
                      mt: "1px",
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography variant="typographyBodyInterNormal">{item}</Typography>
                </Box>
              ))}
            </Stack>

            <Divider sx={{ mb: 3.2, borderColor: "#b9b9bf" }} />

            <Typography
              variant="subHeadingTextInterMedium"
              sx={{ color: "#6B3C58", mb: 1 }}
            >
              {content.guidelinesTitle}
            </Typography>

            <Stack spacing={1.3} sx={{ mb: 3.2 }}>
              {guidelines.map((item, index) => (
                <Box key={item} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
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
                      mt: "1px",
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography variant="typographyBodyInterNormal">{item}</Typography>
                </Box>
              ))}
            </Stack>

            <Divider sx={{ mb: 3.2, borderColor: "#b9b9bf" }} />

            <Typography
              variant="subHeadingTextInterMedium"
              sx={{ color: "#6B3C58", mb: 1 }}
            >
              {content.paymentTitle}
            </Typography>

            <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start", mb: 1 }}>
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
                  mt: "1px",
                }}
              >
                1
              </Box>
              <Box>
                <Typography variant="typographyBodyInterNormal" sx={{ mb: 0.5 }}>
                  {content.paymentIntro}
                </Typography>

                <List sx={{ listStyleType: "disc", pl: 2.2, py: 0 }}>
                  {paymentModes.map((item) => (
                    <ListItem
                      key={item}
                      sx={{
                        display: "list-item",
                        p: 0,
                        color: "#56565d",
                        fontSize: "13px",
                        lineHeight: 1.4,
                      }}
                    >
                      {item}
                    </ListItem>
                  ))}
                </List>

                <Typography
                  variant="bodyTextInterRegular"
                  sx={{ mt: 0.6, color: "#6f6f77", fontSize: "12px" }}
                >
                  {content.paymentNote}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 3.2, borderColor: "#b9b9bf" }} />

            <Box sx={{ display: "flex", gap: 1.2, alignItems: "flex-start", mb: 2.5 }}>
              <Checkbox
                checked={isDeclarationChecked}
                onChange={(event) => setIsDeclarationChecked(event.target.checked)}
                sx={{
                  p: 0,
                  mt: "2px",
                  color: "#1f1f22",
                  "&.Mui-checked": {
                    color: "#1f1f22",
                  },
                }}
              />

              <Typography variant="typographyBodyInterNormal" sx={{ maxWidth: "700px" }}>
                {content.declaration}
              </Typography>
            </Box>

            <Button
              variant="contained"
              disabled={!isDeclarationChecked}
              // onClick={() => handleNavigation("#")}
                      onClick={() => handleNavigation({ to: "/admissions/applynow"})}
              
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
              {content.applyButton}
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 6}}>
            <Box
              component="img"
              src={quickImage}
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
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdmissionsMainPage;
