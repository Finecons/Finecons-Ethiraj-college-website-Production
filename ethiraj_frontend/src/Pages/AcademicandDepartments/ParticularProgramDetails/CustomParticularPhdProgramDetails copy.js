
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
 
  Divider,
 
} from "@mui/material";

import CustomBreadCrumbs from "../../../Components/CustomBreadCrumbs/CustomBreadCrumbs";

import CustomImageSliderNext from "./FacultySection";

import actions from "../../../ReduxStore/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import phdimage from "../../../Assets/phdcommerce.jpg";
import ResearchScholars from "./ResearchScholars";
import InfrastructureCollaboration from "./InfrastructureCollaboration";
import OngoingResearchProjects from "./OngoingResearchProjects";

const ConvertProgramData = (apiData) => {
  const data = apiData?.data;
  const add = data?.additional_data;

  const getLevelPriority = (level = "") => {
    const normalized = String(level).toLowerCase().replace(/\s|\./g, "");
    if (normalized === "undergraduate") return 0;
    if (normalized === "postgraduate") return 1;
    if (normalized === "phd") return 2;
    return 3;
  };

  const getFundingPriority = (type = "") => {
    const normalized = String(type).toLowerCase().replace(/\s|-/g, "");
    if (normalized === "aided") return 0;
    if (normalized === "selfsupporting") return 1;
    return 2;
  };

  const sortedRelatedPrograms = [...(data?.other_related_programs || [])].sort(
    (first, second) => {
      const levelDiff =
        getLevelPriority(first?.programme_level?.level_name) -
        getLevelPriority(second?.programme_level?.level_name);

      if (levelDiff !== 0) return levelDiff;

      const fundingDiff =
        getFundingPriority(first?.funding_type?.type_name) -
        getFundingPriority(second?.funding_type?.type_name);

      if (fundingDiff !== 0) return fundingDiff;

      return String(first?.program_name || "").localeCompare(
        String(second?.program_name || "")
      );
    }
  );

  return {
    courseData: {
      title: data?.program_name || "Ph.D",
      description: data?.description || "",
      department_id: data?.department?.department_id,
      degree: data?.programme_level?.level_name || "Ph.D",
      degreeDuration: add?.year_of_introduction || "-",
      affiliation: add?.affiliation_recognition || "-",
      modeOfStudy: add?.mode_of_study || "-",
      stream: data?.funding_type?.type_name || [],
      credits: add?.credits || [],
      department: data?.department?.department_name,
      departmentLink: `/academics/${data?.department?.department_name
        ?.toLowerCase()
        ?.replace(/\s+/g, "")}/${data?.department?.department_id}`,
      image: data?.image_url || `${phdimage}`,
    },

    programOutcomes: {
      programOutcomesData: add?.researchAreas || [],
    },

    syllabus: {
      description: add?.syllabus_description,
      buttonText: "Download the Syllabus",
      pdfUrl: `${add?.syllabus_pdf_url || ""}`,
    },

    valueAddedCourses: (add?.valueAddedCourseCards || []).map((item) => ({
      name: item.title,
      offered: item.description,
    })),

    careerPaths: {
      careerPathFirstDescription: `Graduates of the ${data?.program_name} programme can pursue careers in a wide range of fields, including:`,
      careerPathLastDescription:
        "Graduates can explore many other career opportunities beyond this list.",

      careerPathData: (add?.futureCareerPathsCards || []).map((item) => ({
        category: item.title,
        roles: item.career_paths,
      })),
    },

    placements: add?.placed_company_logos || [],

    beyondClassroom: {
      description: add?.beyond_classroom_details?.beyond_classroom_description,

      beyond_classroom_subdescription_cards:
        add?.beyond_classroom_details?.beyond_classroom_subdescription_cards,

      image: `${add?.beyond_classroom_details?.beyond_classroom_img_url}`,
    },

    facultyData: (add?.facultyCards || []).map((f) => ({
      name: f?.name,
      title: f?.position,
      specialization: f?.areaofspecilization,
      qualification: f?.position,
      email: f?.email,
      image: `${f?.faculty_img_url}`,
      profileLink: f?.profilelink,
      approveLetter: Boolean(f?.approvalLetterLink),
      approvalLetterLink: f?.approvalLetterLink,
    })),

    researchScholarsData: add?.researchScholars || [],

    ongoingResearchProjects: add?.ongoingResearchProjects || [],

    infrastructureData: {
      title: "Infrastructure & Collaboration",
      description: add?.infrastructure_and_collaboration?.description,
      cards: add?.infrastructure_and_collaboration?.cards || [],
    },

    contactDetails: {
      label:
        add?.contact_details?.contact_label || data?.funding_type?.type_name,
      email: add?.contact_details?.contact_email,
    },

    admissionsData: {
      eligibilityText: {
        sudenetPass: add?.adminsistraion_and_eligibility?.elgibility_criteria,
        twoSubject: add?.adminsistraion_and_eligibility?.subject_requirements,
        allSubject: add?.adminsistraion_and_eligibility?.any_two_subjects_list,
      },
      admissionProcess:
        add?.adminsistraion_and_eligibility?.admission_process || "-",
      courseWorkDuration:
        add?.adminsistraion_and_eligibility?.course_work_duration || "-",

      buttonText: "Learn How to Apply",

      relatedDepartments: sortedRelatedPrograms.slice(0, 3).map((program) => ({
        name: program?.program_name,
        programId: program?.program_id,
        focus: program?.department?.department_name,
        type: program?.funding_type?.type_name,
      })),

      admissionsImage: `${add?.adminsistraion_and_eligibility?.administration_img_url}`,
    },
    otherRelatedProgrms: sortedRelatedPrograms,
  };
};

