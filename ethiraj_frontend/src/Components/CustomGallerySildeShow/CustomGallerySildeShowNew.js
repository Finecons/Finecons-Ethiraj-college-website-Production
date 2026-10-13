
// // // pages/gallery.js
// // import React from "react";
// // import Box from "@mui/material/Box";
// // import Container from "@mui/material/Container";
// // import Typography from "@mui/material/Typography";

// // export default function CustomGallerySildeShow({ images }) {
  
// //   console.log(images,"images")
// //   // Duplicate list for infinite scroll
// //   const getDynamicStyle = (img) => ({
// //     width: img.isVertical ? 300 : 400,
// //     height: img.isVertical ? 400 : 300,
// //     borderRadius: 5,
// //     opacity: 1,
// //   });
// //   const galleryImages = images?.map((data, index) => {
// //     const isVertical = index % 2 !== 0; // odd index = vertical
// //     const src = data?.img;

// //     return {
// //       src,
// //       isVertical,
// //       style: getDynamicStyle({ isVertical }),
// //     };
// //   });

// //   const imagesLoop = [...galleryImages, ...galleryImages];

// //   console.log(imagesLoop,"imagesLoop")

// //   return (
// //     <Box
// //       sx={{
// //         // py: { xs: 6, md: 8 },
// //         // px: { xs: 2, sm: 3, md: "74px", lg: "94px" },

// //         //  background: "linear-gradient(#fff,#f9f9f9)"
// //         background: "none",
// //       }}
// //     >
// //       <Box>
        

// //         {/* Marquee container */}
// //         <Box
// //           sx={{
// //             position: "relative",
// //             overflow: "hidden",
// //             maskImage: {
// //               xs: "linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)",
// //             },
// //             WebkitMaskImage: {
// //               xs: "linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)",
// //             },
// //           }}
// //         >
// //           <Box
// //             className="marquee-track"
// //             sx={{
// //               display: "flex",
// //               width: "max-content",
// //               gap: "30px",
// //               alignItems: "center",
// //               animation: "scroll-left var(--speed, 35s) linear infinite",
// //               "&:hover": { animationPlayState: "paused" },
// //             }}
// //           >
// //             {imagesLoop?.map((img, i) => (
// //               <Box
// //                 key={i}
// //                 component="img"
// //                 src={img.src || img?.img}
// //                 alt={`gallery-${i}`}
// //                 sx={{
// //                   ...img.style,
// //                   objectFit: "cover",
// //                   flexShrink: 0,
// //                   boxShadow: 2,
// //                 }}
// //               />
// //             ))}
// //           </Box>
// //         </Box>
// //       </Box>

// //       {/* keyframes */}
// //       <style jsx global>{`
// //         @keyframes scroll-left {
// //           from {
// //             transform: translate3d(0, 0, 0);
// //           }
// //           to {
// //             transform: translate3d(-50%, 0, 0);
// //           }
// //         }
// //       `}</style>
// //     </Box>
// //   );
// // }

// // components/CustomGallerySildeShowNew.js

// import React from "react";
// import Box from "@mui/material/Box";

// export default function CustomGallerySildeShowNew({ images = [] }) {
//   console.log(images, "images");

//   // Dynamic image size
//   const getDynamicStyle = (img) => ({
//     width: img.isVertical ? 300 : 400,
//     height: img.isVertical ? 400 : 300,
//     borderRadius: "20px",
//     opacity: 1,
//   });

//   // Prepare gallery images
//   const galleryImages = images.map((data, index) => {
//     const isVertical = index % 2 !== 0;

//     return {
//       src: data?.img || "",
//       isVertical,
//       style: getDynamicStyle({ isVertical }),
//     };
//   });

//   // Duplicate images for infinite marquee effect
//   const imagesLoop = [...galleryImages, ...galleryImages];

//   console.log(imagesLoop, "imagesLoop");

//   // If no images
//   if (!imagesLoop.length) {
//     return null;
//   }

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         background: "none",
//         overflow: "hidden",
//       }}
//     >
//           {imagesLoop.map((img, index) => (
//             <Box
//               key={index}
//               component="img"
//               src={img.src}  
//               alt={`gallery-${index}`}
//               loading="lazy"
//               />
//           ))}              
//       {/* Marquee Wrapper */}
//       <Box
//         sx={{
//           position: "relative",
//           overflow: "hidden",

//           maskImage:
//             "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",

//           WebkitMaskImage:
//             "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
//         }}
//       >
//         {/* Moving Track */}
//         <Box
//           className="marquee-track"
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: "30px",

//             width: "max-content",
//             minWidth: "200%",

//             animation: "scroll-left 35s linear infinite",

//             "&:hover": {
//               animationPlayState: "paused",
//             },
//           }}
//         >
//           <h1>hello</h1>
//           {imagesLoop.map((img, index) => (
//             <Box
//               key={index}
//               component="img"
//               src={img.src}
//               alt={`gallery-${index}`}
//               loading="lazy"
//               sx={{
//                 ...img.style,

//                 objectFit: "cover",
//                 flexShrink: 0,

//                 boxShadow: "0 8px 20px rgba(0,0,0,0.15)",

//                 transition: "transform 0.3s ease",

//                 "&:hover": {
//                   transform: "scale(1.03)",
//                 },
//               }}
//             />
//           ))}
//         </Box>
//       </Box>

//       {/* Animation */}
//       <style jsx global>{`
//         @keyframes scroll-left {
//           0% {
//             transform: translateX(0);
//           }

//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </Box>
//   );
// }
import React from "react";
import Box from "@mui/material/Box";

export default function CustomGallerySildeShowNew({ images = [] }) {

  const getDynamicStyle = (img) => ({
    width: img.isVertical ? 300 : 400,
    height: img.isVertical ? 400 : 300,
    borderRadius: "20px",
    opacity: 1,
  });

  const galleryImages = images.map((data, index) => {
    const isVertical = index % 2 !== 0;

    return {
      src: data?.img || "",
      isVertical,
      style: getDynamicStyle({ isVertical }),
    };
  });

  const imagesLoop = [...galleryImages, ...galleryImages];

  if (!imagesLoop.length) return null;

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Marquee Wrapper */}
      <Box
        sx={{
          overflow: "hidden",
          position: "relative",

          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",

          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        {/* Moving Track */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            width: "max-content",

            animation: "scroll-left 35s linear infinite",

            "&:hover": {
              animationPlayState: "paused",
            },
          }}
        >
          <h1
            style={{
              color: "red",
              minWidth: "200px",
            }}
          >
            hello
          </h1>

          {imagesLoop.map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img.src}
              alt={`gallery-${index}`}
              loading="lazy"
              sx={{
                ...img.style,
                objectFit: "cover",
                flexShrink: 0,

                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",

                transition: "transform 0.3s ease",

                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      <style jsx global>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
}