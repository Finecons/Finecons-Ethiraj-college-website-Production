import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  InputBase,
  IconButton,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import PaymentIcon from "@mui/icons-material/Payment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

import { useNavigate } from "react-router-dom";
import searchService from "../../services/searchService";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "16px",
    maxWidth: "760px",
    width: "100%",
    margin: "16px",
    maxHeight: "85vh",
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  "& .MuiBackdrop-root": {
    backdropFilter: "blur(4px)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
}));

const SearchHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "16px 20px",
  borderBottom: "1px solid #ECECEC",
  backgroundColor: "#fff",
}));

const CategoryChip = styled(Chip)(({ theme, active }) => ({
  borderRadius: "20px",
  fontSize: "13px",
  fontWeight: active ? "600" : "400",
  backgroundColor: active ? "#6B3C58" : "#F4F5F7",
  color: active ? "#FFFFFF" : "#495057",
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: active ? "#563046" : "#E9ECEF",
  },
}));

const getTypeIcon = (type) => {
  switch (type) {
    case "Department":
      return <AccountBalanceIcon sx={{ color: "#6B3C58", fontSize: 20 }} />;
    case "Programme":
    case "Program":
      return <SchoolIcon sx={{ color: "#473F93", fontSize: 20 }} />;
    case "Faculty":
      return <PersonIcon sx={{ color: "#2E7D32", fontSize: 20 }} />;
    case "News":
    case "Event":
      return <ArticleIcon sx={{ color: "#ED6C02", fontSize: 20 }} />;
    case "External":
      return <OpenInNewIcon sx={{ color: "#0288D1", fontSize: 18 }} />;
    default:
      return <WebAssetIcon sx={{ color: "#555", fontSize: 20 }} />;
  }
};

export const openSiteSearch = (initialQuery = "") => {
  window.dispatchEvent(
    new CustomEvent("open-ethiraj-search", { detail: { query: initialQuery } })
  );
};

