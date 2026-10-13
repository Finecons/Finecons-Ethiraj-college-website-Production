import React, { useEffect } from "react";
import BannerSection from "./BannerSection";
import { Box } from "@mui/material";
import CoursesSection from "./CoursesSection";
import RelatedInformation from "./RelatedInformation";
import AcademicDivisions from "./AcademicDivisions";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../ReduxStore/actions";

const AcademicandDepartmentsAllComponents = ({
  mainTabsRef,
  isMainTabsActive,
}) => {
  const dispatch = useDispatch();

  const { getAcademicsSectionsByName } = useSelector(
    (state) => state?.getAcademicsSectionsByName
  );

  console.log(getAcademicsSectionsByName);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: "getAllAcademicsSections",
      };

      // setLoading(true); // Set loading to true when the request starts
      await dispatch(actions.GETACADEMICSSECTIONSBYNAME(data1));
      // setLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
  }, [dispatch]);

  // Function to get dates by section_name
  const getDatasBySectionName = (sectionName) => {
    return (
      getAcademicsSectionsByName?.data?.filter(
        (section) => section?.section_name === sectionName
      ) || []
    );
  };

  const bannerDatas = getAcademicsSectionsByName?.data
    ? getDatasBySectionName("academicBanner section")
    : [];
  const aboutAcademicsDatas = getAcademicsSectionsByName?.data
    ? getDatasBySectionName("aboutAcademics section")
    : [];

  const exploreAcademicsDatas = getAcademicsSectionsByName?.data
    ? getDatasBySectionName("exploreAcademics section")
    : [];

  const otherRelatedInformationDatas = getAcademicsSectionsByName?.data
    ? getDatasBySectionName("otherRelatedInformation section")
    : [];

  const aboutFounderDatas = getAcademicsSectionsByName?.data
    ? getDatasBySectionName("aboutFounder section")
    : [];

  const administrationDatas = getAcademicsSectionsByName?.data
    ? getDatasBySectionName("administration section")
    : [];

  const appLinkDatas = getAcademicsSectionsByName?.data
    ? getDatasBySectionName("applink")
    : [];
  const getInTouchDates = getAcademicsSectionsByName?.data
    ? getDatasBySectionName("getInTouch")
    : [];
  return (
    <Box>
      <BannerSection bannerDatas={bannerDatas} />
      {/* <div ref={mainTabsRef}>
        <TabSection isStickyActive={isMainTabsActive} />
      </div> */}
      <CoursesSection aboutAcademicsDatas={aboutAcademicsDatas} />
      <AcademicDivisions exploreAcademicsDatas={exploreAcademicsDatas} />
      {/* <RelatedInformation
        otherRelatedInformationDatas={otherRelatedInformationDatas}
      /> */}
    </Box>
  );
};

export default AcademicandDepartmentsAllComponents;
