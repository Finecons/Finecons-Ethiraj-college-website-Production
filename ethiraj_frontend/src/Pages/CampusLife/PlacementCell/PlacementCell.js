import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Grid, Button, Divider, CardContent, Card, IconButton } from "@mui/material";
import bannerImage from "../../../Assets/PlacementCell/PlacementBanner.png";
import downloadPdfIconImage from "../../../Assets/downloadpdfIconImage.png";
// import CustomImageSliderNext from "./FacultySection";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CustomBannerSection from "../../../Components/CustomBannerSection/CustomBannerSection";
import CustomImageSliderNext from "./FacultySection";
import Activities from "./Activities";

import placementWomen from "../../../Assets/PlacementCell/placementWomen.jpg";
import gomathy from "../../../Assets/PlacementCell/gomathy.jpg";
import bhavishya from "../../../Assets/PlacementCell/bhavishya.jpg";
import event1 from "../../../Assets/PlacementCell/event1.jpg";
import event2 from "../../../Assets/PlacementCell/event2.jpg";
import event3 from "../../../Assets/PlacementCell/event3.jpg";
import event4 from "../../../Assets/PlacementCell/event4.jpg";
import event5 from "../../../Assets/PlacementCell/event5.jpg";
import event6 from "../../../Assets/PlacementCell/event6.jpg";
import event7 from "../../../Assets/PlacementCell/event7.jpg";



import activity1 from "../../../Assets/WomenStudies/activityImage1.png";
import activity2 from "../../../Assets/WomenStudies/activityImage2.png";

import strongAcademicFoundationImage from "../../../Assets/PlacementCell/strongAcademicfoundation.png";
import industryReadySkillsImage from "../../../Assets/PlacementCell/industryready.png";
import leadershipCommunicationImage from "../../../Assets/PlacementCell/leadership.png";
import ethicalProfessionalsImage from "../../../Assets/PlacementCell/ethical.png";
import nationalSportsDay from "../../../Assets/Sports/National Sports Day.jpg";
import AnnualSportsDay from "../../../Assets/Sports/Annual Sports Day.jpg";
import yogaday from "../../../Assets/Sports/Yoga Day.jpg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TopRecruiters from "./TopRecruiters";


