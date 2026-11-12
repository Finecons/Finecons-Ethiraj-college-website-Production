import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FiPlus, FiEdit2, FiTrash2, FiEye, FiDownload } from "react-icons/fi";
import { MdDragIndicator } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import actions from "../../../ReduxStore/actions";
import NewsletterYearModal from "./Modal/NewsletterYearModal";
import NewsletterIssueModal from "./Modal/NewsletterIssueModal";

// Default seed data matching current website
const defaultYearsData = [
  {
    id: "year-2026-2027",
    year: "2026 – 2027",
    issues: [
      { id: "iss-1", month: "October 2026", title: "October 2026 Edition", pdfUrl: "#", fileName: "October-2026-Newsletter.pdf" },
      { id: "iss-2", month: "September 2026", title: "September 2026 Edition", pdfUrl: "#", fileName: "September-2026-Newsletter.pdf" },
      { id: "iss-3", month: "August 2026", title: "August 2026 Edition", pdfUrl: "#", fileName: "August-2026-Newsletter.pdf" },
      { id: "iss-4", month: "July 2026", title: "July 2026 Edition", pdfUrl: "#", fileName: "July-2026-Newsletter.pdf" },
      { id: "iss-5", month: "June 2026", title: "June 2026 Edition", pdfUrl: "#", fileName: "June-2026-Newsletter.pdf" },
    ],
  },
  {
    id: "year-2025-2026",
    year: "2025 – 2026",
    issues: [
      { id: "iss-6", month: "May 2026", title: "May 2026 Edition", pdfUrl: "#", fileName: "May-2026-Newsletter.pdf" },
      { id: "iss-7", month: "April 2026", title: "April 2026 Edition", pdfUrl: "#", fileName: "April-2026-Newsletter.pdf" },
      { id: "iss-8", month: "March 2026", title: "March 2026 Edition", pdfUrl: "#", fileName: "March-2026-Newsletter.pdf" },
      { id: "iss-9", month: "February 2026", title: "February 2026 Edition", pdfUrl: "#", fileName: "February-2026-Newsletter.pdf" },
      { id: "iss-10", month: "January 2026", title: "January 2026 Edition", pdfUrl: "#", fileName: "January-2026-Newsletter.pdf" },
      { id: "iss-11", month: "December 2025", title: "December 2025 Edition", pdfUrl: "#", fileName: "December-2025-Newsletter.pdf" },
    ],
  },
  {
    id: "year-2024-2025",
    year: "2024 – 2025",
    issues: [
      { id: "iss-12", month: "May 2025", title: "May 2025 Edition", pdfUrl: "#", fileName: "May-2025-Newsletter.pdf" },
      { id: "iss-13", month: "April 2025", title: "April 2025 Edition", pdfUrl: "#", fileName: "April-2025-Newsletter.pdf" },
      { id: "iss-14", month: "March 2025", title: "March 2025 Edition", pdfUrl: "#", fileName: "March-2025-Newsletter.pdf" },
      { id: "iss-15", month: "February 2025", title: "February 2025 Edition", pdfUrl: "#", fileName: "February-2025-Newsletter.pdf" },
      { id: "iss-16", month: "January 2025", title: "January 2025 Edition", pdfUrl: "#", fileName: "January-2025-Newsletter.pdf" },
    ],
  },
  {
    id: "year-2023-2024",
    year: "2023 – 2024",
    issues: [
      { id: "iss-17", month: "May 2024", title: "May 2024 Edition", pdfUrl: "#", fileName: "May-2024-Newsletter.pdf" },
      { id: "iss-18", month: "April 2024", title: "April 2024 Edition", pdfUrl: "#", fileName: "April-2024-Newsletter.pdf" },
      { id: "iss-19", month: "March 2024", title: "March 2024 Edition", pdfUrl: "#", fileName: "March-2024-Newsletter.pdf" },
      { id: "iss-20", month: "February 2024", title: "February 2024 Edition", pdfUrl: "#", fileName: "February-2024-Newsletter.pdf" },
      { id: "iss-21", month: "January 2024", title: "January 2024 Edition", pdfUrl: "#", fileName: "January-2024-Newsletter.pdf" },
    ],
  },
];

