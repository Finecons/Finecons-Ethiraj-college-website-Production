import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomNextButton from "../../../Components/CustomNextButton/CustomNextButton";

const OtherDepartments = ({ otherRelatedDepartments }) => {
  console.log(otherRelatedDepartments, "otherRelatedDepartments");
  const departments = [
    {
      title: otherRelatedDepartments?.[0]?.department_name,
      detailsLink: {
        path: `/academics/${otherRelatedDepartments?.[0]?.department_name
          ?.toLowerCase()
          ?.replace(/\s+/g, "")}/${otherRelatedDepartments?.[0]?.department_id}`,
      },
      description: `Offers ${
  [
    otherRelatedDepartments?.[0]?.programs?.[0]?.program_name,
    otherRelatedDepartments?.[0]?.programs?.[1]?.program_name,
    otherRelatedDepartments?.[0]?.programs?.[2]?.program_name,
  ]
    .filter(Boolean)
    .join(", ")
} courses.`,
    },
    {
      title: otherRelatedDepartments?.[1]?.department_name,
      detailsLink: {
        path: `/academics/${otherRelatedDepartments?.[1]?.department_name
          ?.toLowerCase()
          ?.replace(/\s+/g, "")}/${otherRelatedDepartments?.[1]?.department_id}`,
      },
      description: `Offers ${
  [
    otherRelatedDepartments?.[1]?.programs?.[0]?.program_name,
    otherRelatedDepartments?.[1]?.programs?.[1]?.program_name,
    otherRelatedDepartments?.[1]?.programs?.[2]?.program_name,
  ]
    .filter(Boolean)
    .join(", ")
} courses.`,
    },
  ];

  console.log(departments,"departments")
  return (
    <Box
      sx={{
        // px: { xs: 2, md: 6 },
        py: 5,
      }}
    >
      {/* Title */}
      <Typography
        variant="headingTextNewsreaderMedium"
        sx={{ mb: { lg: "53px", md: "45px", xs: "20px" } }}
      >
        Other Related Departments
      </Typography>

      {/* Cards */}
      <Grid container spacing={3}>
        {departments.map((dept, index) => (
          <Grid item size={{ xs: 12, md: 6 }} key={index}>
            <Card
              elevation={0}
              sx={{
                p: 2,

                display: "flex",
                flexDirection: "column",
                height: "100%", // ensures equal height

                borderRadius: "5px",
                // border: "1px solid #e5e5e5",
                background: "#F7F7F7",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%", // <-- IMPORTANT
                }}
              >
                <Box>
                  <Typography variant="typographyCardContentHeading" mb={6}>
                    {dept.title}
                  </Typography>

                  {/* <Typography
                    variant="typographyBodyInterMaintext"
                    sx={{
                      fontFamily: "Inter !important",
                      fontWeight: "400 !important",
                      mb: { xs: "40px", md: "32px", lg: "40px" },
                    }}
                  >
                    {dept.description}
                  </Typography> */}
                </Box>

                <CustomNextButton buttonText="Learn More" onClick={dept?.detailsLink?.path} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OtherDepartments;
