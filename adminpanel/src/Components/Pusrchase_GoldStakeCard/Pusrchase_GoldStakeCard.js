







import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { styled } from "@mui/system";
import { adminUrl } from "../../constants";
import puschasegoldCardIcon from "../../Assets/puschase&goldCardIcon.svg"


const Pusrchase_GoldStakeCard = ({ icon, title, description }) => {
    return (
        <Box textAlign="center">
            <Avatar
                sx={{
                    //   bgcolor: "#C38F51",
                    background: "rgba(195, 143, 81, 0.1)",
                    // background: "",
                    width: 52,
                    height: 52,
                    margin: "0 auto",
                }}
            >
                <img src={`${adminUrl}${icon}`} alt="logo" style={{ width: "50%", height: "50%" }} />

            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, fontSize: "18px" }}>
                {title}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: "gray", textAlign: "center" }}>
                {description}
            </Typography>
        </Box >
    );
}

export default Pusrchase_GoldStakeCard;