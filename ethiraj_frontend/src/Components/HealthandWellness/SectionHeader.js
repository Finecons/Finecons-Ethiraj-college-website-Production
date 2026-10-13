import { Typography } from "@mui/material";

const SectionHeader = ({ title }) => {
  return (
    <Typography
      variant="headingTextNewsreaderMedium"
    //   fontWeight={600}
      sx={{
        // fontFamily: "serif",
        mb: "21px",
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionHeader;