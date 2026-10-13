// import React, { useState } from "react";
// import { Box, Typography, IconButton } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// import studentUnionBanner from "../../../Assets/studentunion.jpg";
// import eventImage1 from "../../../Assets/studentUnionAbout.png";
// import eventImage2 from "../../../Assets/studentunion.jpg";
// import eventImage3 from "../../../Assets/studentUnionAbout.png";
// import eventImage4 from "../../../Assets/studentunion.jpg";

// const EventsSection = () => {
//   const [index, setIndex] = useState(0);

//   const events = [
//     {
//       title: "Student Union Inauguration",
//       description:
//         "The Ethiraj Student Union 2025-26 was officially inaugurated.",
//       image: studentUnionBanner,
//       type: "long",
//     },
//     {
//       title: "Intercollegiate Tournament",
//       description:
//         "Students actively participated in tournaments conducted by other colleges.",
//       image: eventImage1,
//       type: "portrait",
//     },
//     {
//       title: "Intramural Competitions",
//       description:
//         "Various sports and cultural competitions were conducted within campus.",
//       image: eventImage2,
//       type: "medium",
//     },
//     {
//       title: "Cultural Programs",
//       description: "Cultural celebrations and awareness events were organized.",
//       image: eventImage3,
//       type: "portrait",
//     },
//     {
//       title: "Student Engagement",
//       description: "Activities conducted to develop leadership and teamwork.",
//       image: eventImage4,
//       type: "medium",
//     },
//   ];

//   const getImageStyle = (type) => {
//     switch (type) {
//       case "long":
//         return {
//           width: {
//             lg: "1507px",
//             md: "1000px",
//             sm: "700px",
//             xs: "100%",
//           },
//           height: {
//             lg: "511px",
//             md: "340px",
//             sm: "240px",
//             xs: "200px",
//           },
//           aspectRatio: "174 / 59",
//         };

//       case "landscape":
//         return {
//           width: {
//             lg: "509px",
//             md: "360px",
//             sm: "280px",
//             xs: "100%",
//           },
//           height: {
//             lg: "637px",
//             md: "480px",
//             sm: "380px",
//             xs: "320px",
//           },
//           aspectRatio: "167 / 209",
//         };

//       case "medium":
//         return {
//           width: {
//             lg: "986px",
//             md: "700px",
//             sm: "520px",
//             xs: "100%",
//           },
//           height: {
//             lg: "637px",
//             md: "480px",
//             sm: "380px",
//             xs: "320px",
//           },
//         };

//       default:
//         return {};
//     }
//   };

//   const handleNext = () => {
//     setIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
//   };

//   const handlePrev = () => {
//     setIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
//   };

//   return (
//     <Box sx={{ mt: 8 }}>
//       {/* TITLE */}
//       <Typography variant="h4" sx={{ mb: 1 }}>
//         Events & Annual Activities
//       </Typography>

//       <Typography sx={{ mb: 4, color: "#6B3C58", fontWeight: 500 }}>
//         Organized by the Student Union
//       </Typography>

//       {/* SCROLL AREA */}
//       <Box sx={{ overflow: "hidden" }}>
//         <Box
//           sx={{
//             display: "flex",
//             gap: 3,
//             alignItems: "flex-start",
//             transition: "0.5s",
//             transform: `translateX(-${index * 260}px)`,
//           }}
//         >
//           {events.map((event, i) => {
//             const style = getImageStyle(event.type);

//             return (
//               <Box key={i} sx={{ width: style.width }}>
//                 {/* IMAGE */}
//                 <Box
//                   component="img"
//                   src={event.image}
//                   alt={event.title}
//                   sx={{
//                     ...getImageStyle(event.type),
//                     objectFit: "cover",
//                     borderRadius: "8px",
//                   }}
//                 />

//                 {/* TEXT */}
//                 <Box sx={{ mt: 1 }}>
//                   <Typography sx={{ fontWeight: 600 }}>
//                     {event.title}
//                   </Typography>

//                   <Typography
//                     sx={{
//                       fontSize: 14,
//                       color: "#555",
//                       display: "-webkit-box",
//                       WebkitLineClamp: 2,
//                       WebkitBoxOrient: "vertical",
//                       overflow: "hidden",
//                     }}
//                   >
//                     {event.description}
//                   </Typography>
//                 </Box>
//               </Box>
//             );
//           })}
//         </Box>
//       </Box>

//       {/* NAV BUTTONS */}
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 4, gap: 2 }}>
//         <IconButton onClick={handlePrev}>
//           <ArrowBackIcon />
//         </IconButton>

//         <IconButton onClick={handleNext}>
//           <ArrowForwardIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

// export default EventsSection;

import React, { useRef, useState } from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";

