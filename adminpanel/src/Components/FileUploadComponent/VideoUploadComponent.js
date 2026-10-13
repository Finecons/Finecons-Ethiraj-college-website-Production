// import React, { useState } from "react";
// import {
//   Grid,
//   Button,
//   Box,
//   Typography,
//   Paper,
//   LinearProgress,
//   IconButton,
//   Dialog,
//   DialogContent,
//   DialogTitle,
// } from "@mui/material";
// import { FiUpload } from "react-icons/fi";
// import { RiDeleteBin2Line } from "react-icons/ri";
// import { FaEye } from "react-icons/fa6";
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import { useDispatch } from "react-redux";
// import actions from "../../ReduxStore/actions";
// import { adminUrl } from "../../constants";

// const VideoUploadComponent = ({
//   name,
//   onVideoUpload,
//   uploadedVideos,
//   setUploadedVideos,
// }) => {
//   const dispatch = useDispatch();
//   const [openPreview, setOpenPreview] = useState(false);
//   const [previewVideo, setPreviewVideo] = useState(null);

//   const videosArray = Array.isArray(uploadedVideos) ? uploadedVideos : [];

//   const handleVideoUpload = async (event) => {
//     const files = event.target.files;
//     if (files.length > 0) {
//       const formData = new FormData();
//       for (const file of files) {
//         formData.append("video", file);
//       }

//       console.log("jndjddnfsjf");
      

//       const data1 = {
//         data: formData,
//         method: "post",
//         apiName: "uploadVideo", // 👈 adjust to your API endpoint
//       };

//       try {
//         const uploadResponse = await dispatch(actions.UPLOADPDFANDIMAGE(data1));

//         if (
//           uploadResponse.payload &&
//           uploadResponse.payload.data &&
//           uploadResponse.payload.data.files
//         ) {
//           const newVideosData = uploadResponse.payload.data.files.map(
//             (fileInfo) => ({
//               fileUrl: fileInfo.fileUrl,
//               name: fileInfo.fileName,
//               progress: 100,
//             })
//           );

//           const updatedVideos = [...videosArray, ...newVideosData];
//           setUploadedVideos(updatedVideos);
//           onVideoUpload(updatedVideos.map((v) => v.fileUrl));
//         }
//       } catch (error) {
//         console.error("Video upload failed:", error);
//       }
//     }
//   };

//   const handleVideoDelete = (indexToDelete) => {
//     const updatedVideos = videosArray.filter(
//       (_, index) => index !== indexToDelete
//     );
//     setUploadedVideos(updatedVideos);
//     onVideoUpload(updatedVideos.map((v) => v.fileUrl));
//   };

//   const handleVideoView = (video) => {
//     setPreviewVideo(video);
//     setOpenPreview(true);
//   };

//   const handleClosePreview = () => {
//     setOpenPreview(false);
//     setPreviewVideo(null);
//   };

//   return (
//     <Grid>
//       <label
//         htmlFor={`video-upload-${name}`}
//         style={{ fontSize: "16px", paddingBottom: "10px" }}
//       >
//         Upload Videos{" "}
//         <span style={{ fontSize: "11px", color: "#7A7A7A" }}>
//           (Files supported: .mp4, .mov, .avi)
//         </span>
//       </label>
//       <input
//         accept="video/mp4,video/mov,video/avi"
//         style={{ display: "none" }}
//         id={`video-upload-${name}`}
//         type="file"
//         name={name}
//         multiple
//         onChange={handleVideoUpload}
//       />
//       <label htmlFor={`video-upload-${name}`} style={{ marginTop: "10px" }}>
//         <Button
//           component="span"
//           startIcon={<FiUpload style={{ fontSize: "14px" }} />}
//           sx={{
//             width: "100%",
//             color: "white",
//             background: "#252525",
//             borderRadius: "5px",
//             fontSize: "14px",
//             textTransform: "none",
//           }}
//         >
//           Browse
//         </Button>
//       </label>

