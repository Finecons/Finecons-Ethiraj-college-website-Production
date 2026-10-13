

import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Card,
  CardContent,
  SvgIcon,
  Button,
  Divider,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Leadership_chairman_image from "../../../Assets/Leadership_chairman_image.png";
import Leadership_principal_image from "../../../Assets/Leadership_principal_image.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import double_quotes_svg from "../../../Assets/Double_quotes_svg.svg";
import { ReactComponent as DoubleQuotesIcon } from "../../../Assets/Double_quotes_svg.svg";
import { adminUrl } from "../../../constants/url";
import ChairmanDeskDialog from "./Modal/ChairmanViewModal";
import PrincipalViewModal from "./Modal/PrincipalViewModal";

function Doubleuotes(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d={double_quotes_svg} fill="currentColor" />{" "}
      {/* paste your path here */}
    </SvgIcon>
  );
}

function LeadershipQuotes({ administrationDatas }) {
  // const principalImage=administrationDatas[0]?.additional_data?.principal_img_url
  const {
    principal_img_url,
    principal_name,
    principal_description,
    chairman_img_url,
    chairman_name,
    chairman_description,
  } = administrationDatas[0]?.additional_data || {};
  const [chaimanModalOpen, setChairmanModalOpen] = useState(false);
  const [principalModalOpen, setPrincipalModalOpen] = useState(false);

  const handleChairmanModalOpen = () => {
    setChairmanModalOpen(true);
  };

  const handleChairmanModalClose = () => {
    setChairmanModalOpen(false);
  };

  const handlePrincipalModalOpen = () => {
    setPrincipalModalOpen(true);
  };

  const handlePrincipalModalClose = () => {
    setPrincipalModalOpen(false);
  };
  return (
    <Box
      sx={{
        py: { md: "50px", lg: "96px", xs: "20px" },
        backgroundColor: "none",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ alignItems: "start", position: "relative" }}
      >
        {/* First Quote */}
        <Grid
          size={{ xs: 12 }}
          id="chairman-message"
          sx={{ display: { xs: "none", sm: "block", md: "block" } }}
        >
          <Grid container>
            <Grid
              size={{ xs: 12, sm: 7, lg: 4, md: 3.6 }}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",

                pr: { md: "25px", lg: "37px", sm: "24px" },
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="flex-start"
                sx={{ justifyContent: "start" }}
              >
                {/* <FormatQuoteIcon sx={{ fontSize: 40, color: "purple", mb: 1 }} /> */}
                <Box
                  component="img"
                  src={double_quotes_svg}
                  //   fontSize="300px"
                  sx={{
                    height: { md: "30px", lg: "40px", sm: "30x" },
                    width: { md: "70px", lg: "100px", sm: "40px" },
                    // aspectRatio: "1/2",
                    // flexGrow: 1,
                  }}
                />

                <Box
                  sx={{
                    pt: { md: "20px", lg: "20px", sm: "34px" },
                    pl: { md: "10px", lg: "10px", sm: "10px" },
                  }}
                >
                  <Typography variant="leadershipContentTextNewsreaderMedium">
                    {/*                     
                    We believe in the value of knowledge, the power of teaching
                    and research, and the ways that what we do here can benefit
                    society.” */}
                    {chairman_description ||
                      "The vehicle we have built here is an enormously powerful one and has been highly productive over the past 75+ years."}
                    ”
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Button
                      // variant="text"
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => {
                        handleChairmanModalOpen();
                      }}
                      sx={{
                        textTransform: "uppercase",
                        pt: { md: "25px", lg: "36px", xs: "20px" },
                        fontSize: "15px !important",
                        fontFamily: "Inter",
                        lineHeight: "22px !important",
                        color: "var(--brand-palette-text-tertiary)",
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                  <Typography
                    variant="typographyBodyInterNormalHeadingProgram"
                    sx={{
                      color: "var(--heading-text-primary)",
                      mt: "14px",
                    }}
                  >
                    {chairman_name || "Thiru. V. M. Muralidharan"}
                  </Typography>

                  {/* <Typography
                    variant="headingNameTextInterMedium"
                    sx={{
                      pt: {
                        // md: "18px",
                        // lg: "20px",
                        // sm: "20px",
                      },
                      fontSize: {
                        lg: "18px !important",
                        md: "18px !important",
                        sm: "18px !important",
                      },
                      lineHeight: "28px !important",

                      color: "var(--brand-palette-text-secondary)",
                    }}
                  >
                    {principal_name}
                  </Typography> */}
                  <Typography
                    variant="typographySubheadingText"
                    sx={{
                      color: "var(--brand-palette-text-tertiary)",
                      // pt: "5px",
                      fontSize: {
                        lg: "15px !important",
                        md: "15px !important",
                        sm: "15px !important",
                      },

                      lineHeight: "24px !important",
                    }}
                  >
                    Chairman
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              size={{ xs: 12, sm: 5, lg: 7, md: 6 }}
              display="flex"
              sx={{
                alignItems: { md: "start", sm: "start" },
                justifyContent: { md: "start", xs: "center" },
              }}
            >
              <Box
                component="img"
                // src={Leadership_principal_image} // Replace with actual image URL
                // src={
                //   principal_img_url
                //     ? `${principal_img_url}`
                //     : Leadership_principal_image
                // }
                src={
                  chairman_img_url
                    ? `${chairman_img_url}`
                    : Leadership_chairman_image
                } // Replace with actual image URL
                alt="Thiru.V.M.Muralidharan"
                // alt="Dr.S.Uma Gowrie"
                sx={{
                  width: {
                    lg: "357.226px",
                    md: "280px",
                    // sm: "350px",
                    // xs: "100%",
                  },
                  height: {
                    lg: "421.178px",
                    md: "330px",
                    sm: "400px",
                    xs: "auto",
                  },
                  aspectRatio: { lg: "357.226/421.178" }, // apply for lg
                  borderRadius: "25px",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* movile and tab */}
        <Grid
          size={{ xs: 12 }}
          sx={{ display: { xs: "block", md: "none", sm: "none" } }}
        >
          <Grid container>
            {/* <Grid size={{xs:1}}></Grid> */}
            <Grid
              size={{ xs: 2.5, md: 5 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
              }}
            >
              <Box
              // display="flex"
              // flexDirection="row"
              // alignItems="flex-start"
              // sx={{ justifyContent: "start" }}
              >
                {/* <FormatQuoteIcon sx={{ fontSize: 40, color: "purple", mb: 1 }} /> */}
                <Box
                  component="img"
                  src={double_quotes_svg}
                  //   fontSize="300px"
                  sx={{
                    height: { xs: "50px" },
                    width: { xs: "50px" },
                    // aspectRatio: "1/2",
                    // flexGrow: 1,
                  }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 9.5, sm: 5, md: 5 }}>
              <Box
                sx={{
                  pt: { md: "40px", lg: "57px", xs: "20px" },
                }}
              >
                <Typography variant="leadershipContentTextNewsreaderMedium">
                  {/* {principal_description}” */}
                  {chairman_description ||
                    "The vehicle we have built here is an enormously powerful one and has been highly productive over the past 75+ years."}
                  ”
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <Button
                    // variant="text"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => {
                      handleChairmanModalOpen();
                    }}
                    sx={{
                      textTransform: "uppercase",
                      pt: { md: "25px", lg: "36px", xs: "20px" },
                      fontSize: "15px !important",
                      fontFamily: "Inter",
                      lineHeight: "22px !important",
                      color: "var(--brand-palette-text-tertiary)",
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
                <Typography
                  variant="typographyBodyInterNormalHeadingProgram"
                  sx={{
                    color: "var(--heading-text-primary)",
                    mt: "14px",
                  }}
                >
                  {chairman_name || "Thiru. V. M. Muralidharan"}
                </Typography>
                {/* <Typography
                  variant="headingNameTextInterMedium"
                  sx={{
                    // pt: {
                    //   md: "20px",
                    //   lg: "24px",
                    //   xs: "24px",
                    // },
                    // fontSize:{xs:"24px !important" ,},
                    color: "var(--brand-palette-text-secondary)",
                  }}
                >
                  {principal_name}
                </Typography> */}
                <Typography
                  variant="typographySubheadingText"
                  sx={{
                    color: "var(--brand-palette-text-tertiary)",
                    pt: "5px",
                    mb: "24px",
                  }}
                >
                  Chairman
                </Typography>
              </Box>

              <Box
                component="img"
                src={
                  chairman_img_url
                    ? `${chairman_img_url}`
                    : Leadership_chairman_image
                }
                alt="Dr.S.Uma Gowrie"
                variant="square"
                // sx={{
                //   maxWidth: "592px",
                //   height: { lg: "699px", md: "450px" },
                // }}
                sx={{
                  // width: { md: "592px", xs: "300px" },

                  // height: { lg: "699px", md: "450px", xs: "300px" },
                  // // aspectRatio:""

                  width: "100%",
                  // maxWidth: "592px",
                  maxWidth: { lg: "592px", md: "400px" },
                  height: { lg: "699px", md: "450px", xs: "300px" },
                  borderRadius: "25px",

                  // height: { lg: "699px", xs: "auto" }, // Auto height for small screens
                  objectFit: "fill", // Optional: makes sure it looks good when height is fixed
                  // flex: "1 0 0",
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Second Quote */}
        <Grid
          size={{ xs: 12 }}
          id="principal-message"
          sx={{
            // mt: { md: "-80px" },
            // ml: { lg: "170px", md: "220px" },
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          <Grid container>
            <Grid size={{ md: 5, lg: 5, sm: 0 }}></Grid>
            <Grid
              item
              size={{ xs: 12, sm: 6, md: 3.5, lg: 3.5 }}
              display="flex"
              justifyContent="center"
              sx={{ alignItems: "start" }}
            >
              <Box
                component="img"
                src={
                  principal_img_url
                    ? `${principal_img_url}`
                    : Leadership_principal_image
                }
                alt="Dr.S.Uma Gowrie"
                variant="square"
                // sx={{ width: "100%", height: "100%" }}
                sx={{
                  // maxWidth: { md: "592px", xs: "400px" },
                  // height: { lg: "699px", md: "450px", xs: "300px" },
                  // width: "100%",
                  // maxWidth: "592px",
                  // maxWidth: { lg: "357px", md: "280px", sm: "350px" },
                  // height: { lg: "430px", md: "330px", sm: "400px" },
                  // borderRadius: "25px",

                  //  sx={{
                  maxWidth: {
                    lg: "357.226px",
                    md: "280px",
                    sm: "350px",
                    // xs: "100%",
                  },
                  height: {
                    lg: "421.178px",
                    md: "330px",
                    sm: "400px",
                    xs: "auto",
                  },
                  aspectRatio: { lg: "357.226/421.178" }, // apply for lg
                  borderRadius: "25px",
                  objectFit: "cover",
                  flexShrink: 0,

                  // height: { lg: "699px", xs: "auto" }, // Auto height for small screens
                  objectFit: "fill", // Optional: makes sure it looks good when height is fixed
                }}
              />
            </Grid>

            <Grid
              item
              size={{ xs: 12, sm: 6, md: 3.5, lg: 3.5 }}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "end",
                // ml: 2,

                pl: { md: "25px", lg: "37px" },
              }}
            >
              <Box
              // display="flex"
              // flexDirection="row"
              // alignItems="flex-start"
              // sx={{ justifyContent: "end" }}
              >
                {/* <FormatQuoteIcon sx={{ fontSize: 40, color: "purple", mb: 1 }} /> */}
                <Box
                  component="img"
                  src={double_quotes_svg}
                  //   fontSize="300px"
                  sx={{
                    // height: { md: "70px", lg: "70px", sm: "62px" },

                    height: { md: "30px", lg: "40px", sm: "30x" },
                    width: { md: "40px", lg: "40px", sm: "40px" },
                  }}
                />

                <Box
                  sx={{
                    pt: { md: "20px", lg: "10px" },
                    pl: { sm: "25px", md: "0" },
                  }}
                >
                  <Typography variant="leadershipContentTextNewsreaderMedium">
                    {principal_description ||
                      "Our focus remains on nurturing knowledgeable, skilled, ethical, and socially responsible individuals."}
                    ”
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Button
                      // variant="text"
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => {
                       handlePrincipalModalOpen()
                      }}
                      sx={{
                        textTransform: "uppercase",
                        pt: { md: "25px", lg: "36px", xs: "20px" },
                        fontSize: "15px !important",
                        fontFamily: "Inter",
                        lineHeight: "22px !important",
                        color: "var(--brand-palette-text-tertiary)",
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                  <Typography
                    variant="typographyBodyInterNormalHeadingProgram"
                    sx={{
                      color: "var(--heading-text-primary)",
                      mt: "14px",
                    }}
                  >
                    {principal_name || "Dr.S.Uma Gowrie"}
                  </Typography>

                  {/* <Typography
                    variant="headingNameTextInterMedium"
                    sx={{
                      // pt: {
                      //   md: "18px",
                      //   lg: "20px",
                      //   sm: "20px",
                      // },
                      fontSize: {
                        lg: "18px !important",
                        md: "18px !important",
                        sm: "18px !important",
                      },
                      lineHeight: "28px !important",

                      color: "var(--brand-palette-text-secondary)",
                    }}
                  >
               
                    {chairman_name}
                  </Typography> */}
                  <Typography
                    variant="typographySubheadingText"
                    sx={{
                      color: "var(--brand-palette-text-tertiary)",
                      pt: "5px",
                      fontSize: {
                        lg: "15px !important",
                        md: "15px !important",
                        sm: "15px !important",
                      },

                      lineHeight: "24px !important",
                    }}
                  >
                    Principal & Secretary
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* mobile and tab */}

        <Grid
          size={{ xs: 12 }}
          sx={{
            // mt: { md: "-80px" },
            ml: { lg: "170px", md: "220px", sm: "220px" },
            display: { xs: "block", md: "none", sm: "none" },
          }}
        >
          <Grid container>
            <Grid
              item
              size={{ xs: 10, sm: 5, md: 6 }}
              // display="flex"
              // justifyContent="center"
              // sx={{ alignItems: "start" }}
            >
              <Box
                component="img"
                src={
                  principal_img_url
                    ? `${principal_img_url}`
                    : Leadership_principal_image
                }
                alt="Dr.S.Uma Gowrie"
                variant="square"
                // sx={{ width: "100%", height: "100%" }}
                sx={{
                  // width: { md: "592px", xs: "300px" },
                  // height: { lg: "699px", md: "450px", xs: "300px" },
                  // width: "100%",
                  // maxWidth: "592px",
                  maxWidth: {
                    lg: "592px",
                    md: "400px",
                    // sm: "350px",
                    // xs: "350px",
                    // xs: "100%",
                  },
                  height: {
                    lg: "699px",
                    md: "450px",
                    sm: "400px",
                    xs: "300px",
                  },
                  borderRadius: "25px",

                  // height: { lg: "699px", xs: "auto" }, // Auto height for small screens
                  objectFit: "fill", // Optional: makes sure it looks good when height is fixed
                }}
              />
            </Grid>

            <Grid
              item
              size={{ xs: 10, sm: 6, md: 7 }}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "end",
                // ml: 2,
              }}
            >
              <Box
              // display="flex"
              // flexDirection="row"
              // alignItems="flex-start"
              // sx={{ justifyContent: "end" }}
              >
                {/* <FormatQuoteIcon sx={{ fontSize: 40, color: "purple", mb: 1 }} /> */}
                <Box
                  component="img"
                  src={double_quotes_svg}
                  //   fontSize="300px"
                  sx={{
                    height: { xs: "50px" },
                    width: { xs: "50px" },
                  }}
                />

                <Box
                  sx={{
                    pt: { md: "40px", lg: "57px" },
                    // pl: { md: "25px", lg: "37px" },
                  }}
                >
                  <Typography variant="leadershipContentTextNewsreaderMedium">
                    {/* We impart values, ethics and confidence in young women to
                    harness their full potential for their holistic
                    development.” */}
                    {/* {chairman_description}" */}
                    {principal_description ||
                      "Our focus remains on nurturing knowledgeable, skilled, ethical, and socially responsible individuals."}
                    ”
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Button
                      // variant="text"
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => {
                        // navigate(item?.navigateLink);
                        handlePrincipalModalOpen()
                      }}
                      sx={{
                        textTransform: "uppercase",
                        pt: { md: "25px", lg: "36px", xs: "20px" },
                        fontSize: "15px !important",
                        fontFamily: "Inter",
                        lineHeight: "22px !important",
                        color: "var(--brand-palette-text-tertiary)",
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                  <Typography
                    variant="typographyBodyInterNormalHeadingProgram"
                    sx={{
                      color: "var(--heading-text-primary)",
                      mt: "14px",
                    }}
                  >
                    {principal_name || "Dr.S.Uma Gowrie"}
                  </Typography>
                  <Typography
                    variant="typographySubheadingText"
                    sx={{
                      color: "var(--brand-palette-text-tertiary)",
                      pt: "5px",
                    }}
                  >
                    Principal & Secretary
                  </Typography>
                </Box>
                {/* <Divider
                            sx={{
                              borderBottomColor: "var(--brand-palette-border-strong)",
                              mt: { md: "20px", lg: "20px" },
                            }} */}
                          {/* /> */}
              </Box>
               
            </Grid>
            <Grid size={{ xs: 1 }}></Grid>
            
          </Grid>
        </Grid>
      </Grid>
      <ChairmanDeskDialog
        open={chaimanModalOpen}
        handleClose={handleChairmanModalClose}
        // {...chairmanData}
      />
      <PrincipalViewModal
        open={principalModalOpen}
        handleClose={handlePrincipalModalClose}
        // {...chairmanData}
      />
    </Box>
  );
}
export default LeadershipQuotes;
