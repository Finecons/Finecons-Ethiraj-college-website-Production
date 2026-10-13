// // import React, { useState, useRef, useEffect } from "react";
// // import { Box, IconButton, Typography, Card } from "@mui/material";
// // import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// // import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// // import linkIconImage from "../../../Assets/link.svg";

// // export default function CustomImageSliderNext({
// //   items = [],
// //   link,
// //   showDefaultDetails = true,
// //   renderDetails,
// //   itemSx,
// //   imageSx,
// //   nameVariant = "leadershipContentTextNewsreaderMedium",
// //   nameSx,
// //   trackSx,
// // }) {
// //   const [current, setCurrent] = useState(0);
// //   const sliderRef = useRef(null);
// //   const lastIndex = Math.max(0, items.length - 1);

// //   // Scroll to specific index
// //   const scrollToIndex = (index) => {
// //     const el = sliderRef.current;
// //     if (!el) return;
// //     const child = el.children[index];
// //     if (!child) return;

// //     const containerRect = el.getBoundingClientRect();
// //     const childRect = child.getBoundingClientRect();
// //     const targetScrollLeft =
// //       el.scrollLeft + (childRect.left - containerRect.left);

// //     el.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
// //     setCurrent(index);
// //   };

// //   const nextSlide = () => {
// //     if (current < lastIndex) scrollToIndex(current + 1);
// //   };

// //   const prevSlide = () => {
// //     if (current > 0) scrollToIndex(current - 1);
// //   };

// //   // Track current item when user scrolls manually
// //   useEffect(() => {
// //     const el = sliderRef.current;
// //     if (!el) return;

// //     let ticking = false;
// //     const onScroll = () => {
// //       if (ticking) return;
// //       ticking = true;
// //       window.requestAnimationFrame(() => {
// //         if (!sliderRef.current) {
// //           ticking = false;
// //           return;
// //         }
// //         const containerRect = sliderRef.current.getBoundingClientRect();
// //         let nearest = 0;
// //         let minDiff = Infinity;
// //         Array.from(sliderRef.current.children).forEach((child, idx) => {
// //           if (!child) return;
// //           const childRect = child.getBoundingClientRect();
// //           const diff = Math.abs(childRect.left - containerRect.left);
// //           if (diff < minDiff) {
// //             minDiff = diff;
// //             nearest = idx;
// //           }
// //         });
// //         if (nearest !== current) setCurrent(nearest);
// //         ticking = false;
// //       });
// //     };

// //     el.addEventListener("scroll", onScroll, { passive: true });
// //     return () => el.removeEventListener("scroll", onScroll);
// //   }, [current, items]);

// //   return (
// //     <Box sx={{ position: "relative", width: "100%" }}>
// //       {/* Slider container */}
// //       <Box
// //         ref={sliderRef}
// //         sx={{
// //           display: "flex",
// //           gap: 3,
// //           overflowX: "auto",
// //           scrollBehavior: "smooth",
// //           scrollSnapType: "x mandatory",
// //           "&::-webkit-scrollbar": { display: "none" },
// //           scrollbarWidth: "none",
// //           msOverflowStyle: "none",
// //           "& > *": { scrollSnapAlign: "start" },
// //           alignItems: "start",
// //           py: 1,
// //           ...trackSx,
// //         }}
// //       >
// //         {items.map((faculty, index) => (
// //           <Card
// //             key={index}
// //             sx={{
// //               flex: "0 0 auto",
// //               flexShrink: 0,
// //               width: { xs: 160, sm: 190, md: 215, lg: 237 },
// //               minWidth: { xs: 160, sm: 190, md: 215, lg: 237 },
// //               borderRadius: 2,
// //               boxShadow: "none",
// //               background: "none",
// //               textAlign: "start",
// //               ...itemSx,
// //             }}
// //           >
// //             <Box
// //               component="img"
// //               src={faculty.image}
// //               alt={faculty.name}
// //               sx={{
// //                 width: "100%",
// //                 height: { xs: 206, sm: 245, md: 277, lg: 305 },
// //                 aspectRatio: "115 / 148",
// //                 objectFit: "cover",
// //                 ...imageSx,
// //               }}
// //             />
// //             <Typography
// //               variant={nameVariant}
// //               sx={{ mt: { md: "18px", lg: "24px" }, ...nameSx }}
// //             >
// //               {faculty.name}
// //             </Typography>
// //             {showDefaultDetails && (
// //               <>
// //                 <Typography
// //                   variant="typographyBodyInterMaintext"
// //                   sx={{ mt: "5px" }}
// //                 >
// //                   {faculty.title}
// //                 </Typography>
// //                 <Typography variant="typographyBodyInterNormal" sx={{ mt: "5px" }}>
// //                   {faculty.qualification}
// //                 </Typography>

