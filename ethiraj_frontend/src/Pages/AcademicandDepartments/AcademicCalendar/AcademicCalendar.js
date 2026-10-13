import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import heroImage from "../../../Assets/academic_calendar_hero.png";
import aided2025 from "../../../Assets/AcademicCalendar/Calendar_2025_2026_Aided.pdf";
import ss2025 from "../../../Assets/AcademicCalendar/Calendar_2025_2026_SS.pdf";
import aided2023 from "../../../Assets/AcademicCalendar/Calendar_2023_2024_Aided.pdf";
import ss2023 from "../../../Assets/AcademicCalendar/Calendar_2023_2024_SS.pdf";
import aided2022 from "../../../Assets/AcademicCalendar/Calendar_2022_2023_Aided.pdf";
import ss2022 from "../../../Assets/AcademicCalendar/Calendar_2022_2023_SS.pdf";

const AIDED_CALENDARS = [
  { year: "2025 – 2026", pdf: aided2025, filename: "Academic_Calendar_Aided_2025-2026.pdf" },
  { year: "2024 – 2025", pdf: null, filename: null },
  { year: "2023 – 2024", pdf: aided2023, filename: "Academic_Calendar_Aided_2023-2024.pdf" },
  { year: "2022 – 2023", pdf: aided2022, filename: "Academic_Calendar_Aided_2022-2023.pdf" },
];

const SELF_SUPPORTING_CALENDARS = [
  { year: "2025 – 2026", pdf: ss2025, filename: "Academic_Calendar_Self_Supporting_2025-2026.pdf" },
  { year: "2024 – 2025", pdf: null, filename: null },
  { year: "2023 – 2024", pdf: ss2023, filename: "Academic_Calendar_Self_Supporting_2023-2024.pdf" },
  { year: "2022 – 2023", pdf: ss2022, filename: "Academic_Calendar_Self_Supporting_2022-2023.pdf" },
];

// Helper to ensure PDF URL is an absolute path from site root
const getAbsolutePdfUrl = (url) => {
  if (!url) return "#";
  if (url.startsWith("http") || url.startsWith("blob:")) return url;
  return url.startsWith("/") ? url : `/${url}`;
};

