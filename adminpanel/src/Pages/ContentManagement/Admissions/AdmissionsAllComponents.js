import React from "react";
import CustomTab from "../../../Components/CustomTab/CustomTab";
import { useDispatch } from "react-redux";
import {
  setHeaderName,
  setSubHeaderName,
} from "../../../ReduxStore/Slices/headerSlice";

import AdmissionPolicy from "./AdmissionPolicy";
import MeritList from "./MeritList";
import ProgramFilters from "./ProgramFilters";
import PayNowButtons from "./PayNowButtons";
import ApplyNowButtons from "./ApplyNowButtons";

const AdmissionsAllComponents = () => {
  const tabs = [
    { label: "Pay Now", component: <PayNowButtons /> },
    { label: "Apply Now", component: <ApplyNowButtons /> },
    // { label: "Admission Policy", component: <AdmissionPolicy /> },
    { label: "Merit List", component: <MeritList /> },
    // { label: "Program Filters", component: <ProgramFilters /> },
  ];
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderName("Admissions"));
    dispatch(setSubHeaderName(""));
  }, [dispatch]);

  return (
    <div>
      <CustomTab tabs={tabs} />
    </div>
  );
};

export default AdmissionsAllComponents;
