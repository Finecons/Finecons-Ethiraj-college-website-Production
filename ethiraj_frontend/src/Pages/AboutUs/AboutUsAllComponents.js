import React, { useEffect } from "react";
import BannerSection from "./OurStory/BannerSection";
import TabSection from "./OurStory/TabSection";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../ReduxStore/actions";
import { useLocation } from "react-router-dom";

const AboutUsAllComponents = ({ mainTabsRef, isMainTabsActive }) => {

  const dispatch = useDispatch();
  const location = useLocation();

  const { getAllAboutUsSections } = useSelector(
    (state) => state?.getAllAboutUsSections
  );

  console.log(getAllAboutUsSections);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: "getAllAboutUsSections",
      };

      // setLoading(true); // Set loading to true when the request starts
      await dispatch(actions.GETALLABOUTUSSECTIONS(data1));
      // setLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
  }, [dispatch]);

  // Function to get dates by section_name
  const getDatasBySectionName = (sectionName) => {
    return (
      getAllAboutUsSections?.data?.filter(
        (section) => section?.section_name === sectionName
      ) || []
    );
  };

  const bannerDatas = getAllAboutUsSections?.data
    ? getDatasBySectionName("banner section")
    : [];
  const aboutEthirajDatas = getAllAboutUsSections?.data
    ? getDatasBySectionName("aboutEthiraj section")
    : [];

  const fastFactDatas = getAllAboutUsSections?.data
    ? getDatasBySectionName("FastFacts section")
    : [];

  const historyOfEthirajDatas = getAllAboutUsSections?.data
    ? getDatasBySectionName("HistoryofEthiraj section")
    : [];

  const aboutFounderDatas = getAllAboutUsSections?.data
    ? getDatasBySectionName("aboutFounder section")
    : [];

  const administrationDatas = getAllAboutUsSections?.data
    ? getDatasBySectionName("administration section")
    : [];

  useEffect(() => {
    const requestedTarget = location.state?.scrollTo;
    if (!requestedTarget) {
      return;
    }

    // Wait for data to load before scrolling
    if (getAllAboutUsSections?.loading) {
      return;
    }

    const targetFallbackMap = {
      "international-relations": "non-statutory-bodies",
      "mous-collaborations": "non-statutory-bodies",
      "anti-ragging": "statutory-bodies",
      "anti-drug": "statutory-bodies",
      flowchart: "statutory-bodies",
      rti: "statutory-bodies",
    };

    const targetId = targetFallbackMap[requestedTarget] || requestedTarget;

    let attempts = 0;
    const maxAttempts = 50; // Increased from 15 to 50 attempts

    const scrollToTarget = () => {
      const targetElement = document.getElementById(targetId);
      if (!targetElement) {
        return false;
      }

      const headerOffset = window.innerWidth < 900 ? 130 : 170;
      const top =
        targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({ top, behavior: "smooth" });
      return true;
    };

    if (scrollToTarget()) {
      return;
    }

    const timer = window.setInterval(() => {
      attempts += 1;
      if (scrollToTarget() || attempts >= maxAttempts) {
        window.clearInterval(timer);
      }
    }, 200); // Increased delay from 120ms to 200ms for better load timing

    return () => window.clearInterval(timer);
  }, [location.state?.scrollTo, getAllAboutUsSections?.data, getAllAboutUsSections?.loading]);

  return (
    <Box>
      <BannerSection bannerDatas={bannerDatas}/>
      <div ref={mainTabsRef}>
        <TabSection isStickyActive={isMainTabsActive} aboutFounderDatas={aboutFounderDatas} aboutEthirajDatas={aboutEthirajDatas} fastFactDatas={fastFactDatas} historyOfEthirajDatas={historyOfEthirajDatas} administrationDatas={administrationDatas}/>
      </div>
    </Box>
  );
};

export default AboutUsAllComponents;
