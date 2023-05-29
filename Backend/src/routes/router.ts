import { Router } from "express";
import { findUser, registerUser } from "../controllers/routes.controller.js";
import multer from "multer";

const router: Router = Router()

// Use Multer to handle file uploads
const upload = multer({
    dest: '../uploads/userImages',
    limits: {
    fileSize: 3000 * 1024 // 3MB
    }
});

router.post('/findUser', findUser)
router.post('/registerUser', upload.single('img'),registerUser)

export default router