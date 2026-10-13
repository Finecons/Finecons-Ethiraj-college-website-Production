import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import CustomMetaChips from "../CustomMetaChips/CustomMetaChips";

const CustomResearchArticle = ({ title, blurb, date, topic, researchData }) => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 0,
        background: "none",
        p: 0,
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <CardContent sx={{ p: { xs: "20p", md: "16px", lg: "24px" } }}>
        <Typography
          variant="typographyContentHeadingResearch"
          sx={{
            // fontSize: { xs: 18, sm: 20 },
            // fontWeight: 700,
            // lineHeight: 1.4,
            pb: "16px",
            color: "var(--brand-palatte-text-color)",
          }}
        >
          {researchData?.title}
        </Typography>
        <Typography
          variant="typographyBodyContent"
          sx={{
            color: "var(--brand-palette-text-secondary)",
            pb: { sm: "24px", xs: "14px" },
          }}
        >
          {researchData?.description}
        </Typography>
        <CustomMetaChips
          date={researchData?.date}
          topic={researchData?.category}
        />
      </CardContent>
    </Card>
  );
};

export default CustomResearchArticle;
