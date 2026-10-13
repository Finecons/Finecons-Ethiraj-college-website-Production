// // import React, { useRef, useEffect, useState } from "react";
// // import TimeLine from "./../Assets/timeLineImage.png";
// // import { Typography, IconButton, Button, Box } from "@mui/material";
// // import { ChevronLeft, ChevronRight } from "@mui/icons-material";
// // import timelineLeft from "../Assets/timelineMoveLeft.png";
// // import timelineRight from "../Assets/timelineMoveRight.png";

// // const timelineData = [
// //   {
// //     year: "1948",
// //     title: "1948",
// //     description: "Founded by Shri. V.L. Ethiraj",
// //     position: "bottom",
// //     view: "static",
// //   },
// //   {
// //     year: "1960-1968",
// //     title: "1960-1968",
// //     description:
// //       "Formative years with the introduction of UG courses in Economics, Botany, Chemistry, History, Zoology and English Literature (Aided Stream)",
// //     position: "top",
// //     img: TimeLine,
// //     view: "static",
// //   },
// //   {
// //     year: "1973",
// //     title: "1973",
// //     description: "Visit of Prime Minister Smt Indira Gandhi...",
// //     position: "bottom",
// //     img: TimeLine,
// //     view: "hover",
// //   },
// //   {
// //     year: "1978",
// //     title: "1978",
// //     description: "1st convocation held in the College",
// //     position: "top",
// //     view: "hover",
// //   },
// //   {
// //     year: "2013",
// //     title: "2013",
// //     description: "Re-accreditation with 'A' grade by NAAC.",
// //     position: "bottom",
// //     img: TimeLine,
// //     view: "static",
// //   },
// //   {
// //     year: "2022",
// //     title: "2022",
// //     description: "75th Jubilee year celebrations...",
// //     position: "top",
// //     view: "static",
// //   },
// //   // { year: "2029", title: "2029", description: "75th Jubilee year celebrations...", position: "top", view: "hover" },
// // ];

// // const parseYear = (yearStr) => {
// //   if (yearStr.includes("-")) {
// //     return parseInt(yearStr.split("-")[0], 10); // take first year
// //   }
// //   return parseInt(yearStr, 10);
// // };
// // export default function TimelineScale({
// //   fromYear = parseYear(timelineData[0].year),
// //   toYear = parseYear(timelineData[timelineData.length - 1].year),
// //   step = 10,
// //   divisions = 10,
// // }) {
// //   const containerRef = useRef();
// //   const scaleRef = useRef();
// //   const [scaleWidth, setScaleWidth] = useState(0);
// //   const [hoveredIndex, setHoveredIndex] = useState(null);
// //   const [canScrollLeft, setCanScrollLeft] = useState(false);
// //   const [canScrollRight, setCanScrollRight] = useState(true);
// //   const [containerHeight] = useState(800);

// //   useEffect(() => {
// //     function handleResize() {
// //       if (scaleRef.current) setScaleWidth(scaleRef.current.offsetWidth);
// //     }
// //     handleResize();
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   // 👇 track scroll position to enable/disable buttons
// //   const handleScroll = () => {
// //     const el = containerRef.current;
// //     if (!el) return;
// //     setCanScrollLeft(el.scrollLeft > 0);
// //     setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
// //   };

// //   const scrollByAmount = (amount) => {
// //     if (containerRef.current) {
// //       containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
// //     }
// //   };

// //   const adjustedToYear =
// //     fromYear + Math.ceil((toYear - fromYear) / step) * step;
// //   const years = [];
// //   for (let y = fromYear; y <= adjustedToYear; y += step) {
// //     years.push(y);
// //   }

// //   const getYearPositionPx = (year) => {
// //     let targetYear;
// //     if (year.includes("-")) {
// //       const yr = year.split("-");
// //       targetYear = Number(yr[1]);
// //     } else {
// //       targetYear = Number(year);
// //     }
// //     const percent = (targetYear - fromYear) / (adjustedToYear - fromYear);
// //     return percent * scaleWidth;
// //   };

// //   const dotSize = 20;
// //   const verticalLineLength = 38;

// //   return (
// //     <Box sx={{ width: "100%", background: "#FFE6FF",width: `${timelineData.length * 100}vw`, position: "relative",mt:{xs:"0",md:"85px"} }}>
// //       <Typography
// //         variant="headingTextNewsreaderMedium"
// //         sx={{
// //           textAlign: "center",
// //           color: "var(--heading-text-primary)",
// //           mb: { xs: 2, sm: 2, md: "10px", lg: "48px" },
// //           px: 4,
// //           pt: 2,
// //         }}
// //       >
// //         History of Ethiraj
// //       </Typography>

// //       {/* Navigation Buttons */}
// //       <div
// //         style={{
// //           position: "absolute",
// //           bottom: "20px",
// //           right: "20px",
// //           display: "flex",
// //           gap: "10px",
// //           zIndex: 5,
// //         }}
// //       >
// //         <Button
// //           onClick={() => scrollByAmount(-300)}
// //           disabled={!canScrollLeft}
// //           sx={{
// //             width: { xs: 72, md: 48 }, // 72px for mobile/tablet, 48px for desktop
// //             height: { xs: 72, md: 48 },
// //             borderRadius: "50%",
// //             border: "1px dotted #6B3C58",
// //             background: "transparent",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             opacity: canScrollLeft ? 1 : 0.4,
// //             cursor: canScrollLeft ? "pointer" : "not-allowed",
// //             minWidth: 0, // removes MUI's default minWidth
// //             p: 0, // remove padding so circle is exact
// //             transition: "all 0.2s ease",
// //             "&:hover": {
// //               background: "rgba(107, 60, 88, 0.1)", // light hover effect
// //             },
// //           }}
// //         >
// //           {/* <span style={{ fontSize: "20px", color: "#6B3C58" }}>‹</span> */}
// //           <img
// //             src={timelineLeft}
// //             alt="left"
// //             style={{
// //               width: "25px",
// //               height: "25px",
// //               display: "block",
// //               objectFit: "contain",
// //             }}
// //           />
// //         </Button>

// //         <Button
// //           onClick={() => scrollByAmount(300)}
// //           disabled={!canScrollRight}
// //           sx={{
// //             width: { xs: 72, md: 48 }, // 72px for mobile/tablet, 48px for desktop
// //             height: { xs: 72, md: 48 },
// //             borderRadius: "50%",
// //             border: "1px dotted #6B3C58",
// //             background: "transparent",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             opacity: canScrollRight ? 1 : 0.4,
// //             cursor: canScrollRight ? "pointer" : "not-allowed",
// //             minWidth: 0, // removes MUI's default minWidth for buttons
// //             p: 0, // remove padding so circle is exact
// //             transition: "all 0.2s ease",
// //             "&:hover": {
// //               background: "rgba(107, 60, 88, 0.1)", // light hover effect
// //             },
// //           }}
// //         >
// //           {/* <span style={{ fontSize: "20px", color: "#6B3C58" }}>›</span> */}
// //           <img
// //             src={timelineRight}
// //             alt="right"
// //             style={{
// //               width: "25px",
// //               height: "25px",
// //               display: "block",
// //               objectFit: "contain",
// //             }}
// //           />
// //         </Button>
// //       </div>

// //       {/* Scrollable Timeline */}
// //       <div
// //         ref={containerRef}
// //         onScroll={handleScroll}
// //         style={{
// //           overflowX: "auto",
// //           scrollbarWidth: "none", // hide scrollbar in Firefox
// //           msOverflowStyle: "none", // hide scrollbar in IE
// //         }}
// //       >
// //         {/* Hide scrollbar in WebKit browsers */}
// //         <style>{`
// //           div::-webkit-scrollbar { display: none; }
// //         `}</style>

