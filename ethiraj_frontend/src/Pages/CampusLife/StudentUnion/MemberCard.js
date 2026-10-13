import React from "react";
import { Box, Card, Typography } from "@mui/material";

const MemberCard = ({ img, name, role, designation, advisor }) => {
  return (
    <Card
      sx={{
        // flex: "0 0 25%", // Show 4 cards at a time on large screens
        // minWidth: { xs: "45%", sm: "45%", md: "25%" },
        borderRadius: "0 !important",
        boxShadow: "none",
        background: "none",
        textAlign: "start",
      }}
    >
      <Box
        component="img"
        src={img}
        alt={name}
        sx={{
          width: "100%",
          height: { xs: 255, md: 255, lg: 305 },
          maxWidth: { xs: 200, md: 200, lg: 200 },

          objectFit: "cover",
        }}
      />
      <Typography
        variant="leadershipContentTextNewsreaderMedium"
        sx={{ mt: { xs: "4px", md: "16px", lg: "24px" } }}
      >
        {name}
      </Typography>
      <Typography variant="typographyBodyInterMaintext" sx={{ mt: "5px" }}>
        {role}
      </Typography>
      {advisor && designation && (
        <Typography 
          variant="typographyBodyInterNormal" 
          sx={{ mt: "5px", whiteSpace: "pre-line", fontSize: "0.875rem", color: "#666" }}
        >
          {designation}
        </Typography>
      )}
    </Card>
  );
};

export default MemberCard;
