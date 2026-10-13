import React, { useState, useMemo } from "react";
import {
  Grid,
  CardMedia,
  Typography,
  Button,
  Box,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Pagination,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "../../Pages/NewsEvents";

import image1 from "../../Assets/Carosoul_image2.jpg";
import image2 from "../../Assets/Carosoul_Image1.jpg";
import image3 from "../../Assets/campus-hostel.png";
import CustomMetaChips from "../CustomMetaChips/CustomMetaChips";
import CustomButtonDropdown from "../CustomButtonDropdown/CustomButtonDropdown";
import CustomSearchFeild from "../SearchField/CustomSearchFeild";
import CustomSearchFeildAll from "../SearchField/CustomSearchFeildAll";

const newsData = [
  {
    id: 1,
    title:
      "Ethiraj College for Women Ranked “Best College of 2025” by India Today & The Week",
    department: "Administration",
    category: "General",
    date: "June 2025",
    tag: "News Story",
    image: image1,
  },
  {
    id: 2,
    title:
      "New Study Demonstrates Sustainable Catalytic Use of Hydroxyapatite for Water Purification",
    department: "Sciences",
    category: "Chemistry",
    date: "June 2025",
    tag: "Research",
    image: image2,
  },
  // {
  //   id: 3,
  //   title: "Commemorating the 135th Birth Anniversary of Our Founder",
  //   department: "History",
  //   category: "Chemistry",
  //   date: "June 2025",
  //   tag: "Event",
  //   image: image3,
  // },
  // {
  //   id: 4,
  //   title:
  //     "Innovative Approaches in Renewable Energy: Solar Panel Efficiency Improvement Techniques",
  //   department: "Sciences",
  //   category: "Energy",
  //   date: "July 2025",
  //   tag: "Research",
  //   image: image3,
  // },
  // {
  //   id: 5,
  //   title:
  //     "Exploring Quantum Computing: Bridging the Gap Between Classical and Quantum Mechanics",
  //   department: "Technology",
  //   category: "Technology",
  //   date: "August 2025",
  //   tag: "Research",
  //   image: image3,
  // },
  // {
  //   id: 6,
  //   title: "Advancements in Gene Editing: CRISPR's Role in Modern Medicine",
  //   department: "Biology",
  //   category: "Biology",
  //   date: "September 2025",
  //   tag: "Research",
  //   image: image3,
  // },
  // {
  //   id: 7,
  //   title:
  //     "The Impact of Artificial Intelligence on Global Economic Development",
  //   department: "Economics",
  //   category: "Economics",
  //   date: "October 2025",
  //   tag: "Research",
  //   image: image3,
  // },
];

const CustomNewsComponent = () => {
  const navigate = useNavigate();

  // Filters & Search States
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDate, setSelectedDate] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  // Get unique filter options dynamically
  const departments = [
    "Departments",
    ...new Set(newsData.map((n) => n.department)),
  ];
  const categories = [
    "Categories",
    ...new Set(newsData.map((n) => n.category)),
  ];
  const dates = ["Dates", ...new Set(newsData.map((n) => n.date))];

  // Filtering & Searching
  const filteredNews = useMemo(() => {
    return newsData.filter((news) => {
      const matchesDepartment =
        selectedDepartment === "All" || news.department === selectedDepartment;
      const matchesCategory =
        selectedCategory === "All" || news.category === selectedCategory;
      const matchesDate = selectedDate === "All" || news.date === selectedDate;
      const matchesSearch = news.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return (
        matchesDepartment && matchesCategory && matchesDate && matchesSearch
      );
    });
  }, [selectedDepartment, selectedCategory, selectedDate, searchQuery]);

  // Pagination
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedNews = filteredNews.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  return (
    <Box sx={{ mx: "auto" }}>
      {/* Explore by Filters */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mb: 3,
          alignItems: "center",
        }}
      >
        <Typography variant="subHeadingTextInterMedium">Explore by</Typography>
        {/* <CustomButtonDropdown /> */}
        <CustomButtonDropdown
          title="Departments"
          color="#6B3C58"
          background="white"
          fontSize="14px !important"
          fontWeight="400"
          expandBackgroundColor="#6B3C58"
          hoverBackground="rgba(255,0,0,0.2)"
          onSelect={(item) => console.log("Selected Item:", item)}
          borderColor="#6B3C58"
          items={[
            {
              label: "UG Semester 1",
              onClick: () => console.log("UG clicked"),
            },
            { label: "Hostel Fees", highlight: true },
            { label: "Canteen Fees", color: "orange", fontSize: "16px" },
          ]}
        />

        {/* categories */}
        <CustomButtonDropdown
          title="Categories"
          color="#6B3C58"
          background="white"
          fontSize="14px !important"
          fontWeight="400"
          expandBackgroundColor="#6B3C58"
          hoverBackground="rgba(255,0,0,0.2)"
          onSelect={(item) => console.log("Selected Item:", item)}
          borderColor="#6B3C58"
          items={[
            {
              label: "UG Semester 1",
              onClick: () => console.log("UG clicked"),
            },
            { label: "Hostel Fees", highlight: true },
            { label: "Canteen Fees", color: "orange", fontSize: "16px" },
          ]}
        />
        {/* administration */}

        <CustomButtonDropdown
          title="Calender"
          color="#6B3C58"
          background="white"
          fontSize="14px !important"
          fontWeight="400"
          expandBackgroundColor="#6B3C58"
          hoverBackground="rgba(255,0,0,0.2)"
          onSelect={(item) => console.log("Selected Item:", item)}
          borderColor="#6B3C58"
          items={[
            {
              label: "UG Semester 1",
              onClick: () => console.log("UG clicked"),
            },
            { label: "Hostel Fees", highlight: true },
            { label: "Canteen Fees", color: "orange", fontSize: "16px" },
          ]}
        />
       
        <CustomSearchFeildAll />
      </Box>

      {/* Result Count */}
      <Typography variant="body2" sx={{ mb: 2 }}>
        {filteredNews.length} Results found
        {selectedDepartment !== "All" && `for: ${selectedDepartment}`}
      </Typography>

      {/* News Cards */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {paginatedNews.map((p, idx) => (
              <Box key={p.id}>
                <Grid container alignItems="flex-start" columnSpacing={2}>
                  {/* Left: thumbnail */}
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box
                      component="img"
                      src={p.image}
                      alt={p.title}
                      sx={{
                        width: "100%",
                        height: 248,
                        objectFit: "cover",
                        borderRadius: 1,
                      }}
                    />
                  </Grid>

                  {/* Right: title + meta */}
                  <Grid size={{ xs: 12, sm: 6, md: 8 }}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        justifyContent: "space-between",
                        flexDirection: "column",
                        minHeight: { sm: "248px" },
                        maxHeight: "100%",
                      }}
                    >
                      <Typography
                        // component={p.href ? "Link" : "h3"}
                        href={p.href || undefined}
                        variant="typographyContentHeading"
                        sx={{
                          display: "inline-block",
                          textDecoration: "none",
                          color: "text.primary",
                          lineHeight: 1.4,
                          // "&:hover": { textDecoration: p.href ? "underline" : "none" },
                        }}
                      >
                        {p.title}
                      </Typography>

                      <Box sx={{ gap: 2 }}>
                        <CustomMetaChips date={p.date} topic={p.category} />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>

                {idx < paginatedNews.length - 1 && <Divider sx={{ my: 2 }} />}
              </Box>
            ))}
          </Box>

          {/* Pagination */}
          {totalPages > 1 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(e, value) => setPage(value)}
                color="primary"
                shape="rounded"
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomNewsComponent;
