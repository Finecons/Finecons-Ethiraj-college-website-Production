import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import actions from "../../ReduxStore/actions";
import BannerSection from "./BannerSection";
import TabSection from "./TabSection";

const ResearchAllComponents = ({ mainTabsRef, isMainTabsActive }) => {

  const dispatch = useDispatch();
  const location = useLocation();

  const { getAllResearchSections } = useSelector(
    (state) => state?.getAllResearchSections
  );

  console.log(getAllResearchSections, "getAllResearchSections");

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: "getAllResearchSections/ECRIC Page",
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
        (section) => section?.section_name === sectionName
      ) || []
    );
  };

  const aboutEcricDatas = getAllResearchSections?.data
    ? getDatasBySectionName("About Ecric section")
    : [];
  const patentsDatas = getAllResearchSections?.data
    ? getDatasBySectionName("Patents section")
    : [];

  const catalystPublicationsDatas = getAllResearchSections?.data
    ? getDatasBySectionName("CatalystPublications section")
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
    <Box>
      <BannerSection 
      // bannerDatas={bannerDatas}
       />
      <div ref={mainTabsRef}>
        <TabSection isStickyActive={isMainTabsActive}
          aboutEcricDatas={aboutEcricDatas}
          patentsDatas={patentsDatas}
          catalystPublicationsDatas={catalystPublicationsDatas}

        />
      </div>
    </Box>
  );
};

export default ResearchAllComponents;
