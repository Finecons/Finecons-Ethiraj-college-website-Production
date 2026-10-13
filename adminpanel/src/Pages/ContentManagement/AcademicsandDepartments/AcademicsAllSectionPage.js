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

const AcademicsAllSectionPage = () => {
  const tabs = [
    { label: "Banner", component: <Banner /> },
    { label: "About Academics", component: <AboutAcademics /> },
    { label: "Explore Academics", component: <ExploreAcademics /> },
    { label: "Other Related Imformation", component: <OtherRelatedInformation /> },

  



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

export default AcademicsAllSectionPage;
