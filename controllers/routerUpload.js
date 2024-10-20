import express from "express";
import upload from "../middlewares/multer.middlware.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
const router = express.Router();

router.post("/upload", upload.single("image"), async (req, res) => {
	try {
		if (!req.file) {
			return res.status(400).json({ message: "No file uploaded" });
		}

		//upload file on cloudinary
		const result = await uploadOnCloudinary(req.file.path);

		if (!result) {
			return res.status(500).json({ message: "Cloudinary upload failed" });
		}

		return res.status(200).json({ message: "Uploaded", data: result });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
});

export default router;
