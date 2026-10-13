import React from "react";
import { Grid, Typography, Paper, Box } from "@mui/material";

const CampusLifeLabsSection = ({
    title,
    description,
    sections, // 👈 NEW (instead of rightTitle, links)
}) => {
    return (
        <Grid container alignItems="center" spacing={2}>
            <Grid item size={{ xs: 12 }}>

                

                {/* Content */}
                <Paper
                    elevation={0}
                    sx={{
                        py: {
                            lg: "43.2px",
                            md: "36px",
                            xs: "12px",
                            sm: "30px",
                        },
                        background: "none",
                    }}
                >
                    <Grid container spacing={6}>

                        {/* Left Column */}
                        <Grid item size={{ xs: 12, md: 12 }}>
                            {description.map((text, index) => (
                                <React.Fragment key={index}>
                                    <Typography
                                        variant="typographySubheadingText"
                                        sx={{
                                            maxWidth: { xs:"100%", md: "80%" },
                                        }}
                                    >
                                        {text}
                                    </Typography>

                                    <br />
                                </React.Fragment>
                            ))}
                        </Grid>

                       
                    </Grid>
                </Paper>

            </Grid>
        </Grid>
    );
};

export default CampusLifeLabsSection;