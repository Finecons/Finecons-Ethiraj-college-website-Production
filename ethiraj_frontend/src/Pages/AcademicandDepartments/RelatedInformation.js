import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import CustomNextButton from "../../Components/CustomNextButton/CustomNextButton";
import { adminUrl } from "../../constants";

const relatedInfo1 = [
  {
    title: "Admissions",
    description: "Our Admissions usually begin in late May.",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=600", // Replace with actual image
    buttonText: "Learn To Apply",
  },
  {
    title: "Streams",
    description:
      "We offer aided and self-supported courses endowments are for exceptional students",
    image:
      "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=600", // Replace with actual image
    buttonText: "Know your Options",
  },
  {
    title: "Scholarships",
    description: "Our prestigious endowments are for exceptional students",
    image:
      "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=600", // Replace with actual image
    buttonText: "Learn More",
  },
];

export default function RelatedInformation({ otherRelatedInformationDatas }) {
  const relatedInfo =
    otherRelatedInformationDatas[0]?.additional_data?.cards
      ?.otherRelatedInformation?.length > 0
      ? otherRelatedInformationDatas[0]?.additional_data?.cards?.otherRelatedInformation?.map(
          (data) => ({
            title: data?.title,
            description: data?.description,
            buttonText: data?.button_text,
            image: `${data?.image_url}`,
          })
        )
      : relatedInfo1;

  return (
    <Box
      sx={{
        textAlign: { xs: "start", md: "center" },
        py: 5,
        backgroundColor: "#fff",
        px: { xs: "20px", lg: "60px" },
      }}
    >
      <Typography
        variant="headingTextNewsreaderMedium"
        sx={{ mb: 4, color: "text.primary" }}
      >
        Other Related Information
      </Typography>

      <Grid
        container
        spacing={{ lg: "96px", md: "70px", xs: "30px" }}
        // size={{ gap: "96px" }}
        // justifyContent="space-around"
      >
        {relatedInfo.map((item, index) => (
          <Grid item size={{ xs: 12, sm: 12, md: 4 }} key={index}>
            <Card
              sx={{
                borderRadius: "16px",
                background: "#F7F7F7",
                boxShadow: "none",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                p: { lg: "50px", md: "30px", xs: "30px" },
              }}
            >
              <CardMedia
                component="img"
                // height="160"
                image={item.image}
                alt={item.title}
                sx={{
                  borderRadius: "10px",
                  height: { sm: "370px", md: "236px", xs: "236px" },
                }}
              />

              {/* Make CardContent take available space */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  py: "16px",
                  px: "0",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ flexGrow: 1, mb: "20px" }}>
                  <Typography variant="subHeadingTextInterMedium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="secondaryTextInterRegular"
                    color="#000"
                    gutterBottom
                  >
                    {item.description}
                  </Typography>
                </Box>

                {/* Button now sits at the bottom */}
                <CustomNextButton buttonText={item?.buttonText} />
                {/* <Button
                  variant="outlined"
                  sx={{
                    mt: 2,
                    borderRadius: 8,
                    textTransform: "none",
                    fontWeight: 500,
                  }}
                >
                  {item.buttonText}
                </Button> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