// //         <div
// //           style={{
// //             position: "relative",
// //             width: "1500px", // 👈 adjust width as per data
// //             height: containerHeight,
// //             marginLeft: "150px",
// //             marginRight: "150px",
// //             marginBottom: "80px",
// //           }}
// //           ref={scaleRef}
// //         >
// //           {/* Timeline scale */}
// //           <div
// //             style={{
// //               position: "absolute",
// //               right: 0,
// //               top: "50%",
// //               transform: "translateY(-50%)",
// //               background: "#b39ddb",
// //               width: "100%",
// //             }}
// //           >
// //             {years.map((year, i) => {
// //               const left = scaleWidth * (i / (years.length - 1));
// //               return (
// //                 <React.Fragment key={year}>
// //                   <div
// //                     style={{
// //                       position: "absolute",
// //                       left,
// //                       top: "-16px",
// //                       width: "2px",
// //                       height: "32px",
// //                       background: "#343A40",
// //                       transform: "translateX(-50%)",
// //                     }}
// //                   />
// //                   {i < years.length - 1 &&
// //                     Array.from({ length: divisions - 1 }).map((_, idx) => (
// //                       <div
// //                         key={idx}
// //                         style={{
// //                           position: "absolute",
// //                           left:
// //                             left +
// //                             (scaleWidth / (years.length - 1)) *
// //                               ((idx + 1) / divisions),
// //                           top: "-8px",
// //                           width: "1px",
// //                           height: "16px",
// //                           background: "#343A40",
// //                           transform: "translateX(-50%)",
// //                         }}
// //                       />
// //                     ))}
// //                   {/* <div style={{ position: "absolute", left, top: "28px", fontSize: "12px", color: "#000000", transform: "translateX(-50%)" }}>
// //                      {year}
// //                   </div> */}
// //                   <Typography
// //                     variant="typographyTimeLineText"
// //                     sx={{
// //                       position: "absolute",
// //                       left,
// //                       top: "28px",
// //                       color: "#000000",
// //                       transform: "translateX(-50%)",
// //                     }}
// //                   >
// //                     {year}
// //                   </Typography>
// //                 </React.Fragment>
// //               );
// //             })}
// //           </div>

// //           {/* Timeline events */}
// //           {scaleWidth > 0 &&
// //             timelineData.map((item, idx) => {
// //               const leftPx = getYearPositionPx(item.year);
// //               const isTop = item.position === "top";
// //               const centerY = containerHeight / 2;
// //               const eventTop = isTop ? centerY - 120 : centerY + 55;
// //               const eventTopPercent = (eventTop / containerHeight) * 100;

// //               return (
// //                 <div
// //                   key={idx}
// //                   style={{
// //                     position: "absolute",
// //                     left: leftPx,
// //                     top: `${eventTopPercent}%`,
// //                     transform: "translateX(-50%)",
// //                     textAlign: "center",
// //                     // width: 300,
// //                     zIndex: 10,
// //                     display: "flex",
// //                     flexDirection: "column",
// //                     alignItems: "center",
// //                   }}
// //                   onMouseEnter={() => setHoveredIndex(idx)}
// //                   onMouseLeave={() => setHoveredIndex(null)}
// //                 >
// //                   <div
// //                     style={{
// //                       position: "absolute",
// //                       left: "50%",
// //                       top: isTop ? verticalLineLength + dotSize : 0,
// //                       width: "2px",
// //                       height: verticalLineLength,
// //                       borderLeft: "2px dotted #6B3C58",
// //                       transform: "translateX(-50%)",
// //                       zIndex: 1,
// //                       cursor: "pointer",
// //                     }}
// //                   />
// //                   <div
// //                     style={{
// //                       position: "absolute",
// //                       left: "50%",
// //                       top: verticalLineLength,
// //                       width: dotSize,
// //                       height: dotSize,
// //                       borderRadius: "50%",
// //                       boxSizing: "border-box",
// //                       transform: "translateX(-50%)",
// //                       zIndex: 2,
// //                       cursor: "pointer",
// //                     }}
// //                   >
// //                     <div
// //                       style={{
// //                         position: "absolute",
// //                         width: "100%",
// //                         height: "100%",
// //                         borderRadius: "50%",
// //                         border: "1px dotted #6B3C58",
// //                       }}
// //                     />
// //                     <div
// //                       style={{
// //                         position: "absolute",
// //                         width: dotSize / 2,
// //                         height: dotSize / 2,
// //                         borderRadius: "50%",
// //                         background: "#6B3C58",
// //                         top: "50%",
// //                         left: "50%",
// //                         transform: "translate(-50%, -50%)",
// //                       }}
// //                     />
// //                   </div>
// //                   {/* description content */}
// //                   {// CASE 1: No hover -> show all static events
// //                   ((hoveredIndex === null && item.view === "static") ||
// //                     // CASE 2: Hovering over hover-event -> show only that hover event
// //                     (hoveredIndex === idx && item.view === "hover") ||
// //                     // CASE 3: Hovering over static-event -> show only that static event
// //                     (hoveredIndex === idx && item.view === "static")) && (
// //                     <div
// //                       style={{
// //                         fontSize: "12px",
// //                         minWidth: "281px",
// //                         maxWidth: "100%",
// //                         color: "#333",
// //                         zIndex: 3,
// //                         position: "absolute", // 👈 important: absolute relative to parent
// //                         left: "50%",
// //                         transform: "translateX(-50%)",
// //                         background: "#FFE6FF",
// //                         padding: "6px",
// //                         borderRadius: "8px",
// //                         // border: "1px solid red",
// //                         wordWrap: "break-word",
// //                         display: "inline-block",

// //                         // anchor logic
// //                         ...(isTop
// //                           ? { bottom: "-30px" } // 👈 grow upward
// //                           : { top: dotSize + verticalLineLength + 8 }), // 👈 grow downward
// //                       }}
// //                     >
// //                       {isTop && item.img && (
// //                         <div style={{ display: "block", textAlign: "center" }}>
// //                           {" "}
// //                           <img
// //                             src={item.img}
// //                             alt={item.title}
// //                             style={{
// //                               width: "241px",
// //                               height: "164px",
// //                               borderRadius: 10,
// //                               marginBottom: "5px",
// //                               objectFit: "cover",
// //                             }}
// //                           />
// //                         </div>
// //                       )}
// //                       {!isTop && (
// //                         <strong style={{ fontSize: "18px" }}>
// //                           {item.title}
// //                         </strong>
// //                       )}

// //                       {item.description && (
// //                         <Typography
// //                           variant="typographyContentText"
// //                           width={{ width: "100%" }}
// //                         >
// //                           {item.description}
// //                         </Typography>
// //                       )}

// //                       {isTop && (
// //                         <strong style={{ fontSize: "18px" }}>
// //                           {item.title}
// //                         </strong>
// //                       )}
// //                       {!isTop && item.img && (
// //                         <div style={{ display: "block", textAlign: "center" }}>
// //                           {" "}
// //                           <img
// //                             src={item.img}
// //                             alt={item.title}
// //                             style={{
// //                               width: "241px",
// //                               height: "164px",
// //                               borderRadius: 10,
// //                               marginBottom: "5px",
// //                               objectFit: "cover",
// //                             }}
// //                           />
// //                         </div>
// //                       )}
// //                     </div>
// //                   )}
// //                 </div>
// //               );
// //             })}
// //         </div>
// //       </div>
// //     </Box>
// //   );
// // }


