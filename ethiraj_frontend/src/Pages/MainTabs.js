// import React, { useState, useRef, useEffect } from "react";
// import {
//   Tabs,
//   Tab,
//   Box,
//   Select,
//   MenuItem,
//   useMediaQuery,
//   useTheme,
//   Typography,
// } from "@mui/material";
// import OurPrograms from "./OurPrograms";
// import ResearchAtEthiraj from "./ResearchAtEthiraj";
// import CampusLife from "./CampusLife";
// import NewsEvents from "./NewsEvents";

// const sections = [
//   { label: "Our Programs", component: <OurPrograms /> },
//   { label: "Research", component: <ResearchAtEthiraj /> },
//   { label: "Campus Life", component: <CampusLife /> },
//   { label: "News & Events", component: <NewsEvents /> },
// ];

// export default function MainTabs({ isStickyActive }) {
//   const [value, setValue] = useState(0);
//   const [isSticky, setIsSticky] = useState(true);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   // 👇 you had this before, we need it back
//   const sectionRefs = useRef(sections.map(() => React.createRef()));

//   const tabsRef = useRef(null);
//   const navbarRef = useRef(null); // If you want to detect collision with navbar

//   // Scroll to section when tab clicked
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     sectionRefs.current[newValue].current.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   // Sync tab highlight with scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       const offsets = sectionRefs.current.map(
//         (ref) => ref.current.getBoundingClientRect().top
//       );
//       const activeIndex = offsets.findIndex(
//         (top) => top >= 0 && top <= window.innerHeight / 2
//       );
//       if (activeIndex !== -1 && activeIndex !== value) {
//         setValue(activeIndex);
//       }

//       // 👇 sticky toggle logic
//       if (tabsRef.current && navbarRef.current) {
//         const tabsTop = tabsRef.current.getBoundingClientRect().top;
//         const navbarBottom = navbarRef.current.getBoundingClientRect().bottom;
//         if (tabsTop <= navbarBottom) {
//           setIsSticky(false);
//         } else {
//           setIsSticky(true);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [value]);

//   return (
//     <Box
//       ref={tabsRef}
//       sx={{
//         width: "100%",
//         position: isStickyActive ? "sticky" : "relative",
//         top: isStickyActive ? "0" : "auto", // adjust for navbar height
//         // zIndex: 1000,
//         background: "#fff",

//         zIndex: 1200,
//       }}
//     >
//       {!isMobile && (
//         <Box
//           ref={tabsRef}
//           sx={{
//             position: isStickyActive ? "sticky" : "relative",
//             top: isStickyActive ? "0" : "auto", // adjust for navbar height
//             padding: isStickyActive ? 0 : "0",
//             // zIndex: 1000,
//             background: "#fff",

//             zIndex: 1200,
//             // above Navbar so it replaces it
//             // background: "#fff",
//             // borderTop: "1px solid var(--brand-palette-border-default)",
//             // borderBottom: "1px solid var(--brand-palette-border-default)",
//             // paddingTop: "25px",
//             // paddingBottom:"15px"
//           }}
//         >
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             variant="fullWidth"
//             TabIndicatorProps={{
//               children: <span />,
//               sx: {
//                 display: "flex",
//                 justifyContent: "center",
//                 backgroundColor: "transparent",
//                 "& > span": {
//                   width: "93%",
//                   height: 2,
//                   // pt:5,
//                   backgroundColor: "black",
//                   borderRadius: 1,
//                 },
//               },
//             }}
//             sx={{
//               borderBottom: "1px solid #e0e0e0", // bottom border for the whole tab bar
//               borderTop: "1px solid #e0e0e0", // bottom border for the whole tab bar
//               "& .MuiTab-root": {
//                 textTransform: "none",
//                 // fontFamily: "Inter",
//                 // fontStyle: "normal",
//                 // fontWeight: 400,
//                 // fontSize: "18px",
//                 position: "relative",
//                 height: "76px",
//                 pt: 3,
//                 color: "var(--brand-palette-text-secondary)",
//               },
//               "& .MuiTab-root:hover::after": {
//                 content: '""',
//                 position: "absolute",
//                 left: "50%", // start from the middle of the tab
//                 transform: "translateX(-50%)", // shift back by half of its own width
//                 bottom: 0,
//                 height: 2,
//                 color: "red",
//                 width: "93%",
//                 backgroundColor: "black",
//                 transition: "all 0.3s ease",
//               },
//               // "& .Mui-selected": {
//               //   color: "black",
//               //   fontWeight: "bold",
//               // },
//               "& .css-126jrej-MuiButtonBase-root-MuiTab-root.Mui-selected": {
//                 color: "black",
//               },
//             }}
//           >
//             {sections.map((tab, index) => (
//               <Tab
//                 key={index}
//                 label={
//                   // <Typography variant="navbarMenuItemText">
//                   tab.label
//                   // </Typography>
//                 }
//                 sx={{
//                   "& .Mui-selected": {
//                     color: "black",
//                   },
//                 }}
//               />
//             ))}
//           </Tabs>
//         </Box>
//       )}

