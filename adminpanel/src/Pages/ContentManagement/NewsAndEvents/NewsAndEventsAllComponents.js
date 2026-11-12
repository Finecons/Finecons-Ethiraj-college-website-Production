import React, { useEffect } from "react";
import CustomTab from "../../../Components/CustomTab/CustomTab";
import { useDispatch } from "react-redux";
import {
  setHeaderName,
  setSubHeaderName,
} from "../../../ReduxStore/Slices/headerSlice";
import UpcomingEvents from "./UpcomingEvents";

const NewsAndEventsAllComponents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderName("News & Events"));
    dispatch(setSubHeaderName(""));
  }, [dispatch]);

  const tabs = [
    { label: "Upcoming Events", component: <UpcomingEvents /> },
  ];

  return (
    <div>
      <CustomTab tabs={tabs} />
    </div>
  );
};

export default NewsAndEventsAllComponents;

