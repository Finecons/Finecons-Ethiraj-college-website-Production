import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { adminUrl } from "../../../constants/url";
import {
  Box,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Collapse,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CustomBreadCrumbs from "../../../Components/CustomBreadCrumbs/CustomBreadCrumbs";
import bannerImage from "../../../Assets/Campuslife/newsletterBanner.jpg";

const initialNewsletterData = [
  {
    year: "2026 – 2027",
    id: "year-2026-2027",
    issues: [
      { month: "October 2026", viewUrl: "#", downloadUrl: "#" },
      { month: "September 2026", viewUrl: "#", downloadUrl: "#" },
      { month: "August 2026", viewUrl: "#", downloadUrl: "#" },
      { month: "July 2026", viewUrl: "#", downloadUrl: "#" },
      { month: "June 2026", viewUrl: "#", downloadUrl: "#" },
    ],
  },
  {
    year: "2025 – 2026",
    id: "year-2025-2026",
    issues: [
      { month: "May 2026", viewUrl: "#", downloadUrl: "#" },
      { month: "April 2026", viewUrl: "#", downloadUrl: "#" },
      { month: "March 2026", viewUrl: "#", downloadUrl: "#" },
      { month: "February 2026", viewUrl: "#", downloadUrl: "#" },
      { month: "January 2026", viewUrl: "#", downloadUrl: "#" },
      { month: "December 2025", viewUrl: "#", downloadUrl: "#" },
    ],
  },
  {
    year: "2024 – 2025",
    id: "year-2024-2025",
    issues: [
      { month: "May 2025", viewUrl: "#", downloadUrl: "#" },
      { month: "April 2025", viewUrl: "#", downloadUrl: "#" },
      { month: "March 2025", viewUrl: "#", downloadUrl: "#" },
      { month: "February 2025", viewUrl: "#", downloadUrl: "#" },
      { month: "January 2025", viewUrl: "#", downloadUrl: "#" },
    ],
  },
  {
    year: "2023 – 2024",
    id: "year-2023-2024",
    issues: [
      { month: "May 2024", viewUrl: "#", downloadUrl: "#" },
      { month: "April 2024", viewUrl: "#", downloadUrl: "#" },
      { month: "March 2024", viewUrl: "#", downloadUrl: "#" },
      { month: "February 2024", viewUrl: "#", downloadUrl: "#" },
      { month: "January 2024", viewUrl: "#", downloadUrl: "#" },
    ],
  },
];

const Newsletter = () => {
  const [newsletterData, setNewsletterData] = useState(initialNewsletterData);
  const [openYears, setOpenYears] = useState({
    "2026 – 2027": true,
  });
  const [activeYear, setActiveYear] = useState("2026 – 2027");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch dynamic newsletter data from backend
  useEffect(() => {
    const fetchNewsletterData = async () => {
      try {
        let response = null;
        try {
          response = await axios.post(
            "http://localhost:5005/api/v1/getAllCampusLifeSectionsBySectionName",
            {
              page_name: "student unions",
              section_name: "newsletter section",
            }
          );
        } catch (localErr) {
          try {
            response = await axios.post(
              `${adminUrl}getAllCampusLifeSectionsBySectionName`,
              {
                page_name: "student unions",
                section_name: "newsletter section",
              }
            );
          } catch (remoteErr) {
            console.warn("Could not fetch remote newsletter section", remoteErr);
          }
        }

        const section = response?.data?.data?.[0];
        const years = section?.additional_data?.years;
        if (Array.isArray(years) && years.length > 0) {
          setNewsletterData(years);
          const firstYear = years[0]?.year;
          if (firstYear) {
            setOpenYears({ [firstYear]: true });
            setActiveYear(firstYear);
          }
        }
      } catch (error) {
        console.error("Error fetching dynamic newsletter data:", error);
      }
    };

    fetchNewsletterData();
  }, []);

  const toggleYear = (year) => {
    setOpenYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
    setActiveYear(year);
  };

  const handleYearClick = (year, id) => {
    setOpenYears((prev) => ({
      ...prev,
      [year]: true,
    }));
    setActiveYear(year);

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Filter issues based on search term and dynamic newsletterData
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return newsletterData;
    const query = searchTerm.toLowerCase();

    return newsletterData
      .map((section) => {
        const matchesYear = section.year?.toLowerCase().includes(query);
        const filteredIssues = (section.issues || []).filter(
          (issue) =>
            issue.month?.toLowerCase().includes(query) ||
            issue.title?.toLowerCase().includes(query)
        );

        if (matchesYear) {
          return section;
        }

        if (filteredIssues.length > 0) {
          return {
            ...section,
            issues: filteredIssues,
          };
        }
        return null;
      })
      .filter(Boolean);
  }, [searchTerm, newsletterData]);

  const breadCrumbsItems = [
    { name: "Home", to: "/" },
    { name: "Campus Life", to: "/campuslife" },
    { name: "Newsletter" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #FFFFFF 60%, #F5F0FA 85%, #E6DCF2 100%)",
        pb: { xs: 8, md: 12 },
      }}
    >
      {/* ===================== HERO BANNER ===================== */}
      <Box
        sx={{
          m: {
            lg: "32px 32px 0 32px",
            md: "25px 25px 0 25px",
            xs: "0",
            sm: "32px 20px 0 20px",
          },
          borderRadius: { sm: "20px 20px 0 0", xs: 0 },
          minHeight: { xs: "360px", sm: "460px", md: "540px", lg: "620px" },
          position: "relative",
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 45%, rgba(0, 0, 0, 0.85) 100%), url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            p: {
              xs: "24px 20px",
              sm: "36px 30px",
              md: "44px 40px",
              lg: "52px 48px",
            },
          }}
        >
          {/* Breadcrumbs */}
          <Box sx={{ mb: { xs: 2, md: 3 } }}>
            <CustomBreadCrumbs items={breadCrumbsItems} colorWhite={true} />
          </Box>

          {/* Title and Subtitle */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "flex-end" },
              gap: { xs: 2, md: 4 },
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontFamily: "Newsreader, serif",
                fontSize: {
                  xs: "36px",
                  sm: "46px",
                  md: "52px",
                  lg: "60px",
                },
                lineHeight: { xs: "42px", md: "60px" },
                fontWeight: 600,
                color: "#FFFFFF",
                m: 0,
              }}
            >
              Newsletter
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "24px" },
                lineHeight: { xs: "22px", sm: "26px", md: "28px", lg: "32px" },
                fontWeight: 400,
                color: "#FFFFFF",
                maxWidth: { xs: "100%", md: "620px", lg: "876px" },
                m: 0,
              }}
            >
              The monthly newsletter of Ethiraj College for Women – campus news,
              student achievements, events and more.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ===================== MAIN CONTENT SECTION ===================== */}
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          pt: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Grid container spacing={{ xs: 3, md: 5, lg: 7 }}>
          {/* ----- LEFT SIDEBAR: ON THIS PAGE ----- */}
          <Grid item size={{ xs: 12, md: 3.5, lg: 3 }}>
            <Box
              sx={{
                position: { md: "sticky" },
                top: { md: "120px" },
                pr: { md: 2 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: 600,
                  color: "#212529",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  mb: 2,
                }}
              >
                ON THIS PAGE
              </Typography>

              {/* Search Bar */}
              <Box sx={{ mb: 3 }}>
                <TextField
                  placeholder="Search"
                  size="small"
                  fullWidth
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon sx={{ color: "#616161" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "30px",
                      backgroundColor: "#FFFFFF",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                      "& fieldset": {
                        borderColor: "#D1D5DB",
                      },
                      "&:hover fieldset": {
                        borderColor: "#473F93",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#473F93",
                      },
                    },
                  }}
                />
              </Box>

              {/* Academic Year List */}
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: 600,
                  color: "#212529",
                  mb: 2,
                }}
              >
                Academic Year
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                  flexWrap: { xs: "wrap", md: "nowrap" },
                  gap: { xs: 1.5, md: 2 },
                }}
              >
                {newsletterData.map((sec) => {
                  const isCurrent = activeYear === sec.year;
                  const secId =
                    sec.id || `year-${sec.year.replace(/\s+/g, "-")}`;
                  return (
                    <Box
                      key={sec.year}
                      onClick={() => handleYearClick(sec.year, secId)}
                      sx={{
                        cursor: "pointer",
                        py: 0.5,
                        px: { xs: 1.5, md: 0 },
                        borderRadius: { xs: "16px", md: 0 },
                        backgroundColor: {
                          xs: isCurrent ? "#F0EEF7" : "transparent",
                          md: "transparent",
                        },
                        borderBottom: {
                          md: isCurrent
                            ? "2px solid #212529"
                            : "2px solid transparent",
                        },
                        display: "inline-block",
                        width: { md: "fit-content" },
                        transition: "all 0.2s ease",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          lineHeight: "20px",
                          fontWeight: isCurrent ? 600 : 400,
                          color: isCurrent ? "#212529" : "#6C757D",
                          "&:hover": {
                            color: "#212529",
                          },
                        }}
                      >
                        {sec.year}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Grid>

          {/* ----- RIGHT MAIN CONTENT: INTRO & ACCORDIONS ----- */}
          <Grid item size={{ xs: 12, md: 8.5, lg: 9 }}>
            {/* Intro text */}
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "15px", sm: "16px", md: "18px" },
                lineHeight: { xs: "24px", md: "28px" },
                color: "#303030",
                mb: { xs: 4, md: 6 },
              }}
            >
              Select a month to read the newsletter online or download a copy. A
              new issue is added every month.
            </Typography>

            {/* Accordions */}
            {filteredData.length === 0 ? (
              <Box sx={{ py: 6, textAlign: "center" }}>
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    color: "#6C757D",
                  }}
                >
                  No newsletter issues found matching "{searchTerm}".
                </Typography>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {filteredData.map((section) => {
                  const isOpen =
                    openYears[section.year] || Boolean(searchTerm.trim());

                  return (
                    <Box
                      key={section.year}
                      id={section.id}
                      sx={{
                        borderBottom: "1px solid rgba(26, 26, 26, 0.25)",
                        pb: isOpen ? 4 : 3,
                      }}
                    >
                      {/* Accordion Header */}
                      <Box
                        onClick={() => toggleYear(section.year)}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                          userSelect: "none",
                          pb: 2,
                        }}
                      >
                        <Typography
                          component="h2"
                          sx={{
                            fontFamily: "Newsreader, serif",
                            fontSize: {
                              xs: "32px",
                              sm: "42px",
                              md: "50px",
                              lg: "60px",
                            },
                            lineHeight: 1.1,
                            fontWeight: 600,
                            color: "#212529",
                            m: 0,
                          }}
                        >
                          {section.year}
                        </Typography>

                        <IconButton
                          aria-label={isOpen ? "Collapse" : "Expand"}
                          sx={{
                            color: "#212529",
                            p: 1,
                          }}
                        >
                          {isOpen ? (
                            <RemoveIcon sx={{ fontSize: { xs: 28, md: 36 } }} />
                          ) : (
                            <AddIcon sx={{ fontSize: { xs: 28, md: 36 } }} />
                          )}
                        </IconButton>
                      </Box>

                      {/* Accordion Issues List */}
                      <Collapse in={isOpen} timeout="auto" unmountOnExit>
                        <Box sx={{ mt: { xs: 2, md: 3 } }}>
                          {/* Table Header */}
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              borderBottom: "1px solid #212529",
                              pb: 1.5,
                              mb: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: { xs: "14px", md: "16px", lg: "18px" },
                                fontWeight: 500,
                                color: "#212529",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              MONTH
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: { xs: "14px", md: "16px", lg: "18px" },
                                fontWeight: 500,
                                color: "#212529",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                textAlign: "right",
                                pr: { xs: 1, md: 2 },
                              }}
                            >
                              ACTION
                            </Typography>
                          </Box>

                          {/* Issue Rows */}
                          {(section.issues || []).map((issue, idx) => {
                            const pdfTargetUrl =
                              issue.pdfUrl && issue.pdfUrl !== "#"
                                ? issue.pdfUrl
                                : issue.viewUrl || "#";
                            const hasPdf =
                              pdfTargetUrl && pdfTargetUrl !== "#";

                            return (
                              <Box
                                key={`${issue.month}-${idx}`}
                                sx={{
                                  display: "flex",
                                  flexDirection: { xs: "column", sm: "row" },
                                  justifyContent: "space-between",
                                  alignItems: { xs: "flex-start", sm: "center" },
                                  gap: { xs: 1.5, sm: 2 },
                                  borderBottom: "1px solid #212529",
                                  py: { xs: 2.5, md: 3.5 },
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontFamily: "Newsreader, serif",
                                    fontSize: {
                                      xs: "20px",
                                      sm: "22px",
                                      md: "24px",
                                    },
                                    lineHeight: "32px",
                                    fontWeight: 500,
                                    color: "#212529",
                                  }}
                                >
                                  {issue.month}
                                </Typography>

                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: { xs: 3, sm: 4, md: 5 },
                                  }}
                                >
                                  <MuiLink
                                    href={hasPdf ? pdfTargetUrl : undefined}
                                    target={hasPdf ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    onClick={(e) => {
                                      if (!hasPdf) {
                                        e.preventDefault();
                                        alert(
                                          "Newsletter PDF for this issue will be available shortly."
                                        );
                                      }
                                    }}
                                    sx={{
                                      fontFamily: "Inter, sans-serif",
                                      fontSize: {
                                        xs: "16px",
                                        sm: "18px",
                                        md: "22px",
                                        lg: "24px",
                                      },
                                      lineHeight: "32px",
                                      fontWeight: 400,
                                      color: "#003BD1",
                                      textDecoration: "underline",
                                      cursor: "pointer",
                                      "&:hover": {
                                        color: "#002799",
                                      },
                                    }}
                                  >
                                    View Newsletter
                                  </MuiLink>

                                  <MuiLink
                                    href={hasPdf ? pdfTargetUrl : undefined}
                                    download={
                                      issue.fileName ||
                                      `${issue.month}-Newsletter.pdf`
                                    }
                                    target={hasPdf ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    onClick={(e) => {
                                      if (!hasPdf) {
                                        e.preventDefault();
                                        alert(
                                          "Newsletter PDF download will be available shortly."
                                        );
                                      }
                                    }}
                                    sx={{
                                      fontFamily: "Inter, sans-serif",
                                      fontSize: {
                                        xs: "16px",
                                        sm: "18px",
                                        md: "22px",
                                        lg: "24px",
                                      },
                                      lineHeight: "32px",
                                      fontWeight: 400,
                                      color: "#003BD1",
                                      textDecoration: "underline",
                                      cursor: "pointer",
                                      "&:hover": {
                                        color: "#002799",
                                      },
                                    }}
                                  >
                                    Download
                                  </MuiLink>
                                </Box>
                              </Box>
                            );
                          })}
                        </Box>
                      </Collapse>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Newsletter;

