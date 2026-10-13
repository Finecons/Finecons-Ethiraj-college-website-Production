import React from "react";
import CustomTabs from "../../../Components/CustomTabs/CustomTabs";
import AboutEthiraj from "./TabCompoents/AboutEthiraj";
import FastFact from "./TabCompoents/FastFact";
import HistoryOfEthiraj from "./TabCompoents/HistoryOfEthiraj";
import NewsSection from "./TabCompoents/NewsSection";
import TimelineScale from "../../DynamicTimeline";
import TimelineScrollWrapper from "../../TimelineScrollWrapper";
import TimelineSection from "../../TimelineSection";

const TabSection = ({
  isStickyActive,
  aboutEthirajDatas,
  fastFactDatas,
  historyOfEthirajDatas,
  aboutFounderDatas,
  administrationDatas
}) => {
  const sections = [
    {
      label: "About Ethiraj",
      component: <AboutEthiraj aboutEthirajDatas={aboutEthirajDatas} />,
    },
    {
      label: "Fast Facts",
      component: <FastFact fastFactDatas={fastFactDatas} />,
    },
    {
      label: "History of Ethiraj",
      component: (
       // <TimelineScale historyOfEthirajDatas={historyOfEthirajDatas} />

        <TimelineSection historyOfEthirajDatas={historyOfEthirajDatas} />
        // <DynamicTimelineNew historyOfEthirajDatas={historyOfEthirajDatas} />
      ),
    },
    { label: "Leadership & Governance", component: <HistoryOfEthiraj aboutFounderDatas={aboutFounderDatas} administrationDatas={administrationDatas}/> },
    // { label: "News & Publications", component: <NewsSection /> },
  ];
  return (
    <div>
      <CustomTabs sections={sections} isStickyActive={isStickyActive} />
    </div>
  );
};

export default TabSection;
