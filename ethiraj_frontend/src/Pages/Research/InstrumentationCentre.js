
import { Instagram } from "@mui/icons-material";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import actions from "../../ReduxStore/actions";
import InstrumentationCentreBanner from "./InstrumentationCentreBanner";
import InstrumentList from "./InstrumentList";
import CustomInstrumentListComponet from "../../Components/CustomInstrumentListComponet/CustomInstrumentListComponet";
import BookanInstrument from "./BookanInstrument";
import facilityImage1 from "../../Assets/research_image3.jpg";
import facilityImage2 from "../../Assets/research21.jpg";
import facilityImage3 from "../../Assets/researchHome3.jpg";
import CustomGallerySildeShow from "../../Components/CustomGallerySildeShow/CustomGallerySildeShow";
import ImageGallerySection2 from "../../Components/CustomGallerySildeShow/ImageGallerySection2";

const InstrumentationCentre = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const { getAllResearchSections } = useSelector(
        (state) => state?.getAllResearchSections,
    );

    console.log(getAllResearchSections, "getAllResearchSections FellowshipsAndProjects");

    useEffect(() => {
        const fetchData = async () => {
            const data1 = {
                data: {},
                method: "get",
                apiName: "getAllResearchSections/InstrumentationCentre Page",
            };

            // setLoading(true); // Set loading to true when the request starts
            await dispatch(actions.GETALLRESEARCHSECTIONS(data1));
            // setLoading(false); // Set loading to false after data is fetched
        };
        fetchData();
    }, [dispatch]);

    // Function to get dates by section_name
    const getDatasBySectionName = (sectionName) => {
        return (
            getAllResearchSections?.data?.filter(
                (section) => section?.section_name === sectionName,
            ) || []
        );
    };


    const bookInstrumentDatas = getAllResearchSections?.data
        ? getDatasBySectionName("BookInstrument section")
        : [];

    useEffect(() => {
        const requestedTarget = location.state?.scrollTo;
        if (!requestedTarget) {
            return;
        }

        let attempts = 0;
        const maxAttempts = 15;

        const tryScroll = () => {
            const targetElement = document.getElementById(requestedTarget);
            if (!targetElement) {
                return false;
            }

            const headerOffset = window.innerWidth < 900 ? 130 : 170;
            const top =
                targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;

            window.scrollTo({ top, behavior: "smooth" });
            return true;
        };

        if (tryScroll()) {
            return;
        }

        const timer = window.setInterval(() => {
            attempts += 1;
            if (tryScroll() || attempts >= maxAttempts) {
                window.clearInterval(timer);
            }
        }, 120);

        return () => window.clearInterval(timer);
    }, [location, getAllResearchSections?.data?.length]);

    console.log(bookInstrumentDatas, "bookInstrumentDatas");

    const Data1 = [
        "Mini Protean",
        "Microplate Absorbance Reader",
        "Laminar Air Flow",
        "Orbital Shaker",
        "Gel Documentation System",
        "Cyclic Voltmeter",
        "CO₂ Incubator",
        "Real-Time PCR",
        "HPTLC"
    ];


    const Data2 = [
        "SHIMADZU UV-VIS SPECTROMETER",
        "QUARTZ CELL",
        "RESEARCH MICRO SCOPE BINOCULAR VERSION WITHIN BUILT 6 V-20W",
        "MAXI HORIZONTAL ELECTROPHORESIS FIELD TANK",
        "VERTICAL GEL ELECTROPHORESIS TRANS ILLUMINATOR POWER PACK",
        "TABLE TOP HIGH SPEED COOLING CENTRIFUGE",
        "ROTOR HEAD",
        "SERVO CONTROLLED VOLTAGE STABILIZER",
        "HAEMOCYTO METER",
        "AGROSE GEL TEACHING KIT",
        "OLYMPUS SPRES",
        "OLYMPUS SPRES",
        "ROTOR HEAD XI PLAN (2007-2012)",
        "OLYMPUS SPRES",
        "ELECTRONIC DIGITAL 26.03.2013 /PF-1/1001 INSTRUMENTATION CENTRE SCIENTIFIC ADVANCE PVT LTD UGCCPE GRANT XII PLAN",
        "SPIN COATING SYSTEM",
        "DIGITAL BOMB CALORIMETER",
        "LYOPHILISER",
        "ROTARY VACUUM FLASK EVAPORATOR 29.01.2016 / TI-9671/JSGWU/UGCCPE GRANT SILICON WASHES FOR CONDENSER/UGCCPE GRANT OIL SEAL RUBBER FLASK, VACUUM PUMP",
        "VPLP2 ULTRASONIC PROCESSOR",
        "ADVANCE RESEARCH TRINCULAR (LED)",
        "DELL COMPUTER, PRINTER",
        "VISCOMETER DIGITAL ULTRA LOW ADOPTER",
        "ELECTRICAL HIGH TEMPERATURE",
        "TABLE TOP ULTERA SONIC",
        "AIR CONDITIONER XII PLAN (2007-2012)",
        "Cary eclios bundle includes win",
        "ELECTRONIC DIGITAL"
    ];

    const Data3 = [
        "Instrument name 01",
        "Instrument name 01",
        "Instrument name 01",
        "Instrument name 01",
        "Instrument name 01",
        "Instrument name 01",
    ]

    const Images = [
        {
            title: "img1",
            img: facilityImage3,

        },
        {
            title: "img2",
            img: facilityImage2,
        },
        {
            title: "img3",
            img: facilityImage1,

        },
    ];

    return (

        <Box>
            <InstrumentationCentreBanner />
            <InstrumentList />
            <CustomInstrumentListComponet listOfData={Data1} />
            <Box id="ugc-funded-instruments">
                <CustomInstrumentListComponet listOfData={Data2} title={"UGC Funded Instruments"} />
            </Box>
            {/* <CustomInstrumentListComponet listOfData={Data3} title={"Other Research Instruments"} /> */}
            <Box
                id="ourstory"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
                    // py: { lg: "72px", md: "60px", xs: "20px", sm: "50px" },
                }}
            >
                <ImageGallerySection2 images={Images} />
            </Box>
            <BookanInstrument bookInstrumentDatas={bookInstrumentDatas} />
        </Box>
    );
};

export default InstrumentationCentre;
