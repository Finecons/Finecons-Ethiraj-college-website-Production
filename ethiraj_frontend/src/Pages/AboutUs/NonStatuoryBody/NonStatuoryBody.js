import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Container,
    Card,
    CardMedia,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Grid,
    CardContent,
    Divider,
    TableHead,
    Button,
    Link
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
// import SectionAccordion from "../../Components/SectionAccordion"

const NonStatuoryBody = () => {

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

    const bannerDatas = []


    const PlanningAndEvaluationCommittee = [
        {
            heading: "Planning and Evaluation Committee",
            additional_data: {
                card_design: [
                    {
                        name: "Dr. S. Uma Gowrie",
                        description: "Chairperson",
                        description2: "Principal & Secretary, Ethiraj College for Women (Autonomous)"
                    },
                    {
                        name: "Tmt. Beulah Jebakumari Suganthi",
                        description: "Member ",
                        description2: "Vice Principal & Head, Department of Corporate Secretaryship"

                    },
                    {
                        name: "Dr. M. Jeyanthi",
                        description: "Member",
                        description2: "Vice Principal (SS), Head, Department of B.Com (A&F)"

                    },
                     {
                        name: "Dr. R. K. Maya ",
                        description: "Member ",
                        description2: "Controller of Examinations "

                    },
                    {
                        name: "Dr. R. Prabha",
                        description: "Member ",
                        description2: "IQAC Coordinator"

                    },
                    {
                        name: "Dr. Veena Murali",
                        description: "Member",
                        description2: "IQAC Member"

                    },
                    {
                        name: "Dr. N. Renuka Devi",
                        description: "Member",
                        description2: "Dean of Students (Self Supporting)"

                    }
                ]
            }
        }
    ];



    const AdmissionCoreCommittee = [
        {
            heading: "Admission Core Committee",
            additional_data: {
                card_design: [
                    {
                        name: "Dr. S. Uma Gowrie",
                        description: "Chairperson ",
                        description2: "Principal & Secretary, Ethiraj College for Women (Autonomous)"

                    },
                    {
                        name: "Tmt. Beulah Jebakumari Suganthi",
                        description: "Member ",
                        description2: "Vice Principal & Head, Department of Corporate Secretaryship"

                    },
                    {
                        name: "Maj. Dr. Tmt. R. Shanthini",
                        description: "Member ",
                        description2: "Associate Professor, Department of Economics"

                    },
                    {
                        name: "Dr. M. Annapoorni",
                        description: "Member ",
                        description2: "Associate Professor, Department of Commerce"

                    }
                ]
            }
        }
    ];


    const ExaminationCommittee = [
        {
            heading: "Examination Committee",
            additional_data: {
                card_design: [
                    {
                        name: "Dr. S. Uma Gowrie",
                        description: "Chairperson ",
                        description2: "Principal & Secretary, Ethiraj College for Women (Autonomous)"

                    },
                    {
                        name: "Dr. R. K. Maya",
                        description: "Member",
                        description2: "Controller of Examinations"

                    },
                    {
                        name: "Dr. Ezhilarasi Hilda Stanley",
                        description: "Member",
                        description2: "Additional Controller of Examinations"

                    },
                    {
                        name: "Head of the Conducting Department",
                        description: "Member",
                        description2: "Additional Camp Officer"

                    },
                    {
                        name: "Head of the Valuation Department",
                        description: "Member",
                        description2: "Additional Chief Superintendant"

                    }
                ]
            }
        }
    ];


    const LibraryCommittee = [
        {
            heading: "Library Committee",
            additional_data: {
                card_design: [
                    {
                        name: "Dr. S. Uma Gowrie",
                        description: "Chairperson",
                        description2: "Principal & Secretary, Ethiraj College for Women (Autonomous)"

                    },
                    {
                        name: "Tmt. Beulah Jebakumari Suganthi",
                        description: "Convener",
                        description2: "Vice Principal & Head, Department of Corporate Secretaryship"
                    },
                    {
                        name: "Dr. M. Jeyanthi",
                        description: "Member",
                        description2: "Vice Principal (SS), Head, Department of B.Com (A&F)"
                    },
                    {
                        name: "Dr. Adeline G. Albert",
                        description: "Member",
                        description2: "Associate Professor and Head, Department of French"
                    },
                    {
                        name: "Dr. A. V. Jhone Verjhula",
                        description: "Member",
                        description2: "Associate Professor and Head, Department of Physics"
                    },
                    {
                        name: "Dr. R. Karpagam",
                        description: "Member",
                        description2: "Librarian (I/C), Ethiraj College ,General Library"
                    }
                ]
            }
        }
    ]


    const AcademicAuditCommittee = [
        {
            heading: "Academic Audit Committee",
            additional_data: {
                card_design: [
                    {
                        name: "Dr. S. Uma Gowrie",
                        description: "Chairperson",
                        description2: "Principal & Secretary, Ethiraj College for Women (Autonomous)"
                    },
                    {
                        name: "Tmt. Beulah Jebakumari Suganthi",
                        description: "Convener",
                        description2: "Vice Principal & Head, Department of Corporate Secretaryship"
                    },
                    {
                        name: "Dr. M. Jeyanthi",
                        description: "Member",
                        description2: "Vice Principal (SS), Head, Department of B.Com (A&F)"
                    },
                    {
                        name: "Dr. R. K. Maya",
                        description: "Member",
                        description2: "Controller of Examinations"
                    },
                    {
                        name: "Dr. A. S. Gayathri",
                        description: "Member",
                        description2: "Dean of Academics (Aided)"
                    },
                    {
                        name: "Dr. Ms. K. Geetha",
                        description: "Member",
                        description2: "Dean of Academics (Self Supporting)"
                    },
                    {
                        name: "Dr. R. Prabha",
                        description: "Member",
                        description2: "IQAC Coordinator"
                    },
                    {
                        name: "Dr.  M. Linnett Naveena",
                        description: "Member",
                        description2: "IQAC Coordinator"
                    }
                ]
            }
        }
    ]


    const StudentWelfareCommittee = [
        {
            heading: "Student Welfare Committee",
            additional_data: {
                card_design: [
                    {
                        name: "Dr. S. Uma Gowrie",
                        description: "Chairperson",
                        description2: "Principal & Secretary, Ethiraj College for Women (Autonomous)"
                    },
                    {
                        name: "Tmt. Beulah Jebakumari Suganthi",
                        description: "Member",
                        description2: "Vice Principal & Head, Department of Corporate Secretaryship"
                    },
                    {
                        name: "Dr. M. Jeyanthi",
                        description: "Member",
                        description2: "Vice Principal (SS), Head, Department of B.Com (A&F)"
                    },
                    {
                        name: "Dr. S. Malini",
                        description: "Member",
                        description2: "Dean of Students (Aided)"
                    },
                    {
                        name: "Dr. N. Renuka Devi",
                        description: "Member",
                        description2: "Dean of Academics (Self Supporting)"
                    },
                    {
                        name: "Selvi. J. Anbu Selvi",
                        description: "Member",
                        description2: "Deputy Warden"
                    },
                    {
                        name: "Tmt. Gomathy",
                        description: "Member",
                        description2: "Placement Officer"
                    },
                    {
                        name: "Selvi. Vanitha Raj W",
                        description: "Member",
                        description2: "Student Counsellor"
                    },
                    {
                        name: "Tmt. A. Tamilselvi",
                        description: "Member",
                        description2: "Superintendent (Office)"
                    }
                ]
            }
        }

    ]


    const ExtraCurricularActivitiesCommittee = [
        {
            heading: "Extra Curricular Activities Committee",
            additional_data: {
                card_design: [
                    {
                        name: "Dr. S. Uma Gowrie",
                        description: "Chairperson",
                        description2: "Principal & Secretary, Ethiraj College for Women (Autonomous)"
                    },
                    {
                        name: "Tmt. Beulah Jebakumari Suganthi",
                        description: "Convener",
                        description2: "Vice Principal & Head, Department of Corporate Secretaryship"
                    },
                    {
                        name: "Dr. M. Jeyanthi",
                        description: "Member",
                        description2: "Vice Principal (SS), Head, Department of B.Com (A&F)"
                    },
                    {
                        name: "Dr. S. Malini",
                        description: "Member",
                        description2: "Dean of Students (Aided)"
                    },
                    {
                        name: "Dr. N. Renuka Devi",
                        description: "Member",
                        description2: "Dean of Academics (Self Supporting)"
                    },
                    {
                        name: "Dr. S. Deepa Rani",
                        description: "Member",
                        description2: "Lieutenant - National Cadet Corps"
                    },
                    {
                        name: "Dr. K. Anjalai",
                        description: "Member",
                        description2: "Programme Officer - National Service Scheme"
                    },
                    {
                        name: "Dr. C. Umadevi",
                        description: "Member",
                        description2: "Director of Physical Education"
                    },
                    {
                        name: "Dr. Sofiya Azad",
                        description: "Member",
                        description2: "Convener - Youth Red Cross"
                    },
                    {
                        name: "Tmt. L. Rajarajeshwari",
                        description: "Member",
                        description2: "Convener - Red Ribbon Club"
                    },
                    {
                        name: "Dr.P. Asha (Aided) &  Dr. S. Narmatha (SS)",
                        description: "Member",
                        description2: "Convener - Community Service Scheme"
                    },
                    {
                        name: "Tmt. A. J. Jemima Malathy & Ms. B. Priyanka",
                        description: "Member",
                        description2: "Convener - Rotaract"
                    }
                ]
            }
        },
    ]


    const HostelCommittee = [
        {
            heading: "Hostel Committee",
            additional_data: {
                card_design: [
                    {
                        name: "Dr. S. Uma Gowrie",
                        description: "Chairperson",
                        description2: "Principal & Secretary, Ethiraj College for Women (Autonomous)"
                    },
                    {
                        name: "Dr. M. Jeyanthi",
                        description: "Member",
                        description2: "Vice Principal (SS), Head, Department of B.Com (A&F)"
                    },
                  
                    {
                        name: "Dr. S. Priya",
                        description: "Member",
                        description2: "Assistant Professor, Department of Plant Biology and Plant Biotechnology"
                    },
                    
                    {
                        name: "Dr. M. Menaka",
                        description: "Member",
                        description2: "Associate Professor, Department of Clinical Nutrition and Dietetics"
                    },
                      {
                        name: "Ms. B. Chitra",
                        description: "Deputy Warden (Student Welfare)",
                        description2: "Associate Professor, Department of English"
                    },
                    {
                        name: "Selvi. A. Anbuselvi",
                        description: "Member",
                        description2: "Deputy Warden (Establishment)"
                    },
                    {
                        name: "Tmt. Devianai",
                        description: "Member",
                        description2: "Deputy Warden (Mess)"
                    }
                ]
            }
        }
    ]
    // Function to get dates by section_name
    const getDatasBySectionName = (sectionName) => {
        return (
            getAllIQACSectionsBySectionName?.data?.filter(
                (section) => section?.section_name === sectionName
            ) || []
        );
    };

    const PlanningAndEvaluationCommitteeDatas = getAllIQACSectionsBySectionName?.data
        ? getDatasBySectionName("PlanningAndEvaluationCommittee section")
        : [];

    const AdmissionCoreCommitteeDatas = getAllIQACSectionsBySectionName?.data
        ? getDatasBySectionName("AdmissionCoreCommittee section")
        : [];



    const ExaminationCommitteeDatas = getAllIQACSectionsBySectionName?.data
        ? getDatasBySectionName("ExaminationCommittee section")
        : [];



    const LibraryCommitteeDatas = getAllIQACSectionsBySectionName?.data
        ? getDatasBySectionName("LibraryCommittee section")
        : [];



    const AcademicAuditCommitteeDatas = getAllIQACSectionsBySectionName?.data
        ? getDatasBySectionName("AcademicAuditCommittee section")
        : [];



    const StudentWelfareCommitteeDatas = getAllIQACSectionsBySectionName?.data
        ? getDatasBySectionName("StudentWelfareCommittee section")
        : [];



    const ExtraCurricularActivitiesCommitteeDatas = getAllIQACSectionsBySectionName?.data
        ? getDatasBySectionName("ExtraCurricularActivitiesCommittee section")
        : [];



    const HostelCommitteeDatas = getAllIQACSectionsBySectionName?.data
        ? getDatasBySectionName("HostelCommittee section")
        : [];




    return (
        <Box>
            <BannerSection bannerDatas={bannerDatas} />

            <Box sx={{ mt: 4, mb: 6, px: { xs: 2, sm: 3, md: "74px", lg: "94px" } }}>
                {/* Breadcrumbs */}


                {/* About Section */}

                <Grid
                    container
                    spacing={4}
                    sx={{ mt: { lg: "63px", md: "50px", xs: "30px" } }}
                >
                    <Grid size={{ xs: 12, md: 3.5 }} sx={{
                        position: { md: "sticky", xs: "static" },
                        top: "100px",
                        alignSelf: "flex-start",
                    }}>
                        <SectionNavigation />
                    </Grid>

                    <Grid size={{ xs: 12, md: 8.5 }}>
                        <Grid container>
                            {(PlanningAndEvaluationCommitteeDatas?.length > 0 ? PlanningAndEvaluationCommitteeDatas : PlanningAndEvaluationCommittee)?.map((section, idx) => (
                                <SectionAccordion
                                    key={idx}
                                    title={section.heading}
                                    heading={section.additional_data?.heading}
                                    sub_heading={section.additional_data?.sub_heading}
                                    content={section.additional_data?.content}
                                    rows={section.additional_data?.card_design}
                                    nameComponent={true}
                                />
                            ))}
                        </Grid>

                        <Grid container>
                            {(ExaminationCommitteeDatas?.length > 0 ? ExaminationCommitteeDatas : ExaminationCommittee)?.map((section, idx) => (
                                <SectionAccordion
                                    key={idx}
                                    title={section.heading}
                                    rows={section.additional_data?.card_design}
                                    nameComponent={true}
                                />
                            ))}
                        </Grid>

                        <Grid container>
                            {(AdmissionCoreCommitteeDatas?.length > 0 ? AdmissionCoreCommitteeDatas : AdmissionCoreCommittee)?.map((section, idx) => (
                                <SectionAccordion
                                    key={idx}
                                    title={section.heading}
                                    rows={section.additional_data?.card_design}
                                    nameComponent={true}
                                />
                            ))}
                        </Grid>



                        


                        <Grid container>
                            {(LibraryCommitteeDatas?.length > 0 ? LibraryCommitteeDatas : LibraryCommittee)?.map((section, idx) => (
                                <SectionAccordion
                                    key={idx}
                                    title={section.heading}
                                    rows={section.additional_data?.card_design}
                                    nameComponent={true}
                                />
                            ))}
                        </Grid>


                        <Grid container>
                            {(AcademicAuditCommitteeDatas?.length > 0 ? AcademicAuditCommitteeDatas : AcademicAuditCommittee)?.map((section, idx) => (
                                <SectionAccordion
                                    key={idx}
                                    title={section.heading}
                                    rows={section.additional_data?.card_design}
                                    nameComponent={true}
                                />
                            ))}
                        </Grid>


                        <Grid container>
                            {(StudentWelfareCommitteeDatas?.length > 0 ? StudentWelfareCommitteeDatas : StudentWelfareCommittee)?.map((section, idx) => (
                                <SectionAccordion
                                    key={idx}
                                    title={section.heading}
                                    rows={section.additional_data?.card_design}
                                    nameComponent={true}
                                />
                            ))}
                        </Grid>


                        <Grid container>
                            {(ExtraCurricularActivitiesCommitteeDatas?.length > 0 ? ExtraCurricularActivitiesCommitteeDatas : ExtraCurricularActivitiesCommittee)?.map((section, idx) => (
                                <SectionAccordion
                                    key={idx}
                                    title={section.heading}
                                    rows={section.additional_data?.card_design}
                                    nameComponent={true}
                                />
                            ))}
                        </Grid>

                        <Grid container>
                            {(HostelCommitteeDatas?.length > 0 ? HostelCommitteeDatas : HostelCommittee)?.map((section, idx) => (
                                <SectionAccordion
                                    key={idx}
                                    title={section.heading}
                                    rows={section.additional_data?.card_design}
                                    nameComponent={true}
                                />
                            ))}
                        </Grid>


                    </Grid >
                </Grid >
            </Box >
        </Box >
    );
};

export default NonStatuoryBody;
