
// // import { useState } from "react";
// // import { Box, Stack, IconButton } from "@mui/material";
// // import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// // import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// // import Patent1 from "../../../Assets/fellowships consultancy.png";
// // import Patent2 from "../../../Assets/fellowships consultancy.png";
// // import Patent3 from "../../../Assets/fellowships consultancy.png";

// // /* ---------------- Image Card ---------------- */

// // function PatentCard({ src, caption }) {
// //   return (
// //     <Box
// //       sx={{
// //         flex: "0 0 100%",
// //         height: "100%",
// //         cursor: "pointer",
// //       }}
// //     >
// //       <Box
// //         component="img"
// //         src={src}
// //         alt={caption}
// //         sx={{
// //           width: "100%",
// //           height: "100%",
// //           objectFit: "cover",
// //           borderRadius: "20px",
// //           border: "1px solid #ddd",
// //         }}
// //       />
// //     </Box>
// //   );
// // }

// // /* ---------------- Slider Component ---------------- */

// // export default function ImageSliderForHealth({images}) {
// //   const [index, setIndex] = useState(0);

 

// //   const totalItems = images.length;

// //   /* Next Slide */

// //   const handleNext = () => {
// //     setIndex((prev) => (prev + 1) % totalItems);
// //   };

// //   /* Previous Slide */

// //   const handlePrev = () => {
// //     setIndex((prev) => (prev - 1 + totalItems) % totalItems);
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         height: "100%",
// //         display: "flex",
// //         flexDirection: "column",
// //       }}
// //     >
// //       {/* Slider Container */}

// //       <Box
// //         sx={{
// //           position: "relative",
// //           overflow: "hidden",
// //           flex: 1,
// //           display: "flex",
// //           pb: "50px",
// //         }}
// //       >
// //         {/* Slider Track */}

// //         <Box
// //           sx={{
// //             display: "flex",
// //             transition: "transform 0.5s ease",
// //             transform: `translateX(-${index * 100}%)`,
// //             width: `${totalItems * 100}%`,
// //             height: "100%",
// //           }}
// //         >
// //           {images.map((src, i) => (
// //             <PatentCard key={i} src={src} caption={`Slide ${i + 1}`} />
// //           ))}
// //         </Box>

// //         {/* Navigation Buttons */}

// //         <Stack
// //           direction="row"
// //           spacing={1}
// //           sx={{
// //             position: "absolute",
// //             right: 0,
// //             bottom: 0,
// //           }}
// //         >
// //           <IconButton
// //             onClick={handlePrev}
// //             sx={{
// //               border: "1px dashed #343A40",
// //             }}
// //           >
// //             <ArrowBackIosNewIcon fontSize="small" />
// //           </IconButton>

// //           <IconButton
// //             onClick={handleNext}
// //             sx={{
// //               border: "1px dashed #343A40",
// //             }}
// //           >
// //             <ArrowForwardIosIcon fontSize="small" />
// //           </IconButton>
// //         </Stack>
// //       </Box>
// //     </Box>
// //   );
// // }
// import React, { useEffect, useRef, useState } from "react";
// import { Box, IconButton } from "@mui/material";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// const widthBySize = {
//   small: { xs: 260, sm: 280, md: 300, lg: 350 },
//   large: { xs: 280, sm: 360, md: 460, lg: 620 },
// };

// const ImageWidthSlider = ({ images = [], imageHeight = { xs: 180, md: 230 } }) => {
//   const scrollRef = useRef(null);
//   const [canPrev, setCanPrev] = useState(false);
//   const [canNext, setCanNext] = useState(images.length > 0);

//   const updateControls = () => {
//     const node = scrollRef.current;
//     if (!node) {
//       return;
//     }

//     setCanPrev(node.scrollLeft > 2);
//     setCanNext(node.scrollLeft + node.clientWidth < node.scrollWidth - 2);
//   };

//   useEffect(() => {
//     updateControls();
//   }, [images.length]);

//   const handleScroll = (direction) => {
//     const node = scrollRef.current;
//     if (!node) {
//       return;
//     }

