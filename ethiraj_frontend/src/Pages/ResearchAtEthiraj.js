// ResearchAtEthiraj.js
import {
  Box,
  Grid,
  Typography,
  Stack,
  Chip,
  Button,
  Card,
  CardContent,
  SvgIcon,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Divider,
} from "@mui/material";
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";

// Replace with real images
import Patent1 from "../Assets/ResearchAtEthirajImg1.png";
import Patent2 from "../Assets/ResearchAtEthirajImg2.png";
import CustomMetaChips from "../Components/CustomMetaChips/CustomMetaChips";
import ArrowAsset from "../Assets/arrowIcon.svg"; // or .png/.jpg
import CustomImageSlider from "../Components/CustomImageSlider/CustomImageSlider";
import CustomImageSliderNext from "../Components/CustomImageSliderNext/CustomImageSliderNext";
import CustomNextButton from "../Components/CustomNextButton/CustomNextButton";
import CustomGallerySildeShow from "../Components/CustomGallerySildeShow/CustomGallerySildeShow";
import facilityImage1 from "../Assets/researchHome1.jpg";
import facilityImage2 from "../Assets/research21.jpg";
import facilityImage3 from "../Assets/researchHome3.jpg";
import ImageGallerySection2 from "../Components/CustomGallerySildeShow/ImageGallerySection2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import actions from "../ReduxStore/actions";

// Prefer SVG. If ArrowAsset is an SVG file, this stays crisp at any size.
// For PNG/JPG it still works, just won't recolor via CSS.
function ArrowIcon(props) {
  return (
    <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: 24 }} {...props}>
      <image
        href={ArrowAsset}
        width="24"
        height="24"
        x="0"
        y="0"
        preserveAspectRatio="xMidYMid meet"
      />
    </SvgIcon>
  );
}

function PatentThumb({ src, caption }) {
  return (
    <Box>
      <Box
        component="img"
        src={src}
        alt={caption}
        sx={{
          // width: { xs: 160, sm: "100%", md: "300px", lg: "361px" },
          width: "100%",

          height: { xs: 160, sm: "320px", md: "300px", lg: "361px" },
          objectFit: "cover",
          borderRadius: 1,
          border: (t) => `1px solid ${t.palette.divider}`,
        }}
      />
      <Typography
        variant="typographyBodyInterNormalSmall"
        // color="text.secondary"
        sx={{
          mt: 1,
          display: "block",
          color: "var(--brand-palatte-text-color)",
        }}
      >
        {caption}
      </Typography>
    </Box>
  );
}

function MetaChips({ date, topic }) {
  return (
    <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
      <Chip size="small" variant="outlined" label={date} />
      <Chip size="small" variant="outlined" label={topic} />
    </Stack>
  );
}
const patentItems = [
  {
    src: Patent1,
    caption: "Patent for coagulant/ dye synthesis (sheet)",
  },
  {
    src: Patent2,
    caption: "Patent for fortified spices (sheet)",
  },
];

function ArticleCard({ title, blurb, date, topic }) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 0,
        background: "none",
        p: 0,
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <CardContent sx={{ p: { xs: 0, sm: "0" } }}>
        <Typography
          variant="typographyContentHeadingResearch"
          sx={{
            // fontSize: { xs: 18, sm: 20 },
            // fontWeight: 700,
            // lineHeight: 1.4,
            pb: "24px",
            color: "var(--brand-palatte-text-color)",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="typographyBodyContent"
          sx={{
            color: "var(--brand-palette-text-secondary)",
            pb: { sm: "24px", xs: "14px" },
          }}
        >
          {blurb}
        </Typography>
        <CustomMetaChips date={date} topic={topic} />
      </CardContent>
    </Card>
  );
}

export default function ResearchAtEthiraj() {
  const Images = [
    {
      title: "img1",
      img: facilityImage1,
    },
    {
      title: "img2",
      img: facilityImage2,
    },
    {
      title: "img3",
      img: facilityImage3,
    },
  ];

  const dispatch = useDispatch();
  const { getImportantResearchHighlights } = useSelector(
    (state) => state.getImportantResearchHighlights
  );

  // Transform API data to match component structure
  const researchHighlights = (getImportantResearchHighlights?.data || []).map(
    (item) => ({
      title: item?.title,
      publisher: item?.publisher,
      facultyName: item?.faculty_name,
      department: item?.department?.department_name || "Research",
      date: item?.year,
    })
  );

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: "getImportantResearchHighlights",
      };

      await dispatch(actions.GETIMPORTANTRESEARCHHIGHLIGHTS(data1));
    };
    fetchData();
  }, [dispatch]);
  return (
    <Box
      // sx={{ px: { xs: 2, sm: 3, md: 6 },
      sx={{
        // px: { xs: 2, sm: 3, md: "74px",lg:"94px"},

        py: { xs: 6, md: 6 },
      }}
    >
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {/* LEFT: Patents column */}
        <Grid size={{ xs: 12 }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{
              // pb: { sm: "48px", xs: "24px" },
              color: "var(--heading-text-primary)",
              // width: { sm: "274px", md: "100%" },
            }}
          >
            Research at Ethiraj
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 9, md: 9, lg: 9 }}>
          <Typography
            variant="typographySubheadingText"
            sx={{
              // maxWidth: 841,
              color: "var(--brand-palatte-text-color)",
            }}
          >
            Ethiraj Centre for Research Innovation and Creativity (ECRIC) drives
            faculty and student research, supporting projects and patents across
            sciences, humanities, and applied disciplines to create real‑world
            impact.
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 3, md: 3, lg: 3 }}
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            alignItems: "center",
          }}
        >
          <CustomNextButton buttonText="LEARN MORE" onClick="/research/ecric" />
        </Grid>

        {/* RIGHT: Articles column */}
        <Grid size={{ xs: 12 }}>
          <Typography
            variant="subHeadingTextInterMedium"
            id="facilities-section"
            sx={{ mb: "16px" }}
          >
            Infrastructure & Facilities
          </Typography>

          <ImageGallerySection2 images={Images} />
          <Typography
            variant="subHeadingTextInterMedium"
            sx={{ pb: "15px", mt: { xs: "44px", md: "40px" } }}
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
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              mt: { xs: "30px" },
              justifyContent: { xs: "flex-end" },
              alignItems: "center",
            }}
          >
            <CustomNextButton
              buttonText="VIEW ALL RESEARCH PUBLICATIONS"
              onClick="/research/researchallhighlights"
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
