import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

import BannerSection from "../../../Components/CustomBannerSection/CustomBannerSection";
import CustomTabs from "../../../Components/CustomTabs/CustomTabs";
import image from "../../../Assets/quicklinkImagePolicy.jpg";

// Component imports
import AboutInternationalRelations from "./AboutACCA";

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
import HighlightsCourse from "./HighlightsCourse";
import accaEvents1 from "../../../Assets/accaEvents1.png";  
import accaEvents2 from "../../../Assets/accaevents2.png";
const ACCA = ({ mainTabsRef, isMainTabsActive }) => {
  const mentorshipItems = [
    "ACCA Program along with B.Com ",
    "Globally recognised Chartered Certified Accountants ",
    "5 ACCA papers exempted, only 8 exams to qualify ",
    "Strong foundation in Financial and Accounting skills  ",
    "Highly Competent Curriculum ",
    "Classes conducted at Ethiraj College Campus ",
    "continuous learning ensuring professionals to keep pace with industry needs",
  ];

  const accaEvents = [
    {
      image: accaEvents1,
      // title: "Global Hub",
      description:
      "Chairman Addressing the audience during inauguration of ACCA"
          },
    {
      image: accaEvents2,
      // title: "Meeting Facilities",
      description:
      "Principal Signing the MoU - ACCA, UK"
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
      { name: "ACCA" },
    ],
    title: "Association For Certified Chartered Accountants (ACCA)",
  };

  const sections = [];

  return (
    <Box>
      <BannerSection bannerDatas={bannerDatas} />
      <AboutInternationalRelations />
      <HighlightsCourse />
      <InfrastructureSection accaEvents={accaEvents} />
    </Box>
  );
};

export default ACCA;
