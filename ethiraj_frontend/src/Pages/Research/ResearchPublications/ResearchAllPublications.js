import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  CircularProgress,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { adminUrl } from "../../../constants/url";

import CustomNextButton from "../../../Components/CustomNextButton/CustomNextButton";

// Helper function to transform API response
const transformPublicationData = (item) => ({
  id:
    item.researchHighlights_id ||
    item.facultyPublications_id ||
    item.studentPublications_id,
  title: item.title || "",
  publisher: item.publisher || "",
  description: item.description || "",
  facultyName: item.faculty_name || item.author || "",
  studentName: item.student_name || item.author || item.faculty_name || "",
  academicDivision:
    item.academic?.academic_name || item.academic_name || item.academic || "",
  department:
    item.department?.department_name ||
    item.department_name ||
    item.department ||
    "",
  date: item.year || item.date || "",
  isbn: item.isbn || "",
  academic_id: item.academic?.academic_id || item.academic_id,
});

export default function ResearchAllPublications() {
  const location = useLocation();
  const [researchHighlights, setResearchHighlights] = useState([]);
  const [studentPublications, setStudentPublications] = useState([]);
  const [facultyPublications, setFacultyPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all three publication types
  useEffect(() => {
    const fetchAllPublications = async () => {
      setLoading(true);
      try {
        // Fetch Research Highlights
        const researchResponse = await fetch(
          `${adminUrl}getAllResearchHighlights`,
        );
        const researchData = await researchResponse.json();
        if (researchData.Success && researchData.data) {
          const transformed = researchData.data
            .map(transformPublicationData)
            .slice(0, 3);
          setResearchHighlights(transformed);
        }

        // Fetch Student Publications
        const studentResponse = await fetch(
          `${adminUrl}getAllStudentPublications`,
        );
        const studentData = await studentResponse.json();
        if (studentData.Success && studentData.data) {
          const transformed = studentData.data
            .map(transformPublicationData)
            .slice(0, 2);
          setStudentPublications(transformed);
        }

        // Fetch Faculty Publications
        const facultyResponse = await fetch(
          `${adminUrl}getAllFacultyPublications`,
        );
        const facultyData = await facultyResponse.json();
        if (facultyData.Success && facultyData.data) {
          const transformed = facultyData.data
            .map(transformPublicationData)
            .slice(0, 2);
          setFacultyPublications(transformed);
        }
      } catch (error) {
        console.error("Error fetching publications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPublications();
  }, []);

  useEffect(() => {
    const requestedTarget = location.state?.scrollTo;
    if (!requestedTarget) {
      return;
    }

    const targetFallbackMap = {
      patents: "research-highlights",
      "annual-publications": "research-highlights",
    };

    const targetId = targetFallbackMap[requestedTarget] || requestedTarget;
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      return;
    }

    const headerOffset = window.innerWidth < 900 ? 130 : 170;
    const top =
      targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }, [location]);

  return (
    <Box
      className="researchAllPublicationsContainer"
      sx={{
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
        py: 6,
        "& ul, & li": {
          margin: 0,
          padding: 0,
        },
        "& ul": {
          listStyle: "none",
        },
      }}
    >
      <style>{`
        .researchAllPublicationsContainer ul,
        .researchAllPublicationsContainer li {
          margin: 0 !important;
          padding: 0 !important;
        }
        .researchAllPublicationsContainer ul {
          list-style: none !important;
        }
      `}</style>
      <Grid container columnSpacing={10}>
        {/* MAIN TITLE */}
        <Grid size={{ xs: 12 }}>
          <Typography variant="primaryHeadingText">
            Research Publications
          </Typography>
        </Grid>

        {/* ================= RESEARCH HIGHLIGHTS ================= */}
        <Grid
          size={{ xs: 12 }}
          id="research-highlights"
          sx={{ mb: { xs: "56px" } }}
        >
          <Typography
            variant="subHeadingTextInterMedium"
            sx={{ pb: "15px", mt: { xs: "20px", md: "20px" } }}
          >
            Research Highlights
          </Typography>

          <Typography
            variant="typographyBodyInterNormal"
            sx={{
              mt: { xs: "20px", md: "20px" },
              fontWeight: "500 !important",
            }}
          >
            RESEARCH WORKS
          </Typography>

          <Divider sx={{ mb: "10px", borderColor: "gray" }} />

          {researchHighlights?.map((item, index) => (
            <Box
              key={index}
              sx={{
                borderBottom: "1px solid gray",
                py: { xs: "29px", md: "29px", lg: "29px" },
              }}
            >
              {/* Title */}
              <Typography
                variant="subHeadingTextInterMedium"
                sx={{
                  // fontWeight: "500 !important",
                  maxWidth: { xs: "100%", md: "80%", lg: "80%" },
                  mb: { xs: "29px", md: "39px", lg: "49px" },
                }}
              >
                {item?.title}
              </Typography>

              {/* Metadata Row */}
              <Grid container spacing={4}>
                {/* Publisher */}
                <Grid
                  item
                  size={{ xs: 12, md: 5 }}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    // justifyContent: "space-between",
                    gap: "20px",
                  }}
                >
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{
                      fontWeight: "500 !important",
                    }}
                  >
                    PUBLISHER
                  </Typography>
                  <Typography variant="typographyBodyInterNormal">
                    {item?.publisher}
                  </Typography>
                </Grid>

                {/* Faculty */}
                <Grid
                  item
                  size={{ xs: 12, sm: 6, md: 4 }}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    // justifyContent: "space-between",
                    gap: "20px",
                  }}
                >
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{
                      fontWeight: "500 !important",
                    }}
                  >
                    FACULTY
                  </Typography>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{
                      textOverflow: "ellipsis",
                      whiteSpace: "normal", // allow line breaks
                    }}
                  >
                    {item?.facultyName?.split(",").map((name, index, arr) => (
                      <div key={index}>
                        {name.trim()}
                        {index !== arr?.length - 1 && ","}
                      </div>
                    ))}
                  </Typography>
                </Grid>

                {/* Department */}
                <Grid
                  item
                  size={{ xs: 6, sm: 3, md: 2 }}
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-start", sm: "flex-end" },
                  }}
                >
                  <Typography variant="typographyBodyInterNormal">
                    {item?.department || "Plant Biology"}
                  </Typography>
                </Grid>

                {/* Year */}
                <Grid
                  item
                  size={{ xs: 6, sm: 3, md: 1 }}
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-start", sm: "flex-end" },
                  }}
                >
                  <Typography variant="typographyBodyInterNormal">
                    {item?.date}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}

          {!researchHighlights.length && (
            <Box sx={{ py: "24px" }}>
              <Typography variant="typographyBodyInterNormal">
                No research publications match the selected filters.
              </Typography>
            </Box>
          )}

          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              mt: { xs: "30px" },
              justifyContent: { xs: "flex-start" },
              alignItems: "center",
            }}
          >
            <CustomNextButton
              buttonText="VIEW ALL RESEARCH HIGHLIGHTS"
              onClick="/research/researchallhighlights"
            />
          </Grid>
        </Grid>

        {/* ================= STUDENT PUBLICATIONS ================= */}
        {/* ================= STUDENT PUBLICATIONS ================= */}
        <Grid size={{ xs: 12, md: 6 }} id="student-publications">
          <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 2 }}>
            Student Publications
          </Typography>

          <Typography
            variant="typographyBodyInterNormal"
            sx={{ mb: 1, color: "rgba(0, 0, 0, 1)" }}
          >
            TITLE OF THE BOOK
          </Typography>

          <Divider sx={{ mb: 3, borderColor: "#CFCFCF" }} />

          {studentPublications?.map((item, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              {/* LABEL */}

              {/* TITLE */}
              <Typography variant="subHeadingTextInterMedium" sx={{ mb: 2 }}>
                {item.title}
              </Typography>

              {/* STUDENT NAME */}

              {/* META */}
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  gap: { xs: "8px", sm: "16px", md: "24px", lg: "32px" },
                }}
              >
                <Typography
                  variant="typographyBodyInterNormal"
                  sx={{ fontWeight: "500 !important" }}
                >
                  PUBLISHER
                </Typography>
                <Typography variant="typographyBodyInterNormal">
                  {item.publisher}
                </Typography>
              </Box>
              {item.studentName && (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    gap: { xs: "8px", sm: "16px", md: "24px", lg: "32px" },
                  }}
                >
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ fontWeight: "500 !important" }}
                  >
                    STUDENT NAME
                  </Typography>
                  <Typography variant="typographyBodyInterNormal">
                    {item.studentName?.split(",").map((name, index, arr) => (
                      <div key={index}>
                        {name.trim()}
                        {index !== arr?.length - 1 && ","}
                      </div>
                    ))}
                  </Typography>
                </Box>
              )}

              {/* DEPARTMENT */}
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  gap: { xs: "8px", sm: "16px", md: "24px", lg: "32px" },
                }}
              >
                <Typography
                  variant="typographyBodyInterNormal"
                  sx={{ fontWeight: "500 !important" }}
                >
                  DEPARTMENT
                </Typography>
                <Typography variant="typographyBodyInterNormal">
                  {item.department || "N/A"}
                </Typography>
              </Box>
              {item.isbn && (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    gap: { xs: "8px", sm: "16px", md: "24px", lg: "32px" },
                  }}
                >
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ fontWeight: "500 !important" }}
                  >
                    ISBN
                  </Typography>
                  <Typography variant="typographyBodyInterNormal">
                    {item.isbn}
                  </Typography>
                </Box>
              )}
              <Box sx={{ mb: 2 }}>
                <Typography variant="typographyBodyInterNormal">
                  {item.category}
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="typographyBodyInterNormal">
                  {item.date}
                </Typography>
              </Box>

              {/* DIVIDER BETWEEN ITEMS */}
              <Divider sx={{ mt: 3, borderColor: "#CFCFCF" }} />
            </Box>
          ))}

          <CustomNextButton
            buttonText="VIEW ALL STUDENT PUBLICATIONS"
            onClick="/research/studentpublications"
          />
        </Grid>

        {/* ================= FACULTY PUBLICATIONS ================= */}
        <Grid size={{ xs: 12, md: 6 }} id="faculty-publications">
          <Typography variant="headingTextNewsreaderMedium" sx={{ mb: "17px" }}>
            Faculty Publications
          </Typography>
          <Typography
            variant="typographyBodyInterNormal"
            sx={{ mb: 1, color: "rgba(0, 0, 0, 1)" }}
          >
            TITLE OF THE BOOK
          </Typography>

          <Divider sx={{ mb: 3, borderColor: "#CFCFCF" }} />

          {facultyPublications
            .filter((item) => item.facultyName?.trim() && item.isbn?.trim())
            .map((item, index) => (
              <Box key={index} sx={{ mb: 4 }}>
                {/* LABEL */}

                {/* TITLE */}
                <Typography variant="subHeadingTextInterMedium" sx={{ mb: 2 }}>
                  {item.title}
                </Typography>

                {/* META */}
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    gap: { xs: "8px", sm: "16px", md: "24px", lg: "32px" },
                  }}
                >
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ fontWeight: "500 !important" }}
                  >
                    PUBLISHER
                  </Typography>
                  <Typography variant="typographyBodyInterNormal">
                    {item.publisher}
                  </Typography>
                </Box>
                {/* FACULTY NAME */}
                {item.facultyName && (
                  <Box
                    sx={{
                      mb: 2,
                      display: "flex",
                      gap: { xs: "8px", sm: "16px", md: "24px", lg: "32px" },
                    }}
                  >
                    <Typography
                      variant="typographyBodyInterNormal"
                      sx={{ fontWeight: "500 !important" }}
                    >
                      FACULTY
                    </Typography>
                    <Typography variant="typographyBodyInterNormal">
                      {item.facultyName?.split(",").map((name, index, arr) => (
                        <div key={index}>
                          {name.trim()}
                          {index !== arr?.length - 1 && ","}
                        </div>
                      ))}
                    </Typography>
                  </Box>
                )}

                {/* DEPARTMENT */}
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    gap: { xs: "8px", sm: "16px", md: "24px", lg: "32px" },
                  }}
                >
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ fontWeight: "500 !important" }}
                  >
                    DEPARTMENT
                  </Typography>
                  <Typography variant="typographyBodyInterNormal">
                    {item.department || "N/A"}
                  </Typography>
                </Box>

                {item.isbn && (
                  <Box
                    sx={{
                      mb: 2,
                      display: "flex",
                      gap: { xs: "8px", sm: "16px", md: "24px", lg: "32px" },
                    }}
                  >
                    <Typography
                      variant="typographyBodyInterNormal"
                      sx={{ fontWeight: "500 !important" }}
                    >
                      ISBN
                    </Typography>
                    <Typography variant="typographyBodyInterNormal">
                      {item.isbn}
                    </Typography>
                  </Box>
                )}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="typographyBodyInterNormal">
                    {item.category}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="typographyBodyInterNormal">
                    {item.date}
                  </Typography>
                </Box>

                {/* DIVIDER */}

                <Divider sx={{ mt: 3, borderColor: "#CFCFCF" }} />
              </Box>
            ))}

          <CustomNextButton
            buttonText="VIEW ALL FACULTY PUBLICATIONS"
            onClick="/research/facultypublications"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
