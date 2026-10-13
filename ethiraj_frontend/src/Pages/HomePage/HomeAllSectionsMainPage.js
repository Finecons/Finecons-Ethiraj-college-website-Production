import React, { useEffect, useState } from "react";
import CarouselSection from "./CarouselSection";
import RankingsPage from "../rankings";
import { Divider, Typography } from "@mui/material";
import Placements from "../placements";
import MainTabs from "../MainTabs";
import NewsPage from "../NewsPage";
import Gallery from "../gallery";
import ExperienceEthiraj from "../ExperienceEthiraj";
import CustomButtonDropdown from "../../Components/CustomButtonDropdown/CustomButtonDropdown";
import { CustomClampFont } from "../../Components/CustomTypographySmallDesktopFontSize/CustomClampFont";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../ReduxStore/actions";

const HomeAllSectionsMainPage = ({ isMainTabsActive, mainTabsRef }) => {
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const { getAllHomeSectionsBySectionName } = useSelector(
    (state) => state?.getAllHomeSectionsBySectionName
  );

  console.log(getAllHomeSectionsBySectionName);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: "getAllHomeSections",
      };

      setLoading(true); // Set loading to true when the request starts
      await dispatch(actions.GETALLHOMESECTIONSBYSECTIONNAME(data1));
      setLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
  }, [dispatch]);

  // Function to get dates by section_name
  const getDatasBySectionName = (sectionName) => {
    return (
      getAllHomeSectionsBySectionName?.data?.filter(
        (section) => section?.section_name === sectionName
      ) || []
    );
  };

  const bannerDatas = getAllHomeSectionsBySectionName?.data
    ? getDatasBySectionName("banner section")
    : [];
  const rankingDatas = getAllHomeSectionsBySectionName?.data
    ? getDatasBySectionName("Rankings section")
    : [];

  const ourStudentPlacedDatas = getAllHomeSectionsBySectionName?.data
    ? getDatasBySectionName("OurStudents section")
    : [];

  const ourProgramDatas = getAllHomeSectionsBySectionName?.data
    ? getDatasBySectionName("OurPrograms section")
    : [];

  const galleryDatas = getAllHomeSectionsBySectionName?.data
    ? getDatasBySectionName("Gallery section")
    : [];

  const experienceEthirajDatas = getAllHomeSectionsBySectionName?.data
    ? getDatasBySectionName("ExperiencingEthiraj section")
    : [];

  const appLinkDatas = getAllHomeSectionsBySectionName?.data
    ? getDatasBySectionName("applink")
    : [];
  const getInTouchDates = getAllHomeSectionsBySectionName?.data
    ? getDatasBySectionName("getInTouch")
    : [];

  return (
    <div>
      {/* <CustomButtonDropdown /> */}

      <CarouselSection bannerDatas={bannerDatas} />
      <RankingsPage rankingDatas={rankingDatas} />
      {/* <Box  sx={{mt}}> */}

      {/* </Box> */}

      <Divider sx={{ borderWidth: "1px" }} />
      <Placements ourStudentPlacedDatas={ourStudentPlacedDatas} />
      <div ref={mainTabsRef}>
        <MainTabs
          isStickyActive={isMainTabsActive}
          ourProgramDatas={ourProgramDatas}
        />
      </div>
      {/* <NewsPage /> */}
      <Gallery galleryDatas={galleryDatas} />
      <ExperienceEthiraj experienceEthirajDatas={experienceEthirajDatas}/>
    </div>
  );
};

export default HomeAllSectionsMainPage;