//       {isMobile && (
//         <Box
//           ref={tabsRef}
//           sx={{
//             display: "flex",
//             justifyContent: "center",

//             position: isStickyActive ? "sticky" : "relative",
//             top: isStickyActive ? "0" : "auto", // adjust
//             background: "#fff",
//             // position: "sticky",
//             // top: 0, // will stick to top once it reaches viewport
//             zIndex: 1200, // above Navbar so it replaces it
//           }}
//         >
//           <Select
//             value={value}
//             onChange={(e) => handleChange(null, e.target.value)}
//             sx={{
//               mb: 2,
//               width: "95%",
//               borderRadius: 2,
//               "& .MuiOutlinedInput-notchedOutline": {
//                 borderRadius: "25px",
//                 borderColor: "#343A40",
//               },
//               "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                 borderColor: "black",
//               },
//             }}
//           >
//             {sections.map((tab, index) => (
//               <MenuItem key={index} value={index}>
//                 {tab.label}
//               </MenuItem>
//             ))}
//           </Select>
//         </Box>
//       )}

//       <Box>
//         {sections.map((tab, index) => (
//           <Box
//             key={index}
//             ref={sectionRefs.current[index]}
//             sx={{
//               minHeight: "100%",
//               scrollMarginTop: "160px",
//             }}
//           >
//             {tab.component}
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }

// import React, { useState, useRef, useEffect } from "react";
// import {
//   Tabs,
//   Tab,
//   Box,
//   Select,
//   MenuItem,
//   useMediaQuery,
//   useTheme,
//   Typography,
// } from "@mui/material";
// import OurPrograms from "./OurPrograms";
// import ResearchAtEthiraj from "./ResearchAtEthiraj";
// import CampusLife from "./CampusLife";
// import NewsEvents from "./NewsEvents";

// export default function MainTabs({ isStickyActive, ourProgramDatas }) {
//   const [value, setValue] = useState(0);
//   const [isSticky, setIsSticky] = useState(true);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const sections = [
//     {
//       label: "Our Programs",
//       component: <OurPrograms ourProgramDatas={ourProgramDatas} />,
//     },
//     { label: "Research", component: <ResearchAtEthiraj /> },
//     { label: "Campus Life", component: <CampusLife /> },
//     { label: "News & Events", component: <NewsEvents /> },
//   ];
//   // 👇 you had this before, we need it back
//   const sectionRefs = useRef(sections.map(() => React.createRef()));

//   const tabsRef = useRef(null);
//   const navbarRef = useRef(null); // If you want to detect collision with navbar

//   // Scroll to section when tab clicked
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     sectionRefs.current[newValue].current.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   // Sync tab highlight with scroll position
//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     const offsets = sectionRefs.current.map(
//   //       (ref) => ref.current.getBoundingClientRect().top
//   //     );
//   //     const activeIndex = offsets.findIndex(
//   //       (top) => top >= 0 && top <= window.innerHeight / 2
//   //     );
//   //     if (activeIndex !== -1 && activeIndex !== value) {
//   //       setValue(activeIndex);
//   //     }

//   //     // 👇 sticky toggle logic
//   //     if (tabsRef.current && navbarRef.current) {
//   //       const tabsTop = tabsRef.current.getBoundingClientRect().top;
//   //       const navbarBottom = navbarRef.current.getBoundingClientRect().bottom;
//   //       if (tabsTop <= navbarBottom) {
//   //         setIsSticky(false);
//   //       } else {
//   //         setIsSticky(true);
//   //       }
//   //     }
//   //   };

//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => window.removeEventListener("scroll", handleScroll);
//   // }, [value]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const navbarHeight = navbarRef.current
//         ? navbarRef.current.getBoundingClientRect().height
//         : 0;

//       const threshold = navbarHeight + 25; // 👈 add 10px offset

//       const offsets = sectionRefs.current.map(
//         (ref) => ref.current.getBoundingClientRect().top - threshold,
//       );

//       // Find the section whose top is closest to (but not greater than) the top
//       let activeIndex = 0;
//       for (let i = 0; i < offsets.length; i++) {
//         if (offsets[i] <= 0) {
//           activeIndex = i;
//         }
//       }

//       if (activeIndex !== value) {
//         setValue(activeIndex);
//       }

