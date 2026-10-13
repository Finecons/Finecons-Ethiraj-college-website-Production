
import React, { useEffect, useState } from "react";
import { IconButton, Collapse, Typography, Grid, Divider, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LeadershipQuotes from "../LeadershipQuotes";
import LeadershipAndGovernance from "./LeadershipAndGovernance";
import { useLocation } from "react-router-dom";
import myImg from "../../../../Assets/FounderImagee.png"
import VisionMissionQualityPolicy from "./VisionMissionQualityPolicy";


function HistoryOfEthiraj({ aboutFounderDatas, administrationDatas }) {
  const [open, setOpen] = useState(false);

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
        <Grid
          item
          alignItems="center"
          justifyContent="space-between"
          sx={{ alignItems: "center", display: "flex" }}
        >
          {/* <Grid item> */}
          <Typography variant="subHeadingTextInterMedium">
            About the Founder, Shri V.L. Ethiraj
          </Typography>
          <br />
          <br />

          {/* </Grid>
          <Grid item> */}
          <IconButton in={open} onClick={handleToggle} unmountOnExit>
            {open ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
          {/* </Grid> */}
        </Grid>

        {/* Expandable Content */}
        <Collapse in={open} timeout="300ms">
          <Grid
            container
            spacing={0.1}
            mt={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              mt: { md: "22px", lg: "30px" },
            }}
          >
            {/* Quotes Section */}
            <Grid item size={{ xs: 12, md: 6 }}>
              {subtext.map((text, index) => (
                <>
                  <Typography
                    key={index}
                    variant="subHeadingTextInterMedium"
                  // sx={{ maxWidth: { lg: "693px", md: "550px" } }}
                  >
                    {text}
                  </Typography>

                  <br />
                  <br />
                </>
              ))}

            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              {/* <Box
                component="img"
                src={myImg} // 👉 replace with your image path
                alt="Section Image"
                sx={{
                  width: "100%",
                  // maxWidth: "500px",
                  height: "auto",
                  // mt: 2,
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              /> */}
              <Box
                component="img"
                src={myImg}
                alt="Section Image"
                sx={{
                  width: "100%",
                  // aspectRatio: "1 / 1",   // ✅ Makes it square
                  aspectRatio: "4 / 3", // ✅ Less height
                  // mt: 2,
                  pb: 5,
                  pl: 3,
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </Grid>



            {/* Paragraph Section */}
            {/* Paragraph Section */}
            <Grid size={{ xs: 12 }}>
              <Grid container spacing={6}>
                {/* DYNAMIC SPLIT LOGIC */}
                {(() => {
                  const desc = description || [];
                  const firstCount = Math.ceil(desc.length / 2);
                  const col1 = desc.slice(0, firstCount);
                  const col2 = desc.slice(firstCount);

                  return (
                    <>
                      {/* Column 1 */}
                      <Grid item size={{ xs: 12, md: 6 }}>
                        {col1.map((text, idx) => (
                          <>
                            <Typography
                              key={idx}
                              variant="typographySubheadingText"
                              sx={{
                                color: "var(--brand-palatte-text-color)",
                                // pt: idx !== 0 ? { md: "15px", lg: "20px" } : 0,
                              }}
                            >
                              {text}
                            </Typography>
                            <br />
                          </>
                        ))}

                      </Grid>

                      {/* Column 2 */}
                      <Grid item size={{ xs: 12, md: 6 }}>

                        {col2.map((text, idx) => (
                          <>
                            <Typography
                              key={idx}
                              variant="typographySubheadingText"
                              sx={{
                                color: "var(--brand-palatte-text-color)",
                                // pt: idx !== 0 ? { md: "15px", lg: "20px" } : 0,
                              }}
                            >
                              {text}
                            </Typography>
                            <br />
                          </>
                        ))}
                      </Grid>
                    </>
                  );
                })()}
              </Grid>
            </Grid>
          </Grid>
        </Collapse>
        <Divider
          sx={{
            borderColor: "var(--brand-palette-border-strong)",
            mt: { md: "20px", lg: "20px" },
          }}
        />
      </Grid>
      <LeadershipQuotes administrationDatas={administrationDatas} />
      <VisionMissionQualityPolicy />
      <LeadershipAndGovernance />
    </Grid>
  );
}

export default HistoryOfEthiraj;
