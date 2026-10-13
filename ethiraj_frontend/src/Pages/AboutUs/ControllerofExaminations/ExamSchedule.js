import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../ReduxStore/actions";
import BannerSection from "./CustomBannerSection";
import bannerimage from "../../../Assets/ControllerofExaminationsBannerImage.jpg";

const ExamSchedule = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const { getAllExaminationsSections } = useSelector(
    (state) => state?.getAllExaminationsSections,
  );

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: "getAllExaminationsSections",
      };

      await dispatch(actions.GETALLEXAMINATIONSSECTIONS(data1));
    };
    fetchData();
  }, [dispatch]);

const handleDownloadPdf = (pdfUrl, fileName) => {
  try {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${fileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Download failed:", error);
    alert("Download failed. Please try again.");
  }
};

  const bannerDatas = {
    title: "Exam Schedule",
    bannerimage: bannerimage,
    breadcrumbsItems: [
      { name: "Home", to: "/" },
      {
        name: "Controller of Examinations",
        to: "/academics/controllerofexaminations",
      },
      { name: "Exam Schedule" },
    ],
  };

  // Get cards from API data
  const allCards =
    getAllExaminationsSections?.data?.flatMap(
      (item) => item?.additional_data?.cards || [],
    ) || [];

  // Filter cards based on search term
  const filteredCards = allCards.filter((card) =>
    card?.title?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Box>
      <BannerSection bannerDatas={bannerDatas} />

      <Box sx={{ mt: 4, mb: 6, px: { xs: 2, sm: 3, md: "74px", lg: "94px" } }}>
        {/* Exam Schedule Cards Section */}
        <Box sx={{ mb: 8 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="headingTextNewsreaderMedium">
              Upcoming Exams
            </Typography>
            <TextField
              placeholder="Search"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: "#999" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: { xs: "100%", sm: "200px" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
              }}
            />
          </Box>

          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                size={{ xs: 12 }}
                key={index}
                sx={{
                  py: 2,
                  borderBottom: "1px solid var(--brand-palette-border-strong)",
                  mb: 2,
                  pb: 2,
                }}
              >
                <Grid item size={{ xs: 12, sm: 8 }}>
                  <Typography variant="subHeadingTextInterMedium">
                    {card?.title}
                  </Typography>
                </Grid>

                <Grid
                  item
                  sx={{
                    marginTop: { xs: "15px", sm: "0px" },
                    display: "flex",
                    justifyContent: { xs: "start", sm: "end" },
                    alignItems: "center",
                    gap: 2,
                  }}
                  size={{ xs: 12, sm: 4 }}
                >
                  {card?.pdf && (
                    <Typography
                      variant="typographyBodyInterNormal"
                      component="a"
                      href={card?.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#003BD1",
                        cursor: "pointer",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      View Schedule
                    </Typography>
                  )}

                  {card?.pdf && (
                    <Typography
                      variant="typographyBodyInterNormal"
                      onClick={() => handleDownloadPdf(card?.pdf, card?.title)}
                      sx={{
                        color: "#003BD1",
                        cursor: "pointer",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Download
                    </Typography>
                  )}
                </Grid>
              </Grid>
            ))
          ) : (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography
                variant="typographyBodyInterNormal"
                sx={{ color: "#666" }}
              >
                Exam schedule not found
              </Typography>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            mt: 8,
            mb: 8,
          }}
        >
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              mb: { xs: "32px", sm: "32px", md: "32px", lg: "48px" },
            }}
          >
            Get in Touch
          </Typography>

          <Box sx={{ maxWidth: "600px" }}>
            <Typography variant="typographyBodyInterMaintext" sx={{}}>
              Office of the Controller of Examinations - Helpdesk
            </Typography>

            <br />

            <Typography variant="typographyBodyInterMaintext">
              No. 70, Ethiraj Salai, Egmore, Chennai - 600008, Tamil Nadu, India
            </Typography>
            <br />

            <Typography variant="typographyBodyInterMaintext">
              +91 - 44 - 28279189
            </Typography>
            <br />

            <Typography
              variant="typographyBodyInterMaintext"
              component="a"
              href="mailto:coe@ethiraj.edu.in"
              sx={{
                color: "#003BD1",
                // textDecoration: "none",
                cursor: "pointer",
                textDecoration: "underline",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              coe@ethiraj.edu.in
            </Typography>
          </Box>
        </Box>

        {/* Institutional Responsibilities Section */}
      </Box>
    </Box>
  );
};

export default ExamSchedule;
