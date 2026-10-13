import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Table,
} from "@mui/material";
import FilterPanel from "./FilterPanel";
import CustomBreadCrumbs from "../../Components/CustomBreadCrumbs/CustomBreadCrumbs";

// const programsData = [
//   {
//     category: "Business Studies",
//     programs: [
//       { name: "B.Com General", department: "Commerce", stream: "Aided" },
//       {
//         name: "B.Com Corporate Secretorship",
//         department: "Corporate Secretorship",
//         stream: "Self-supporting",
//       },
//       {
//         name: "B.Com Bank Management",
//         department: "Bank Management",
//         stream: "Self-supporting",
//       },
//       {
//         name: "B.Com Accounting & Finance",
//         department: "Accounting & Finance",
//         stream: "Self-supporting",
//       },
//       {
//         name: "B.Com Honours",
//         department: "Honours",
//         stream: "Self-supporting",
//       },
//     ],
//   },
//   {
//     category: "Management Studies",
//     programs: [
//       { name: "BBA", department: "Management", stream: "Self-supporting" },
//     ],
//   },
//   {
//     category: "Information Technology",
//     programs: [
//       {
//         name: "B.Sc Computer Science",
//         department: "Computer Science",
//         stream: "Self-supporting",
//       },
//       {
//         name: "BCA",
//         department: "Computer Applications",
//         stream: "Self-supporting",
//       },
//       {
//         name: "B.Sc. Maths with Data Science",
//         department: "Maths with Data Science",
//         stream: "Self-supporting",
//       },
//       {
//         name: "B.Sc. Maths with Computer Applications",
//         department: "Maths with Computer Applications",
//         stream: "Self-supporting",
//       },
//     ],
//   },
//   {
//     category: "Sciences",
//     programs: [
//       { name: "B.Sc. Physics", department: "Physics", stream: "Aided" },
//       { name: "B.Sc. Chemistry", department: "Chemistry", stream: "Aided" },
//       { name: "B.Sc. Mathematics", department: "Mathematics", stream: "Aided" },
//       {
//         name: "B.Sc. Plant Biology and Plant Biotechnology",
//         department: "Plant Biotechnology",
//         stream: "Aided",
//       },
//       {
//         name: "B.Sc. Nutrition, Dietetics and FSM",
//         department: "Nutrition, Dietetics and FSM",
//         stream: "Aided",
//       },
//       {
//         name: "B.Sc. Biochemistry",
//         department: "Biochemistry",
//         stream: "Self-supporting",
//       },
//       {
//         name: "B.Sc. Microbiology",
//         department: "Microbiology",
//         stream: "Self-supporting",
//       },
//       {
//         name: "B.Sc. Clinical Nutrition and Dietetics",
//         department: "Clinical Nutrition and Dietetics",
//         stream: "Self-supporting",
//       },
//       {
//         name: "B.Sc. Visual Communication",
//         department: "Visual Communication",
//         stream: "Self-supporting",
//       },
//     ],
//   },
//   {
//     category: "Humanities & Languages",
//     programs: [
//       { name: "B.A. Economics", department: "Economics", stream: "Aided" },
//       {
//         name: "B.A. Business Economics",
//         department: "Economics",
//         stream: "Self-supporting",
//       },
//       {
//         name: "B.A. History",
//         department: "History & TTM",
//         stream: "Self-supporting",
//       },
//       {
//         name: "B.A. Tourism & Travel Management",
//         department: "History & TTM",
//         stream: "Self-supporting",
//       },
//     ],
//   }, 
// ];
const programsData = [
  {
    category: "Business Studies",
    programs: [
      { name: "M.Com General", department: "Commerce", stream: "Aided" },
      { name: "M.Com General", department: "Commerce", stream: "Self-supporting" },
      {
        name: "M.Com Corporate Secretaryship",
        department: "Corporate Secretaryship",
        stream: "Aided",
      },
      {
        name: "M.Com Corporate Secretaryship",
        department: "Corporate Secretaryship",
        stream: "Self-supporting",
      },
      {
        name: "M.Com Bank Management",
        department: "Bank Management",
        stream: "Self-supporting",
      },
    ],
  },
  {
    category: "Management Studies",
    programs: [
      { name: "MBA", department: "Management", stream: "Self-supporting" },
      {
        name: "M.A. Human Resource Management",
        department: "Management",
        stream: "Self-supporting",
      },
    ],
  },
  {
    category: "Information Technology",
    programs: [
      {
        name: "M.Sc. Computer Science",
        department: "Computer Science",
        stream: "Self-supporting",
      },
      {
        name: "MCA",
        department: "Computer Applications",
        stream: "Self-supporting",
      },
    ],
  },
  {
    category: "Sciences",
    programs: [
      { name: "M.Sc. Physics", department: "Physics", stream: "Self-supporting" },
      { name: "M.Sc. Chemistry", department: "Chemistry", stream: "Aided" },
      {
        name: "M.Sc. Plant Biology and Plant Biotechnology",
        department: "Plant Biotechnology",
        stream: "Self-supporting",
      },
      { name: "M.Sc. Zoology", department: "Zoology", stream: "Aided" },
      {
        name: "M.Sc. Plant Biology and Plant Biotechnology",
        department: "Plant Biotechnology",
        stream: "Self-supporting",
      },
      {
        name: "M.Sc. Biochemistry",
        department: "Biochemistry",
        stream: "Self-supporting",
      },
      {
        name: "M.Sc. Microbiology",
        department: "Microbiology",
        stream: "Self-supporting",
      },
      {
        name: "M.Sc. Clinical Nutrition and Dietetics",
        department: "Clinical Nutrition and Dietetics",
        stream: "Self-supporting",
      },
      {
        name: "M.A. Journalism & Communication",
        department: "Media Studies",
        stream: "Self-supporting",
      },
    ],
  },
  {
    category: "Humanities & Languages",
    programs: [
      { name: "M.A. Economics", department: "Economics", stream: "Aided" },
      {
        name: "M.A. Business Economics",
        department: "Economics",
        stream: "Aided",
      },
      { name: "M.A. History", department: "History & TTM", stream: "Aided" },
      { name: "M.A. English", department: "English", stream: "Aided" },
      { name: "M.A. English", department: "English", stream: "Self-supporting" },
    ],
  },
];


