import React from "react";
import { Chip, Stack, Divider, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const CustomMetaChips = ({ date, topic }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {/* Date with icon */}
      <Chip
        icon={
          <CalendarTodayIcon
            sx={{
              fontSize: {
                xs: "14px !important",
                sm: " 17.086px !important",
                md: " 15.086px !important",
              },
            }}
          />
        }
        label={
          <Typography
            variant="typographyBodyInterNormalSmall"
            sx={{
              fontSize: {
                // xs:"12px !important",md:" 14.086px !important",lg:" 17.086px !important"
                xs: "14px !important",
                sm: " 17.086px !important",
                md: " 15.086px !important",
              },

              color: "#495057",
            }}
          >
            {date}
          </Typography>
        }
        variant="outlined"
        sx={{
          border: "none", // remove border
          color: "#495057",

          backgroundColor: "transparent",
          "& .MuiChip-icon": {
            // color: "gray", // customize icon color if needed
            color: "#495057",
          },
        }}
      />

      {/* Vertical divider */}
      <Divider orientation="vertical" flexItem />

      {/* Topic without border */}
      <Chip
        // typographyBodyInterNormalSmall
        label={
          <Typography
            variant="typographyBodyInterNormalSmall"
            sx={{
              // fontSize:{xs:"12px !important",md:" 14.086px !important",lg:" 17.086px !important"}
              fontSize: {
                xs: "14px !important",
                sm: " 17.086px !important",
                md: " 15.086px !important",
              },
              color: "#495057",
            }}
          >
            {topic}
          </Typography>
        }
        variant="outlined"
        sx={{
          border: "none",
          backgroundColor: "transparent",
        }}
      />
    </Stack>
  );
};

export default CustomMetaChips;
