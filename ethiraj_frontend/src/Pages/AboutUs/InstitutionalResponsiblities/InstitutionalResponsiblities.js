import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,

    Grid,

} from "@mui/material";
import CustomBreadCrumbs from "../../../Components/CustomBreadCrumbs/CustomBreadCrumbs";
import CustomGallerySildeShow from "../../../Components/CustomGallerySildeShow/CustomGallerySildeShow";
import downloadPdfIconImage from "../../../Assets/downloadpdfIconImage.png";
import SectionNavigation from "./SectionNavigation";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import BannerSection from "./BannerSection";
import SectionAccordion from "../../../Components/SectionAccordion/SectionAccordion";
import responsibilityPdf from "../../../Assets/Right to Information Act June 2025.pdf"
import responsibilityPdfForFlowchart from "../../../Assets/institutionalResponsibilitiesPdf.pdf"
import ADCFile from "../../../Assets/ADC website info.pdf"
import ARCFile from "../../../Assets/Anti-ragging.pdf"


// import SectionAccordion from "../../Components/SectionAccordion"

const InstitutionalResponsiblities = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);


    const { getAllIQACSectionsBySectionName } = useSelector(
        (state) => state?.getAllIQACSectionsBySectionName
    );

    console.log(getAllIQACSectionsBySectionName);


    useEffect(() => {
        const fetchData = async () => {
            const data1 = {
                data: {},
                method: "get",
                apiName: "getAllIQACSections",
            };

            setLoading(true); // Set loading to true when the request starts
            await dispatch(actions.GETALLIQACSECTIONSBYSECTIONNAME(data1));
            setLoading(false); // Set loading to false after data is fetched
        };
        fetchData();
    }, [dispatch]);

    const activitiesData = [
        {
            event: "Alumnae Connect ‘25: Our Pride Your Inspiration",
            person:
                "Ms. Deepa Seshadri (Sr Vice President, Apollo Hospitals), Ms. Akshaya Chandrasekaran (Ex-VP, Barclays)",
        },
        {
            event:
                "Dr. Mrs. Kousalya Moorthy & Justice M.N. Moorthy Endowment Lecture on Union Budget 2025 - An Overview",
            person: "CA Sai Ajay N, Senior Consultant",
        },
        {
            event: "Workshop on Mind Matters: Exploring Stress and Mental Well-Being",
            person:
                "Dr. M. Ramya Maheshwari, Assistant Professor & Head, Dept of Psychology",
        },
    ];

    const studentAchievements1 = [
        {
            achievement: "Cleared CA Intermediate Group 2",
            student: "Ms. Varsha R – 3rd Year, Commerce (2024-25)",
        },
        {
            achievement: "Cleared ACCA skill level (FR paper)",
            student: "Ms. Kanishka Babu – 2nd Year, Commerce (2024-25)",
        },
        {
            achievement: "Cleared CMA Intermediate - Group 1",
            student: "Ms. Divya Praba R – 3rd Year, Commerce (2024-25)",
        },
        {
            achievement: "Bronze Medal in 8th Junior National Duathlon Championship",
            student: "Ms. Deepika HB – 2nd Year, Commerce (2024-25)",
        },
        {
            achievement: "Winner in 9th Senior National Duathlon Championship",
            student: "Ms. Deepika HB – 2nd Year, Commerce (2024-25)",
        },
    ];

    const researchHighlights1 = [
        {
            title:
                "New Study Demonstrates Sustainable Catalytic Use of Hydroxyapatite for Water Purification",
            description: "Enter a blurb from the publication...",
            date: "JUNE 2025",
            category: "COMMERCE",
        },
        {
            title:
                "New Study Demonstrates Sustainable Catalytic Use of Hydroxyapatite for Water Purification",
            description: "Enter a blurb from the publication...",
            date: "JUNE 2025",
            category: "COMMERCE",
        },
        {
            title:
                "New Study Demonstrates Sustainable Catalytic Use of Hydroxyapatite for Water Purification",
            description: "Enter a blurb from the publication...",
            date: "JUNE 2025",
            category: "COMMERCE",
        },
    ];


    const location = useLocation();
    const navigate = useNavigate();



    const handledownloadFile = async (pdfUrl) => {
        try {
            const response = await fetch(pdfUrl);
            const blob = await response.blob();

            const fileURL = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = fileURL;
            link.download = "Activity&Achiements.pdf"; // 🔥 forces download
            document.body.appendChild(link);
            link.click();
            link.remove();

            window.URL.revokeObjectURL(fileURL);
        } catch (error) {
            console.error("Download failed:", error);
        }
    };

    const breadcrumbsItems = [
        { name: "Home", to: "/" },
        { name: "Statuory Body", to: "/aboutus/statutorybody" },
        // { name: courseData?.title },
    ];

    // Handle scroll to section
    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        }
    }, [location.state?.scrollTo]);

    const bannerDatas = []


    const GoverningBody = [
        {
            heading: "Governing Body",
            additional_data: {
                heading: "Ref: F. No.1-18/2021(CPP-II), dated: 03.04.2023",
                sub_heading: "University Grants Commission",
                content:
                    "The Governing Body Committee is constituted by the Chairman, Ethiraj College for Women, for the academic years 2025–26 and 2026–27, in accordance with the UGC Regulations 2023 on autonomous colleges and maintenance of standards.",
                card_design: [
                    { name: "Thiru. V. Muralidharan", description: "Chairman" },
                    { name: "Thiru. R. Chandrasekar", description: "Financial Trustee" },

                    { name: "Dr. M. Sekar", description: "Trust Board Member" },
                    { name: "Dr. A. Sivathanu Pillai", description: "Trust Board Member" },

                    { name: "Dr. Geetha Lakshmipathy", description: "Trust Board Member" },
                    { name: "Dr. S.S. Sundaram", description: "University Representative" },

                    { name: "Dr. Tmt. S. Uma Gowrie", description: "Principal & Secretary" },
                    { name: "Dr. K. Sudarkodi", description: "State Government Official - RJD Chennai Region" },

                    { name: "Prof. Dr. V. Uma Jebaswari", description: "Member of Governing Body" },
                    { name: "Dr. Tmt. D.B. Usharani", description: "Member of College Committee" },

                    { name: "Maj. Dr. Tmt. R. Shanthi", description: "Member of College Committee" },
                    { name: "Tmt. A. Tamilselvi", description: "Administrative Officer" }
                ],
            },
        },
    ];

    const InstitutionalResponsiblities = [{
        heading: "Institutional Responsiblities",
        additional_data: {
            card_design: [

                {
                    name: "Organogram", pdf: responsibilityPdfForFlowchart
                },
                {
                    name: "Anti-Ragging Committee", pdf: ARCFile
                },
                {
                    name: "Anti-Drug Club Committee", pdf: ADCFile
                },
                {
                    name: "RTI Mandatory Disclosure", pdf: responsibilityPdf
                },

            ],
        }
    },]



    // Function to get dates by section_name
    const getDatasBySectionName = (sectionName) => {
        return (
            getAllIQACSectionsBySectionName?.data?.filter(
                (section) => section?.section_name === sectionName
            ) || []
        );
    };

    const InstitutionalResponsiblitiesDatas = getAllIQACSectionsBySectionName?.data
        ? getDatasBySectionName("InstitutionalResponsiblities section")
        : [];








    return (
        <Box>
            <BannerSection bannerDatas={bannerDatas} />

            <Box sx={{ mt: 4, mb: 6, px: { xs: 2, sm: 3, md: "74px", lg: "94px" } }}>
                {/* Breadcrumbs */}




                <Grid size={{ xs: 12, md: 8.5 }}>

                    {InstitutionalResponsiblities[0]?.additional_data?.card_design?.map((data, index) => {
                        // Generate ID based on data name
                        let sectionId = "";
                        if (data.name === "Flow chart") {
                            sectionId = "flowchart";
                        } else if (data.name === "Anti-Ragging Committee") {
                            sectionId = "anti-ragging-committee";
                        } else if (data.name === "Anti-Drug Committee") {
                            sectionId = "anti-drug-committee";
                        } else if (data.name === "RTI Mandatory Disclosure") {
                            sectionId = "rti-mandatory-disclosure";
                        }

                        return (
                            <Grid
                                key={index}
                                id={sectionId}
                                container
                                alignItems="center"
                                justifyContent="space-between"
                                size={{ xs: 12 }}
                                sx={{
                                    py: 1,
                                    borderBottom: "1px solid var(--brand-palette-border-strong)",
                                    mt: { xs: "18px", sm: "10px", md: "10px" },
                                    mb: { xs: "32px", sm: "24px", md: "24px" },
                                    pb: { xs: "32px", sm: "26px", md: "26px" },
                                    scrollMarginTop: "120px",
                                }}
                            >
                                <Grid item size={{ xs: 12, sm: 6 }}>
                                    <Typography variant="headingTextNewsreaderMedium">
                                        {data.name}
                                    </Typography>
                                </Grid>

                                <Grid item sx={{ marginTop: { xs: "15px", sm: "0px" }, display: "flex", justifyContent: { xs: "start", sm: "end" }, alignItems: "center", gap: 2, }} size={{ xs: 12, sm: 6 }}>
                                    <Typography
                                        variant="typographyBodyInterNormal"
                                        component="a"
                                        href={data.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: "#003BD1",
                                            // textDecoration: "none",
                                            // fontWeight: 500,
                                        }}
                                    >
                                        View File
                                    </Typography>

                                    <Typography
                                        variant="typographyBodyInterNormal"
                                        component="a"
                                        href={data.pdf}
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
                    })}



                </Grid >

            </Box >
        </Box >
    );
};

export default InstitutionalResponsiblities;