// // // import React, { useRef, useEffect, useState, forwardRef } from "react";
// // // import TimeLine from "./../Assets/timeLineImage.png";
// // // import { Typography, Button, Box } from "@mui/material";
// // // import timelineLeft from "../Assets/timelineMoveLeft.png";
// // // import timelineRight from "../Assets/timelineMoveRight.png";


// // // const timelineData = [
// // //   {
// // //     year: "1948",
// // //     title: "1948",
// // //     description: "Founded by Shri. V.L. Ethiraj",
// // //     position: "bottom",
// // //     view: "static",
// // //   },
// // //   {
// // //     year: "1960-1968",
// // //     title: "1960-1968",
// // //     description:
// // //       "Formative years with the introduction of UG courses in Economics, Botany, Chemistry, History, Zoology and English Literature (Aided Stream)",
// // //     position: "top",
// // //     img: TimeLine,
// // //     view: "static",
// // //   },
// // //   {
// // //     year: "1973",
// // //     title: "1973",
// // //     description: "Visit of Prime Minister Smt Indira Gandhi...",
// // //     position: "bottom",
// // //     img: TimeLine,
// // //     view: "hover",
// // //   },
// // //   {
// // //     year: "1978",
// // //     title: "1978",
// // //     description: "1st convocation held in the College",
// // //     position: "top",
// // //     view: "hover",
// // //   },
// // //   {
// // //     year: "2013",
// // //     title: "2013",
// // //     description: "Re-accreditation with 'A' grade by NAAC.",
// // //     position: "bottom",
// // //     img: TimeLine,
// // //     view: "static",
// // //   },
// // //   {
// // //     year: "2022",
// // //     title: "2022",
// // //     description: "75th Jubilee year celebrations...",
// // //     position: "top",
// // //     view: "static",
// // //   },
// // // ];


// // // const parseYear = (yearStr) => {
// // //   if (yearStr.includes("-")) {
// // //     return parseInt(yearStr.split("-")[0], 10); // take first year
// // //   }
// // //   return parseInt(yearStr, 10);
// // // };

// // // const TimelineScale = forwardRef(({
// // //   fromYear = parseYear(timelineData[0].year),
// // //   toYear = parseYear(timelineData[timelineData.length - 1].year),
// // //   step = 10,
// // //   divisions = 10,
// // // }, containerRef) => {
// // //   const scaleRef = useRef();
// // //   const [scaleWidth, setScaleWidth] = useState(0);
// // //   const [hoveredIndex, setHoveredIndex] = useState(null);
// // //   const [canScrollLeft, setCanScrollLeft] = useState(false);
// // //   const [canScrollRight, setCanScrollRight] = useState(true);
// // //   const [containerHeight] = useState(800);


// // //   useEffect(() => {
// // //     function handleResize() {
// // //       if (scaleRef.current) setScaleWidth(scaleRef.current.offsetWidth);
// // //     }
// // //     handleResize();
// // //     window.addEventListener("resize", handleResize);
// // //     return () => window.removeEventListener("resize", handleResize);
// // //   }, []);


// // //   // Track scroll position to enable/disable buttons
// // //   const handleScroll = () => {
// // //     const el = containerRef.current;
// // //     if (!el) return;
// // //     setCanScrollLeft(el.scrollLeft > 0);
// // //     setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
// // //   };


// // //   const scrollByAmount = (amount) => {
// // //     if (containerRef.current) {
// // //       containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
// // //     }
// // //   };


// // //   const adjustedToYear =
// // //     fromYear + Math.ceil((toYear - fromYear) / step) * step;
// // //   const years = [];
// // //   for (let y = fromYear; y <= adjustedToYear; y += step) {
// // //     years.push(y);
// // //   }


// // //   const getYearPositionPx = (year) => {
// // //     let targetYear;
// // //     if (year.includes("-")) {
// // //       const yr = year.split("-");
// // //       targetYear = Number(yr[1]);
// // //     } else {
// // //       targetYear = Number(year);
// // //     }
// // //     const percent = (targetYear - fromYear) / (adjustedToYear - fromYear);
// // //     return percent * scaleWidth;
// // //   };


// // //   const dotSize = 20;
// // //   const verticalLineLength = 38;


// // //   return (
// // //     <Box sx={{ width: "100%", background: "#FFE6FF", position: "relative", mt: { xs: "0", md: "85px" } }}>
// // //       <Typography
// // //         variant="headingTextNewsreaderMedium"
// // //         sx={{
// // //           textAlign: "center",
// // //           color: "var(--heading-text-primary)",
// // //           mb: { xs: 2, sm: 2, md: "10px", lg: "48px" },
// // //           px: 4,
// // //           pt: 2,
// // //         }}
// // //       >
// // //         History of Ethiraj
// // //       </Typography>


// // //       {/* Navigation Buttons */}
// // //       <div
// // //         style={{
// // //           position: "absolute",
// // //           bottom: "20px",
// // //           right: "20px",
// // //           display: "flex",
// // //           gap: "10px",
// // //           zIndex: 5,
// // //         }}
// // //       >
// // //         <Button
// // //           onClick={() => scrollByAmount(-300)}
// // //           disabled={!canScrollLeft}
// // //           sx={{
// // //             width: { xs: 72, md: 48 },
// // //             height: { xs: 72, md: 48 },
// // //             borderRadius: "50%",
// // //             border: "1px dotted #6B3C58",
// // //             background: "transparent",
// // //             display: "flex",
// // //             alignItems: "center",
// // //             justifyContent: "center",
// // //             opacity: canScrollLeft ? 1 : 0.4,
// // //             cursor: canScrollLeft ? "pointer" : "not-allowed",
// // //             minWidth: 0,
// // //             p: 0,
// // //             transition: "all 0.2s ease",
// // //             "&:hover": {
// // //               background: "rgba(107, 60, 88, 0.1)",
// // //             },
// // //           }}
// // //         >
// // //           <img
// // //             src={timelineLeft}
// // //             alt="left"
// // //             style={{
// // //               width: "25px",
// // //               height: "25px",
// // //               display: "block",
// // //               objectFit: "contain",
// // //             }}
// // //           />
// // //         </Button>


// // //         <Button
// // //           onClick={() => scrollByAmount(300)}
// // //           disabled={!canScrollRight}
// // //           sx={{
// // //             width: { xs: 72, md: 48 },
// // //             height: { xs: 72, md: 48 },
// // //             borderRadius: "50%",
// // //             border: "1px dotted #6B3C58",
// // //             background: "transparent",
// // //             display: "flex",
// // //             alignItems: "center",
// // //             justifyContent: "center",
// // //             opacity: canScrollRight ? 1 : 0.4,
// // //             cursor: canScrollRight ? "pointer" : "not-allowed",
// // //             minWidth: 0,
// // //             p: 0,
// // //             transition: "all 0.2s ease",
// // //             "&:hover": {
// // //               background: "rgba(107, 60, 88, 0.1)",
// // //             },
// // //           }}
// // //         >
// // //           <img
// // //             src={timelineRight}
// // //             alt="right"
// // //             style={{
// // //               width: "25px",
// // //               height: "25px",
// // //               display: "block",
// // //               objectFit: "contain",
// // //             }}
// // //           />
// // //         </Button>
// // //       </div>


