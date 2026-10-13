// OurPrograms.js
import {
  Box,
  Typography,
  Grid,
  Stack,
  SvgIcon,
  Divider,
  TableCell,
  TableRow,
  TableBody,
  Table,
  TableHead,
} from "@mui/material";
import CustomSectionAccordion from "../../../Components/CustomSectionAccordion/CustomSectionAccordion";

import Muralidharan from "../../../Assets/Muralidharan.png";
import CustomNextButton from "../../../Components/CustomNextButton/CustomNextButton";

function ResearchHighlights() {
  const researchHighlights = [
    {
      title: "In silico Docking studies of potential phytocompounds from Musa flowers against Endometritis",
      publisher: "International Journal of Zoological Investigations (IJZI) Volume 10",
      facultyName: "Vaishnavi. VV, Uma Gowrie. S",
      department: "Plant Biology and Plant Biotechnology",
      date: "2024",
    },
    {
      title: "Fungal Endophytes - An Alternative Source of Bioactive Compounds from Plant Species for Prospective Applications",
      publisher: "Ecology, Environment and Conservation Volume",
      facultyName: "Priyanka. N, Uma Gowrie. S",
      department: "Plant Biology and Plant Biotechnology",
      date: "2024",
    },
  ];

  return (
    <Grid
      size={{ xs: 12 }}
      id="research-highlights"
      sx={{ 
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },

        py: { lg: "41px", md: "30px", sm: "30px", xs: "40px" },

        my: { xs: "85px", md: "20px" },
      }}
     
    >
      <Typography
        variant="headingTextNewsreaderMedium"
        sx={{ pb: "15px", mt: { xs: "20px", md: "20px" } }}
      >
        Research Highlights
      </Typography>

      <Typography
        variant="typographyBodyInterNormal"
        sx={{
          mt: { xs: "20px", md: "20px" },
          fontWeight: "500 !important",
        }}
      >
        RESEARCH WORKS
      </Typography>

      <Divider sx={{ mb: "10px", borderColor: "gray" }} />

      {researchHighlights?.map((item, index) => (
        <Box
          key={index}
          sx={{
            borderBottom: "1px solid gray",
            py: { xs: "29px", md: "29px", lg: "29px" },
          }}
        >
          {/* Title */}
          <Typography
            variant="subHeadingTextInterMedium"
            sx={{
              // fontWeight: "500 !important",
              maxWidth: { xs: "100%", md: "80%", lg: "80%" },
              mb: { xs: "29px", md: "39px", lg: "49px" },
            }}
          >
            {item?.title}
          </Typography>

          {/* Metadata Row */}
          <Grid container spacing={4}>
            {/* Publisher */}
            <Grid
              item
              size={{ xs: 12, md: 5 }}
              sx={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <Typography
                variant="typographyBodyInterNormal"
                sx={{
                  fontWeight: "500 !important",
                }}
              >
                PUBLISHER
              </Typography>
              <Typography variant="typographyBodyInterNormal">
                {item?.publisher}
              </Typography>
            </Grid>

            {/* Faculty */}
            <Grid
              item
              size={{ xs: 12, sm: 6, md: 4 }}
              sx={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <Typography
                variant="typographyBodyInterNormal"
                sx={{
                  fontWeight: "500 !important",
                }}
              >
                FACULTY
              </Typography>
              <Typography
                variant="typographyBodyInterNormal"
                sx={{
                  textOverflow: "ellipsis",
                  whiteSpace: "normal", // allow line breaks
                }}
              >
                {item?.facultyName?.split(",").map((name, index, arr) => (
                  <div key={index}>
                    {name.trim()}
                    {index !== arr?.length - 1 && ","}
                  </div>
                ))}
              </Typography>
            </Grid>

            {/* Department */}
            <Grid
              item
              size={{ xs: 6, sm: 3, md: 2 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", sm: "flex-end" },
              }}
            >
              <Typography variant="typographyBodyInterNormal">
                {item?.department || "Plant Biology"}
              </Typography>
            </Grid>

            {/* Year */}
            <Grid
              item
              size={{ xs: 6, sm: 3, md: 1 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", sm: "flex-end" },
              }}
            >
              <Typography variant="typographyBodyInterNormal">
                {item?.date}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}

      {!researchHighlights.length && (
        <Box sx={{ py: "24px" }}>
          <Typography variant="typographyBodyInterNormal">
            No research publications match the selected filters.
          </Typography>
        </Box>
      )}

      <Grid
        size={{ xs: 12 }}
        sx={{
          display: "flex",
          mt: { xs: "30px" },
          justifyContent: { xs: "flex-start",md:"end" },
          alignItems: "center",
        }}
      >
        <CustomNextButton
          buttonText="VIEW ALL RESEARCH & PUBLICATIONS"
          onClick="/research/researchpublications"
        />
      </Grid>
    </Grid>
  );
}
export default ResearchHighlights;
