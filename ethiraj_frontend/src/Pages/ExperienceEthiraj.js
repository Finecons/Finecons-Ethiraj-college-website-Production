// import React, { useRef, useState } from "react";
// import { Box, Grid, Typography, IconButton } from "@mui/material";
// import PlayCircleIcon from "@mui/icons-material/PlayCircle";
// import testvideo from "../Assets/sliderrr.mp4";
// import thumimg from "../Assets/campus-hostel.png";

// const ExperienceEthiraj = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlay = () => {
//     if (videoRef.current) {
//       videoRef.current
//         .play()
//         .then(() => setIsPlaying(true))
//         .catch((err) => console.error("Video play failed:", err));
//     }
//   };

//   // 🔹 Reset when video ends
//   const handleEnded = () => {
//     setIsPlaying(false);
//     if (videoRef.current) {
//       videoRef.current.load(); // reloads poster thumbnail
//     }
//   };

//   return (
//     <Box
//       sx={{
//         // flexGrow: 1,
//         // background: "linear-gradient(to right, #f9f4ff, #f3f2f9)",
//         p: 4,
//       }}
//     >
//       <Grid container spacing={4}>
//         {/* Left Section */}
//         <Grid
//           item
//           size={{ xs: 12, sm: 12, md: 4, lg: 5, xl: 6 }}
//           alignItems="flex-start" justifyContent="flex-start"
//         >
//           <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 2,display:{md:"block",xs:"none"}}}>
//             Experiencing <br />

//             <span
//             //   variant="headingTextNewsreaderMedium"
//               sx={{ marginLeft: 120, display: "inline-block" }}
//             >
//               Ethiraj
//             </span>
//           </Typography>
//           <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 2,display:{md:"none",xs:"block"} }}>
//             Experiencing <br />
//             <Typography
//               variant="headingTextNewsreaderMedium"
//               sx={{ marginLeft: { md: 120 }, display: "inline-block" }}
//             >
//               Ethiraj
//             </Typography>

//           </Typography>
//         </Grid>

//         {/* Right Section (Video) */}
//         <Grid item size={{ xs: 12, sm: 12, md: 8, lg: 5, xl: 6 }} sx={{pt:2}}>
//           <Typography
//             variant="bodyTextInterRegular"
//             color="text.secondary"
//             sx={{ fontSize: { xs: "14px", sm: "24px", md: "16px",lg:"24px" } }}
//           >
//             Hear directly from our students and alumni what it is like to attend
//             the college. Everything between education, opportunities,
//             friendships and more...
//           </Typography>
//           <Box
//             sx={{
//               position: "relative",
//               borderRadius: 2,
//               overflow: "hidden",
//               boxShadow: 3,
//               maxWidth: "100%",
//               mt: 4,
//             }}
//           >
//             <video
//               ref={videoRef}
//               width="100%"
//               poster={thumimg}
//               muted
//               playsInline
//               controls={isPlaying}
//               onEnded={handleEnded} // 🔑 reset when finished
//             >
//               <source src={testvideo} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>

//             {/* Play Button Overlay */}
//             <IconButton
//               onClick={handlePlay}
//               sx={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 fontSize: 80,
//                 color: "white",
//                 visibility: isPlaying ? "hidden" : "visible",
//               }}
//             >
//               <PlayCircleIcon sx={{ fontSize: 100 }} />
//             </IconButton>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default ExperienceEthiraj;

import React, { useRef, useState } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import testvideo from "../Assets/experienceethirajvideo.mov";
import thumimg from "../Assets/thumbnailphoto.png";
import { adminUrl } from "../constants";
// import testvideo from "../Assets/Avatar_Fire.mp4";

