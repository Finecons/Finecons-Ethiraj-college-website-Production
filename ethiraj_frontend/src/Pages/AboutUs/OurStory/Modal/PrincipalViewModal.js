import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  IconButton,
  Box,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Leadership_principal_image from "../../../../Assets/Leadership_principal_image.png";

const PrincipalViewModal = ({
  open,
  handleClose,
  title,
  image,
  greeting,
  paragraphs = [
    "It is heartening to witness the resilience and positive spirit of our institution in navigating challenges with strength and confidence, instilling hope for the future.",
    "Founded in 1948 by Shri. V. L. Ethiraj, a visionary lawyer and philanthropist, this institution stands as a beacon of women’s education and empowerment. Over the past 75+ years, it has nurtured generations of women who have excelled across diverse fields.",
    "With the steadfast support of our Trustees, dedicated Principals, and committed faculty, we continue to advance in infrastructure, technology, and holistic education. Our focus remains on nurturing knowledgeable, skilled, ethical, and socially responsible individuals.",
    "I look forward to the continued support of all stakeholders as we work together to realize our shared mission and vision.",
  ],
  name,
  designation,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          px: 2,
        },
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 16,
          top: 16,
          border: "1px solid #ccc",
          width: 34,
          height: 34,
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <DialogContent>
        {/* Dynamic Title */}
        <Typography
          variant="headingTextNewsreaderMedium"
          sx={{
            // fontFamily: "serif",
            fontWeight: 500,
            mb: 3,
          }}
        >
          {/* {title} */}
          Principal’s Address
        </Typography>

        <Grid container spacing={4}>
          {/* Dynamic Image */}
          <Grid item size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={Leadership_principal_image}
              alt="chairman"
              sx={{
                width: "100%",
                height: "300px",
                borderRadius: 2,
                objectFit: "contain",
              }}
            />
          </Grid>

          {/* Dynamic Content */}
          <Grid item size={{ xs: 12, md: 8 }}>
            {/* {greeting && ( */}
            <Typography variant="secondaryModalTextInterRegular" sx={{ mb: 1 }}>
              {/* {greeting || "Greetings from Ethiraj College for Women."} */}
              {"Greetings!"}
            </Typography>
            {/* )} */}

            {paragraphs.map((para, index) => (
              <>
                <Typography
                  key={index}
                  variant="secondaryModalTextInterRegular"
                  sx={{ lineHeight: 1.8 }}
                >
                  {para}
                </Typography>
                <br />
              </>
            ))}

            <Box sx={{ mt: 2 }}>
              <Typography variant="subTextInterMedium" fontWeight={600}>
                {name || "Dr.S.Uma Gowrie"}
              </Typography>
              <Typography
                variant="secondaryModalTextInterRegular"
                color="text.secondary"
                sx={{pb:2}}
              >
                {designation || "Principal & Secretarry"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default PrincipalViewModal;
