import React from "react";

// MUI components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";

// MUI icons
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CustomSectionAccordion = ({ title, id, children }) => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Grid item size={{xs:12}}>
      {/* Header */}
      <Grid
        alignItems="center"
        justifyContent="space-between"
        sx={{ display: "flex" }}
      >
        <Typography
          variant="subTextInterMedium"
          id={id}
          sx={{
            mt: { xs: "32px", sm: "70px" },
            mb: { xs: "18px", sm: "10px" },
          }}
        >
          {title}
        </Typography>

        <IconButton
          onClick={handleToggle}
          sx={{
            mt: { xs: "32px", sm: "70px" },
            mb: { xs: "18px", sm: "10px" },
          }}
        >
          {open ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Grid>

      {/* Expandable Content */}
      <Collapse in={open} timeout={300}>
        <Grid
          container
          columnSpacing={2}
          sx={{
            mt: { md: "22px", lg: "30px" },
          }}
        >
          {children}
        </Grid>
      </Collapse>

      {/* Divider when closed */}
      {!open && (
        <Divider
          sx={{
            borderColor: "var(--brand-palette-border-strong)",
            mt: { md: "20px", lg: "20px" },
          }}
        />
      )}
    </Grid>
  );
};

export default CustomSectionAccordion;