// //                 <Box sx={{ my: { lg: "24px", md: "18px", xs: "10px" } }}>
// //                   <Typography
// //                     variant="typographyBodyInterNormal"
// //                     sx={{ fontWeight: "500 !important" }}
// //                   >
// //                     Area of Specialization
// //                   </Typography>
// //                   <Typography variant="typographyBodyInterNormal" display="block">
// //                     {faculty.specialization}
// //                   </Typography>
// //                 </Box>
// //                 {faculty?.email && (
// //                   <Box sx={{ my: { lg: "20px", md: "16px", xs: "10px" } }}>
// //                     <Typography
// //                       variant="typographyBodyInterNormal"
// //                       display="block"
// //                       sx={{ textDecoration: "underline" }}
// //                     >
// //                       {faculty.email}
// //                     </Typography>
// //                   </Box>
// //                 )}
// //                 {faculty?.approveLetter && faculty?.approvalLetterLink && (
// //                   <Box sx={{ my: { lg: "20px", md: "16px", xs: "10px" } }}>
// //                     <Typography
// //                       component="a"
// //                       href={faculty.approvalLetterLink}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       variant="typographyBodyInterNormal"
// //                       display="block"
// //                       sx={{
// //                         textDecoration: "underline",
// //                         color: "#003BD1",
// //                         cursor: "pointer",
// //                       }}
// //                     >
// //                       Approval Letter
// //                     </Typography>
// //                   </Box>
// //                 )}
// //               </>
// //             )}
// //             {renderDetails ? renderDetails(faculty) : null}
// //             {link && faculty?.profileLink && (
// //               <Box
// //                 sx={{
// //                   display: "flex",
// //                   justifyContent: "start",
// //                   alignItems: "center",
// //                   gap: "24px",
// //                 }}
// //               >
// //                 <Box
// //                   component="a"
// //                   href={faculty.profileLink}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   sx={{ display: "inline-flex", alignItems: "center" }}
// //                 >
// //                   <Box
// //                     component="img"
// //                     src={linkIconImage}
// //                     alt="Profile Link"
// //                     sx={{ maxHeight: "24px", maxWidth: "24px", cursor: "pointer" }}
// //                   />
// //                 </Box>
// //                 {/* <Typography
// //                   component="a"
// //                   href={faculty.profileLink}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   variant="typographyBodyInterNormal"
// //                   sx={{
// //                     textDecoration: "underline",
// //                     color: "inherit",
// //                   }}
// //                 >
// //                   Profile Link
// //                 </Typography>
// //                 <Box
// //                   component="a"
// //                   href={faculty.profileLink}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   sx={{ display: "inline-flex", alignItems: "center" }}
// //                 >
// //                   <Box
// //                     component="img"
// //                     src={bookIconImage}
// //                     alt="Profile Link"
// //                     sx={{ maxHeight: "24px", maxWidth: "24px", cursor: "pointer" }}
// //                   />
// //                 </Box> */}
// //               </Box>
// //             )}
// //           </Card>
// //         ))}
// //       </Box>

// //       {/* Navigation Buttons */}
// //       <Box
// //         sx={{
// //           display: "flex",
// //           justifyContent: "end",
// //           gap: 2,
// //           mt: 2,
// //         }}
// //       >
// //         <IconButton
// //           onClick={prevSlide}
// //           disabled={current === 0}
// //           sx={{
// //             bgcolor: "#FFE6FF",
// //             color: "#b39ddb",
// //             border: "1px dashed lightgray",
// //             // "&:hover": { bgcolor: "#FFE6FF", color: "#b39ddb" },/
// //             boxShadow: "none",
// //             "&:disabled": { opacity: 0.4, border: "1px dashed lightgray" },
// //           }}
// //         >
// //           <ArrowBackIosNewIcon />
// //         </IconButton>

// //         <IconButton
// //           onClick={nextSlide}
// //           disabled={current === lastIndex}
// //           sx={{
// //             bgcolor: "#FFE6FF",
// //             color: "#b39ddb",
// //             border: "1px dashed lightgray",

