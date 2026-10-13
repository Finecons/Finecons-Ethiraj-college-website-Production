import React from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const rows = [
  {
    topic: "NA",
    name: "Akshal Hepzibah S",
    regDate: "NA",
    supervisor: "Dhanalakshmi . B",
    status: "Ongoing",
    mode: "Full Time",
  },
  {
    topic: "NA",
    name: "Swathya Kamalee",
    regDate: "NA",
    supervisor: "Dhanalakshmi . B",
    status: "Ongoing",
    mode: "Full Time",
  },
  {
    topic: "NA",
    name: "Martina Jennifer N",
    regDate: "NA",
    supervisor: "Dhanalakshmi . B",
    status: "Ongoing",
    mode: "Full Time",
  },
  {
    topic: "NA",
    name: "S. Tejashree",
    regDate: "NA",
    supervisor: "Dr. V. Krishna Kumari",
    status: "Ongoing",
    mode: "Full Time",
  },
  {
    topic: "NA",
    name: "Nanthini Sri. M. I",
    regDate: "NA",
    supervisor: "Dr. V. Krishna Kumari",
    status: "Ongoing",
    mode: "Full Time",
  },
  {
    topic: "NA",
    name: "S.Saikeerthana",
    regDate: "NA",
    supervisor: "Dr. V. Krishna Kumari",
    status: "Ongoing",
    mode: "Part Time",
  },
];