const ExperienceEthiraj = ({ experienceEthirajDatas }) => {
  console.log(experienceEthirajDatas, "experienceEthirajDatas");


  console.log(`${experienceEthirajDatas[0]?.additional_data?.video[0]}`, "experienceEthirajDatas");


  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Video play failed:", err));
    }
  };

  // 🔹 Reset when video ends
  const handleEnded = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.load(); // reloads poster thumbnail
    }
  };

  // const video =
  //   experienceEthirajDatas[0]?.additional_data?.video.length > 0
  //     ? experienceEthirajDatas[0]?.additional_data[0]?.video
  //     : testvideo;

  // const video =
  //   experienceEthirajDatas[0]?.additional_data?.video?.[0]
  //     ? `${adminUrl}${experienceEthirajDatas[0].additional_data.video[0]}`
  //     : testvideo;

  // console.log(video, "videovideo");


  const video = React.useMemo(() => {
    const video =
      experienceEthirajDatas?.[0]?.additional_data?.video?.[0];

    // return video ? `${video}` : testvideo;
    return testvideo;

  }, [experienceEthirajDatas]);


  const thumbnail = React.useMemo(() => {
    const thumbnail =
      experienceEthirajDatas?.[0]?.additional_data?.thumbnail;

    return thumbnail ? `${thumbnail}` : thumimg;
  }, [experienceEthirajDatas]);

  console.log(video, "videovideo");
  console.log(thumbnail, "thumbnail");



  return (
    <Box
      sx={{
        // flexGrow: 1,
        // background: "linear-gradient(to right, #f9f4ff, #f3f2f9)",
        py: 4,
        px: { xs: 2, sm: 3, md: "74px", lg: "94px" },
      }}
    >
      <Grid
        container
      // spacing={4}
      >
        {/* Left Section */}
        <Grid
          item
          size={{ xs: 12, sm: 12, md: 4, lg: 5, xl: 6 }}
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{ mb: 2, display: { md: "block", xs: "none" } }}
          >
            Experiencing <br />
            <span
              //   variant="headingTextNewsreaderMedium"
              sx={{ marginLeft: 120, display: "inline-block" }}
            >
              Ethiraj
            </span>
          </Typography>
          <Typography
            variant="headingTextNewsreaderMedium"
            sx={{ mb: 2, display: { md: "none", xs: "block" } }}
          >
            Experiencing<br />
            <Typography
              variant="headingTextNewsreaderMedium"
              sx={{ marginLeft: { md: 120 }, display: "inline-block" }}
            >
              Ethiraj
            </Typography>
          </Typography>
        </Grid>

        {/* Right Section (Video) */}
        <Grid
          item
          size={{ xs: 12, sm: 12, md: 8, lg: 5, xl: 6 }}
          sx={{ pt: 2 }}
        >
          <Typography
            variant="bodyTextInterRegular"
            color="text.secondary"
            sx={{
              fontSize: { xs: "16px", sm: "20px", md: "18px", lg: "24px" },
              lineHeight: { xs: "24px", sm: "28px", md: "24px", lg: "32px" },
            }}
          >
            {experienceEthirajDatas[0]?.content
              ? experienceEthirajDatas[0]?.content
              : "Hear directly from our students and alumni what it is like to attend the college. Everything between education, opportunities,friendships and more..."}
          </Typography>
          <Box
            sx={{
              position: "relative",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              maxWidth: "100%",
              mt: 4,
              aspectRatio: "16/9", // ✅ Maintain same ratio for video & poster
              backgroundColor: "#000", // avoids white background flash
            }}
          >
            <video
              key={video}          // 🔑 forces reload when src changes
              ref={videoRef}
              width="100%"
              poster={thumbnail}
              muted
              playsInline
              controls={isPlaying}
              onEnded={handleEnded} // 🔑 reset when finished
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // ✅ ensures video fills container
              }}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay */}
            <IconButton
              onClick={handlePlay}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: 80,
                color: "white",
                visibility: isPlaying ? "hidden" : "visible",
              }}
            >
              <PlayCircleIcon sx={{ fontSize: 100 }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperienceEthiraj;
