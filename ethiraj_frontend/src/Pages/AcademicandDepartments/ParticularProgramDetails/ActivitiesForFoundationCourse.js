import React, { useEffect, useState } from "react";
import {
    Box,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Select,
    MenuItem,
    FormControl,
} from "@mui/material";

import example_Img from "../../../Assets/academicdivisions.png"

/* Sample Data */


const Activities = ({activitiesData}) => {
const [year, setYear] = useState("");

  // Auto select first year when data comes from API
  useEffect(() => {
    if (activitiesData?.length > 0) {
      setYear(activitiesData[0].academicYear);
    }
  }, [activitiesData]);

  // Hide component if no data
  if (!activitiesData || activitiesData.length === 0) {
    return null;
  }

  // Get selected year data
  const selectedYearData =
    activitiesData.find((item) => item.academicYear === year) ||
    activitiesData[0];

  const activities = selectedYearData?.activities || [];

    return (
        <Box >

            {/* Header Section */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 4,
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                {/* Title */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "600",
                        color: "#7A2C5B",
                    }}
                >
                    Activities
                </Typography>

                {/* Dropdown */}
                <FormControl size="small">
                    <Select
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        sx={{
                            minWidth: 140,
                            borderRadius: "20px",
                            fontSize: "14px",

                            /* Default border */
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#7A2C5B",
                            },
                            /* Hover */
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#7A2C5B",
                            },
                            /* Focus */
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#7A2C5B",
                            },
                            /* Text color */
                            "& .MuiSelect-select": {
                                color: "#7A2C5B",
                                fontWeight: 500,
                            },
                            /* Dropdown Icon */
                            "& .MuiSvgIcon-root": {
                                color: "#7A2C5B",
                            },
                        }}
                    >
                        {activitiesData.map((item) => (
                            <MenuItem key={item.academicYear} value={item.academicYear}>
                                {item.academicYear}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            {/* Activities Grid */}
            <Grid container spacing={3}>
                {activities.map((item) => (
                    <Grid item size={{ xs: 12, sm: 4 }} key={item.id}>
                        <Card
                            sx={{
                                // borderRadius: "8px",
                                background: "none",
                                boxShadow: "none",
                                height: "100%",
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                },
                            }}
                        >
                            {/* Image */}
                            <CardMedia
                                component="img"
                                // height="220"

                                image={item.imageUrl}
                                alt={item.title}
                                sx={{
                                    width: "100%",
                                    aspectRatio: "1 / 1",   // Makes it square
                                    objectFit: "cover",
                                    borderRadius: "8px",

                                }}
                            />

                            {/* Content */}
                            <CardContent sx={{ border: "none" }}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: 500,
                                        textAlign: "center",
                                        lineHeight: 1.5,

                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Activities;
