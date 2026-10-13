import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import CustomBannerSection from "../../../Components/CustomBannerSection/CustomBannerSection";

import SectionHeader from "../../../Components/HealthandWellness/SectionHeader";
import ServiceList from "../../../Components/HealthandWellness/ServiceList";
import ImageSlider from "../../../Components/HealthandWellness/ImageSlider";

import clubsBanner from "../../../Assets/clubsBanner.jpg";

import counsellorImg from "../../../Assets/vanitharaj.png";
import availabilityImg from "../../../Assets/Counsellors.png";
import ImageSliderForHealth from "./ImageSliderForHealth";
import sliderImage1 from "../../../Assets/Campuslife/healthwellnesImageSlider1.png";
import sliderImage2 from "../../../Assets/Campuslife/healthTreatment.png";
import apollo from "../../../Assets/apollo.png";

const HealthandWellness = () => {
  const bannerDatas = {
    image: clubsBanner,
    breadCrumbsData: [
      { name: "Home", to: "/" },
      { name: "Campus Life", to: "/campuslife" },
      { name: "Health & Wellness" },
    ],
    title: "Health & Wellness",
  };

  const healthServices = [
    "On-call triage management",
    "E-prescriptions",
    "Emergency on-call support",
    "Basic Life Support Training Sessions",
    "First-aid support for sports & other events",
    "Campus Safety Audits",
    "Tele-consultation from the health room",
    "Gynaecologists visit in the first and third week of every month",
  ];

  // const sliderImages = [sliderImage1, sliderImage2];
  const sliderImages = [
    { src: sliderImage1, alt: "health and wellness image 1" },
    { src: sliderImage2, alt: "health and wellness image 2" },
  ];

  const wellnessServices = [
    "Private, goal-oriented sessions focused on personal growth",
    "Crisis Intervention: Prioritized support for students facing urgent psychological distress.",
    "Wellness Programming: stress mitigation and emotional regulation on a periodic basis.",
  ];

  const counsellorData = {
    name: "Vanitha Raj W",
    title: "Counselling Psychologist",
    email: "counsellor@ethirajcollege.edu.in",
    photo: counsellorImg,
  };

  const availabilityImage = availabilityImg;

  return (
    <>
      <CustomBannerSection bannerDatas={bannerDatas} />

      <Box sx={{ px: { xs: 2, sm: 3, md: "74px", lg: "94px" }, py: 6 }}>
        <SectionHeader title="Health" />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            // justifyContent: "start",
            gap: { xs:0, sm: 0, md: 6 },
            mb: { xs: "32px", lg: 0 },
          }}
        >
          <Box sx={{maxWidth:{ xs: "100%", sm: "100%", md: "60%" }}}>
            <Typography
              variant="typographyBodyInterNormal"
              sx={{
                // maxWidth: "80%",
                mt: { xs: "32px", sm: "32px", md: "32px", lg: "42px" },
              }}
            >
              To ensure a safe and healthy campus environment, our institution
              has partnered with Apollo Shine Foundation to operate a medical
              room within the campus.
            </Typography>{" "}
            <br />
            <Typography
              variant="typographyBodyInterNormal"
              sx={{
                fontWeight: 500,
                mb: { xs: "32px", sm: "32px", md: "32px", lg: "42px" },
              }}
            >
              The Apollo Shine Support services include:
            </Typography>
          </Box>
          <Box
            component="img"
            src={apollo}
            alt="Apollo Shine Foundation"
            sx={{ height: { xs: "100px", sm: "150px" } }}
          />
        </Box>

        {/* HEALTH SECTION */}
        <Grid container spacing={4} alignItems="stretch">
          <Grid item size={{ xs: 12 }}>
            <SectionHeader title="Our Health Support Includes" />
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 7 }} sx={{ display: "flex" }}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <ServiceList services={healthServices} />
            </Box>
          </Grid>

          <Grid
            item
            size={{ xs: 12, md: 6, lg: 5 }}
            sx={{ display: "flex", mt: { xs: "37px", md: 4, lg: 4 } }}
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <ImageSliderForHealth images={sliderImages} />
            </Box>
          </Grid>
        </Grid>
        {/* BOTTOM DESCRIPTION */}
        <Box
          sx={{
            width: { xs: "100%", md: "80%" },
            my: { xs: "32px", sm: "32px", md: "52px", lg: "82px" },
          }}
        >
          <Typography
            variant="secondaryTextInterRegularSmall"
            sx={{ fontWeight: "400 !important" }}
          >
            Every year, First-aid & Basic life support Training program for
            select staff members & student volunteers and Student Health
            Ambassador Program are being held. Medical camps, Calendar of Health
            Talks & webinars for students, teachers and parents are also
            conducted.
          </Typography>
          <br />
          <Typography
            variant="secondaryTextInterRegularSmall"
            sx={{ fontWeight: "400 !important" }}
          >
            Students, Staff and non-teaching staff avail the medical care
            facility offered in the campus thereby promoting a healthy and
            supportive learning environment.
          </Typography>

          <Typography variant="typographyHeadingHealth" sx={{ mt: "20px" }}>
            Find us at:
          </Typography>
          <Typography variant="secondaryTextInterRegularSmall">
            OId Hostel Block, Ground Floor
          </Typography>
        </Box>

        {/* WELLNESS SECTION */}

        <Box
          sx={{
            my: { xs: "42px", sm: "42px", md: "52px", lg: "82px" },
          }}
        >
          <SectionHeader title="Wellness" />

          <Typography
            variant="typographyBodyInterNormal"
            sx={{
              maxWidth: { xs: "100%", md: "80%" },
              mb: "21px",
            }}
          >
            Our Counsellors are dedicated to providing students with a
            professional, confidential environment to address the complexities
            of their lives. Our counsellors offer expert guidance on a range of
            concerns, including academic stress, transitional challenges, and
            emotional well-being. By fostering a culture of resilience and
            self-care.
          </Typography>

          <Typography
            variant="secondaryTextInterRegular"
            sx={{ fontWeight: "500 !important", mb: "21px" }}
          >
            Our core services include:
          </Typography>

          <ServiceList services={wellnessServices} />
          <Typography
            variant="typographyBodyInterNormal"
            sx={{ mt: { xs: "32px", sm: "32px", md: "32px", lg: "42px" } }}
          >
            We encourage students to engage with our resources.
          </Typography>

          <Typography
            variant="secondaryTextInterRegular"
            sx={{
              maxWidth: { xs: "100%", sm: "80%" },
              mt: { xs: "54px", sm: "54px", md: "54px", lg: "64px" },
            }}
          >
            To schedule a confidential intake or to view our full range of
            support contact us at:
          </Typography>

          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            // alignItems="stretch"
            sx={{ mt: { xs: "32px", sm: "32px", md: "54px", lg: "64px" } }}
          >
            {/* Counsellor Profile */}
            <Grid
              item
              size={{ xs: 12, sm: 4, md: 3 }}
              sx={{ display: "flex", alignItems: "flex-start" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  width: "100%",
                }}
              >
                <Box
                  component="img"
                  src={counsellorImg}
                  alt="Counsellor"
                  sx={{
                    // width: "250px",
                    width: "100%",
                    height: { xs: 255, md: 255, lg: 305 },
                    maxWidth: { xs: 150, sm: 180, md: 200 },

                    objectFit: "contain",
                    mb: 2,
                  }}
                />

                <Typography
                  variant="leadershipContentTextNewsreaderMedium"
                  sx={{ mb: 1 }}
                >
                  Vanitha Raj W
                </Typography>

                <Typography
                  variant="secondaryTextInterRegularSmall"
                  sx={{ mb: 1 }}
                >
                  Counselling Psychologist
                </Typography>

                <Typography
                  component="a"
                  variant="typographyBodyInterNormal"
                  href="mailto:counsellor@ethirajcollege.edu.in"
                  sx={{
                    fontSize: "14px",
                    color: "#1a73e8",
                    textDecoration: "underline",
                  }}
                >
                  counsellor@ethirajcollege.edu.in
                </Typography>
              </Box>
            </Grid>

            {/* OR Text */}
            <Grid
              item
              size={{ xs: 12, sm: 1, md: 1 }}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                fontWeight: 500,
              }}
            >
              <Typography>or</Typography>
            </Grid>

            {/* Availability Section */}
            <Grid item size={{ xs: 12, sm: 4, md: 4 }}>
              <Box>
                <Box
                  component="img"
                  src={availabilityImg}
                  alt="Counselling Session"
                  sx={{
                    width: { xs: "auto", sm: "auto", md: "auto" },
                    height: { xs: 255, md: 255, lg: 305 },

                    // maxWidth: { xs: 150, sm: 180, md: 200 },
                    objectFit: "cover",
                    mb: 2,
                  }}
                />

                <Typography
                  variant="secondaryTextInterRegularSmall"
                  sx={{ fontWeight: 500 }}
                >
                  Counsellors are Available at Campus I
                </Typography>

                <Typography variant="secondaryTextInterRegularSmall">
                  3rd Floor, Sports and Research Block.
                </Typography>

                <Typography variant="typographyInterNormal" sx={{ mt: 1 }}>
                  Timing : 10 am – 4 pm on all working days
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default HealthandWellness;
