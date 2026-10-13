
// const { BlobServiceClient, generateBlobSASQueryParameters, BlobSASPermissions, StorageSharedKeyCredential } = require("@azure/storage-blob");

// const blobServiceClient = BlobServiceClient.fromConnectionString(
//     process.env.AZURE_STORAGE_CONNECTION_STRING
// );

// const containerName = "images";

// exports.uploadToAzureBlob = async (file) => {
//     const containerClient = blobServiceClient.getContainerClient(containerName);

//     // Create container if not exists (NO public access)
//     await containerClient.createIfNotExists();

//     const blobName = `${Date.now()}-${file.originalname.replace(/\s+/g, "")}`;
//     const blockBlobClient = containerClient.getBlockBlobClient(blobName);

//     await blockBlobClient.uploadData(file.buffer, {
//         blobHTTPHeaders: {
//             blobContentType: file.mimetype,
//         },
//     });

//     // 🔐 Generate SAS URL (read-only)
//     const sharedKeyCredential = new StorageSharedKeyCredential(
//         process.env.AZURE_STORAGE_ACCOUNT_NAME,
//         process.env.AZURE_STORAGE_ACCOUNT_KEY
//     );

//     const sasToken = generateBlobSASQueryParameters(
//         {
//             containerName,
//             blobName,
//             permissions: BlobSASPermissions.parse("r"),
//             expiresOn: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
//         },
//         sharedKeyCredential
//     ).toString();

//     return `${blockBlobClient.url}?${sasToken}`;
// };

