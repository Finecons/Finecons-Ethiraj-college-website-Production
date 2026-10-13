
import React from "react";
import { Breadcrumbs, Link, Typography, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ArrowIcon } from "../../Pages/NewsEvents";
import { GoArrowRight } from "react-icons/go";


/**
 * Props:
 *  - items: array of breadcrumb objects { name: string, to?: string }
 *    - if "to" is provided => clickable link
 *    - if "to" is not provided => current page
 */
export default function CustomBreadCrumbs({ items = [], colorWhite }) {
  return (
    <Box
      sx={{
        display: "inline-block", // ✅ keeps border to content width
        borderBottom: "1px dashed #D1D1D1",
        // mb: "20px", // space between text and border
      }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={
          // <span
          //   style={{
          //     // color: "#D1D1D1"
          //     color: colorWhite ? "#D1D1D1" : "#212529",
          //     opacity: colorWhite ? 0.7 : "none",
          //   }}
          // >
          //   /
          // </span>
          <GoArrowRight
            style={{
              fontSize: 18,
              //  color: "white",
              color: colorWhite ? "#D1D1D1" : "#212529",
              opacity: colorWhite ? 0.7 : "none",
              ml: "5px",
            }}
          />
        }
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return isLast || !item.to ? (
            <Typography
              key={index}
              sx={{
                color: colorWhite ? "#D1D1D1" : "#212529", // ✅ current/last breadcrumb color
                // fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "400",

                opacity: colorWhite ? 0.7 : "none",
              }}
            >
              {item.name}
            </Typography>
          ) : (
            <Link
              component={RouterLink}
              underline="none"
              color="inherit"
              to={item.to}
              key={index}
               state={item.state}  
              sx={{
                color: colorWhite ? "#D1D1D1" : "#212529", // ✅ inactive breadcrumb color
                // "&:hover": { color: "#000" }, // hover effect
                opacity: colorWhite ? "0.7" : "none",
              }}
            >
              <Typography
                //   key={index}
                sx={{
                  color: colorWhite ? "#D1D1D1" : "#212529", // ✅ current/last breadcrumb color
                  // fontWeight: "bold",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: "400",
                }}
              >
                {item.name}
              </Typography>
              {/* {item.name} */}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}
