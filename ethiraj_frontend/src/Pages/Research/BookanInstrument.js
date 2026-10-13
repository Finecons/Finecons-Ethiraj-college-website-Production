import {
    Box, Container, Grid, Paper, Typography, Divider,
    Button,
    Stack,
} from "@mui/material";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
// import downloadPdfIconImage from "../../../Assets/downloadpdfIconImage.png";
 
import downloadPdfIconImage from "../../Assets/downloadpdfIconImage.png";
 
 
 
const StepSection = ({ title, step1Text, step2Text, downloadUrl }) => {
    return (
        <Box sx={{ mb: 6 }}>
            {/* Title */}
            {title && (
                <Typography

                    variant="subTextInterMedium"

                >
                    {title}
                </Typography>
            )}

            <br />
            <br />
            {/* Steps Container */}
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={4}
                alignItems="flex-start"
            >
                {/* Step 1 */}
                <Box sx={{ width: { xs: "100%", md: "40%" } }}>
                    <Typography
                        variant="headingTextNewsreaderMedium"
                        sx={{
                            // fontFamily: "Newsreader",
                            fontWeight: 400,
                            // fontStyle: "normal", // Regular
                            // fontSize: "45px",
                            // lineHeight: "100%",
                            // letterSpacing: "0%",

                            mb: 1,

                        }}
                    >
                        Step 01
                    </Typography>
                    <br />
                    <Typography variant="typographySubheadingText"
                    // sx={{
                    //     fontFamily: "Inter",
                    //     fontWeight: 400,
                    //     fontStyle: "normal", // Regular
                    //     fontSize: "24px",
                    //     lineHeight: "100%",
                    //     letterSpacing: "0%",


                    // }}
                    >{step1Text}</Typography>
                    <br />
                    <br />
                    {/* <Typography
                        sx={{
                            fontSize: "14px",
                            color: "#555",
                            mb: 2,
                        }}
                    >
                        {step1Text}
                    </Typography> */}

                    {/* <Button
                        variant="outlined"
                        startIcon={<DownloadIcon />}
                        sx={{
                            borderRadius: "20px",
                            textTransform: "none",
                            fontSize: "12px",
                            px: 2,
                        }}
                    >
                        Download Instrument Wage Form
                    </Button> */}

                    <Button
                        component="a"
                        href={downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        //   onClick={() => {
                        //     handledownloadFile(pdf_url);
                        //   }}
                        startIcon={<Box component="img" src={downloadPdfIconImage} />}
                        sx={{
                            //   mt: 2,
                            textTransform: "none",
                            borderRadius: "24px",
                            borderColor: "#000",
                            color: "#000",
                            // mt: { lg: "80px", md: "40px" },
                        }}
                    >
                        <Typography
                            variant="typographyBodyInterNormal"
                            sx={{ fontSize: "14px !important" }}
                        >
                            {/* {syllabus.buttonText} */}
                            Download Instrument Wage Form
                        </Typography>
                    </Button>
                </Box>
 
                {/* Divider */}
                <Divider
                    orientation={{ xs: "horizontal", md: "vertical" }}
                    flexItem
                    sx={{
                        borderColor: "#868E96",
                        display: { xs: "none", md: "block" }
                    }}
                />
 
                {/* Step 2 */}
                <Box sx={{ width: { xs: "100%", md: "40%" } }}>
                    <Typography
                        variant="headingTextNewsreaderMedium"
 
                        sx={{
                            // fontFamily: "Newsreader",
                            fontWeight: 400,
                            // fontStyle: "normal", // Regular
                            // fontSize: "45px",
                            // lineHeight: "100%",
                            // letterSpacing: "0%",
                            mb: 1,
 
 
                        }}
                    >
                        Step 02
                    </Typography>
                    <br />
 
                    <Typography variant="typographySubheadingText"
                    //  sx={{
                    //     fontFamily: "Inter",
                    //     fontWeight: 400,
                    //     fontStyle: "normal", // Regular
                    //     fontSize: "24px",
                    //     lineHeight: "100%",
                    //     letterSpacing: "0%",
 
                    // }}
                    >{step2Text}</Typography>
                    <br /><br />
                    {/* <Typography
                        sx={{
                            fontSize: "14px",
                            color: "#555",
                        }}
                    >
                        {step2Text}
                    </Typography> */}
                </Box>
                <Divider
                    orientation={{ xs: "horizontal", md: "vertical" }}
                    flexItem
                    sx={{
                        borderColor: "#868E96",
                        display: { xs: "none", md: "block" }
                    }}
                />
            </Stack>
        </Box>
    );
};
 
const BookanInstrument = ({ bookInstrumentDatas }) => {
  console.log(bookInstrumentDatas, "bookInstrumentDatas");

  // Extract URLs from API data
  const facultyUrl = bookInstrumentDatas?.[0]?.additional_data?.faculty || "#";
  const externalResearchersUrl = bookInstrumentDatas?.[0]?.additional_data?.students_external_researchers || "#";

  const description =
    [
      "The facility is accessible to faculty members, researchers, students, and external users, subject to availability and institutional guidelines.",
      "The Instrument Usage (Wage) Form is designed to facilitate the systematic booking and regulated use of research instruments available at the Research Centre.",
    ];
    return (
        <div>
            <Box
                id="reserve-an-instrument"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
                    py: { lg: "72px", md: "60px", xs: "20px", sm: "50px" },
                }}
            >
 
 
                <Paper
                    elevation={0}
                    sx={{
                        // px: { lg: "36px", md: "28px", xs: "16px", sm: "30px" },
                        background: "none",
                    }}
                >
 
                    {/* <Typography variant="primaryHeadingText" sx={{ mb: { xs: "32px", sm: "24px", md: "24px" } }}  >About ECRIC</Typography> */}
                    <Typography
                        variant="headingTextNewsreaderMedium"
                        id="about-section"
                        // fontWeight="bold"
                        // gutterBottom
                        // sx={{mb:2}}
                        sx={{ mb: { xs: "32px", sm: "24px", md: "24px" } }}
                    >
                        Book an Instrument
                    </Typography>
 
 
 
                    <Grid container spacing={6}>
                        {/* Left Column */}
 
                        {/* Right Column */}
                        <Grid item size={{ xs: 12 }}>
                            {description.map((text, index) => (
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
                    </Grid>
                    <br />
 
                    {/* <Typography
 
                        variant="subTextInterMedium"
 
                    >
                        For Faculty & Students of Ethiraj College or Women
                    </Typography> */}
                    {/* <br />
                    <br /> */}
                    <Box
                        sx={{
                            background: "none",
                        }}
                    >
                        {/* First Section */}
                        <StepSection
                            title="For Faculty & Students of Ethiraj College or Women"
                            step1Text="Print & Fill in the Instrument Wage Form attached below."
                            step2Text="Submit the Form at the ECRIC Instrumentation Centre Block second floor."
                            downloadUrl={facultyUrl}
                        />

                        {/* Second Section */}
                        <StepSection
                            title="For External Researchers"
                            step1Text="Print & Fill in the Instrument Wage Form attached below."
                            step2Text="Submit the Form at the ECRIC Instrumentation Centre Block second floor 3-5 days before the required day of usage for approvals from the authorities."
                            downloadUrl={externalResearchersUrl}
                        />
                    </Box>

                </Paper>




            </Box>



        </div>
    );
};

export default BookanInstrument;
 