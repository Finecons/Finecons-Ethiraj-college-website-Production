import React from 'react';

// MUI components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// MUI icons
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
// import AccordionRow from '../AccordionRow/AccordionRow';
import { Box } from '@mui/material';
import AccordionRow from './AccordionRow';






const SectionAccordion = ({ 
  title, 
  rows, 
  heading, 
  sub_heading, 
  content, 
  nameComponent, 
  bottomContent1, 
  bottomContent2, 
  tabledesign,
  bullet_points,
        steps,
        customContent,
        defaultOpen = false,
}) => {

        const [open, setOpen] = React.useState(defaultOpen);

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
            
                <Typography
                    id={title}
                    variant="headingTextNewsreaderMedium"
                    sx={{ mt: { xs: "32px", sm: "40px" } }}
                >
                    {title}
                </Typography>

                <IconButton 
                    sx={{ mt: { xs: "32px", sm: "70px" }, mb: { xs: "18px", sm: "10px", md: "10px" } }} 
                    onClick={handleToggle}
                >
                    {open ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
            </Grid>

            {/* Expandable Content */}
            <Collapse in={open} timeout="300ms">
                {content && (
                    <Typography
                        variant="typographyBodyInterNormal"
                        sx={{ mb: { xs: "8px", md: "14px" }, mt: { xs: "8px", sm: "22px", md:"32px", lg:"42px" } }}
                    >
                        {content}
                    </Typography>
                )}

                {/* Bullet Points */}
                {bullet_points && bullet_points.length > 0 && (
                    <Box sx={{ pl: 2, mt: 2 }}>
                        {bullet_points.map((point, idx) => (
                            <Box key={idx} sx={{ display: "flex", gap: 2, mb: 1.5 }}>
                                <Typography
                                    variant="typographyBodyInterNormal"
                                    sx={{
                                        color: "#2f2f3a",
                                        minWidth: "20px",
                                        flex: "0 0 20px",
                                    }}
                                >
                                    •
                                </Typography>
                                <Typography
                                    variant="typographyBodyInterNormal"
                                    sx={{ color: "#2f2f3a", lineHeight: 1.6 }}
                                >
                                    {point}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                )}

                {/* Steps */}
                {steps && steps.length > 0 && (
                    <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 1 }}>
                        {/* Steps Column - Left Side (6 columns) */}
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Box>
                                {steps.map((step, stepIdx) => (
                                    <Box key={stepIdx} sx={{ mb: 3 }}>
                                        <Typography
                                            variant="subHeadingTextInterMedium"
                                            sx={{ color: "#6B3C58", mb: 1.5 }}
                                        >
                                            {step.stepTitle}
                                        </Typography>
                                        <Box sx={{ pl: 0.5 }}>
                                            {step.stepContent && step.stepContent.map((content, contentIdx) => {
                                                const isPlainText = typeof content === "string";

                                                if (isPlainText) {
                                                    return (
                                                        <Box key={contentIdx} sx={{ display: "flex", gap: 2, mb: 1 }}>
                                                            <Typography
                                                                variant="typographyBodyInterNormal"
                                                                sx={{
                                                                    color: "#2f2f3a",
                                                                    minWidth: "20px",
                                                                    flex: "0 0 20px",
                                                                }}
                                                            >
                                                                •
                                                            </Typography>
                                                            <Typography
                                                                variant="typographyBodyInterNormal"
                                                                sx={{ color: "#2f2f3a", lineHeight: 1.6 }}
                                                            >
                                                                {content}
                                                            </Typography>
                                                        </Box>
                                                    );
                                                }

                                                return (
                                                    <Box key={contentIdx} sx={{ mb: 1 }}>
                                                        <Box sx={{ display: "flex", gap: 1.2, alignItems: "flex-start" }}>
                                                            <Typography
                                                                variant="typographyBodyInterNormal"
                                                                sx={{
                                                                    color: "#2f2f3a",
                                                                    minWidth: "20px",
                                                                    flex: "0 0 20px",
                                                                }}
                                                            >
                                                                {`${contentIdx + 1}.`}
                                                            </Typography>
                                                            <Typography
                                                                variant="typographyBodyInterNormal"
                                                                sx={{ color: "#2f2f3a", lineHeight: 1.6 }}
                                                            >
                                                                {content.text}
                                                            </Typography>
                                                        </Box>

                                                        {content.subPoints?.length ? (
                                                            <List sx={{ listStyleType: "disc", pl: 5.2, py: 0.5 }}>
                                                                {content.subPoints.map((point) => (
                                                                    <ListItem
                                                                        key={point}
                                                                        sx={{
                                                                            display: "list-item",
                                                                            p: 0,
                                                                            color: "#56565d",
                                                                            fontSize: "14px",
                                                                        }}
                                                                    >
                                                                        {point}
                                                                    </ListItem>
                                                                ))}
                                                            </List>
                                                        ) : null}

                                                        {content.note ? (
                                                            <Typography
                                                                variant="bodyTextInterRegular"
                                                                sx={{
                                                                    mt: 0.4,
                                                                    color: "#6f6f77",
                                                                    lineHeight: 1.4,
                                                                    fontSize: "12px",
                                                                    letterSpacing: "0.2px",
                                                                    pl: "28px",
                                                                }}
                                                            >
                                                                {content.note}
                                                            </Typography>
                                                        ) : null}
                                                    </Box>
                                                );
                                            })}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>

                        {/* Custom Content Column - Right Side (6 columns) */}
                        {customContent && (
                            <Grid item size={{ xs: 12, md: 6 }}>
                                <Box sx={{ mt: { xs: 2, md: 0 } }}>{customContent}</Box>
                            </Grid>
                        )}
                    </Grid>
                )}

                {steps && steps.length === 0 && customContent && <Box sx={{ mt: { xs: 2, sm: 3 } }}>{customContent}</Box>}

                {heading && (
                    <Typography
                        variant="typographyBodyInterNormalHeadingProgram"
                        sx={{ mb: "14px", color: "black", mt: { md: "16px", lg: "20px" } }}
                    >
                        {heading}
                    </Typography>
                )}

                {sub_heading && (
                    <Typography
                        variant="typographyBodyInterNormalHeadingProgram"
                        sx={{ mb: "14px", color: "black" }}
                    >
                        {sub_heading}
                    </Typography>
                )}

                <Grid
                    container
                    columnSpacing={2}
                    sx={{
                        mt: { xs: 1, md: 1.5 },
                    }}
                >
                    {tabledesign ? (<Box width="100%">

                        {/* Header (Hide on Mobile) */}
                        <Grid
                            container
                            py={1}
                            borderBottom="1px solid #ccc"
                            sx={{
                                display: { xs: "flex" },
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
                                title={row.title}
                                viewLink={row.pdf}
                                downloadLink={row.pdf}
                                name={row.name}
                                designation={row.designation}
                                description={row.Description}
                                email={row.email}
                                image={row.image}
                                clubsData={row.clubsData}
                                objectFitType={row?.objectFitType}
                            />
                        ))
                    )}
                </Grid>

                {!rows?.some((item) => item.clubsData) && bottomContent1?.title && (
                    <Box sx={{ mt: { xs: 2, sm: 3 } }}>
                        <AccordionRow
                            nameComponent={nameComponent}
                            title={bottomContent1.title}
                            description={bottomContent1.description}
                            clubsData={bottomContent1.cardcontent}
                        />
                    </Box>
                )}

                {bottomContent2 && (
                    <Box sx={{ mt: 2 }}>
                        {(typeof bottomContent2 === "string" || bottomContent2.text) && (
                            <Typography
                                variant="typographyBodyContent"
                                sx={{ mt: 0.5, mb: 1 }}
                            >
                                {typeof bottomContent2 === "string" ? bottomContent2 : bottomContent2.text}
                            </Typography>
                        )}
                        {Array.isArray(bottomContent2.links) && bottomContent2.links.length > 0 ? (
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 2, sm: 4 } }}>
                                {bottomContent2.links.map((item) => (
                                    <Typography
                                        key={`${item.linkText}-${item.link}`}
                                        component="a"
                                        href={item.link}
                                        target={item.external ? "_blank" : undefined}
                                        rel={item.external ? "noopener noreferrer" : undefined}
                                        variant="typographyBodyContent"
                                        sx={{
                                            color: "#0066cc",
                                            textDecoration: "underline",
                                            cursor: "pointer",
                                            "&:hover": {
                                                color: "#0052a3",
                                            },
                                        }}
                                    >
                                        {item.linkText}
                                    </Typography>
                                ))}
                            </Box>
                        ) : (
                            bottomContent2.link && (
                                <Typography
                                    component="a"
                                    href={bottomContent2.link}
                                    variant="typographyBodyContent"
                                    sx={{ 
                                        color: "#0066cc",
                                        textDecoration: "underline",
                                        cursor: "pointer",
                                        "&:hover": {
                                            color: "#0052a3"
                                        }
                                    }}
                                >
                                    {bottomContent2.linkText || "View the 2025 Admission Guide here."}
                                </Typography>
                            )
                        )}
                    </Box>
                )}
            </Collapse>

            {/* Divider on xs and sm screens (always visible) */}
            <Divider
                sx={{
                    borderColor: "black",
                    mt: { xs: "16px", sm: "20px" },
                    mb: { xs: "0px", sm: "0px" },
                    display: { xs: "block", },
                }}
            />
        </Grid>
    );
};


export default SectionAccordion;