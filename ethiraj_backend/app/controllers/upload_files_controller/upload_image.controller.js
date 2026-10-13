// const multer = require("multer");
// const path = require("path");
// const RESPONSE = require("../../constants/response");
// const { MESSAGE } = require("../../constants/message");
// const { StatusCode } = require("../../constants/HttpStatusCode");

// // Upload Image Controller

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/images/"); // Set the upload destination path
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// // Init upload
// // Set up multer for handling image uploads
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 5000000 }, // Limit file size to 5MB
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// }).single("uploadImage"); // 'image' is the field name in the form

// // Check file type
// function checkFileType(file, cb) {
//   // Allowed ext
//   const filetypes = /jpeg|jpg|png|gif|svg/;
//   // Check ext
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   // Check mime
//   const mimetype = filetypes.test(file.mimetype);

//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb("Error: Images Only (jpeg, jpg, png, gif, svg)!");
//   }
// }

// exports.uploadImage = (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       RESPONSE.Failure.Message = err;
//       return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
//       // return res.status(400).send({ message: err });
//     }
//     if (!req.file) {
//       RESPONSE.Success.Message = "No file uploaded!";
//       RESPONSE.Success.data = {};
//       return res.status(StatusCode.OK.code).send(RESPONSE.Success);
//       // return res.status(400).send({ message: "No file uploaded!" });
//     }
//     RESPONSE.Success.Message = "File uploaded successfully!";
//     RESPONSE.Success.data = {
//       imageUrl: `uploads/images/${req.file.filename}`,
//     };
//     res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
//     // res.status(200).send({
//     //   imageUrl: `uploads/images/${req.file.filename}`,
//     // });
//   });
// };



// const RESPONSE = require("../../constants/response");
// const { StatusCode } = require("../../constants/HttpStatusCode");
// const { uploadToAzureBlob } = require("../../utils/azureBlob");
// const multer = require("multer");
// const path = require("path");



/* ---------------- MULTER CONFIG ---------------- */

// // Memory storage (required for Azure Blob)
// const storage = multer.memoryStorage();

// const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// }).single("uploadImage");

// /* ---------------- FILE TYPE CHECK ---------------- */

// function checkFileType(file, cb) {
//   const filetypes = /jpeg|jpg|png|gif|svg/;
//   const extname = filetypes.test(
//     path.extname(file.originalname).toLowerCase()
//   );
//   const mimetype = filetypes.test(file.mimetype);

//   if (mimetype && extname) {
//     cb(null, true);
//   } else {
//     cb("Error: Images Only (jpeg, jpg, png, gif, svg)!");
//   }
// }


// // Upload Image Controller
// exports.uploadImage = (req, res) => {
//   upload(req, res, async (err) => {
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

//       // Upload to Azure Blob
//       const imageUrl = await uploadToAzureBlob(req.file);

//       console.log("Uploaded Image URL:", imageUrl);

//       RESPONSE.Success.Message = "File uploaded successfully!";
//       RESPONSE.Success.data = { imageUrl };

//       return res
//         .status(StatusCode.CREATED.code)
//         .send(RESPONSE.Success);
//     } catch (error) {
//       console.error("Azure Upload Error:", error);

//       RESPONSE.Failure.Message = "Image upload failed! ";
//       return res
//         .status(StatusCode.SERVER_ERROR.code)
//         .send(RESPONSE.Failure);
//     }
//   });
// };


const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const { uploadToAzureBlob } = require("../../utils/azureBlobUpload");
const multer = require("multer");
const path = require("path");

/* MULTER */
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|svg/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    mimetype && extname ? cb(null, true) : cb("Images only!");
  },
}).single("uploadImage");

/* CONTROLLER */
exports.uploadImage = (req, res) => {
  upload(req, res, async (err) => {
    try {
      if (err) {
        RESPONSE.Failure.Message = err;
        return res.status(400).send(RESPONSE.Failure);
      }

      const imageUrl = await uploadToAzureBlob(req.file, "images");

      RESPONSE.Success.Message = "Image uploaded successfully";
      RESPONSE.Success.data = { imageUrl };
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    } catch (error) {
      console.error(error);
      RESPONSE.Failure.Message = "Image upload failed";
      res.status(500).send(RESPONSE.Failure);
    }
  });
};
