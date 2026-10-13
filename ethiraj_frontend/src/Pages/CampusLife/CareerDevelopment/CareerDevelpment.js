import React from "react";
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
import CustomBreadCrumbs from "../../../Components/CustomBreadCrumbs/CustomBreadCrumbs";
import CustomNextArrowIcon from "../../../Components/CustomNextArrowIcon/CustomNextArrowIcon";
import Career from "../../../Assets/Campuslife/Career Development (2).png";
import { useNavigate } from "react-router-dom";

// Static Career Development Data
const CAREER_DEVELOPMENT_DATA = {
  title: "Career Development",
  description: "Through our trained student counsellors we offer career development and guidance opportunities.",
  image_url: Career, // Update with actual image path
  sections: [
    {
      id: 1,
      name: "Centre for Woman Studies",
      link: "/campuslife/careerdevelopment/womencentre"
    },
    {
      id: 2,
      name: "Swayam MOOCs",
      link: "/campuslife/careerdevelopment/swayammoocs"
    },
    {
      id: 3,
      name: "ACCA",
      link: "/campuslife/careerdevelopment/acca"
    },
    {
      id: 4,
      name: "Incubation Centre",
      link: "/campuslife/careerdevelopment/incubationcentre"
    },
    {
      id: 5,
      name: "Placement Cell",
      link: "/campuslife/careerdevelopment/placementcell"
    },
  ],
};

const CareerDevelopment = () => {

  const breadcrumbItems = [
    { name: "Home", to: "/" },
    { name: "Campus Life", to: "/campuslife" },
    { name: "Career development" },
  ];

  const leftSections = CAREER_DEVELOPMENT_DATA.sections.slice(
    0,
    Math.ceil(CAREER_DEVELOPMENT_DATA.sections.length / 2)
  );
  const rightSections = CAREER_DEVELOPMENT_DATA.sections.slice(
    Math.ceil(CAREER_DEVELOPMENT_DATA.sections.length / 2)
  );

const navigate = useNavigate();
  const handleSectionClick = (link) => {
    navigate(link)
  };

  return (
    <Box
      sx={{
        pt: { lg: "41px", md: "30px", sm: "30px", xs: "40px" },
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
        pb: { lg: "91px", md: "80px", sm: "50px", xs: "50px" },
      }}
    >
      <CustomBreadCrumbs items={breadcrumbItems} />

      <Typography variant="primaryHeadingText" sx={{ mt: "10px" }}>
        {CAREER_DEVELOPMENT_DATA.title}
      </Typography>

      <Typography
        variant="navbarMenuItemText"
        sx={{
          mt: { lg: "20px", md: "15px", sm: "20px", xs: "8px" },
          mb: { lg: "60px", md: "50px", xs: "30px" },
          maxWidth: "900px",
        }}
      >
        {CAREER_DEVELOPMENT_DATA.description}
      </Typography>

      <Card sx={{ boxShadow: "none", background: "none" }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item size={{ xs: 12, md: 5 }}>
            <CardMedia
              component="img"
              image={CAREER_DEVELOPMENT_DATA.image_url}
              alt={CAREER_DEVELOPMENT_DATA.title}
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
              <Grid container spacing={{ xs: 0, sm: 4 }}>
                {[leftSections, rightSections].map(
                  (sectionColumn, columnIndex) => (
                    <Grid item size={{ xs: 12, sm: 6 }} key={columnIndex}>
                      <List>
                        {sectionColumn.map((section, idx) => (
                          <React.Fragment key={`${section?.id}-${idx}`}>
                            <ListItem
                              disablePadding
                              sx={{
                                pt: "10px",
                                cursor: "pointer",
                              }}
                              onClick={() => handleSectionClick(section.link)}
                            >
                              <ListItemText
                                primary={
                                  <Typography variant="navbarMenuItemText">
                                    {section.name}
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
                  )
                )}
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  )}

export default CareerDevelopment;