// //             // "&:hover": { bgcolor: "#FFE6FF", color: "#b39ddb" },
// //             boxShadow: "none",
// //             "&:disabled": { opacity: 0.4, border: "1px dashed lightgray" },
// //           }}
// //         >
// //           <ArrowForwardIosIcon />
// //         </IconButton>
// //       </Box>
// //     </Box>
// //   );
// // }

// import React, { useState, useRef, useEffect } from "react";
// import { Box, IconButton, Typography, Card } from "@mui/material";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import linkIconImage from "../../../Assets/link.svg";

// export default function CustomImageSliderNext({ items = [], link }) {
//   const [current, setCurrent] = useState(0);
//   const sliderRef = useRef(null);
//   const lastIndex = Math.max(0, items.length - 1);

//   // Scroll to specific index
//   const scrollToIndex = (index) => {
//     const el = sliderRef.current;
//     if (!el) return;
//     const child = el.children[index];
//     if (!child) return;

//     const containerRect = el.getBoundingClientRect();
//     const childRect = child.getBoundingClientRect();
//     const targetScrollLeft =
//       el.scrollLeft + (childRect.left - containerRect.left);

//     el.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
//     setCurrent(index);
//   };

//   const nextSlide = () => {
//     if (current < lastIndex) scrollToIndex(current + 1);
//   };

//   const prevSlide = () => {
//     if (current > 0) scrollToIndex(current - 1);
//   };

//   // Track current item when user scrolls manually
//   useEffect(() => {
//     const el = sliderRef.current;
//     if (!el) return;

//     let ticking = false;
//     const onScroll = () => {
//       if (ticking) return;
//       ticking = true;
//       window.requestAnimationFrame(() => {
//         if (!sliderRef.current) {
//           ticking = false;
//           return;
//         }
//         const containerRect = sliderRef.current.getBoundingClientRect();
//         let nearest = 0;
//         let minDiff = Infinity;
//         Array.from(sliderRef.current.children).forEach((child, idx) => {
//           if (!child) return;
//           const childRect = child.getBoundingClientRect();
//           const diff = Math.abs(childRect.left - containerRect.left);
//           if (diff < minDiff) {
//             minDiff = diff;
//             nearest = idx;
//           }
//         });
//         if (nearest !== current) setCurrent(nearest);
//         ticking = false;
//       });
//     };

//     el.addEventListener("scroll", onScroll, { passive: true });
//     return () => el.removeEventListener("scroll", onScroll);
//   }, [current, items]);

//   return (
//     <Box sx={{ position: "relative", width: "100%" }}>
//       {/* Slider container */}
//       <Box
//         ref={sliderRef}
//         sx={{
//           display: "flex",
//           gap: 3,
//           overflowX: "auto",
//           scrollBehavior: "smooth",
//           scrollSnapType: "x mandatory",
//           "&::-webkit-scrollbar": { display: "none" },
//           scrollbarWidth: "none",
//           msOverflowStyle: "none",
//           "& > *": { scrollSnapAlign: "start" },
//           alignItems: "start",
//           py: 1,
//         }}
//       >
//         {items.map((faculty, index) => (
//           <Card
//             key={index}
//             sx={{
//               flex: "0 0 25%", // Show 4 cards at a time on large screens
//               minWidth: { xs: "45%", sm: "45%", md: "25%" },
//               borderRadius: 2,
//               boxShadow: "none",
//               background: "none",
//               textAlign: "start",
//             }}
//           >
//             <Box
//               component="img"
//               src={faculty.image}
//               alt={faculty.name}
//               sx={{
//                 width: "100%",
//                 height: { xs: 255, md: 255, lg: 305 },
//                 maxWidth: { xs: 150, sm: 180, md: 200 },

//                 objectFit: "contain",
              
//               }}
//             />
//             <Typography
//               variant="leadershipContentTextNewsreaderMedium"
//               sx={{ mt: { md: "18px", lg: "24px" } }}
//             >
//               {faculty.name}
//             </Typography>
//             <Typography
//               variant="typographyBodyInterMaintext"
//               sx={{ mt: "5px" }}
//             >
//               {faculty.title}
//             </Typography>
//             <Typography variant="typographyBodyInterNormal" sx={{ mt: "5px" }}>
//               {faculty.qualification}
//             </Typography>

