import React, { useEffect, useState } from "react";
import { Box, CardActionArea } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CustomBannerSection from "../../Components/CustomBannerSection/CustomBannerSection";
import meritListImage from "../../Assets/admissions&eligibility.jpg";
import SectionAccordion from "./SectionAccordion";
import { getAllMeritListSectionsAction } from "../../ReduxStore/Slices/MeritList/getAllMeritListSections";
import actions from "../../ReduxStore/actions";

const MeritList = ({ isMainTabsActive, mainTabsRef }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const { getAllMeritListSections } = useSelector(
    (state) => state?.getAllMeritListSections
  );

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: "getAllMeritListSections",
      };

      await dispatch(
      actions.GETALLMERITLISTSECTIONS(data1)
      );
      setLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
  }, [dispatch]);
  const bannerDatas = {
    
    image: meritListImage,
    breadCrumbsData: [
      { name: "Home", to: "/" },
      { name: "Admissions", to: "/admissions" },
      { name: "Merit List" },
    ],
    title: "Merit List",
  };

  const meritListDescription = {
    content:
      getAllMeritListSections?.data?.[0]?.content ||
      "The Merit List is released along side the applications every year.",
  };

  // Get cards from API data
  const meritListCards = getAllMeritListSections?.data?.[0]?.additional_data
    ?.cards || [];

  return (
    <Box>
      <CustomBannerSection bannerDatas={bannerDatas} />
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          pb: { lg: "72px", md: "60px", xs: "20px", sm: "50px" },
        }}
      >
        {/* Description */}
        <Box
          sx={{
            pt: { xs: "20px", sm: "30px", md: "40px" },
            color: "#666",
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          {meritListDescription.content}
        </Box>

        {/* UG Aided Part I */}
        {meritListCards && meritListCards.length > 0 ? (
          meritListCards.map((card, index) => (
            <SectionAccordion
              key={index}
              title={card.main_title}
              rows={card.items.map((item) => ({
                title: item.title,
                pdf: item.link,
              }))}
            />
          ))
        ) : (
          <Box sx={{ textAlign: "center", py: 4, color: "#999" }}>
            No merit list data available
          </Box>
        )}

        {/* UG Aided Part II */}
        {/* UG Self-Supporting Part I */}
        {/* UG Self-Supporting Part II */}
      </Box>
    </Box>
  );
};

export default MeritList;
