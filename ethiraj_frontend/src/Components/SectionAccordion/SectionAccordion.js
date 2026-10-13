import React from 'react';

// MUI components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';

// MUI icons
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AccordionRow from '../AccordionRow/AccordionRow';
import { Box } from '@mui/material';






const SectionAccordion = ({ title, rows, heading, sub_heading, content, nameComponent, bottomContent1, bottomContent2, tabledesign }) => {


    const [open, setOpen] = React.useState(false);

    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

    return (
        <Grid item size={{ xs: 12 }}>
            {/* Header */}
            <Grid
                alignItems="center"
                justifyContent="space-between"
                sx={{ display: "flex" }}
            >
                {/* <Typography variant="subHeadingTextInterMedium">
                    {title}
                </Typography> */}
                <Typography
                    id={title}
                    variant="headingTextNewsreaderMedium"
                    // id={
                    //     title === "Composition"
                    //         ? "composition"
                    //         : title === "NAAC"
                    //             ? "naac"
                    //             : title === "IQAC Events"
                    //                 ? "iqac-event"
                    //                 : title === "AQAR"
                    //                     ? "aqar"
                    //                     : title === "NIRF"
                    //                         ? "nirf"
                    //                         : title === "Satisfaction Survey"
                    //                             ? "satisfaction-survey"
                    //                             : ""
                    // }
                    sx={{ mt: { xs: "32px", sm: "70px" }, mb: { xs: "18px", sm: "10px", md: "10px" } }}
                >
                    {title}
                </Typography>

                <IconButton sx={{ mt: { xs: "32px", sm: "70px" }, mb: { xs: "18px", sm: "10px", md: "10px" } }} onClick={handleToggle}>
                    {open ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
            </Grid>

            {/* Expandable Content */}
            <Collapse in={open} timeout="300ms">
                <Typography
                    variant="typographyBodyInterNormalHeadingProgram"
                    sx={{ mb: "24px", color: "black", mt: { md: "22px", lg: "30px" }, }}
                >
                    {heading}
                </Typography>

                <Typography
                    variant="typographyBodyInterNormalHeadingProgram"
                    sx={{ mb: "24px", color: "black" }}
                >
                    {sub_heading}
                </Typography>

                <Typography

                    variant="typographyBodyInterNormal"
                    sx={{ mb: { xs: "10px", md: "24px" } }}
                >
                    {content}
                </Typography>


                <Grid
                    container
                    mt={2}
                    columnSpacing={2}
                    sx={{
                        // display: "flex",
                        // flexDirection: "column",
                        mt: { md: "22px", lg: "30px" },

                    }}
                >
                    {tabledesign ? (<Box width="100%">


                        {/* Header (Hide on Mobile) */}
                        <Grid
                            container
                            py={1}
                            borderBottom="1px solid #ccc"
                            sx={{
                                display: { xs: "flex" }, // Hide on mobile
                            }}
                        >
                            <Grid item size={{ xs: 5, md: 4 }} >
                                <Typography variant="typographyBodyInterNormalHeadingProgram">MEMBERSHIP</Typography>
                            </Grid>

                            <Grid item size={{ xs: 7, md: 6 }}>
                                <Typography variant="typographyBodyInterNormalHeadingProgram">CATEGORY</Typography>
                            </Grid>


                        </Grid>

                        {/* Rows */}
                        {rows.map((item, index) => (
                            <Grid
                                container
                                key={index}
                                spacing={1}
                                py={2.5}

                                borderBottom="1px solid #ccc"
                            >

                                
                               
                                {/* Membership */}
                                <Grid item size={{ xs: 5, md: 4, sm: 4 }} >
                                    <Typography >
                                        {/* <Typography
                                            component="span"
                                            variant="typographyBodyInterNormalHeadingProgram"
                                            sx={{ display: { xs: "inline", sm: "none" } }}
                                        >
                                            Membership:{" "}
                                        </Typography> */}
                                        <Typography
                                            component="span"
                                            variant="typographyBodyContent"
                                        >

                                            {item.membership}
                                        </Typography>
                                    </Typography>
                                </Grid>

                                {/* Category */}
                                <Grid item size={{ xs: 7, md: 6, sm: 6 }}>
                                    <Typography >
                                        {/* <Typography
                                            component="span"
                                            variant="typographyBodyInterNormalHeadingProgram"
                                            sx={{ display: { xs: "inline", sm: "none" } }}
                                        >
                                            Category:{" "}
                                        </Typography> */}

                                        <Typography
                                            component="span"
                                            variant="typographyBodyContent"
                                        >

                                            {item.category}
                                        </Typography>
                                    </Typography>
                                </Grid>

                               

                            </Grid>
                        ))}
                    </Box>) : (


                        rows?.map((row, idx) => (

                            <AccordionRow
                                key={idx}
                                header={title}
                                nameComponent={nameComponent}
                                title={row.name}
                                viewLink={row.pdf}
                                downloadLink={row.pdf}
                                name={row.name}
                                designation={row.description}
                                description={row.description2}
                            />
                        ))
                    )}

                </Grid>
                <br />
                <br />
                <Typography
                    variant="typographyBodyContent"
                    sx={{ mb: "24px", color: "black" }}

                >
                    {bottomContent1}
                </Typography>
                {/* <br /> */}
                <Typography
                    variant="typographyBodyContent"
                    sx={{ mt: 0.5 }}
                >
                    {bottomContent2}
                </Typography>
            </Collapse>
            {/* Divider ONLY when accordion is closed */}
            {!open && (
                <Divider
                    sx={{
                        borderColor: "var(--brand-palette-border-strong)",
                        mt: { md: "20px", lg: "20px" },
                    }}
                />
            )}
        </Grid>
    );
};


export default SectionAccordion;