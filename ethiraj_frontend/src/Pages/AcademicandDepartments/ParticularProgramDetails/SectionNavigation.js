// // // // import React, { useState } from "react";
// // // // import { Box, Typography, TextField, InputAdornment, List, ListItemButton, ListItemText } from "@mui/material";
// // // // import SearchIcon from "@mui/icons-material/Search";

// // // // const menuItems = [
// // // //   "About the Commerce Department",
// // // //   "Explore Programmes",
// // // //   "Facilities & Infrastructure",
// // // //   "Achievements & Activities",
// // // //   "Other Related Links",
// // // // ];

// // // // const SectionNavigation = () => {
// // // //   const [search, setSearch] = useState("");

// // // //   const filteredItems = menuItems.filter((item) =>
// // // //     item.toLowerCase().includes(search.toLowerCase())
// // // //   );

// // // //   return (
// // // //     <Box sx={{ width: 300 }}>
// // // //       <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
// // // //         ON THIS PAGE
// // // //       </Typography>

// // // //       <TextField
// // // //         fullWidth
// // // //         placeholder="Search"
// // // //         size="small"
// // // //         value={search}
// // // //         onChange={(e) => setSearch(e.target.value)}
// // // //         sx={{ mb: 2 }}
// // // //         InputProps={{
// // // //           startAdornment: (
// // // //             <InputAdornment position="start">
// // // //               <SearchIcon fontSize="small" />
// // // //             </InputAdornment>
// // // //           ),
// // // //         }}
// // // //       />

// // // //       <List>
// // // //         {filteredItems.map((item, index) => (
// // // //           <ListItemButton key={index} sx={{ py: 0.5 }}>
// // // //             <ListItemText primary={item} />
// // // //           </ListItemButton>
// // // //         ))}
// // // //       </List>
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default SectionNavigation;

// // // import React, { useState, useEffect } from "react";
// // // import {
// // //   Box,
// // //   Typography,
// // //   TextField,
// // //   InputAdornment,
// // //   List,
// // //   ListItemButton,
// // //   ListItemText,
// // //   ListItem,
// // //   MenuItem,
// // //   Grid,
// // //   FormControl,
// // //   Select,
// // // } from "@mui/material";
// // // import SearchIcon from "@mui/icons-material/Search";

// // // const menuItems = [
// // //   { label: "About the Commerce Department", target: "about-section" },
// // //   { label: "Explore Programmes", target: "programmes-section" },
// // //   { label: "Facilities & Infrastructure", target: "facilities-section" },
// // //   { label: "Achievements & Activities", target: "activities-section" },
// // //   { label: "Research Highlights", target: "research-section" },
// // //   { label: "Other Departments", target: "other-departments-section" },
// // // ];

// // // const SectionNavigation = () => {
// // //   const [search, setSearch] = useState("");
// // //   const [activeSection, setActiveSection] = useState("");

// // //   // const handleScrollToSection = (id) => {
// // //   //   const element = document.getElementById(id);
// // //   //   if (element) {
// // //   //     element.scrollIntoView({ behavior: "smooth", block: "start" });
// // //   //   }
// // //   // };
// // //   const handleScrollToSection = (id) => {
// // //     const element = document.getElementById(id);
// // //     if (element) {
// // //       const navbarHeight = 100; // adjust based on your navbar height
// // //       const elementPosition =
// // //         element.getBoundingClientRect().top + window.scrollY;
// // //       const offsetPosition = elementPosition - navbarHeight;

// // //       window.scrollTo({
// // //         top: offsetPosition,
// // //         behavior: "smooth",
// // //       });
// // //     }
// // //   };

