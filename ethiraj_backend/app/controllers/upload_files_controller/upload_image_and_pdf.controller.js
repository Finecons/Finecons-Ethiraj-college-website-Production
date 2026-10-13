// const multer = require("multer");
// const path = require("path");
// const RESPONSE = require("../../constants/response");
// const { MESSAGE } = require("../../constants/message");
// const { StatusCode } = require("../../constants/HttpStatusCode");

// // Storage configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     if (file.mimetype.includes("pdf")) {
//       cb(null, "uploads/pdfs/"); // PDFs upload destination
//     } else {
//       cb(null, "uploads/images/"); // Images upload destination
//     }
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// // Multer configuration
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 10000000 }, // 10MB limit
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// }).single("uploadFile"); // 'uploadFile' is the field name in the form

// // Check file type
// function checkFileType(file, cb) {
//   // Allowed file extensions
//   const filetypes = /jpeg|jpg|png|gif|svg|pdf/;
//   // Check extensions and MIME type
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);

//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb("Error: Only images (jpeg, jpg, png, gif, svg) and PDFs are allowed!");
//   }
// }

// // Upload file handler
// exports.uploadFile = (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       RESPONSE.Failure.Message = err;
//       return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
//     }
//     if (!req.file) {
//       RESPONSE.Success.Message = "No file uploaded!";
//       RESPONSE.Success.data = {};
//       return res.status(StatusCode.OK.code).send(RESPONSE.Success);
//     }
//     const fileUrl = req.file.mimetype.includes("pdf")
//       ? `uploads/pdfs/${req.file.filename}`
//       : `uploads/images/${req.file.filename}`;
    
//     RESPONSE.Success.Message = "File uploaded successfully!";
//     RESPONSE.Success.data = { fileUrl };
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
  const filetypes = /jpeg|jpg|png|gif|svg|pdf/;
  const extname = filetypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  const mimetype =
    file.mimetype.startsWith("image/") ||
    file.mimetype.includes("pdf");

  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb("Error: Only images (jpeg, jpg, png, gif, svg) and PDFs are allowed!");
  }
}

/* ---------------- MULTER UPLOAD ---------------- */

const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 10MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("uploadFile");



exports.uploadFile = (req, res) => {
  upload(req, res, async (err) => {
    try {
      if (err) {
        RESPONSE.Failure.Message = err;
        return res
          .status(StatusCode.BAD_REQUEST.code)
          .send(RESPONSE.Failure);
      }

      if (!req.file) {
        RESPONSE.Success.Message = "No file uploaded!";
        RESPONSE.Success.data = {};
        return res
          .status(StatusCode.OK.code)
          .send(RESPONSE.Success);
      }

      // Decide container based on mimetype
      const containerName = req.file.mimetype.includes("pdf")
        ? "pdfs"
        : "images";

      const fileUrl = await uploadToAzureBlob(req.file, containerName);

      RESPONSE.Success.Message = "File uploaded successfully!";
      RESPONSE.Success.data = { fileUrl };

      return res
        .status(StatusCode.CREATED.code)
        .send(RESPONSE.Success);
    } catch (error) {
      console.error("Azure Upload Error:", error);
      RESPONSE.Failure.Message = "File upload failed!";
      return res
        .status(StatusCode.SERVER_ERROR.code)
        .send(RESPONSE.Failure);
    }
  });
};