import eventImageLong from "../../../Assets/Student Union/studentUnionAnnualLong.png";
import eventImageLandscape1 from "../../../Assets/Student Union/studentUnionAnnualLandscape1.png";
import eventImageLandscape2 from "../../../Assets/Student Union/studentUnionAnnualLandscape2.png";
import eventImageMedium1 from "../../../Assets/Student Union/studentUnionAnnualMedium1.png";
import eventImageMedium2 from "../../../Assets/Student Union/studentUnionAnnualMedium2.png";
import eventImageMedium3 from "../../../Assets/Student Union/studentUnionAnnualMedium3.png";
import eventImageMedium4 from "../../../Assets/Student Union/studentUnionAnnualMedium4.png";
import eventImageMedium5 from "../../../Assets/Student Union/studentUnionAnnualMedium5.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const EventsSection = (
  { eventsData = [] }
) => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  const staticEvents = [
    {
      description:
        "The Ethiraj Student Union 2025–26 was officially inaugurated, marking the beginning of a new chapter of leadership, unity, and service.",
      image: eventImageLong,
      type: "longrectangle",
    },
    {
      description: "Intercollegiate Tournaments/Intramural Competitions",
      image: eventImageLandscape1,
      type: "landscape",
    },
    {
      description:
        "We created and concluded Aarambh & Maithri 2025 with the dynamic spirit of Formula’25, marking a celebration filled with energy, creativity, and cultural vibrance.",
      image: eventImageLandscape2,
      type: "square",
    },
    {
      description:
        "Teacher’s Day: On this special day, we express our gratitude to all educators for their dedication, wisdom, and unwavering support. ",
      image: eventImageMedium1,
      type: "mediumrectangle",
    },
    {
      description: "Atlantis 25’ - National Level Quiz Championship",
      image: eventImageMedium2,
      type: "mediumrectangle",
    },

    {
      description:
        "The Ethiraj Students’ Union proudly presents Youth Conclave 2025, a National Level Conference that celebrates youth leadership, digital innovation, and empowered citizenship in today’s rapidly evolving digital era.",
      image: eventImageMedium3,
      type: "mediumrectangle",
    },
    {
      description:
        "Ethnic Day ‘25 was celebrated with vibrant cultural spirit under the theme “Blooming in Ethiraj.”",
      image: eventImageMedium4,
      type: "mediumrectangle",
    },
    {
      description:
        "The Film Appreciation and Photography Club, along with the Arts Club, presents its big blockbuster production, “Rhapsody’25”.",
      image: eventImageMedium5,
      type: "mediumrectangle",
    },
  ];

  const dynamicEvents = Array.isArray(eventsData)
    ? eventsData
        .filter((item) => item?.image_url)
        .map((item) => ({
          description: item?.image_description || "",
          image: item?.image_url,
          type: item?.image_type || "mediumrectangle",
          title: item?.title || "",
        }))
    : [];

  const events = dynamicEvents.length > 0 ? dynamicEvents : staticEvents;

  const getStyle = (type) => {
    switch (type) {
      case "longrectangle":
        return {
          width: {
            xs: "373px",
            sm: "704px",
            md: "860px",
            lg: "1061px",
          },
          height: {
            xs: "207px",
            sm: "311px",
            md: "340px",
            lg: "360px",
          },
          // aspectRatio: "174 / 59",
        };

      case "portrait":
        return {
          width: {
            xs: "240px",
            sm: "320px",
            md: "400px",
            lg: "494px",
          },
          height: {
            xs: "300px",
            sm: "380px",
            md: "480px",
            lg: "618px",
          },
          // aspectRatio: "167 / 209",
        };

         case "smallportrait":
        return {
          width: {
            xs: "240px",
            sm: "320px",
            md: "400px",
            lg: "494px",
          },
          height: {
            xs: "260px",
            sm: "340px",
            md: "400px",
            lg: "524px",
          },
          // aspectRatio: "167 / 209",
        };

      case "landscape":
        return {
          width: {
            xs: "300px",
            sm: "420px",
            md: "500px",
            lg: "551px",
          },
          height: {
            xs: "220px",
            sm: "280px",
            md: "320px",
            lg: "365px",
          },
        };

      default:
        return {};
    }
  };

  const handleNext = () => {
    if (index < events.length - 1) {
      const newIndex = index + 1;
      const scrollAmount = sliderRef.current.clientWidth * 0.8;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
      setIndex(newIndex);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      const newIndex = index - 1;
      const scrollAmount = sliderRef.current.clientWidth * 0.8;
      sliderRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
      setIndex(newIndex);
    }
  };

  return (
    <Box sx={{ mt: 8 }}>
      
      {/* Slider */}
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {events.map((event, i) => {
          const eventStyle = getStyle(event.type);
          return (
            <Box
              key={i}
              sx={{
                flexShrink: 0,
                width: eventStyle.width,
              }}
            >
              <Box
                component="img"
                src={event.image}
                sx={{
                  ...eventStyle,
                  objectFit: "cover",
                  // borderRadius: "12px",
                }}
              />

              <Box sx={{ mt: 1 }}>
                {event.title ? (
                  <Typography sx={{ fontWeight: 600 }}>{event.title}</Typography>
                ) : null}

                <Typography
                variant="typographyBodyInterNormal"
                  sx={{
                    fontSize: 14,
                    color: "#555",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {event.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "end", mt: 4, gap: 2 }}>
        <Stack
          direction="row"
          spacing={1}
        
        >
          <IconButton
            onClick={handlePrev}
            disabled={index === 0}
            sx={{ border: "1px dashed #343A40" }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <IconButton
            onClick={handleNext}
            disabled={index === events.length - 1}
            sx={{ border: "1px dashed #343A40" }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default EventsSection;
