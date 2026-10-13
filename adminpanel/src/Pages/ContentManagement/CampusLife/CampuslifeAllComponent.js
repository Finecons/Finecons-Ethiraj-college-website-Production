import React from "react";
import NestedCustomTab from "../../../Components/CustomTab/NestedCustomTab";
import { useDispatch } from "react-redux";
import {
  setHeaderName,
  setSubHeaderName,
} from "../../../ReduxStore/Slices/headerSlice";
import Banner from "./Banner";
import AboutStudentUnion from "./AboutStudentUnion";
import UnionMembersStudentUnion from "./UnionMembersStudentUnion";
import UnionConvenerAdvisories from "./UnionConvenerAdvisories";
import EventsAndAnnualActivities from "./EventsAndAnnualActivities";

const CampuslifeAllComponent = () => {
  const mainTabs = [
    {
      label: "Student Unions",
      // component: <ECRIC />,
      subTabs: [
        { label: "Banner", component: <Banner /> },
        
        { label: "About Student Union", component: <AboutStudentUnion /> },
        
        { label: "Union Members", component: <UnionMembersStudentUnion /> },

        { label: "Union Convener & Advisories", component: <UnionConvenerAdvisories /> },

        { label: "Events & Annual Activities", component: <EventsAndAnnualActivities /> },
      ],
    },
    
  ];
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderName("Campus Life"));
    dispatch(setSubHeaderName(""));
  }, [dispatch]);

  return (
    <div>
      <NestedCustomTab mainTabs={mainTabs} />
    </div>
  );
};

export default CampuslifeAllComponent;
