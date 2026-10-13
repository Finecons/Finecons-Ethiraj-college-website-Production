// CampusLife.js
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from "@mui/material";

// Replace with real images
import HostelImg from "../../../Assets/lab.jpg";
import SportsImg from "../../../Assets/software.jpg";
import ClubsImg from "../../../Assets/collabration.jpg";
import StudentsImg from "../../../Assets/funded.jpg";
import CustomNextArrowIcon from "../../../Components/CustomNextArrowIcon/CustomNextArrowIcon";
import InfrastructureCollaborationModal from "./InfrastructureCollaborationModal";

// export function ArrowIcon(props) {
//   return (
//     // <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: 18 }} {...props}>
//     //   <path
//     //     d="M8 5l8 7-8 7"
//     //     fill="none"
//     //     stroke="currentColor"
//     //     strokeWidth="2"
//     //     strokeLinecap="round"
//     //     strokeLinejoin="round"
//     //   />
//     // </SvgIcon>
//     <BsArrowRight  style={{color:"red",fontSize:"30px"}}/>
//   );
// }

const data = [
  {
    title: "Lab / Library",
    desc: "The Department has a good collection of library books for all subjects which include Accounting, Finance, Law, Human Resources",
    img: HostelImg,
  },
  {
    title: "Software / Tools",
    desc: "Join a community where passion meets performance, and every athlete has the opportunity to thrive.",
    img: SportsImg,
  },
  {
    title: "Collaboration / MoUs",
    desc: "We offer a wide range of clubs that cater to diverse interests and talents.",
    img: ClubsImg,
  },
  {
    title: "Funded Projects",
    desc: "Our student union shapes leaders of tomorrow. They lead and manage the clubs, activities and cultural events.",
    img: StudentsImg,
  },
];

function FeatureCard({ title, desc, img, onClick }) {
  return (
    <Card
      elevation={0}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick?.();
        }
      }}
      sx={{
        height: "100%",
        bgcolor: "transparent",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      
      {/* Image block */}
      <Box
        sx={{
          // mt: "24px",
          borderRadius: 1,
          overflow: "hidden",
          border: (t) => `1px solid ${t.palette.divider}`,
          aspectRatio: "1 / 1",
          //   width: { xs: 200, sm: 280, md: 341 },   // explicit widths per breakpoint
          // height: { xs: 200, sm: 280, md: 341 },  // explicit matching heights for square

          flexShrink: 0,
        }}
      >
        <CardMedia
          component="img"
          image={img}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
      <CardContent
        sx={{
          px: 0,
          pt: "20px",
          pb: 1.5,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ pr: 0.5 }}
        >
          <Typography variant="typographyCardContentHeading">
            {title}
          </Typography>
          <CustomNextArrowIcon sx={{ color: "text.primary" }} />
        </Stack>
        <Typography
          variant="typographyCardContentText"
          // color="text.secondary"
          sx={{
            // color: "var(--brand-palette-text-secondary)",
            color: "#616161",
            // :: 1,
            pt: { xs: "18px",md:"20px",lg:"24px" },
            pr: 2,
            // mt: 1,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 5, // limits description to 3 lines (adjust as needed)
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
            flexGrow: 1,
          }}
        >
          {desc}
        </Typography>
      </CardContent>

    </Card>
  );
}

export default function InfrastructureCollaboration({ data: apiData }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const sectionTitle = apiData?.title || "Infrastructure & Collaboration";
  const sectionDescription =
    apiData?.description ||
    "The department is supported by well-equipped infrastructure and strong academic–industry collaborations that enhance research, learning, and professional development opportunities.";

  const cards =
    apiData?.cards?.map((item) => ({
      title: item?.title,
      desc: item?.description,
      img: item?.image_url,
      modalDescription: item?.modalDescription,
      description: item?.description,
    }))?.filter((item) => item?.title || item?.desc || item?.img || item?.modalDescription ) || data;

  const handleOpenModal = (card) => {
    setSelectedCard(card);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const validModalDescriptions = Array.isArray(selectedCard?.modalDescription)
    ? selectedCard.modalDescription.filter((text) => text?.trim())
    : [];

  const selectedModalParagraphs = 
    validModalDescriptions.length > 0
      ? validModalDescriptions
      : selectedCard?.description?.trim()
        ? [selectedCard.description]
        : [];

  return (
    <>
      <Box
        sx={{
          // px: { xs: 2, sm: 3, md: 6 },
          // py: { xs: 6, md: 10 },
        }}
      >
        {/* Header row */}
        <Grid container alignItems="center" spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              variant="headingTextNewsreaderMedium"
              sx={{
                color: "var(--heading-text-primary)",
                // fontFamily: "Newsreader, serif",
                // fontStyle: "normal",
                // fontWeight: 500,
                // lineHeight: "52px",
                // fontSize: { xs: "26px", sm: "32px", md: "36px", lg: "45px" },
                mb: { xs: 2, sm: 2 },
              }}
            >
              {sectionTitle}
            </Typography>
            <Typography
              // variant="secondaryTextInterRegular"
              //  color="text.secondary"
              //   sx={{ mt: 2, maxWidth: 922 }}
              variant="typographySubheadingText"
              // color="text.secondary"
              sx={{
                color: "var(--brand-palatte-text-color)",
                mb: { xs: "32px", sm: "20px" },
                display: "block",
                maxWidth: "922px",
              }}
            >
              {sectionDescription}
            </Typography>
          </Grid>
        </Grid>

        {/* Cards grid */}
        <Grid
          container
          spacing={{ xs: 4, md: 4 }}
          sx={{
            mt: { xs: "30px", sm: "34px", md: "54px", lg: "74px" },
            px: { xs: "0", md: "0" },
          }}
        >
          {cards.map((item, index) => (
            <Grid key={`${item.title || "card"}-${index}`} size={{ xs: 12, sm: 6, md: 3 }}>
              <FeatureCard {...item} onClick={() => handleOpenModal(item)} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <InfrastructureCollaborationModal
        open={openModal}
        handleClose={handleCloseModal}
        title={selectedCard?.title}
        image={selectedCard?.img}
        paragraphs={selectedModalParagraphs}
        modalDescription={selectedCard?.modalDescription}
      />
    </>
  );
}