// // //       {/* Scrollable Timeline */}
// // //       <div
// // //         ref={containerRef}
// // //         onScroll={handleScroll}
// // //         style={{
// // //           overflowX: "auto",
// // //           scrollbarWidth: "none",
// // //           msOverflowStyle: "none",
// // //         }}
// // //       >
// // //         <style>{`div::-webkit-scrollbar { display: none; }`}</style>


// // //         <div
// // //           style={{
// // //             position: "relative",
// // //             width: "1500px",
// // //             height: containerHeight,
// // //             marginLeft: "150px",
// // //             marginRight: "150px",
// // //             marginBottom: "80px",
// // //           }}
// // //           ref={scaleRef}
// // //         >
// // //           {/* Timeline scale */}
// // //           <div
// // //             style={{
// // //               position: "absolute",
// // //               right: 0,
// // //               top: "50%",
// // //               transform: "translateY(-50%)",
// // //               background: "#b39ddb",
// // //               width: "100%",
// // //             }}
// // //           >
// // //             {years.map((year, i) => {
// // //               const left = scaleWidth * (i / (years.length - 1));
// // //               return (
// // //                 <React.Fragment key={year}>
// // //                   <div
// // //                     style={{
// // //                       position: "absolute",
// // //                       left,
// // //                       top: "-16px",
// // //                       width: "2px",
// // //                       height: "32px",
// // //                       background: "#343A40",
// // //                       transform: "translateX(-50%)",
// // //                     }}
// // //                   />
// // //                   {i < years.length - 1 &&
// // //                     Array.from({ length: divisions - 1 }).map((_, idx) => (
// // //                       <div
// // //                         key={idx}
// // //                         style={{
// // //                           position: "absolute",
// // //                           left:
// // //                             left +
// // //                             (scaleWidth / (years.length - 1)) *
// // //                               ((idx + 1) / divisions),
// // //                           top: "-8px",
// // //                           width: "1px",
// // //                           height: "16px",
// // //                           background: "#343A40",
// // //                           transform: "translateX(-50%)",
// // //                         }}
// // //                       />
// // //                     ))}
// // //                   <Typography
// // //                     variant="typographyTimeLineText"
// // //                     sx={{
// // //                       position: "absolute",
// // //                       left,
// // //                       top: "28px",
// // //                       color: "#000000",
// // //                       transform: "translateX(-50%)",
// // //                     }}
// // //                   >
// // //                     {year}
// // //                   </Typography>
// // //                 </React.Fragment>
// // //               );
// // //             })}
// // //           </div>


// // //           {/* Timeline events */}
// // //           {scaleWidth > 0 &&
// // //             timelineData.map((item, idx) => {
// // //               const leftPx = getYearPositionPx(item.year);
// // //               const isTop = item.position === "top";
// // //               const centerY = containerHeight / 2;
// // //               const eventTop = isTop ? centerY - 120 : centerY + 55;
// // //               const eventTopPercent = (eventTop / containerHeight) * 100;


// // //               return (
// // //                 <div
// // //                   key={idx}
// // //                   style={{
// // //                     position: "absolute",
// // //                     left: leftPx,
// // //                     top: `${eventTopPercent}%`,
// // //                     transform: "translateX(-50%)",
// // //                     textAlign: "center",
// // //                     zIndex: 10,
// // //                     display: "flex",
// // //                     flexDirection: "column",
// // //                     alignItems: "center",
// // //                   }}
// // //                   onMouseEnter={() => setHoveredIndex(idx)}
// // //                   onMouseLeave={() => setHoveredIndex(null)}
// // //                 >
// // //                   <div
// // //                     style={{
// // //                       position: "absolute",
// // //                       left: "50%",
// // //                       top: isTop ? verticalLineLength + dotSize : 0,
// // //                       width: "2px",
// // //                       height: verticalLineLength,
// // //                       borderLeft: "2px dotted #6B3C58",
// // //                       transform: "translateX(-50%)",
// // //                       zIndex: 1,
// // //                       cursor: "pointer",
// // //                     }}
// // //                   />
// // //                   <div
// // //                     style={{
// // //                       position: "absolute",
// // //                       left: "50%",
// // //                       top: verticalLineLength,
// // //                       width: dotSize,
// // //                       height: dotSize,
// // //                       borderRadius: "50%",
// // //                       boxSizing: "border-box",
// // //                       transform: "translateX(-50%)",
// // //                       zIndex: 2,
// // //                       cursor: "pointer",
// // //                     }}
// // //                   >
// // //                     <div
// // //                       style={{
// // //                         position: "absolute",
// // //                         width: "100%",
// // //                         height: "100%",
// // //                         borderRadius: "50%",
// // //                         border: "1px dotted #6B3C58",
// // //                       }}
// // //                     />
// // //                     <div
// // //                       style={{
// // //                         position: "absolute",
// // //                         width: dotSize / 2,
// // //                         height: dotSize / 2,
// // //                         borderRadius: "50%",
// // //                         background: "#6B3C58",
// // //                         top: "50%",
// // //                         left: "50%",
// // //                         transform: "translate(-50%, -50%)",
// // //                       }}
// // //                     />
// // //                   </div>


// // //                   {/* description content */}
// // //                   {((hoveredIndex === null && item.view === "static") ||
// // //                     (hoveredIndex === idx && item.view === "hover") ||
// // //                     (hoveredIndex === idx && item.view === "static")) && (
// // //                     <div
// // //                       style={{
// // //                         fontSize: "12px",
// // //                         minWidth: "281px",
// // //                         maxWidth: "100%",
// // //                         color: "#333",
// // //                         zIndex: 3,
// // //                         position: "absolute",
// // //                         left: "50%",
// // //                         transform: "translateX(-50%)",
// // //                         background: "#FFE6FF",
// // //                         padding: "6px",
// // //                         borderRadius: "8px",
// // //                         wordWrap: "break-word",
// // //                         display: "inline-block",
// // //                         ...(isTop
// // //                           ? { bottom: "-30px" }
// // //                           : { top: dotSize + verticalLineLength + 8 }),
// // //                       }}
// // //                     >
// // //                       {isTop && item.img && (
// // //                         <div style={{ display: "block", textAlign: "center" }}>
// // //                           <img
// // //                             src={item.img}
// // //                             alt={item.title}
// // //                             style={{
// // //                               width: "241px",
// // //                               height: "164px",
// // //                               borderRadius: 10,
// // //                               marginBottom: "5px",
// // //                               objectFit: "cover",
// // //                             }}
// // //                           />
// // //                         </div>
// // //                       )}
// // //                       {!isTop && (
// // //                         <strong style={{ fontSize: "18px" }}>{item.title}</strong>
// // //                       )}
// // //                       {item.description && (
// // //                         <Typography variant="typographyContentText" width={{ width: "100%" }}>
// // //                           {item.description}
// // //                         </Typography>
// // //                       )}
// // //                       {isTop && (
// // //                         <strong style={{ fontSize: "18px" }}>{item.title}</strong>
// // //                       )}
// // //                       {!isTop && item.img && (
// // //                         <div style={{ display: "block", textAlign: "center" }}>
// // //                           <img
// // //                             src={item.img}
// // //                             alt={item.title}
// // //                             style={{
// // //                               width: "241px",
// // //                               height: "164px",
// // //                               borderRadius: 10,
// // //                               marginBottom: "5px",
// // //                               objectFit: "cover",
// // //                             }}
// // //                           />
// // //                         </div>
// // //                       )}
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               );
// // //             })}
// // //         </div>
// // //       </div>
// // //     </Box>
// // //   );
// // // });

