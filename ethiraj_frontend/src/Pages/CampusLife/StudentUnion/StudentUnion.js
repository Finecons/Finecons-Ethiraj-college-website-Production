import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import CustomBannerSection from "../../../Components/CustomBannerSection/CustomBannerSection";
import MemberCard from "./MemberCard";
import studentUnionBanner from "../../../Assets/studentunion.jpg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// MEMBER IMAGES
import iswarya from "../../../Assets/Student Union/Iswarya D.png";
import mahapriya from "../../../Assets/Student Union/Maha Priya V.png";

import aishwarya from "../../../Assets/Student Union/Aishwarya K.png";
import suha from "../../../Assets/Student Union/Suha A.png";
import vijayalakshmi from "../../../Assets/Student Union/Vijaya Lakshmi V.png";
import jinilla from "../../../Assets/Student Union/Jinilla S.png";
import jayashree from "../../../Assets/Student Union/Jayashree E.png";
import dharshunu from "../../../Assets/Student Union/Dharshunu Baskaran.png";

// ADVISOR IMAGES
import praveena from "../../../Assets/Student Union/Dr. J. Praveena.png";
import keerthi from "../../../Assets/Student Union/Dr. M. Keerthi.png";
import sridevi from "../../../Assets/Student Union/Dr. D. Sridevi.png";
import nandhini from "../../../Assets/Student Union/Ms. C. Nandhini.png";
import bindhu from "../../../Assets/Student Union/Dr. Bindhu K..png";
import EventsSection from "./EventSection";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";

