import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import CustomBannerSection from "../../Components/CustomBannerSection/CustomBannerSection";
import admissionsImage from "../../Assets/admissionsBanner.png";
import quickLinkImage from "../../Assets/quicklinkImagePolicy1.jpg";
import ugpdf from "../../Assets/Admissions/UG- PG Admission Policy.pdf";


const Admissions = () => {
  const navigate = useNavigate();
  const bannerDatas = {
    image: admissionsImage,
    breadCrumbsData: [
      { name: "Home", to: "/" },
      { name: "Admissions" },
    ],
    title: "Admissions",
  };

  const policyLinks = [
    {
      label: "UG - Aided",
      href: "https://ethiraj.ibossems.com/default/onlineappln/purchaseapplication?flag=1",
    },
    {
      label: "UG - Self-Supporting",
      href:"https://ethiraj.ibossems.com/default/onlineappln/purchaseapplication?flag=2",
    },
      {
      label: "PG - Aided",
      href: "https://ethiraj.ibossems.com/default/onlineappln/applnpgform?flag=1",
    },  {
      label: "PG - Self-Supporting",
      href: "https://ethiraj.ibossems.com/default/onlineappln/applnpgform?flag=2",
    },
    {
      label: "MBA",
      href: "https://ethiraj.ibossems.com/default/onlineappln/onlineformlogin?cat=1",
    },
    {
      label: "MCA",
      href: "https://ethiraj.ibossems.com/default/onlineappln/onlineformlogin?cat=2",
    },

  
  ];

  const leftLinks = policyLinks.filter((_, index) => index % 2 === 0);
  const rightLinks = policyLinks.filter((_, index) => index % 2 !== 0);

  const PolicyLinkItem = ({ label, href }) => (
    <Box
      onClick={() => {
        // if (href && href !== "#") {
          // if (href.endsWith('.pdf')) {
            window.open(href, '_blank');
          // } else {
            // navigate(href);
          // }
        // }
      }}
      sx={{
        borderBottom: "1px solid #b8bcc8",
        py: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1,
        cursor: href && href !== "#" ? "pointer" : "default",
      }}
    >
      <Box
        sx={{
          color: "#3c3f4a",
          fontSize: { xs: "13px", md: "14px" },
          fontWeight: 400,
          lineHeight: 1.45,
          "&:hover": {
            color: "#1f4d9e",
          },
        }}
      >
        <Typography variant="typographyBodyInterNormal">
        {label}
        </Typography>
      </Box>
      <ArrowForwardIcon sx={{ fontSize: 16, color: "#7a7f8d" }} />
    </Box>
  );

  return (
    <Box>
      <CustomBannerSection bannerDatas={bannerDatas} />
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          py: { lg: "64px", md: "56px", xs: "24px", sm: "44px" },
        }}
      >
        <Typography
          variant="typographyBodyInterMaintext"
          sx={{
            color: "#4a4f5d",
            maxWidth: "1130px",
            mb: { xs: 4, md: 6 },
          }}
        >
          Ethiraj College for Women follows a transparent and merit-based admission
          policy, ensuring equal opportunity for all eligible candidates across
          undergraduate, postgraduate, and doctoral programmes. Admissions are
          conducted in accordance with the guidelines of the Government of Tamil Nadu
          and the University of Madras, with specific programme requirements clearly
          communicated for each stream.
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
          <Grid item size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={quickLinkImage}
              alt="Admission Policy"
              sx={{
                width: "100%",
                height: { xs: "300px"},
                borderRadius: "10px",
                objectFit: "cover",
                aspectRatio: "16/11",
              }}
            />
          </Grid>

          <Grid item size={{ xs: 12, md: 8 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center" >
              <Grid item size={{ xs: 12, md: 6 }}>
                {leftLinks.map((item) => (
                  <PolicyLinkItem key={item.label} label={item.label} href={item.href} />
                ))}
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                {rightLinks.map((item) => (
                  <PolicyLinkItem key={item.label} label={item.label} href={item.href} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Admissions;
