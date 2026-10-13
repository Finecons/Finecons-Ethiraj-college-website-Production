import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";

import Guidelines from "../../../Assets/Summer Project Guidelines.pdf";
import FacultyFundedProjectsGuidelines from "../../../Assets/Faculty Funded Projects Guidelines.pdf";
import ECRICFacultyResearchProposal from "../../../Assets/ECRIC Faculty Research Proposal .pdf";
import summerresearchproject2024_2025 from "../../../Assets/summer research project 2024-2025.docx";
import ECRICSTUDENTSSUMMERPROJECT25_26 from "../../../Assets/ECRIC STUDENTS SUMMER PROJECT 25-26.docx";

// Static fallback data
const staticResearchProjectsData = [
  {
    title: "Student Summer Research Fellowship",
    description:
      "Open to Bachelors and Masters students interested in hands-on research experience.",
    links: [
      { label: "Guidelines", url: Guidelines },
      // { label: "Apply here", url: "#" },
      { label: "2024-2025", url: summerresearchproject2024_2025 },
      { label: "2025-2026", url: ECRICSTUDENTSSUMMERPROJECT25_26 },
    ],
  },
  {
    title: "Externally Funded Projects",
    description:
      "Faculty received research grants from external agencies to promote research within the college.",
    links: [
      { label: "Guidelines", url: "#" },
      { label: "Resource List for Research Grants", url: "#" },
      { label: "Past Projects", url: "#" },
    ],
  },
  {
    title: "ECRIC Funded Faculty Research Projects",
    description:
      "Faculty are encouraged to propose research projects that reflect ongoing inquiries and emerging themes in their departments.",
    links: [
      { label: "Guidelines", url: FacultyFundedProjectsGuidelines },
      { label: "Application & Other Submission Forms", url: ECRICFacultyResearchProposal },
      { label: "Past Projects", url: "#" },
    ],
  },
];

const ResearchProjects = ({researchAndProjectsDatas}) => {
  console.log(researchAndProjectsDatas, "researchAndProjectsDatas");

  // Extract API data if available
  const apiData = researchAndProjectsDatas?.[0]?.additional_data;

  console.log(apiData, "apiData for Research Projects");

  // Build research projects data from API or use static fallback
  const researchProjectsData = apiData
    ? [
        {
          title: "Student Summer Research Fellowship",
          description:
            "Open to Bachelors and Masters students interested in hands-on research experience.",
          links: [
            { label: "Guidelines", url: apiData.student_summer_research_guidelines || Guidelines },
            // { label: "Apply here", url: apiData.student_summer_research_apply_here || "#" },
            { label: apiData.year1 || "2024-2025", url: apiData.year1_pdf || summerresearchproject2024_2025 },
            { label: apiData.year2 || "2025-2026", url: apiData.year2_pdf || ECRICSTUDENTSSUMMERPROJECT25_26 },
          ],
        },
        {
          title: "Externally Funded Projects",
          description:
            "Faculty received research grants from external agencies to promote research within the college.",
          links: [
            { label: "Guidelines", url: apiData.externally_funded_guidelines || "#" },
            { label: "Resource List for Research Grants", url: apiData.resource_list || "#" },
            { label: "Past Projects", url: apiData.externally_funded_past_projects || "#" },
          ],
        },
        {
          title: "ECRIC Funded Faculty Research Projects",
          description:
            "Faculty are encouraged to propose research projects that reflect ongoing inquiries and emerging themes in their departments.",
          links: [
            { label: "Guidelines", url: apiData.ecric_guidelines || FacultyFundedProjectsGuidelines },
            { label: "Application & Other Submission Forms", url: apiData.application_forms || ECRICFacultyResearchProposal },
            { label: "Past Projects", url: apiData.ecric_past_projects || "#" },
          ],
        },
      ]
    : staticResearchProjectsData;

  const sectionIds = [
    "student-summer-project",
    "externally-funded-projects",
    "ecric-funded-faculty-projects",
  ];

  return (
    <Box sx={{ pt: { xs: "64px", sm: "64px", md: "90px" ,lg:"120px"} }}>
      <Grid container spacing={4}>
        {researchProjectsData.map((item, index) => (
          <Grid
            item
            size={{ xs: 12, sm: index === 2 ? 12 : 6, md: 4 }}
            key={index}
            sx={{
              display: "flex",
            }}
          >
            <Box
              id={sectionIds[index]}
              sx={{
                pr: { md: 3 },
                height: "100%",
                width: "100%",
              }}
            >
              <Typography variant="headingTextNewsreaderMedium" fontWeight={600}>
                {item.title}
              </Typography>

              <Typography variant="secondaryTextInterRegular" sx={{ mt:{xs:"24px", sm: "24px", md: "18px",lg:"24px"} }}>
                {item.description}
              </Typography>

              <Typography variant="subHeadingTextInterMedium" sx={{ mt: { xs: "20px", md: "35px", lg: "57px" } }} fontWeight={600}>
                Important Links
              </Typography>

              <Box mt={1} sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {item.links.map((link, i) => (
                  // <Typography key={i} sx={{fontSize:"14px"}}>
                  //   <Link href={link.url} s sx={{textDecoration:"underline"}}>
                  //     {link.label}
                  //   </Link>
                  // </Typography>

                  <Typography
                    variant="typographyBodyInterNormal"
                    component="a"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#003BD1",
                     
                    }}
                  >
                    {link.label}
                  </Typography>

                ))}
              </Box>
            </Box>
            {/* Show divider only between first two items on sm devices */}
            {index === 0 && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  display: { xs: "none", sm: "block", md: "none" },
                  height: "100%",
                  borderColor: "black",
                  ml: 4,
                  mr: 4,
                }}
              />
            )}
            {/* Show vertical divider on md+ between all items except last */}
            {index !== researchProjectsData.length - 1 && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                  height: "100%",
                  borderColor: "black",
                }}
              />
            )}
          </Grid>
        ))}
      </Grid>

      {/* Bottom horizontal divider */}
      <Divider sx={{ mt: 4 }} />
    </Box>
  );
};

export default ResearchProjects;
