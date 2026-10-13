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
// import Leadership_chairman_image from "../../../../Assets/Leadership_chairman_image.png";
import myImg from "../../../../Assets/FounderImagee.png";

const FounderViewModal = ({
  open,
  handleClose,
  title,
  image,
  greeting,
  paragraphs = [
    "“I am one of those who admire the wisdom and generosity of Late Shri V. L. Ethiraj, to whom this college owes its existence.” — C. Rajagopalachari“”",
    "Those who educate children well are more to be honoured than parents, for these give only life, those the art of living well.” — Aristotle",
    "Ethiraj College for Women stands as a living tribute to the visionary legacy of Shri Vellore Lakshmanaswamy Ethiraj, a man who firmly believed that the education of women was the most powerful force to strengthen families, communities, and the nation.",
    "Born on 18th July 1890 in Vellore into a respected and philanthropic family, Shri Ethiraj was the son of Thiru. Lakshmana Swamy Mudaliar. He graduated from Presidency College, Chennai, and pursued a law degree from Trinity College, Dublin. His exceptional legal acumen earned him the distinction of being the first Indian Crown Prosecutor under the British Government.",
    "However, Shri Ethiraj’s impact extended far beyond his legal career. Inspired by eminent thinkers like Dr. Sarvapalli Radhakrishnan, he was deeply committed to the public welfare. Guided by the conviction that “educating a man is educating an individual, but educating a woman is educating an entire family,” he made a profound contribution to the cause of women's education",
    " In an extraordinary act of generosity, he donated his entire life savings of Rs. 10 lakhs, along with the title deeds of two bungalows, to establish a college that would offer women quality education grounded in values and tradition.",
    "Since its inception in 1948, Ethiraj College has been a beacon of learning, standing as a testament to Shri Ethiraj’s vision and generosity. His connection to the institution remained strong until his departure on 18th August 1960. Today, the college continues to empower generations of women to learn, lead, and inspire — all in alignment with the ethos Shri Ethiraj instilled.",
    "The Ethirajians, guided by the motto, “To Strive, to Seek, to Find, and not to Yield,” remain steadfast in their commitment to self-empowerment and service to society.",
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
            mb: 2,
          }}
        >
          {/* {title} */}
          About the Founder{" "}
        </Typography>

        <Grid container spacing={4}>
          {/* Dynamic Image */}
          <Grid item size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={myImg}
              alt="chairman"
              sx={{
                width: "100%",
                height: "300px",
                borderRadius: 2,
                objectFit: "cover",
              }}
            />
          </Grid>

          {/* Dynamic Content */}
          <Grid item size={{ xs: 12, md: 8 }}>
            {paragraphs.map((para, index) => (
              <>
                <Typography
                  key={index}
                  variant="secondaryModalTextInterRegular"
                  sx={{  lineHeight: 1.8 }}
                >
                  {para}
                </Typography>
                <br />
                
              </>
            ))}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default FounderViewModal;
