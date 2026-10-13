import React from "react";
import { Box, Grid, Typography, Link, Divider } from "@mui/material";
import Fellowships from "../../../Assets/ECRICPhDFellowships.jpg";
import { useNavigate } from "react-router-dom";
const ECRICPhDFellowships = ({ecricPhdFellowshipsDatas}) => {
const navigate = useNavigate();
  return (
    <Box id="phd-fellowship" sx={{ py: 6 }}>
      <Grid
        container
        spacing={6}
        alignItems="stretch" // ⭐ important
      >
        {/* Left Content */}
        <Grid
          item
          size={{ xs: 12, md: 5 }}
          sx={{
            display: "flex",
            order: { xs: 2, md: 1 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%", // ⭐ match image height
            }}
          >
            <Typography variant="headingTextNewsreaderMedium">
              ECRIC Ph.D Fellowships
            </Typography>

            <Typography
              variant="typographyBodyInterNormal"
              sx={{ mb: "24px", mt: "24px" }}
            >
              ECRIC Ph.D Fellowships at Ethiraj College for Women enable focused
              research through mentorship, resources, and academic community.
            </Typography>

            <Typography variant="typographyBodyInterNormal" sx={{ mb: 4 }}>
              This opportunity is for qualified Ph.D students of Ethiraj College
              of Women to undertake advanced study and research leading to Ph.D
              degrees in sciences, arts and humanities.
            </Typography>

            {/* Push stats to bottom if needed */}
            <Box sx={{ mt: "auto" }}>
              <Grid container spacing={3} alignItems="stretch">
                {/* First Stat */}
                <Grid
                  item
                  size={{ xs: 12, sm: 6, md: 12 }}
                  sx={{ display: "flex" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="headingTextNewsreaderMedium"
                      fontWeight={600}
                    >
                      10
                    </Typography>

                    <Typography
                      variant="secondaryTextInterRegular"
                      sx={{ mt: { xs: "16px" } }}
                    >
                      Research Departments
                    </Typography>

                    <Typography
                      variant="typographyBodyInterNormal"
                      onClick={() =>{
                        navigate("/academics/programlist")
                      }}
                      // component="a"
                      // href="https://ethiraj.frontend.finecons.com/#/academics/programlist"
                      // target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: "#003BD1" ,mb: "8px",textDecoration: "underline", cursor: "pointer" }}
                    >
                      Explore Ph.D Programmes
                    </Typography>

                    <Divider sx={{ mt: "auto", borderWidth: "1.2px" }} />
                  </Box>
                </Grid>

                {/* Second Stat */}
                <Grid
                  item
                  size={{ xs: 12, sm: 6, md: 12 }}
                  sx={{ display: "flex" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="headingTextNewsreaderMedium"
                      fontWeight={600}
                    >
                      52
                    </Typography>

                    <Typography
                      variant="secondaryTextInterRegular"
                      sx={{ mt: { xs: "16px" } , mb: "8px" }}
                    >
                      Fellows Since 2016
                    </Typography>

                    <Divider sx={{ mt: "auto", borderWidth: "1.2px" }} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        {/* Right Image */}
        <Grid item size={{ xs: 12, md: 7 }} sx={{ order: { xs: 1, md: 2 } }}>
          <Box
            component="img"
            src={Fellowships}
            alt="Students writing exam"
            sx={{
              width: "100%",
              height: "100%", // ⭐ fills grid height
              borderRadius: 4,
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ECRICPhDFellowships;
