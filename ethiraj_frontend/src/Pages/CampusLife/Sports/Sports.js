import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BannerSection from "./BannerSection";

import ImageWidthSlider from "./ImageWidthSlider";
import CustomImageSliderNext from "./FacultySection";

import indoor1 from "../../../Assets/Sports/indoorFacilities1.jpg";
import indoor2 from "../../../Assets/Sports/indoorFacilities2.jpg";
import indoor3 from "../../../Assets/Sports/indoorFacilities3.jpg";
import indoor4 from "../../../Assets/Sports/indoorFacilities4.jpg";
import indoor5 from "../../../Assets/Sports/indoorFacilities5.jpg";

import outdoor1 from "../../../Assets/Sports/outDoorFacilities1.jpg";
import outdoor2 from "../../../Assets/Sports/outDoorFacilities2.jpg";
import outdoor3 from "../../../Assets/Sports/outDoorFacilities3.jpg";
import outdoor4 from "../../../Assets/Sports/outDoorFacilities4.jpg";
import outdoor5 from "../../../Assets/Sports/outDoorFacilities5.jpg";

import acheivement1 from "../../../Assets/Sports/acheivementJayalakshmi.jpg";
import acheivement2 from "../../../Assets/Sports/acheivementdipikapallikal.jpg";
import acheivement3 from "../../../Assets/Sports/acheivementRamanarasimhan.jpg";
import acheivement4 from "../../../Assets/Sports/acheivementAbishek.jpg";
import vJayalakshmi from "../../../Assets/Sports/v jayalakshmi.jpeg";
import yogalakshmi from "../../../Assets/Sports/yogalakshmi.jpeg";
import ujjaval from "../../../Assets/Sports/ujjaval.jpg";
import sharmili from "../../../Assets/Sports/sharmili.jpg";
import sGayathri from "../../../Assets/Sports/S. GAYATHRI.jpg";
import reshma from "../../../Assets/Sports/reshma.jpeg";
import ramanarasimhan from "../../../Assets/Sports/RAMANARASIMHAN.jpeg";
import priyadarshini from "../../../Assets/Sports/priyadarshini.jpeg";
import mariyammal from "../../../Assets/Sports/mariyammal.jpg";
import manimozhi from "../../../Assets/Sports/manimozhi.jpeg";
import lakshmiPriya from "../../../Assets/Sports/lakshmi priya.jpg";
import devika from "../../../Assets/Sports/devika.jpeg";
import deshika from "../../../Assets/Sports/deshika.jpeg";
import deepikaPallikal from "../../../Assets/Sports/deepika pallikal.jfif";
import bagavathyNew from "../../../Assets/Sports/bagavathy.jpg";
import anjali from "../../../Assets/Sports/anjali.jpg";
import akshaya from "../../../Assets/Sports/akshaya .jpeg";
import abhishekShannon from "../../../Assets/Sports/ABHISHEK SHANNON.jpeg";

import aravindSekar from "../../../Assets/Sports/ARAVINDAN SEKAR.jpg";
import chandrakandan from "../../../Assets/Sports/Chandrakanthan D.jpg";
import jagadeshprabhu from "../../../Assets/Sports/Jagadeesh Prabhu.jpg";
import jage from "../../../Assets/Sports/Jagadesh Kumar. A.jpg";

import jagatheesan from "../../../Assets/Sports/Jagatheesan. P.jpg";
import kabilKannan from "../../../Assets/Sports/Kabil Kannan. M.jpg";
import kalidasan from "../../../Assets/Sports/Kalidasan. K.jpg";
import karanVasudevan1 from "../../../Assets/Sports/Karan Vasudevan.jpg";
import porchezian from "../../../Assets/Sports/Porchezian V.jpg";
import senthilVelan from "../../../Assets/Sports/Senthil Velan. M.jpg";
import sivasubramanian from "../../../Assets/Sports/Sivasubramanian N.jpg";
import bagavathy from "../../../Assets/Sports/R. Bagavathy.jpg";
import durga from "../../../Assets/Sports/Durga.jpg";
import gowri from "../../../Assets/Sports/Gowri.jpg";
import mala from "../../../Assets/Sports/Mala.jpg";
import sabrina from "../../../Assets/Sports/Sabrina.jpg";
import srisha from "../../../Assets/Sports/Srisha.jpg";
import sruthika from "../../../Assets/Sports/Sruthika.jpg";
import sumithra from "../../../Assets/Sports/Sumithra.jpg";
import nivetha from "../../../Assets/Sports/R.S. Nivetha.jpg";