//       // Sticky logic
//       if (tabsRef.current && navbarRef.current) {
//         const tabsTop = tabsRef.current.getBoundingClientRect().top;
//         const navbarBottom = navbarRef.current.getBoundingClientRect().bottom;
//         setIsSticky(!(tabsTop <= navbarBottom));
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [value]);

//   return (
//     <Box
//       ref={tabsRef}
//       sx={{
//         width: "100%",
//         position: isStickyActive ? "sticky" : "relative",
//         top: isStickyActive ? "0" : "auto", // adjust for navbar height
//         // zIndex: 1000,
//         background: "none",

//         zIndex: 1200,
//       }}
//     >
//       {!isMobile && (
//         <Box
//           ref={tabsRef}
//           sx={{
//             position: isStickyActive ? "sticky" : "relative",
//             top: isStickyActive ? "0" : "auto", // adjust for navbar height
//             padding: isStickyActive ? 0 : "0",
//             // zIndex: 1000,
//             background: "white",

//             zIndex: 1200,
//             // above Navbar so it replaces it
//             // background: "#fff",
//             // borderTop: "1px solid var(--brand-palette-border-default)",
//             // borderBottom: "1px solid var(--brand-palette-border-default)",
//             // paddingTop: "25px",
//             // paddingBottom:"15px"
//           }}
//         >
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             variant="fullWidth"
//             TabIndicatorProps={{
//               children: <span />,
//               sx: {
//                 display: "flex",
//                 justifyContent: "center",
//                 backgroundColor: "transparent",
//                 "& > span": {
//                   width: "93%",
//                   height: 2,
//                   // pt:5,
//                   backgroundColor: "black",
//                   borderRadius: 1,
//                 },
//               },
//             }}
//             sx={{
//               borderBottom: "1px solid #e0e0e0", // bottom border for the whole tab bar
//               borderTop: "1px solid #e0e0e0", // bottom border for the whole tab bar
//               "& .MuiTab-root": {
//                 textTransform: "none",
//                 // fontFamily: "Inter",
//                 // fontStyle: "normal",
//                 // fontWeight: 400,
//                 // fontSize: "18px",
//                 position: "relative",
//                 height: "76px",
//                 pt: 3,
//                 color: "var(--brand-palette-text-secondary)",
//               },
//               "& .MuiTab-root:hover::after": {
//                 content: '""',
//                 position: "absolute",
//                 left: "50%", // start from the middle of the tab
//                 transform: "translateX(-50%)", // shift back by half of its own width
//                 bottom: 0,
//                 height: 2,
//                 color: "red",
//                 width: "93%",
//                 backgroundColor: "black",
//                 transition: "all 0.3s ease",
//               },
//               // "& .Mui-selected": {
//               //   color: "black",
//               //   fontWeight: "bold",
//               // },
//               "& .css-126jrej-MuiButtonBase-root-MuiTab-root.Mui-selected": {
//                 color: "black",
//               },
//             }}
//           >
//             {sections.map((tab, index) => (
//               <Tab
//                 key={index}
//                 label={
//                   // <Typography variant="navbarMenuItemText">
//                   tab.label
//                   // </Typography>
//                 }
//                 sx={{
//                   "& .Mui-selected": {
//                     color: "black",
//                   },
//                 }}
//               />
//             ))}
//           </Tabs>
//         </Box>
//       )}

//       {isMobile && (
//         <Box
//           ref={tabsRef}
//           sx={{
//             display: "flex",
//             justifyContent: "center",

//             borderBottom: "1px solid lightgray",
//             position: isStickyActive ? "sticky" : "relative",
//             top: isStickyActive ? "0" : "auto", // adjust
//             background: isStickyActive ?? "#fff",
//             // position: "sticky",
//             // top: 0, // will stick to top once it reaches viewport
//             zIndex: 1200, // above Navbar so it replaces it
//           }}
//         >
//           <Select
//             value={value}
//             onChange={(e) => handleChange(null, e.target.value)}
//             sx={{
//               mb: 2,
//               mt: 2,
//               width: "95%",
//               borderRadius: 2,
//               "& .MuiOutlinedInput-notchedOutline": {
//                 borderRadius: "25px",
//                 borderColor: "#343A40",
//               },
//               "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                 borderColor: "black",
//               },
//             }}
//           >
//             {sections.map((tab, index) => (
//               <MenuItem key={index} value={index}>
//                 {tab.label}
//               </MenuItem>
//             ))}
//           </Select>
//         </Box>
//       )}

