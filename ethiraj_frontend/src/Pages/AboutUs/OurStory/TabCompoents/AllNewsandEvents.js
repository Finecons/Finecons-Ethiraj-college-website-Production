import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CustomBreadCrumbs from "../../../../Components/CustomBreadCrumbs/CustomBreadCrumbs";
import NewsEvents from "./NewsEvents";
import CustomNewsComponent from "../../../../Components/CustomNewsComponent/CustomNewsComponent";
// import NewsEvents from "../../../NewsEvents";

const AllNewsandEvents = () => {
  const breadgrumpsItems = [
    { name: "Home", to: "/" },
    // { name: "About Us", to: "/aboutus" },
    { name: "Latest News & Events" },
  ];
  return (
    <div>
      <Grid container sx={{
         py: { lg: "41px", md: "35px" ,xs:"35px"},
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },


    }} spacing={4}>
        {/* Governing Body Table */}
        <CustomBreadCrumbs items={breadgrumpsItems} />

        <Grid size={{ xs: 12 }}>
          <Typography variant="primaryHeadingText">
            {/* {pageHeader?.title} */}
            Latest News & Events
          </Typography>
          <Divider
            sx={{ borderWidth: "1px", borderColor: "lightgray", mt: "30px" }}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <NewsEvents />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Divider />
        </Grid>
        <CustomNewsComponent />
      </Grid>
    </div>
  );
};

export default AllNewsandEvents;