// Logos for top recruiters (replace with actual logos)
import accentureLogo from "../../../Assets/PlacementCell/CompanyLogo/Accenture Logo.jpg";
import amoghaLogo from "../../../Assets/PlacementCell/CompanyLogo/Amogha Business Solutions.jpg";
import amuraLogo from "../../../Assets/PlacementCell/CompanyLogo/amurahealth.jpg";
import antalLogo from "../../../Assets/PlacementCell/CompanyLogo/Antal International.jpg";
import bajajLogo from "../../../Assets/PlacementCell/CompanyLogo/Bajaj Allianz.jpg";
import bankOfAmericaLogo from "../../../Assets/PlacementCell/CompanyLogo/Bank of America.jpg";
import barclaysLogo from "../../../Assets/PlacementCell/CompanyLogo/Barclays.jpg";
import bnyLogo from "../../../Assets/PlacementCell/CompanyLogo/BNY.png";
import cognizantLogo from "../../../Assets/PlacementCell/CompanyLogo/Cognizant.jpg";
import curiokidzLogo from "../../../Assets/PlacementCell/CompanyLogo/CURIOKIDZ School.webp";
import deloitteLogo from "../../../Assets/PlacementCell/CompanyLogo/Delloitte US.jpg";
import eqIndiaLogo from "../../../Assets/PlacementCell/CompanyLogo/EQ India.jpg";
import eyLogo from "../../../Assets/PlacementCell/CompanyLogo/Ernst & Young  logo.jpg";
import finscholarzLogo from "../../../Assets/PlacementCell/CompanyLogo/finscholarz.jpg";
import godrejLogo from "../../../Assets/PlacementCell/CompanyLogo/Godrej.jpg";
import guidehouseLogo from "../../../Assets/PlacementCell/CompanyLogo/Guidehouse.png";
import hcltechLogo from "../../../Assets/PlacementCell/CompanyLogo/HCLTech.jpg";
import hitachiLogo from "../../../Assets/PlacementCell/CompanyLogo/Hitachi";
import humworldLogo from "../../../Assets/PlacementCell/CompanyLogo/Humworld Solutions.png";
import iamneoLogo from "../../../Assets/PlacementCell/CompanyLogo/iamneoai.jpg";
import iciciLogo from "../../../Assets/PlacementCell/CompanyLogo/Icici Bank Logo.jpg";
import larsenLogo from "../../../Assets/PlacementCell/CompanyLogo/Larsen & Toubro logo.jpg";
import ltiLogo from "../../../Assets/PlacementCell/CompanyLogo/LTI MindTree.webp";
import many2goLogo from "../../../Assets/PlacementCell/CompanyLogo/Many2Go.jpg";
import masteshLogo from "../../../Assets/PlacementCell/CompanyLogo/Mastesh Trellis.png";
import mathcoLogo from "../../../Assets/PlacementCell/CompanyLogo/MathCo.png";
import mereMentorLogo from "../../../Assets/PlacementCell/CompanyLogo/Mere Mentor.png";
import meritLogo from "../../../Assets/PlacementCell/CompanyLogo/Merit Data & Technology.jpg";
import mindsprintLogo from "../../../Assets/PlacementCell/CompanyLogo/mindsprint.jpg";
import movateLogo from "../../../Assets/PlacementCell/CompanyLogo/Movate DCX.png";
import nielsenLogo from "../../../Assets/PlacementCell/CompanyLogo/NielsenIQ.png";
import pariLogo from "../../../Assets/PlacementCell/CompanyLogo/Pari Washington Company Advisory.png";
import pickYourTrailLogo from "../../../Assets/PlacementCell/CompanyLogo/Pick your trail.png";
import presidioLogo from "../../../Assets/PlacementCell/CompanyLogo/Presidio.webp";

import protechsoftLogo from "../../../Assets/PlacementCell/CompanyLogo/Protechsoft.jpg";
import purpleDriveLogo from "../../../Assets/PlacementCell/CompanyLogo/Purple Drive Technologies.png";
import rbsLogo from "../../../Assets/PlacementCell/CompanyLogo/RBS.svg";
import renaultNissanLogo from "../../../Assets/PlacementCell/CompanyLogo/Renault Nissan Tech.png";
import rrdLogo from "../../../Assets/PlacementCell/CompanyLogo/RRD.webp";
import tataElectronicsLogo from "../../../Assets/PlacementCell/CompanyLogo/Tata Electronics.jpg";
import tcsBpsLogo from "../../../Assets/PlacementCell/CompanyLogo/TCS BPS.jpg";
import teachForIndiaLogo from "../../../Assets/PlacementCell/CompanyLogo/Teach for India.png";
import technipEnergiesLogo from "../../../Assets/PlacementCell/CompanyLogo/Technip Energies.jpg";
import turingLogo from "../../../Assets/PlacementCell/CompanyLogo/Turing.jpg";
import ventureIntelligenceLogo from "../../../Assets/PlacementCell/CompanyLogo/Venture Intelligence.jpg";
import verizonLogo from "../../../Assets/PlacementCell/CompanyLogo/Verizon.jpg";
import wiproLogo from "../../../Assets/PlacementCell/CompanyLogo/Wipro.jpg";
import worldBankLogo from "../../../Assets/PlacementCell/CompanyLogo/World Bank.jpg";
import writeITLogo from "../../../Assets/PlacementCell/CompanyLogo/Write IT Solutions.png";
import zifoLogo from "../../../Assets/PlacementCell/CompanyLogo/Zifo.jpg";


const features = [
  {
    icon: strongAcademicFoundationImage,
    title: "Strong Academic Foundation",
  },
  {
    icon: industryReadySkillsImage,
    title: "Industry-Ready Skill Sets",
  },
  {
    icon: leadershipCommunicationImage,
    title: "Leadership and Communication Excellence",
  },
  {
    icon: ethicalProfessionalsImage,
    title: "Ethical, Responsible Professionals",
  },
];

