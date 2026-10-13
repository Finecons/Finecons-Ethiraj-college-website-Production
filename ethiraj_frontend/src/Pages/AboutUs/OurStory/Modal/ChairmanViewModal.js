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
import Leadership_chairman_image from "../../../../Assets/Leadership_chairman_image.png";

const ChairmanDeskDialog = ({
  open,
  handleClose,
  title,
  image,
  greeting,
  paragraphs = [
    "As early as 1948, when our Founder Shri V.L. Ethiraj took the soul-stirring decision to invest his entire savings on establishing an institution of higher education, especially for marginalized women, he emerged as  an agent of social change. A college is the vehicle that the youth rely on the most, to learn and advance knowledge. The vehicle we have built here is an enormously powerful one and has been highly productive over the past 75+ years.",
    "With the firm belief that the goal of true education is holistic development, the college ensures imparting values, ethics and confidence in young women to harness their full potential, thereby creating the social capital necessary for establish.",
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

      <DialogContent
       >
        {/* Dynamic Title */}
        <Typography
          variant="headingTextNewsreaderMedium"
          sx={{
            // fontFamily: "serif",
            fontWeight: 500,
            mb: 2,
          }}
        >
          {/* {title} */}
          From the Chairman’s Desk
        </Typography>

        <Grid container spacing={4} sx={{pb:2}}>
          {/* Dynamic Image */}
          <Grid item size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={Leadership_chairman_image}
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
            <Typography variant="secondaryModalTextInterRegular" sx={{mb:1}}>
              {/* {greeting || "Greetings from Ethiraj College for Women."} */}
              {"Greetings from Ethiraj College for Women."}
            </Typography>
            {/* )} */}
                
            

            {paragraphs.map((para, index) => (
              <>
                <Typography
                  key={index}
                  variant="secondaryModalTextInterRegular"
                  sx={{lineHeight: 1.8 }}
                >
                  {para}
                </Typography>
                <br />
              </>
            ))}

            <Box sx={{ mt: 1 }}>
              <Typography variant="subTextInterMedium" fontWeight={600}>
                {name || "Thiru.V.M.Muralidharan"}
              </Typography>
              <Typography
                variant="secondaryModalTextInterRegular"
                color="text.secondary"
               
              >
                {designation || "Chairman"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ChairmanDeskDialog;