//       {videosArray.length > 0 && (
//         <Grid item xs={12} mt={2}>
//           {videosArray.map((video, index) => (
//             <Paper
//               key={index}
//               elevation={3}
//               style={{
//                 padding: "5px 10px",
//                 background: "#F7F7F7",
//                 border: "none",
//                 boxShadow: "none",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 marginBottom: "10px",
//               }}
//             >
//               <Box sx={{ flexGrow: 1 }}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Typography
//                     variant="body1"
//                     sx={{
//                       fontSize: "12px",
//                       whiteSpace: "nowrap",
//                       overflow: "hidden",
//                       textOverflow: "ellipsis",
//                     }}
//                   >
//                     {video.name}
//                   </Typography>
//                   <Box>
//                     <IconButton onClick={() => handleVideoView(video)} size="small">
//                       <FaEye style={{ fontSize: "14px" }} />
//                     </IconButton>
//                     <IconButton onClick={() => handleVideoDelete(index)} size="small">
//                       <RiDeleteBin2Line style={{ fontSize: "14px" }} />
//                     </IconButton>
//                   </Box>
//                 </Box>
//                 <LinearProgress
//                   variant="determinate"
//                   value={video.progress}
//                   sx={{
//                     height: "6px",
//                     borderRadius: "10px",
//                     backgroundColor: "lightgray",
//                     "& .MuiLinearProgress-bar": {
//                       backgroundColor:
//                         video.progress === 100 ? "#1FC45B" : "red",
//                     },
//                   }}
//                 />
//                 <Box display="flex" justifyContent="end">
//                   <Typography
//                     variant="body2"
//                     fontSize="11px"
//                     color={video.progress === 100 ? "green" : "red"}
//                   >
//                     {video.progress === 100
//                       ? "Upload Successful"
//                       : "Uploading..."}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Paper>
//           ))}
//         </Grid>
//       )}

//       <Dialog open={openPreview} onClose={handleClosePreview} maxWidth="md" fullWidth>
//         <DialogTitle sx={{ m: 0, p: 2 }}>
//           Preview
//           <IconButton
//             aria-label="close"
//             onClick={handleClosePreview}
//             sx={{ position: "absolute", right: 8, top: 8 }}
//           >
//             <IoMdCloseCircleOutline />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent dividers>
//           {previewVideo?.fileUrl && (
//             <video
//               controls
//               style={{ width: "100%", borderRadius: "8px" }}
//               src={`${adminUrl}${previewVideo.fileUrl}`}
//             />
//           )}
//         </DialogContent>
//       </Dialog>
//     </Grid>
//   );
// };

// export default VideoUploadComponent;


import React, { useState } from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
  Paper,
  LinearProgress,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FiUpload } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaEye } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import actions from "../../ReduxStore/actions";
import { adminUrl } from "../../constants";

