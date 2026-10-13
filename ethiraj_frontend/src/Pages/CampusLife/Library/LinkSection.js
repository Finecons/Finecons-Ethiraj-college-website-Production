import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const LinkSection = ({ sections }) => {
  return (
    <div>
      {/* Dynamic Sections */}
  
        <Box
          
          sx={{ mb: { xs: 2, md: 3 } }}
        >
          {/* Section Title */}
          <Typography
            variant="typographyContentHeadingProgram"
            sx={{
              color: "var(--brand-palatte-text-color)",
              mb: 2,
            }}
          >
            {sections.title}
          </Typography>

          {/* Section Links */}
          {sections.links.map((link, lIndex) => (
            <Typography
              key={lIndex}
              variant="typographyBodyInterNormal"
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              
              sx={{
                color: "#003BD1",
                display: "block",
                mb: 1,
                textDecoration: link.underline === "false" ? "none" : "underline",
              }}
            >
              {link.label}
            </Typography>
          ))}
        </Box>
    </div>
  );
};

export default LinkSection;
