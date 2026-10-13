import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const OngoingResearchProjects = () => {
  const ongoingResearchProjects = [
    {
      title: "RESEARCH 01",
      facultyName: "Dr. Ananya Sharma, Computer Science, 9876543210",
      publisher: "Student Summer Fellowship",
      date: "2024",
    },
    {
      title: "RESEARCH 01",
      facultyName: "Dr. R. Kumar, Mechanical Engineering, 9123456780",
      publisher: "PhD Fellowship",
      date: "2023",
    },
    {
      title: "RESEARCH 01",
      facultyName: "Dr. Meera Iyer, Biotechnology, 9988776655",
      publisher: "Externally Funded Projects",
      date: "2022",
    },
    {
      title: "RESEARCH 01",
      facultyName: "Dr. S. Banerjee, Physics, 9012345678",
      publisher: "Faculty Research Project",
      date: "2024",
    },
    {
      title: "RESEARCH 01",
      facultyName: "Dr. P. Nair, Mathematics, 9345678123",
      publisher: "Student Summer Fellowship",
      date: "2021",
    },
  ];

  return (
    <div>
      <Grid
        size={{ xs: 12 }}
        sx={{
          my: { xs: "40px", md: "60px", lg: "80px" },
        }}
      >
        <Typography
          variant="headingTextNewsreaderMedium"
          
        >
          Ongoing Research Projects
        </Typography>
        <Table sx={{mt:"24px"}}>
          <TableHead>
            <TableRow>
              {/* <TableCell sx={{ fontWeight: "bold" }}>
                        
                      </TableCell> */}
              <TableCell sx={{ p: 0, borderBottom: "1px solid gray" }}>
                <Typography variant="typographyBodyInterNormalHeadingProgram">
                  RESEARCH
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  p: 0,
                  borderBottom: "1px solid gray",
                  px: "20px",
                }}
              >
                <Typography variant="typographyBodyInterNormalHeadingProgram">
                  FACULTY & DEPARTMENT
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  p: 0,
                  borderBottom: "1px solid gray",
                  px: "20px",
                }}
              >
                <Typography variant="typographyBodyInterNormalHeadingProgram">
                  CATEGORY
                </Typography>
              </TableCell>{" "}
            </TableRow>
          </TableHead>
          <TableBody>
            {ongoingResearchProjects?.map((item, index) => (
              <TableRow key={index} spacing={2}>
                {/* <TableCell sx={{ width: "55%" }}></TableCell> */}
                <TableCell
                  sx={{
                    textAlign: "start",
                    pl: 0,
                    pt: {
                      lg: "53px",
                      md: "40px",
                      sm: "40px",
                      xs: "32px",
                    },
                    pb: {
                      lg: "29px",
                      md: "24px",
                      sm: "24px",
                      xs: "16px",
                    },
                    borderBottom: "1px solid gray",
                    verticalAlign: "top",
                  }}
                >
                  <Typography
                    variant="typographyBodyInterMaintext"
                    sx={{
                      fontFamily: "Newsreader",
                      fontWeight: "500 !important",
                    }}
                  >
                    {item?.title}
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "start",
                    verticalAlign: "top",

                    pl: 0,

                    pt: {
                      lg: "53px",
                      md: "40px",
                      sm: "40px",
                      xs: "32px",
                    },
                    pb: {
                      lg: "29px",
                      md: "24px",
                      sm: "24px",
                      xs: "16px",
                    },
                    borderBottom: "1px solid gray",
                    px: "20px",
                  }}
                >
                  <Box>
                    <Typography variant="typographyBodyInterNormal">
                      {item?.facultyName}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "start",
                    pl: 0,
                    px: "20px",

                    pt: {
                      lg: "53px",
                      md: "40px",
                      sm: "40px",
                      xs: "32px",
                    },
                    pb: {
                      lg: "29px",
                      md: "24px",
                      sm: "24px",
                      xs: "16px",
                    },

                    borderBottom: "1px solid gray",
                    verticalAlign: "top",
                  }}
                >
                  <Typography variant="typographyBodyInterNormal">
                    {item?.publisher}
                  </Typography>
                </TableCell>

                {/* <TableCell>{item.person}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </div>
  );
};

export default OngoingResearchProjects;
