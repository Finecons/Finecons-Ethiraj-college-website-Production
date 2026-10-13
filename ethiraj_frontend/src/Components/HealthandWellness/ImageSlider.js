import { useState } from "react";
import { Box, Card, CardMedia, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <CardMedia
        component="img"
        height="350"
        image={images[current]}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          display: "flex",
          gap: 1,
        }}
      >
        <IconButton
          size="small"
          onClick={prev}
          sx={{
            bgcolor: "white",
            "&:hover": { bgcolor: "#eee" },
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        <IconButton
          size="small"
          onClick={next}
          sx={{
            bgcolor: "white",
            "&:hover": { bgcolor: "#eee" },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Card>
  );
};

export default ImageSlider;