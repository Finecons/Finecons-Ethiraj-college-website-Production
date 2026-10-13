import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "../../Pages/NewsEvents";
import CustomBreadCrumbs from "../CustomBreadCrumbs/CustomBreadCrumbs";
import ImageIcon from "@mui/icons-material/Image";
const CustomAboutUsTable = ({
  tableHeadData,
  tableBodyData,
  navidateOtherData,
  pageHeader,
  breadgrumpsItems,
  memberNewLayout
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <Grid
        container
        sx={{
          py: { lg: "41px", md: "30px", sm: "30px", xs: "40px" },
          px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
        }}
      >
        {/* Governing Body Table */}
        <CustomBreadCrumbs items={breadgrumpsItems} />

        <Grid
          size={{ xs: 12 }}
          sx={{
            mt: { xs: "24px" },
            mb: { lg: "50px", md: "50px", xs: "50px" },
          }}
        >
          <Typography variant="primaryHeadingText">
            {pageHeader?.title}
          </Typography>
          {pageHeader?.subText && (
            <Typography
              variant="typographyBodyInterNormal"
              mt={1}
              sx={{
                maxWidth: { lg: "1349px", md: "900px" },
                // display: { xs: "none", md: "block" },
              }}
            >
              {pageHeader?.subText}
              {pageHeader?.subText2 && (
                <>
                  <br />
                  <br />

                  {pageHeader?.subText2}
                </>
              )}
            </Typography>
          )}



          <Grid container sx={{ mt: { lg: "72px", md: "50px", sm: "30px", xs: "30px" } }} spacing={{ xs: 3, sm: 4, md: 5 }}>

            {memberNewLayout ? (
              <>
                {/* ✅ First Member - Centered */}
                {tableBodyData?.length > 0 && (
                  <Grid item size={{xs:12}} key="first-member">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      {tableBodyData[0]?.logo && (
                        <Box
                          component="img"
                          src={tableBodyData[0]?.logo}
                          alt={tableBodyData[0]?.name}
                          sx={{
                            width: { xs: "100%", sm: "50%", md: "25%" },
                            aspectRatio: " 5/ 6",
                            objectFit: "cover",
                            borderRadius: "2px",
                            mb: "12px",
                          }}
                        />
                      )}

                      <Typography
                        variant="typographyTableTextNewsreader"
                        sx={{ color: "#212529", fontWeight: 500 }}
                      >
                        {tableBodyData[0]?.name}
                      </Typography>

                      <Typography
                        variant="bodyTextInterRegular"
                        sx={{ color: "#6c757d", mt: "4px" }}
                      >
                        {tableBodyData[0]?.position}
                      </Typography>

                      <Typography
                        variant="bodyTextSmallInterRegular"
                        sx={{ color: "#6c757d", mt: "4px" }}
                      >
                        {tableBodyData[0]?.description}
                      </Typography>
                    </Box>
                  </Grid>
                )}

                {/* ✅ Remaining Members */}
                {tableBodyData?.slice(1).map((member, idx) => (
                  <Grid item  size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      {member?.logo ? (
                        <Box
                          component="img"
                          src={member?.logo}
                          alt={member?.name}
                          sx={{
                            width: "100%",
                            aspectRatio: "1 / 1",
                            objectFit: "cover",
                            borderRadius: "2px",
                            mb: "12px",
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            width: "100%",
                            height: { xs: "260px", sm: "300px", md: "280px" },
                            backgroundColor: "#e0e0e0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <ImageIcon sx={{ fontSize: 40, color: "#9e9e9e" }} />
                        </Box>
                      )}

                      <Typography
                        variant="typographyTableTextNewsreader"
                        sx={{ color: "#212529", fontWeight: 500 }}
                      >
                        {member?.name}
                      </Typography>

                      <Typography
                        variant="bodyTextInterRegular"
                        sx={{ color: "#6c757d", mt: "4px" }}
                      >
                        {member?.position}
                      </Typography>

                      <Typography
                        variant="bodyTextSmallInterRegular"
                        sx={{ color: "#6c757d", mt: "4px" }}
                      >
                        {member?.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </>
            ) : (
              /* ✅ OLD DESIGN (Your Original Layout) */

              tableBodyData?.map((member, idx) => (
                <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    {/* Image */}
                    {member?.logo ? (
                      <Box
                        component="img"
                        src={member?.logo}
                        alt={member?.name}
                        sx={{
                          width: "100%",
                          // height: { xs: "260px", sm: "300px", md: "280px" },
                          aspectRatio: "1 / 1",   // ✅ Makes it square

                          objectFit: "cover",
                          borderRadius: "2px",
                          mb: "12px",
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: "100%",
                          height: { xs: "260px", sm: "300px", md: "280px" },
                          backgroundColor: "#e0e0e0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <ImageIcon sx={{ fontSize: 40, color: "#9e9e9e" }} />
                      </Box>
                    )}


                    {/* Name */}
                    <Typography
                      variant="typographyTableTextNewsreader"
                      sx={{
                        color: "#212529",
                        fontWeight: 500,
                      }}
                    >
                      {member?.name}
                    </Typography>

                    {/* Role */}
                    <Typography
                      variant="bodyTextInterRegular"
                      sx={{
                        color: "#6c757d",
                        mt: "4px",
                      }}
                    >
                      {member?.position}
                    </Typography>
                    {/* Role */}
                    <Typography
                      variant="bodyTextSmallInterRegular"
                      sx={{
                        color: "#6c757d",
                        mt: "4px",
                      }}
                    >
                      {member?.description}
                    </Typography>
                  </Box>
                </Grid>
              ))
            )}  </Grid>
          {/* </Paper> */}
        </Grid>

        {/* Other Leadership Positions & Offices */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{ maxWidth: { lg: "500px", md: "350px" } }}
          >
            Other Leadership Positions & Offices
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 8 }}>
          <Grid container spacing={2}>
            {navidateOtherData?.map((item, idx) => (
              <Grid
                item
                size={{ xs: 12 }}
                key={idx}
                sx={{
                  borderBottom: "1px solid var(--border-color-default)",
                  mt: { xs: "32px", md: "0" },
                  p: { xs: "20px 0", md: "0" },
                  transition: "background 0.3s ease", // smooth background transition

                  "&:hover": {
                    background: "hsla(300, 100%, 95%, 1)",
                  },
                }}
              >
                <Button
                  // variant="outlined"
                  onClick={() => {
                    navigate(item?.navigateLink);
                  }}
                  endIcon={
                    <ArrowIcon
                      sx={{ fontSize: 20, color: "#212529", ml: "5px" }}
                    />
                  }
                  fullWidth
                  sx={{
                    justifyContent: "space-between",
                    borderRadius: 2,
                    py: { lg: "20px", md: "16px" },
                    // fontWeight: "bold",
                    color: "var(--brand-palatte-text-color)",
                  }}
                >
                  <Typography variant="subHeadingTextInterNextPage">
                    {item?.title}
                  </Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomAboutUsTable;
