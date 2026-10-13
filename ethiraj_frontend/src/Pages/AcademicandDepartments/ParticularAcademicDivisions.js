import React, { useEffect, useMemo } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CustomBreadCrumbs from "../../Components/CustomBreadCrumbs/CustomBreadCrumbs";
import CustomNextArrowIcon from "../../Components/CustomNextArrowIcon/CustomNextArrowIcon";
import actions from "../../ReduxStore/actions";

const slugify = (value = "") =>
  value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getDepartmentPath = (academicName, department) => {
  const departmentSlug = department?.department_name
    ?.toLowerCase()
    ?.replace(/\s+/g, "");

  const shouldUseAcademicPath =
    (academicName === "Arts & Humanities" &&
      department?.department_name === "Geography") ||
    academicName === "Foundation Courses";

  if (shouldUseAcademicPath) {
    return `/academic/${academicName
      ?.toLowerCase()
      ?.replace(/\s+/g, "")}/${departmentSlug}/${department?.department_id}`;
  }

  return `/academics/${departmentSlug}/${department?.department_id}`;
};

const ParticularAcademicDivisions = () => {
  const { academicSlug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getAllAcademics } = useSelector((state) => state?.getAllAcademics);

  useEffect(() => {
    if (getAllAcademics?.data?.length) {
      return;
    }

    const fetchData = async () => {
      const payload = {
        data: {},
        method: "get",
        apiName: "getAllAcademics",
      };

      await dispatch(actions.GETALLACADEMICS(payload));
    };

    fetchData();
  }, [dispatch, getAllAcademics?.data?.length]);

  const selectedAcademic = useMemo(() => {
    const allAcademics = getAllAcademics?.data || [];
    return allAcademics.find(
      (academic) => slugify(academic?.academic_name) === academicSlug,
    );
  }, [getAllAcademics?.data, academicSlug]);

  const departments = selectedAcademic?.departments || [];
  const mid = Math.ceil(departments.length / 2);
  const leftDepartments = departments.slice(0, mid);
  const rightDepartments = departments.slice(mid);

  const breadgrumpsItems = [
    { name: "Home", to: "/" },
    { name: "Academic & Departments", to: "/academicsanddepartments" },
    { name: "Academic Divisions", to: "/academics/allacademicdivisions" },
    { name: selectedAcademic?.academic_name || "Academic Division" },
  ];

  return (
    <Box
      sx={{
        pt: { lg: "41px", md: "30px", sm: "30px", xs: "40px" },
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
        pb: { lg: "91px", md: "80px", sm: "50px", xs: "50px" },
      }}
    >
      <CustomBreadCrumbs items={breadgrumpsItems} />

      <Typography variant="primaryHeadingText" sx={{ mt: "10px" }}>
        Academic Divisions
      </Typography>

      <Typography
        variant="navbarMenuItemText"
        sx={{
          mt: { lg: "20px", md: "15px", sm: "20px", xs: "8px" },
          mb: { lg: "60px", md: "50px", xs: "30px" },
          maxWidth: "900px",
        }}
      >
        At our college, learning extends across dynamic academic divisions. Each
        branch is built to inspire discovery, foster innovation, and prepare
        students for meaningful careers.
      </Typography>

      {!selectedAcademic && (
        <Typography variant="navbarMenuItemText" sx={{ color: "#6c757d" }}>
          Academic division not found.
        </Typography>
      )}

      {selectedAcademic && (
        <Card sx={{ boxShadow: "none", background: "none" }}>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            <Grid item size={{ xs: 12 }}>
              <Typography variant="typographyContentHeadingProgram" sx={{ color: "#6B3C58" }}>
                {selectedAcademic?.academic_name}
              </Typography>
            </Grid>
            <Grid item size={{ xs: 12, md: 5 }}>
              <CardMedia
                component="img"
                image={selectedAcademic?.image_url}
                alt={selectedAcademic?.academic_name}
                sx={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                  height: {
                    lg: "280px",
                    md: "250px",
                    sm: "260px",
                    xs: "220px",
                  },
                }}
              />
            </Grid>

            <Grid
              item
              size={{ xs: 12, md: 7 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
              }}
            >
              <CardContent sx={{ boxShadow: "none", px: 0, py: 0 }}>
                <Typography variant="navbarMenuItemText" sx={{ color: "gray" }}>
                  Departments
                </Typography>

                <Grid container spacing={{ xs: 0, sm: 4 }}>
                  {[leftDepartments, rightDepartments].map(
                    (deptColumn, columnIndex) => (
                      <Grid item size={{ xs: 12, sm: 6 }} key={columnIndex}>
                        <List>
                          {deptColumn.map((department, idx) => (
                            <React.Fragment
                              key={`${department?.department_id}-${idx}`}
                            >
                              <ListItem
                                disablePadding
                                sx={{
                                  pt: "10px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  navigate(
                                    getDepartmentPath(
                                      selectedAcademic?.academic_name,
                                      department,
                                    ),
                                  );
                                }}
                              >
                                <ListItemText
                                  primary={
                                    <Typography variant="navbarMenuItemText">
                                      {department?.department_name}
                                    </Typography>
                                  }
                                />
                                <CustomNextArrowIcon
                                  style={{
                                    fontSize: "20px",
                                    color: "#212529",
                                    ml: "5px",
                                  }}
                                />
                              </ListItem>
                              <Divider />
                            </React.Fragment>
                          ))}
                        </List>
                      </Grid>
                    ),
                  )}
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      )}
    </Box>
  );
};

export default ParticularAcademicDivisions;
