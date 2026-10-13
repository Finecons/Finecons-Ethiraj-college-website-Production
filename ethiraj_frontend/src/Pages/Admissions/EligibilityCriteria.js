import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CustomBannerSection from "../../Components/CustomBannerSection/CustomBannerSection";
import CustomTabs from "../../Components/CustomTabs/CustomTabs";
import EligibilityCriteriaTab from "./EligibilityCriteriaTab";
import eligibilityImage from "../../Assets/admissions&eligibility.jpg";
import { programCategoriesActions } from "../../ReduxStore/Slices/Admissions/getProgramCategories";

const EligibilityCriteria = ({ isMainTabsActive, mainTabsRef }) => {
  const dispatch = useDispatch();

  // Get data from Redux store
  const { undergraduateAided, undergraduateSelfSupporting, postgraduateAided, postgraduateSelfSupporting } = useSelector(
    (state) => state.programCategoriesReducer
  );

  // Fetch API data on component mount
  useEffect(() => {
    dispatch(programCategoriesActions.GETUNDERGRADUATEAIDEDPROGRAMS({ method: "GET" }));
    dispatch(programCategoriesActions.GETUNDERGRADUATESELFSUPPORTINGPROGRAMS({ method: "GET" }));
    dispatch(programCategoriesActions.GETPOSTGRADUATEAIDEDPROGRAMS({ method: "GET" }));
    dispatch(programCategoriesActions.GETPOSTGRADUATESELFSUPPORTINGPROGRAMS({ method: "GET" }));
  }, [dispatch]);

  const bannerDatas = {
    image: eligibilityImage,
    breadCrumbsData: [
      { name: "Home", to: "/" },
      { name: "Admissions", to: "/admissions" },
      { name: "Eligibility Criteria" },
    ],
    title: "Eligibility Criteria",
  };

  const eligibilityTabSections = [
    {
      label: "Undergraduate Aided",
      component: (
        <EligibilityCriteriaTab
          data={undergraduateAided?.data || []}
          title="Undergraduate Aided"
          loading={undergraduateAided?.loading}
          error={undergraduateAided?.error}
        />
      ),
    },
    {
      label: "Undergraduate Self-Supporting",
      component: (
        <EligibilityCriteriaTab
          data={undergraduateSelfSupporting?.data || []}
          title="Undergraduate Self-Supporting"
          loading={undergraduateSelfSupporting?.loading}
          error={undergraduateSelfSupporting?.error}
        />
      ),
    },
    {
      label: "Postgraduate Aided",
      component: (
        <EligibilityCriteriaTab
          data={postgraduateAided?.data || []}
          title="Postgraduate Aided"
          loading={postgraduateAided?.loading}
          error={postgraduateAided?.error}
        />
      ),
    },
    {
      label: "Postgraduate Self-Supporting",
      component: (
        <EligibilityCriteriaTab
          data={postgraduateSelfSupporting?.data || []}
          title="Postgraduate Self-Supporting"
          loading={postgraduateSelfSupporting?.loading}
          error={postgraduateSelfSupporting?.error}
        />
      ),
    },
  ];

  return (
    <Box>
      <CustomBannerSection bannerDatas={bannerDatas} />
      <Box
        sx={{
          // px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          pb: { lg: "72px", md: "60px", xs: "20px", sm: "50px" },
        }}
      >
      <div ref={mainTabsRef}>
        
        <CustomTabs
          sections={eligibilityTabSections}
          isStickyActive={isMainTabsActive}
        />
      </div>
      </Box>
    </Box>
  );
};

export default EligibilityCriteria;