const OngoingResearchProjects = ({ projects = [] }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isTab = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const tableRows =
    projects?.map((item) => ({
      topic: item?.research_topic || "NA",
      name: item?.candidate_name || "NA",
      regDate: item?.reg_date || "NA",
      supervisor: item?.supervisor_name || "NA",
      status: item?.status || "NA",
      mode: item?.mode || "NA",
    })) || [];

  const dataRows = tableRows?.length ? tableRows : rows;

  return (
    <Box
      sx={{
        
        // mb: "60px",
 
      }}
    >
      <Typography
        variant="headingTextNewsreaderMedium"
        sx={{
          // fontWeight: 600,
          mb: 3,
          color: "#222",
        }}
      >
        Ongoing Research Projects
      </Typography>

      {isDesktop ? (
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            backgroundColor: "transparent",
          }}
        >
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  borderBottom: "1px solid #cfcfcf",
                }}
              >
                {[
                  "RESEARCH TOPIC",
                  "NAME OF THE CANDIDATE",
                  "REG DATE",
                  "NAME OF SUPERVISOR",
                  "STATUS",
                  "MODE",
                ].map((header) => (
                  <TableCell
                    key={header}
                    sx={{
                      paddingLeft:0 ,
                      fontWeight: 600,
                      color: "#6b7280",
                      borderBottom: "1px solid #cfcfcf",
                    }}
                  >
                    <Typography
                      variant="typographyBodyInterNormalHeadingProgram"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {header}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {dataRows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <TableCell sx={{ borderBottom: "1px solid #e0e0e0", pl: 0 }}>
                    <Typography variant="typographyBodyInterNormal">
                      {row.topic  || "NA"}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderBottom: "1px solid #e0e0e0" }}>
                    <Typography variant="typographyBodyInterNormal">
                      {row.name || "NA"}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderBottom: "1px solid #e0e0e0" }}>
                    <Typography variant="typographyBodyInterNormal">
                      {row.regDate || "NA" }
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderBottom: "1px solid #e0e0e0" }}>
                    <Typography variant="typographyBodyInterNormal">
                      {row.supervisor || "NA"}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderBottom: "1px solid #e0e0e0" }}>
                    <Typography variant="typographyBodyInterNormal">
                      {row.status || "NA"}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderBottom: "1px solid #e0e0e0" }}>
                    <Typography
                      variant="typographyBodyInterNormal"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.mode || "NA"}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : isTab ? (
        <Box>
          {dataRows.map((row, index) => (
            <Box
              key={index}
              sx={{
                py: { xs: 2, sm: 2.5 },
                borderBottom: "1px solid #d4d4d4",
              }}
            >
              <Typography
                variant="typographyBodyInterNormalHeadingProgram"
                sx={{ color: "#6b7280", mb: 1 }}
              >
                RESEARCH TOPIC
              </Typography>
              <Typography
                variant="typographyBodyInterNormal"
                sx={{ color: "#222", mb: 2, lineHeight: 1.6 }}
              >
                {row.topic}
              </Typography>

              <Grid container rowGap={{ xs: "16px", sm: "32px" }}>
                <Grid size={{ xs: 4 }}>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ fontWeight: "500 !important", mb: 0.5 }}
                  >
                    CANDIDATE
                  </Typography>
                  {/* <Typography variant="typographyBodyInterNormal">
                    {row.name}
                  </Typography> */}
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{
                      textOverflow: "ellipsis",
                      whiteSpace: "normal", // allow line breaks
                    }}
                  >
                    {row?.name?.split(",").map((name, index, arr) => (
                      <div key={index}>
                        {name.trim()}
                        {index !== arr?.length - 1 && ","}
                      </div>
                    ))}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 4 }}>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ fontWeight: "500 !important", mb: 0.5 }}
                  >
                    REG DATE
                  </Typography>
                  <Typography variant="typographyBodyInterNormal">
                    {row.regDate || "NA"}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 4 }}>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ fontWeight: "500 !important", mb: 0.5 }}
                  >
                    NAME OF SUPERVISOR
                  </Typography>
                  {/* <Typography variant="typographyBodyInterNormal">
                    {row.supervisor}
                  </Typography> */}
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{
                      textOverflow: "ellipsis",
                      whiteSpace: "normal", // allow line breaks
                    }}
                  >
                    {row?.supervisor?.split(",").map((name, index, arr) => (
                      <div key={index}>
                        {name.trim() || "NA"}
                        {index !== arr?.length - 1 && ","}
                      </div>
                    ))}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 4 }}>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ fontWeight: "500 !important", mb: 0.5 }}
                  >
                    MODE
                  </Typography>
                  <Typography variant="typographyBodyInterNormal">
                    {row.mode || "NA"}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 4  }}>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ fontWeight: "500 !important", mb: 0.5 }}
                  >
                    STATUS
                  </Typography>
                  <Typography variant="typographyBodyInterNormal">
                    {row.status || "NA"}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
      ) : (
        <Box sx={{ borderTop: "1px solid #d4d4d4" }}>
          {dataRows.map((row, index) => (
            <Box
              key={index}
              sx={{
                py: 2,
                // borderBottom: "1px solid #d4d4d4",
              }}
            >
              <Typography
                variant="typographyBodyInterNormal"
                sx={{ fontWeight: "500 !important", color: "#4b5563", mb: 1 }}
              >
                RESEARCH TOPIC
              </Typography>
              <Typography
                variant="typographyBodyInterNormal"
                sx={{ color: "#222", mb: 2, lineHeight: 1.5 }}
              >
                {row.topic || "NA"}
              </Typography>

              {[
                { label: "CANDIDATE", value: row.name },
                { label: "REG DATE", value: row.regDate },
                { label: "NAME OF SUPERVISOR", value: row.supervisor },
                { label: "MODE", value: row.mode },
                { label: "STATUS", value: row.status },
              ].map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 2,
                    mb: 1.25,
                  }}
                >
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{
                      fontWeight: "500 !important",
                      color: "#4b5563",
                      flex: 1,
                    }}
                  >
                    {item.label || "NA"}
                  </Typography>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ color: "#222", flex: 1, textAlign: "left" }}
                  >
                    {item.value || "NA"}
                  </Typography>
                </Box>
              ))}

              {/* {index !== dataRows.length - 1 && ( */}
                <Divider sx={{ mt: 1.5, borderColor: "#b7bcc4" }} />
              {/* )} */}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default OngoingResearchProjects;