export default function SiteSearchModal({ open: propsOpen, onClose: propsOnClose }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = typeof propsOpen !== "undefined";
  const open = isControlled ? propsOpen : internalOpen;

  const handleCloseModal = useCallback(() => {
    if (propsOnClose) {
      propsOnClose();
    }
    if (!isControlled) {
      setInternalOpen(false);
    }
  }, [isControlled, propsOnClose]);

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchResults, setSearchResults] = useState({
    results: [],
    grouped: {},
    totalCount: 0,
    categories: ["All"],
  });

  const navigate = useNavigate();
  const inputRef = useRef(null);
  const listContainerRef = useRef(null);

  // Global event and shortcut listener
  useEffect(() => {
    const handleGlobalOpen = (e) => {
      if (!isControlled) {
        setInternalOpen(true);
      }
      if (e.detail?.query) {
        setQuery(e.detail.query);
      }
    };

    const handleKeyDownGlobal = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isControlled) {
          if (propsOpen) {
            handleCloseModal();
          } else if (propsOnClose) {
            // Can't toggle if controlled without toggle prop, dispatch custom event
            window.dispatchEvent(new CustomEvent("open-ethiraj-search"));
          }
        } else {
          setInternalOpen((prev) => !prev);
        }
      }
    };

    window.addEventListener("open-ethiraj-search", handleGlobalOpen);
    window.addEventListener("keydown", handleKeyDownGlobal);

    return () => {
      window.removeEventListener("open-ethiraj-search", handleGlobalOpen);
      window.removeEventListener("keydown", handleKeyDownGlobal);
    };
  }, [handleCloseModal, isControlled, propsOpen, propsOnClose]);

  // 200ms debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 200);
    return () => clearTimeout(timer);
  }, [query]);

  // Execute Search
  useEffect(() => {
    if (debouncedQuery.trim().length >= 2) {
      const results = searchService.search(debouncedQuery, selectedCategory);
      setSearchResults(results);
      setSelectedIndex(0);

      // Track in Google Analytics 4 if gtag is present
      if (typeof window.gtag === "function") {
        window.gtag("event", "search", {
          search_term: debouncedQuery,
          results_count: results.totalCount,
        });
      }
    } else {
      setSearchResults({
        results: [],
        grouped: {},
        totalCount: 0,
        categories: ["All"],
      });
      setSelectedIndex(0);
    }
  }, [debouncedQuery, selectedCategory]);

  // Reset state when opening
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    } else {
      setQuery("");
      setDebouncedQuery("");
      setSelectedCategory("All");
      setSelectedIndex(0);
    }
  }, [open]);

  // Flattened results for keyboard navigation
  const flatResults = searchResults.results || [];

  // Scroll active item into view
  useEffect(() => {
    if (listContainerRef.current) {
      const activeEl = listContainerRef.current.querySelector(
        `[data-search-index="${selectedIndex}"]`
      );
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selectedIndex]);

  // Navigation handler
  const handleItemClick = useCallback(
    (item) => {
      if (!item) return;

      handleCloseModal();

      if (item.url) {
        window.open(item.url, "_blank", "noopener,noreferrer");
      } else if (item.path) {
        navigate(item.path, {
          state: item.scrollTo ? { scrollTo: item.scrollTo } : null,
        });
      }
    },
    [navigate, handleCloseModal]
  );

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < flatResults.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : flatResults.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (flatResults.length > 0 && flatResults[selectedIndex]) {
        handleItemClick(flatResults[selectedIndex]);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      handleCloseModal();
    }
  };

  const isQueryTooShort = query.trim().length > 0 && query.trim().length < 2;
  const isNoResults =
    debouncedQuery.trim().length >= 2 && searchResults.totalCount === 0;

  return (
    <StyledDialog open={open} onClose={handleCloseModal} onKeyDown={handleKeyDown}>
      {/* Search Input Bar */}
      <SearchHeader>
        <SearchIcon sx={{ color: "#6B3C58", fontSize: 26, mr: 1.5 }} />
        <InputBase
          inputRef={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search pages, departments, programmes, faculty, hostel, COE..."
          fullWidth
          sx={{
            fontSize: { xs: "15px", sm: "17px" },
            fontFamily: "Inter, sans-serif",
            color: "#212529",
          }}
          inputProps={{
            "aria-label": "Search Ethiraj website",
          }}
        />
        {query && (
          <IconButton
            size="small"
            onClick={() => setQuery("")}
            sx={{ mr: 0.5 }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        )}
        <Button
          onClick={handleCloseModal}
          sx={{
            minWidth: "auto",
            textTransform: "none",
            fontSize: "13px",
            color: "#6c757d",
            px: 1,
            py: 0.5,
            border: "1px solid #dee2e6",
            borderRadius: "6px",
            "&:hover": { backgroundColor: "#f8f9fa" },
          }}
        >
          ESC
        </Button>
      </SearchHeader>

      {/* Category Pills (Visible when results exist) */}
      {searchResults.totalCount > 0 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 2.5,
            py: 1.2,
            backgroundColor: "#FAFAFA",
            borderBottom: "1px solid #ECECEC",
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {["All", "Pages", "Departments", "Programmes", "Faculty", "News & Events"].map(
            (cat) => (
              <CategoryChip
                key={cat}
                label={cat}
                size="small"
                active={selectedCategory === cat ? 1 : 0}
                onClick={() => setSelectedCategory(cat)}
              />
            )
          )}
        </Box>
      )}

      {/* Dialog Body */}
      <DialogContent
        ref={listContainerRef}
        sx={{
          p: 0,
          flex: 1,
          overflowY: "auto",
          minHeight: "260px",
          maxHeight: "65vh",
          backgroundColor: "#fff",
        }}
      >
        {/* Initial Empty State (User hasn't typed yet) */}
        {!query && (
          <Box sx={{ p: 4, textAlign: "center" }}>
            <Typography
              variant="body1"
              sx={{ color: "#6c757d", fontWeight: 500, mb: 1 }}
            >
              Start typing to search Ethiraj College
            </Typography>
            <Typography variant="body2" sx={{ color: "#adb5bd", mb: 3 }}>
              Find academic programs, departments, faculty, exam schedules, and services.
            </Typography>

            <Typography
              variant="caption"
              sx={{
                color: "#6B3C58",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                display: "block",
                mb: 1.5,
              }}
            >
              Popular Searches
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                justifyContent: "center",
              }}
            >
              {[
                "Admissions",
                "Pay Fees",
                "Controller of Examinations",
                "Academic Calendar",
                "B.Com",
                "Hostel",
                "Placement Cell",
                "IQAC",
                "Scholarships",
              ].map((term) => (
                <Chip
                  key={term}
                  label={term}
                  size="small"
                  onClick={() => setQuery(term)}
                  sx={{
                    cursor: "pointer",
                    fontSize: "12px",
                    backgroundColor: "#F4F5F7",
                    "&:hover": { backgroundColor: "#E9ECEF", color: "#6B3C58" },
                  }}
                />
              ))}
            </Box>
          </Box>
        )}

        {/* Short query prompt (< 2 chars) */}
        {isQueryTooShort && (
          <Box sx={{ p: 4, textAlign: "center", color: "#6c757d" }}>
            <Typography variant="body2">
              Please enter at least 2 characters to search...
            </Typography>
          </Box>
        )}

        {/* No Results Fallback Screen */}
        {isNoResults && (
          <Box sx={{ p: 4, textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{ color: "#343A40", fontWeight: 600, mb: 1 }}
            >
              No results for "{debouncedQuery}"
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#6c757d", maxWidth: "460px", mx: "auto", mb: 3 }}
            >
              We couldn't find matches for your search. Try checking the spelling
              or explore one of the essential links below:
            </Typography>

            <GridDirectLinks onClose={handleCloseModal} navigate={navigate} />
          </Box>
        )}

        {/* Grouped Search Results */}
        {searchResults.totalCount > 0 && (
          <List sx={{ p: 0 }}>
            {Object.entries(searchResults.grouped).map(
              ([categoryName, items]) => {
                if (!items || items.length === 0) return null;

                return (
                  <Box key={categoryName}>
                    {/* Category Section Header */}
                    <Box
                      sx={{
                        px: 2.5,
                        py: 1,
                        backgroundColor: "#F9FAFB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #F0F0F0",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                          color: "#6B3C58",
                          letterSpacing: "0.5px",
                          textTransform: "uppercase",
                        }}
                      >
                        {categoryName}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#8D959D", fontWeight: 500 }}
                      >
                        {items.length} {items.length === 1 ? "result" : "results"}
                      </Typography>
                    </Box>

                    {/* Result items in category */}
                    {items.map((item) => {
                      const itemIndex = flatResults.findIndex(
                        (r) => r.id === item.id
                      );
                      const isSelected = itemIndex === selectedIndex;

                      return (
                        <ListItem
                          key={item.id}
                          disablePadding
                          data-search-index={itemIndex}
                        >
                          <ListItemButton
                            onClick={() => handleItemClick(item)}
                            selected={isSelected}
                            sx={{
                              px: 2.5,
                              py: 1.5,
                              borderBottom: "1px solid #F4F5F7",
                              "&.Mui-selected": {
                                backgroundColor: "rgba(107, 60, 88, 0.08)",
                              },
                              "&:hover": {
                                backgroundColor: "rgba(107, 60, 88, 0.05)",
                              },
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              {getTypeIcon(item.type)}
                            </ListItemIcon>

                            <ListItemText
                              primary={
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    flexWrap: "wrap",
                                  }}
                                >
                                  <Typography
                                    variant="body1"
                                    sx={{
                                      fontWeight: isSelected ? 600 : 500,
                                      color: "#212529",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {item.title}
                                  </Typography>

                                  {item.section && (
                                    <Chip
                                      label={item.section}
                                      size="small"
                                      sx={{
                                        height: 20,
                                        fontSize: "11px",
                                        backgroundColor: "#E9ECEF",
                                        color: "#495057",
                                      }}
                                    />
                                  )}

                                  {item.type === "External" && (
                                    <Chip
                                      label="External Portal"
                                      size="small"
                                      sx={{
                                        height: 20,
                                        fontSize: "11px",
                                        backgroundColor: "#E1F5FE",
                                        color: "#0288D1",
                                      }}
                                    />
                                  )}
                                </Box>
                              }
                              secondary={
                                item.description ? (
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      color: "#6c757d",
                                      fontSize: "13px",
                                      mt: 0.3,
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      whiteSpace: "nowrap",
                                      maxWidth: { xs: "280px", sm: "520px" },
                                    }}
                                  >
                                    {item.description}
                                  </Typography>
                                ) : null
                              }
                            />

                            <ArrowForwardIosIcon
                              sx={{
                                fontSize: 13,
                                color: isSelected ? "#6B3C58" : "#CED4DA",
                                ml: 1,
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </Box>
                );
              }
            )}
          </List>
        )}
      </DialogContent>

      {/* Footer Instructions */}
      <Box
        sx={{
          px: 2.5,
          py: 1,
          backgroundColor: "#F9FAFB",
          borderTop: "1px solid #ECECEC",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#8D959D",
          fontSize: "12px",
        }}
      >
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          <span>
            <kbd style={{ backgroundColor: "#E9ECEF", padding: "2px 5px", borderRadius: 3 }}>↑</kbd>{" "}
            <kbd style={{ backgroundColor: "#E9ECEF", padding: "2px 5px", borderRadius: 3 }}>↓</kbd> to navigate
          </span>
          <span>
            <kbd style={{ backgroundColor: "#E9ECEF", padding: "2px 5px", borderRadius: 3 }}>↵</kbd> to select
          </span>
          <span>
            <kbd style={{ backgroundColor: "#E9ECEF", padding: "2px 5px", borderRadius: 3 }}>esc</kbd> to close
          </span>
        </Box>
        <Typography variant="caption" sx={{ color: "#8D959D" }}>
          {searchResults.totalCount > 0
            ? `${searchResults.totalCount} matches found`
            : "Search Ethiraj Portal"}
        </Typography>
      </Box>
    </StyledDialog>
  );
}

/**
 * Direct links fallback component shown on zero search results
 */
function GridDirectLinks({ onClose, navigate }) {
  const links = [
    {
      title: "Admissions",
      desc: "Apply online & eligibility criteria",
      icon: <SchoolIcon sx={{ color: "#6B3C58" }} />,
      onClick: () => {
        onClose();
        navigate("/admissions");
      },
    },
    {
      title: "Pay Fees Online",
      desc: "Fee payment portal for students",
      icon: <PaymentIcon sx={{ color: "#473F93" }} />,
      onClick: () => {
        onClose();
        window.open("https://ethiraj.ibossems.com/", "_blank", "noopener,noreferrer");
      },
    },
    {
      title: "Controller of Examinations",
      desc: "Exam timetable, results & COE cell",
      icon: <AssignmentTurnedInIcon sx={{ color: "#ED6C02" }} />,
      onClick: () => {
        onClose();
        navigate("/academics/controllerofexaminations");
      },
    },
    {
      title: "Contact & About Us",
      desc: "Campus info, email & contact details",
      icon: <ContactPhoneIcon sx={{ color: "#2E7D32" }} />,
      onClick: () => {
        onClose();
        navigate("/aboutus");
      },
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        gap: 2,
        maxWidth: "600px",
        mx: "auto",
        textAlign: "left",
      }}
    >
      {links.map((link) => (
        <Box
          key={link.title}
          onClick={link.onClick}
          sx={{
            p: 2,
            border: "1px solid #E9ECEF",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            cursor: "pointer",
            transition: "all 0.2s ease",
            "&:hover": {
              borderColor: "#6B3C58",
              backgroundColor: "#FDF8FA",
              transform: "translateY(-2px)",
            },
          }}
        >
          <Box
            sx={{
              p: 1,
              borderRadius: "8px",
              backgroundColor: "#F4F5F7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {link.icon}
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 600, color: "#212529" }}>
              {link.title}
            </Typography>
            <Typography variant="caption" sx={{ color: "#6c757d", display: "block" }}>
              {link.desc}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
