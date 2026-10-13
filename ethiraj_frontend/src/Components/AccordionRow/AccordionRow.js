import React from 'react';

// MUI components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';


const AccordionRow = ({ title, viewLink, downloadLink, name, designation, header, nameComponent, description }) => {



    if (nameComponent) {
        return (
           
                <Grid
                    item
                    size={{ md: 6, sm: 6, xs: 12 }}

                    sx={{
                        py: 1.5,
                        // borderBottom: "1px solid var(--brand-palette-border-strong)",
                        mt: { xs: "18px", sm: "10px", md: "10px" },
                        borderBottom: "1px solid var(--brand-palette-border-strong)"
                    }}
                >


                    <Grid container spacing={3} sx={{}} >
                        <Grid >
                            <Typography
                                variant="typographyBodyInterMaintext"
                            // sx={}
                            >
                                {name}
                            </Typography>

                            <Typography
                                variant="typographyBodyContent"
                                sx={{ mt: 0.5 }}
                            >
                                {designation}
                            </Typography>
                            <Typography
                                variant="typographyBodyContent"
                                sx={{ mt: 0.5 }}
                            >
                                {description}
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>   
        )
    }


    return (
        <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            size={{ xs: 12 }}
            sx={{
                py: 1,
                borderBottom: "1px solid var(--brand-palette-border-strong)",
                mt: { xs: "18px", sm: "10px", md: "10px" },
                mb: { xs: "32px", sm: "24px", md: "24px" },
                pb: { xs: "32px", sm: "26px", md: "26px" }


            }}
        >
            <Grid item size={{ xs: 12, sm: 6 }}>
                <Typography variant="typographyBodyInterMaintext">
                    {title}
                </Typography>
            </Grid>

            <Grid item sx={{ marginTop: { xs: "15px", sm: "0px" }, display: "flex", justifyContent: { xs: "start", sm: "end" }, alignItems: "center", gap: 2, }} size={{ xs: 12, sm: 6 }}>
                <Typography
                    variant="typographyBodyInterMaintext"
                    component="a"
                    href={viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: "#003BD1",
                        // textDecoration: "none",
                        // fontWeight: 500,
                    }}
                >
                    View Certificate
                </Typography>

                <Typography
                    variant="typographyBodyInterMaintext"
                    component="a"
                    href={downloadLink}
                    download
                    sx={{
                        color: "#003BD1",
                        // textDecoration: "none",
                        // fontWeight: 500,
                    }}
                >
                    Download
                </Typography>
            </Grid>
        </Grid>
    );
};


export default AccordionRow;