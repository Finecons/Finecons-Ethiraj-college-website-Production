
import React, { useEffect, useState } from "react";
import {
  IconButton,
  Collapse,
  Typography,
  Grid,
  Divider,
  Box,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LeadershipQuotes from "../LeadershipQuotes";
import LeadershipAndGovernance from "./LeadershipAndGovernance";
import { useLocation } from "react-router-dom";
import myImg from "../../../../Assets/FounderImagee.png";
import VisionMissionQualityPolicy from "./VisionMissionQualityPolicy";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FounderViewModal from "../Modal/FounderViewModal";
// import FoundernDeskDialog from "../Modal/FoundernViewModal";

function HistoryOfEthiraj({ aboutFounderDatas, administrationDatas }) {
  const [open, setOpen] = useState(false);

  const [founderModalOpen, setFounderModalOpen] = useState(false);

  const handleFoundernModalOpen = () => {
    setFounderModalOpen(true);
  };

  const handleFoundernModalClose = () => {
    setFounderModalOpen(false);
  };

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  const location = useLocation();
  console.log(location, "location");

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const subtext =
    aboutFounderDatas[0]?.additional_data?.subtext?.length > 0
      ? aboutFounderDatas[0]?.additional_data?.subtext
      : [
          "Established in 1948, Ethiraj College for Women has been a pioneer in women’s education.",
          "With a legacy of academic excellence, empowerment, and innovation, the college continues to nurture generations of women to lead and inspire.",
        ];

  const description =
    aboutFounderDatas[0]?.additional_data?.description?.length > 0
      ? aboutFounderDatas[0]?.additional_data?.description
      : [
          "Ethiraj College for Women is situated in the heart of Chennai, nestled within nine acres of lush greenery and elegant architecture, stands Ethiraj College for Women — a name synonymous with quality, integrity, and opportunity. Since its founding in 1948, the College has combined a strong academic vision with impressive infrastructure, spanning over 3,48,000 sq. ft.",
          "Over the decades, Ethiraj College has earned prestigious accolades, including the Five-Star status from NAAC and the College with Potential for Excellence (CPE) recognition from the UGC. These honors are not merely badges of prestige but affirmations of the institution’s unwavering commitment — upheld by visionary management, dedicated principals, committed faculty, and ambitious students.",
          "Today, the College has over 7,300+ students and 346 faculty members, all of whom contribute to its vibrant academic environment. Its alumni network includes leaders across diplomacy, law, education, social service, culture, and industry — individuals who carry forward the legacy of Ethiraj College and continue to shape society in meaningful ways.",
          "As Ethiraj College for Women looks to the future, it remains rooted in a philosophy of growth through change. Echoing Charles Darwin’s ...",
        ];
  return (
    <Grid
      container
      sx={{
        // px: { xs: 2, sm: 3, md: "30px", lg: "36px" },
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },

        // py: { xs: 6, md: 2 },
        mt: { lg: "72px", md: "50px", xs: "30px" },
        mb: { lg: "90px", md: "70px", xs: "50px" },
      }}
      spacing={3}
      id="leadership"
    >
      {/* Header */}
      <Grid item size={{ xs: 12 }}>
        <Typography
          variant="headingTextNewsreaderMedium"
          sx={{
            color: "var(--heading-text-primary)",
            mb: { xs: 2, sm: 2, md: "10px", lg: "48px" },
          }}
        >
          College Leadership & Administration
        </Typography>
      </Grid>

      {/* Toggle Row */}
      <Grid
        item
        size={{ xs: 12 }}
        //  sx={{ py: { lg: "96px", md: "70px" } }}
      >
        {/* Expandable Content */}
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* Quotes Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={myImg}
              alt="Section Image"
              sx={{
                width: "100%",
                height: "100%",
                // width: "300px",

                // aspectRatio: "1 / 1",   // ✅ Makes it square
                // aspectRatio: "4 / 3", // ✅ Less height
                // mt: 2,
                // pb: 5,
                // pl: 3,
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 8 }}>
            <Typography
              variant="secondaryTextInterRegular"
              sx={{ fontWeight: "600 !important" }}
            >
              About the Founder
            </Typography>
            <Typography
              variant="secondaryTextInterRegular"
              sx={{ color: "#6B3C58", fontWeight: "500 !important", mb: 2 }}
            >
              Shri V.L. Ethiraj
            </Typography>

            <Typography variant="leadershipContentTextNewsreaderMedium">
              Shri Vellore Lakshmanaswamy Ethiraj firmly believed that the
              education of women was the most powerful force to strengthen
              families, communities, and the nation.
            </Typography>
            <br />

            <Typography variant="leadershipContentTextNewsreaderMedium">
              In an extraordinary act of generosity, he donated his entire life
              savings of Rs. 10 lakhs, along with the title deeds of two
              bungalows, to establish a college that would offer women quality
              education grounded in values and tradition.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "start" }}>
              <Button
                // variant="text"
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                  handleFoundernModalOpen();
                }}
                sx={{
                  textTransform: "uppercase",
                  pt: { md: "25px", lg: "36px", xs: "20px" },
                  fontSize: "15px !important",
                  fontFamily: "Inter",
                  lineHeight: "22px !important",
                  color: "var(--brand-palette-text-tertiary)",
                }}
              >
                Learn More
              </Button>

              <Divider
                sx={{
                  borderColor: "var(--brand-palette-border-strong)",
                  mt: { md: "20px", lg: "20px" },
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <FounderViewModal
          open={founderModalOpen}
          handleClose={handleFoundernModalClose}
          // {...FoundernData}
        />
      </Grid>
      <Box
        sx={{
          borderBottom: "1px solid black",
        }}
      >
        <LeadershipQuotes administrationDatas={administrationDatas} />
      </Box>
      <VisionMissionQualityPolicy />
      <LeadershipAndGovernance />
    </Grid>
  );
}

export default HistoryOfEthiraj;
