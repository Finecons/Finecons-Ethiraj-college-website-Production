
import { Button, Typography } from "@mui/material";
import React from "react";
import { ArrowIcon } from "../../Pages/CampusLife";
import { useNavigate } from "react-router-dom";
import CustomNextArrowIcon from "../CustomNextArrowIcon/CustomNextArrowIcon";
import { Padding } from "@mui/icons-material";

const CustomNextButton = ({
  buttonText,
  fullWidth,
  onClick,
  color,
  variant,
  background,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        variant={variant || "outlined"}
        fullWidth={fullWidth}
        onClick={() => {
          navigate(onClick);
        }}
        endIcon={
          <CustomNextArrowIcon
            style={{
              fontSize: "20px",
              marginLeft: "10px",
              // color: color || "gray",
             
            }}
          />
        }
        sx={{
          // mt: { md: "64px", xs: "30px" },

          fontSize: { lg: "18px", sm: "16px", xs: "14px", md: "16px" },
          fontWeight: 500,
          borderRadius: 999,
          textTransform: "none",
          color: color || "#212529",
          // zIndex: 100000000,

          background: background || "none",
          borderColor: "black",
          px: variant ? 0 : 2.5,
          height: 40,
          "& .MuiButton-endIcon": {
            margin: 0, // remove default margin
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // force center
          },
          "&:hover": {
            background: "#6B3C58",
            color: "white",
            borderColor: "#6B3C58",
          },
        }}
      >
        <Typography sx={{ fontSize: "14px" }}>{buttonText}</Typography>
      </Button>
    </div>
  );
};

export default CustomNextButton;
