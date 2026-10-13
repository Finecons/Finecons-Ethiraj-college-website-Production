import React from "react";
import CustomTab from "../../../Components/CustomTab/CustomTab";
import LevelOfSrtudy from "./LevelOfSrtudy";
import AcademicDivisions from "./AcademicDivisions";
import { useDispatch } from "react-redux";
import { setHeaderName, setSubHeaderName } from "../../../ReduxStore/Slices/headerSlice";
import Department from "./Department";
import Program from "./Program";
import Banner from "./Banner";
import AboutAcademics from "./AboutAcademics";
import ExploreAcademics from "./ExploreAcademics";
import OtherRelatedInformation from "./OtherRelatedInformation";
import Faculty from "./Faculty";
import Phdprograms from "./Phdprograms";
import FoundationCourseModal from "./Modal/FoundationCourseModal";
import FoundationCourses from "./FoundationCourses";

const AcademicsandDepartments = () => {
  const tabs = [
    
    
    // { label: "Level Of Study", component: <LevelOfSrtudy /> },
    { label: "Academic Divisions", component: <AcademicDivisions /> },
    { label: "Departments", component: <Department /> },
    { label: "Programs", component: <Program /> },
    { label: "PhD Programs", component: <Phdprograms /> },
    
    { label: "Foundation Courses", component: <FoundationCourses /> },
    



    // { label: "About", component: <AboutUsSection /> },
  ];
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderName("Academics & Programs"));
    dispatch(setSubHeaderName(""));
  }, [dispatch]);

  return (
    <div>
      <CustomTab tabs={tabs} />
    </div>
  );
};

export default AcademicsandDepartments;
