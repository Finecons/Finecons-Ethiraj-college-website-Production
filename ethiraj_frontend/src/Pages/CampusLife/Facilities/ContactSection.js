import React from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";

const ContactSection = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                // py: { xs: 3, sm: 4, md: 5 },
                // px: { xs: 2, sm: 3, md: 4 },
                background: "none",
            }}
        >
            <Grid container spacing={4}>

                {/* Left Column */}
                <Grid item size={{ xs: 12, md: 8.5 }}>

                    <Typography
                        variant="primaryHeadingTextForRanking"
                        sx={{ mb: 1 }}
                    >
                        Contact Details
                    </Typography>

                    <Grid container spacing={3}>

                        <Grid item size={{ xs: 12 }}>
                            <Typography variant="typographyTabelInterText" sx={{ mb: 1 }}>
                                library@ethirajcollege.edu.in
                            </Typography>
                        </Grid>

                        <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
                            <Typography variant="typographySliderText" sx={{ mb: 1 }}>
                                Dr. R. Karpagam,
                                <br />
                                Librarian
                            </Typography>
                            <Typography variant="typographyTabelInterText">
                                karpagam_r@ethirajcollege.edu.in
                            </Typography>
                        </Grid>

                        <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
                            <Typography variant="typographySliderText" sx={{ mb: 1 }}>
                                Mrs. N. Thilakavathy,
                                <br />
                                Librarian
                            </Typography>
                            <Typography variant="typographyTabelInterText">
                                karpagam_r@ethirajcollege.edu.in
                            </Typography>
                        </Grid>

                    </Grid>

                </Grid>




                {/* Right Column */}
                <Grid item size={{ xs: 12, md: 3.5 }} sx={{ display: "flex" }}>
                    <Box>
                        <Typography
                            variant="primaryHeadingTextForRanking"
                            sx={{ mb: 1 }}
                        >
                            Working Hours
                        </Typography>

                        <Typography variant="typographyBodyInterMaintext">
                            8.30 am to 5.30 pm on all
                            <br />
                            working days.
                        </Typography>
                    </Box>
                </Grid>

            </Grid>
        </Paper>
    );
};

export default ContactSection;