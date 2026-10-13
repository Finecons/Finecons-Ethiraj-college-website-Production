// const multer = require("multer");
// const path = require("path");
// const RESPONSE = require("../../constants/response");
// const { MESSAGE } = require("../../constants/message");
// const { StatusCode } = require("../../constants/HttpStatusCode");

// // Multer storage config
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     if (file.mimetype.includes("pdf")) {
//       cb(null, "uploads/pdfs/");
//     } else if (file.mimetype.startsWith("video/")) {
//       cb(null, "uploads/videos/");
//     } else if (
//       file.mimetype.startsWith("image/") &&
//       /jpeg|jpg|png|gif|svg/.test(path.extname(file.originalname).toLowerCase())
//     ) {
//       cb(null, "uploads/images/");
//     } else {
//       cb("Error: Unsupported file type!", false);
//     }
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
//   },
// });

// // File filter to validate allowed types
// function checkFileType(file, cb) {
//   const filetypes = /jpeg|jpg|png|gif|svg|pdf|mp4|mkv|avi|mov/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype =
//     file.mimetype.startsWith("image/") ||
//     file.mimetype.startsWith("video/") ||
//     file.mimetype.includes("pdf");

//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb("Error: Only images, videos, and PDFs are allowed!");
//   }
// }

// // Multer upload config for multiple files
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 50000000 }, // 50MB max per file
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// }).array("uploadFiles", 10); // Allow up to 10 files with field name 'uploadFiles'

// // Controller to handle file uploads
// exports.uploadFiles = (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       RESPONSE.Failure.Message = err;
//       return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
//     }

//     if (!req.files || req.files.length === 0) {
//       RESPONSE.Success.Message = "No files uploaded!";
//       RESPONSE.Success.data = {};
//       return res.status(StatusCode.OK.code).send(RESPONSE.Success);
//     }

//     const uploadedFiles = req.files.map((file) => {
//       let type = "other";
//       if (file.mimetype.includes("pdf")) type = "pdf";
//       else if (file.mimetype.startsWith("video/")) type = "video";
//       else if (file.mimetype.startsWith("image/")) type = "image";

//       return {
//         fileName: file.filename,
//         fileUrl: `uploads/${type === "pdf" ? "pdfs" : type === "video" ? "videos" : "images"}/${file.filename}`,
//         fileType: type,
//       };
//     });

//     RESPONSE.Success.Message = "Files uploaded successfully!";
//     RESPONSE.Success.data = { files: uploadedFiles };
//     res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
//   });
// };


const multer = require("multer");
const path = require("path");
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const { uploadToAzureBlob } = require("../../utils/azureBlobUpload");

/* ---------------- MULTER STORAGE ---------------- */

const storage = multer.memoryStorage();

/* ---------------- FILE TYPE CHECK ---------------- */

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif|svg|pdf|mp4|mkv|avi|mov/;
  const extname = filetypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  const mimetype =
    file.mimetype.startsWith("image/") ||
    file.mimetype.startsWith("video/") ||
    file.mimetype.includes("pdf");

  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb("Error: Only images, videos, and PDFs are allowed!");
  }
}

/* ---------------- MULTER UPLOAD ---------------- */

const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 50MB per file
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).array("uploadFiles", 10); // max 10 files


exports.uploadFiles = (req, res) => {
  upload(req, res, async (err) => {
    try {
      if (err) {
        RESPONSE.Failure.Message = err;
        return res
          .status(StatusCode.BAD_REQUEST.code)
          .send(RESPONSE.Failure);
      }

      if (!req.files || req.files.length === 0) {
        RESPONSE.Success.Message = "No files uploaded!";
        RESPONSE.Success.data = {};
        return res
          .status(StatusCode.OK.code)
          .send(RESPONSE.Success);
      }

      const uploadedFiles = [];

      for (const file of req.files) {
        let containerName = "others";
        let fileType = "other";

        if (file.mimetype.includes("pdf")) {
          containerName = "pdfs";
          fileType = "pdf";
        } else if (file.mimetype.startsWith("video/")) {
          containerName = "videos";
          fileType = "video";
        } else if (file.mimetype.startsWith("image/")) {
          containerName = "images";
          fileType = "image";
        }

        const fileUrl = await uploadToAzureBlob(file, containerName);

        uploadedFiles.push({
          fileName: file.originalname,
          fileUrl,
          fileType,
        });
      }

      RESPONSE.Success.Message = "Files uploaded successfully!";
      RESPONSE.Success.data = { files: uploadedFiles };

      return res
        .status(StatusCode.CREATED.code)
        .send(RESPONSE.Success);
    } catch (error) {
      console.error("Azure Multi Upload Error:", error);
      RESPONSE.Failure.Message = "File upload failed!";
      return res
        .status(StatusCode.SERVER_ERROR.code)
        .send(RESPONSE.Failure);
    }
  });
};