export default function AcademicCalendar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("aided");

  // ScrollSpy listener to dynamically highlight stream on scroll
  useEffect(() => {
    const handleScroll = () => {
      const aidedEl = document.getElementById("aided");
      const selfEl = document.getElementById("self-supporting");
      if (!aidedEl || !selfEl) return;

      const triggerPoint = window.innerHeight * 0.45;
      const selfRect = selfEl.getBoundingClientRect();

      if (selfRect.top <= triggerPoint) {
        setActiveTab("self-supporting");
      } else {
        setActiveTab("aided");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id, tabName) => {
    setActiveTab(tabName);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const filterCalendars = (list) => {
    if (!searchQuery.trim()) return list;
    return list.filter((item) =>
      item.year.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
  };

  const handleDownload = async (e, pdfUrl, filename) => {
    e.preventDefault();
    if (!pdfUrl) return;
    const fullUrl = getAbsolutePdfUrl(pdfUrl);
    try {
      const response = await fetch(fullUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename || "Academic_Calendar.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
    } catch (err) {
      const link = document.createElement("a");
      link.href = fullUrl;
      link.download = filename || "Academic_Calendar.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  const filteredAided = filterCalendars(AIDED_CALENDARS);
  const filteredSelfSupporting = filterCalendars(SELF_SUPPORTING_CALENDARS);

  const renderCalendarTable = (items) => (
    <Box sx={{ width: "100%" }}>
      {/* Table Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #212529",
          pb: 1.5,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            fontWeight: 500,
            color: "#212529",
            letterSpacing: "0.5px",
          }}
        >
          NAME
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            fontWeight: 500,
            color: "#212529",
            letterSpacing: "0.5px",
          }}
        >
          ACTION
        </Typography>
      </Box>

      {/* Table Rows */}
      {items.length === 0 ? (
        <Typography
          sx={{
            py: 4,
            textAlign: "center",
            color: "#6b7280",
            fontFamily: "Inter, sans-serif",
          }}
        >
          No calendar records found matching "{searchQuery}"
        </Typography>
      ) : (
        items.map((item, index) => {
          const absolutePdfUrl = getAbsolutePdfUrl(item.pdf);
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: { xs: "wrap", sm: "nowrap" },
                gap: { xs: 1.5, sm: 2 },
                borderBottom: "1px solid #212529",
                py: { xs: 2.5, md: 4 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Newsreader, Georgia, serif",
                  fontSize: { xs: "20px", sm: "22px", md: "24px" },
                  fontWeight: 500,
                  color: "#212529",
                }}
              >
                {item.year}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2.5, sm: 4, md: 5 },
                }}
              >
                {/* View Calendar: Opens PDF in browser tab without triggering download */}
                <Typography
                  component="a"
                  href={item.pdf ? absolutePdfUrl : undefined}
                  target={item.pdf ? "_blank" : undefined}
                  rel={item.pdf ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (!item.pdf) {
                      e.preventDefault();
                    }
                  }}
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "15px", sm: "18px", md: "22px" },
                    color: "#003bd1",
                    textDecoration: "underline",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                    "&:hover": { color: "#002387" },
                  }}
                >
                  View Calendar
                </Typography>

                {/* Download: Downloads the PDF file */}
                <Typography
                  component="a"
                  href={item.pdf ? absolutePdfUrl : undefined}
                  onClick={(e) => {
                    if (!item.pdf) {
                      e.preventDefault();
                      return;
                    }
                    handleDownload(e, item.pdf, item.filename);
                  }}
                  download={item.pdf ? item.filename : undefined}
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "15px", sm: "18px", md: "22px" },
                    color: "#003bd1",
                    textDecoration: "underline",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                    "&:hover": { color: "#002387" },
                  }}
                >
                  Download
                </Typography>
              </Box>
            </Box>
          );
        })
      )}
    </Box>
  );

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* ══ HERO BANNER ════════════════════════════════════════ */}
      <Box
        sx={{
          m: {
            lg: "32px 32px 0 32px",
            md: "25px 25px 0 25px",
            sm: "32px 20px 0 20px",
            xs: "0",
          },
          borderRadius: { sm: "20px 20px 0 0", xs: "0" },
          height: { xs: "400px", sm: "480px", md: "560px", lg: "620px" },
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.85) 100%), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: { xs: "24px 20px", sm: "32px 30px", md: "40px 60px", lg: "50px 80px" },
          color: "#FFFFFF",
          overflow: "hidden",
        }}
      >
        {/* Breadcrumb */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: { xs: 1.5, md: 2 } }}>
          <Typography
            component={RouterLink}
            to="/"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "14px",
              fontFamily: "Inter, sans-serif",
              textDecoration: "none",
              "&:hover": { color: "#FFFFFF", textDecoration: "underline" },
            }}
          >
            Home
          </Typography>
          <Typography sx={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>
            →
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "14px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
            }}
          >
            Calendar
          </Typography>
        </Box>

        {/* Title and Intro */}
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
            sx={{
              fontFamily: "Newsreader, Georgia, serif",
              fontSize: { xs: "40px", sm: "52px", md: "60px", lg: "64px" },
              fontWeight: 600,
              lineHeight: 1.1,
              color: "#FFFFFF",
            }}
          >
            Calendar
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "22px" },
              fontWeight: 400,
              lineHeight: 1.5,
              color: "rgba(255, 255, 255, 0.95)",
              maxWidth: { xs: "100%", md: "720px", lg: "820px" },
            }}
          >
            View or download the academic calendars of Ethiraj College for Women
            for the Aided and Self-Supporting streams, for the current academic
            year and the previous three years.
          </Typography>
        </Box>
      </Box>

      {/* ══ MAIN CONTENT WITH SIDEBAR ═══════════════════════════ */}
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          pt: { xs: "36px", sm: "44px", md: "50px", lg: "64px" },
          pb: { xs: "80px", sm: "100px", md: "140px", lg: "160px" },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* ── Left Sidebar: ON THIS PAGE ── */}
          <Grid
            size={{ xs: 12, md: 3.5 }}
            sx={{
              position: { md: "sticky", xs: "static" },
              top: "120px",
              alignSelf: "flex-start",
            }}
          >
            <Box sx={{ pr: { md: 2 } }}>
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#212529",
                  letterSpacing: "0.5px",
                  mb: 2,
                }}
              >
                ON THIS PAGE
              </Typography>

              {/* Search Box */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "30px",
                  border: "1px solid #616161",
                  px: 2,
                  py: 1,
                  height: "46px",
                  mb: 3.5,
                  maxWidth: { xs: "100%", sm: "320px" },
                }}
              >
                <Box
                  component="input"
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    fontSize: "15px",
                    fontFamily: "Inter, sans-serif",
                    color: "#212529",
                    backgroundColor: "transparent",
                    "&::placeholder": { color: "#616161" },
                  }}
                />
                <SearchIcon sx={{ color: "#616161", fontSize: "20px" }} />
              </Box>

              {/* Calendars Navigation Links */}
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#212529",
                  mb: 2,
                }}
              >
                Calendars
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Typography
                  onClick={() => scrollToSection("aided", "aided")}
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: activeTab === "aided" ? 700 : 400,
                    color: activeTab === "aided" ? "#000000" : "#616161",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    "&:hover": { color: "#000000" },
                  }}
                >
                  Aided
                </Typography>

                <Typography
                  onClick={() => scrollToSection("self-supporting", "self-supporting")}
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: activeTab === "self-supporting" ? 700 : 400,
                    color: activeTab === "self-supporting" ? "#000000" : "#616161",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    "&:hover": { color: "#000000" },
                  }}
                >
                  Self-Supporting
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* ── Right Content: Calendars Tables ── */}
          <Grid size={{ xs: 12, md: 8.5 }}>
            {/* Intro text */}
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "15px", sm: "17px", md: "18px" },
                color: "#303030",
                lineHeight: 1.6,
                mb: { xs: "36px", md: "48px" },
              }}
            >
              Select your stream and academic year below to view the calendar online or download a copy.
            </Typography>

            {/* Aided Section */}
            <Box
              id="aided"
              sx={{
                mb: { xs: "56px", md: "84px" },
                scrollMarginTop: { xs: "100px", md: "140px" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Newsreader, Georgia, serif",
                  fontSize: { xs: "28px", sm: "38px", md: "48px", lg: "56px" },
                  fontWeight: 600,
                  color: "#212529",
                  lineHeight: 1.2,
                  mb: { xs: 2.5, md: 4 },
                }}
              >
                Academic Calendar – Aided
              </Typography>
              {renderCalendarTable(filteredAided)}
            </Box>

            {/* Self-Supporting Section */}
            <Box
              id="self-supporting"
              sx={{
                scrollMarginTop: { xs: "100px", md: "140px" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Newsreader, Georgia, serif",
                  fontSize: { xs: "28px", sm: "38px", md: "48px", lg: "56px" },
                  fontWeight: 600,
                  color: "#212529",
                  lineHeight: 1.2,
                  mb: { xs: 2.5, md: 4 },
                }}
              >
                Academic Calendar – Self-Supporting
              </Typography>
              {renderCalendarTable(filteredSelfSupporting)}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
