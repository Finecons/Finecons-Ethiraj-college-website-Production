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

// // export default function ImageSliderForHealth() {
// //   const [index, setIndex] = useState(0);

// //   const patentItems = [
// //     {
// //       src: Patent1,
// //       caption: "Patent for co-polyester and synthesis thereof",
// //     },
// //     {
// //       src: Patent2,
// //       caption:
// //         "Patent for a fortified eggless cake premix composition and a process for preparation thereof",
// //     },
// //     {
// //       src: Patent3,
// //       caption: "Carbon Based Smart Nano Material",
// //     },
// //   ];

// //   const totalItems = patentItems.length;

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
// //           {patentItems.map((item, i) => (
// //             <PatentCard key={i} src={item.src} caption={item.caption} />
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
// //             sx={{ border: "1px dashed #343A40" }}
// //           >
// //             <ArrowBackIosNewIcon fontSize="small" />
// //           </IconButton>

// //           <IconButton
// //             onClick={handleNext}
// //             sx={{ border: "1px dashed #343A40" }}
// //           >
// //             <ArrowForwardIosIcon fontSize="small" />
// //           </IconButton>
// //         </Stack>
// //       </Box>
// //     </Box>
// //   );
// // }
// import { useState } from "react";
// import { Box, Stack, IconButton } from "@mui/material";

// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// import Patent1 from "../../../Assets/fellowships consultancy.png";
// import Patent2 from "../../../Assets/fellowships consultancy.png";
// import Patent3 from "../../../Assets/fellowships consultancy.png";

// /* ---------------- Image Card ---------------- */

// function PatentCard({ src, caption }) {
//   return (
//     <Box
//       sx={{
//         flex: "0 0 100%",
//         height: "100%",
//         cursor: "pointer",
//       }}
//     >
//       <Box
//         component="img"
//         src={src}
//         alt={caption}
//         sx={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           borderRadius: "20px",
//           border: "1px solid #ddd",
//         }}
//       />
//     </Box>
//   );
// }

// /* ---------------- Slider Component ---------------- */

// export default function ImageSliderForHealth() {
//   const [index, setIndex] = useState(0);

//   const patentItems = [
//     {
//       src: Patent1,
//       caption: "Patent for co-polyester and synthesis thereof",
//     },
//     {
//       src: Patent2,
//       caption:
//         "Patent for a fortified eggless cake premix composition and a process for preparation thereof",
//     },
//     {
//       src: Patent3,
//       caption: "Carbon Based Smart Nano Material",
//     },
//   ];

//   const totalItems = patentItems.length;

//   /* Next Slide */

//   const handleNext = () => {
//     setIndex((prev) => (prev + 1) % totalItems);
//   };

//   /* Previous Slide */

//   const handlePrev = () => {
//     setIndex((prev) => (prev - 1 + totalItems) % totalItems);
//   };

//   return (
//     <Box
//       sx={{
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       {/* Slider Container */}

//       <Box
//         sx={{
//           position: "relative",
//           overflow: "hidden",
//           flex: 1,
//           display: "flex",
//           pb: "50px",
//         }}
//       >
//         {/* Slider Track */}

//         <Box
//           sx={{
//             display: "flex",
//             transition: "transform 0.5s ease",
//             transform: `translateX(-${index * 100}%)`,
//             width: `${totalItems * 100}%`,
//             height: "100%",
//           }}
//         >
//           {patentItems.map((item, i) => (
//             <PatentCard key={i} src={item.src} caption={item.caption} />
//           ))}
//         </Box>

//         {/* Navigation Buttons */}

//         <Stack
//           direction="row"
//           spacing={1}
//           sx={{
//             position: "absolute",
//             right: 0,
//             bottom: 0,
//           }}
//         >
//           <IconButton
//             onClick={handlePrev}
//             sx={{ border: "1px dashed #343A40" }}
//           >
//             <ArrowBackIosNewIcon fontSize="small" />
//           </IconButton>

//           <IconButton
//             onClick={handleNext}
//             sx={{ border: "1px dashed #343A40" }}
//           >
//             <ArrowForwardIosIcon fontSize="small" />
//           </IconButton>
//         </Stack>
//       </Box>
//     </Box>
//   );
// }
import { useState } from "react";
import { Box, Stack, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Patent1 from "../../../Assets/fellowships consultancy.png";
import Patent2 from "../../../Assets/fellowships consultancy.png";
import Patent3 from "../../../Assets/fellowships consultancy.png";

/* ---------------- Image Card ---------------- */

function PatentCard({ src, caption }) {
  return (
    <Box
      sx={{
        flex: "0 0 100%",
        height: "100%",
        cursor: "pointer",
      }}
    >
      <Box
        component="img"
        src={src}
        alt={caption}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "20px",
          border: "1px solid #ddd",
        }}
      />
    </Box>
  );
}

/* ---------------- Slider Component ---------------- */

export default function ImageSliderForHealth() {
  const [index, setIndex] = useState(0);

  const patentItems = [
    {
      src: Patent1,
      caption: "Patent for co-polyester and synthesis thereof",
    },
    {
      src: Patent2,
      caption:
        "Patent for a fortified eggless cake premix composition and a process for preparation thereof",
    },
    {
      src: Patent3,
      caption: "Carbon Based Smart Nano Material",
    },
  ];

  const totalItems = patentItems.length;

  /* Next Slide */

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % totalItems);
  };

  /* Previous Slide */

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Slider Container */}

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          flex: 1,
          display: "flex",
          pb: "50px",
        }}
      >
        {/* Slider Track */}

        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${index * 100}%)`,
            width: `${totalItems * 100}%`,
            height: "100%",
          }}
        >
          {patentItems.map((item, i) => (
            <PatentCard key={i} src={item.src} caption={item.caption} />
          ))}
        </Box>

        {/* Navigation Buttons */}

        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: "absolute",
            right: 0,
            bottom: 0,
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              border: "1px dashed #343A40",
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              border: "1px dashed #343A40",
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}