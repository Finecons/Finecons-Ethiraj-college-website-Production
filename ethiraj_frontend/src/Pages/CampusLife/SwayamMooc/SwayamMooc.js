import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

import BannerSection from "../../../Components/CustomBannerSection/CustomBannerSection";
import CustomTabs from "../../../Components/CustomTabs/CustomTabs";
import image from "../../../Assets/Swayam_Banner.png";

// Component imports
import OurInternationalOfferings from "./ChooseSwayam";

import InfrastructureSection from "./InfrastructureSection";
import ContactDetailsSection from "./ContactDetailsSection";

// Placeholder imports - replace with actual images
import mentorshipImage from "../../../Assets/chooseSwayam.jpg";

// Infrastructure images
import globalHubImage from "../../../Assets/International Realtions/globalhubImage.jpg";
import meetingFacilitiesImage from "../../../Assets/International Realtions/meetingFacilitiesImage.jpg";
import digitalConnectivityImage from "../../../Assets/International Realtions/digitalconnectivityImage.png";
import adminSupportImage from "../../../Assets/International Realtions/AdministrativeImage.png";

// Contact images - Using placeholder
import contactImage1 from "../../../Assets/International Realtions/kavithaImage.png";
import contactImage2 from "../../../Assets/International Realtions/yaminiImage.png";
import AboutSwayamMOOCs from "./AboutSwayamMOOCs";
import ChooseSwayam from "./ChooseSwayam";
import HelpingStudents from "./HelpingStudents";
import CollaborationSection from "./CollaborationSection";

const SwayamMooc = ({ mainTabsRef, isMainTabsActive }) => {
  const mentorshipItems = [
    "Learn beyond your prescribed curriculum.",
    "Earn certificates from recognized institutions.",
    "Build practical, interdisciplinary, and career-focused skills.",
    "Study anytime, anywhere at your own pace.",
  "Access courses from India’s leading academic platforms.",
  "Strengthen your profile for placements and higher studies."
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
      {name:"Career Development", to:"/campuslife/careerdevelopment"},
      { name: "Swayam MOOCs" },
    ],
    title: "Swayam MOOCs",
  };

  const sections = [
    {
      label: "About Swayam MOOCs",
      component:<AboutSwayamMOOCs  />,
    },
    {
      label: "Why Choose Swayam",
      component: <ChooseSwayam 
        mentorshipImage={mentorshipImage}
        mentorshipItems={mentorshipItems}
      />,
    },
    {
      label: "Helping Students",
      component: <HelpingStudents />,
    },
    {
      label: "Incharge & Portal",
      component: <CollaborationSection />,
    },
  ];

  return (
    <Box>
      <BannerSection bannerDatas={bannerDatas} />
      <Box ref={mainTabsRef}>
        <CustomTabs sections={sections} isStickyActive={isMainTabsActive} />
      </Box>

    </Box>
  );
};

export default SwayamMooc;
