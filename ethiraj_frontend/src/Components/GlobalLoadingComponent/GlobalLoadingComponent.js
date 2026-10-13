import React from "react";
import { useSelector } from "react-redux";
import FullPageLoader from "../FullPageLoader/FullPageLoader";

export default function GlobalLoadingComponent() {
  const isLoading = useSelector((state) => state.globalLoading?.isLoading);

  if (!isLoading) return null;

  return <FullPageLoader />;
}
