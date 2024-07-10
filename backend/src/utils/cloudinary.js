import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

// Set up your Cloudinary credentials
await cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Upload on cloudinary function
async function uploadOnCloudinary(imageLocalPath) {
  try {
    if (!imageLocalPath) return null;
    const uploadedImage = await cloudinary.uploader.upload(imageLocalPath, {
      resource_type: "auto",
      folder: "purbiNepal", 
    });  
    // File has been uploaded
    // Unlink the file
    fs.promises.unlink(imageLocalPath);
    return uploadedImage;
  } catch (error) {
    console.log(error);
    // Unlink the file
    fs.promises.unlink(imageLocalPath);
    return null;
  }
}

export { uploadOnCloudinary };
