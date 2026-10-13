import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  Dialog,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import example_Img from "../../../Assets/academicdivisions.png";

/* Sample Data */

const Activities = ({ activitiesData }) => {
  const [year, setYear] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // Auto select first year when data comes from API
  useEffect(() => {
    if (activitiesData?.length > 0) {
      setYear(activitiesData[0].academicYear);
    }
  }, [activitiesData]);

  // Handle image click to open modal
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setOpenModal(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage(null);
  };

  // Hide component if no data
  if (!activitiesData || activitiesData.length === 0) {
    return null;
  }

  // Get selected year data
  const selectedYearData =
    activitiesData.find((item) => item.academicYear === year) ||
    activitiesData[0];

  const activities = selectedYearData?.activities || [];

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            color: "#7A2C5B",
          }}
        >
          Activities
        </Typography>

        {/* Dropdown */}
        <FormControl size="small">
          <Select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            sx={{
              minWidth: 140,
              borderRadius: "20px",
              fontSize: "14px",

              /* Default border */
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#7A2C5B",
              },
              /* Hover */
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#7A2C5B",
              },
              /* Focus */
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#7A2C5B",
              },
              /* Text color */
              "& .MuiSelect-select": {
                color: "#7A2C5B",
                fontWeight: 500,
              },
              /* Dropdown Icon */
              "& .MuiSvgIcon-root": {
                color: "#7A2C5B",
              },
            }}
          >
            {activitiesData.map((item) => (
              <MenuItem key={item.academicYear} value={item.academicYear}>
                {item.academicYear}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Activities Grid */}
      <Grid container spacing={3}>
        {activities.map((item) => (
          <Grid item size={{ xs: 12, sm: 4 }} key={item.id}>
            <Card
              sx={{
                background: "none",
                boxShadow: "none",
                height: "100%",
                minHeight: item.imageUrl ? "auto" : "200px",
                transition: "0.3s",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              {/* Image - Only show if imageUrl exists */}
              {item.imageUrl && (
                <CardMedia
                  component="img"
                  image={item.imageUrl}
                  alt={item.title}
                  onClick={() => handleImageClick(item.imageUrl)}
                  sx={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": {
                      opacity: 0.85,
                    },
                  }}
                />
              )}

              {/* Content */}
              {item.title && (
                <CardContent
                  sx={{
                    border: "none",
                    flex: 1,
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    py: "20px",
                    px: 0,
                  }}
                >
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{
                      fontWeight: 500,
                      textAlign: "center",
                      // lineHeight: 1.5,
                      color: "#212529",
                    }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Image Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        slotProps={{
          backdrop: {
            sx: {
              zIndex: "99999 !important",
            },
          },
        }}
        PaperProps={{
          sx: {
            zIndex: "100000 !important",
          },
        }}
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: "99999 !important",
          },
          "& .MuiDialog-paper": {
            zIndex: "100000 !important",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Image */}
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="Enlarged view"
              sx={{
                width: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />
          )}
        </Box>
      </Dialog>
    </Box>
  );
};

export default Activities;
