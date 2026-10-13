import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
} from "@mui/material";

const EligibilityCriteriaTab = ({ data, title, loading, error }) => {
  if (loading) {
    return (
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          pt: { lg: "52px", md: "40px", xs: "20px", sm: "30px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "300px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          pt: { lg: "52px", md: "40px", xs: "20px", sm: "30px" },
        }}
      >
        <Typography variant="headingTextNewsreaderMedium" sx={{ color: "#d32f2f" }}>
          {title}
        </Typography>
        <Typography variant="secondaryTextInterRegular" sx={{ color: "#d32f2f", mt: 2 }}>
          Error loading programs. Please try again later.
        </Typography>
      </Box>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
          pt: { lg: "52px", md: "40px", xs: "20px", sm: "30px" },
        }}
      >
        <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 2, color: "#2f2f3a" }}>
          {title}
        </Typography>
        <Typography variant="secondaryTextInterRegular" sx={{ color: "#999999" }}>
          No programs available for this category.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        // mt: 4,
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
        pt: { lg: "52px", md: "40px", xs: "20px", sm: "30px" },
      }}
    >
      <Typography
        variant="headingTextNewsreaderMedium"
        sx={{ mb: { xs: "20px", md: "20px" }, color: "#2f2f3a" }}
      >
        {title}
      </Typography>

      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        {data.map((row, idx) => (
          <Box key={idx} sx={{ pb: 2.5, mb: 2.5, borderBottom: "1px solid #b6bcc6" }}>
            <Typography
              variant="secondaryTextInterRegular"
              sx={{ color: "#8b94a1", mb: 1 }}
            >
              Name of the Programme
            </Typography>
            <Typography variant="secondaryTextInterRegular" sx={{ color: "#1f1f1f", mb: 2.5 }}>
              {row.program_name || row.programme}
            </Typography>

            <Typography
              variant="secondaryTextInterRegular"
              sx={{ color: "#8b94a1", mb: 1 }}
            >
              Eligibility Criteria
            </Typography>
            <Typography variant="secondaryTextInterRegular" sx={{ color: "#1f1f1f" }}>
              {row.additional_data?.adminsistraion_and_eligibility?.elgibility_criteria ||
                row.criteria ||
                "Eligibility criteria will be updated soon."}
            </Typography>
          </Box>
        ))}
      </Box>

      <TableContainer sx={{ boxShadow: "none", display: { xs: "none", sm: "block" } }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 500,
                  color: "#999999",
                  width: "50%",
                  padding: "12px 0",
                  textTransform: "none",
                }}
              >
                <Typography variant="secondaryTextInterRegular" sx={{ color: "#999999" }}>
                  Name of the Programme
                </Typography>
              </TableCell>
              <TableCell sx={{ padding: "12px 0", textTransform: "none" }}>
                <Typography variant="secondaryTextInterRegular" sx={{ color: "#999999" }}>
                  Eligibility Criteria
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow key={idx} sx={{ borderBottom: "1px solid black" }}>
                <TableCell sx={{ padding: "14px 0" }}>
                  <Typography variant="secondaryTextInterRegular">
                    {row.program_name || row.programme}
                  </Typography>
                </TableCell>
                <TableCell sx={{ padding: "14px 0", verticalAlign: "top" }}>
                  <Typography variant="secondaryTextInterRegular">
                    {row.additional_data?.adminsistraion_and_eligibility?.elgibility_criteria ||
                      row.criteria ||
                      "Eligibility criteria will be updated soon."}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EligibilityCriteriaTab;
