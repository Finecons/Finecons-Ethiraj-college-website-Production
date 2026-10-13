// // original code

// const {
//   BlobServiceClient,
//   generateBlobSASQueryParameters,
//   BlobSASPermissions,
//   StorageSharedKeyCredential,
// } = require("@azure/storage-blob");

// const blobServiceClient = BlobServiceClient.fromConnectionString(
//   process.env.AZURE_STORAGE_CONNECTION_STRING
// );

// const sharedKeyCredential = new StorageSharedKeyCredential(
//   process.env.AZURE_STORAGE_ACCOUNT_NAME,
//   process.env.AZURE_STORAGE_ACCOUNT_KEY
// );

// exports.uploadToAzureBlob = async (file, containerName) => {
//   const containerClient = blobServiceClient.getContainerClient(containerName);

//   // ❌ no createIfNotExists (already created manually)

//   const uniqueName =
//     Date.now() + "-" + Math.round(Math.random() * 1e9);
//   const blobName = uniqueName + require("path").extname(file.originalname);

//   const blockBlobClient = containerClient.getBlockBlobClient(blobName);

//   await blockBlobClient.uploadData(file.buffer, {
//     blobHTTPHeaders: {
//       blobContentType: file.mimetype,
//     },
//   });

//   const sasToken = generateBlobSASQueryParameters(
//     {
//       containerName,
//       blobName,
//       permissions: BlobSASPermissions.parse("r"),
//       expiresOn: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hrs
//     },
//     sharedKeyCredential
//   ).toString();

//   return `${blockBlobClient.url}?${sasToken}`;
// };




// new code of 22-01-2025==========================================================================================

// Option B — Private container + dynamic SAS
// If images are private:

// Store only blob name

// Generate SAS on demand

// Short expiry (5–15 min)

// Never store SAS in DB

// const {
//   BlobServiceClient,
//   generateBlobSASQueryParameters,
//   BlobSASPermissions,
//   StorageSharedKeyCredential,
// } = require("@azure/storage-blob");

// const blobServiceClient = BlobServiceClient.fromConnectionString(
//   process.env.AZURE_STORAGE_CONNECTION_STRING
// );

// const sharedKeyCredential = new StorageSharedKeyCredential(
//   process.env.AZURE_STORAGE_ACCOUNT_NAME,
//   process.env.AZURE_STORAGE_ACCOUNT_KEY
// );

// exports.uploadToAzureBlob = async (file, containerName) => {
//   const containerClient = blobServiceClient.getContainerClient(containerName);

//   const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
//   const blobName = uniqueName + require("path").extname(file.originalname);

//   const blockBlobClient = containerClient.getBlockBlobClient(blobName);

//   await blockBlobClient.uploadData(file.buffer, {
//     blobHTTPHeaders: {
//       blobContentType: file.mimetype,
//     },
//   });

//   // 🔐 SAFE SAS generation
//   const startsOn = new Date(Date.now() - 5 * 60 * 1000);     // 5 min ago
//   const expiresOn = new Date(Date.now() + 24 * 60 * 60 * 1000); // +24 hrs

//   const sasToken = generateBlobSASQueryParameters(
//     {
//       containerName,
//       blobName,
//       permissions: BlobSASPermissions.parse("r"),
//       startsOn,
//       expiresOn,
//     },
//     sharedKeyCredential
//   ).toString();

//   return `${blockBlobClient.url}?${sasToken}`;
// };



// code on 23-01-25================================================================================================

// Option A — Public container
// If images are public (like college website banners):

// Make the container public

// Store normal blob URL

// No SAS needed at all

// Zero expiry problems


const {
  BlobServiceClient,
  StorageSharedKeyCredential,
} = require("@azure/storage-blob");

let blobServiceClient = null;
let sharedKeyCredential = null;

if (process.env.AZURE_STORAGE_CONNECTION_STRING) {
  try {
    blobServiceClient = BlobServiceClient.fromConnectionString(
      process.env.AZURE_STORAGE_CONNECTION_STRING
    );
  } catch (err) {
    console.warn("Azure Storage Blob init warning:", err.message);
  }
}

if (process.env.AZURE_STORAGE_ACCOUNT_NAME && process.env.AZURE_STORAGE_ACCOUNT_KEY) {
  try {
    sharedKeyCredential = new StorageSharedKeyCredential(
      process.env.AZURE_STORAGE_ACCOUNT_NAME,
      process.env.AZURE_STORAGE_ACCOUNT_KEY
    );
  } catch (err) {
    console.warn("Azure StorageSharedKeyCredential init warning:", err.message);
  }
}

exports.uploadToAzureBlob = async (file, containerName) => {
  const containerClient = blobServiceClient.getContainerClient(containerName);

  const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
  const blobName = uniqueName + require("path").extname(file.originalname);

  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  await blockBlobClient.uploadData(file.buffer, {
    blobHTTPHeaders: {
      blobContentType: file.mimetype,
    },
  });

  // ✅ PUBLIC URL — no SAS, no expiry
  return blockBlobClient.url;
};