const CustomParticularPhdProgramDetails = () => {
  const [programData, setProgramData] = useState(null);

  const dispatch = useDispatch();

  const { programId } = useParams();
  const { getProgramById } = useSelector((state) => state?.getProgramById);
  // const programId = location.state;

  console.log(programId, "progrmIddd");

  // Fetch department data
  useEffect(() => {
    if (!programId) return;

    const fetchData = async () => {
      const payload = {
        data: {},
        method: "get",
        apiName: `getProgramById/${programId}`,
      };

      await dispatch(actions.GETPROGRAMBYID(payload));
    };

    fetchData();
  }, [programId]);

  // Convert API data whenever redux updates
  useEffect(() => {
    if (getProgramById?.data) {
      const converted = ConvertProgramData(getProgramById);
      setProgramData(converted);
    }
  }, [getProgramById]);

  const {
    courseData,
    programOutcomes,
    syllabus,
    valueAddedCourses,
    careerPaths,
    placements,
    beyondClassroom,
    facultyData,
    admissionsData,
    researchScholarsData,
    ongoingResearchProjects,
    infrastructureData,
    contactDetails,
    relatedDepartments,
  } = programData || {};

  console.log(admissionsData, "admissionsDataadmissionsData");

  // Until loaded
  if (!programData) return <p>Loading...</p>;


  console.log(programData, "programData");
  // console.log(achievements, "achievements");
  const handledownloadFile = async (pdfUrl) => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();

      const fileURL = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = fileURL;
      link.download = "Activity&Achiements.pdf"; // 🔥 forces download
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(fileURL);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const breadcrumbsItems = [
    { name: "Home", to: "/" },
    { name: "Academics & Departments", to: "/academicsanddepartments" },
    { name: "Academic Divisions", to: "/academics/allacademicdivisions" },

    {
      name: courseData?.department,
      to: `/academics/${courseData?.department
        ?.toLowerCase()
        ?.replace(/\s+/g, "")}/${courseData?.department_id}`,
    },
    { name: courseData?.title },
  ];
  console.log(admissionsData?.relatedDepartments, "admissionData");

  const gridNumber = valueAddedCourses?.length > 0 ? 3.7 : 5.7;
  const gridNumber1 = valueAddedCourses?.length > 0 ? 3.7 : 0;
  console.log(gridNumber, "gridNmumverr");

  return (
    <Box
      sx={{
        mt: 4,
        mb: 6,
        // px: { xs: 2, sm: 3, md: 4, lg: 6 },
        // px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
      }}
    >
      {/* Breadcrumb */}
      <CustomBreadCrumbs items={breadcrumbsItems} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          flexDirection: { xs: "column" },
          py: { lg: "24px", md: "18px", sm: "20px", xs: "8px" },
        }}
      >
        <Typography
          variant="primaryHeadingText"
          sx={{
            py: { lg: "24px", md: "18px", sm: "20px", xs: "8px" },
          }}
        >
          {/* B.Com General */}
          {courseData.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="typographyBodyInterMaintext"
          sx={{ mb: 3, color: "black" }}
        >
          {courseData.description}
        </Typography>
      </Box>

      <Divider
        sx={{ borderColor: "black" }}
        //   sx={{ my: 3 }}
      />

      {/* Course Info */}
      <Grid container spacing={3} sx={{ padding: "20px 10px" }}>
        <Grid item size={{ md: 3, xs: 6 }}>
          <Typography
            variant="headingTextInterMedium"
            sx={{ color: "#6B3C58", mb: "10px" }}
          >
            Programme Name
          </Typography>
          <Typography variant="typographyBodyInterNormal">
            {courseData.title}
          </Typography>
          {/* <Typography variant="typographyBodyInterNormal">
            {courseData.degreeDuration}
          </Typography> */}
        </Grid>

        <Grid item size={{ xs: 6, md: 3 }}>
          <Typography
            variant="headingTextInterMedium"
            sx={{ color: "#6B3C58", mb: "10px" }}
          >
            Year of Introduction
          </Typography>
          {/* {courseData.streams.map((stream, i) => ( */}
          <Typography variant="typographyBodyInterNormal">
            {courseData?.degreeDuration}
          </Typography>
          {/* ))} */}
        </Grid>

        <Grid item size={{ xs: 6, md: 3 }}>
          <Typography
            variant="headingTextInterMedium"
            sx={{ color: "#6B3C58", mb: "10px" }}
          >
            Affiliation / Recognition
          </Typography>

          <Typography variant="typographyBodyInterNormal">
            {courseData?.affiliation}
          </Typography>
        </Grid>

        <Grid item size={{ xs: 6, md: 3 }}>
          <Typography
            variant="headingTextInterMedium"
            sx={{ color: "#6B3C58", mb: "10px" }}
          >
            Mode of Study
          </Typography>
          <Typography variant="typographyBodyInterNormal">
            {courseData?.modeOfStudy}
          </Typography>
        </Grid>
      </Grid>

      <Divider
        sx={{ borderColor: "black" }}
        //   sx={{ my: 3 }}
      />

      {/* Course Image */}
      <Card
        sx={{
          borderRadius: "none",
          boxShadow: "none",
          mt: "54px",
          background: "none",
        }}
      >
        <CardMedia
          component="img"
          //   height="300"
          sx={{ width: "100%", maxHeight: "532px" }}
          image={courseData.image}
          alt={courseData.title}
        />
      </Card>

      {/* Program Outcomes */}
      <Grid container spacing={3} sx={{ mt: 6 }}>
        <Grid item size={{ xs: 12, md: 5 }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{ mt: { sm: "30px", xs: "12px", md: 0 } }}
          >
            Research Areas
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 7 }}>
          <Grid container columnSpacing={6} rowSpacing={4}>
            {programOutcomes?.programOutcomesData?.map((item, index) => (
              <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                <Typography variant="headingTextInterMediumProgram">
                  {item.title}
                </Typography>
                <Typography
                  variant="typographyBodyInterNormal"
                  //
                  sx={{ mt: { sm: "16px", xs: "8px" } }}
                >
                  {item.description}
                </Typography>
              </Grid>
            ))}
            <Grid size={{ xs: 12 }}>
              <Typography
                variant="typographyBodyInterNormal"
                //
                sx={{ mt: "8px" }}
              >
                {programOutcomes?.programOutcomesDescription}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <ResearchScholars
        fastFactDatas={researchScholarsData}
        imageUrl={
          getProgramById?.data?.additional_data?.reserch_scholars_image_url
        }
      />

      <OngoingResearchProjects projects={ongoingResearchProjects} />
      <Box
      // sx={{ mt: { xs: "96px", md: "96px" } }}
      >
        <Typography variant="headingTextNewsreaderMedium" fontWeight={600}>
          Research Guides
        </Typography>

        <Box sx={{ mt: 3 }}>
          <CustomImageSliderNext items={facultyData} link={false} />
        </Box>
      </Box>
      <Box>
        <InfrastructureCollaboration data={infrastructureData} />
      </Box>

      {/* Admissions Section */}
      <Box sx={{ mt: 8 }}>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {/* ================= IMAGE COLUMN ================= */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="headingTextNewsreaderMedium"
              fontWeight={600}
              sx={{ mb: 4, fontFamily: "inter" }}
            >
              Contact
            </Typography>
            <Typography
              variant="headingTextNewsreaderMedium"
              fontWeight={600}
              sx={{ mb: 4 }}
            ></Typography>
            <Typography
              variant="typographyBodyInterNormal"
              sx={{ mb: "4px", fontWeight: "500 !important" }}
            >
              {contactDetails?.label || "-"}
            </Typography>
            <Typography
              variant="typographyBodyInterNormal"
              sx={{
                mb: "16px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              {contactDetails?.email || "-"}
            </Typography>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "black" }}
          />

          {/* ================= VERTICAL DIVIDER ================= */}

          {/* ================= CONTENT COLUMN ================= */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ pl: { md: 4 } }}>
            <Typography
              variant="headingTextNewsreaderMedium"
              fontWeight={600}
              sx={{ mb: 4, fontFamily: "inter" }}
            >
              Admissions & Eligibility
            </Typography>
            <Typography
              variant="typographyBodyInterNormal"
              sx={{ mb: "4px", fontWeight: "500 !important" }}
            >
              Eligibility Criteria
            </Typography>

            <Typography variant="typographyBodyInterNormal" sx={{ mb: "16px" }}>
              {admissionsData?.eligibilityText?.sudenetPass || "-"}
            </Typography>

            <Typography
              variant="typographyBodyInterNormal"
              sx={{ fontWeight: "500 !important", mt: "4px" }}
            >
              Admission Process
            </Typography>

            <Typography variant="typographyBodyInterNormal" sx={{ mb: "16px" }}>
              {admissionsData?.admissionProcess || "-"}
            </Typography>

            <Typography
              variant="typographyBodyInterNormal"
              sx={{ fontWeight: "500 !important", mt: "4px" }}
            >
              Course Work Duration
            </Typography>

            <Typography variant="typographyBodyInterNormal" sx={{ mb: "16px" }}>
              {admissionsData?.courseWorkDuration || "-"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CustomParticularPhdProgramDetails;