//     const scrollAmount = node.clientWidth * 0.75;
//     node.scrollBy({
//       left: direction === "next" ? scrollAmount : -scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <Box>
//       <Box
//         ref={scrollRef}
//         onScroll={updateControls}
//         sx={{
//           display: "flex",
//           gap: 1.5,
//           overflowX: "auto",
//           scrollBehavior: "smooth",
//           pb: 1,
//           "&::-webkit-scrollbar": { display: "none" },
//           scrollbarWidth: "none",
//           msOverflowStyle: "none",
//         }}
//       >
//         {images.map((item, idx) => {
//           const sizeKey = item.size === "large" ? "large" : "small";

//           return (
//             <Box
//               key={`${item.alt || "image"}-${idx}`}
//               component="img"
//               src={item.src}
//               alt={item.alt || `slider image ${idx + 1}`}
//               sx={{
//                 flex: "0 0 auto",
//                 width: widthBySize[sizeKey],
//                 height: imageHeight,
//                 borderRadius: "6px",
//                 objectFit: "cover",
//               }}
//             />
//           );
//         })}
//       </Box>

//       <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 1 }}>
//         <IconButton
//           size="small"
//           onClick={() => handleScroll("prev")}
//           disabled={!canPrev}
//           sx={{ border: "1px dashed #343A40" }}
//         >
//           <ArrowBackIosNewIcon fontSize="small" />
//         </IconButton>
//         <IconButton
//           size="small"
//           onClick={() => handleScroll("next")}
//           disabled={!canNext}
//           sx={{ border: "1px dashed #343A40" }}
//         >
//           <ArrowForwardIosIcon fontSize="small" />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

// export default ImageWidthSlider;

import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const responsiveImageStyles = {
  xs: {
    width: "364px",
    height: "305px",
    aspectRatio: "364/305",
  },
  sm: {
    width: "390px",
    height: "327px",
    aspectRatio: "130/109",
  },
  md: {
    width: "200px",
    height: "420px",
    // aspectRatio: "15/14",
  },
  lg: {
    flex: "1 0 0",
    height: "519.224px",
    aspectRatio: "304/255",
  },
};

const ImageWidthSlider = ({ images = [] }) => {
  const scrollRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(images.length > 0);

  const updateControls = () => {
    const node = scrollRef.current;
    if (!node) {
      return;
    }

    setCanPrev(node.scrollLeft > 2);
    setCanNext(node.scrollLeft + node.clientWidth < node.scrollWidth - 2);
  };

  useEffect(() => {
    updateControls();
  }, [images.length]);

  const handleScroll = (direction) => {
    const node = scrollRef.current;
    if (!node) {
      return;
    }

    const scrollAmount = node.clientWidth * 0.75;
    node.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      <Box
        ref={scrollRef}
        onScroll={updateControls}
        sx={{
          display: "flex",
          gap: 1.5,
          overflowX: "auto",
          scrollBehavior: "smooth",
          pb: 1,
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {images.map((item, idx) => {
          return (
            <Box
              key={`${item.alt || "image"}-${idx}`}
              component="img"
              src={item.src}
              alt={item.alt || `slider image ${idx + 1}`}
              sx={{
                flex: "0 0 auto",
                borderRadius: "6px",
                objectFit: "cover",
                xs: {
                  width: responsiveImageStyles.xs.width,
                  height: responsiveImageStyles.xs.height,
                  aspectRatio: responsiveImageStyles.xs.aspectRatio,
                },
                sm: {
                  width: responsiveImageStyles.sm.width,
                  height: responsiveImageStyles.sm.height,
                  aspectRatio: responsiveImageStyles.sm.aspectRatio,
                },
                md: {
                  width: responsiveImageStyles.md.width,
                  height: responsiveImageStyles.md.height,
                  // aspectRatio: responsiveImageStyles.md.aspectRatio,
                },
                lg: {
                  flex: responsiveImageStyles.lg.flex,
                  height: responsiveImageStyles.lg.height,
                  aspectRatio: responsiveImageStyles.lg.aspectRatio,
                },
              }}
            />
          );
        })}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 1 }}>
        <IconButton
          size="small"
          onClick={() => handleScroll("prev")}
          disabled={!canPrev}
          sx={{ border: "1px dashed #343A40" }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => handleScroll("next")}
          disabled={!canNext}
          sx={{ border: "1px dashed #343A40" }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ImageWidthSlider;
