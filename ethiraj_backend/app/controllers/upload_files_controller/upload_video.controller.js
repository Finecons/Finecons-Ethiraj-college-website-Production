// const multer = require("multer");
// const path = require("path");
// const RESPONSE = require("../../constants/response");
// const { MESSAGE } = require("../../constants/message");
// const { StatusCode } = require("../../constants/HttpStatusCode");

// // Set up storage for video files
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/videos/"); // specify the folder for storing video files
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname)); // unique name with the original file extension
//   },
// });

// // Set up multer for handling video uploads
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 200 * 1024 * 1024 }, // limit file size to 200MB
//   fileFilter: function (req, file, cb) {
//     const filetypes = /mp4|mkv|avi|mov/;
//     // const mimetype = filetypes.test(file.mimetype);
//     // const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//         // 1) Check file extension
//     const extname = filetypes.test(
//       path.extname(file.originalname).toLowerCase()
//     );

//     // 2) Check MIME type is a video
//     const mimetype = file.mimetype.startsWith("video/");
//     if (mimetype && extname) {
//       return cb(null, true);
//     } else {
//       cb("Error: Video files only!");
//     }
//   },
// }).single("video");

// // Upload Video
// exports.uploadVideo = (req, res) => {
//   upload(req, res, function (err) {
//     if (err) {
//       RESPONSE.Failure.Message = err.message;
//       return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
//     }

//     if (!req.file) {
//       RESPONSE.Success.Message = "No file uploaded!";
//       RESPONSE.Success.data = {};
//       return res.status(StatusCode.OK.code).send(RESPONSE.Success);
//     }

//     RESPONSE.Success.Message = "Video uploaded successfully";
//     RESPONSE.Success.data = { videoUrl: `uploads/videos/${req.file.filename}` };
//     res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
//   });
// };


// const multer = require("multer");
// const path = require("path");
// const RESPONSE = require("../../constants/response");
// const { StatusCode } = require("../../constants/HttpStatusCode");
// const { uploadToAzureBlob } = require("../../utils/azureBlobUpload");

// /* ---------------- MULTER CONFIG ---------------- */

// // Memory storage (Azure requirement)
// const storage = multer.memoryStorage();

// // Set up multer for handling video uploads
// const upload = multer({
//   storage,
//   limits: { fileSize: 200 * 1024 * 1024 }, // 50MB
//   fileFilter: function (req, file, cb) {
//     const filetypes = /mp4|mkv|avi|mov/;
//     // const mimetype = filetypes.test(file.mimetype);
//     // const extname = filetypes.test(
//     //   path.extname(file.originalname).toLowerCase()
//     // );

//     // 1) Check file extension
//     const extname = filetypes.test(
//       path.extname(file.originalname).toLowerCase()
//     );

//     // 2) Check MIME type is a video
//     const mimetype = file.mimetype.startsWith("video/");

//     if (mimetype && extname) {
//       return cb(null, true);
//     } else {
//       cb("Error: Video files only!");
//     }
//   },
// }).single("video");

// /* ---------------- UPLOAD VIDEO ---------------- */

// exports.uploadVideo = (req, res) => {
//   upload(req, res, async function (err) {
//     try {
//       if (err) {
//         RESPONSE.Failure.Message = err;
//         return res
//           .status(StatusCode.BAD_REQUEST.code)
//           .send(RESPONSE.Failure);
//       }

//       if (!req.file) {
//         RESPONSE.Success.Message = "No file uploaded!";
//         RESPONSE.Success.data = {};
//         return res.status(StatusCode.OK.code).send(RESPONSE.Success);
//       }

//       // Upload to Azure → videos container
//       const videoUrl = await uploadToAzureBlob(req.file, "videos");

//       RESPONSE.Success.Message = "Video uploaded successfully";
//       RESPONSE.Success.data = { videoUrl };

//       res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
//     } catch (error) {
//       console.error("Azure Video Upload Error:", error);
//       RESPONSE.Failure.Message = "Video upload failed!";
//       res
//         .status(StatusCode.SERVER_ERROR.code)
//         .send(RESPONSE.Failure);
//     }
//   });
// };



const multer = require("multer");
const path = require("path");
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const { uploadToAzureBlob } = require("../../utils/azureBlobUpload");

/* ---------------- MULTER CONFIG ---------------- */

// Memory storage (Azure requirement)
const storage = multer.memoryStorage();

// Set up multer for handling video uploads
const upload = multer({
  storage,
  limits: { fileSize: 200 * 1024 * 1024 }, // 200MB
  fileFilter: function (req, file, cb) {
    try {
      const filetypes = /mp4|mkv|avi|mov/;

      // Check file extension
      const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
      );

      // Check MIME type is a video
      const mimetype = file.mimetype.startsWith("video/");

      if (mimetype && extname) {
        return cb(null, true);
      } else {
        return cb(new Error("Error: Video files only!"));
      }
    } catch (err) {
      return cb(new Error("Error: Invalid file!"));
    }
  },
}).single("video");

/* ---------------- UPLOAD VIDEO ---------------- */

exports.uploadVideo = (req, res) => {
  upload(req, res, async function (err) {
    try {
      // Multer error (fileFilter / limits / etc.)
      if (err) {
        RESPONSE.Failure.Message = err.message || String(err);
        return res
          .status(StatusCode.BAD_REQUEST.code)
          .send(RESPONSE.Failure);
      }

      // No file sent
      if (!req.file) {
        RESPONSE.Success.Message = "No file uploaded!";
        RESPONSE.Success.data = {};
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
      }

      // Upload to Azure
      const videoUrl = await uploadToAzureBlob(req.file, "videos");

      RESPONSE.Success.Message = "Video uploaded successfully";
      RESPONSE.Success.data = { videoUrl };

      return res
        .status(StatusCode.CREATED.code)
        .send(RESPONSE.Success);

    } catch (error) {
      // Never log raw error objects (can contain huge buffers)
      console.error("Azure Video Upload Error:", error.message);

      RESPONSE.Failure.Message = "Video upload failed!";
      return res
        .status(StatusCode.SERVER_ERROR.code)
        .send(RESPONSE.Failure);
    }
  });
};
