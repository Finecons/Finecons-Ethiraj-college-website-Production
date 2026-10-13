import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

import BannerSection from "../../../Components/CustomBannerSection/CustomBannerSection";
import CustomTabs from "../../../Components/CustomTabs/CustomTabs";
import image from "../../../Assets/International.png";

// Component imports
import AboutInternationalRelations from "./AboutInternationalRelations";
import OurInternationalOfferings from "./OurInternationalOfferings";

import InfrastructureSection from "./InfrastructureSection";
import ContactDetailsSection from "./ContactDetailsSection";

// Placeholder imports - replace with actual images
import mentorshipImage from "../../../Assets/International Realtions/Mentorship & Guidance.png";

// Infrastructure images
import globalHubImage from "../../../Assets/International Realtions/globalhubImage.jpg";
import meetingFacilitiesImage from "../../../Assets/International Realtions/meetingFacilitiesImage.jpg";
import digitalConnectivityImage from "../../../Assets/International Realtions/digitalconnectivityImage.png";
import adminSupportImage from "../../../Assets/International Realtions/AdministrativeImage.png";

// Contact images - Using placeholder
import contactImage1 from "../../../Assets/International Realtions/kavithaImage.png";
import contactImage2 from "../../../Assets/International Realtions/yaminiImage.png";

const InternationalRelations = ({ mainTabsRef, isMainTabsActive }) => {
  const location = useLocation();

  const mentorshipItems = [
    "Personal guidance for students participating in international programs",
    "Support for travel, documentation, and academic coordination",
    "Faculty mentoring for global academic and research initiatives",
    "Cultural orientation and continuous support",
  ];

 

  const infrastructureItems = [
    {
      image: globalHubImage,
      title: "Global Hub",
      description:
        "A dedicated Centre for International Relations serves as Ethiraj College's gateway to worldwide academic partnerships, cultural exchanges, and global collaborations.",
    },
    {
      image: meetingFacilitiesImage,
      title: "Meeting Facilities",
      description:
        "Well-equipped meeting and coordination spaces provide a professional environment for hosting international delegations, partner institutions, and global academic discussions.",
    },
    {
      image: digitalConnectivityImage,
      title: "Digital Connectivity",
      description:
        "Advanced digital communication platforms enable students and faculty to seamlessly connect, collaborate, and engage with international peers and institutions across the world.",
    },
    {
      image: adminSupportImage,
      title: "Administrative Support",
      description:
        "A dedicated administrative team ensures smooth coordination of all international programmes — from documentation and visa assistance to exchange programme management.",
    },
  ];

  const contactPersons = [
    {
      name: "Dr. S. Kavitha",
      role: "Co-ordinators",
      department: "Department & College",
      details:
        "Centre for International Relations (CIR), Ethiraj College for Women (Autonomous)",
      email: "internationalrelations@ethirajcollege.edu.in",
      image: contactImage1,
    },
    {
      name: "Ms. P. Yamini",
      role: "Co-ordinators",
      department: "Department & College",
      details:
        "Centre for International Relations (CIR), Ethiraj College for Women (Autonomous)",
      email: "internationalrelations@ethirajcollege.edu.in",
      image: contactImage2,
    },
  ];

  const bannerDatas = {
    image: image,
    breadCrumbsData: [
      { name: "Home", to: "/" },
      { name: "Centre for International Relations" },
    ],
    title: "Centre for International Relations",
  };

  const sections = [
    {
      label: "About International Relations",
      component:<AboutInternationalRelations  />,
    },
    {
      label: "Our International Offerings",
      component: <OurInternationalOfferings
        mentorshipImage={mentorshipImage}
        mentorshipItems={mentorshipItems}
      />,
    },
    {
      label: "Infrastructure",
      component: <InfrastructureSection infrastructureItems={infrastructureItems} />,
    },
    {
      label: "Contact Details",
      component: <ContactDetailsSection contactPersons={contactPersons} />,
    },
  ];

  // Scroll-to logic for navigation
  useEffect(() => {
    const requestedTarget = location.state?.scrollTo;
    if (!requestedTarget) {
      return;
    }

    let attempts = 0;
    const maxAttempts = 50;

    const scrollToTarget = () => {
      const targetElement = document.getElementById(requestedTarget);
      if (!targetElement) {
        if (attempts < maxAttempts) {
          attempts++;
          requestAnimationFrame(scrollToTarget);
        }
        return;
      }

      const headerOffset = window.innerWidth < 900 ? 130 : 170;
      const top =
        targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    };

    scrollToTarget();
  }, [location]);

  return (
    <Box>
      <BannerSection bannerDatas={bannerDatas} />
      <Box ref={mainTabsRef}>
        <CustomTabs sections={sections} isStickyActive={isMainTabsActive} />
      </Box>

    </Box>
  );
};

export default InternationalRelations;
