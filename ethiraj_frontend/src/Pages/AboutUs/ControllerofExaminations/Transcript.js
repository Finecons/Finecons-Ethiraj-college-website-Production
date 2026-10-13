import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import BannerSection from "./CustomBannerSection";
import bannerimage from "../../../Assets/ControllerofExaminationsBannerImage.jpg";
import downloadPdfIconImage from "../../../Assets/downloadpdfIconImage.png";
import transscriptPdf from "../../../Assets/Transcript-procedure-and-form-.pdf";

const Transcript = () => {
  const dispatch = useDispatch();

  const { getAllIQACSectionsBySectionName } = useSelector(
    (state) => state?.getAllIQACSectionsBySectionName,
  );

  console.log(getAllIQACSectionsBySectionName);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: "getAllIQACSections",
      };

      await dispatch(actions.GETALLIQACSECTIONSBYSECTIONNAME(data1));
    };
    fetchData();
  }, [dispatch]);

  const handledownloadFile = async (pdfUrl) => {
    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch PDF file");
      }
      const blob = await response.blob();

      const fileURL = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = fileURL;
      link.download = "Transcript-procedure-and-form.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(fileURL);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const bannerDatas = {
    title: "Transcripts",
    bannerimage: bannerimage,

    breadcrumbsItems: [
      { name: "Home", to: "/" },
      {
        name: "Controller of Examinations",
        to: "/academics/controllerofexaminations",
      },

      { name: "Transcripts" },
    ],
  };

  // Function to get dates by section_name
  const getDatasBySectionName = (sectionName) => {
    return (
      getAllIQACSectionsBySectionName?.data?.filter(
        (section) => section?.section_name === sectionName,
      ) || []
    );
  };

  return (
    <Box>
      <BannerSection bannerDatas={bannerDatas} />

      <Box sx={{ mt: 4, mb: 6, px: { xs: 2, sm: 3, md: "74px", lg: "94px" } }}>
        {/* Title and Description */}
        <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 2 }}>
          Transcripts
        </Typography>
        <Typography variant="typographyBodyInterNormal" sx={{ mb: 6 }}>
          Students / Alumnae applying for Official Transcripts are requested to
          follow the steps given below:
        </Typography>

        {/* Two Column Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {/* Left Column - Application Process */}
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{
              paddingRight: { md: 3 },
              borderRight: { xs: "none", md: "1px solid #656060" },
            }}
          >
            <Typography variant="subHeadingTextInterMedium" sx={{ mb: 3 }}>
              Application Process
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {/* Step 1 */}
              <Box>
                <Typography
                  variant="typographyBodyInterMaintext"
                  sx={{ mb: 1 }}
                >
                  1. Application Form
                </Typography>
                <Typography variant="typographyBodyInterNormal" sx={{}}>
                  Download and print the Transcript Application Form available
                  on the college website, or collect it directly from the Office
                  of the Controller of Examinations (COE).
                </Typography>
              </Box>

              {/* Step 2 */}
              <Box>
                <Typography
                  variant="typographyBodyInterMaintext"
                  sx={{ mb: 1 }}
                >
                  2. Attach Required Document
                </Typography>
                <Typography variant="typographyBodyInterNormal" sx={{}}>
                  Submit a photocopy of the Consolidated Statement of Marks
                  along with the completed application form.
                </Typography>
              </Box>

              {/* Step 3 */}
              <Box>
                <Typography
                  variant="typographyBodyInterMaintext"
                  sx={{ mb: 1 }}
                >
                  3. Department Approval
                </Typography>
                <Typography variant="typographyBodyInterNormal" sx={{}}>
                  Obtain the signature of the Head of the Department on the duly
                  filled application form.
                </Typography>
              </Box>

              {/* Step 4 */}
              <Box>
                <Typography
                  variant="typographyBodyInterMaintext"
                  sx={{ mb: 1 }}
                >
                  4. Payment of Transcript Fee
                </Typography>
                <Typography variant="typographyBodyInterNormal" sx={{}}>
                  Pay the prescribed transcript fee to the relevant bank account
                  mentioned below:
                </Typography>
                <Box sx={{ mt: 2, ml: 2 }}>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ mb: 1 }}
                  >
                    • Bank: Indian Overseas Bank (IOB) – Women Entrepreneur
                    Branch, Ethiraj College
                  </Typography>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ mb: 1 }}
                  >
                    • Fee: ₹2000- per copy of transcript
                  </Typography>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ mb: 1 }}
                  >
                    Account Details:
                  </Typography>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ mb: 1, ml: 1 }}
                  >
                    • Aided – Examination Fee Account No. 1067
                  </Typography>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ ml: 1 }}
                  >
                    • Self-Supporting – Examination Fee Account No. 1175
                  </Typography>
                </Box>
              </Box>

              {/* Step 5 */}
              <Box>
                <Typography
                  variant="typographyBodyInterMaintext"
                  sx={{ mb: 1 }}
                >
                  5. Submission of Application
                </Typography>
                <Typography variant="typographyBodyInterNormal" sx={{}}>
                  Submit the following documents to the Office of the Controller
                  of Examinations:
                </Typography>
                <Box sx={{ mt: 2, ml: 2 }}>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ mb: 1 }}
                  >
                    • Completed Transcript Application Form
                  </Typography>
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ mb: 1 }}
                  >
                    • Original Bank Challan / Proof of Payment
                  </Typography>
                  <Typography variant="typographyBodyInterNormal">
                    • Copy of Consolidated Statement of Marks
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Column - Collection & Verification */}
          <Grid item size={{ xs: 12, md: 6 }} sx={{ paddingLeft: { md: 3 } }}>
            <Typography variant="subHeadingTextInterMedium" sx={{ mb: 3 }}>
              Collection & Verification
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {/* Step 1 */}
              <Box>
                <Typography
                  variant="typographyBodyInterMaintext"
                  sx={{ mb: 1 }}
                >
                  1. Collection of Transcript
                </Typography>
                <Typography variant="typographyBodyInterNormal" sx={{}}>
                  Transcripts must be collected in person by the candidate or by
                  a person authorized in writing by the candidate.
                </Typography>
              </Box>

              {/* Step 2 */}
              <Box>
                <Typography
                  variant="typographyBodyInterMaintext"
                  sx={{ mb: 1 }}
                >
                  2. Verification Requirement
                </Typography>
                <Typography variant="typographyBodyInterNormal" sx={{}}>
                  At the time of issue, the candidate must produce the Original
                  Consolidated Statement of Marks for verification.
                </Typography>
                <Typography variant="typographyBodyInterNormal" sx={{ mt: 2 }}>
                  <strong>Note:</strong> The original consolidated statement of
                  marks must bear the signature of the student.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section - Dispatch and Contact */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {/* Bottom Left - Dispatch of Transcript */}
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{
              paddingRight: { md: 3 },
              borderRight: { xs: "none", md: "1px solid #656060" },
            }}
          >
            <Typography variant="subHeadingTextInterMedium" sx={{ mb: 3 }}>
              Dispatch of Transcript
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography
                  variant="typographyBodyInterMaintext"
                  sx={{ mb: 1 }}
                >
                  1. Postal Dispatch
                </Typography>
                <Typography variant="typographyBodyInterNormal" sx={{}}>
                  Candidates must provide a neatly printed address label of the
                  destination to which the transcript is to be sent.
                </Typography>
                <Typography variant="typographyBodyInterNormal" sx={{ mt: 2 }}>
                  The College will dispatch the transcript through Registered
                  Post with Acknowledgement Due (RPAD) to the address provided.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Bottom Right - Contact Details */}
          <Grid item size={{ xs: 12, md: 6 }} sx={{ paddingLeft: { md: 3 } }}>
            <Typography variant="subHeadingTextInterMedium" sx={{ mb: 3 }}>
              Contact Details
            </Typography>

            <Typography variant="typographyBodyInterNormal" sx={{ mb: 2 }}>
              For any further enquiries email us at
            </Typography>
            <Typography
              variant="typographyBodyInterNormal"
              component="a"
              href="mailto:coethiraj@gmail.com"
              sx={{
                color: "#003BD1",
                cursor: "pointer",
                textDecoration: "underline",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              coe@ethirajcollege.edu.in
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="typographyBodyInterNormal"
              sx={{
                mt: 2,
                color: "#212529",
              }}
            >
              A minimum time period of 20 WORKING DAYS is required for
              preparation and issue of the transcripts. No processing of
              applications for transcripts will be undertaken during the
              examination period.
            </Typography>
          </Grid>
        </Grid>

        {/* Download Form Button */}
        <Box>
          <Button
            onClick={() => handledownloadFile(transscriptPdf)}
            variant="outlined"
            startIcon={<Box component="img" src={downloadPdfIconImage} />}
            // disabled={!syllabus?.pdfUrl}
            sx={{
              //   mt: 2,
              textTransform: "none",
              borderRadius: "24px",
              borderColor: "#000",
              color: "#000",
              mt: { xs: "80px", md: "50px", lg: "80px" },
            }}
          >
            <Typography
              variant="typographyBodyInterNormal"
              sx={{ fontSize: "14px !important" }}
            >
              Download the Form
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Transcript;
