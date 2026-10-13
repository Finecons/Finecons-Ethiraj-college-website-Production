
import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const VisionMissionQualityPolicy = ({ aboutEthirajDatas }) => {
    // const { subtext = [], description = [] } = additionalData || {};
    const subtext = [
        "To holistically develop women, by imparting knowledge, value systems, technological competencies and global skill sets.",
        "To harness their full potential to prepare them to be responsible citizens, compassionateleaders, agents of social change and participants in the National Development.",
    ];

    const description = [
        "To achieve our vision by creating a student-centric learning environment that is driven bypassion for excellence, research culture and an eco-system for innovation and creativity.",
        "To encourage a participatory approach among staff, students, alumni and other stakeholders.",
        "To provide adequate opportunities to engage in multitude of interests of our diverse students community in academic, co-curricular and extra-curricular activities.",
        "To offer a campus of excellence with world class infrastructure, technology and support services to our staff and students.",
        "To have a Management that would uphold the highest levels of transparency,accountability and governance in meeting the ideals of the Founder of the college."
    ];

    const subtext2 = [
        "Thiru V. L. Ethiraj’s vision of women empowerment inspires us to provide a quality and need- based education. We disseminate knowledge without compromising on standards and values. Hallmarks of the education we impart to our students are development of self-confidence, inculcation of ethics, fostering independent thinking and pursuit of excellence, sensitization to social and environmental needs and a holistic / global outlook on life.",
    ];
    return (
        <div>
            <Box
                id="vision-mission"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    // px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
                    pb: { lg: "72px", md: "60px", xs: "20px", sm: "50px" },
                    borderBottom: "1px solid black"
                }}
            >

                <Paper
                    elevation={0}
                    sx={{
                        // px: { lg: "36px", md: "28px", xs: "16px", sm: "30px" },
                        background: "none",
                    }}
                >
                    {/* <Typography variant="subHeadingTextInterMedium">
                        Vision, Mission & Quality Policy
                    </Typography> */}

                    <Typography variant="leadershipContentTextNewsreaderMediumForQuotes" sx={{ textAlign: "center", my: "40px" }}>
                        “To strive, to seek, to find and not to yield”
                    </Typography>
                    <br />


                    <Grid container spacing={6}>
                        <Grid item size={{ xs: 12 }}>
                            <Typography variant="subHeadingTextInterMedium">
                                Vision
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, mt: 2 }}>
                                {subtext.map((text, index) => (
                                    <Box
                                        key={index}
                                        component="li"
                                        sx={{
                                            mb: 1.5,
                                            color: "var(--brand-palatte-text-color)",
                                        }}
                                    >
                                        <Typography variant="typographySubheadingText">
                                            {text}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                        </Grid>
                        {/* Left Column */}
                        <Grid item size={{ xs: 12 }}>
                            <Typography variant="subHeadingTextInterMedium">
                                Mission
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, mt: 2 }}>
                                {description.map((text, index) => (
                                    <Box
                                        key={index}
                                        component="li"
                                        sx={{
                                            mb: 1.5,
                                            color: "var(--brand-palatte-text-color)",
                                        }}
                                    >
                                        <Typography variant="typographySubheadingText">
                                            {text}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>


                        {/* Right Column */}

                        <Grid item size={{ xs: 12 }} sx={{ mt: "30px", }}>
                            <Typography variant="subHeadingTextInterMedium" sx={{ mb: "20px" }}>
                                Quality Policy
                            </Typography>


                            {subtext2.map((text, index) => (
                                <>
                                    <Typography

                                        key={index}
                                        variant="typographySubheadingText"
                                        sx={{
                                            color: "var(--brand-palatte-text-color)",
                                            // mb: 2,
                                        }}
                                    >
                                        {text}
                                    </Typography>
                                    <br />
                                </>
                            ))}
                        </Grid>


                        {/* <Grid item size={{ xs: 12 }} sx={{ display: { xs: "block", md: "none" } }}>
                            <Typography variant="subHeadingTextInterMedium">
                                Quality Policy
                            </Typography>
                            <br />

                            <br />

                            {subtext2.map((text, index) => (
                                <>
                                    <Typography
                                        key={index}
                                        variant="typographySubheadingText"
                                        sx={{
                                            color: "var(--brand-palatte-text-color)",
                                            // mb: 2,
                                        }}
                                    >
                                        {text}
                                    </Typography>
                                    <br />
                                </>
                            ))}
                        </Grid> */}
                    </Grid>
                </Paper>
            </Box>
        </div>
    );
};

export default VisionMissionQualityPolicy;
