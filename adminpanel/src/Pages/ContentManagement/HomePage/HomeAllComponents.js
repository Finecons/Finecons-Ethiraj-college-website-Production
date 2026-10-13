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
import Rankings from "./Rankings";
import OurStudents from "./OurStudents";
import OurPrograms from "./OurPrograms";
import Gallery from "./Gallery";
import ExperiencingEthiraj from "./ExperiencingEthiraj";
import TextMarquee from "./TextMarquee";


const HomeAllComponents = () => {
  const tabs = [
    { label: "Banner", component: <Banner /> },
    { label: "Rankings", component: <Rankings /> },
    { label: "Our Students", component: <OurStudents /> },
    { label: "Our Programs", component: <OurPrograms /> },
    { label: "Gallery", component: <Gallery /> },
    { label: "Experiencin Ethiraj", component: <ExperiencingEthiraj /> },
    { label: "Text Marquee", component: <TextMarquee /> },




  ];
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderName("Home"));
    dispatch(setSubHeaderName(""));
  }, [dispatch]);

  return (
    <div>
      <CustomTab tabs={tabs} />
    </div>
  );
};

export default HomeAllComponents;
