
// OurPrograms.js
import { Box, Typography, Grid, Stack, SvgIcon, Divider } from "@mui/material";
import CustomSectionAccordion from "../../../Components/CustomSectionAccordion/CustomSectionAccordion";

import Muralidharan from "../../../Assets/Muralidharan.png";
import ApexCommiteeThiruRChandrasekar from "../../../Assets/ApexCommiteeThiruRChandrasekar.png";
import ApexThiruDrMSekar from "../../../Assets/ApexThiruDrMSekar.png";
import ApexSivathanuPillai from "../../../Assets/ApexSivathanuPillai.png";

import ApexGeethaLakshmipathy from "../../../Assets/ApexGeethaLakshmipathy.png";

import ApexUmaGowrie from "../../../Assets/ApexUmaGowrie.png";




const ApexCommitee = [
    {
        heading: "ApexCommittee",
        additional_data: {
            card_design: [
                { name: "Thiru. V.M. Muralidharan", description: "Chairman of the Board", image: Muralidharan },
                { name: "Thiru. R. Chandrasekar", description: "Financial Trustee", image: ApexCommiteeThiruRChandrasekar },

                { name: "Thiru. Dr. M Sekar", description: " ", image: ApexThiruDrMSekar },
                { name: "Padma Bhushan. Dr A. Sivathanu Pillai", description: " ", image: ApexSivathanuPillai },

                { name: "Dr. Geetha Lakshmipathy", description: "Administrative Officer", image: ApexGeethaLakshmipathy },
                { name: "Dr. S. Uma Gowrie", description: "Principal & Secretary ", image: ApexUmaGowrie },
            ],
        }
    },
];

const AdvisoryCommitee = [
    {
        heading: "AdvisoryCommittee",
        additional_data: {
            card_design: [
                { name: "Thiru. V.M. Muralidharan", description: "Chairman of the Board" },
                { name: "Thiru. R. Chandrasekar", description: "Financial Trustee"},

                { name: "Thiru. Dr. M Sekar", description: "Member"},
                { name: "Padma Bhushan. Dr A. Sivathanu Pillai", description: "Member" },

                { name: "Dr. Geetha Lakshmipathy", description: "Member" },
                { name: "Dr. S. S. Sundaram", description: "University Representative" },
                
                { name: "Dr. S. Uma Gowrie", description: "Principal & Secretary " },

               
            ],
        }
    },
];


const CommiteeMembers = [
    {
        heading: "CommitteeMembers",
        additional_data: {
            card_design: [
                { name: "Tmt. Beulah Jebakumari Suganthi", description: "Vice Principal (Aided)" },
                { name: "Dr. M. Jeyanthi", description: "Vice Principal (Self-supporting)" },
                { name: "Dr. P. Padmini", description: "Dean of Research (Aided)" },

                { name: "Dr. V. Malathi ", description: "Dean of Research (Self-supporting) " },

                { name: "Dr. Sudha Parimala", description: "Associate Professor & Head of Department Chemistry(Aided)" },
                { name: "Dr. A. Saradha", description: "Associate Professor & Department of Economics (Aided)"},

                { name: "Dr.M. Linett Naveena", description: "Associate Professor, Department of Microbiology (Self- Supporting) "},
                { name: "Dr.M.Vanishree", description: "Department of Business Administration (Self- Supporting)" },

                { name: "Dr.M.Menaka", description: "Assistant Professor",description2:"Department of Clinical Nutrition & Dietetics (Self-Supporting)" },

            ],
        }
    },
];

