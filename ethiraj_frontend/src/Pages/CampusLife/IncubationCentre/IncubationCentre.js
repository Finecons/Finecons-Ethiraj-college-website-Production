import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import BannerSection from "../../AboutUs/ControllerofExaminations/CustomBannerSection";
import bannerimage from "../../../Assets/IncubationCentreBannerImage.jpg";
import CustomTabs from "../../../Components/CustomTabs/CustomTabs";

// Contact Details Images
import drSushmaCatherinePrabhakar from "../../../Assets/Dr. Sushma Catherine Prabhakar.png";
import drMenaka from "../../../Assets/Dr. M. Menaka.png";
import drVidyalakshmiPng from "../../../Assets/Dr. A. Vidyalakshmi.png";
import collabrationImage from "../../../Assets/collabrationImage.jpg";

// Infrastructure Images
import meetingSpaces from "../../../Assets/Meeting spaces for mentoring and reviews.jpg";
import discussionSeating from "../../../Assets/Discussion and seating areas.jpg";
import computingFacilities from "../../../Assets/Computing facilities with internet access.jpg";
import dedicatedWorkspace from "../../../Assets/Dedicated incubation workspace.jpg";

// Other Section Images
import developmentSupportImg from "../../../Assets/Development Support.jpg";
import mentorshipGuidanceImg from "../../../Assets/Mentorship & Guidance.jpg";
import veena from "../../../Assets/Dr.Veena Murali.jpg";
// Reusable Two-Column Section Component (Image + Content)
const TwoColumnSection = ({ title, items, image, imagePosition = "right" }) => {
  const contentColumn = (
    <Grid
      item
      size={{ xs: 12, md: 6 }}
      sx={{ display: "flex", flexDirection: "column", justifyContent: "start" }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map((item, idx) => (
          <Box key={idx}>
            <Typography variant="typographyBodyInterMaintext" sx={{ mb: 1 }}>
              {item}
            </Typography>
            <Divider sx={{ mb: 2, borderColor: "black" }} />
          </Box>
        ))}
      </Box>
    </Grid>
  );

  const imageColumn = (
    <Grid item size={{ xs: 12, md: 6 }}>
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: { xs: "250px", sm: "350px", md: "440px", lg: "601px" },
          flexShrink: 0,
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
    </Grid>
  );

  return (
    <Box
      sx={{
        mt: { xs: "50px", sm: "50px", md: "58px", lg: "87px" },
        mb: 6,
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
      }}
    >
      <Typography
        variant="subHeadingTextInterMedium"
        sx={{
          mb: { xs: "24px", sm: "24px", md: "38px", lg: "50px" },
          color: "#6B3C58",
        }}
      >
        {title}
      </Typography>

      <Grid container spacing={4} alignItems="flex-start">
        {imagePosition === "left" ? (
          <>
            {imageColumn}
            {contentColumn}
          </>
        ) : (
          <>
            {contentColumn}
            {imageColumn}
          </>
        )}
      </Grid>
    </Box>
  );
};

