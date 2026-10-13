
import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CustomBreadCrumbs from "../../Components/CustomBreadCrumbs/CustomBreadCrumbs";
import FilterPanel from "./FilterPanel";
import actions from "../../ReduxStore/actions";

/* ---------------- LEVEL MAP ---------------- */
const normalizeStream = (stream = "") => {
  const value = String(stream).trim().toLowerCase();
  if (value === "aided") return "Aided";
  if (value === "self-supporting" || value === "self supporting" || value === "self-supporting") {
    return "Self-Supporting";
  }
  return stream;
};

const streamPriority = (stream = "") => {
  const normalized = normalizeStream(stream);
  if (normalized === "Aided") return 0;
  if (normalized === "Self-Supporting") return 1;
  return 2;
};

const ProgramList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  /* ---------------- REDUX DATA ---------------- */
  const { getAllAcademicsWithAllDetails } = useSelector(
    (state) => state?.getAllAcademicsWithAllDetails || {}
  );

  /* ---------------- STATE ---------------- */
  const [selectedLevels, setSelectedLevels] = useState(
    location?.state?.level 
      ? [location?.state?.level]
      : ["Undergraduate Programmes", "Postgraduate Programmes", "PhD Programmes"]
  );

  const [streamFilters, setStreamFilters] = useState(() => {
    if (location?.state?.viewMode === "aided") return ["Aided"];
    if (location?.state?.viewMode === "self-supported") return ["Self-Supporting"];
    if (location?.state?.viewMode === "value-added") return ["Aided"];
    return ["Aided", "Self-Supporting"];
  });

  const navigate = useNavigate();

  const [allAcademicDivisions, setAllAcademicDivisions] = useState([]);
  const [selectedAcademicDivisions, setSelectedAcademicDivisions] = useState(
    []
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  /* ---------------- UPDATE FILTERS ON LOCATION CHANGE ---------------- */
  useEffect(() => {
    // Update selectedLevels based on location state
    if (location?.state?.level) {
      setSelectedLevels([location.state.level]);
    } else {
      setSelectedLevels(["Undergraduate Programmes", "Postgraduate Programmes", "PhD Programmes"]);
    }

    // Update streamFilters based on location state
    if (location?.state?.viewMode === "aided") {
      setStreamFilters(["Aided"]);
    } else if (location?.state?.viewMode === "self-supported") {
      setStreamFilters(["Self-Supporting"]);
    } else if (location?.state?.viewMode === "value-added") {
      setStreamFilters(["Aided"]);
    } else {
      setStreamFilters(["Aided", "Self-Supporting"]);
    }
  }, [location.state]);

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    // Always fetch all levels data
    const payload = {
      method: "get",
      apiName: "getAllAcademicsWithAllDetails",
    };
    dispatch(actions.GETALLACADEMICSWITALLDETAILS(payload));
  }, [dispatch]);

  /* ---------------- BUILD ACADEMIC DIVISIONS & LEVELS ---------------- */
  useEffect(() => {
    const data = getAllAcademicsWithAllDetails?.data || [];

    if (!data.length) {
      setAllAcademicDivisions([]);
      setSelectedAcademicDivisions([]);
      return;
    }

    const divisions = data.map((academic) => academic.academic_name);

    setAllAcademicDivisions(divisions); // master list
    setSelectedAcademicDivisions(divisions); // auto-select all
  }, [getAllAcademicsWithAllDetails?.data]);

  /* ---------------- FILTER DATA ---------------- */
  useEffect(() => {
    const data = getAllAcademicsWithAllDetails?.data || [];

    if (!data.length) {
      setFilteredData([]);
      return;
    }

    // Organize by programme level → academic division
    const levelGroups = {
      "Undergraduate": {},
      "Postgraduate": {},
      "PhD": {},
    };

    // Group all programs by level and academic division
    data.forEach((academic) => {
      academic.departments?.forEach((dept) => {
        dept.programs?.forEach((program) => {
          const fundingType = normalizeStream(program.funding_type?.type_name);
          const levelName = program.programme_level?.level_name;

          // Apply stream filter
          if (!streamFilters.includes(fundingType)) return;

          // Apply level filter
          const levelCategory = levelName === "PhD" ? "PhD Programmes" : `${levelName} Programmes`;
          if (!selectedLevels.includes(levelCategory)) {
            return;
          }

          // Apply search filter
          if (searchQuery.trim()) {
            const matchesSearch =
              program.program_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
              dept.department_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
              academic.academic_name?.toLowerCase().includes(searchQuery.toLowerCase());
            if (!matchesSearch) return;
          }

          // Apply academic division filter
          if (selectedAcademicDivisions.length && !selectedAcademicDivisions.includes(academic.academic_name)) {
            return;
          }

          // Add to appropriate level and academic division group
          if (levelName && levelGroups[levelName]) {
            const academicName = academic.academic_name;
            if (!levelGroups[levelName][academicName]) {
              levelGroups[levelName][academicName] = [];
            }
            levelGroups[levelName][academicName].push({
              name: program.program_name,
              programId: program.program_id,
              department: dept.department_name,
              stream: fundingType,
              academicName: academic.academic_name,
            });
          }
        });
      });
    });

    // Convert to filteredData format with divisions and sort
    const result = Object.entries(levelGroups)
      .map(([levelName, divisionGroups]) => {
        const divisions = Object.entries(divisionGroups)
          .map(([divisionName, programs]) => ({
            name: divisionName,
            programs: programs.sort((a, b) => {
              const streamDiff = streamPriority(a.stream) - streamPriority(b.stream);
              if (streamDiff !== 0) return streamDiff;
              return (a.name || "").localeCompare(b.name || "");
            }),
          }))
          .filter((div) => div.programs.length > 0);

        return {
          category: levelName === "PhD" ? "PhD Programmes" : `${levelName} Programmes`,
          levelName,
          divisions,
        };
      })
      .filter((item) => item.divisions.length > 0);

    setFilteredData(result);
  }, [
    getAllAcademicsWithAllDetails?.data,
    selectedLevels,
    streamFilters,
    searchQuery,
    selectedAcademicDivisions,
  ]);

  /* ---------------- HANDLERS ---------------- */
  // No handler needed - levels are controlled via selectedLevels state

  /* ---------------- UI DATA - TITLE & BREADCRUMBS  -------- */
  const getPageTitle = () => {
    if (location?.state?.viewMode === "aided") return "Aided Programs";
    if (location?.state?.viewMode === "self-supported") return "Self-Supported Programs";
    if (location?.state?.viewMode === "value-added") return "Value Added Courses";
    if (selectedLevels.length === 1) return selectedLevels[0];
    return "All Programs";
  };

  const breadcrumbsItems = [
    { name: "Home", to: "/" },
    { name: "Academics & Departments", to: "/academicsanddepartments" },
    { name: getPageTitle() },
  ];

  /* ---------------- RENDER ---------------- */
  return (
    <Box sx={{ p: 3 }}>
      <CustomBreadCrumbs items={breadcrumbsItems} />

      <Typography variant="primaryHeadingText" sx={{ mt: 2 }}>
        Explore Degrees & Certifications
      </Typography>

      <Typography variant="typographyContentHeadingProgram" sx={{ mt: 2 }}>
        {getPageTitle()}
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* -------- FILTER PANEL -------- */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <FilterPanel
            selectedLevels={selectedLevels}
            onSelectedLevelsChange={setSelectedLevels}
            streamFilters={streamFilters}
            onStreamChange={setStreamFilters}
            academicDivisions={selectedAcademicDivisions}
            onAcademicDivisionsChange={setSelectedAcademicDivisions}
            allAcademicDivisions={allAcademicDivisions}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </Grid>

        {/* -------- TABLE -------- */}
        <Grid item size={{ xs: 12, md: 8 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ padding: 0 }}>PROGRAM</TableCell>
                <TableCell sx={{ padding: 0 }}>DEPARTMENT</TableCell>
                <TableCell align="right" sx={{ padding: 0 }}>
                  STREAM
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No programs found
                  </TableCell>
                </TableRow>
              )}

              {filteredData.map((category) => {
                const categoryTitle = category.category.replace(" Programmes", "");
                return (
                <React.Fragment key={category.category}>
                  {/* -------- LEVEL HEADER -------- */}
                  <TableRow>
                    <TableCell 
                      colSpan={3} 
                      sx={{pl:0,pt:2}}
                    >
                      <Typography variant="typographyBodyInterNormal" sx={{color: "black", fontWeight:"600 !important"}}>
                        {categoryTitle}
                      </Typography>
                    </TableCell>
                  </TableRow>

                  {/* -------- DIVISIONS & PROGRAMS -------- */}
                  {category.divisions && category.divisions.map((division) => (
                    <React.Fragment key={`${category.category}-${division.name}`}>
                      {/* Academic Division Header */}
                      <TableRow>
                        <TableCell 
                          colSpan={3}
                          sx={{pl:0, py: 1}}
                        >
                          <Typography 
                            variant="typographyBodyInterNormal" 
                            sx={{color: "#868E96", fontWeight: "600 !important", fontSize: "14px"}}
                          >
                            {division.name}
                          </Typography>
                        </TableCell>
                      </TableRow>

                      {/* Programs within Division */}
                      {division.programs.map((program, idx) => (
                        <TableRow
                          key={idx}
                          sx={{
                            cursor: "pointer",
                            "&:hover": {
                              background: "#000",
                              "& *": { color: "#fff" },
                            },
                          }}
                          onClick={() => {
                            const isPhD = category.levelName === "PhD";
                            if (isPhD) {
                              navigate(`/phdprograms/${program?.programId}`);
                              return;
                            }
                            navigate(
                              `/academics/${program?.department
                                ?.toLowerCase()
                                ?.replace(/\s+/g, "")}/${program?.name
                                ?.toLowerCase()
                                ?.replace(/[.\s]+/g, "")}/${program?.programId}`
                            );
                          }}
                        >
                          <TableCell sx={{pl:0}}>{program.name}</TableCell>
                          <TableCell>{program.department}</TableCell>
                          <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>{program.stream}</TableCell>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </React.Fragment>
                );
              })}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProgramList;
