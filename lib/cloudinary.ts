import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

/**
 * Uploads a file buffer to Cloudinary and returns the secure URL.
 * @param buffer - The file buffer to upload
 * @param folder  - Cloudinary folder to store the image in
 */
export async function uploadToCloudinary(
  buffer: Buffer,
  folder = "quick_hire/job_icons",
): Promise<string> {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder, resource_type: "image" }, (error, result) => {
        if (error || !result) {
          return reject(error ?? new Error("Cloudinary upload failed"));
        }
        resolve(result.secure_url);
      })
      .end(buffer);
  });
}