import nationalSportsDay from "../../../Assets/Sports/National Sports Day.jpg";
import AnnualSportsDay from "../../../Assets/Sports/Annual Sports Day.jpg";
import yogaday from "../../../Assets/Sports/Yoga Day.jpg";
import umaDevi from "../../../Assets/Sports/umaDevi.png";
import beatricePaulina from "../../../Assets/Sports/pauli.jpg";

const Sports = () => {
  const achievementScrollRef = useRef(null);
  const annualEventsScrollRef = useRef(null);
  const [canAchievementPrev, setCanAchievementPrev] = useState(false);
  const [canAchievementNext, setCanAchievementNext] = useState(false);
  const [canAnnualPrev, setCanAnnualPrev] = useState(false);
  const [canAnnualNext, setCanAnnualNext] = useState(false);

  const updateAchievementControls = () => {
    const node = achievementScrollRef.current;
    if (!node) {
      return;
    }

    setCanAchievementPrev(node.scrollLeft > 2);
    setCanAchievementNext(
      node.scrollLeft + node.clientWidth < node.scrollWidth - 2,
    );
  };

  const handleAchievementScroll = (direction) => {
    const node = achievementScrollRef.current;
    if (!node) {
      return;
    }

    const scrollAmount = node.clientWidth * 0.75;
    node.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

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

  const intro = [
    "The Sports Department at Ethiraj College for Women is dedicated to fostering excellence, discipline, and leadership through a strong culture of athletics.",
    "With state-of-the-art infrastructure, expert coaching, and consistent representation at University, State, and National levels, the department encourages students to pursue sporting excellence alongside academic achievement.",
    "Students partake in sports like Archery, Athletics, Boxing, Cricket, Volley ball, Kho Kho, Kabbadi, Swimming, Weight Lifting, Ball Badminton, Chess, Shuttle, Hand ball, Karate, Hockey, Yoga, Throw ball, Shooting, Silambam, Rowing, Tennis, Atya Patya, and more.",
    "Proud of its legacy of accomplishments, Ethiraj continues to nurture confident, resilient women who excel both on and off the field.",
  ];

  const indoorFacilities = [
    "Carrom",
    "Chess",
    "Badminton",
    "Table Tennis",
    "Yoga Hall",
  ];

  const outdoorFacilities = [
    "Volleyball & Throwball Ground",
    "Atya - Patya",
    "Kho-Kho Court",
    "Basketball Court",
    "Kabaddi Court",
    "Ball Badminton Court",
    "Cricket Practice Nets",
  ];

  const indoorFacilityImages = [
    { src: indoor1, alt: "Indoor badminton court", size: "small" },
    { src: indoor2, alt: "Indoor carrom board", size: "small" },
    { src: indoor3, alt: "Indoor chess match", size: "large" },
    { src: indoor4, alt: "Table tennis practice", size: "small" },
    { src: indoor5, alt: "Yoga session hall", size: "small" },
  ];

  const outdoorFacilityImages = [
    { src: outdoor1, alt: "Outdoor volleyball court", size: "large" },
    { src: outdoor2, alt: "Outdoor training ground", size: "small" },
    { src: outdoor3, alt: "Outdoor athletics activity", size: "small" },
    { src: outdoor4, alt: "Outdoor sports practice", size: "large" },
    { src: outdoor5, alt: "Outdoor sports practice", size: "large" },
  ];

  const achievementHighlights = [
    {
      category: "International Achievement",
      title: "V. Jayalakshmi - First woman from Tamil Nadu to Sydney Olympics 2000",
      image: vJayalakshmi,
      imageFitType: "contain",
    },
    {
      category: "National Achievement",
      title: "Ramanarasimhan - International swimmer",
      image: ramanarasimhan,
      imageFitType: "contain",
    },
    {
      category: "National Achievement",
      title: "Dipika Pallikal - First student in the history of India to receive Arjuna Award 2012",
      image: deepikaPallikal,
      imageFitType: "cover",
    },
    {
      category: "International Achievement",
      title: "Abishek Shannon - Highest All India Women's Ranking 16th, International tennis Ranking 902",
      image: abhishekShannon,
      imageFitType: "contain",
    },
    {
      category: "International Achievement",
      title: "Akshaya A - Selected for Ruichang China Masters 2023 (super 100)",
      image: akshaya,
      imageFitType: "contain",
    },
    {
      category: "International Achievement",
      title: "Anjali Sadagopan - Represented India in International Tennis Federation Tournament (ITF)",
      image: anjali,
      imageFitType: "contain",
    },
    {
      category: "International Achievement",
      title: "R. Bagavathy - Participated in World University Rowing Championship held at Netherlands and got 5th Position",
      image: bagavathyNew,
      imageFitType: "contain",
    },
    {
      category: "International Achievement",
      title: "V. Dhesikha - Represented India in 4th South Asian Athletics Federation (SAAF) Senior Athletics Championship 2025",
      image: deshika,
      imageFitType: "contain",
    },
    {
      category: "International Achievement",
      title: "Devika Devarajan - AVC Challengers Cup held at Thailand and won Silver medal",
      image: devika,
      imageFitType: "contain",
    },
    {
      category: "International Achievement",
      title: "SS. Lakshmi Priyanka - Badminton Confederation Africa International Won Bronze Medal",
      image: lakshmiPriya,
      imageFitType: "contain",
    },
    {
      category: "International Achievement",
      title: "A Manimozhi - Selected for India for the International Indoor Hockey Tournament in Vietnam",
      image: manimozhi,
      imageFitType: "contain",
    },
    {
      category: "International Achievement",
      title: "B. Mariyammal - Represented India in Indian National Women's invitation match held at Sikkim",
      image: mariyammal,
      imageFitType: "contain",
    },
    {
      category: "International Achievement",
      title: "Priyadarshini.K - Represented India and secured Gold medal in 1st Asian Atya Patya Championship held at Kathmandu, Nepal",
      image: priyadarshini,
      imageFitType: "cover",
    },
    {
      category: "International Achievement",
      title: "Reshma.S - Represented India in 9th South Asian Atya Patya Championship 2025",
      image: reshma,
      imageFitType: "contain",
    },
    {
      category: "International Achievement",
      title: "S. Gayathri - Represented India in 10th Asia Pacific Deaf Games and got 4th Place",
      image: sGayathri,
      imageFitType: "cover",
    },
    {
      category: "International Achievement",
      title: "R. Sharmili - Won 2 Gold medal in International Silambam Championship held at Nepal",
      image: sharmili,
      imageFitType: "contain",
    },
    {
      category: "International Achievement",
      title: "Ujjaval - Represented India in Singapore open Floorball Championship and got 7th rank",
      image: ujjaval,
      imageFitType: "contain",
    },
    {
      category: "International Achievement",
      title: "V.S Yogalakshmi - Represented India and secured Silver medal in United World Sports Fitness Federation World Pro Powerlifting Championship 2025",
      image: yogalakshmi,
      imageFitType: "contain",
    },
  ];

  const coaches = [
    { name: "Aravindan Sekar", caption: "Ball Badminton", image: aravindSekar },
    { name: "Chandrakanthan D", caption: "Football & Hockey", image: chandrakandan },
    { name: "Jagadeesh Prabhu", caption: "Table Tennis", image: jagadeshprabhu },
    { name: "Jagadeesh Kumar A", caption: "Cricket", image: jage },
    { name: "Jagatheesan P", caption: "Volleyball", image: jagatheesan },
    { name: "Kabil Kannan M", caption: "Handball", image: kabilKannan },
    { name: "Kalidasan K", caption: "Football", image: kalidasan },
    { name: "Karan Vasudevan", caption: "Tennis", image: karanVasudevan1 },
    { name: "Porchezian V", caption: "Hockey", image: porchezian },
    { name: "Senthil Velan M", caption: "Kho-Kho", image: senthilVelan },
    { name: "Sivasubramanian", caption: "Atya Patya", image: sivasubramanian },
  ];
  const sportsAppointments = [
    {
      name: "R. Bagavathy",
      dept: "Medical & Rural Health",
      role: "Rower",
      program: "B.Sc. Nutrition and Dietetics",
      image: bagavathy,
    },
    {
      name: "Durga",
      dept: "Social Welfare",
      role: "Football Player",
      program: "M.A. History",
      image: durga,
    },
    {
      name: "Gowri",
      dept: "Medical & Rural Health",
      role: "Volleyball Player",
      program: "M.A. Business Economics",
      image: gowri,
    },
    {
      name: "Mala",
      dept: "Highways",
      role: "Kabaddi Player",
      program: "M.A. History",
      image: mala,
    },
    {
      name: "Sabrina",
      dept: "Southern Railways",
      role: "Cricketer",
      program: "B.A. History",
      image: sabrina,
    },
    {
      name: "Srisha",
      dept: "Block Health Statistician",
      role: "Volleyball Player",
      program: "M.A. Business Economics",
      image: srisha,
    },
    {
      name: "Sruthika",
      dept: "Southern Railways",
      role: "Basketball Player",
      program: "M.A. Business Economics",
      image: sruthika,
    },
    {
      name: "Sumithra",
      dept: "Seunior Assistant in Corporate",
      role: "Basketball Player",
      program: "B.A. Economics",
      image: sumithra,
    },
    {
      name: "R.S. Nivetha",
      dept: "Education",
      role: "Yoga",
      program: "M.A. English",
      image: nivetha,
    },
  ];
  const annualEvents = [
    { title: "National Sports Day", image: nationalSportsDay },
    { title: "Annual Sports Day", image: AnnualSportsDay },
    { title: "Yoga Day", image: yogaday },
  ];

  useEffect(() => {
    updateAchievementControls();
  }, [achievementHighlights.length]);

  useEffect(() => {
    updateAnnualControls();
  }, [annualEvents.length]);

  return (
    <div>
      <BannerSection />
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            py: { xs: "54px", sm: "54px", md: "38px", lg: "54px" },
          }}
        >
          <Typography variant="subHeadingTextInterMedium" sx={{ mb: 2 }}>
            The Sports Department at Ethiraj College for Women is dedicated to
            fostering excellence, discipline, and leadership through a strong
            culture of athletics.
          </Typography>
          {intro.slice(1).map((text) => (
            <>
              <Typography
                key={text}
                variant="typographyBodyInterNormal"
                sx={{ mb: 2 }}
              >
                {text}
              </Typography>
            </>
          ))}
        </Box>

        <Box>
          <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 2 }}>
            Infrastructure & Facilities
          </Typography>
          <Typography
            variant="typographyBodyInterNormal"
            sx={{
              maxWidth: "920px",
              mb: { xs: "48px", md: "30px", lg: "48px" },
            }}
          >
            The campus offers a comprehensive range of indoor and outdoor
            facilities students with year-round training and recreation
            opportunities. These are designed to encourage participation at both
            competitive and recreational levels, while fostering discipline,
            teamwork, resilience, and physical well-being.
          </Typography>

          <Grid container spacing={2}>
            <Grid item size={{ xs: 12 }}>
              <Typography
                variant="subHeadingTextInterMedium"
                sx={{ color: "#81607A" }}
              >
                Indoor Facilities
              </Typography>
            </Grid>
            <Grid item size={{ xs: 12, sm: 4.5, md: 4.5 }}>
              {indoorFacilities.map((item, index) => (
                <Typography
                  key={index}
                  variant="secondaryTextInterRegularSmall"
                  sx={{
                    py:
                      1 === index + 1
                        ? 0
                        : { xs: "8px", md: "10px", lg: "17px" },
                    pb:
                      1 === index + 1
                        ? { xs: "8px", md: "10px", lg: "17px" }
                        : 0,
                    borderBottom: "1px solid #D5D6DA",
                    fontWeight: { xs: "500 !important", md: "400 !important" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Grid>

            <Grid
              item
              size={{ xs: 12, sm: 7.5, md: 7.5 }}
              sx={{ mt: { xs: "48px", sm: "0" } }}
            >
              <ImageWidthSlider
                images={indoorFacilityImages}
                imageHeight={{ xs: 300, sm: 300, md: 350, lg: 450 }}
              />
            </Grid>
            <Grid
              item
              size={{ xs: 12 }}
              sx={{ mt: { xs: 2, md: 4 }, mb: { xs: 2 } }}
            >
              <Typography
                variant="subHeadingTextInterMedium"
                sx={{ color: "#81607A" }}
              >
                Outdoor Facilities
              </Typography>
            </Grid>
            <Grid item size={{ xs: 12, sm: 4.5, md: 4.5 }}>
              {outdoorFacilities.map((item, index) => (
                <Typography
                  key={index}
                  variant="typographyTabelInterText"
                  sx={{
                    py:
                      1 === index + 1
                        ? 0
                        : { xs: "8px", md: "10px", lg: "17px" },
                    pb:
                      1 === index + 1
                        ? { xs: "8px", md: "10px", lg: "17px" }
                        : 0,
                    borderBottom: "1px solid #D5D6DA",
                    fontWeight: { xs: "500 !important", md: "400 !important" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Grid>

            <Grid
              item
              size={{ xs: 12, sm: 7.5, md: 7.5 }}
              sx={{ mt: { xs: "48px", sm: "0" } }}
            >
              <ImageWidthSlider
                images={outdoorFacilityImages}
                imageHeight={{ xs: 300, sm: 300, md: 320, lg: 450 }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: { xs: 5, md: 7 } }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{ mb: { xs: "20px", md: "28px", lg: "32px" } }}
          >
            Achievement Highlights
          </Typography>
          <Typography
            variant="typographyBodyInterNormal"
            sx={{
              width: { xs: "100%", md: "60%" },
              mb: { xs: "20px", md: "50px", lg: "64px" },
            }}
          >
            Ethiraj students actively compete across a wide range of sporting
            arenas, bringing pride to the institution through their remarkable
            performances. Though their accomplishments are many, the highlights
            below showcase some of the most noteworthy victories and
            recognitions earned through perseverance and teamwork.
          </Typography>
          <Box
            ref={achievementScrollRef}
            onScroll={updateAchievementControls}
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
            {achievementHighlights.map((item) => (
              <Box
                key={item.title}
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "85%", sm: "48%", md: "35%", lg: "30%" },
                  minWidth: { xs: "85%", sm: "48%", md: "35%", lg: "30%" },
                  display: "flex",
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    border: "1px solid #D5D6DA",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      background: "#E2B9ED",
                      height: { xs: 200, sm: 230 ,md:"280px",lg:"350px"},
                      objectFit: item?.imageFitType,
                    }}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                    }}
                  >
                    <Typography
                      variant="typographyBodyInterNormalSmall"
                      sx={{
                        textTransform: "uppercase",
                        mb: 1,
                      }}
                    >
                      {item.category}
                    </Typography>
                    <Typography
                      variant="typographyBodyInterMaintext"
                      sx={{ minHeight: { xs: 44, sm: 66 } }}
                    >
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
              onClick={() => handleAchievementScroll("prev")}
              disabled={!canAchievementPrev}
              sx={{ border: "1px dashed #343A40" }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => handleAchievementScroll("next")}
              disabled={!canAchievementNext}
              sx={{ border: "1px dashed #343A40" }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ my: { xs: "48px", sm: "55px", md: "72px", lg: "82px" } }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{ mb: { xs: "20px", sm: "40px", md: "40px", lg: "48px" } }}
          >
            Director of Physical Education
          </Typography>
          <Grid container spacing={6}>
            <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
              <Card elevation={0} sx={{ background: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "24px",
                    flexDirection: { xs: "row", sm: "row" ,md:"row"},
                    alignItems: { sm: "flex-start" },
                  }}
                >
                  <Box>
                    <CardMedia
                      component="img"
                      image={umaDevi}
                      alt="Dr. C. Uma Devi"
                      sx={{
                        width: { xs: 170, sm: 210, md: 220, lg: 267 },
                        height: { xs: 220, sm: 271, md: 285, lg: 345 },
                        aspectRatio: "89 / 115",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box>
                    <CardContent
                      sx={{
                        p: { xs: "12px 0", sm: "0" },
                        maxWidth: "100%",
                      }}
                    >
                      <Typography variant="subHeadingTextInterMedium" sx={{fontFamily:"Newsreader"}}>
                        Dr. C. Uma Devi
                      </Typography>
                      <Typography
                        variant="typographyBodyInterNormal"
                        sx={{
                          mt: { xs: "20px", sm: "24px", md: "18px", lg: "24px" },
                        }}
                      >
                        Senate Member - Periyar University
                      </Typography>

                      <Typography
                        variant="typographyBodyInterNormal"
                        sx={{
                          mt: { xs:"8px"},
                        }}
                      >
                        Convener - University of Madras B-Zone Sports & Tournament
                      </Typography>
                      <Typography
                        variant="typographyBodyInterNormal"
                        sx={{
                          mt: { xs: "20px", sm: "24px", md: "18px", lg: "24px" },
                        }}
                      >
                        Basketball National Silver Medalist. Represented University
                        of Madras, South Zone Winner 
                      </Typography>
                      <Typography
                        variant="typographyBodyInterNormal"
                        sx={{
                          mt: { xs:"8px"},
                        }}
                      >
                        8 publications including
                        Test Measurement and Evaluation.
                      </Typography>
                    </CardContent>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
              <Card elevation={0} sx={{ background: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "24px",
                    flexDirection: { xs: "row", sm: "row", md: "row" },
                    alignItems: { sm: "flex-start" },
                  }}
                >
                  <Box>
                    <CardMedia
                      component="img"
                      image={beatricePaulina}
                      alt="Ms. Beatrice Paulina Joseph"
                      sx={{
                        width: { xs: 170, sm: 210, md: 220, lg: 267 },
                        height: { xs: 220, sm: 271, md: 285, lg: 345 },
                        aspectRatio: "89 / 115",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box>
                    <CardContent
                      sx={{
                        p: { xs: "12px 0", sm: "0" },
                        maxWidth: "100%",
                      }}
                    >
                      <Typography variant="subHeadingTextInterMedium" sx={{fontFamily:"Newsreader"}}>
                        Ms. Beatrice Paulina Joseph
                      </Typography>
                      <Typography
                        variant="typographyBodyInterNormal"
                        sx={{
                          mt: { xs: "8px" },
                        }}
                      >
                        Director of Physical Education (SS)
                      </Typography>
                      <Typography
                        variant="typographyBodyInterNormal"
                        sx={{
                          mt: { xs: "8px" },
                        }}
                      >
                        B.B.A, B.P.Ed, M.P.Ed, NIS (Topper)
                      </Typography>
                      <Typography
                        variant="typographyBodyInterNormal"
                        sx={{
                          mt: { xs: "20px", sm: "24px", md: "18px", lg: "24px" },
                        }}
                      >
                        Volleyball Indian Camp U-21
                      </Typography>
                      <Typography
                        variant="typographyBodyInterNormal"
                        sx={{
                          mt: { xs: "8px" },
                        }}
                      >
                         National Games Gold Medalist
                      </Typography>
                       <Typography
                        variant="typographyBodyInterNormal"
                        sx={{
                          mt: { xs: "8px" },
                        }}
                      >
                       Tamil Nadu Volleyball Women Team - Junior - Head Coach (Gold Medal)
                      </Typography>
                      <Typography
                        variant="typographyBodyInterNormal"
                        sx={{
                          mt: { xs: "8px" },
                        }}
                      >
                        Tamil Nadu Volleyball Women Team -Senior National Games (Silver Medal)
                      </Typography>
                    </CardContent>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ my: { xs: "48px", sm: "55px", md: "72px", lg: "82px" } }}>
          <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 2.5 }}>
            Coaches
          </Typography>

          <CustomImageSliderNext items={coaches} showDefaultDetails={false} nameVariant="subHeadingTextInterMedium" nameSx={{ mt: 1 }} trackSx={{ gap: 2 }} />
        </Box>

        <Box sx={{ mt: { xs: 5, md: 7 } }}>
          <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 2 }}>
            Sports Appointment
          </Typography>
          <Typography
            variant="subHeadingTextInterMedium"
            sx={{ color: "#81607A", mb: 2.5 }}
          >
            2025-2026
          </Typography>

          <CustomImageSliderNext
            items={sportsAppointments}
            showDefaultDetails={false}
            sportsAppointmentDetails
            nameVariant="subHeadingTextInterMedium"
            nameSx={{ mt: 1 }}
            trackSx={{ gap: 2 }}
          />
        </Box>

        <Box sx={{ my: { xs: "48px", sm: "55px", md: "72px", lg: "82px" } }}>
          <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 2.5 }}>
            Events & Annual Activities
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
    </div>
  );
};

export default Sports;