const StudentUnion = () => {
  const membersScrollRef = useRef(null);
  const advisorsScrollRef = useRef(null);
  const [canPrevMember, setCanPrevMember] = useState(false);
  const [canNextMember, setCanNextMember] = useState(true);
  const [canPrevAdvisor, setCanPrevAdvisor] = useState(false);
  const [canNextAdvisor, setCanNextAdvisor] = useState(true);

  const unionMembers = [
    { name: "Iswarya D", role: "President", img: iswarya },
    { name: "Maha Priya V", role: "Joint President", img: mahapriya },
    { name: "Aishwarya K", role: "Vice President", img: aishwarya },
    { name: "Suha A", role: "Joint Vice President", img: suha },
    { name: "Vijaya Lakshmi V", role: "General Secretary", img: vijayalakshmi },
    { name: "Jinilla S", role: "Joint General Secretary", img: jinilla },
    { name: "Jayashree E", role: "Treasurer", img: jayashree },
    { name: "Dharshunu Baskaran", role: "Joint Treasurer", img: dharshunu },
  ];

  const updateMembersControls = () => {
    const node = membersScrollRef.current;
    if (!node) {
      return;
    }

    setCanPrevMember(node.scrollLeft > 2);
    setCanNextMember(node.scrollLeft + node.clientWidth < node.scrollWidth - 2);
  };

  const handleMemberScroll = (direction) => {
    const node = membersScrollRef.current;
    if (!node) {
      return;
    }

    const scrollAmount = node.clientWidth * 0.8;
    node.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const advisors = [
    {
      name: "Dr. J. Praveena",
      role: "Convener",
      designation: "Assistant Professor\nDepartment of English (Aided)",
      img: praveena,
    },
    {
      name: "Dr. M. Keerthi",
      role: "Advisory",
      designation: "Assistant Professor\nDepartment of Chemistry (Aided)",
      img: keerthi,
    },
    {
      name: "Dr. D. Sridevi",
      role: "Advisory",
      designation: "Associate Professor\nDepartment of Computer Science (SS)",
      img: sridevi,
    },
    {
      name: "Ms. C. Nandhini",
      role: "Advisory",
      designation:
        "Assistant Professor\nDepartment of Visual Communication (SS)",
      img: nandhini,
    },
    {
      name: "Dr. Bindhu K.",
      role: "Advisory",
      designation:
        "Assistant Professor\nPostgraduate & Research\nDepartment of Economics",
      img: bindhu,
    },
  ];

  const dispatch = useDispatch();

  const { getAllCampusLifeSections } = useSelector(
    (state) => state?.getAllCampusLifeSections,
  );

  console.log(getAllCampusLifeSections);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: "getAllCampusLifeSections/student unions",
      };

      await dispatch(actions.GETALLCAMPUSLIFESECTIONS(data1));
    };
    fetchData();
  }, [dispatch]);

  // Function to get dates by section_name
  const getDatasBySectionName = (sectionName) => {
    return (
      getAllCampusLifeSections?.data?.filter(
        (section) => section?.section_name === sectionName,
      ) || []
    );
  };

  // Fetch Student Union specific sections
  const aboutStudentUnionDatas = getAllCampusLifeSections?.data
    ? getDatasBySectionName("aboutStudentUnion section")
    : [];

  const unionMemberDatas = getAllCampusLifeSections?.data
    ? getDatasBySectionName("union member section")
    : [];

  console.log(unionMemberDatas, "unionMemberDatas")

  const unionConvenerAdvisoriesDatas = getAllCampusLifeSections?.data
    ? getDatasBySectionName("union convener advisories section")
    : [];

  const eventsAndActivitiesDatas = getAllCampusLifeSections?.data
    ? getDatasBySectionName("events and annual activities section")
    : [];

  const eventsAndActivitiesData = eventsAndActivitiesDatas?.[0] || null;
  const eventsSectionSubHeading =
    eventsAndActivitiesData?.heading?.trim() ||
    "Organized by the Student Union";
  const eventsSectionContent =
    eventsAndActivitiesData?.content?.trim() ||
    "The Union coordinates student participation in extra-curricular activities, organizes inter-departmental, national-level, and cultural events, and facilitates students’ involvement in competitions conducted by other institutions at the district, state, and national levels.";
  const eventsSectionImages = Array.isArray(
    eventsAndActivitiesData?.additional_data?.images,
  )
    ? eventsAndActivitiesData.additional_data.images
    : [];

  // API returns additional_data as an array for aboutStudentUnion section.
  const aboutStudentUnionData = aboutStudentUnionDatas?.[0]
    ?.additional_data?.[0] || {
    title:
      "The Students’ Union is the elected representative body of the student community and plays an active role in a wide range of initiatives throughout the academic year. The Students’ Union is the elected representative body of the student community and plays an active role in a wide range of initiatives throughout the academic year. ",
    description: [
      "It provides a dynamic platform for students to express their views, showcase their talents, and pursue their interests. Through various academic, cultural, and social awareness programmes, the Union fosters a vibrant and participatory campus environment.",
      "Serving as a vital link between the administration and the students, the Students’ Union ensures that student needs and concerns are addressed, while also safeguarding their welfare. It plays a significant role in nurturing leadership qualities, organizational abilities, and a strong sense of responsibility among students. ",
    ],
  };
  const aboutStudentUnionDescriptions = Array.isArray(
    aboutStudentUnionData?.description,
  )
    ? aboutStudentUnionData.description
    : [];

  // Prepare dynamic union members from API
  const dynamicUnionMembers =
    unionMemberDatas.length > 0
      ? unionMemberDatas[0]?.additional_data?.members || []
      : [];



  // Prepare dynamic advisors from API
  const dynamicAdvisors =
    unionConvenerAdvisoriesDatas.length > 0
      ? unionConvenerAdvisoriesDatas[0]?.additional_data?.members || []
      : [];

  // Use dynamic data if available, otherwise fallback to hardcoded
  const displayUnionMembers =
    dynamicUnionMembers.length > 0 ? dynamicUnionMembers : unionMembers;
  console.log(dynamicUnionMembers, "dynamic union members")
  const displayAdvisors =
    dynamicAdvisors.length > 0 ? dynamicAdvisors : advisors;

  const updateAdvisorsControls = () => {
    const node = advisorsScrollRef.current;
    if (!node) {
      return;
    }

    setCanPrevAdvisor(node.scrollLeft > 2);
    setCanNextAdvisor(
      node.scrollLeft + node.clientWidth < node.scrollWidth - 2,
    );
  };

  useEffect(() => {
    updateMembersControls();
  }, [displayUnionMembers.length]);

  useEffect(() => {
    updateAdvisorsControls();
  }, [displayAdvisors.length]);

  const handleAdvisorScroll = (direction) => {
    const node = advisorsScrollRef.current;
    if (!node) {
      return;
    }

    const scrollAmount = node.clientWidth * 0.8;
    node.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const bannerSectionData = getAllCampusLifeSections?.data
    ? getDatasBySectionName("banner section")
    : [];

  // Transform banner data into the expected format
  const bannerDatas =
    bannerSectionData.length > 0
      ? {
        image:
          bannerSectionData[0]?.additional_data?.[0]?.banner ||
          studentUnionBanner,
        breadCrumbsData: [
          { name: "Home", to: "/" },
          { name: "Campus Life", to: "/campuslife" },
          { name: "Student Union" },
        ],
        title: bannerSectionData[0]?.heading || "Student Union",
      }
      : {
        image: studentUnionBanner,
        breadCrumbsData: [
          { name: "Home", to: "/" },
          { name: "Campus Life", to: "/campuslife" },
          { name: "Student Union" },
        ],
        title: "Student Union",
      };

  return (
    <>
      <CustomBannerSection bannerDatas={bannerDatas} />

      <Box
        sx={{
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          mt: { xs: "44px", sm: "44px", md: "44px", lg: "61px" },
        }}
      >
        {/* INTRO SECTION */}
        <Grid container spacing={4} alignItems="center">
          <Grid item size={{ xs: 12, md: 6 }}>
            {aboutStudentUnionData && (
              <>
                <Typography variant="subTextInterMedium" sx={{ mb: 2 }}>
                  {aboutStudentUnionData?.title}
                </Typography>

                {aboutStudentUnionDescriptions.map((desc, index) => (
                  <Typography
                    key={index}
                    variant="typographyBodyInterNormal"
                    sx={{ mb: 2 }}
                  >
                    {desc}
                  </Typography>
                ))}
              </>
            )}
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={aboutStudentUnionData?.banner || studentUnionBanner}
              alt="Student Union"
              sx={{
                width: "100%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>


        {/* CONVENER & ADVISORS */}
        <Box sx={{ my: { xs: "44px", sm: "44px", md: "70px", lg: "96px" } }}>
          <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 4 }}>
            Union Convener & Advisors
          </Typography>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Box
              ref={advisorsScrollRef}
              onScroll={updateAdvisorsControls}
              sx={{
                display: "flex",
                gap: 1.5,
                overflowX: "auto",
                scrollBehavior: "smooth",
                pb: 1,
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {displayAdvisors.map((advisor, index) => (
                <Box
                  key={index}
                  sx={{ flex: { xs: "0 0 52%", sm: "0 0 35%" } }}
                >
                  <MemberCard
                    name={advisor.name}
                    role={advisor.role || advisor.position}
                    designation={advisor.department || advisor.designation}
                    img={advisor.member_image || advisors[index]?.img}
                    advisor
                  />
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 1,
                mt: 1,
              }}
            >
              <IconButton
                size="small"
                onClick={() => handleAdvisorScroll("prev")}
                disabled={!canPrevAdvisor}
                sx={{ border: "1px dashed #343A40" }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => handleAdvisorScroll("next")}
                disabled={!canNextAdvisor}
                sx={{ border: "1px dashed #343A40" }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          <Grid
            container
            spacing={6}
            justifyContent="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {displayAdvisors.map((advisor, index) => (
              <Grid
                item
                size={{ md: 4, lg: 4 }}
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <MemberCard
                  name={advisor.name}
                  role={advisor.role || advisor.position}
                  designation={advisor.department || advisor.designation}
                  img={advisor.member_image || advisors[index]?.img}
                  advisor
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* UNION MEMBERS */}
        <Box sx={{ my: { xs: "44px", sm: "44px", md: "70px", lg: "96px" } }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{ mb: { xs: "16px", md: "16px", lg: "24px" } }}
          >
            Union Members
          </Typography>

          <Typography
            variant="subHeadingTextInterMedium"
            sx={{
              mb: { xs: "16px", md: "16px", lg: "24px" },
              color: "#6B3C58",
            }}
          >
            {unionMemberDatas[0]?.additional_data?.year}
          </Typography>
          <Typography
            variant="typographyBodyInterNormal"
            sx={{
              mb: { xs: "24px", md: "34px", lg: "44px" },
              maxWidth: { xs: "100%", md: "60%" },
            }}
          >
            {unionMemberDatas[0]?.additional_data?.description ||
              "The Ethiraj Students’ Union operates under the guidance of one Faculty Union Convenor and four Faculty Advisories, who collectively support and oversee all Union activities."}

          </Typography>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Box
              ref={membersScrollRef}
              onScroll={updateMembersControls}
              sx={{
                display: "flex",
                gap: 1.5,
                overflowX: "auto",
                scrollBehavior: "smooth",
                pb: 1,
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {displayUnionMembers.map((member, index) => (
                <Box key={index} sx={{ flex: "0 0 52%" }}>
                  <MemberCard
                    name={member.name || member?.member_name}
                    role={member.position || member?.member_position}
                    img={member.member_image || studentUnionBanner}
                  />
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 1,
                mt: 1,
              }}
            >
              <IconButton
                size="small"
                onClick={() => handleMemberScroll("prev")}
                disabled={!canPrevMember}
                sx={{ border: "1px dashed #343A40" }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => handleMemberScroll("next")}
                disabled={!canNextMember}
                sx={{ border: "1px dashed #343A40" }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          <Grid
            container
            rowSpacing={4}
            columnSpacing={6}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {displayUnionMembers.map((member, index) => (
              <Grid item size={{ sm: 4, md: 3, lg: 3 }} key={index}>
                <MemberCard
                  name={member.name || member?.member_name}
                  role={member.position || member?.member_position}
                  img={member.member_image || studentUnionBanner}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            my: { xs: "44px", sm: "44px", md: "70px", lg: "96px" },
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box>
            <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 2 }}>
              Events & Annual Activities
            </Typography>

            <Typography
              variant="subHeadingTextInterMedium"
              sx={{ mb: { xs: "16px", lg: "24px" }, color: "#6B3C58" }}
            >
              {eventsSectionSubHeading}
            </Typography>
            <Typography
              variant="typographyBodyInterNormal"
              sx={{ mb: 4, maxWidth: { xs: "100%", md: "60%" } }}
            >
              {eventsSectionContent}
            </Typography>
          </Box>

          <EventsSection eventsData={eventsSectionImages} />
        </Box>
      </Box>
    </>
  );
};

export default StudentUnion;
