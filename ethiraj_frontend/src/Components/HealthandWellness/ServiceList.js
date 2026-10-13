import { Box, Divider, Typography } from "@mui/material";

const ServiceList = ({ services }) => {
  return (
    <>
      {services.map((service, index) => (
        <Box key={index} sx={{ maxWidth: { xs: "100%", md: "100%" } }}>
          <Typography variant="typographyBodyInterNormal" py={1.5}>
            {service}
          </Typography>
          <Divider sx={{borderWidth:"1.3px"}}/>
        </Box>
      ))}
    </>
  );
};

export default ServiceList;