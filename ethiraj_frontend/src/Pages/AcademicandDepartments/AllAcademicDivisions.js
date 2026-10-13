import React, { useEffect } from "react";
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
import image from "../../Assets/campus-hostel.png";
import CustomBreadCrumbs from "../../Components/CustomBreadCrumbs/CustomBreadCrumbs";
import { ArrowRightAlt } from "@mui/icons-material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { ArrowIcon } from "../CampusLife";
import { useNavigate } from "react-router-dom";
import CustomNextArrowIcon from "../../Components/CustomNextArrowIcon/CustomNextArrowIcon";
import actions from "../../ReduxStore/actions";
import { useDispatch, useSelector } from "react-redux";
import { adminUrl } from "../../constants";

const academicData = [
  {
    title: "Business Studies",
    image: image, // replace with your image path
    departments: [
      { name: "Commerce", detailsLink: "/academics/departmentdetails" },
      {
        name: "Corporate Secretaryship",
        detailsLink: "/academics/departmentdetails",
      },
      { name: "Bank Management", detailsLink: "/academics/departmentdetails" },
      {
        name: "Accounting and Finance",
        detailsLink: "/academics/departmentdetails",
      },
      { name: "Honours", detailsLink: "/academics/departmentdetails" },
    ],
  },
  {
    title: "Management Studies",
    image: image,
    departments: [
      { name: "BBA", detailsLink: "/academics/departmentdetails" },
      { name: "MBA", detailsLink: "/academics/departmentdetails" },

      // "BBA", "MBA"
    ],
  },
  {
    title: "Information Technology",
    image: image,
    departments: [
      { name: "Computer Science", detailsLink: "/academics/departmentdetails" },
      {
        name: "Computer Applications",
        detailsLink: "/academics/departmentdetails",
      },
      {
        name: "Maths with Data Science",
        detailsLink: "/academics/departmentdetails",
      },
      {
        name: "Maths with Computer Applications",
        detailsLink: "/academics/departmentdetails",
      },
    ],
  },
  {
    title: "Humanities & Languages",
    image: image,
    departments: [
      {
        name: "Economics",
        detailsLink: "/academics/departmentdetails",
      },
      {
        name: "History & TTM",
        detailsLink: "/academics/departmentdetails",
      },
      {
        name: "English",
        detailsLink: "/academics/departmentdetails",
      },
      // "Economics", "History & TTM", "English"
    ],
  },
  {
    title: "Science",
    image: image,
    departments: [
      {
        name: "Physics",
        detailsLink: "/academics/departmentdetails",
      },
      {
        name: "Chemistry",
        detailsLink: "/academics/departmentdetails",
      },
      {
        name: "Mathematics",
        detailsLink: "/academics/departmentdetails",
      },
      {
        name: "Plant Biology and Plant Biotechnology",
        detailsLink: "/academics/departmentdetails",
      },
      {
        name: "Zoology",
        detailsLink: "/academics/departmentdetails",
      },
      {
        name: "Nutrition, Dietetics and FSM",
        detailsLink: "/academics/departmentdetails",
      },
      {
        name: "Biochemistry",
        detailsLink: "/academics/departmentdetails",
      },
      {
        name: "Microbiology",
        detailsLink: "/academics/departmentdetails",
      },
      {
        name: "Clinical Nutrition and Dietetics",
        detailsLink: "/academics/departmentdetails",
      },
      {
        name: "Visual Communication",
        detailsLink: "/academics/departmentdetails",
      },
    ],
  },
];

const AllAcademicDivisions = () => {
  const breadgrumpsItems = [
    { name: "Home", to: "/" },
    { name: "Academic & Departments", to: "/academicsanddepartments" },
    { name: "Academic Divisions" },
  ];
  const dispatch = useDispatch();

  const { getAllAcademics } = useSelector((state) => state?.getAllAcademics);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: "getAllAcademics",
      };

      // setLoading(true); // Set loading to true when the request starts
      await dispatch(actions.GETALLACADEMICS(data1));
      // setLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
  }, [dispatch]);

  // const academicsDatas = getAllAcademics?.data?.map((data) => ({
  //   title: data?.academic_name,
  //   image: `${data?.image_url}`,
  //   departments: data?.departments?.map((department) => ({
  //     name: department?.department_name,

  //     // details link with path + state

  //     detailsLink: {
  //       path:
  //        if (
  //       (data?.academic?.academic_name !== "Arts & Humanities" &&
  //         data?.department_name === "Geography") ||
  //       data?.academic?.academic_name !== "Foundation Courses"
  //     ) {
  //       `/academics/${department?.department_name
  //         ?.toLowerCase()
  //         ?.replace(/\s+/g, "")}/${department?.department_id}`,
  //     },
  //   }else {
  //     `/academics/${data?.academic?.academic_name?.toLowerCase()?.?.replace(/\s+/g, "")}/${department?.department_name
  //         ?.toLowerCase()
  //         ?.replace(/\s+/g, "")}/${department?.department_id}`,

  //   }
  //   })),
  // }));

  const academicsDatas = getAllAcademics?.data?.map((data) => ({
    title: data?.academic_name,
    image: `${data?.image_url}`,
    // departments: data?.departments?.map((department) => {
    //   const isSpecialCase =
    //     (data?.academic_name !== "Arts & Humanities" &&
    //       department?.department_name === "Geography") ||
    //     data?.academic_name !== "Foundation Courses";

    //   const path = isSpecialCase
    //     ? `/academics/${department?.department_name
    //         ?.toLowerCase()
    //         ?.replace(/\s+/g, "")}/${department?.department_id}`
    //     : `/academic/${data?.academic_name
    //         ?.toLowerCase()
    //         ?.replace(/\s+/g, "")}/${department?.department_name
    //         ?.toLowerCase()
    //         ?.replace(/\s+/g, "")}/${department?.department_id}`;
    //   return {
    //     name: department?.department_name,
    //     detailsLink: {
    //       path,
    //     },
    //   };
    // }),
    departments: data?.departments?.map((department) => {
      const shouldUseAcademicPath =
        (data?.academic_name === "Arts & Humanities" &&
          department?.department_name === "Geography") ||
        data?.academic_name === "Foundation Courses";

      const path = shouldUseAcademicPath
        ? `/academic/${data?.academic_name
            ?.toLowerCase()
            ?.replace(/\s+/g, "")}/${department?.department_name
            ?.toLowerCase()
            ?.replace(/\s+/g, "")}/${department?.department_id}`
        : `/academics/${department?.department_name
            ?.toLowerCase()
            ?.replace(/\s+/g, "")}/${department?.department_id}`;
      return {
        name: department?.department_name,
        detailsLink: {
          path,
        },
      };
    }),
  }));
  console.log(academicsDatas, "path12212121222");

  const navigate = useNavigate();
  return (
    <Box
      sx={{
        py: { lg: "41px", md: "30px", sm: "30px", xs: "40px" },
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
      }}
    >
      <CustomBreadCrumbs items={breadgrumpsItems} />

      {/* <Typography variant="h4" gutterBottom>
        Academic Divisions
      </Typography> */}
      <Typography variant="primaryHeadingText" sx={{ mt: "10px" }}>
        Academic Divisions
      </Typography>
      <Typography
        variant="navbarMenuItemText"
        sx={{
          mt: { lg: "20px", md: "15px", sm: "20px", xs: "8px" },
          mb: { lg: "60px", md: "50px", xs: "30px" },
        }}
      >
        At our college, learning extends across six dynamic academic divisions.
        Each branch is built to inspire discovery, foster innovation, and
        prepare students for meaningful careers. Explore your pathway below.
      </Typography>

      <Grid container spacing={4}>
        {academicsDatas?.map((division, index) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={index}>
            <Typography
              variant="typographyHeadingAcademicDivisions"
              sx={{
                mb: { lg: "48px", md: "30px", xs: "20px" },
                // fontSize: "28px !important",
                // fontWeight: "500 !important",
                color: { xs: "#6B3C58", md: "black" },
              }}
            >
              {division.title}
            </Typography>
            <Card sx={{ boxShadow: "none", background: "none" }}>
              <CardMedia
                component="img"
                height="180"
                image={division.image}
                alt={division.title}
                // sx={{ boxShadow: "none" }}
                sx={{
                  width: "100%",
                  // aspectRatio: "492 / 331.94",
                  objectFit: "cover",
                  boxShadow: "none",
                  height: {
                    lg: "331px",
                    md: "250px",
                    sm: "209px",
                    xs: "250px",
                  },
                }}
              />
              {division?.departments?.length > 0 && (
                <CardContent sx={{ boxShadow: "none", px: 0 }}>
                  <Typography
                    variant="navbarMenuItemText"
                    sx={{ color: "gray" }}
                  >
                    Departments
                  </Typography>
                  <List>
                    {division.departments.map((dept, idx) => (
                      <React.Fragment key={idx}>
                        <ListItem
                          disablePadding
                          sx={{
                            pt: "10px",
                            "&:hover": {
                              background: "black",
                              color: "white",
                            },
                          }}
                        >
                          <ListItemText
                            primary={
                              <Typography variant="navbarMenuItemText">
                                {dept?.name}
                              </Typography>
                            }
                            onClick={() => {
                              navigate(dept?.detailsLink?.path, {
                                state: dept?.detailsLink?.state,
                              });
                            }}
                          />
                          {/* <ChevronRightIcon /> */}
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
                </CardContent>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllAcademicDivisions;
