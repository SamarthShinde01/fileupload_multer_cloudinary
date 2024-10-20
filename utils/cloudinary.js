import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
import fs from "fs";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
	try {
		if (!localFilePath) return null;

		const response = cloudinary.uploader.upload(localFilePath, {
			folder: "test-directory",
			resource_type: "auto",
		});

		console.log("file has been uploaded on cloudinary", response.url);
		return response;
	} catch (error) {
		fs.unlinkSync(localFilePath); //remove the locally saved temporary file as the upload operation got failed
		console.error(error);
		return null;
	}
};

export default uploadOnCloudinary;