function ECRICCommitee() {


    return (
        <Box
            id="ecric-committee"
            sx={{
                // px: { xs: 2, sm: 3, md: "30px", lg: "36px" },
                px: { xs: 2, sm: 3, md: "74px", lg: "94px" },

                py: { lg: "41px", md: "30px", sm: "30px", xs: "40px" },

                my: { xs: "85px", md: "20px" },
            }}
        >
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
                {/* LEFT: heading + intro + 3 underlined rows */}

                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                    <Typography
                        variant="headingTextNewsreaderMedium"
                        sx={{
                            color: "var(--heading-text-primary)",
                            // fontFamily: "Newsreader, serif",
                            // fontStyle: "normal",
                            // fontWeight: 500,
                            // lineHeight: "52px",
                            // fontSize: { xs: "26px", sm: "32px", md: "36px", lg: "45px" },
                            mb: { xs: 2, sm: 2, md: "10px", lg: "28px" },
                        }}
                    >
                        ECRIC Committee & Members
                    </Typography>
                </Grid>




            </Grid>
            <Grid container>
                {/* <CustomSectionAccordion title="Apex Commitee" id="Apex_Commitee" >
                    {ApexCommitee[0]?.additional_data?.card_design?.map((row, idx) => (
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


                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 3,
                                    flexWrap: "nowrap", // ✅ Prevent image/text stacking
                                }}
                            >

                                <Box
                                    component="img"
                                    src={row?.image || "/placeholder.png"} // fallback image
                                    alt={row?.name}
                                    sx={{
                                        width: 128,
                                        aspectRatio: "1 / 1",   // keeps it square
                                        objectFit: "cover",
                                        borderRadius: "5px",
                                        objectFit: "cover",
                                        backgroundColor: "#e0e0e0",
                                    }}
                                />



                                <Box
                                    sx={{
                                        minWidth: 0, // ✅ Allows text wrapping properly
                                        flex: 1,
                                    }}
                                >
                                    <Typography
                                        variant="typographyBodyInterMaintext"

                                    // sx={}
                                    >
                                        {row.name}
                                    </Typography>

                                    <Typography
                                        variant="typographyBodyContent"
                                        sx={{ mt: 0.5 }}
                                    >
                                        {row.description}
                                    </Typography>
                                </Box>

                            </Box>

                        </Grid>
                    ))}
                </CustomSectionAccordion> */}
                <CustomSectionAccordion title="Advisory Committee" id="Advisory_Commitee" >
                    {AdvisoryCommitee[0]?.additional_data?.card_design?.map((row, idx) => (
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


                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 3,
                                    flexWrap: "nowrap", // ✅ Prevent image/text stacking
                                }}
                            >

                                {/* <Box
                                    component="img"
                                    src={row?.image || "/placeholder.png"} // fallback image
                                    alt={row?.name}
                                    sx={{
                                        width: 128,
                                        aspectRatio: "1 / 1",   // keeps it square
                                        objectFit: "cover",
                                        borderRadius: "5px",
                                        objectFit: "cover",
                                        backgroundColor: "#e0e0e0",
                                    }}
                                /> */}



                                <Box
                                    sx={{
                                        minWidth: 0, // ✅ Allows text wrapping properly
                                        flex: 1,
                                    }}
                                >
                                    <Typography
                                        variant="typographyBodyInterMaintext"

                                    // sx={}
                                    >
                                        {row.name}
                                    </Typography>

                                    <Typography
                                        variant="typographyBodyContent"
                                        sx={{ mt: 0.5 }}
                                    >
                                        {row.description}
                                    </Typography>
                                </Box>

                            </Box>

                        </Grid>
                    ))}

                </CustomSectionAccordion>

                <CustomSectionAccordion title="Committee Members" id="Commitee_Members" >
                   {CommiteeMembers[0]?.additional_data?.card_design?.map((row, idx) => (
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


                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 3,
                                    flexWrap: "nowrap", // ✅ Prevent image/text stacking
                                }}
                            >

                                {/* <Box
                                    component="img"
                                    src={row?.image || "/placeholder.png"} // fallback image
                                    alt={row?.name}
                                    sx={{
                                        width: 128,
                                        aspectRatio: "1 / 1",   // keeps it square
                                        objectFit: "cover",
                                        borderRadius: "5px",
                                        objectFit: "cover",
                                        backgroundColor: "#e0e0e0",
                                    }}
                                /> */}



                                <Box
                                    sx={{
                                        minWidth: 0, // ✅ Allows text wrapping properly
                                        flex: 1,
                                    }}
                                >
                                    <Typography
                                        variant="typographyBodyInterMaintext"

                                    // sx={}
                                    >
                                        {row.name}
                                    </Typography>

                                    <Typography
                                        variant="typographyBodyContent"
                                        sx={{ mt: 0.5 }}
                                    >
                                        {row.description}
                                    </Typography>

                                    <Typography
                                        variant="typographyBodyContent"
                                        sx={{ mt: 0.5 }}
                                    >
                                        {row.description2}
                                    </Typography>

                                    
                                </Box>

                            </Box>

                        </Grid>
                    ))}


                </CustomSectionAccordion>
            </Grid>
        </Box>
    );
}
export default ECRICCommitee;