// Component for About Incubation Centre
const AboutIncubationCentre = ({ aboutIncubationDatas }) => {
  return (
    <Box
      sx={{
        mt: 4,
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
        maxWidth: { xs: "100%", md: "80%" },
      }}
    >
      <Typography
        variant="headingTextNewsreaderMedium"
        sx={{ mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" } }}
      >
        {aboutIncubationDatas.title}
      </Typography>
      <Typography variant="typographyBodyInterMaintext">
        {aboutIncubationDatas.description1}
      </Typography>
      <br />
      <Typography variant="typographyBodyInterMaintext">
        {aboutIncubationDatas.description2}
      </Typography>
      <Typography variant="typographyBodyInterMaintext">
        {aboutIncubationDatas.subtitle}
      </Typography>
    </Box>
  );
};

// Component for What the Centre Offers
const WhatCentreOffers = ({ whatCentreDatas }) => {
  return (
    <Box
      sx={{
        mt: { xs: "50px", sm: "50px", md: "58px", lg: "87px" },
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
      }}
    >
      <Typography
        variant="headingTextNewsreaderMedium"
        sx={{ mb: { xs: "24px", sm: "24px", md: "18px", lg: "26px" } }}
      >
        {whatCentreDatas.title}
      </Typography>

      {whatCentreDatas.offerings.map((offering, index) => (
        <Box key={index}>
          <Typography
            variant="subHeadingTextInterMedium"
            sx={{
              mb: { xs: "24px", sm: "24px", md: "38px", lg: "50px" },
              color: "#6B3C58",
            }}
          >
            {offering.name}
          </Typography>

          <Grid container spacing={4}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={offering.image}
                alt={offering.name}
                sx={{
                  width: "100%",
                  // width: { xs: "100%", sm: "100%", md: "500px", lg: "620px" },
                  height: {
                    xs: "250px",
                    sm: "350px",
                    md: "440px",
                    lg: "601px",
                  },
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </Grid>

            <Grid
              item
              size={{ xs: 12, md: 6 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {offering.features.map((feature, idx) => (
                  <Box key={idx}>
                    <Typography
                      variant="typographyBodyInterMaintext"
                      sx={{ mb: 1 }}
                    >
                      {feature}
                    </Typography>
                    <Divider sx={{ mb: 2, borderColor: "black" }} />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

// Component for Development Support
const DevelopmentSupport = ({ developmentDatas }) => {
  return (
    <TwoColumnSection
      title={developmentDatas.title}
      items={developmentDatas.features}
      image={developmentDatas.image}
      imagePosition="right"
    />
  );
};

// Component for Infrastructure
const Infrastructure = ({ infrastructureDatas }) => {
  return (
    <Box
      sx={{
        mt: { xs: "50px", sm: "50px", md: "58px", lg: "87px" },
        mb: 6,
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
      }}
    >
      <Typography
        variant="subHeadingTextInterMedium"
        sx={{
          mb: { xs: "24px", sm: "24px", md: "38px", lg: "50px" },
          color: "#6B3C58",
        }}
      >
        {infrastructureDatas.title}
      </Typography>

      <Grid container spacing={2}>
        {infrastructureDatas.cards.map((card, index) => (
          <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Box>
              <Box
                component="img"
                src={card.image}
                alt={card.title}
                sx={{
                  // width: { xs: "180px", sm: "220px", md: "280px", lg: "341px" },
                  width: "100%",
                  height: {
                    xs: "301px",
                  },
                  aspectRatio: "1/1",
                  borderRadius: "8px",
                  objectFit: "cover",
                  mb: { xs: 2, sm: 2, md: 2, lg: "48px" },
                }}
              />
              <Typography
                variant="subHeadingTextInterMedium"
                sx={{ mb: 1, display: "block" }}
              >
                {card.title}
              </Typography>
              <Typography variant="typographyBodyInterNormal">
                {card.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// Component for Collaboration
const Collaboration = ({ collaborationDatas }) => {
  return (
    <TwoColumnSection
      title={collaborationDatas.title}
      items={collaborationDatas.items}
      image={collaborationDatas.image}
      imagePosition="right"
    />
  );
};

// Component for Contact Details
const ContactDetails = ({ contactDetailsDatas }) => {
  return (
    <Box
      sx={{
        mt: { xs: "50px", sm: "50px", md: "58px", lg: "87px" },
        mb: 6,
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
      }}
    >
      <Typography variant="headingTextNewsreaderMedium" sx={{ mb: "20px" }}>
        {contactDetailsDatas.title}
      </Typography>
      <Divider
        sx={{
          mb: { xs: "24px", sm: "24px", md: "34px", lg: "48px" },
          borderColor: "black",
        }}
      />

      <Grid container spacing={4}>
        {contactDetailsDatas.contacts.map((contact, index) => (
          <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index} sx={{}}>
            <Box
              sx={{
                // border: "1px solid #ddd",
                // borderRadius: "8px",
                p: 3,
              }}
            >
              <Box
                sx={{
                  borderBottom: "1px solid black",
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                }}
              >
                <Box
                  component="img"
                  src={contact.photo}
                  alt={contact.name}
                  sx={{
                    width: {
                      xs: "100px",
                      sm: "140px",
                      md: "190px",
                      lg: "251px",
                    },
                    height: {
                      xs: "130px",
                      sm: "180px",
                      md: "245px",
                      lg: "324px",
                    },
                    aspectRatio: "55/71",
                    flexShrink: 0,
                    // borderRadius: "8px",
                    objectFit: "cover",
                    mb: 2,
                    display: "block",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: "24px", sm: "24px", md: "16px", lg: "18px" },
                  }}
                >
                  <Typography variant="leadershipContentTextNewsreaderMedium">
                    {contact.name}
                  </Typography>
                  <Typography
                    variant="typographyBodyInterMaintext"
                    sx={{ fontWeight: 600 }}
                  >
                    {contact.title}
                  </Typography>
                  <Box>

                    <Typography variant="typographyBodyInterNormal">
                      {contact.department}
                    </Typography>
                  </Box>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ color: "#0066cc" }}
                  >
                    {contact.email}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const IncubationCentre = ({ isMainTabsActive, mainTabsRef }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const { getAllIQACSectionsBySectionName } = useSelector(
    (state) => state?.getAllIQACSectionsBySectionName,
  );

  console.log(getAllIQACSectionsBySectionName);

  // Data for each section
  const aboutIncubationDatas = {
    title: "About Incubation Centre",
    description1:
      "The Incubation Centre acts as a bridge between innovation and entrepreneurship. It supports students and faculty-led innovations that have cleared initial idea screening, by enabling mentoring, proof-of-concept development, and guided progress.",
    description2:
      "The Incubation Centre supports institutionally shortlisted ideas at the early development stage. Working in coordination with the Innovation Cell, the Centre provides mentoring and structured support to help ideas progress towards proof-of-concept and entrepreneurship readiness.",
    subtitle: "About the Centre",
  };

  const whatCentreDatas = {
    title: "What the Centre Offers",
    offerings: [
      {
        name: "Mentorship & Guidance",
        image: mentorshipGuidanceImg,
        features: [
          "Faculty mentors aligned to domain expertise",
          "External expert interactions when required",
          "Continuous progress review and milestone tracking",
        ],
      },
    ],
  };

  const membershipDatas = {
    title: "Membership & Guidance",
    description:
      "Details about membership and guidance programs at the Incubation Centre will be updated soon.",
  };

  const developmentDatas = {
    title: "Development Support",
    image: developmentSupportImg,
    features: [
      "Assistance in building proof-of-concept models",
      "Guidance on grants and seed funding",
      "Support for patent filing and IPR processes",
      "Help with documentation and compliance",
    ],
  };

  const infrastructureDatas = {
    title: "Infrastructure",
    cards: [
      {
        image: dedicatedWorkspace,
        title: "Dedicated incubation workspace",
        description:
          "A focused and collaborative workspace designed to nurture innovative ideas and startup development.",
      },
      {
        image: computingFacilities,
        title: "Computing facilities with internet access",
        description:
          "Equipped with modern computing systems and high-speed internet to support research and project development.",
      },
      {
        image: discussionSeating,
        title: "Discussion and seating areas",
        description:
          "Comfortable seating and discussion zones that encourage teamwork, brainstorming, and idea exchange.",
      },
      {
        image: meetingSpaces,
        title: "Meeting spaces for mentoring and reviews",
        description:
          "Well-equipped meeting areas for mentoring sessions, project reviews, and expert interactions.",
      },
    ],
  };

  const collaborationDatas = {
    title: "Collaboration",
    image: collabrationImage,
    items: [
      "In collaboration with the Centre for Innovation and Development",
      "In association with Entrepreneurship Development Cell (E-Cell)",
      "In association with government innovation agencies",
      "Aligned with academic and research institutions",
    ],
  };

  const contactDetailsDatas = {
    title: "Contact Details",
    contacts: [
      {
        photo: drVidyalakshmiPng,
        name: "Dr. A. Vidyalakshmi",
        title: "Faculty Coordinator (Aided)",
        department:
          "Department of Plant Biology and Plant Biotechnology",
        email: "vidyalakshmi_a@ethirajcollege.edu.in",
      },
      {
        photo: drMenaka,
        name: "Dr. M. Menaka",
        title: "Faculty Coordinator (SS)",
        department:
          "Department of Clinical Nutrition and Dietetics",
        email: "menaka@ethirajcollege.edu.in",
      },
      {
        photo: veena,
        name: "Dr. Veena Murali",
        title: "Faculty Coordinator (Aided)",
        department:
          "Department of Commerce (Aided)",
        email: "Veenamurali@ethirajcollege.edu.in",
      },
      
      {
        photo: drSushmaCatherinePrabhakar,
        name: "Dr. Sushma Catherine Prabhakar",
        title: "Faculty Coordinator (SS)",
        department: "Department of Commerce (Self Supporting)",
        email: "sushmacatherine@ethirajcollege.edu.in",
        socialLinks: [
          { icon: "🎯", color: "#34A853", url: "#" },
          { icon: "✏️", color: "#fff", url: "#" },
          { icon: "📋", color: "#fff", url: "#" },
          { icon: "</>", color: "#34A853", url: "#" },
        ],
      },
    ],
  };

  const sections = [
    {
      label: "Incubation Centre",
      component: (
        <AboutIncubationCentre aboutIncubationDatas={aboutIncubationDatas} />
      ),
    },
    {
      label: "What the Centre Offers",
      component: <WhatCentreOffers whatCentreDatas={whatCentreDatas} />,
    },

    {
      label: "Development Support",
      component: <DevelopmentSupport developmentDatas={developmentDatas} />,
    },
    {
      label: "Infrastructure",
      component: <Infrastructure infrastructureDatas={infrastructureDatas} />,
    },
    {
      label: "Collaboration",
      component: <Collaboration collaborationDatas={collaborationDatas} />,
    },
    // {
    //   label: "Contact Details",
    //   component: <ContactDetails contactDetailsDatas={contactDetailsDatas} />,
    // },
  ];

  const bannerDatas = {
    title: "Incubation Centre",
    bannerimage: bannerimage,

    breadcrumbsItems: [
      { name: "Home", to: "/" },
      { name: "Career Development", to: "/campuslife/careerdevelopment" },
      { name: "Incubation Centre" },
    ],
  };

  return (
    <Box>
      <BannerSection bannerDatas={bannerDatas} />

      <Box ref={mainTabsRef}>
        <CustomTabs
          padding="none"
          sections={sections}
          isStickyActive={isMainTabsActive}
        />
      </Box>
      <ContactDetails contactDetailsDatas={contactDetailsDatas} />
    </Box>
  );
};

export default IncubationCentre;