const NewsletterAdmin = () => {
  const dispatch = useDispatch();

  const [years, setYears] = useState([]);
  const [sectionId, setSectionId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedYear, setExpandedYear] = useState("year-2026-2027");

  // Year Modal State
  const [yearModalOpen, setYearModalOpen] = useState(false);
  const [selectedYearData, setSelectedYearData] = useState(null);

  // Issue Modal State
  const [issueModalOpen, setIssueModalOpen] = useState(false);
  const [targetYearForIssue, setTargetYearForIssue] = useState(null);
  const [selectedIssueData, setSelectedIssueData] = useState(null);

  // Delete Confirmation State
  const [deleteConfirm, setDeleteConfirm] = useState({
    open: false,
    type: "", // 'year' or 'issue'
    yearId: null,
    issueId: null,
    title: "",
  });

  // Fetch Section Data from Backend
  const fetchNewsletterSection = async () => {
    try {
      setLoading(true);
      let section = null;

      // 1. Try Redux action
      try {
        const dataPayload = {
          data: {
            page_name: "student unions",
            section_name: "newsletter section",
          },
          method: "post",
          apiName: "getAllCampusLifeSectionsBySectionName",
        };
        const response = await dispatch(
          actions.GETALLCAMPUSLIFESECTIONSBYSECTIONNAME(dataPayload)
        );
        section = response?.payload?.data?.[0];
      } catch (e) {
        console.warn("Redux fetch warning:", e);
      }

      // 2. Fallback to direct local backend if Redux returned empty
      if (!section) {
        try {
          const localRes = await axios.post(
            "http://localhost:5005/api/v1/getAllCampusLifeSectionsBySectionName",
            {
              page_name: "student unions",
              section_name: "newsletter section",
            }
          );
          section = localRes?.data?.data?.[0];
        } catch (localErr) {
          console.warn("Local fetch warning:", localErr);
        }
      }

      if (section && section.section_id) {
        setSectionId(section.section_id);
        const parsedYears =
          typeof section.additional_data === "string"
            ? JSON.parse(section.additional_data)?.years
            : section.additional_data?.years;
        if (parsedYears && parsedYears.length > 0) {
          setYears(parsedYears);
          setExpandedYear(parsedYears[0].id);
        } else {
          setYears(defaultYearsData);
          setExpandedYear(defaultYearsData[0].id);
        }
      } else {
        setYears(defaultYearsData);
        setExpandedYear(defaultYearsData[0].id);
      }
    } catch (err) {
      console.error("Error loading newsletter section:", err);
      setYears(defaultYearsData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsletterSection();
  }, [dispatch]);

  // Save updated years data to backend
  const saveToBackend = async (updatedYears) => {
    const token = localStorage.getItem("token");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    try {
      if (sectionId) {
        let saved = false;
        try {
          const updatePayload = {
            data: {
              page_name: "student unions",
              section_name: "newsletter section",
              heading: "Newsletters",
              content: "Monthly campus newsletters archive",
              additional_data: { years: updatedYears },
            },
            method: "put",
            apiName: `updateCampusLifeSection/${sectionId}`,
          };
          const res = await dispatch(actions.UPDATECAMPUSLIFESECTION(updatePayload));
          if (res?.payload?.message) saved = true;
        } catch (e) {}

        // Fallback to local server if needed
        if (!saved) {
          try {
            await axios.put(
              `http://localhost:5005/api/v1/updateCampusLifeSection/${sectionId}`,
              {
                page_name: "student unions",
                section_name: "newsletter section",
                heading: "Newsletters",
                content: "Monthly campus newsletters archive",
                additional_data: { years: updatedYears },
              },
              { headers }
            );
            saved = true;
          } catch (e) {
            console.error("Local update error:", e);
          }
        }

        if (saved) {
          toast.success("Newsletter saved successfully!");
        } else {
          toast.error("Failed to update newsletter section.");
        }
      } else {
        let newId = null;
        try {
          const createPayload = {
            data: {
              page_name: "student unions",
              section_name: "newsletter section",
              heading: "Newsletters",
              content: "Monthly campus newsletters archive",
              additional_data: { years: updatedYears },
            },
            method: "post",
            apiName: "addCampusLifeSection",
          };
          const res = await dispatch(actions.ADDCAMPUSLIFESECTION(createPayload));
          newId = res?.payload?.data?.[0]?.section_id;
        } catch (e) {}

        if (!newId) {
          try {
            const createRes = await axios.post(
              "http://localhost:5005/api/v1/addCampusLifeSection",
              {
                page_name: "student unions",
                section_name: "newsletter section",
                heading: "Newsletters",
                content: "Monthly campus newsletters archive",
                additional_data: { years: updatedYears },
              },
              { headers }
            );
            newId = createRes?.data?.data?.[0]?.section_id;
          } catch (e) {
            console.error("Local create error:", e);
          }
        }

        if (newId) {
          setSectionId(newId);
          toast.success("Newsletter section created and saved successfully!");
        } else {
          toast.error("Failed to create newsletter section.");
        }
      }
    } catch (error) {
      console.error("Save error:", error);
      toast.error("Failed to save newsletter data to server.");
    }
  };

  // --- Year Handlers ---
  const handleOpenAddYear = () => {
    setSelectedYearData(null);
    setYearModalOpen(true);
  };

  const handleOpenEditYear = (yearItem, e) => {
    e.stopPropagation();
    setSelectedYearData(yearItem);
    setYearModalOpen(true);
  };

  const handleSaveYear = async (yearData) => {
    let updated;
    const existingIndex = years.findIndex((y) => y.id === yearData.id);
    if (existingIndex > -1) {
      updated = [...years];
      updated[existingIndex] = {
        ...updated[existingIndex],
        year: yearData.year,
      };
    } else {
      updated = [
        {
          id: yearData.id,
          year: yearData.year,
          issues: [],
        },
        ...years,
      ];
      setExpandedYear(yearData.id);
    }
    setYears(updated);
    await saveToBackend(updated);
  };

  const handleDeleteYearClick = (yearItem, e) => {
    e.stopPropagation();
    setDeleteConfirm({
      open: true,
      type: "year",
      yearId: yearItem.id,
      issueId: null,
      title: `Academic Year "${yearItem.year}" and all its issues`,
    });
  };

  // --- Issue Handlers ---
  const handleOpenAddIssue = (yearItem, e) => {
    e.stopPropagation();
    setTargetYearForIssue(yearItem);
    setSelectedIssueData(null);
    setIssueModalOpen(true);
  };

  const handleOpenEditIssue = (yearItem, issueItem) => {
    setTargetYearForIssue(yearItem);
    setSelectedIssueData(issueItem);
    setIssueModalOpen(true);
  };

  const handleSaveIssue = async (issueData) => {
    if (!targetYearForIssue) return;
    const updated = years.map((y) => {
      if (y.id !== targetYearForIssue.id) return y;
      const issues = y.issues || [];
      const existingIdx = issues.findIndex((i) => i.id === issueData.id);
      let updatedIssues;
      if (existingIdx > -1) {
        updatedIssues = [...issues];
        updatedIssues[existingIdx] = issueData;
      } else {
        updatedIssues = [issueData, ...issues];
      }
      return { ...y, issues: updatedIssues };
    });

    setYears(updated);
    await saveToBackend(updated);
  };

  const handleDeleteIssueClick = (yearId, issueItem) => {
    setDeleteConfirm({
      open: true,
      type: "issue",
      yearId: yearId,
      issueId: issueItem.id,
      title: `Newsletter Issue "${issueItem.month}"`,
    });
  };

  // Confirm Delete Action
  const handleConfirmDelete = async () => {
    let updated;
    if (deleteConfirm.type === "year") {
      updated = years.filter((y) => y.id !== deleteConfirm.yearId);
    } else if (deleteConfirm.type === "issue") {
      updated = years.map((y) => {
        if (y.id !== deleteConfirm.yearId) return y;
        return {
          ...y,
          issues: (y.issues || []).filter((i) => i.id !== deleteConfirm.issueId),
        };
      });
    }
    setYears(updated);
    setDeleteConfirm({ open: false, type: "", yearId: null, issueId: null, title: "" });
    await saveToBackend(updated);
  };

  const handleMoveIssue = async (yearId, fromIdx, toIdx) => {
    if (fromIdx === toIdx || fromIdx < 0 || toIdx < 0) return;
    const targetYear = years.find((y) => y.id === yearId);
    if (!targetYear || toIdx >= (targetYear.issues?.length || 0)) return;

    const updated = years.map((y) => {
      if (y.id !== yearId) return y;
      const issuesCopy = [...(y.issues || [])];
      const [moved] = issuesCopy.splice(fromIdx, 1);
      issuesCopy.splice(toIdx, 0, moved);
      return { ...y, issues: issuesCopy };
    });

    setYears(updated);
    await saveToBackend(updated);
    toast.success("Newsletter issue order updated successfully!");
  };

  const handleMoveYear = async (fromIdx, toIdx) => {
    if (fromIdx === toIdx || fromIdx < 0 || toIdx < 0 || toIdx >= years.length) return;
    const updated = [...years];
    const [moved] = updated.splice(fromIdx, 1);
    updated.splice(toIdx, 0, moved);
    setYears(updated);
    await saveToBackend(updated);
    toast.success("Academic year order updated successfully!");
  };

  return (
    <Box sx={{ p: { xs: 1, md: 3 } }}>
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Top Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 3,
          backgroundColor: "#FFFFFF",
          p: 2.5,
          borderRadius: "12px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              color: "#252525",
              fontSize: { xs: "18px", md: "22px" },
            }}
          >
            Newsletter Management
          </Typography>
          <Typography variant="body2" sx={{ color: "#777", mt: 0.5 }}>
            Add and manage Academic Years, upload monthly issues with PDFs dynamically.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<FiPlus />}
          onClick={handleOpenAddYear}
          sx={{
            backgroundColor: "#6B3C58",
            color: "#FFF",
            textTransform: "none",
            borderRadius: "24px",
            px: 3,
            py: 1,
            fontWeight: 600,
            fontSize: "14px",
            "&:hover": { backgroundColor: "#4A154B" },
          }}
        >
          Add Academic Year
        </Button>
      </Box>

      {/* Loading state */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
          <CircularProgress sx={{ color: "#6B3C58" }} />
        </Box>
      ) : years.length === 0 ? (
        <Paper
          sx={{
            p: 6,
            textAlign: "center",
            borderRadius: "12px",
            border: "1px dashed #DDD",
          }}
        >
          <Typography variant="h6" sx={{ color: "#666", mb: 1 }}>
            No Academic Years Added Yet
          </Typography>
          <Typography variant="body2" sx={{ color: "#999", mb: 3 }}>
            Click "Add Academic Year" to create your first newsletter archive.
          </Typography>
          <Button
            variant="contained"
            startIcon={<FiPlus />}
            onClick={handleOpenAddYear}
            sx={{
              backgroundColor: "#6B3C58",
              textTransform: "none",
              borderRadius: "20px",
            }}
          >
            Add Academic Year
          </Button>
        </Paper>
      ) : (
        /* Academic Years Accordion List */
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {years.map((yearItem, yearIdx) => {
            const isExpanded = expandedYear === yearItem.id;
            const issuesCount = yearItem.issues?.length || 0;

            return (
              <Accordion
                key={yearItem.id}
                expanded={isExpanded}
                onChange={() => setExpandedYear(isExpanded ? null : yearItem.id)}
                sx={{
                  borderRadius: "12px !important",
                  border: "1px solid #ECECEC",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                  "&:before": { display: "none" },
                  overflow: "hidden",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: isExpanded ? "#FAF6F8" : "#FFFFFF",
                    px: { xs: 2, md: 3 },
                    py: 1,
                    "& .MuiAccordionSummary-content": {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 1.5,
                      my: 1,
                    },
                  }}
                >
                  {/* Left: Year Name & Issue Count */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "15px", md: "17px" },
                        color: "#252525",
                      }}
                    >
                      {yearItem.year}
                    </Typography>
                    <Chip
                      label={`${issuesCount} ${issuesCount === 1 ? "Issue" : "Issues"}`}
                      size="small"
                      sx={{
                        backgroundColor: "#6B3C58",
                        color: "#FFF",
                        fontWeight: 600,
                        fontSize: "12px",
                      }}
                    />
                  </Box>

                  {/* Right: Year Action Buttons */}
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IconButton
                      size="small"
                      disabled={yearIdx === 0}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMoveYear(yearIdx, yearIdx - 1);
                      }}
                      title="Move Academic Year Up"
                      sx={{
                        color: "#6B3C58",
                        border: "1px solid #DDD",
                        "&:disabled": { color: "#CCC" },
                        "&:hover": { backgroundColor: "#F3EBF0" },
                      }}
                    >
                      <IoIosArrowUp size={14} />
                    </IconButton>

                    <IconButton
                      size="small"
                      disabled={yearIdx === years.length - 1}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMoveYear(yearIdx, yearIdx + 1);
                      }}
                      title="Move Academic Year Down"
                      sx={{
                        color: "#6B3C58",
                        border: "1px solid #DDD",
                        "&:disabled": { color: "#CCC" },
                        "&:hover": { backgroundColor: "#F3EBF0" },
                      }}
                    >
                      <IoIosArrowDown size={14} />
                    </IconButton>

                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<FiPlus />}
                      onClick={(e) => handleOpenAddIssue(yearItem, e)}
                      sx={{
                        borderColor: "#6B3C58",
                        color: "#6B3C58",
                        textTransform: "none",
                        borderRadius: "16px",
                        fontSize: "12px",
                        fontWeight: 600,
                        px: 1.5,
                        "&:hover": {
                          backgroundColor: "#6B3C58",
                          color: "#FFF",
                          borderColor: "#6B3C58",
                        },
                      }}
                    >
                      Add Issue
                    </Button>

                    <IconButton
                      size="small"
                      onClick={(e) => handleOpenEditYear(yearItem, e)}
                      title="Edit Year"
                      sx={{
                        color: "#555",
                        border: "1px solid #DDD",
                        "&:hover": { backgroundColor: "#F0F0F0" },
                      }}
                    >
                      <FiEdit2 size={14} />
                    </IconButton>

                    <IconButton
                      size="small"
                      onClick={(e) => handleDeleteYearClick(yearItem, e)}
                      title="Delete Year"
                      sx={{
                        color: "#D32F2F",
                        border: "1px solid #FFCDD2",
                        "&:hover": { backgroundColor: "#FFEBEE" },
                      }}
                    >
                      <FiTrash2 size={14} />
                    </IconButton>
                  </Box>
                </AccordionSummary>

                <AccordionDetails sx={{ p: { xs: 1.5, md: 3 }, backgroundColor: "#FFFFFF" }}>
                  {issuesCount === 0 ? (
                    <Box
                      sx={{
                        p: 3,
                        textAlign: "center",
                        backgroundColor: "#FAF9F6",
                        borderRadius: "8px",
                      }}
                    >
                      <Typography variant="body2" sx={{ color: "#777", mb: 1.5 }}>
                        No newsletter issues added for <strong>{yearItem.year}</strong> yet.
                      </Typography>
                      <Button
                        size="small"
                        variant="contained"
                        startIcon={<FiPlus />}
                        onClick={(e) => handleOpenAddIssue(yearItem, e)}
                        sx={{
                          backgroundColor: "#6B3C58",
                          textTransform: "none",
                          borderRadius: "16px",
                          fontSize: "13px",
                        }}
                      >
                        Add First Issue
                      </Button>
                    </Box>
                  ) : (
                    <TableContainer
                      component={Paper}
                      variant="outlined"
                      sx={{ borderRadius: "8px", overflowX: "auto" }}
                    >
                      <Table size="small">
                        <TableHead sx={{ backgroundColor: "#FAF9F6" }}>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 700, width: "90px", textAlign: "center" }}>Order</TableCell>
                            <TableCell sx={{ fontWeight: 700, width: "50px" }}>#</TableCell>
                            <TableCell sx={{ fontWeight: 700 }}>Month / Duration</TableCell>
                            <TableCell sx={{ fontWeight: 700 }}>Issue Title</TableCell>
                            <TableCell sx={{ fontWeight: 700 }}>PDF Attachment</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 700, width: "120px" }}>
                              Actions
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {yearItem.issues.map((issue, idx) => (
                            <TableRow
                              key={issue.id || idx}
                              hover
                              draggable
                              onDragStart={(e) => {
                                e.dataTransfer.setData(
                                  "text/plain",
                                  JSON.stringify({ yearId: yearItem.id, idx })
                                );
                                e.dataTransfer.effectAllowed = "move";
                              }}
                              onDragOver={(e) => {
                                e.preventDefault();
                                e.dataTransfer.dropEffect = "move";
                              }}
                              onDrop={(e) => {
                                e.preventDefault();
                                try {
                                  const data = JSON.parse(
                                    e.dataTransfer.getData("text/plain")
                                  );
                                  if (data.yearId === yearItem.id && data.idx !== idx) {
                                    handleMoveIssue(yearItem.id, data.idx, idx);
                                  }
                                } catch (err) {}
                              }}
                              sx={{
                                "&:last-child td, &:last-child th": { border: 0 },
                                transition: "all 0.15s ease",
                              }}
                            >
                              <TableCell sx={{ textAlign: "center", py: 0.5 }}>
                                <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.5 }}>
                                  <Box
                                    sx={{
                                      cursor: "grab",
                                      display: "flex",
                                      alignItems: "center",
                                      color: "#6B3C58",
                                      p: 0.4,
                                      borderRadius: "4px",
                                      backgroundColor: "#F3EBF0",
                                      "&:active": { cursor: "grabbing" },
                                    }}
                                    title="Drag to reorder issue"
                                  >
                                    <MdDragIndicator size={16} />
                                  </Box>
                                  <IconButton
                                    size="small"
                                    disabled={idx === 0}
                                    onClick={() => handleMoveIssue(yearItem.id, idx, idx - 1)}
                                    title="Move issue up"
                                    sx={{ p: 0.3, color: "#6B3C58", "&:disabled": { color: "#CCC" } }}
                                  >
                                    <IoIosArrowUp size={14} />
                                  </IconButton>
                                  <IconButton
                                    size="small"
                                    disabled={idx === yearItem.issues.length - 1}
                                    onClick={() => handleMoveIssue(yearItem.id, idx, idx + 1)}
                                    title="Move issue down"
                                    sx={{ p: 0.3, color: "#6B3C58", "&:disabled": { color: "#CCC" } }}
                                  >
                                    <IoIosArrowDown size={14} />
                                  </IconButton>
                                </Box>
                              </TableCell>
                              <TableCell>{idx + 1}</TableCell>
                              <TableCell sx={{ fontWeight: 600, color: "#252525" }}>
                                {issue.month}
                              </TableCell>
                              <TableCell sx={{ color: "#555" }}>
                                {issue.title || `${issue.month} Newsletter`}
                              </TableCell>
                              <TableCell>
                                {issue.pdfUrl && issue.pdfUrl !== "#" ? (
                                  <Button
                                    size="small"
                                    startIcon={<FiEye />}
                                    onClick={() => window.open(issue.pdfUrl, "_blank")}
                                    sx={{
                                      textTransform: "none",
                                      color: "#6B3C58",
                                      fontWeight: 600,
                                      fontSize: "12px",
                                      p: 0,
                                      "&:hover": { textDecoration: "underline" },
                                    }}
                                  >
                                    {issue.fileName || "View PDF"}
                                  </Button>
                                ) : (
                                  <Typography variant="caption" sx={{ color: "#999" }}>
                                    No PDF uploaded
                                  </Typography>
                                )}
                              </TableCell>
                              <TableCell align="center">
                                <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                                  <IconButton
                                    size="small"
                                    onClick={() => handleOpenEditIssue(yearItem, issue)}
                                    title="Edit Issue"
                                    sx={{
                                      color: "#555",
                                      "&:hover": { color: "#6B3C58" },
                                    }}
                                  >
                                    <FiEdit2 size={15} />
                                  </IconButton>
                                  <IconButton
                                    size="small"
                                    onClick={() => handleDeleteIssueClick(yearItem.id, issue)}
                                    title="Delete Issue"
                                    sx={{
                                      color: "#D32F2F",
                                      "&:hover": { backgroundColor: "#FFEBEE" },
                                    }}
                                  >
                                    <FiTrash2 size={15} />
                                  </IconButton>
                                </Box>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      )}

      {/* Year Modal */}
      <NewsletterYearModal
        open={yearModalOpen}
        onClose={() => setYearModalOpen(false)}
        onSubmit={handleSaveYear}
        initialData={selectedYearData}
      />

      {/* Issue Modal */}
      <NewsletterIssueModal
        open={issueModalOpen}
        onClose={() => setIssueModalOpen(false)}
        onSubmit={handleSaveIssue}
        year={targetYearForIssue?.year}
        initialData={selectedIssueData}
      />

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteConfirm.open}
        onClose={() =>
          setDeleteConfirm({ open: false, type: "", yearId: null, issueId: null, title: "" })
        }
        maxWidth="xs"
        fullWidth
        PaperProps={{ sx: { borderRadius: "12px", p: 1 } }}
      >
        <DialogTitle sx={{ fontWeight: 700, fontSize: "17px" }}>
          Confirm Deletion
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: "#555" }}>
            Are you sure you want to permanently delete{" "}
            <strong>{deleteConfirm.title}</strong>? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={() =>
              setDeleteConfirm({ open: false, type: "", yearId: null, issueId: null, title: "" })
            }
            sx={{ textTransform: "none", color: "#555" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleConfirmDelete}
            sx={{ textTransform: "none", borderRadius: "18px", px: 2.5 }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NewsletterAdmin;