const PlacementCell = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handledownloadFile = async (pdfUrl) => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();

      const fileURL = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = fileURL;
      link.download = "Activity&Achiements.pdf"; // 🔥 forces download
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(fileURL);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const bannerDatas = {
    image: bannerImage,
    breadCrumbsData: [
      { name: "Home", to: "/" },
      {name:"Career Development", to:"/campuslife/careerdevelopment"},
      { name: "Placement Cell" },
    ],
    title: "Placement Cell",
  };

  // Top recruiters logos (replace with your actual logo imports)
const recruiters = [
  { name: "Accenture", img: accentureLogo },
  { name: "Amogha Business Solutions", img: amoghaLogo },
  { name: "Amura Health", img: amuraLogo },
  { name: "Antal International", img: antalLogo },
  { name: "Bajaj Allianz", img: bajajLogo },
  { name: "Bank of America", img: bankOfAmericaLogo },
  { name: "Barclays", img: barclaysLogo },
  { name: "BNY", img: bnyLogo },
  { name: "Cognizant", img: cognizantLogo },
  { name: "CURIOKIDZ School", img: curiokidzLogo },
  { name: "Deloitte US", img: deloitteLogo },
  { name: "EQ India", img: eqIndiaLogo },
  { name: "EY", img: eyLogo },
  { name: "Finscholarz", img: finscholarzLogo },
  { name: "Godrej", img: godrejLogo },
  { name: "Guidehouse", img: guidehouseLogo },
  { name: "HCLTech", img: hcltechLogo },
  { name: "Hitachi", img: hitachiLogo },
  { name: "Humworld Solutions", img: humworldLogo },
  { name: "iamneo", img: iamneoLogo },
  { name: "ICICI Bank", img: iciciLogo },
  { name: "Larsen & Toubro", img: larsenLogo },
  { name: "LTI MindTree", img: ltiLogo },
  { name: "Many2Go", img: many2goLogo },
  { name: "Mastesh Trellis", img: masteshLogo },
  { name: "MathCo", img: mathcoLogo },
  { name: "Mere Mentor", img: mereMentorLogo },
  { name: "Merit Data & Technology", img: meritLogo },
  { name: "MindSprint", img: mindsprintLogo },
  { name: "Movate DCX", img: movateLogo },
  { name: "NielsenIQ", img: nielsenLogo },
  { name: "Pari Washington Company Advisor", img: pariLogo },
  { name: "Pick Your Trail", img: pickYourTrailLogo },
  { name: "Presidio", img: presidioLogo },
  { name: "Protechsoft", img: protechsoftLogo },
{ name: "Purple Drive Technologies", img: purpleDriveLogo },
{ name: "RBS", img: rbsLogo },
{ name: "Renault Nissan Tech", img: renaultNissanLogo },
{ name: "RRD", img: rrdLogo },
{ name: "Tata Electronics", img: tataElectronicsLogo },
{ name: "TCS BPS", img: tcsBpsLogo },
{ name: "Teach for India", img: teachForIndiaLogo },
{ name: "Technip Energies", img: technipEnergiesLogo },
{ name: "Turing", img: turingLogo },
{ name: "Venture Intelligence", img: ventureIntelligenceLogo },
{ name: "Verizon", img: verizonLogo },
{ name: "Wipro", img: wiproLogo },
{ name: "World Bank", img: worldBankLogo },
{ name: "Write IT Solutions", img: writeITLogo },
{ name: "Zifo", img: zifoLogo },
];
  // Carousel state
  const [carouselIndex, setCarouselIndex] = useState(0);
  const recruitersPerSlide = 6;
  const totalSlides = Math.ceil(recruiters.length / recruitersPerSlide);
  const handlePrev = () =>
    setCarouselIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const handleNext = () =>
    setCarouselIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  const placementStats = [
    {
      value: "1200+",
      label: "Students Placed",
    },
    {
      value: "100+",
      label: "Recruiters",
    },
    {
      value: "9.6LPA",
      label: "Highest Salary Offered",
    },
    {
      value: "3.5LPA",
      label: "Average Salary Package",
    },
  ];

   const annualEvents = [
      { title: "Chairman Principal & Vice Principals Honoured - Deloitte GSM 2024  Winners", image: event1 },
      { title: "", image: event2 },
      { title: "", image: event3 },
      { title: "", image: event4 },
      { title: "", image: event5 },
      { title: "", image: event6 },
      { title: "", image: event7 },
    ];

   const annualEventsScrollRef = useRef(null);
 const [canAnnualPrev, setCanAnnualPrev] = useState(false);
  const [canAnnualNext, setCanAnnualNext] = useState(false);
    const updateAnnualControls = () => {
    const node = annualEventsScrollRef.current;
    if (!node) {
      return;
    }

    setCanAnnualPrev(node.scrollLeft > 2);
    setCanAnnualNext(node.scrollLeft + node.clientWidth < node.scrollWidth - 2);
  };
  const handleAnnualScroll = (direction) => {
    const node = annualEventsScrollRef.current;
    if (!node) {
      return;
    }

    const scrollAmount = node.clientWidth * 0.75;
    node.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

   useEffect(() => {
      updateAnnualControls();
    }, [annualEvents.length]);
  return (
    <Box
      sx={{
        mt: 4,
        mb: 6,
        // px: { xs: 2, sm: 3, md: 4, lg: 6 },
        // px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
      }}
    >
      {/* Breadcrumb */}
      <CustomBannerSection bannerDatas={bannerDatas} />

      <Box
        sx={{
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          my: { lg: "96px", md: "80px", sm: "60px", xs: "60px" },
        }}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="headingTextNewsreaderMedium"
              sx={{ mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" } }}
            >
              Placements at Ethiraj College for Women (Autonomous){" "}
            </Typography>

            <Typography
              variant="typographyBodyInterNormal"
              sx={{ color: "#4a4f5d", mb: 2.5, lineHeight: 1.8 }}
            >
              The Placement Cell of Ethiraj College for Women plays a vital role
              in guiding students towards successful professional careers. The
              Cell actively coordinates campus recruitment drives and internship
              opportunities while equipping students with essential
              employability skills through training programmes, workshops, and
              career guidance initiatives.
            </Typography>
            <Typography
              variant="typographyBodyInterNormal"
              sx={{ color: "#4a4f5d", mb: 3, lineHeight: 1.8 }}
            >
              Ethiraj College is a preferred recruitment destination for leading
              organisations across diverse sectors such as IT and Technology,
              Banking and Financial Services, Consulting, FMCG, Media and
              Communications, Healthcare, Education, and Research. Students from
              the institution are placed in a wide range of roles including
              Business Analyst, Associate Consultant, Management Trainee,
              Software Developer, Financial Analyst, Content Specialist, and
              other dynamic positions, demonstrating the strong industry
              readiness and professional excellence nurtured at Ethiraj.
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: { xs: "block" },
              mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px " },
            }}
          >
            <Box
              component="img"
              src={placementWomen}
              alt="placement cell"
              sx={{
                width: "100%",
                height: { xs: 260, md: "100%" },
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Placement Statistics Section */}
      <Box sx={{ py: 4, mb: 6, borderRadius: 2, backgroundColor: "#FFE6FF" }}>
        <Typography
          variant="headingTextNewsreaderMedium"
          align="center"
          sx={{
            mb: { xs: "48px", sm: "48px", md: "68px", lg: "96px" },
            fontWeight: 500,
          }}
        >
          Placement Statistics 2024 - 2025
        </Typography>

        <Grid container justifyContent="center" spacing={4}>
          {placementStats.map((item, index) => (
            <Grid
              key={index}
              item
              size={{ xs: 6, md: 3 }}
              sx={{ textAlign: "center" }}
            >
              <Typography
                variant="headingTextNewsreaderMedium"
                sx={{ fontFamily: "Inter", color: "#6B3C58", mb: 1 }}
              >
                {item.value}
              </Typography>

              <Typography variant="body2">{item.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Top Recruiters Carousel Section */}
      <Box
        sx={{
          mb: 8,
          py: { xs: 5, md: 8 },
          borderRadius: 2,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <TopRecruiters recruiters={recruiters}/>

        {/* Placement Cell Co-ordinator Section */}

        <Box
          sx={{
            px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
            my: { lg: "96px", md: "80px", sm: "60px", xs: "60px" },

            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            flexDirection: { xs: "column", md: "row" },
            // mb: 8,
          }}
        >
          <Box>
            <Typography
              variant="headingTextNewsreaderMedium"
              sx={{
                lineHeight: 1.2,
              }}
            >
              Recruit from Ethiraj
            </Typography>

            <Typography
              variant="subHeadingTextInterMedium"
              sx={{
                mt: 1,

                color: "#7A4864",
              }}
            >
              Empowered Women,
              <br />
              Exceptional Professionals
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              mt: { xs: 3, md: 0 },
              background: "#7A4864",
              borderRadius: "30px",
              px: 4,
              py: 1.2,
              textTransform: "uppercase",
              fontSize: "0.75rem",
              boxShadow: "none",
              "&:hover": {
                background: "#633950",
                boxShadow: "none",
              },
            }}
          >
            Call Back Form
          </Button>
        </Box>

        {/* Features */}
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          sx={{
            px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          }}
        >
          {features.map((item, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  px: 2,
                }}
              >
                <Box
                  sx={{
                    color: "#7A4864",
                    mb: 2,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={item.icon}
                    alt={item.title}
                    sx={{ width: 100, height: 100 }}
                  />
                </Box>

                <Typography
                  variant="typographybodyInterNormal"
                  sx={{
                    // maxWidth: 220,
                    mx: "auto",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            mt: 8,
            mb: 8,
            px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
            py: { xs: 4, md: 6 },
            borderRadius: 2,
            // boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{  mb: 4 }}
          >
            Placement Cell Co-ordinators
          </Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={4}
            sx={{ mx: "auto" }}
          >
            <Grid item>
              <Box
                component="img"
                src={gomathy} // You can replace with the actual coordinator image if available
                alt="Placement Cell Co-ordinator"
                sx={{
                  width: 220,
                  height: 260,
                  objectFit: "cover",
                  mb: { xs: 2, md: 0 },
                }}
              />
            </Grid>
            <Grid item sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="leadershipContentTextNewsreaderMedium"
                sx={{ mb: 1 }}
              >
                Ms. Gomathy. S
              </Typography>
               <Typography
                variant="bodyTextInterRegular"
                sx={{ mb: 1 }}
              >
                M.Sc (Psy), M.B.A (HRM)
              </Typography>
              <Typography variant="typographyBodyInterMainText" sx={{pb: 3 }}>
                Director – Placement Cell
              </Typography>
            
              <Typography variant="subHeadingTextInterMedium" sx={{ mb: 1 ,mt:2}}>
                Contact Details
              </Typography>
              <Typography variant="typographyBodyInterNormal">
                Ethiraj College for Women (Autonomous)
                <br />
                Chennai - 600 008.
                <br />
                Tel: +(91)-44-28279189
                <br />
                For Corporate Enquiries:
                <br />
                placementcell@ethirajcollege.edu.in
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
            my: { lg: "96px", md: "80px", sm: "60px", xs: "60px" },
          }}
        >
          <Grid container spacing={3}>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px " },
              }}
            >
              <Box
                sx={{
                  display: { xs: "block",md:"none" },
                }}
              >
                <Typography
                  variant="headingTextNewsreaderMedium"
                  sx={{ mb: 1 }}
                  // sx={{ mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" } }}
                >
                  Bhavishya
                </Typography>
                <Typography
                  variant="subHeadingTextInterMedium"
                  sx={{ mb: { xs: "24px" }, color: "#6B3C58" }}
                >
                  The Career Preparatory Programme
                </Typography>
              </Box>
              <Box
                component="img"
                src={bhavishya}
                alt="bahavishya"
                sx={{
                  width: "100%",
                  height: { xs: 260, md: "100%" },
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                sx={{
                  display: { xs: "none",md:"block" },
                }}
              >
                <Typography
                  variant="headingTextNewsreaderMedium"
                  sx={{ mb: 1 }}
                  // sx={{ mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" } }}
                >
                  Bhavishya
                </Typography>
                <Typography
                  variant="subHeadingTextInterMedium"
                  sx={{ mb: { xs: "24px" }, color: "#6B3C58" }}
                >
                  The Career Preparatory Programme
                </Typography>
              </Box>
              <Typography
                variant="typographyBodyInterNormal"
                sx={{ color: "#4a4f5d", mb: 2.5, lineHeight: 1.8 }}
              >
                Bhavishya is a flagship career preparatory programme organised
                by the Placement Cell of Ethiraj College for Women to equip
                students with the skills and confidence required to transition
                from campus to corporate life. The programme focuses on
                strengthening employability through a series of structured
                training sessions that include aptitude development, resume
                building, group discussion practice, interview preparation, and
                professional communication. By introducing students to industry
                expectations early, Bhavishya helps them develop the
                competencies needed to succeed in competitive recruitment
                processes.
              </Typography>
              <Typography
                variant="typographyBodyInterNormal"
                sx={{ color: "#4a4f5d", mb: 3, lineHeight: 1.8 }}
              >
                Through interactive workshops, expert sessions, and career
                guidance by industry professionals and alumni, Bhavishya
                provides students with valuable insights into various career
                pathways and emerging job opportunities. The initiative aims to
                bridge the gap between academic learning and professional
                demands, empowering students to approach placements with
                clarity, preparedness, and confidence.
              </Typography>
            </Grid>
          </Grid>
        </Box>
          <Box sx={{ my: { xs: "48px", sm: "55px", md: "72px", lg: "82px" } ,px: { xs: 2, sm: 3, md: "74px", lg: "94px" },}}>
                  <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 2.5 }}>
                    Events & Acheivements
                  </Typography>
                  <Box
                    ref={annualEventsScrollRef}
                    onScroll={updateAnnualControls}
                    sx={{
                      display: "flex",
                      gap: 2,
                      overflowX: "auto",
                      scrollBehavior: "smooth",
                      pb: 1,
                      "&::-webkit-scrollbar": { display: "none" },
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                  >
                    {annualEvents.map((item) => (
                      <Box
                        key={item.title}
                        sx={{
                          flex: "0 0 auto",
                          width: { xs: "85%", sm: "48%", md: "32%" },
                          minWidth: { xs: "85%", sm: "48%", md: "32%" },
                        }}
                      >
                        <Card elevation={0} sx={{ background: "none" }}>
                          <Box
                            component="img"
                            src={item.image}
                            alt={item.title}
                            sx={{
                              width: { xs: "364px", sm: "364px", md: "420px", lg: "502px" },
                              height: { xs: "262.111px", sm: "262.111px", md: "302px", lg: "361px" },
                              aspectRatio: { xs: "364/262.11", sm: "364/262.11", md: "1.39", lg: "89/64" },
                              objectFit: "cover",
                            }}
                          />
                          <CardContent sx={{ px: 0, pt: 1, pb: 0 }}>
                            <Typography variant="typographyBodyInterMaintext">
                              {item.title}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 1 }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => handleAnnualScroll("prev")}
                      disabled={!canAnnualPrev}
                      sx={{ border: "1px dashed #343A40" }}
                    >
                      <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleAnnualScroll("next")}
                      disabled={!canAnnualNext}
                      sx={{ border: "1px dashed #343A40" }}
                    >
                      <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
      </Box>
    </Box>
  );
};

export default PlacementCell;
