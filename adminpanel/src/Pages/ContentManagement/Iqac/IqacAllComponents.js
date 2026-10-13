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
import Composition from "./Composition";
import NAAC from "./NAAC";
import IQACEvents from "./IQACEvents";
import NIRF from "./NIRF";
import AQAR from "./AQAR";


const IqacAllComponents = () => {
  const tabs = [
    { label: "Composition", component: <Composition /> },
    { label: "NAAC", component: <NAAC /> },
    { label: "IQAC Events", component: <IQACEvents /> },
    { label: "NIRF", component: <NIRF /> },
    { label: "AQAR", component: <AQAR /> },



    // { label: "Program", component: <Program /> },
  ];
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderName("Iqac"));
    dispatch(setSubHeaderName(""));
  }, [dispatch]);

  return (
    <div>
      <CustomTab tabs={tabs} />
    </div>
  );
};

export default IqacAllComponents;
