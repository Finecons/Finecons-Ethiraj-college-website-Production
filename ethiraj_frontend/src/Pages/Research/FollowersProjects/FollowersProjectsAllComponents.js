import React, { useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";
  import { useDispatch, useSelector } from "react-redux";
  import { useLocation } from "react-router-dom";
  import actions from "../../../ReduxStore/actions";
import BannerSection from "./BannerSection";
import ECRICPhDFellowships from "./ECRICPhDFellowships";
import ContactDetails from "./ContactDetails";
import ResearchProjects from "./ResearchProjects";
import ConsultancySection from "./ConsultancySection";
import OngoingResearchProjects from "./OngoingResearchProjects";
// import TabSection from "./TabSection";

const FollowersProjectsAllComponents = ({ mainTabsRef, isMainTabsActive }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { getAllResearchSections } = useSelector(
    (state) => state?.getAllResearchSections,
  );

  console.log(getAllResearchSections,"getAllResearchSections FellowshipsAndProjects");

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: "getAllResearchSections/FellowshipsAndProjects Page",
      };

      // setLoading(true); // Set loading to true when the request starts
      await dispatch(actions.GETALLRESEARCHSECTIONS(data1));
      // setLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
  }, [dispatch]);

  // Function to get dates by section_name
  const getDatasBySectionName = (sectionName) => {
    return (
      getAllResearchSections?.data?.filter(
        (section) => section?.section_name === sectionName,
      ) || []
    );
  };


  const ecricPhdFellowshipsDatas = getAllResearchSections?.data
    ? getDatasBySectionName("ECRICPhDFellowships section")
    : [];

  const researchAndProjectsDatas = getAllResearchSections?.data
    ? getDatasBySectionName("ResearchAndProjects section")
    : [];

   const consultancyDatas = getAllResearchSections?.data
    ? getDatasBySectionName("Consultancy section")
    : [];

  useEffect(() => {
    const requestedTarget = location.state?.scrollTo;
    if (!requestedTarget) {
      return;
    }

    let attempts = 0;
    const maxAttempts = 15;

    const tryScroll = () => {
      const targetElement = document.getElementById(requestedTarget);
      if (!targetElement) {
        return false;
      }

      const headerOffset = window.innerWidth < 900 ? 130 : 170;
      const top =
        targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({ top, behavior: "smooth" });
      return true;
    };

    if (tryScroll()) {
      return;
    }

    const timer = window.setInterval(() => {
      attempts += 1;
      if (tryScroll() || attempts >= maxAttempts) {
        window.clearInterval(timer);
      }
    }, 120);

    return () => window.clearInterval(timer);
  }, [location, getAllResearchSections?.data?.length]);



  return (
    <Box
      sx={
        {
          // px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
        }
      }
    >
      <BannerSection
      //  bannerDatas={bannerDatas} 
      />
      {/* <div ref={mainTabsRef}>
        <TabSection isStickyActive={isMainTabsActive} aboutFounderDatas={aboutFounderDatas} aboutEthirajDatas={aboutEthirajDatas} fastFactDatas={fastFactDatas} historyOfEthirajDatas={historyOfEthirajDatas} administrationDatas={administrationDatas}/>
      </div> */}
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
        }}
      >
        <Box
          sx={{
            maxWidth: "800px",
            mx: "auto",
            my: { xs: "20px", sm: "68px", md: "50px", lg: "90px" },
          }}
        >
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              textAlign: "center",
              // maxWidth: "800px",
              // display: "flex",
              // justifyContent: "center",
            }}
          >
            Advancing knowledge through curiosity, collaboration and purposeful
            inquiry.
          </Typography>
        </Box>
        <Divider sx={{ my: "20px", borderColor: "gray" }} />
        <ECRICPhDFellowships  />
        <ContactDetails ecricPhdFellowshipsDatas={ecricPhdFellowshipsDatas} />
        <ResearchProjects researchAndProjectsDatas={researchAndProjectsDatas}/>
        <ConsultancySection consultancyDatas={consultancyDatas} />
        {/* <OngoingResearchProjects /> */}
      </Box>
    </Box>
  );
};

export default FollowersProjectsAllComponents;
