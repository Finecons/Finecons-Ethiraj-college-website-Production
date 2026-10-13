
import React, { useState } from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  MenuItem,
  Select,
  useMediaQuery,
  FormControl,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import CustomSearchFeildAll from "../../Components/SearchField/CustomSearchFeildAll";
import CloseIcon from "@mui/icons-material/Close";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import SearchWithTransition from "./SearchWithTransition";
// import { Grid IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { motion, AnimatePresence } from "framer-motion";

const FilterPanel = ({
  selectedLevels,
  onSelectedLevelsChange,
  streamFilters,
  onStreamChange,
  academicDivisions,
  onAcademicDivisionsChange,
  allAcademicDivisions,
  searchQuery,
  onSearchChange,
  disableAcademicDivisions = false,
}) => {
  // const streamOptions = ["Aided", "Self-supporting"];
  const streamOptions = ["Aided", "Self-Supporting"];

  const isMobile = useMediaQuery("(max-width:600px)");
  const redBg = "#6B3C58";

  const handleStreamChange = (label) => {
    if (streamFilters.includes(label)) {
      onStreamChange(streamFilters.filter((s) => s !== label));
    } else {
      onStreamChange([...streamFilters, label]);
    }
  };

  const handleAcademicDivisionChange = (label) => {
    if (academicDivisions.includes(label)) {
      onAcademicDivisionsChange(academicDivisions.filter((s) => s !== label));
    } else {
      onAcademicDivisionsChange([...academicDivisions, label]);
    }
  };

  const handleLevelChange = (label) => {
    if (selectedLevels.includes(label)) {
      onSelectedLevelsChange(selectedLevels.filter((l) => l !== label));
    } else {
      onSelectedLevelsChange([...selectedLevels, label]);
    }
  };

  const levelOptions = [
    "Undergraduate Programmes",
    "Postgraduate Programmes",
    "PhD Programmes",
  ];
  const [academicDivisionsOpen, setAcademicDivisionsOpen] = useState(false); // ✅ control open state
  const [levelOfStudyOpen, setLevelOfStudyOpen] = useState(false); // ✅ control open state
  const [streamOpen, setStreamOpen] = useState(false); // ✅ control open state
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Typography
        variant="typographyBodyInterNormalHeadingProgram"
        sx={{ mb: "20px" }}
      >
        FILTER
        <Divider />
      </Typography>
      <Grid
        container
        gap={2}
        sx={{ justifyContent: "start", alignItems: "end", display: "flex" }}
      >
        {/* <Grid size={{ xs: 12 }}></Grid> */}

        <Grid
          size={{ xs: 12 }}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Typography
            variant="typographyBodyInterNormalHeadingProgram"
            // sx={{ mt: "20px" }}
          >
            FILTER BY
          </Typography>

          <Box sx={{ mt: "10px", maxWidth: "230px" }}>
            <CustomSearchFeildAll
              fullWidth
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </Box>
        </Grid>
        {/* ===== Academic Divisions ===== */}
        {allAcademicDivisions?.length > 0 && !disableAcademicDivisions && (
          <>
            <Grid
              size={{ xs: 12, sm: 3 }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Typography
                variant="typographyBodyInterNormalHeadingProgram"
                // sx={{ mt: "32px" }}
              >
                Academic Divisions
              </Typography>

              <FormControl
                size="small"
                sx={{
                  // mt: 1,
                  width: "100%",
                  fontSize: "14px !important",
                }}
              >
                <Select
                  multiple
                  value={academicDivisions}
                  onChange={(e) => onAcademicDivisionsChange(e.target.value)}
                  displayEmpty
                  open={academicDivisionsOpen}
                  onOpen={() => setAcademicDivisionsOpen(true)}
                  onClose={() => setAcademicDivisionsOpen(false)}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        backgroundColor: "#6B3C58",
                        color: "white",
                        // borderRadius: 0,
                        borderRadius: "10px",
                        marginTop: "5px",
                        boxShadow: "none",
                        overflowY: "auto",
                        minWidth: 0,
                        maxWidth: "100%",
                        "& .MuiMenuItem-root": {
                          color: "white",
                        },
                        "& .MuiCheckbox-root": {
                          color: "white !important",
                        },
                      },
                    },
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                  }}
                  sx={{
                    backgroundColor: academicDivisionsOpen
                      ? "#6B3C58"
                      : "white", // ✅ instant color switch
                    color: academicDivisionsOpen ? "white" : "black",
                    borderRadius: "24px",
                    border: "none",

                    "& .MuiSvgIcon-root": {
                      color: academicDivisionsOpen ? "white" : "black",
                    },
                    maxWidth: { sm: "300px", xs: "100%" },
                    fontSize: "14px",
                    width: "100%",
                    transition: "background-color 0.2s ease", // smooth transition

                    // ✅ Remove border on focus
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: academicDivisionsOpen
                        ? "none"
                        : "1px solid #6B3C58",
                    },

                    // ✅ (Optional) remove border in default state too
                    "& .MuiOutlinedInput-notchedOutline": {
                      // border: "none",
                      border: academicDivisionsOpen
                        ? "none"
                        : "1px solid #6B3C58",
                    },
                  }}
                  renderValue={(selected) =>
                    selected.length > 0
                      ? selected.join(", ")
                      : "Select divisions"
                  }
                >
                  {allAcademicDivisions.map((label) => (
                    <MenuItem
                      key={label}
                      value={label}
                      sx={{
                        "&.MuiMenuItem-root.Mui-selected": {
                          backgroundColor: "transparent !important",
                        },

                        "&:hover": {
                          background: "none !important",
                        },
                        background: "none",
                      }}
                    >
                      <Checkbox
                        checked={academicDivisions.includes(label)}
                        onChange={() => handleAcademicDivisionChange(label)}
                        icon={
                          <CheckBoxOutlineBlankIcon
                            sx={{ fontSize: 22, color: "white" }}
                          />
                        }
                        checkedIcon={
                          <Box
                            sx={{
                              width: 18,
                              height: 18,
                              backgroundColor: "black",
                              borderRadius: "2px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <CloseIcon sx={{ fontSize: 16, color: "white" }} />
                          </Box>
                        }
                      />
                      <Typography color="white" sx={{ fontSize: "14px" }}>
                        {label}
                      </Typography>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              size={{ md: 12 }}
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              <Typography
                variant="typographyBodyInterNormalHeadingProgram"
                sx={{ mt: "5px", color: "#212529" }}
              >
                Academic Divisions
              </Typography>
              <FormGroup>
                {allAcademicDivisions.map((label) => (
                  <FormControlLabel
                    key={label}
                    control={
                      <Checkbox
                        checked={academicDivisions.includes(label)}
                        onChange={() => handleAcademicDivisionChange(label)}
                        icon={
                          <CheckBoxOutlineBlankIcon sx={{ fontSize: 22 }} />
                        }
                        checkedIcon={
                          <Box
                            sx={{
                              width: 18,
                              height: 18,
                              backgroundColor: "black",
                              borderRadius: "2px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <CloseIcon sx={{ fontSize: 16, color: "white" }} />
                          </Box>
                        }
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "15px" }}>{label}</Typography>
                    }
                  />
                ))}
              </FormGroup>
              <Divider sx={{ my: 2 }} />
            </Grid>
            {/* )} */}
          </>
        )}

        {/* ===== Level of Study Filter (Desktop) ===== */}
        <Grid
          size={{ md: 12 }}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Typography
            variant="typographyBodyInterNormalHeadingProgram"
            sx={{ mt: "5px", color: "#212529" }}
          >
            Level of Study
          </Typography>
          <FormGroup>
            {levelOptions.map((label) => (
              <FormControlLabel
                key={label}
                control={
                  <Checkbox
                    checked={selectedLevels.includes(label)}
                    onChange={() => handleLevelChange(label)}
                    icon={
                      <CheckBoxOutlineBlankIcon sx={{ fontSize: 22 }} />
                    }
                    checkedIcon={
                      <Box
                        sx={{
                          width: 18,
                          height: 18,
                          backgroundColor: "black",
                          borderRadius: "2px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CloseIcon sx={{ fontSize: 16, color: "white" }} />
                      </Box>
                    }
                  />
                }
                label={
                  <Typography sx={{ fontSize: "15px" }}>{label}</Typography>
                }
              />
            ))}
          </FormGroup>
          <Divider sx={{ my: 2 }} />
        </Grid>

        {/* ===== Level of Study Filter (Mobile/Tablet) ===== */}
        <Grid
          size={{ xs: 12, sm: 3 }}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <Typography variant="typographyBodyInterNormalHeadingProgram">
            Level of Study
          </Typography>

          <FormControl
            size="small"
            sx={{
              width: "100%",
            }}
          >
            <Select
              multiple
              value={selectedLevels}
              onChange={(e) => onSelectedLevelsChange(e.target.value)}
              displayEmpty
              open={levelOfStudyOpen}
              onOpen={() => setLevelOfStudyOpen(true)}
              onClose={() => setLevelOfStudyOpen(false)}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: redBg,
                    borderRadius: "10px",
                    mt: "5px",
                    color: "white",
                    "& .MuiCheckbox-root": { color: "white" },
                  },
                },
              }}
              sx={{
                backgroundColor: levelOfStudyOpen ? "#6B3C58" : "white",
                color: levelOfStudyOpen ? "white" : "black",
                borderRadius: "24px",
                border: "none",
                "& .MuiSvgIcon-root": {
                  color: levelOfStudyOpen ? "white" : "black",
                },
                fontSize: "14px",
                width: "100%",
                transition: "background-color 0.2s ease",

                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: levelOfStudyOpen ? "none" : "1px solid #6B3C58",
                },

                "& .MuiOutlinedInput-notchedOutline": {
                  border: levelOfStudyOpen ? "none" : "1px solid #6B3C58",
                },
              }}
              renderValue={(selected) =>
                selected.length > 0 ? selected.join(", ") : "Select level"
              }
            >
              {levelOptions.map((label) => (
                <MenuItem
                  key={label}
                  value={label}
                  sx={{
                    "&.MuiMenuItem-root.Mui-selected": {
                      backgroundColor: "transparent !important",
                    },
                    "&:hover": {
                      background: "none !important",
                    },
                    background: "none",
                  }}
                >
                  <Checkbox
                    checked={selectedLevels.includes(label)}
                    onChange={() => handleLevelChange(label)}
                    icon={
                      <CheckBoxOutlineBlankIcon
                        sx={{ fontSize: 22, color: "white" }}
                      />
                    }
                    checkedIcon={
                      <Box
                        sx={{
                          width: 18,
                          height: 18,
                          backgroundColor: "black",
                          borderRadius: "2px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CloseIcon sx={{ fontSize: 16, color: "white" }} />
                      </Box>
                    }
                  />
                  <Typography color="white" sx={{ fontSize: "14px" }}>
                    {label}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* ===== Stream Filter ===== */}

        {/* {isMobile ? ( */}
        <Grid
          size={{ xs: 12, sm: 3 }}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <Typography variant="typographyBodyInterNormalHeadingProgram">
            Stream
          </Typography>

          <FormControl
            // fullWidth
            size="small"
            sx={{
              width: {
                xs: "100%", // full width on extra-small screens
                // sm: "auto", // original (auto) width on small and larger screens
              },
            }}
            // sx={{ display: { xs: "block", md: "none" } }}
          >
            <Select
              multiple
              value={streamFilters}
              onChange={(e) => onStreamChange(e.target.value)}
              displayEmpty
              open={streamOpen}
              onOpen={() => setStreamOpen(true)}
              onClose={() => setStreamOpen(false)}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: redBg,
                    borderRadius:'10px',
                    mt:"5px",
                    color: "white",
                    "& .MuiCheckbox-root": { color: "white" },
                  },
                },
              }}
              // sx={{
              //   backgroundColor: redBg,
              //   color: "white",
              //   borderRadius: "24px",

              //   // borderRadius: "8px",
              //   "& .MuiSvgIcon-root": { color: "white" },
              //   fontSize: "14px",
              // }}
              // backgroundColor: redBg,
              // color: "white",
              // borderRadius: "8px",
              // borderRadius: "24px",

              // "& .MuiSvgIcon-root": { color: "white" },

              sx={{
                backgroundColor: streamOpen ? "#6B3C58" : "white", // ✅ instant color switch
                color: streamOpen ? "white" : "black",
                borderRadius: "24px",
                border: "none",
                "& .MuiSvgIcon-root": {
                  color: streamOpen ? "white" : "black",
                },
                // maxWidth: "300px",
                fontSize: "14px",
                width: "100%",
                transition: "background-color 0.2s ease", // smooth transition

                // ✅ Remove border on focus
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: streamOpen ? "none" : "1px solid #6B3C58",
                },

                // ✅ (Optional) remove border in default state too
                "& .MuiOutlinedInput-notchedOutline": {
                  // border: "none",
                  border: streamOpen ? "none" : "1px solid #6B3C58",
                },
              }}
              renderValue={(selected) =>
                selected.length > 0 ? selected.join(", ") : "Select stream"
              }
            >
              {/* {streamOptions.map((label) => (
                <MenuItem
                  key={label}
                  value={
                    <Typography sx={{ fontSize: "19px" }}>{label}</Typography>
                  }
                >
                  <Checkbox
                    sx={{
                      paddingRight: "2px", // 👈 reduces right padding
                      // paddingLeft: "4px", // optional — for symmetry
                    }}
                    checked={streamFilters.includes(label)}
                    onChange={() =>
                      onStreamChange(
                        streamFilters.includes(label)
                          ? streamFilters.filter((item) => item !== label)
                          : [...streamFilters, label]
                      )
                    }
                    icon={
                      <CheckBoxOutlineBlankIcon
                        style={{ fontSize: "16px", color: "white" }}
                      />
                    }
                    checkedIcon={
                      <Box
                        sx={{
                          width: 18,
                          height: 18,
                          backgroundColor: "black",
                          borderRadius: "2px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CloseIcon
                          style={{ fontSize: "16px", color: "white" }}
                        />
                      </Box>
                    }
                  />
                  <Typography color="white" sx={{ fontSize: "14px" }}>
                    {label}
                  </Typography>
                </MenuItem>
              ))} */}
              {streamOptions.map((label) => (
                <MenuItem
                  key={label}
                  value={label}
                  sx={{
                    "&.MuiMenuItem-root.Mui-selected": {
                      backgroundColor: "transparent !important",
                    },

                    "&:hover": {
                      background: "none !important",
                    },
                    background: "none",
                  }}
                >
                  <Checkbox
                    sx={{ paddingRight: "2px" }}
                    checked={streamFilters.includes(label)}
                    onChange={() =>
                      onStreamChange(
                        streamFilters.includes(label)
                          ? streamFilters.filter((item) => item !== label)
                          : [...streamFilters, label]
                      )
                    }
                    icon={
                      <CheckBoxOutlineBlankIcon
                        style={{ fontSize: "16px", color: "white" }}
                      />
                    }
                    checkedIcon={
                      <Box
                        sx={{
                          width: 18,
                          height: 18,
                          backgroundColor: "black",
                          borderRadius: "2px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CloseIcon
                          style={{ fontSize: "16px", color: "white" }}
                        />
                      </Box>
                    }
                  />
                  <Typography color="white" sx={{ fontSize: "14px" }}>
                    {label}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          size={{ md: 12 }}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Typography variant="typographyBodyInterNormalHeadingProgram">
            Stream
          </Typography>
          <FormGroup sx={{ display: { xs: "none", md: "flex" } }}>
            {streamOptions.map((label) => (
              <FormControlLabel
                key={label}
                control={
                  <Checkbox
                    checked={streamFilters.includes(label)}
                    onChange={() => handleStreamChange(label)}
                    icon={<CheckBoxOutlineBlankIcon sx={{ fontSize: 22 }} />}
                    checkedIcon={
                      <Box
                        sx={{
                          width: 18,
                          height: 18,
                          backgroundColor: "black",
                          borderRadius: "2px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CloseIcon sx={{ fontSize: 16, color: "white" }} />
                      </Box>
                    }
                  />
                }
                label={
                  <Typography sx={{ fontSize: "15px" }}>{label}</Typography>
                }
              />
            ))}
          </FormGroup>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 2 }}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {/* <Typography variant="typographyBodyInterNormalHeadingProgram">
          Search
        </Typography> */}
          {/* <SearchWithTransition /> */}
          {/* <Grid item size={{ xs: 12, sm: 2 }}> */}
          {!open && (
            <IconButton onClick={() => setOpen(!open)}>
              <SearchIcon />
            </IconButton>
          )}
          {/* </Grid> */}

          {/* Animated Search Field */}
          {/* <Grid item size={{ xs: 12, sm: 2 }}> */}
          {/* <AnimatePresence> */}
          {open && (
            <Box>
              <CustomSearchFeildAll
                fullWidth
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </Box>
            // </motion.div>
          )}
          {/* </AnimatePresence> */}
        </Grid>
      </Grid>
      {/* //{" "} */}
    </Box>
  );
};

export default FilterPanel;