const VideoUploadComponent = ({
  name,
  onVideoUpload,
  uploadedVideos,
  setUploadedVideos,
}) => {
  const dispatch = useDispatch();
  const [openPreview, setOpenPreview] = useState(false);
  const [previewVideo, setPreviewVideo] = useState(null);

  const videosArray = Array.isArray(uploadedVideos) ? uploadedVideos : [];

  // ✅ Handle video upload
  const handleVideoUpload = async (event) => {
    const files = event.target.files;
    if (!files.length) return;

    // ✅ Show instant local previews
    const localPreviews = Array.from(files).map((file) => ({
      fileUrl: URL.createObjectURL(file),
      name: file.name,
      progress: 50,
      isLocal: true,
    }));

    const updatedList = [...videosArray, ...localPreviews];
    setUploadedVideos(updatedList);

    // ✅ Prepare FormData
    const formData = new FormData();
    for (const file of files) {
      formData.append("video", file);
    }

    const data1 = {
      data: formData,
      method: "post",
      apiName: "uploadVideo", // 👈 your backend route
    };

    try {
      const uploadResponse = await dispatch(actions.UPLOADPDFANDIMAGE(data1));

      if (
        uploadResponse?.payload?.data &&
        uploadResponse.payload.data.videoUrl
      ) {
        const newVideoData = {
          fileUrl: uploadResponse.payload.data.videoUrl,
          name: files[0].name,
          progress: 100,
          isLocal: false,
        };

        const finalList = [...videosArray, newVideoData];
        setUploadedVideos(finalList);
        onVideoUpload(finalList.map((v) => v.fileUrl));
      } else {
        console.error("Unexpected upload response:", uploadResponse);
      }
    } catch (error) {
      console.error("Video upload failed:", error);
    }
  };

  // ✅ Handle delete
  const handleVideoDelete = (indexToDelete) => {
    const updatedVideos = videosArray.filter(
      (_, index) => index !== indexToDelete
    );
    setUploadedVideos(updatedVideos);
    onVideoUpload(updatedVideos.map((v) => v.fileUrl));
  };

  // ✅ Handle preview
  const handleVideoView = (video) => {
    setPreviewVideo(video);
    setOpenPreview(true);
  };
  const handleClosePreview = () => {
    setOpenPreview(false);
    setPreviewVideo(null);
  };

  return (
    <Grid>
      <label
        htmlFor={`video-upload-${name}`}
        style={{ fontSize: "16px", paddingBottom: "10px" }}
      >
        Upload Videos{" "}
        <span style={{ fontSize: "11px", color: "#7A7A7A" }}>
          (Files supported: .mp4, .mov, .avi)
        </span>
      </label>

      <input
        accept="video/mp4,video/mov,video/avi,video/quicktime,video/x-msvideo,.mp4,.mov,.avi"
        style={{ display: "none" }}
        id={`video-upload-${name}`}
        type="file"
        name={name}
        multiple
        onChange={handleVideoUpload}
      />

      <label htmlFor={`video-upload-${name}`} style={{ marginTop: "10px" }}>
        <Button
          component="span"
          startIcon={<FiUpload style={{ fontSize: "14px" }} />}
          sx={{
            width: "100%",
            color: "white",
            background: "#252525",
            borderRadius: "5px",
            fontSize: "14px",
            textTransform: "none",
            "&:hover": { background: "#000" },
          }}
        >
          Browse
        </Button>
      </label>

      {/* Uploaded videos list */}
      {videosArray.length > 0 && (
        <Grid item xs={12} mt={2}>
          {videosArray.map((video, index) => (
            <Paper
              key={index}
              elevation={3}
              style={{
                padding: "5px 10px",
                background: "#F7F7F7",
                border: "none",
                boxShadow: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "12px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {video.name}
                  </Typography>

                  <Box>
                    <IconButton
                      onClick={() => handleVideoView(video)}
                      size="small"
                    >
                      <FaEye style={{ fontSize: "14px" }} />
                    </IconButton>
                    <IconButton
                      onClick={() => handleVideoDelete(index)}
                      size="small"
                    >
                      <RiDeleteBin2Line style={{ fontSize: "14px" }} />
                    </IconButton>
                  </Box>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={video.progress}
                  sx={{
                    height: "6px",
                    borderRadius: "10px",
                    backgroundColor: "lightgray",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor:
                        video.progress === 100 ? "#1FC45B" : "#f44336",
                    },
                  }}
                />
                <Box display="flex" justifyContent="end">
                  <Typography
                    variant="body2"
                    fontSize="11px"
                    color={video.progress === 100 ? "green" : "red"}
                  >
                    {video.progress === 100
                      ? "Upload Successful"
                      : "Uploading..."}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </Grid>
      )}

      {/* Preview dialog */}
      <Dialog
        open={openPreview}
        onClose={handleClosePreview}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Preview
          <IconButton
            aria-label="close"
            onClick={handleClosePreview}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <IoMdCloseCircleOutline />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          {previewVideo?.fileUrl ? (
            <video
              controls
              style={{ width: "100%", borderRadius: "8px" }}
              src={
                previewVideo.fileUrl.startsWith("http")
                  ? previewVideo.fileUrl
                  : `${adminUrl}${previewVideo.fileUrl}`
              }
            />
          ) : (
            <Typography>No video selected for preview.</Typography>
          )}
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default VideoUploadComponent;