// // // export default TimelineScale;



 
// import React, { useRef, useEffect, useState } from "react";
// import TimeLine from "./../Assets/timeLineImage.png";
// import { Typography, IconButton, Button, Box } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";
// import timelineLeft from "../Assets/timelineMoveLeft.png";
// import timelineRight from "../Assets/timelineMoveRight.png";
 
// const timelineData = [
//   {
//     year: "1948",
//     title: "1948",
//     description: "Founded by Shri. V.L. Ethiraj",
//     position: "bottom",
//     view: "static",
//   },
//   {
//     year: "1960-1968",
//     title: "1960-1968",
//     description:
//       "Formative years with the introduction of UG courses in Economics, Botany, Chemistry, History, Zoology and English Literature (Aided Stream)",
//     position: "top",
//     img: TimeLine,
//     view: "static",
//   },
//   {
//     year: "1973",
//     title: "1973",
//     description: "Visit of Prime Minister Smt Indira Gandhi...",
//     position: "bottom",
//     img: TimeLine,
//     view: "hover",
//   },
//   {
//     year: "1978",
//     title: "1978",
//     description: "1st convocation held in the College",
//     position: "top",
//     view: "hover",
//   },
//   {
//     year: "2013",
//     title: "2013",
//     description: "Re-accreditation with 'A' grade by NAAC.",
//     position: "bottom",
//     img: TimeLine,
//     view: "static",
//   },
//   {
//     year: "2022",
//     title: "2022",
//     description: "75th Jubilee year celebrations...",
//     position: "top",
//     view: "static",
//   },
//   // { year: "2029", title: "2029", description: "75th Jubilee year celebrations...", position: "top", view: "hover" },
// ];
 
// const parseYear = (yearStr) => {
//   if (yearStr.includes("-")) {
//     return parseInt(yearStr.split("-")[0], 10); // take first year
//   }
//   return parseInt(yearStr, 10);
// };
// export default function TimelineScale({
//   fromYear = parseYear(timelineData[0].year),
//   toYear = parseYear(timelineData[timelineData.length - 1].year),
//   // fromYear,
//   // toYear,
//   step = 10,
//   divisions = 10,
//   historyOfEthirajDatas,
// }) {
//   const containerRef = useRef();
//   const scaleRef = useRef();
//   const [scaleWidth, setScaleWidth] = useState(0);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);
//   const [containerHeight] = useState(800);
 

// // const timelineData=historyOfEthirajDatas[0]?.additional_data?.card_design?.map((data)=>({
// //   year: data?.year,
// //     title: data?.title,
// //     description:data?.description,
// //     position:data?.position,
// //     img: data?.logo,
// //     view: data?.view,
// // }))

// // const timelineData = historyOfEthirajDatas[0]?.additional_data?.card_design?.map(
// //   (data) => ({
// //     year: data?.year,
// //     title: data?.title,
// //     description: data?.description,
// //     position: data?.position,
// //     img: data?.logo,
// //     view: data?.view,
// //   })
// // );

// // ✔️ Now safely calculate default fromYear/toYear
// // const fromYear = parseYear(timelineData?.[0]?.year);
// // const toYear =
// //    parseYear(timelineData?.[timelineData.length - 1]?.year);

//   useEffect(() => {
//     function handleResize() {
//       if (scaleRef.current) setScaleWidth(scaleRef.current.offsetWidth);
//     }
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
 
//   // 👇 track scroll position to enable/disable buttons
//   const handleScroll = () => {
//     const el = containerRef.current;
//     if (!el) return;
//     setCanScrollLeft(el.scrollLeft > 0);
//     setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
//   };
 
//   const scrollByAmount = (amount) => {
//     if (containerRef.current) {
//       containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
//     }
//   };
 
//   const adjustedToYear =
//     fromYear + Math.ceil((toYear - fromYear) / step) * step;
//   const years = [];
//   for (let y = fromYear; y <= adjustedToYear; y += step) {
//     years.push(y);
//   }
 
//   const getYearPositionPx = (year) => {
//     let targetYear;
//     if (year.includes("-")) {
//       const yr = year.split("-");
//       targetYear = Number(yr[1]);
//     } else {
//       targetYear = Number(year);
//     }
//     const percent = (targetYear - fromYear) / (adjustedToYear - fromYear);
//     return percent * scaleWidth;
//   };
 
//   const dotSize = 20;
//   const verticalLineLength = 38;
 
//   return (
//     <Box sx={{ width: "100%", background: "#FFE6FF", position: "relative",mt:{xs:"0",md:"85px"} }}>
//       <Typography
//         variant="headingTextNewsreaderMedium"
//         sx={{
//           textAlign: "center",
//           color: "var(--heading-text-primary)",
//           mb: { xs: 2, sm: 2, md: "10px", lg: "48px" },
//           px: 4,
//           pt: 2,
//         }}
//       >
//         History of Ethiraj
//       </Typography>
 
//       {/* Navigation Buttons */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "20px",
//           right: "20px",
//           display: "flex",
//           gap: "10px",
//           zIndex: 5,
//         }}
//       >
//         <Button
//           onClick={() => scrollByAmount(-300)}
//           disabled={!canScrollLeft}
//           sx={{
//             width: { xs: 72, md: 48 }, // 72px for mobile/tablet, 48px for desktop
//             height: { xs: 72, md: 48 },
//             borderRadius: "50%",
//             border: "1px dotted #6B3C58",
//             background: "transparent",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             opacity: canScrollLeft ? 1 : 0.4,
//             cursor: canScrollLeft ? "pointer" : "not-allowed",
//             minWidth: 0, // removes MUI's default minWidth
//             p: 0, // remove padding so circle is exact
//             transition: "all 0.2s ease",
//             "&:hover": {
//               background: "rgba(107, 60, 88, 0.1)", // light hover effect
//             },
//           }}
//         >
//           {/* <span style={{ fontSize: "20px", color: "#6B3C58" }}>‹</span> */}
//           <img
//             src={timelineLeft}
//             alt="left"
//             style={{
//               width: "25px",
//               height: "25px",
//               display: "block",
//               objectFit: "contain",
//             }}
//           />
//         </Button>
 
//         <Button
//           onClick={() => scrollByAmount(300)}
//           disabled={!canScrollRight}
//           sx={{
//             width: { xs: 72, md: 48 }, // 72px for mobile/tablet, 48px for desktop
//             height: { xs: 72, md: 48 },
//             borderRadius: "50%",
//             border: "1px dotted #6B3C58",
//             background: "transparent",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             opacity: canScrollRight ? 1 : 0.4,
//             cursor: canScrollRight ? "pointer" : "not-allowed",
//             minWidth: 0, // removes MUI's default minWidth for buttons
//             p: 0, // remove padding so circle is exact
//             transition: "all 0.2s ease",
//             "&:hover": {
//               background: "rgba(107, 60, 88, 0.1)", // light hover effect
//             },
//           }}
//         >
//           {/* <span style={{ fontSize: "20px", color: "#6B3C58" }}>›</span> */}
//           <img
//             src={timelineRight}
//             alt="right"
//             style={{
//               width: "25px",
//               height: "25px",
//               display: "block",
//               objectFit: "contain",
//             }}
//           />
//         </Button>
//       </div>
 
//       {/* Scrollable Timeline */}
//       <div
//         ref={containerRef}
//         onScroll={handleScroll}
//         style={{
//           overflowX: "auto",
//           scrollbarWidth: "none", // hide scrollbar in Firefox
//           msOverflowStyle: "none", // hide scrollbar in IE
//         }}
//       >
//         {/* Hide scrollbar in WebKit browsers */}
//         <style>{`
//           div::-webkit-scrollbar { display: none; }
//         `}</style>
 