//             <Box sx={{ my: { lg: "24px", md: "18px", xs: "10px" } }}>
//               <Typography
//                 variant="typographyBodyInterNormal"
//                 sx={{ fontWeight: "500 !important" }}
//               >
//                 Area of Specialization
//               </Typography>
//               <Typography variant="typographyBodyInterNormal" display="block">
//                 {faculty.specialization}
//               </Typography>
//             </Box>
//             {faculty?.email && (
//               <Box sx={{ my: { lg: "20px", md: "16px", xs: "10px" } }}>
//                 <Typography
//                   variant="typographyBodyInterNormal"
//                   display="block"
//                   sx={{ textDecoration: "underline" }}
//                 >
//                   {faculty.email}
//                 </Typography>
//               </Box>
//             )}
//             {faculty?.approveLetter && faculty?.approvalLetterLink && (
//               <Box sx={{ my: { lg: "20px", md: "16px", xs: "10px" } }}>
//                 <Typography
//                   component="a"
//                   href={faculty.approvalLetterLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   variant="typographyBodyInterNormal"
//                   display="block"
//                   sx={{
//                     textDecoration: "underline",
//                     color: "#003BD1",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Approval Letter
//                 </Typography>
//               </Box>
//             )}
//             {link && faculty?.profileLink && (
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "start",
//                   alignItems: "center",
//                   gap: "24px",
//                 }}
//               >
//                 <Box
//                   component="a"
//                   href={faculty.profileLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   sx={{ display: "inline-flex", alignItems: "center" }}
//                 >
//                   <Box
//                     component="img"
//                     src={linkIconImage}
//                     alt="Profile Link"
//                     sx={{ maxHeight: "24px", maxWidth: "24px", cursor: "pointer" }}
//                   />
//                 </Box>
//                 {/* <Typography
//                   component="a"
//                   href={faculty.profileLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   variant="typographyBodyInterNormal"
//                   sx={{
//                     textDecoration: "underline",
//                     color: "inherit",
//                   }}
//                 >
//                   Profile Link
//                 </Typography>
//                 <Box
//                   component="a"
//                   href={faculty.profileLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   sx={{ display: "inline-flex", alignItems: "center" }}
//                 >
//                   <Box
//                     component="img"
//                     src={bookIconImage}
//                     alt="Profile Link"
//                     sx={{ maxHeight: "24px", maxWidth: "24px", cursor: "pointer" }}
//                   />
//                 </Box> */}
//               </Box>
//             )}
//           </Card>
//         ))}
//       </Box>

//       {/* Navigation Buttons */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "end",
//           gap: 2,
//           mt: 2,
//         }}
//       >
//         <IconButton
//           onClick={prevSlide}
//           disabled={current === 0}
//           sx={{
//             bgcolor: "#FFE6FF",
//             color: "#b39ddb",
//             border: "1px dashed lightgray",
//             // "&:hover": { bgcolor: "#FFE6FF", color: "#b39ddb" },/
//             boxShadow: "none",
//             "&:disabled": { opacity: 0.4, border: "1px dashed lightgray" },
//           }}
//         >
//           <ArrowBackIosNewIcon />
//         </IconButton>

//         <IconButton
//           onClick={nextSlide}
//           disabled={current === lastIndex}
//           sx={{
//             bgcolor: "#FFE6FF",
//             color: "#b39ddb",
//             border: "1px dashed lightgray",

//             // "&:hover": { bgcolor: "#FFE6FF", color: "#b39ddb" },
//             boxShadow: "none",
//             "&:disabled": { opacity: 0.4, border: "1px dashed lightgray" },
//           }}
//         >
//           <ArrowForwardIosIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import { Box, IconButton, Typography, Card } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import linkIconImage from "../../../Assets/link.svg";

