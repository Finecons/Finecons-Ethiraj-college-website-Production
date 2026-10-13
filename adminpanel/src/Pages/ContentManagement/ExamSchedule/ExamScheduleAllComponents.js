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

import IQACEvents from "./IQACEvents";
import Examinations from "./Examinations";



const ExamScheduleAllComponents = () => {
  const tabs = [
    { label: "Examinations", component: <Examinations /> },
    { label: "IQAC Events", component: <IQACEvents /> },
   



    // { label: "Program", component: <Program /> },
  ];
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderName("Exam Schedule"));
    dispatch(setSubHeaderName(""));
  }, [dispatch]);

  return (
    <div>
      <CustomTab tabs={tabs} />
    </div>
  );
};

export default ExamScheduleAllComponents;
