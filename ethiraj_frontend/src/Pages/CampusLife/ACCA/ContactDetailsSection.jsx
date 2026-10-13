import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const ContactDetailsSection = ({ contactPersons }) => {
  return (
    <Box sx={{ 
              px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
        py: { xs: "40px", sm: "50px", md: "60px", lg: "72px" } }}>
      <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 4 }}>
        Contact Details
      </Typography>

      <Grid container spacing={4}>
        {contactPersons.map((person, idx) => (
          <Grid item size={{ xs: 12, md: 6 }} key={idx}>
            <Card elevation={0} sx={{ background: "none" }}>
              <Box
                sx={{
                  display: "flex",
                  gap: "24px",
                  flexDirection: { xs: "row" },
                  alignItems: { xs: "flex-start" },
                  borderBottom: "1px solid #D5D6DA",
                }}
              >
                <Box>
                  <CardMedia
                    component="img"
                    image={person.image}
                    alt={person.name}
                    sx={{
                   height: { xs: 255, md: 255, lg: 305 },
                maxWidth: { xs: 190, sm: 180, md: 200,lg:230 },
                objectFit: "cover",
                    }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="subHeadingTextInterMedium"
                      sx={{ mb: 2, fontFamily: "Newsreader" }}
                    >
                      {person.name}
                    </Typography>
                    <Typography
                      variant="typographyBodyInterNormalSmall"
                      sx={{ mb: 2, color: "#6b7280" }}
                    >
                      {person.role}
                    </Typography>
                    <Typography
                      variant="typographyBodyInterNormalSmall"
                      sx={{ mb: 1, color: "#4a4f5d",fontWeight:"600 !important" }}
                    >
                      {person.department}
                    </Typography>
                    <Typography
                      variant="typographyBodyInterNormalSmall"
                      sx={{ mb: 2, color: "#4a4f5d" }}
                    >
                      {person.details}
                    </Typography>
                    <Typography
                      component="a"
                      href={`mailto:${person.email}`}
                      variant="typographyBodyInterNormalSmall"
                      sx={{
                        color: "#4a4f5d",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      {person.email}
                    </Typography>
                  </CardContent>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactDetailsSection;
