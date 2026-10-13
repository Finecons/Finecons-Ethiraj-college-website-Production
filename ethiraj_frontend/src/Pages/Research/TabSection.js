import React from "react";
import AboutECRIC from "./TabCompoents/AboutECRIC";
import CustomTabs from "../../Components/CustomTabs/CustomTabs";
import ECRICCommitee from "./TabCompoents/ECRICCommitee";
import ResearchHighlights from "./TabCompoents/ResearchHighlights";
import Patents from "./TabCompoents/Patents";
import CatalystPublications from "./TabCompoents/CatalystPublications";


const TabSection = ({
  isStickyActive,
  aboutEcricDatas,
  patentsDatas,
  catalystPublicationsDatas

}) => {
  const sections = [
    {
      label: "About ECRIC",
      component: <AboutECRIC aboutEcricDatas={aboutEcricDatas} />,
    },
    {
      label: "ECRIC Committee & Members",
      component: <ECRICCommitee />,
    },

    {
      label: "Research Highlights",
      component: <ResearchHighlights />,
    },


    {
      label: "Patents",
      component: <Patents patentsDatas={patentsDatas} />,
    },

    {
      label: "Catalyst Publications",
      component: <CatalystPublications catalystPublicationsDatas={catalystPublicationsDatas} />,
    },

    // {
    //   label: "History of Ethiraj",
    //   component: (
    //    // <TimelineScale historyOfEthirajDatas={historyOfEthirajDatas} />

    //     <TimelineSection historyOfEthirajDatas={historyOfEthirajDatas} />
    //   ),
    // },
    // { label: "Leadership & Governance", component: <HistoryOfEthiraj aboutFounderDatas={aboutFounderDatas} administrationDatas={administrationDatas}/> },
    // // { label: "News & Publications", component: <NewsSection /> },
  ];
  return (
    <div>
      <CustomTabs sections={sections} isStickyActive={isStickyActive} />
    </div>
  );
};

export default TabSection;
