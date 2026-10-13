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

const StatuoryBody = () => {

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
        { name: "Statutory Body", to: "/aboutus/statutorybody" },
        // { name: courseData?.title },
    ];

    const bannerDatas = []


    const GoverningBody = [
        {
            heading: "Governing Body",
            additional_data: {
                heading: "Ref: F. No.1-18/2021(CPP-II), dated: 03.04.2023",
                sub_heading: "University Grants Commission",
                content:
                    "The Governing Body Committee is constituted as below, by, Chairman, Ethiraj College for Women, for a tenure of two academic years, i.e; 2025-26 and 2026-27, as per the “Conferment of Autonomous Status upon Colleges and Measures for Maintenance of Standards in Autonomous Colleges) Regulations 2023” issued by the University Grants Commission.",
                card_design: [
                    { name: "Thiru. V. M. Muralidharan", description: "Chairman, Board of Trustees, Ethiraj College Trust" },
                    { name: "Thiru. R. Chandrasekar", description: "Financial Trustee, Ethiraj College Trust" },

                    { name: "Dr. M. Sekar", description: "Member, Ethiraj College Trust" },
                    { name: "Padma Bhushan Dr A. Sivathanu Pillai", description: "Member, Ethiraj College Trust" },

                    { name: "Dr. Geetha Lakshmipathy", description: "Member, Ethiraj College Trust" },
                    { name: "Dr. S.S Sundaram", description: "Professor & Head, Department of History,University Representative, University of Madras" },

                    { name: "Dr. Tmt. S. Uma Gowrie", description: "Principal & Secretary" },
                    { name: "Dr. K. Sudarkodi", description: "State Government Official - RJD Chennai Region" },

                    { name: "Prof. Dr.  V. Uma Maheswari", description: "External, Member of Governing Body " },
                    { name: "Dr. Tmt. D.B. Usharani", description: "Associate Professor & Head, Member of College Commitee" },

                    { name: "Maj. Dr. Tmt. R. Shanthini", description: "Associate Professor, Member of College Commitee" },
                    { name: "Tmt A. Tamilselvi", description: "Superintendent, Administrative Officer" }
                ],
            },
        },
    ];



    const CollegeCommittee = [
        {
            heading: "College Committee",
            additional_data: {
                card_design: [
                    { name: "Thiru. V. M. Muralidharan", description: "Chairman" },
                    { name: "Thiru. R. Chandrasekar", description: "Financial Trustee" },

                    { name: "Dr. M. Sekar", description: "Member" },
                    { name: "Padma Bhushan Dr. A. Sivathanu Pillai", description: "Member" },

                    { name: "Dr. Geetha Lakshmipathy", description: "Member" },
                    { name: "Dr. S. S. Sundaram", description: "Professor & Head, Department of History,University Representative, University of Madras" },

                    { name: "Dr. Tmt. S. Uma Gowrie", description: "Principal & Secretary" },
                    { name: "Dr. Tmt. D. B. Usharani", description: "Staff Representative" },

                    { name: "Maj. Dr. Tmt. R. Shanthini", description: "Staff Representative" },

                ]
            }
        }
    ];


    const AcademicCouncil = [
        {
            heading: "Academic Council",
            additional_data: {
                card_design: [
                    { name: "Dr. S. Uma Gowrie", description: "Principal (Chairperson) ", description2: "Principal & Secretary, Ethiraj College for Women (Autonomous)" },
                    { name: "Dr. S. Armstrong", description: "University Nominee ", description2: "Professor, Department of English, University of Madras, Chepauk, Chennai – 600 005" },

                    { name: "Dr. S. Prakash", description: "University Nominee ", description2: "Professor & Head, Department of Anatomy, University of Madras, Taramani Campus, Chennai – 600 113" },
                    { name: "Dr. P. Kalaiselvi", description: "University Nominee ", description2: "Professor Head, Department of Medical Biochemistry, University of Madras, Taramani, Chennai – 600 025" },

                    { name: "Ms. Geetha Sriram", description: "External Expert ", description2: "FM, Managing Partner - Enterprise Agility Consulting & LS, Tata Consultancy Services" },
                    { name: "Ms. Gitanjali Venkatesh", description: "External Expert ", description2: "Head of Talent Acquisition, Excellencia" },

                    { name: "Mr. G. R. Hari", description: "External Expert ", description2: "Partner, Manohar Chowdhry & Associates, Chartered Accountants" },
                    { name: "Dr. R. Ravindhran", description: "External Expert ", description2: "UGC Research Awardee, Former IQAC Coordinator,Associate Professor, Department of Plant Biology & Biotechnology, Loyola College (Autonomous), Chennai 600 034, " },

                    { name: "Dr. R. K. Maya", description: "Controller of Examinations", description2: "Controller of Examinations, Ethiraj College for Women (Autonomous)" },
                    { name: "Tmt. Beulah Jebakumari Suganthi", description: "Member Secretary ", description2: "Vice-Principal & Academic Council Secretary" },

                    { name: "Dr. B. Shyamala", description: "Faculty Representative", description2: "Associate Professor, Department of Economics" },
                    { name: "Dr. S. Sudha Parimala", description: "Faculty Representative ", description2: "Associate Professor, Department of Chemistry" },

                    { name: "Dr. M. Annapoorni", description: "Faculty Representative ", description2: "Associate Professor, Department of Commerce" },
                    { name: "Dr. Jayalakshmi Pandian", description: "Faculty Representative ", description2: "Associate Professor, Department of MBA" },

                    { name: "Heads of Departments (Aided)", description: "" },
                    { name: "Heads of Departments (Self Supporting)", description: "" }

                ]
            }
        }
    ];




    const FinanceCommittee = [{
        heading: "Finance Committee",
        description: "Composition of Finance Committee as per University Grants Commission Regulations 2023,Dated : 3rd April 2023",
        additional_data: {
            card_design: [
                { name: "Dr. S. Uma Gowrie", description: "Principal & Secretary",description2: "The Principal (Chairperson of finance commitee)" },
                { name: "Thiru. R. Chandrasekar", description: "Financial Trustee",description2:"One person to be nominated by the Governing Body of the Autonomous College for a period of two years" },

                { name: "Dr. Tmt. D. B. Usharani", description: "Associate Professor & Head, Department of Economics & Senior Staff Representative",description2 :"One senior –most faculty member of the Autonomous College to be nominated in rotation by the Principal for two years"},
                { name: "Mr. D. Sankar", description: "Finance Officer", description2: "Finance Officer / Officer in-charge of Finance and Accounts of the Autonomous College (Member Secretary)" },
            ]
        }
    }]
    const BoardOfStudies = [{
        heading: "Board of Studies",
        additional_data: {
            card_design: [
                { name: "Head of the Department", description: "Chairperson" },
                { name: "All Faculty Members of the Department", description: "Members" },

                { name: "Chosen by the Vice Chancellor of the University", description: "University Nominee" },
                { name: "Nominated by the Principal", description: "Subject Experts" },

                { name: "Industry Representative", description: "" },
                { name: "PG Alumna", description: "" },

                { name: "Student Representative", description: "" }
            ]
        }
    }]



    const boardData = [{
        heading: "Board of Studies",
        additional_data: {
            card_design: [
                {
                    
                    category: "Head of the Department",
                    membership: "Chairperson",
                },
                {
                    
                    category: "All Faculty members of the Department",
                    membership: "Members",
                },
                {
                  
                    category: "Chosen by the Vice-Chancellor of the University",
                    membership: "University Nominee",
                },
                {
                   
                    category: "Nominated by the Principal",
                    membership: "Subject Experts",
                },
              
                {
                    
                    category: " ",
                    membership: "Industry representative",
                },
                {
                    
                    category: " ",
                    membership: "UG/PG Alumna",
                },
                {
            
                    category: "",
                    membership: "Student Representative(UG/PG) ",
                },
            ]
        }
    }];


    const HarassmentCommittee = [{
        heading: "Harassment Complaints Committee",
        additional_data: {
            heading: "Ref: Letter (Ms) No.121, dated: 22.06.2018",
            sub_heading: "Higher Education (K2) Department, Government of Tamil Nadu",
            content:
                "The Harassment Complaints Committee is constituted as below, by Dr. S. Uma Gowrie, Principal & Secretary, Ethiraj College for Women, for a tenure of two academic years, i.e; 2025-26 and 2026-27, as per the “Guidelines to Prevent and Redress Harassment in Higher Educational Institutions in Tamil Nadu” issued by the Higher Education Department, Government of Tamil Nadu",
            bottomContent1: "Any aggrieved person (faculty/staff/student) shall make a written complaint, with all evidences/complaints, directly to the Chairperson, Harassment Complaints Committee.",
            bottomContent2: "The said guidelines may be referred for the procedure.",
            card_design: [
                { name: "Tmt. Beulah Jebakumari Suganthi", description: "Chairperson (Senior Faculty),Vice Principal",description2:"Head, Department of Corporate Secretaryship" },
                { name: "Dr. P. Muthu Meenakshi", description: "Member, (Associate Professor)",description2:"Associate Professor & Head, Department of Nutrition,Food Service Management & Dietetics" },

                { name: "Dr. P. Nirmala", description: "Member, (Assistant Professor)",description2:"Assistant Professor & Head, Department of Tamil" },
                { name: "N/A", description: "Member,(Women Faculty)",description2:"As all members are women" },

                { name: "Advocate", description: "Member, (External Member with Legal Background)" },
                { name: "Dr. M. Annapoorni", description: "Observer (SC/ST/BC)",description2:"Associate Professor, Department of Commerce" }
            ]
        }
    }]


    // Function to get dates by section_name
    const getDatasBySectionName = (sectionName) => {
        return (
            getAllIQACSectionsBySectionName?.data?.filter(
                (section) => section?.section_name === sectionName
            ) || []
        );
    };

    const StatuoryBodyGoverningBodyDatas = getAllIQACSectionsBySectionName?.data
        ? getDatasBySectionName("StatuoryBodyGoverning section")
        : [];

    const StatuoryCollegeCommittee = getAllIQACSectionsBySectionName?.data
        ? getDatasBySectionName("StatuoryCollegeCommittee section")
        : [];



    const StatuoryFinanceCommittee = getAllIQACSectionsBySectionName?.data
        ? getDatasBySectionName("StatuoryFinanceCommittee section")
        : [];



    const StatuoryBoardOfStudies = getAllIQACSectionsBySectionName?.data
        ? getDatasBySectionName("StatuoryBoardOfStudies section")
        : [];

    const StatuoryHarassmentCommittee = getAllIQACSectionsBySectionName?.data
        ? getDatasBySectionName("StatuoryHarassmentCommittee section")
        : [];



    const StatuoryAcademicCouncil = getAllIQACSectionsBySectionName?.data
        ? getDatasBySectionName("StatuoryAcademicCouncil section")
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
                            {(StatuoryBodyGoverningBodyDatas?.length > 0 ? StatuoryBodyGoverningBodyDatas : GoverningBody)?.map((section, idx) => (
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
                            {(StatuoryCollegeCommittee?.length > 0 ? StatuoryCollegeCommittee : CollegeCommittee)?.map((section, idx) => (
                                <SectionAccordion
                                    key={idx}
                                    title={section.heading}
                                    rows={section.additional_data?.card_design}
                                    nameComponent={true}
                                />
                            ))}
                        </Grid>



                        <Grid container>
                            {(StatuoryAcademicCouncil?.length > 0 ? StatuoryAcademicCouncil : AcademicCouncil)?.map((section, idx) => (
                                <SectionAccordion
                                    key={idx}
                                    title={section.heading}
                                    rows={section.additional_data?.card_design}
                                    nameComponent={true}
                                />
                            ))}
                        </Grid>




                        <Grid container>
                            {(StatuoryFinanceCommittee?.length > 0 ? StatuoryFinanceCommittee : FinanceCommittee)?.map((section, idx) => (
                                <SectionAccordion
                                    key={idx}
                                    title={section.heading}
                                    content={section?.description}
                                    rows={section.additional_data?.card_design}
                                    nameComponent={true}
                                />
                            ))}
                        </Grid>

                        <Grid container>
                        {(StatuoryBoardOfStudies?.length > 0 ? StatuoryBoardOfStudies : boardData)?.map((section, idx) => (
                            <SectionAccordion
                                key={idx}
                                title={section.heading}
                                rows={section.additional_data?.card_design}
                                nameComponent={true}
                                tabledesign={true}
                            />
                        ))}



                    </Grid>

                    <Grid container>
                        {(StatuoryHarassmentCommittee?.length > 0 ? StatuoryHarassmentCommittee : HarassmentCommittee)?.map((section, idx) => (
                            <SectionAccordion
                                key={idx}
                                title={section.heading}
                                heading={section.additional_data?.heading}
                                sub_heading={section.additional_data?.sub_heading}
                                content={section.additional_data?.content}
                                bottomContent1={section.additional_data?.bottomContent1}
                                bottomContent2={section.additional_data?.bottomContent2}
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

export default StatuoryBody;
