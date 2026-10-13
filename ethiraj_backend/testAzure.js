require("dotenv").config();
const { BlobServiceClient } = require("@azure/storage-blob");

const client = BlobServiceClient.fromConnectionString(
  process.env.AZURE_STORAGE_CONNECTION_STRING
);

async function test() {
  const container = client.getContainerClient("images");

  const blob = container.getBlockBlobClient("test.txt");

  await blob.upload("Hello Azure", Buffer.byteLength("Hello Azure"));

  console.log("Blob upload SUCCESS");
}

test().catch(console.error);

// nvdknv
