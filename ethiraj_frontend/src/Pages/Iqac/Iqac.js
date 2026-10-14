import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,

  Grid,

  Link,
} from "@mui/material";
import { convertDepartmentData } from "./AllParticulaDepartmentDetailsData";

import SectionNavigation from "./SectionNavigation";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../ReduxStore/actions";
import BannerSection from "./BannerSection";
import SectionAccordion from "../../Components/SectionAccordion/SectionAccordion";

const Iqac = () => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const { getAllIQACSectionsBySectionName } = useSelector(
    (state) => state?.getAllIQACSectionsBySectionName,
  );

  console.log(getAllIQACSectionsBySectionName);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: "getAllIQACSections",
      };

      setLoading(true); // Set loading to true when the request starts
      await dispatch(actions.GETALLIQACSECTIONSBYSECTIONNAME(data1));
      setLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
  }, [dispatch]);

  const activitiesData = [
    {
      event: "Alumnae Connect ‘25: Our Pride Your Inspiration",
      person:
        "Ms. Deepa Seshadri (Sr Vice President, Apollo Hospitals), Ms. Akshaya Chandrasekaran (Ex-VP, Barclays)",
    },
    {
      event:
        "Dr. Mrs. Kousalya Moorthy & Justice M.N. Moorthy Endowment Lecture on Union Budget 2025 - An Overview",
      person: "CA Sai Ajay N, Senior Consultant",
    },
    {
      event: "Workshop on Mind Matters: Exploring Stress and Mental Well-Being",
      person:
        "Dr. M. Ramya Maheshwari, Assistant Professor & Head, Dept of Psychology",
    },
  ];

  const studentAchievements1 = [
    {
      achievement: "Cleared CA Intermediate Group 2",
      student: "Ms. Varsha R – 3rd Year, Commerce (2024-25)",
    },
    {
      achievement: "Cleared ACCA skill level (FR paper)",
      student: "Ms. Kanishka Babu – 2nd Year, Commerce (2024-25)",
    },
    {
      achievement: "Cleared CMA Intermediate - Group 1",
      student: "Ms. Divya Praba R – 3rd Year, Commerce (2024-25)",
    },
    {
      achievement: "Bronze Medal in 8th Junior National Duathlon Championship",
      student: "Ms. Deepika HB – 2nd Year, Commerce (2024-25)",
    },
    {
      achievement: "Winner in 9th Senior National Duathlon Championship",
      student: "Ms. Deepika HB – 2nd Year, Commerce (2024-25)",
    },
  ];

  const researchHighlights1 = [
    {
      title:
        "New Study Demonstrates Sustainable Catalytic Use of Hydroxyapatite for Water Purification",
      description: "Enter a blurb from the publication...",
      date: "JUNE 2025",
      category: "COMMERCE",
    },
    {
      title:
        "New Study Demonstrates Sustainable Catalytic Use of Hydroxyapatite for Water Purification",
      description: "Enter a blurb from the publication...",
      date: "JUNE 2025",
      category: "COMMERCE",
    },
    {
      title:
        "New Study Demonstrates Sustainable Catalytic Use of Hydroxyapatite for Water Purification",
      description: "Enter a blurb from the publication...",
      date: "JUNE 2025",
      category: "COMMERCE",
    },
  ];

  const [departmentData, setDepartmentData] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  // const departmentId = location.state?.department_id;
  const { departmentId } = useParams();
  console.log(departmentId, "departmentIddd");

  // 👇 Get Redux API Response
  // const apiResponse = useSelector((state) => state?.departmentById);

  const { getDepartmentById } = useSelector(
    (state) => state?.getDepartmentById,
  );

  // Fetch department data
  useEffect(() => {
    if (!departmentId) return;

    const fetchData = async () => {
      const payload = {
        data: {},
        method: "get",
        apiName: `getDepartmentById/${departmentId}`,
      };

      await dispatch(actions.GETDEPARTMENTBYID(payload));
    };

    fetchData();
  }, [departmentId]);

  // Convert API data whenever redux updates
  useEffect(() => {
    if (getDepartmentById?.data) {
      const converted = convertDepartmentData(getDepartmentById);
      setDepartmentData(converted);
    }
  }, [getDepartmentById]);

  // Until loaded
  if (!departmentData) return <p>Loading...</p>;

  // Now destructure DYNAMIC data
  const {
    courseData,
    about,
    programmes,
    facilities,
    eventsAndActivities,
    achievements,
    researchHighlights,
    studentSayAboutOutCollege,
    pdf_url,
  } = departmentData;
  console.log(departmentData, "departmentData");
  console.log(achievements, "achievements");
  console.log(programmes, "programmes");

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
    { name: "IQAC", to: "/iqac" },
    // { name: courseData?.title },
  ];

  //     const getDatasBySectionName = (sectionName) => {
  //     return (
  //       getAcademicsSectionsByName?.data?.filter(
  //         (section) => section?.section_name === sectionName
  //       ) || []
  //     );
  //   };

  //   const bannerDatas = getAcademicsSectionsByName?.data
  //     ? getDatasBySectionName("academicBanner section")
  //     : [];

  const bannerDatas = [];

  const data = [
    {
      title: "Composition",
      rows: [
        {
          name: "Dr. Tmt. S. Uma Gowrie",
          designation: "Principal & Secretary",
        },
        {
          name: "Mrs. Beulah Jebakumari Suganthi",
          designation: "Vice Principal",
        },
        {
          name: "Dr. M. Jeyanthi",
          designation: "Vice Principal - Self Supporting",
        },
        { name: "Dr. M. Sekar", designation: "Management Representative" },
        { name: "Mr. Shankar", designation: "Administrative Officer" },
        // { name: "Dr. Veena Murali", designation: "IQAC Coordinator" },
        { name: "Dr. Veena Murali", designation: "Member" },
        { name: "Dr. C. Sunitha", designation: "Member" },
        { name: "Dr. J. S. Saranya", designation: "Member" },
        { name: "Dr. S. Sushitra", designation: "Member" },
        { name: "Dr. T. S. R. Vijay Janani", designation: "Member" },
        { name: "Dr. M. Linnet Naveena", designation: "Member" },
        { name: "Ms. R. Anupama", designation: "Member" },
        { name: "Dr. N. Sudha", designation: "Member" },
        { name: "Dr. S. Gayathri", designation: "Member" },
        { name: "Mr. G. R. Hari", designation: "Industrialist" },
      ],
    },
    {
      title: "NAAC",
      rows: [
        { title: "Certificate - Cycle IV", file: "/files/naac-cycle-iv.pdf" },
        { title: "SSR - Cycle IV", file: "/files/ssr-cycle-iv.pdf" },
        { title: "Certificate - Cycle IV", file: "/files/naac-cycle-iv.pdf" },
        { title: "SSR - Cycle IV", file: "/files/ssr-cycle-iv.pdf" },
      ],
    },
    {
      title: "IQAC Events",
      rows: [
        { title: "2024 - 2025", file: "/files/iqac-2024-25.pdf" },
        { title: "2023 - 2024", file: "/files/iqac-2023-24.pdf" },
        { title: "2022 - 2023", file: "/files/iqac-2022-23.pdf" },
      ],
    },
    {
      title: "NIRF",
      rows: [
        { title: "2025", file: "/files/nirf-2025.pdf" },
        { title: "2024", file: "/files/nirf-2024.pdf" },
        { title: "2023", file: "/files/nirf-2023.pdf" },
      ],
    },
  ];

  // title={section.heading}
  //                                 rows={section.additional_data?.card_design}

  const Composition = [
    {
      heading: "Composition",
      additional_data: {
        card_design: [
          {
            name: "Dr. Tmt. S. Uma Gowrie",
            description: "Principal & Secretary",
          },
          {
            name: "Mrs. Beulah Jebakumari Suganthi",
            description: "Vice Principal",
          },

          {
            name: "Dr. M. Jeyanthi",
            description: "Vice Principal - Self Supporting",
          },
          { name: "Dr. M. Sekar", description: "Management Representative" },

          { name: "Mr. Shankar", description: "Administrative Officer" },
          { name: "Dr. Veena Murali", description: "IQAC Coordinator" },

          // { name: "Dr. Veena Murali", description: "Member" },
          { name: "Dr. C. Sunitha", description: "Member" },

          { name: "Dr. J. Saranya", description: "Member" },
          { name: "Dr. S. Susithra", description: "Member" },

          { name: "Dr. T.S.R. Vijay Janani", description: "Member" },
          { name: "Dr. M. Linnett Naveena", description: "Member" },

          { name: "Ms. R. Anupama", description: "Member" },
          { name: "Dr. N. Sudha", description: "Member" },

          { name: "Dr. S. Gayathri", description: "Member" },
          { name: "Mr. G.R. Hari", description: "Industrialist" },
        ],
      },
    },
  ];

  const NAAC = [
    {
      heading: "NAAC",
      additional_data: {
        card_design: [
          {
            name: "Certificate - Cycle IV",
            pdf: "https://ethirajsitedata.blob.core.windows.net/pdfs/1768906056475-607949832.pdf?sv=2025-11-05&se=2026-01-21T10%3A47%3A36Z&sr=b&sp=r&sig=SixRi2Q4y5JxADM385GglCIw7tw5uTUC8c8bgZZhCEM%3D",
          },
          {
            name: "SSR - Cycle IV",
            pdf: "https://ethirajsitedata.blob.core.windows.net/pdfs/1768906056475-607949832.pdf?sv=2025-11-05&se=2026-01-21T10%3A47%3A36Z&sr=b&sp=r&sig=SixRi2Q4y5JxADM385GglCIw7tw5uTUC8c8bgZZhCEM%3D",
          },
        ],
      },
    },
  ];

  const IQACEvents = [
    {
      heading: "IQAC Events",
      additional_data: {
        card_design: [
          {
            name: "2024-2025",
            pdf: "https://ethirajsitedata.blob.core.windows.net/pdfs/1768906056475-607949832.pdf?sv=2025-11-05&se=2026-01-21T10%3A47%3A36Z&sr=b&sp=r&sig=SixRi2Q4y5JxADM385GglCIw7tw5uTUC8c8bgZZhCEM%3D",
          },
          {
            name: "2023-2024",
            pdf: "https://ethirajsitedata.blob.core.windows.net/pdfs/1768906056475-607949832.pdf?sv=2025-11-05&se=2026-01-21T10%3A47%3A36Z&sr=b&sp=r&sig=SixRi2Q4y5JxADM385GglCIw7tw5uTUC8c8bgZZhCEM%3D",
          },
          {
            name: "2022-2023",
            pdf: "https://ethirajsitedata.blob.core.windows.net/pdfs/1768906056475-607949832.pdf?sv=2025-11-05&se=2026-01-21T10%3A47%3A36Z&sr=b&sp=r&sig=SixRi2Q4y5JxADM385GglCIw7tw5uTUC8c8bgZZhCEM%3D",
          },
        ],
      },
    },
  ];

  const NIRF = [
    {
      heading: "NIRF",
      additional_data: {
        card_design: [
          {
            name: "2025",
            pdf: "https://ethirajsitedata.blob.core.windows.net/pdfs/1768906056475-607949832.pdf?sv=2025-11-05&se=2026-01-21T10%3A47%3A36Z&sr=b&sp=r&sig=SixRi2Q4y5JxADM385GglCIw7tw5uTUC8c8bgZZhCEM%3D",
          },
          {
            name: "2024",
            pdf: "https://ethirajsitedata.blob.core.windows.net/pdfs/1768906056475-607949832.pdf?sv=2025-11-05&se=2026-01-21T10%3A47%3A36Z&sr=b&sp=r&sig=SixRi2Q4y5JxADM385GglCIw7tw5uTUC8c8bgZZhCEM%3D",
          },
          {
            name: "2023",
            pdf: "https://ethirajsitedata.blob.core.windows.net/pdfs/1768906056475-607949832.pdf?sv=2025-11-05&se=2026-01-21T10%3A47%3A36Z&sr=b&sp=r&sig=SixRi2Q4y5JxADM385GglCIw7tw5uTUC8c8bgZZhCEM%3D",
          },
        ],
      },
    },
  ];

  const AQAR = [
    {
      heading: "AQAR",
      additional_data: {
        card_design: [
          {
            name: "Report 2021 - 2022",
            pdf: "https://ethirajsitedata.blob.core.windows.net/pdfs/1768906056475-607949832.pdf?sv=2025-11-05&se=2026-01-21T10%3A47%3A36Z&sr=b&sp=r&sig=SixRi2Q4y5JxADM385GglCIw7tw5uTUC8c8bgZZhCEM%3D",
          },
          {
            name: "Report 2022 - 2023",
            pdf: "https://ethirajsitedata.blob.core.windows.net/pdfs/1768906056475-607949832.pdf?sv=2025-11-05&se=2026-01-21T10%3A47%3A36Z&sr=b&sp=r&sig=SixRi2Q4y5JxADM385GglCIw7tw5uTUC8c8bgZZhCEM%3D",
          },
          {
            name: "Best Practices",
            pdf: "https://ethirajsitedata.blob.core.windows.net/pdfs/1768906056475-607949832.pdf?sv=2025-11-05&se=2026-01-21T10%3A47%3A36Z&sr=b&sp=r&sig=SixRi2Q4y5JxADM385GglCIw7tw5uTUC8c8bgZZhCEM%3D",
          },
          {
            name: "Student Satisfaction Survey 2023 - 2024",
            pdf: "https://ethirajsitedata.blob.core.windows.net/pdfs/1768906056475-607949832.pdf?sv=2025-11-05&se=2026-01-21T10%3A47%3A36Z&sr=b&sp=r&sig=SixRi2Q4y5JxADM385GglCIw7tw5uTUC8c8bgZZhCEM%3D",
          },
        ],
      },
    },
  ];

  // Function to get dates by section_name
  const getDatasBySectionName = (sectionName) => {
    return (
      getAllIQACSectionsBySectionName?.data?.filter(
        (section) => section?.section_name === sectionName,
      ) || []
    );
  };

  const CompositionDatas = getAllIQACSectionsBySectionName?.data
    ? getDatasBySectionName("Composition section")
    : [];
  const NAACDatas = getAllIQACSectionsBySectionName?.data
    ? getDatasBySectionName("NAAC section")
    : [];
  const NIRFDatas = getAllIQACSectionsBySectionName?.data
    ? getDatasBySectionName("NIRF section")
    : [];

  const IQACEventsDatas = getAllIQACSectionsBySectionName?.data
    ? getDatasBySectionName("IQACEvents section")
    : [];

  const AQARDatas = getAllIQACSectionsBySectionName?.data
    ? getDatasBySectionName("AQAR section")
    : [];
  console.log(CompositionDatas, "CompositionDatasCompositionDatas");

  console.log(NAACDatas, "NAACDatasNAACDatasNAACDatas");

  const objectieDatas = [
    "To develop and apply quality benchmarks and parameters for the academic and administrative activities of the institution to ensure continuous improvement and accountability.",
    "To function as a nodal agency within the institution for planning, coordinating, and implementing quality-related activities, including the identification, adoption, and dissemination of best practices.",
    "To establish structured feedback mechanisms from students, parents, alumni, and other stakeholders for informed decision-making and quality enhancement of institutional processes.",
    "To disseminate information on various quality standards, benchmarks, and parameters of higher education among all stakeholders to build awareness and accountability.",
    "To systematically document institutional activities and programs that contribute to academic and administrative quality enhancement and innovation.",
    "To prepare and submit the Annual Quality Assurance Report (AQAR) to NAAC in accordance with prescribed guidelines and quality parameters, ensuring compliance and transparency.",
  ];

  const functionDatas = [
    "Develops quality benchmark for academic and administrative activities of the College.",
    "Organises orientation programmes for faculty and Students.",
    "Promotes the creation of an environment that is learner centric and conducive to quality education.",
    "Collects staff assessment and feedback from students, parents and other stakeholders on quality related issues for the improvement of teaching, learning, and research in the college.",
    "Documents and reports on various activities of the college for higher education requirements.",
    "Monitors the college’s infrastructural resources to ensure they are adequate and suitable  for teaching, learning, and research."
  ]

  return (
    <Box>
      <BannerSection bannerDatas={bannerDatas} />

      <Box sx={{ mt: 4, mb: 6, px: { xs: 2, sm: 3, md: "74px", lg: "94px" } }}>
        {/* Breadcrumbs */}

        {/* About Section */}

        <Grid
          container
          spacing={4}
          sx={{ mt: { lg: "63px", md: "50px", xs: "30px" } }}
        >
          <Grid
            size={{ xs: 12, md: 3.5 }}
            sx={{
              position: { md: "sticky", xs: "static" },
              top: "100px",
              alignSelf: "flex-start",
            }}
          >
            <SectionNavigation />
          </Grid>

          <Grid size={{ xs: 12, md: 8.5 }}>
            <Box>
              <Typography
                variant="typographyBodyInterNormal"
                sx={{ mb: { xs: "10px", md: "24px" } }}
              >
                The College established the Internal Quality Assurance Cell (IQAC) in 2004. It is a nodal centre dedicated to improving educational quality by implementing a systematic improvement plan for all aspects of the institution’s operation. It assures all stakeholders that the quality management system of the institution is accountable and transparent.
              </Typography>

              <Typography
                variant="primaryHeadingText"
                id="objectives-functions"
                // fontWeight="bold"
                // gutterBottom
                // sx={{mb:2}}
                sx={{ mb: { xs: "32px", sm: "24px", md: "24px" } }}
              >
                Objectives & Functions
              </Typography>

              {/* Activities Section */}
              <Typography
                variant="typographyContentHeadingProgram"
                sx={{ mb: "24px", color: "black" }}
              >
                Objectives
              </Typography>

              {objectieDatas?.map((data, index) => (
                <Box sx={{ display: "flex", alignItems: "start", gap: "6px" }}>
                  <Typography variant="typographyBodyInterNormal">
                    {`${index + 1}. `}
                  </Typography>

                  <Typography
                    key={index}
                    variant="typographyBodyInterNormal"
                    sx={{ mb: { xs: "10px", md: "24px" } }}
                  >
                    {`${data}`}
                  </Typography>
                </Box>
              ))}




              <Typography
                variant="typographyContentHeadingProgram"
                sx={{ mb: "24px", color: "black" }}
              >
                Functions
              </Typography>
              {functionDatas?.map((data, index) => (
                <Box sx={{ display: "flex", alignItems: "start", gap: "6px" }}>
                  <Typography variant="typographyBodyInterNormal">
                    {`• `}
                  </Typography>

                  <Typography
                    key={index}
                    variant="typographyBodyInterNormal"
                    sx={{ mb: { xs: "10px", md: "24px" } }}
                  >
                    {`${data}`}
                  </Typography>
                </Box>
              ))}


            </Box>
            <Box
              sx={{
                // border: "1px solid #e0e0e0",
                // borderRadius: 1,
                // p: 2,
                maxWidth: 600,
              }}
            >
              <Typography
                variant="typographyContentHeadingProgram"
                sx={{ mb: 1 }}
              >
                Contact Information
              </Typography>

              <Box
                sx={{
                  mb: 0.5,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Link
                  variant="typographyBodyInterNormal"
                  href="mailto:ethiraj@ethirajcollege.com"
                  underline="hover"
                  sx={{ color: "black", marginTop: "20px" }}
                >
                  ethiraj@ethirajcollege.com
                </Link>

                <Link
                  href="mailto:iqacintracollege@ethirajcollege.edu.in"
                  underline="hover"
                  variant="typographyBodyInterNormal"
                  sx={{
                    color: "black",
                    marginLeft: { xs: "0px", sm: "20px" },
                    marginTop: "20px",
                  }}
                >
                  iqacintracollege@ethirajcollege.edu.in
                </Link>
              </Box>

              <Box
                sx={{
                  mb: 0.5,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Link
                  href="mailto:iqac@ethirajcollege.edu.in"
                  underline="hover"
                  variant="typographyBodyInterNormal"
                  sx={{ color: "black", marginTop: "20px" }}
                >
                  iqac@ethirajcollege.edu.in
                </Link>
                <Typography
                  variant="typographyBodyInterNormal"
                  sx={{
                    marginLeft: { xs: "0px", sm: "20px" },
                    marginTop: "20px",
                  }}
                >
                  Mobile No: +91 99620 30015
                </Typography>
              </Box>
            </Box>

            {/* <Grid container>
                            {data.map((section, idx) => (
                                <SectionAccordion
                                    key={idx}
                                    title={section.title}
                                    rows={section.rows}
                                />
                            ))}
                        </Grid> */}

            <Grid container>
              {(CompositionDatas?.length > 0
                ? CompositionDatas
                : Composition
              )?.map((section, idx) => (
                <SectionAccordion
                  key={idx}
                  title={section.heading}
                  rows={section.additional_data?.card_design}
                  nameComponent={true}
                />
              ))}
            </Grid>

            <Grid container>
              {(NAACDatas?.length > 0 ? NAACDatas : NAAC)?.map(
                (section, idx) => (
                  <SectionAccordion
                    key={idx}
                    title={section.heading}
                    rows={section.additional_data?.card_design}
                  />
                ),
              )}
            </Grid>

            <Grid container>
              {(IQACEventsDatas?.length > 0
                ? IQACEventsDatas
                : IQACEvents
              )?.map((section, idx) => (
                <SectionAccordion
                  key={idx}
                  title={section.heading}
                  rows={section.additional_data?.card_design}
                />
              ))}
            </Grid>

            <Grid container>
              {(NIRFDatas?.length > 0 ? NIRFDatas : NIRF)?.map(
                (section, idx) => (
                  <SectionAccordion
                    key={idx}
                    title={section.heading}
                    rows={section.additional_data?.card_design}
                  />
                ),
              )}
            </Grid>

            <Grid container>
              {(AQARDatas?.length > 0 ? AQARDatas : AQAR)?.map(
                (section, idx) => (
                  <SectionAccordion
                    key={idx}
                    title={section.heading}
                    rows={section.additional_data?.card_design}
                  />
                ),
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Iqac;