//         <div
//           style={{
//             position: "relative",
//             width: "1500px", // 👈 adjust width as per data
//             height: containerHeight,
//             marginLeft: "150px",
//             marginRight: "150px",
//             marginBottom: "80px",
//           }}
//           ref={scaleRef}
//         >
//           {/* Timeline scale */}
//           <div
//             style={{
//               position: "absolute",
//               right: 0,
//               top: "50%",
//               transform: "translateY(-50%)",
//               background: "#b39ddb",
//               width: "100%",
//             }}
//           >
//             {years.map((year, i) => {
//               const left = scaleWidth * (i / (years.length - 1));
//               return (
//                 <React.Fragment key={year}>
//                   <div
//                     style={{
//                       position: "absolute",
//                       left,
//                       top: "-16px",
//                       width: "2px",
//                       height: "32px",
//                       background: "#343A40",
//                       transform: "translateX(-50%)",
//                     }}
//                   />
//                   {i < years.length - 1 &&
//                     Array.from({ length: divisions - 1 }).map((_, idx) => (
//                       <div
//                         key={idx}
//                         style={{
//                           position: "absolute",
//                           left:
//                             left +
//                             (scaleWidth / (years.length - 1)) *
//                               ((idx + 1) / divisions),
//                           top: "-8px",
//                           width: "1px",
//                           height: "16px",
//                           background: "#343A40",
//                           transform: "translateX(-50%)",
//                         }}
//                       />
//                     ))}
//                   {/* <div style={{ position: "absolute", left, top: "28px", fontSize: "12px", color: "#000000", transform: "translateX(-50%)" }}>
//                      {year}
//                   </div> */}
//                   <Typography
//                     variant="typographyTimeLineText"
//                     sx={{
//                       position: "absolute",
//                       left,
//                       top: "28px",
//                       color: "#000000",
//                       transform: "translateX(-50%)",
//                     }}
//                   >
//                     {year}
//                   </Typography>
//                 </React.Fragment>
//               );
//             })}
//           </div>
 
//           {/* Timeline events */}
//           {scaleWidth > 0 &&
//             timelineData.map((item, idx) => {
//               const leftPx = getYearPositionPx(item.year);
//               const isTop = item.position === "top";
//               const centerY = containerHeight / 2;
//               const eventTop = isTop ? centerY - 120 : centerY + 55;
//               const eventTopPercent = (eventTop / containerHeight) * 100;
 
//               return (
//                 <div
//                   key={idx}
//                   style={{
//                     position: "absolute",
//                     left: leftPx,
//                     top: `${eventTopPercent}%`,
//                     transform: "translateX(-50%)",
//                     textAlign: "center",
//                     // width: 300,
//                     zIndex: 10,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                   onMouseEnter={() => setHoveredIndex(idx)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                 >
//                   <div
//                     style={{
//                       position: "absolute",
//                       left: "50%",
//                       top: isTop ? verticalLineLength + dotSize : 0,
//                       width: "2px",
//                       height: verticalLineLength,
//                       borderLeft: "2px dotted #6B3C58",
//                       transform: "translateX(-50%)",
//                       zIndex: 1,
//                       cursor: "pointer",
//                     }}
//                   />
//                   <div
//                     style={{
//                       position: "absolute",
//                       left: "50%",
//                       top: verticalLineLength,
//                       width: dotSize,
//                       height: dotSize,
//                       borderRadius: "50%",
//                       boxSizing: "border-box",
//                       transform: "translateX(-50%)",
//                       zIndex: 2,
//                       cursor: "pointer",
//                     }}
//                   >
//                     <div
//                       style={{
//                         position: "absolute",
//                         width: "100%",
//                         height: "100%",
//                         borderRadius: "50%",
//                         border: "1px dotted #6B3C58",
//                       }}
//                     />
//                     <div
//                       style={{
//                         position: "absolute",
//                         width: dotSize / 2,
//                         height: dotSize / 2,
//                         borderRadius: "50%",
//                         background: "#6B3C58",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                       }}
//                     />
//                   </div>
//                   {/* description content */}
//                   {// CASE 1: No hover -> show all static events
//                   ((hoveredIndex === null && item.view === "static") ||
//                     // CASE 2: Hovering over hover-event -> show only that hover event
//                     (hoveredIndex === idx && item.view === "hover") ||
//                     // CASE 3: Hovering over static-event -> show only that static event
//                     (hoveredIndex === idx && item.view === "static")) && (
//                     <div
//                       style={{
//                         fontSize: "12px",
//                         minWidth: "281px",
//                         maxWidth: "100%",
//                         color: "#333",
//                         zIndex: 3,
//                         position: "absolute", // 👈 important: absolute relative to parent
//                         left: "50%",
//                         transform: "translateX(-50%)",
//                         background: "#FFE6FF",
//                         padding: "6px",
//                         borderRadius: "8px",
//                         // border: "1px solid red",
//                         wordWrap: "break-word",
//                         display: "inline-block",
 
//                         // anchor logic
//                         ...(isTop
//                           ? { bottom: "-30px" } // 👈 grow upward
//                           : { top: dotSize + verticalLineLength + 8 }), // 👈 grow downward
//                       }}
//                     >
//                       {isTop && item.img && (
//                         <div style={{ display: "block", textAlign: "center" }}>
//                           {" "}
//                           <img
//                             src={item.img}
//                             alt={item.title}
//                             style={{
//                               width: "241px",
//                               height: "164px",
//                               borderRadius: 10,
//                               marginBottom: "5px",
//                               objectFit: "cover",
//                             }}
//                           />
//                         </div>
//                       )}
//                       {!isTop && (
//                         <strong style={{ fontSize: "18px" }}>
//                           {item.title}
//                         </strong>
//                       )}
 
//                       {item.description && (
//                         <Typography
//                           variant="typographyContentText"
//                           width={{ width: "100%" }}
//                         >
//                           {item.description}
//                         </Typography>
//                       )}
 
//                       {isTop && (
//                         <strong style={{ fontSize: "18px" }}>
//                           {item.title}
//                         </strong>
//                       )}
//                       {!isTop && item.img && (
//                         <div style={{ display: "block", textAlign: "center" }}>
//                           {" "}
//                           <img
//                             src={item.img}
//                             alt={item.title}
//                             style={{
//                               width: "241px",
//                               height: "164px",
//                               borderRadius: 10,
//                               marginBottom: "5px",
//                               objectFit: "cover",
//                             }}
//                           />
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </Box>
//   );
// }
 
 
import React, { useRef, useEffect, useState } from "react";
import TimeLine from "./../Assets/timeLineImage.png";
import { Typography, IconButton, Button, Box } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import timelineLeft from "../Assets/timelineMoveLeft.png";
import timelineRight from "../Assets/timelineMoveRight.png";

import timelineImage1 from "../Assets//timelineImage1.png";
import timelineImage2 from "../Assets//timelineImage2.jpg";
import timelineImage3 from "../Assets//timelineImage3.jpg";
import timelineImage4 from "../Assets//timelineImage4.jpg";
import timelineImage5 from "../Assets//timelineImage5.jpg";
import timelineImage6 from "../Assets//Media_2018.jpg";




