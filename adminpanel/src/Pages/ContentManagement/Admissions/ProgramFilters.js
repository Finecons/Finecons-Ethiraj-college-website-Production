import React, { useEffect, useMemo, useState } from "react";
import { Box, Grid, MenuItem, Paper, TextField, Typography } from "@mui/material";
import CustomTable from "../../../Components/Table/CustomTable";
import { fetchData } from "../../../helpers";

const ProgramFilters = () => {
  const [programs, setPrograms] = useState([]);
  const [programmeLevel, setProgrammeLevel] = useState("");
  const [fundingType, setFundingType] = useState("");

  useEffect(() => {
    const loadPrograms = async () => {
      const response = await fetchData({}, "get", "getAllPrograms");
      setPrograms(response?.data?.data || []);
    };

    loadPrograms();
  }, []);

  const filteredPrograms = useMemo(() => {
    return programs.filter((item) => {
      const level = String(item?.program_level_name || "").toLowerCase();
      const funding = String(item?.funding_type_name || "").toLowerCase();

      const levelMatch = programmeLevel ? level === programmeLevel.toLowerCase() : true;
      const fundingMatch = fundingType ? funding === fundingType.toLowerCase() : true;

      return levelMatch && fundingMatch;
    });
  }, [fundingType, programmeLevel, programs]);

  const tableData = filteredPrograms.map((item) => ({
    id: item?.program_id,
    program_name: item?.program_name || "-",
    programme_level: item?.program_level_name || "-",
    funding_type: item?.funding_type_name || "-",
  }));

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <Paper elevation={0} sx={{ p: 2, borderRadius: "8px", mb: 1 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Program Category Filters
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <TextField
              select
              size="small"
              label="Programme Level"
              value={programmeLevel}
              onChange={(event) => setProgrammeLevel(event.target.value)}
              sx={{ minWidth: 220 }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Undergraduate">Undergraduate</MenuItem>
              <MenuItem value="Postgraduate">Postgraduate</MenuItem>
            </TextField>

            <TextField
              select
              size="small"
              label="Funding Type"
              value={fundingType}
              onChange={(event) => setFundingType(event.target.value)}
              sx={{ minWidth: 220 }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Aided">Aided</MenuItem>
              <MenuItem value="Self-Supporting">Self-Supporting</MenuItem>
            </TextField>
          </Box>
        </Paper>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <CustomTable
          tableData={tableData}
          title="Programs"
          tableHeadData={["S.No", "Program Name", "Programme Level", "Funding Type"]}
          tableEdit={false}
          tableDelete={false}
          dataCreate={false}
        />
      </Grid>
    </Grid>
  );
};

export default ProgramFilters;
