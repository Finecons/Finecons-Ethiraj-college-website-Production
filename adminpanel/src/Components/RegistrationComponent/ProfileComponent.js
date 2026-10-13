import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const ProfileComponent = () => {
  return (
    <Box>
      {/* Background Header */}
      <Box
        sx={{
          background: "linear-gradient(to bottom right, #7d6228, #c4a919)",
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          color="white"
          fontWeight="bold"
        >
          Profile
        </Typography>
      </Box>

      {/* Profile Content */}
      <Paper
        sx={{
          marginTop: "-60px",
          padding: "16px",
          borderRadius: "16px",
        }}
        elevation={3}
      >
        {/* Profile Header */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            padding: "16px",
          }}
        >
          {/* Avatar + Name */}
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              src="https://via.placeholder.com/150"
              alt="John Doe"
              sx={{ width: 80, height: 80 }}
            />
            <Typography variant="h5" fontWeight="bold">
              John Doe
            </Typography>
          </Box>

          {/* Edit Button */}
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            sx={{
              borderColor: "#b38233",
              color: "#b38233",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#f5f2e6",
                borderColor: "#b38233",
              },
            }}
          >
            Edit
          </Button>
        </Box>

        {/* Section Title */}
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ padding: "16px", color: "#333" }}
        >
          Personal Details
        </Typography>
      </Paper>
    </Box>
  );
};

export default ProfileComponent;
