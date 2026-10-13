import React from "react";
import CustomTab from "../../../Components/CustomTab/CustomTab";
// import BannerSection from "../StakeNow/Banner/BannerSection";
// import LevelOfSrtudy from "./LevelOfSrtudy";
// import AcademicDivisions from "./AcademicDivisions";
import { useDispatch } from "react-redux";
import {
  setHeaderName,
  setSubHeaderName,
} from "../../../ReduxStore/Slices/headerSlice";
// import Department from "./Department";
// import Program from "./Program";
import Banner from "./Banner";
import AboutEthiraj from "./AboutEthiraj";
import AboutFounder from "./AboutFounder";
import AboutFounderModal from "./Modal/AboutFounderModal";
import Administration from "./Administration";
import FastFacts from "./FastFacts";
import HistoryofEthiraj from "./HistoryofEthiraj";
import GoverningBody from "./GoverningBody";
import BoardOfTrustees from "./BoardOfTrustees";
import CollegeCommittee from "./CollegeCommittee";
import FormerChairpersons from "./FormerChairpersons";
import FormerPrincipals from "./FormerPrincipals";

const AboutUsAllComponents = () => {
  const tabs = [
    { label: "Banner", component: <Banner /> },
    { label: "About Ethiraj", component: <AboutEthiraj /> },
    { label: "Fast Facts", component: <FastFacts /> },
    { label: "History Of Ethiraj", component: <HistoryofEthiraj/> },
    { label: "About Founder", component: <AboutFounder /> },
    { label: "Administration", component: <Administration /> },
    { label: "Governing Body", component: <GoverningBody /> },
    { label: "Board Of Trustees", component: <BoardOfTrustees /> },
    { label: "College Committee", component: <CollegeCommittee /> },
    { label: "FormerChairpersons", component: <FormerChairpersons /> },
    
    { label: "FormerPrincipals", component: <FormerPrincipals /> },


    


    // { label: "Department", component: <Department /> },
    // { label: "Program", component: <Program /> },

    // { label: "About", component: <AboutUsSection /> },
  ];
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderName("About Us"));
    dispatch(setSubHeaderName(""));
  }, [dispatch]);

  return (
    <div>
      <CustomTab tabs={tabs} />
    </div>
  );
};

export default AboutUsAllComponents;