//       <Box>
//         {sections.map((tab, index) => (
//           <Box
//             key={index}
//             ref={sectionRefs.current[index]}
//             sx={{
//               minHeight: "100%",
//               // scrollMarginTop: "160px",
//               px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
//             }}
//           >
//             {tab.component}
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import {
  Tabs,
  Tab,
  Box,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import OurPrograms from "./OurPrograms";
import ResearchAtEthiraj from "./ResearchAtEthiraj";
import CampusLife from "./CampusLife";
import NewsEvents from "./NewsEvents";

export default function MainTabs({ isStickyActive, ourProgramDatas }) {
  const [value, setValue] = useState(0);
  const [isSticky, setIsSticky] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sections = [
    {
      label: "Our Programs",
      component: <OurPrograms ourProgramDatas={ourProgramDatas} />,
    },
    { label: "Research", component: <ResearchAtEthiraj /> },
    { label: "Campus Life", component: <CampusLife /> },
    { label: "News & Events", component: <NewsEvents /> },
  ];

  // ✅ Cleaner ref handling (no createRef inside array)
  const sectionRefs = useRef([]);
  const tabsRef = useRef(null);
  const navbarRef = useRef(null);

  // Ensure ref array length matches sections
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, sections.length);
  }, [sections.length]);

  // Scroll to section when tab clicked
  const handleChange = (event, newValue) => {
    setValue(newValue);

    const target = sectionRefs.current[newValue];
    if (!target) return;

    const navbarHeight = navbarRef.current
      ? navbarRef.current.getBoundingClientRect().height
      : 0;

    const offsetTop =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight -
      20;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  // Scroll sync logic
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navbarRef.current
        ? navbarRef.current.getBoundingClientRect().height
        : 0;

      const threshold = navbarHeight + 25;

      const offsets = sectionRefs.current.map((el) => {
        if (!el) return Infinity;
        return el.getBoundingClientRect().top - threshold;
      });

      let activeIndex = 0;

      for (let i = 0; i < offsets.length; i++) {
        if (offsets[i] <= 0) {
          activeIndex = i;
        }
      }

      setValue((prev) => (prev !== activeIndex ? activeIndex : prev));

      // Sticky logic
      if (tabsRef.current && navbarRef.current) {
        const tabsTop = tabsRef.current.getBoundingClientRect().top;
        const navbarBottom = navbarRef.current.getBoundingClientRect().bottom;
        setIsSticky(!(tabsTop <= navbarBottom));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Attach navbarRef here if needed */}
      <div ref={navbarRef} />

      <Box
        ref={tabsRef}
        sx={{
          width: "100%",
          position: isStickyActive ? "sticky" : "relative",
          top: isStickyActive ? 0 : "auto",
          background: "#fff",
            zIndex: 1200,
          // zIndex: 1,
              borderBottom: "1px solid lightgray",
            borderTop: "1px solid lightgray",
        }}
      >
        {!isMobile ? (
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            TabIndicatorProps={{
              children: <span />,
              sx: {
                display: "flex",
                justifyContent: "center",
                backgroundColor: "transparent",
                "& > span": {
                  width: "93%",
                  height: 2,
                  backgroundColor: "black",
                  borderRadius: 1,
                },
              },
            }}
            sx={{
              borderTop: "1px solid #e0e0e0",
              borderBottom: "1px solid #e0e0e0",
              "& .MuiTab-root": {
                textTransform: "none",
                height: "76px",
                pt: 3,
                color: "var(--brand-palette-text-secondary)",
              },
              "& .Mui-selected": {
                color: "black",
              },
            }}
          >
            {sections.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
        ) : (
          // <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          //   <Select
          //     value={value}
          //     onChange={(e) => handleChange(null, e.target.value)}
          //     sx={{
          //       width: "95%",
          //       borderRadius: 2,
          //     }}
          //   >
          //     {sections.map((tab, index) => (
          //       <MenuItem key={index} value={index}>
          //         {tab.label}
          //       </MenuItem>
          //     ))}
          //   </Select>
          // </Box>
          // {isMobile && (
               <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
                    <Select
                      value={value}
                      onChange={(e) => handleChange(null, e.target.value)}
                      sx={{
                        my: 1,
                        width: "95%",
                        borderRadius: 2,
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderRadius: "25px",
                          borderColor: "#343A40",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "black",
                        },
                      }}
                    >
                      {sections.map((tab, index) => (
                        <MenuItem key={index} value={index}>
                          {tab.label}
                        </MenuItem>
                      ))}
                    </Select>
                    </Box>
                // )}
        )}
      </Box>

      {/* Sections */}
      <Box>
        {sections.map((tab, index) => (
          <Box
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            sx={{
              px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
              scrollMarginTop: "120px",
            }}
          >
            {tab.component}
          </Box>
        ))}
      </Box>
    </>
  );
}