export default function CustomImageSliderNext({
  items = [],
  link,
  showDefaultDetails = true,
  renderDetails,
  sportsAppointmentDetails = false,
  nameVariant = "leadershipContentTextNewsreaderMedium",
  nameSx,
  trackSx,
}) {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const lastIndex = Math.max(0, items.length - 1);

  const scrollToIndex = (index) => {
    const el = sliderRef.current;
    if (!el) return;
    const child = el.children[index];
    if (!child) return;

    const containerRect = el.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    const targetScrollLeft =
      el.scrollLeft + (childRect.left - containerRect.left);

    el.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
    setCurrent(index);
  };

  const nextSlide = () => {
    if (current < lastIndex) scrollToIndex(current + 1);
  };

  const prevSlide = () => {
    if (current > 0) scrollToIndex(current - 1);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        if (!sliderRef.current) {
          ticking = false;
          return;
        }
        const containerRect = sliderRef.current.getBoundingClientRect();
        let nearest = 0;
        let minDiff = Infinity;

        Array.from(sliderRef.current.children).forEach((child, idx) => {
          if (!child) return;
          const childRect = child.getBoundingClientRect();
          const diff = Math.abs(childRect.left - containerRect.left);
          if (diff < minDiff) {
            minDiff = diff;
            nearest = idx;
          }
        });

        if (nearest !== current) setCurrent(nearest);
        ticking = false;
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [current, items]);

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {/* Slider */}
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "& > *": { scrollSnapAlign: "start" },
          alignItems: "start",
          py: 1,
          ...trackSx,
        }}
      >
        {items.map((item, index) => (
          <Card
            key={index}
            sx={{
              flex: "0 0 25%",
              minWidth: { xs: "60%", sm: "28%", md: "25%",lg:"15%" },
              borderRadius: 0,
              boxShadow: "none",
              background: "none",
              textAlign: "start",
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={item.image}
              alt={item.name}
              sx={{
                width: "100%",
                height: { xs: 255, md: 255, lg: 305 },
                maxWidth: { xs: 190, sm: 180, md: 200,lg:230 },
                objectFit: "cover",
              }}
            />

            {/* Name */}
            <Typography
              variant="leadershipContentTextNewsreaderMedium"
              sx={{ mt: { md: "18px", lg: "24px" }, ...nameSx,mb:"5px" }}
            >
              {item.name}
            </Typography>

            {/* ✅ Coach Discipline/Role (caption field only) */}
            {item.caption && !showDefaultDetails && !sportsAppointmentDetails && (
              <Typography
                variant="typographyBodyInterNormal"
                sx={{ mt: "2px", color: "#555", fontWeight: 500 }}
              >
                {item.caption} Coach
              </Typography>
            )}

            {/* ✅ Default Details (ONLY if enabled) */}
            {showDefaultDetails && (
              <>
                {item.title && (
                  <Typography
                    variant="leadershipContentTextNewsreaderMedium"
                    sx={{ mt: "5px" }}
                  >
                    {item.title}
                  </Typography>
                )}

                {item.qualification && (
                  <Typography
                    variant="typographyBodyInterNormal"
                    sx={{ mt: "5px" }}
                  >
                    {item.qualification}
                  </Typography>
                )}

                {item.specialization && (
                  <Box sx={{ my: { lg: "24px", md: "18px", xs: "10px" } }}>
                    <Typography
                      variant="typographyBodyInterNormal"
                      sx={{ fontWeight: "500 !important" }}
                    >
                      Area of Specialization
                    </Typography>
                    <Typography variant="typographyBodyInterNormal">
                      {item.specialization}
                    </Typography>
                  </Box>
                )}
              </>
            )}

            {/* ✅ Custom Details (Sports Section) */}
            {sportsAppointmentDetails && !renderDetails && (
              <>
                <Typography variant="typographyBodyInterNormal">
                  {item.dept}
                </Typography>
                <Typography
                  variant="typographyBodyInterNormalSmall"
                  sx={{ mt: 0.5 }}
                >
                  {item.role}
                </Typography>
                <Typography
                  variant="typographyBodyInterNormalSmall"
                  sx={{ mt: 1.5, fontWeight: 500, color: "#1D1D1D" }}
                >
                  Program
                </Typography>
                <Typography
                  variant="typographyBodyInterNormalSmall"
                  color="text.secondary"
                >
                  {item.program}
                </Typography>
              </>
            )}
            {renderDetails ? renderDetails(item) : null}

            {/* Link */}
            {link && item?.profileLink && (
              <Box sx={{ display: "flex", gap: "24px", mt: 1 }}>
                <Box
                  component="a"
                  href={item.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    component="img"
                    src={linkIconImage}
                    alt="link"
                    sx={{ width: 24, height: 24 }}
                  />
                </Box>
              </Box>
            )}
          </Card>
        ))}
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "end", gap: 2, mt: 2 }}>
        <IconButton
          size="small"
          onClick={prevSlide}
          disabled={current === 0}
          sx={{
            border: "1px dashed #343A40",
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        <IconButton
          size="small"
          onClick={nextSlide}
          disabled={current === lastIndex}
          sx={{
            border: "1px dashed #343A40",
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}