



import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { styled } from "@mui/system";
import { adminUrl } from "../../constants";
import referCardImage from "../../Assets/referCardImage.svg"


const ProsperityCard = ({ icon, title, description }) => {
  return (
    <Box textAlign="center">
      <Avatar
        sx={{
          bgcolor: "#D49C63",
          width: 80,
          height: 80,
          margin: "0 auto",
        }}
      >
        <img 
        src={icon} 
        // src={referCardImage}
        alt="logo" 
        style={{ width: "50%", height: "50%" }}
         />
         {/* <StorefrontIcon /> */}

      </Avatar>
      <Typography variant="h6" sx={{ mt: 2 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, color: "gray", textAlign: "center" }}>
        {description}
      </Typography>
    </Box>
  );
}

export default ProsperityCard;