import { adminUrl } from "../constants";

 
const fallbackTimelineData = [
  {
    year: "1948",
    title: "1948",
    description: "A historic moment: Thiru V. L. Ethiraj with Rajaji at the inauguration of Ethiraj College for Women, 1948.",
    position: "bottom",
    view: "static",
    img: timelineImage1,

  },
  {
    year: "1968",
    title: "1968",
    description:
      "A memorable moment from the 1968 College Day – Ms. Evangeline Mathew (Principal) with then Chief Minister C. N. Annadurai at Ethiraj College for Women, Chennai.",
    position: "top",
    img: timelineImage2,
    view: "static",
  },
  {
    year: "1973",
    title: "1973",
    description: "Tmt. Indira Gandhi , Prime Minister of India, unveiling the Founder's Statue during the Silver Jubilee Year - 1973",
    position: "bottom",
    img: timelineImage3,
    view: "static",
  },
  {
    year: "1990",
    title: "1990",
    description: "Thiru V.L. Ethiraj Centenary, 1990 – Thiru M. Karunanidhi and Thiru K. Anbazhagan addressing the gathering, with Governor Dr. Surjith Singh Barnala gracing the occasion.",
    position: "top",
    img: timelineImage4,

    view: "static",
  },
  {
    year: "2010",
    title: "2010",
    description: "Honoring the future: Dr. A P J Abdul Kalam inaugurates Campus II, dedicating it to the student community on 5th March 2010.",
    position: "bottom",
    img: timelineImage5,
    view: "static",
  },
  {
    year: "2018",
    title: "2018",
    description: 'Platinum Jubilee & Foundation Stone Ceremony by M. Venkaiah Naidu, former Vice President of India',
    position: "top",
    img: timelineImage6,
    view: "static",
  },
 
  // { year: "2029", title: "2029", description: "75th Jubilee year celebrations...", position: "top", view: "hover" },
];
 