const Postgraduate = () => {
  const breadgrumpsItems = [
    { name: "Home", to: "/" },
    { name: "Academics & Departments", to: "/academicsanddepartments" },
    { name: "Postgraduate Programmes" },
  ];
  return (
    <Box sx={{ padding: 3 }}>
      <CustomBreadCrumbs items={breadgrumpsItems} />

      <Typography
        variant="primaryHeadingText"
        sx={{ mt: { sm: "20px", xs: "14px" } }}
      >
        Explore Degrees & Certifications
      </Typography>
      <Typography
        variant="typographyContentHeadingProgram"
        sx={{ mt: { sm: "20px", xs: "14px" } }}
      >
        Undergraduate Programmes
      </Typography>

      <Grid container spacing={4} sx={{ mt: { lg: "94px", md: "74px" } }}>
        <Grid size={{ xs: 12, md: 3 }}>
          <FilterPanel />
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ p: 0 }}>
                  {/* <strong>Program</strong> */}
                  <Typography variant="typographyBodyInterNormalHeadingProgram">
                    PROGRAM
                  </Typography>
                </TableCell>
                <TableCell sx={{ p: 0 }}>
                  {/* <strong>Department</strong> */}
                  <Typography variant="typographyBodyInterNormalHeadingProgram">
                    DEPARTMENT
                  </Typography>
                </TableCell>
                <TableCell sx={{ p: 0,textAlign:"end"}}>
                  <Typography variant="typographyBodyInterNormalHeadingProgram">
                    STREAM
                  </Typography>

                  {/* <strong>Stream</strong> */}
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {programsData.map((category) => (
                <React.Fragment key={category.category}>
                  {/* Category Row */}
                  <TableRow>
                    <TableCell colSpan={3} sx={{pl:0}}> 
                      <Typography
                        variant="typographyBodyInterMaintext"
                        sx={{ fontWeight: "bold", mt: 2, color: "#868E96" }}
                      >
                        {category.category}
                      </Typography>
                    </TableCell>
                  </TableRow>

                  {/* Programs under the category */}
                  {category.programs.map((program) => (
                    <TableRow key={program.name}>
                      <TableCell sx={{textAlign:"start",pl:0}}>
                        <Typography
                          variant="typographyBodyInterMaintext"
                          sx={{
                            fontFamily: "Newsreader",
                            fontWeight: "500 !important",
                          }}
                        >
                          {program.name}{" "}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{textAlign:"start",pl:0}}>
                        <Typography
                          //   variant="typographyBodyInterMaintext"
                          sx={{
                            // fontFamily: "",
                            fontSize: { lg: "18px", xs: "14px" },

                            // fontWeight: "500 !important",
                          }}
                        >
                          {program.department}{" "}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{textAlign:"end",pr:0}}>
                        <Typography
                          //   variant="typographyBodyInterMaintext"
                          sx={{
                            // fontFamily: "",
                            fontSize: { lg: "18px", xs: "14px" },

                            // fontWeight: "500 !important",
                          }}
                        >
                          {program.stream}{" "}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>

      {/* Filter section */}
      {/* <Box sx={{ marginTop: 4 }}>
        <FormControl fullWidth>
          <InputLabel>Filter by Stream</InputLabel>
          <Select label="Filter by Stream" value="" onChange={() => {}}>
            <MenuItem value="Aided">Aided</MenuItem>
            <MenuItem value="Self-supporting">Self-supporting</MenuItem>
          </Select>
        </FormControl>
      </Box> */}
    </Box>
  );
};

export default Postgraduate;
