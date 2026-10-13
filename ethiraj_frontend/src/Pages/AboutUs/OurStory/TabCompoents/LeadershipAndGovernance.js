
import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const LeadershipAndGovernance = () => {
  const components = [
     {
      title: "Board of Trustees",
      description: "People committed to Ethiraj’s mission and interests.",
      navigateLink: "/aboutus/boardoftrustee",
      scrollId: "board-of-trustees",
    },
    {
      title: "Governing Body",
      description: "People in charge of strategic oversight and institutional stewardship.",
      navigateLink: "/aboutus/governingbody",
      scrollId: "governing-body",
    },
   
    {
      title: "College Committee",
      description: "People overseeing college affairs.",
      navigateLink: "/aboutus/collegecommittee",
    },
    {
      title: "Statutory Bodies",
      description:
        "Ensuring academic excellence,  and regulatory compliance.",
      navigateLink: "/aboutus/statutorybody",
      scrollId: "statutory-bodies",
    },
    {
      title: "Non-Statutory Bodies",
      description:
        "Advisory and support councils of the institution.",
      navigateLink: "/aboutus/nonstatutorybody",
      scrollId: "non-statutory-bodies",
    },
    {
      title: "Former Chairpersons",
      description:
        "Our legacy of distinguished institutional leadership.",
      navigateLink: "/aboutus/formerchairpersons",
      scrollId: "former-chairpersons",
    },
    {
      title: "Former Principals",
      description:
        "Esteemed academic leaders of the past committed to the mission.",
      navigateLink: "/aboutus/formerprincipals",
      scrollId: "former-principals",
    },
  ];
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        mt: { xs: "20px", md: "50px" },
        //  textAlign: "center"
      }}
    >
      {/* Heading */}
      <Typography
        variant="secondaryHeadingTextInterMedium"
        // fontWeight="bold"
        sx={{
          mb: { xs: "50px", md: "64px" },
          // textDecoration: "underline"
        }}
      >
        Ethiraj{" "}
        <span>
          leadership & governance:
        </span>{" "}
        
      </Typography>

      {/* Grid Section */}
      <Grid container spacing={4}>
        {components.map((item, index) => (
          <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Box
              id={item.scrollId}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // pushes button to bottom
                alignItems: "start",
                height: "100%",
                minHeight: { xs: "0", sm: 200 }, // ensures equal card height
                // p: 2,
                // border: "1px solid #e0e0e0",
                // borderRadius: 2,
              }}
            >
              <Box>
                <Typography
                  variant="secondaryHeadingTextInterMedium"
                  sx={{
                    textDecoration: "underline",
                    fontFamily: "Newsreader",
                    // fontWeight: "600"
                    // textDecorationColor:"gray",
                    mb: 1,
                    textAlign: "start",
                    maxWidth: "273px",
                  }}
                >
                  {item.title}
                </Typography>
                {item.description && (
                  <Typography
                    variant="typographyBodyContent"
                    sx={{
                      pt: { md: "25px", lg: "36px" },
                      fontSize: {
                        lg: "18px !important",
                        xs: "18px !important",
                        md: "15px !important",
                      },
                      lineHeight: "28px !important",
                      color: "var(--brand-palette-text-secondary)",
                      textAlign: "start",
                    }}
                  >
                    {item.description}
                  </Typography>
                )}
              </Box>

              <Button
                // variant="text"
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                  navigate(item?.navigateLink);
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LeadershipAndGovernance;
