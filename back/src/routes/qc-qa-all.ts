import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

import Replicate from "replicate";


const replicate = new Replicate(
	// auth: process.env.REPLICATE_API_TOKEN,}
	);

const router = express.Router()


const uploadDirectory = path.resolve(__dirname, '../datastash');

if (!fs.existsSync(uploadDirectory)) {
	fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, uploadDirectory);
	},
	filename: (req, file, cb) => {
		// Use the original file name or generate a unique one if needed
		cb(null, file.originalname);
	},
});

const upload = multer({
	storage: storage, // Use diskStorage if needed
	limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB file size limit
});

router.post('/upload', upload.single('file'), async (req: Request, res: Response) => {
	if (!req.file) {
		return res.status(400).send('No file uploaded.');
	}

	// Log the file information
	console.log('File received:', req.file.originalname);

	// Construct the file URI
	const fileUri = path.join('/datastash', req.file.filename);

	// const input = {
	// 	image: fileUri
	// }

	const input = {
		image: "https://replicate.delivery/pbxt/LMbGi83qiV3QXR9fqDIzTl0P23ZWU560z1nVDtgl0paCcyYs/cars.jpg"
	};

	// For demonstration, you can replace this with the actual `replicate.run` logic
	const output = await replicate.run("meta/sam-2:fe97b453a6455861e3bac769b441ca1f1086110da7466dbb65cf1eecfd60dc83", { input });
	console.log(output);
	// Send a response with the file URI
	res.send({ message: 'File uploaded successfully!', fileUri });
});

export default router;