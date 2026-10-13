import React from "react";
import { Box, Typography, Grid, Card } from "@mui/material";

const InfrastructureSection = ({ accaEvents }) => {
  return (
    <Box sx={{
              px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
         py: { xs: "40px", sm: "50px", md: "60px", lg: "72px" } }}>

      <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 4 }}>
        
        ACCA Events
      </Typography>

      <Grid container spacing={3}>
        {accaEvents.map((item, idx) => (
          <Grid item size={{ xs: 12, md: 4 }} key={idx}>
            <Card elevation={0} sx={{ background: "none" }}>
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: "220px",
                  borderRadius: "8px",
                  objectFit: "cover",
                  mb: 2,
                }}
              />
             
              <Typography
                variant="typographyBodyInterNormalSmall"
                sx={{ color: "#4a4f5d", lineHeight: 1.6 }}
              >
                {item.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InfrastructureSection;
