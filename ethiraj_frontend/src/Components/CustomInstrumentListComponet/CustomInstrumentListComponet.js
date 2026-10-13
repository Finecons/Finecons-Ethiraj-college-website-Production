import React from "react";
import { Box, Paper, Typography, Divider } from "@mui/material";




const CustomInstrumentListComponet = ({ listOfData, title }) => {
  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
      //   py: { lg: "72px", md: "60px", xs: "20px", sm: "50px" }, 

    }}>
      <Paper
        elevation={2}
        sx={{
          width: "100%",
          //   maxWidth: 900,
          boxShadow: "none",

          background: "none"
        }}
      >

        <Typography
          // key={index}
          variant="subTextInterMedium"
        // sx={{ maxWidth: { lg: "693px", md: "550px" } }}
        >
          {title}

        </Typography>
        <br />
        {/* Header */}
        <Box sx={{ py: 2 }}>
          <Typography variant="typographyBodyInterMaintext" sx={{
            color: "#868E96",
          }} >
            NAME OF THE INSTRUMENT
          </Typography>

        </Box>

        <Divider />

        {/* List */}
        {listOfData.map((item, index) => (
          <Box key={index}>
            <Box sx={{ py: 2 }}>
              <Typography variant="typographyBodyInterMaintext"
              >{item}</Typography>
            </Box>
            {index !== listOfData.length && <Divider sx={{
              color: "#868E96",
            }} />}
          </Box>
        ))}
        <br />
        <br />
        <br />
        <br />

      </Paper>
    </Box>
  );
};

export default CustomInstrumentListComponet;
