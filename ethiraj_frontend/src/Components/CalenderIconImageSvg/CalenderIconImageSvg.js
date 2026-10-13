
import { Height } from "@mui/icons-material";
import { ReactComponent as CalendarIcon } from "../../Assets/Calendesvgicon.svg";
import { Box } from "@mui/material";

export default function CalendarIconImageSvg() {
  return (
    <Box
      sx={{
        color: "#6C63FF", // This will now color your SVG
        "& .calendar-icon": {
          width: { lg: 24, md: 20 },
          height: { lg: 24, md: 20 },
        },
      }}
    >
      <CalendarIcon className="calendar-icon" />
    </Box>
  );
}