// // //   // Track which section user is currently reading
// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       menuItems.forEach((item) => {
// // //         const sec = document.getElementById(item.target);
// // //         if (sec) {
// // //           const rect = sec.getBoundingClientRect();
// // //           if (rect.top <= 120 && rect.bottom >= 120) {
// // //             setActiveSection(item.target);
// // //           }
// // //         }
// // //       });
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   const filteredItems = menuItems.filter((item) =>
// // //     item.label.toLowerCase().includes(search.toLowerCase())
// // //   );

// // //   return (
// // //     <Box sx={{ width: { xs: "100%", md: 250 }, position: "sticky", top: 100 }}>
// // //       <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
// // //         ON THIS PAGE
// // //       </Typography>
// // //       <Grid
// // //         size={{ xs: 12, sm: 3 }}
// // //         sx={{
// // //           display: { xs: "block", md: "none" },
// // //         }}
// // //       >
// // //         <FormControl
// // //           // fullWidth
// // //           size="small"
// // //           sx={{
// // //             width: {
// // //               xs: "100%", // full width on extra-small screens
// // //               // sm: "auto", // original (auto) width on small and larger screens
// // //             },
// // //           }}
// // //           // sx={{ display: { xs: "block", md: "none" } }}
// // //         >

// // //           <Select
// // //             value={levelOfStudy}
// // //             onChange={(e) => onLevelChange(e.target.value)}
// // //             displayEmpty
// // //             open={levelOfStudyOpen}
// // //             onOpen={() => setLevelOfStudyOpen(true)}
// // //             onClose={() => setLevelOfStudyOpen(false)}
// // //             MenuProps={{
// // //               PaperProps: {
// // //                 sx: {
// // //                   backgroundColor: "#6B3C58",
// // //                   borderRadius: "10px",
// // //                   marginTop: "5px",
// // //                   color: "white",
// // //                   overflowY: "auto",
// // //                   "& .MuiMenuItem-root:hover": {
// // //                     backgroundColor: "#6B3C58",
// // //                   },
// // //                 },
// // //               },
// // //             }}
// // //             sx={{
// // //               backgroundColor: levelOfStudyOpen ? "#6B3C58" : "white",
// // //               color: levelOfStudyOpen ? "white" : "black",
// // //               borderRadius: "24px",
// // //               border: "none",
// // //               "& .MuiSvgIcon-root": {
// // //                 color: levelOfStudyOpen ? "white" : "black",
// // //               },
// // //               fontSize: "14px",
// // //               width: "100%",
// // //               maxWidth: { sm: "300px", xs: "100%" },
// // //               transition: "background-color 0.2s ease",

// // //               "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
// // //                 border: levelOfStudyOpen ? "none" : "1px solid #6B3C58",
// // //               },
// // //               "& .MuiOutlinedInput-notchedOutline": {
// // //                 border: levelOfStudyOpen ? "none" : "1px solid #6B3C58",
// // //               },

// // //               // ✅ Force ellipsis to actually work
// // //               "& .MuiSelect-select": {
// // //                 display: "block !important", // force block layout instead of flex
// // //                 whiteSpace: "nowrap",
// // //                 overflow: "hidden",
// // //                 textOverflow: "ellipsis",
// // //                 minWidth: 0,
// // //                 width: "100%",
// // //               },
// // //             }}
// // //           >
// // //             {levelOptions.map((label) => (
// // //               <MenuItem
// // //                 key={label}
// // //                 value={label}
// // //                 title={label} // ✅ show full text on hover
// // //                 sx={{
// // //                   whiteSpace: "nowrap",
// // //                   overflow: "hidden",
// // //                   textOverflow: "ellipsis",
// // //                   maxWidth: "280px",

// // //                   "&.MuiMenuItem-root.Mui-selected": {
// // //                     backgroundColor: "transparent !important",
// // //                   },

// // //                   "&:hover": {
// // //                     background: "none !important",
// // //                   },
// // //                   background: "none",
// // //                 }}
// // //               >
// // //                 <Typography
// // //                   sx={{
// // //                     fontSize: "14px",
// // //                     whiteSpace: "nowrap",
// // //                     overflow: "hidden",
// // //                     textOverflow: "ellipsis",
// // //                   }}
// // //                 >
// // //                   {label}
// // //                 </Typography>
// // //               </MenuItem>
// // //             ))}
// // //           </Select>
// // //         </FormControl>
// // //       </Grid>

// // //       <TextField
// // //         fullWidth
// // //         placeholder="Search"
// // //         size="small"
// // //         value={search}
// // //         onChange={(e) => setSearch(e.target.value)}
// // //         sx={{ mb: 2 }}
// // //         InputProps={{
// // //           startAdornment: (
// // //             <InputAdornment position="start">
// // //               <SearchIcon fontSize="small" />
// // //             </InputAdornment>
// // //           ),
// // //         }}
// // //       />

// // //       <List>
// // //         {filteredItems.map((item, index) => (
// // //           <ListItem
// // //             key={index}
// // //             onClick={() => handleScrollToSection(item.target)}
// // //             sx={{
// // //               py: 0.7,
// // //               px: 0,
// // //               borderRadius: "6px",
// // //               // backgroundColor:
// // //               //   activeSection === item.target ? "#e9f3ff" : "transparent",
// // //               // "&:hover": {
// // //               //   backgroundColor: "#f5f5f5",
// // //               // },
// // //             }}
// // //           >
// // //             <ListItemText
// // //               primary={
// // //                 <Typography
// // //                   sx={{
// // //                     fontSize: "14px",
// // //                     fontWeight: activeSection === item.target ? 600 : 400,
// // //                     cursor: "pointer",
// // //                   }}
// // //                 >
// // //                   {item.label}
// // //                 </Typography>
// // //               }
// // //               primaryTypographyProps={{
// // //                 fontWeight: activeSection === item.target ? 600 : 400,
// // //                 fontSize: "14px",
// // //               }}
// // //             />
// // //           </ListItem>
// // //         ))}
// // //       </List>
// // //     </Box>
// // //   );
// // // };

// // // export default SectionNavigation;

// // import React, { useState, useEffect } from "react";
// // import {
// //   Box,
// //   Typography,
// //   TextField,
// //   InputAdornment,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   Grid,
// //   FormControl,
// //   Select,
// //   MenuItem,
// // } from "@mui/material";
// // import SearchIcon from "@mui/icons-material/Search";

// // const menuItems = [
// //   { label: "About the Commerce Department", target: "about-section" },
// //   { label: "Explore Programmes", target: "programmes-section" },
// //   { label: "Facilities & Infrastructure", target: "facilities-section" },
// //   { label: "Achievements & Activities", target: "activities-section" },
// //   { label: "Research Highlights", target: "research-section" },
// //   { label: "Other Departments", target: "other-departments-section" },
// // ];

// // const SectionNavigation = () => {
// //   const [search, setSearch] = useState("");
// //   const [activeSection, setActiveSection] = useState("");
// //   const [selectedItem, setSelectedItem] = useState("");

// //   const handleScrollToSection = (id) => {
// //     const element = document.getElementById(id);
// //     if (element) {
// //       const navbarHeight = 100; // adjust to your layout
// //       const elementPosition =
// //         element.getBoundingClientRect().top + window.scrollY;
// //       const offsetPosition = elementPosition - navbarHeight;

// //       window.scrollTo({
// //         top: offsetPosition,
// //         behavior: "smooth",
// //       });
// //     }
// //   };

// //   // Track which section is active while scrolling
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       menuItems.forEach((item) => {
// //         const sec = document.getElementById(item.target);
// //         if (sec) {
// //           const rect = sec.getBoundingClientRect();
// //           if (rect.top <= 120 && rect.bottom >= 120) {
// //             setActiveSection(item.target);
// //             setSelectedItem(item.label);
// //           }
// //         }
// //       });
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const filteredItems = menuItems.filter((item) =>
// //     item.label.toLowerCase().includes(search.toLowerCase())
// //   );

// //   return (
// //     <Box sx={{ width: { xs: "100%", md: 250 }, position: "sticky", top: 100 }}>
// //       <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
// //         ON THIS PAGE
// //       </Typography>

// //       {/* ✅ Mobile Dropdown */}
// //       <Grid sx={{ display: { xs: "block", md: "none" }, mb: 2 }}>
// //         <FormControl size="small" fullWidth>
// //           <Select
// //             value={selectedItem || ""}
// //             onChange={(e) => {
// //               const selected = menuItems.find(
// //                 (item) => item.label === e.target.value
// //               );
// //               setSelectedItem(selected.label);
// //               handleScrollToSection(selected.target);
// //             }}
// //             displayEmpty
// //             sx={{
// //               borderRadius: "24px",
// //               "& .MuiOutlinedInput-notchedOutline": {
// //                 border: "1px solid #6B3C58",
// //               },
// //             }}
// //           >
// //             <MenuItem value="">
// //               <em>Select Section</em>
// //             </MenuItem>
// //             {menuItems.map((item) => (
// //               <MenuItem key={item.target} value={item.label}>
// //                 {item.label}
// //               </MenuItem>
// //             ))}
// //           </Select>
// //         </FormControl>
// //       </Grid>

// //       {/* ✅ Desktop Search + List */}
// //       <Box sx={{ display: { xs: "none", md: "block" } }}>
// //         <TextField
// //           fullWidth
// //           placeholder="Search"
// //           size="small"
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //           sx={{ mb: 2 }}
// //           InputProps={{
// //             startAdornment: (
// //               <InputAdornment position="start">
// //                 <SearchIcon fontSize="small" />
// //               </InputAdornment>
// //             ),
// //           }}
// //         />

// //         <List>
// //           {filteredItems.map((item) => (
// //             <ListItem
// //               key={item.target}
// //               onClick={() => handleScrollToSection(item.target)}
// //               sx={{
// //                 py: 0.7,
// //                 px: 0,
// //                 borderRadius: "6px",
// //                 cursor: "pointer",
// //                 backgroundColor:
// //                   activeSection === item.target ? "#f0f0f0" : "transparent",
// //               }}
// //             >
// //               <ListItemText
// //                 primary={
// //                   <Typography
// //                     sx={{
// //                       fontSize: "14px",
// //                       fontWeight:
// //                         activeSection === item.target ? 600 : 400,
// //                     }}
// //                   >
// //                     {item.label}
// //                   </Typography>
// //                 }
// //               />
// //             </ListItem>
// //           ))}
// //         </List>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default SectionNavigation;

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   TextField,
//   InputAdornment,
//   List,
//   ListItem,
//   ListItemText,
//   FormControl,
//   Select,
//   MenuItem,
//   Grid,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// const menuItems = [
//   { label: "About the Commerce Department", target: "about-section" },
//   { label: "Explore Programmes", target: "programmes-section" },
//   { label: "Facilities & Infrastructure", target: "facilities-section" },
//   { label: "Achievements & Activities", target: "activities-section" },
//   { label: "Research Highlights", target: "research-section" },
//   { label: "Other Departments", target: "other-departments-section" },
// ];

// const SectionNavigation = () => {
//   const [search, setSearch] = useState("");
//   const [activeSection, setActiveSection] = useState("");
//   const [selectedSection, setSelectedSection] = useState("");

//   const handleScrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const navbarHeight = 100; // adjust to your layout
//       const elementPosition =
//         element.getBoundingClientRect().top + window.scrollY;
//       const offsetPosition = elementPosition - navbarHeight;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   // Track the active section on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       menuItems.forEach((item) => {
//         const section = document.getElementById(item.target);
//         if (section) {
//           const rect = section.getBoundingClientRect();
//           if (rect.top <= 120 && rect.bottom >= 120) {
//             setActiveSection(item.target);
//             setSelectedSection(item.label);
//           }
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Filter items based on search
//   const filteredItems = menuItems.filter((item) =>
//     item.label.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <Box
//       sx={{
//         width: { xs: "100%", md: 250 },
//         //  position: "sticky", top: 100
//       }}
//     >
//       <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
//         ON THIS PAGE
//       </Typography>

//       {/* ✅ Mobile Dropdown */}
//       <Box>
//         <Grid sx={{ display: { xs: "block", md: "none" }, mb: 2 }}>
//           <FormControl size="small" fullWidth>
//             {/* <Select
//               value={selectedSection || ""}
//               onChange={(e) => {
//                 const selected = menuItems.find(
//                   (item) => item.label === e.target.value
//                 );
//                 setSelectedSection(selected.label);
//                 handleScrollToSection(selected.target);
//               }}
//               displayEmpty
//               sx={{
//                 borderRadius: "24px",
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   border: "1px solid #6B3C58",
//                 },
//               }}
//             >
//               <MenuItem value="">
//                 <em>Select Section</em>
//               </MenuItem>
//               {menuItems.map((item) => (
//                 <MenuItem key={item.target} value={item.label}>
//                   {item.label}
//                 </MenuItem>
//               ))}
//             </Select> */}
//             <Grid sx={{ display: { xs: "block", md: "none" }, mb: 2 }}>
//               <FormControl size="small" fullWidth>
//                 <Select
//                   value={selectedSection || ""}
//                   onChange={(e) => {
//                     const selected = menuItems.find(
//                       (item) => item.label === e.target.value
//                     );
//                     setSelectedSection(selected.label);
//                     handleScrollToSection(selected.target);
//                   }}
//                   displayEmpty
//                   open={sectionOpen}
//                   onOpen={() => setSectionOpen(true)}
//                   onClose={() => setSectionOpen(false)}
//                   MenuProps={{
//                     PaperProps: {
//                       sx: {
//                         backgroundColor: "#6B3C58",
//                         borderRadius: "10px",
//                         marginTop: "5px",
//                         color: "white",
//                         overflowY: "auto",
//                         "& .MuiMenuItem-root:hover": {
//                           backgroundColor: "#6B3C58",
//                         },
//                       },
//                     },
//                   }}
//                   sx={{
//                     backgroundColor: sectionOpen ? "#6B3C58" : "white",
//                     color: sectionOpen ? "white" : "black",
//                     borderRadius: "24px",
//                     border: "none",
//                     "& .MuiSvgIcon-root": {
//                       color: sectionOpen ? "white" : "black",
//                     },
//                     fontSize: "14px",
//                     width: "100%",
//                     maxWidth: { sm: "300px", xs: "100%" },
//                     transition: "background-color 0.2s ease",

//                     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                       border: sectionOpen ? "none" : "1px solid #6B3C58",
//                     },
//                     "& .MuiOutlinedInput-notchedOutline": {
//                       border: sectionOpen ? "none" : "1px solid #6B3C58",
//                     },

//                     // ✅ Ellipsis support
//                     "& .MuiSelect-select": {
//                       display: "block !important",
//                       whiteSpace: "nowrap",
//                       overflow: "hidden",
//                       textOverflow: "ellipsis",
//                       minWidth: 0,
//                       width: "100%",
//                     },
//                   }}
//                 >
//                   <MenuItem value="">
//                     <em>Select Section</em>
//                   </MenuItem>
//                   {menuItems.map((item) => (
//                     <MenuItem
//                       key={item.target}
//                       value={item.label}
//                       title={item.label}
//                       sx={{
//                         whiteSpace: "nowrap",
//                         overflow: "hidden",
//                         textOverflow: "ellipsis",
//                         maxWidth: "280px",

//                         "&.MuiMenuItem-root.Mui-selected": {
//                           backgroundColor: "transparent !important",
//                         },
//                         "&:hover": {
//                           background: "none !important",
//                         },
//                         background: "none",
//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           fontSize: "14px",
//                           whiteSpace: "nowrap",
//                           overflow: "hidden",
//                           textOverflow: "ellipsis",
//                         }}
//                       >
//                         {item.label}
//                       </Typography>
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>
//           </FormControl>
//         </Grid>

//         {/* ✅ Search bar (full width and works everywhere) */}
//         <TextField
//           fullWidth
//           placeholder="Search"
//           size="small"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           sx={{ mb: 2, borderRadius: "24px" }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon fontSize="small" />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Box>

//       {/* ✅ Section list (auto filtered by search) */}
//       <List sx={{ display: { xs: "none", md: "block" } }}>
//         {filteredItems.map((item, index) => (
//           <ListItem
//             key={index}
//             onClick={() => handleScrollToSection(item.target)}
//             sx={{
//               py: 0.7,
//               px: 0,
//               borderRadius: "6px",
//               cursor: "pointer",
//             }}
//           >
//             <ListItemText
//               primary={
//                 <Typography
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: activeSection === item.target ? 600 : 400,
//                     cursor: "pointer",
//                   }}
//                 >
//                   {item.label}
//                 </Typography>
//               }
//             />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default SectionNavigation;
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  FormControl,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";



const SectionNavigation = ({menuItems}) => {
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [sectionOpen, setSectionOpen] = useState(false); // ✅ added this

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 100; // adjust to your layout
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // ✅ Track the active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      menuItems?.forEach((item) => {
        const section = document.getElementById(item.target);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(item.target);
            setSelectedSection(item.label);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  // ✅ Filter items based on search
  const filteredItems = menuItems?.filter((item) =>
    item?.label?.toLowerCase()?.includes(search?.toLowerCase())
  );

  return (
    <Box sx={{ width: { xs: "100%", md: 250 } }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
        ON THIS PAGE
      </Typography>

      {/* ✅ Mobile Dropdown */}
      <Grid container spacing={2}>
        <Grid
          sx={{ display: { xs: "block", md: "none" }, mb: 2 }}
          size={{ xs: 12, sm: 6 }}
        >
          <FormControl size="small" fullWidth>
            <Select
              value={selectedSection || ""}
              onChange={(e) => {
                const selected = menuItems?.find(
                  (item) => item?.label === e?.target?.value
                );
                setSelectedSection(selected?.label);
                handleScrollToSection(selected?.target);
              }}
              displayEmpty
              open={sectionOpen}
              onOpen={() => setSectionOpen(true)}
              onClose={() => setSectionOpen(false)}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#6B3C58",
                    borderRadius: "10px",
                    marginTop: "5px",
                    color: "white",
                    overflowY: "auto",
                    "& .MuiMenuItem-root:hover": {
                      backgroundColor: "#6B3C58",
                    },
                  },
                },
              }}
              sx={{
                backgroundColor: sectionOpen ? "#6B3C58" : "white",
                color: sectionOpen ? "white" : "#6B3C58",
                borderRadius: "24px",
                border: sectionOpen ? "1px solid #6B3C58" : "none",
                "& .MuiSvgIcon-root": {
                  color: sectionOpen ? "white" : "black",
                },
                fontSize: "14px",
                width: "100%",
                // maxWidth: { sm: "300px", xs: "100%" },
                transition: "background-color 0.2s ease",

                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: sectionOpen ? "none" : "1px solid #6B3C58",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: sectionOpen ? "none" : "1px solid #6B3C58",
                },

                // ✅ Ellipsis support
                "& .MuiSelect-select": {
                  display: "block !important",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  minWidth: 0,
                  width: "100%",
                },
              }}
            >
              <MenuItem value="">
                <em>Select Section</em>
              </MenuItem>
              {menuItems?.map((item) => (
                <MenuItem
                  key={item?.target}
                  value={item?.label}
                  title={item?.label}
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "280px",

                    "&.MuiMenuItem-root.Mui-selected": {
                      backgroundColor: "transparent !important",
                    },
                    "&:hover": {
                      background: "none !important",
                    },
                    background: "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item?.label}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* ✅ Search bar */}
        {/* <TextField
        fullWidth
        placeholder="Search"
        size="small"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          mb: 2,
          borderRadius: "24px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "24px",
            borderColor:'black'
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      /> */}
        <Grid size={{ xs: 12, sm: 6,md:12 }}>
          <TextField
            fullWidth
            placeholder="Search"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              mb: 2,
              borderRadius: "24px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "24px",
                "& fieldset": {
                  borderColor: "#6B3C58", // normal border
                },
                "&:hover fieldset": {
                  borderColor: "#6B3C58", // hover border
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#6B3C58", // ✅ removes blue and sets custom color
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      {/* ✅ Section list (auto filtered by search) */}
      <List sx={{ display: { xs: "none", md: "block" } }}>
        {filteredItems?.map((item, index) => (
          <ListItem
            key={index}
            onClick={() => handleScrollToSection(item?.target)}
            sx={{
              py: 0.7,
              px: 0,
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: activeSection === item?.target ? 600 : 400,
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SectionNavigation;
