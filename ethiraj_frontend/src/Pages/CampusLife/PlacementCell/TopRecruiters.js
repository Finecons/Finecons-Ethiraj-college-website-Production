import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";


export default function TopRecruiters({ recruiters }) {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const recruitersPerSlide = isXs ? 1 : isSm ? 4 : 8;

  const [carouselIndex, setCarouselIndex] = useState(0);

  const totalSlides = Math.ceil(recruiters.length / recruitersPerSlide);

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1,
    );
  };

  return (
    <Box >
      {/* Heading */}
      <Typography
        variant="headingTextNewsreaderMedium"
        align="center"
        sx={{
          mb: 6,
        }}
      >
        Top Recruiters
      </Typography>

      {/* Slider Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Left Arrow */}
        <Button
          onClick={handlePrev}
          sx={{
            minWidth: 42,
            width: 42,
            height: 42,
            borderRadius: "50%",
            border: "1px dashed #bdbdbd",
            color: "#444",
            position: "absolute",
            left: { xs: 8, md: 32 },
            zIndex: 2,
            background: "#fff",
            "&:hover": {
              background: "#fafafa",
            },
          }}
        >
          &#8249;
        </Button>

        {/* Logos Grid */}
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          justifyContent="center"
          alignItems="center"
          sx={{
            width: { xs: "80%", md: "75%" },
          }}
        >
          {recruiters
            .slice(
              carouselIndex * recruitersPerSlide,
              (carouselIndex + 1) * recruitersPerSlide,
            )
            .map((rec, idx) => (
              <Grid
                item
                key={rec.name + idx}
size={{xs:12,sm:6,md:3,lg:3}} // xs → 1 item per row
          
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={rec.img}
                  alt={rec.name}
                  sx={{
                    width: "140px",
                    height: "70px",
                    objectFit: "contain",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </Grid>
            ))}
        </Grid>

        {/* Right Arrow */}
        <Button
          onClick={handleNext}
          sx={{
            minWidth: 42,
            width: 42,
            height: 42,
            borderRadius: "50%",
            border: "1px dashed #bdbdbd",
            color: "#444",
            position: "absolute",
            right: { xs: 8, md: 32 },
            zIndex: 2,
            background: "#fff",
            "&:hover": {
              background: "#fafafa",
            },
          }}
        >
          &#8250;
        </Button>
      </Box>

      {/* Dots */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
        }}
      >
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <Box
            key={idx}
            onClick={() => setCarouselIndex(idx)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background:
                idx === carouselIndex ? "#6D3B5C" : "#d6d6d6",
              mx: 0.7,
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}