const parseYear = (yearStr) => {
  if (yearStr.includes("-")) {
    return parseInt(yearStr.split("-")[0], 10); // take first year
  }
  return parseInt(yearStr, 10);
};
export default function TimelineScale({
  // fromYear = parseYear(timelineData[0].year),
  // toYear = parseYear(timelineData[timelineData.length - 1].year),
 
  // fromYear = parseYear('1948'),
  // toYear = parseYear('2025'),
  // fromYear,
  // toYear,
  step = 10,
  divisions = 10,
  historyOfEthirajDatas,
}) {
 
 
  console.log(historyOfEthirajDatas,'historyOfEthirajDatashistoryOfEthirajDatas');
 
 
 
  // ============================================================
  // 2) Set fromYear, toYear dynamically from API
  // ============================================================
 
  const [fromYear, setfromYear] = useState();
  const [toYear, settoYear] = useState();
  const [timelineData, setTimelineData] = useState([]);
 
  console.log(timelineData,"timelineDatatimelineData");
 
 
  // useEffect(() => {
  //   if (!historyOfEthirajDatas) return;
 
  //   // 🚀 FIX 4: Safe mapping — no await, no async
  //   const mapped = historyOfEthirajDatas?.[0]?.additional_data?.card_design?.map(
  //     (item) => ({
  //       year: item?.year,
  //       title: item?.title,
  //       description: item?.content,
  //       position: item?.position,
  //       img: item?.logo ? `${adminUrl}${item.logo}` : null,
  //       view: item?.View?.toLowerCase(), // static / hover
  //     })
  //   ) || [];
 
  //   setTimelineData(mapped); // 🚀 FIX 5: This will NOT trigger infinite loop anymore
 
  //   console.log(mapped,"mapped");
   
 
  //   // 🚀 FIX 6: Compute fromYear and toYear using "mapped" (fresh data)
  //   if (mapped.length > 0) {
  //     setfromYear(parseYear(mapped[0].year));
  //     settoYear(parseYear(mapped[mapped.length - 1].year));
  //   } else {
  //     setfromYear(parseYear("1948"));
  //     settoYear(parseYear("2026"));
  //   }
 
  // }, [historyOfEthirajDatas]);  // <-- 🚀 ONLY ONE dependency now
 
 
  // const fromYear = timelineData.length > 0
  //   ? parseYear(timelineData[0].year)
  //   : 1940;
 
  // const toYear = timelineData.length > 0
  //   ? parseYear(timelineData[timelineData.length - 1].year)
  //   : 2025;
 
useEffect(() => {
  let mapped = [];
 
  // Case 1: API data exists
  // if (
  //   historyOfEthirajDatas &&
  //   historyOfEthirajDatas[0]?.additional_data?.card_design?.length > 0
  // ) {
  //   mapped = historyOfEthirajDatas[0].additional_data.card_design.map(item => ({
  //     year: item?.year,
  //     title: item?.title,
  //     description: item?.content,
  //     position: item?.position,
  //     img: item?.logo ? `${item.logo}` : null,
  //     view: item?.View?.toLowerCase(),
  //   }));
  // } else {
    // Case 2: No API data → use static fallback
    mapped = fallbackTimelineData;
  // }
 
  setTimelineData(mapped);
 
  if (mapped.length > 0) {
    setfromYear(parseYear(mapped[0].year));
    settoYear(parseYear(mapped[mapped.length - 1].year));
  }
}, [historyOfEthirajDatas]);
 
 
  const containerRef = useRef();
  const scaleRef = useRef();
  const [scaleWidth, setScaleWidth] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [containerHeight] = useState(800);
 
 
  // const timelineData=historyOfEthirajDatas[0]?.additional_data?.card_design?.map((data)=>({
  //   year: data?.year,
  //     title: data?.title,
  //     description:data?.description,
  //     position:data?.position,
  //     img: data?.logo,
  //     view: data?.view,
  // }))
 
  // const timelineData = historyOfEthirajDatas[0]?.additional_data?.card_design?.map(
  //   (data) => ({
  //     year: data?.year,
  //     title: data?.title,
  //     description: data?.description,
  //     position: data?.position,
  //     img: data?.logo,
  //     view: data?.view,
  //   })
  // );
 
  // ✔️ Now safely calculate default fromYear/toYear
  // const fromYear = parseYear(timelineData?.[0]?.year);
  // const toYear =
  //    parseYear(timelineData?.[timelineData.length - 1]?.year);
 
  useEffect(() => {
    function handleResize() {
      if (scaleRef.current) setScaleWidth(scaleRef.current.offsetWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  // 👇 track scroll position to enable/disable buttons
  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };
 
  const scrollByAmount = (amount) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };
 
  // const adjustedToYear =
  //   fromYear + Math.ceil((toYear - fromYear) / step) * step;
 
 
  const adjustedToYear = fromYear + Math.ceil((toYear - fromYear) / step) * step;
 
 
 
  console.log("Adjusted To Year:", adjustedToYear);
  const years = [];
  for (let y = fromYear; y <= adjustedToYear; y += step) {
    years.push(y);
  }
 
  const getYearPositionPx = (year) => {
    let targetYear;
    if (year.includes("-")) {
      const yr = year.split("-");
      targetYear = Number(yr[1]);
    } else {
      targetYear = Number(year);
    }
    const percent = (targetYear - fromYear) / (adjustedToYear - fromYear);
    return percent * scaleWidth;
  };
 
  const dotSize = 20;
  const verticalLineLength = 38;
 
  return (
    <Box sx={{ width: "100%", background: "#FFE6FF", position: "relative", mt: { xs: "0", md: "85px" } }}>
      <Typography
        variant="headingTextNewsreaderMedium"
        sx={{
          textAlign: "center",
          color: "var(--heading-text-primary)",
          mb: { xs: 2, sm: 2, md: "10px", lg: "48px" },
          px: 4,
          pt: 2,
        }}
      >
        Milestones
      </Typography>
 
      {/* Navigation Buttons */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          display: "flex",
          gap: "10px",
          zIndex: 5,
        }}
      >
        <Button
          onClick={() => scrollByAmount(-300)}
          disabled={!canScrollLeft}
          sx={{
            width: { xs: 72, md: 48 }, // 72px for mobile/tablet, 48px for desktop
            height: { xs: 72, md: 48 },
            borderRadius: "50%",
            border: "1px dotted #6B3C58",
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: canScrollLeft ? 1 : 0.4,
            cursor: canScrollLeft ? "pointer" : "not-allowed",
            minWidth: 0, // removes MUI's default minWidth
            p: 0, // remove padding so circle is exact
            transition: "all 0.2s ease",
            "&:hover": {
              background: "rgba(107, 60, 88, 0.1)", // light hover effect
            },
          }}
        >
          {/* <span style={{ fontSize: "20px", color: "#6B3C58" }}>‹</span> */}
          <img
            src={timelineLeft}
            alt="left"
            style={{
              width: "25px",
              height: "25px",
              display: "block",
              objectFit: "contain",
            }}
          />
        </Button>
 
        <Button
          onClick={() => scrollByAmount(300)}
          disabled={!canScrollRight}
          sx={{
            width: { xs: 72, md: 48 }, // 72px for mobile/tablet, 48px for desktop
            height: { xs: 72, md: 48 },
            borderRadius: "50%",
            border: "1px dotted #6B3C58",
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: canScrollRight ? 1 : 0.4,
            cursor: canScrollRight ? "pointer" : "not-allowed",
            minWidth: 0, // removes MUI's default minWidth for buttons
            p: 0, // remove padding so circle is exact
            transition: "all 0.2s ease",
            "&:hover": {
              background: "rgba(107, 60, 88, 0.1)", // light hover effect
            },
          }}
        >
          {/* <span style={{ fontSize: "20px", color: "#6B3C58" }}>›</span> */}
          <img
            src={timelineRight}
            alt="right"
            style={{
              width: "25px",
              height: "25px",
              display: "block",
              objectFit: "contain",
            }}
          />
        </Button>
      </div>
 
      {/* Scrollable Timeline */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          overflowX: "auto",
          scrollbarWidth: "none", // hide scrollbar in Firefox
          msOverflowStyle: "none", // hide scrollbar in IE
        }}
      >
        {/* Hide scrollbar in WebKit browsers */}
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
 
        <div
          style={{
            position: "relative",
            width: "1500px", // 👈 adjust width as per data
            height: containerHeight,
            marginLeft: "150px",
            marginRight: "150px",
            marginBottom: "80px",
          }}
          ref={scaleRef}
        >
          {/* Timeline scale */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              background: "#b39ddb",
              width: "100%",
            }}
          >
            {years.map((year, i) => {
              const left = scaleWidth * (i / (years.length - 1));
              return (
                <React.Fragment key={year}>
                  <div
                    style={{
                      position: "absolute",
                      left,
                      top: "-16px",
                      width: "2px",
                      height: "32px",
                      background: "#343A40",
                      transform: "translateX(-50%)",
                    }}
                  />
                  {i < years.length - 1 &&
                    Array.from({ length: divisions - 1 }).map((_, idx) => (
                      <div
                        key={idx}
                        style={{
                          position: "absolute",
                          left:
                            left +
                            (scaleWidth / (years.length - 1)) *
                            ((idx + 1) / divisions),
                          top: "-8px",
                          width: "1px",
                          height: "16px",
                          background: "#343A40",
                          transform: "translateX(-50%)",
                        }}
                      />
                    ))}
                  {/* <div style={{ position: "absolute", left, top: "28px", fontSize: "12px", color: "#000000", transform: "translateX(-50%)" }}>
                     {year}
                  </div> */}
                  <Typography
                    variant="typographyTimeLineText"
                    sx={{
                      position: "absolute",
                      left,
                      top: "28px",
                      color: "#000000",
                      transform: "translateX(-50%)",
                    }}
                  >
                    {year}
                  </Typography>
                </React.Fragment>
              );
            })}
          </div>
 
          {/* Timeline events */}
          {scaleWidth > 0 &&
            timelineData.map((item, idx) => {
              const leftPx = getYearPositionPx(item.year);
              const isTop = item.position === "top";
              const centerY = containerHeight / 2;
              const eventTop = isTop ? centerY - 120 : centerY + 55;
              const eventTopPercent = (eventTop / containerHeight) * 100;
 
              return (
                <div
                  key={idx}
                  style={{
                    position: "absolute",
                    left: leftPx,
                    top: `${eventTopPercent}%`,
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    // width: 300,
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: isTop ? verticalLineLength + dotSize : 0,
                      width: "2px",
                      height: verticalLineLength,
                      borderLeft: "2px dotted #6B3C58",
                      transform: "translateX(-50%)",
                      zIndex: 1,
                      cursor: "pointer",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: verticalLineLength,
                      width: dotSize,
                      height: dotSize,
                      borderRadius: "50%",
                      boxSizing: "border-box",
                      transform: "translateX(-50%)",
                      zIndex: 2,
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        border: "1px dotted #6B3C58",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        width: dotSize / 2,
                        height: dotSize / 2,
                        borderRadius: "50%",
                        background: "#6B3C58",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                  {/* description content */}
                  {// CASE 1: No hover -> show all static events
                    ((hoveredIndex === null && item.view === "static") ||
                      // CASE 2: Hovering over hover-event -> show only that hover event
                      (hoveredIndex === idx && item.view === "hover") ||
                      // CASE 3: Hovering over static-event -> show only that static event
                      (hoveredIndex === idx && item.view === "static")) && (
                      <div
                        style={{
                          fontSize: "12px",
                          minWidth: "281px",
                          maxWidth: "100%",
                          color: "#333",
                          zIndex: 3,
                          position: "absolute", // 👈 important: absolute relative to parent
                          left: "50%",
                          transform: "translateX(-50%)",
                          background: "#FFE6FF",
                          padding: "6px",
                          borderRadius: "8px",
                          // border: "1px solid red",
                          wordWrap: "break-word",
                          display: "inline-block",
 
                          // anchor logic
                          ...(isTop
                            ? { bottom: "-30px" } // 👈 grow upward
                            : { top: dotSize + verticalLineLength + 8 }), // 👈 grow downward
                        }}
                      >
                        {isTop && item.img && (
                          <div style={{ display: "block", textAlign: "center" }}>
                            {" "}
                            <img
                              src={item.img}
                              alt={item.title}
                              style={{
                                width: "241px",
                                height: "164px",
                                borderRadius: 10,
                                marginBottom: "5px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        )}
                        {!isTop && (
                          <strong style={{ fontSize: "18px" }}>
                            {item.title}
                          </strong>
                        )}
 
                        {item.description && (
                          <Typography
                            variant="typographyContentText"
                            width={{ width: "100%" }}
                          >
                            {item.description}
                          </Typography>
                        )}
 
                        {isTop && (
                          <strong style={{ fontSize: "18px" }}>
                            {item.title}
                          </strong>
                        )}
                        {!isTop && item.img && (
                          <div style={{ display: "block", textAlign: "center" }}>
                            {" "}
                            <img
                              src={item.img}
                              alt={item.title}
                              style={{
                                width: "241px",
                                height: "164px",
                                borderRadius: 10,
                                marginBottom: "5px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        )}
                      </div>
                    )}
                </div>
              );
            })}
        </div>
      </div>
    </Box>
  );
}
 