import { Router } from "express";
import { findUser, registerUser } from "../controllers/routes.controller.js";
import { uploadImage } from "../controllers/images.controller.js";
import multer from '../middlewares/multer.config.js'

const router: Router = Router()

router.post('/findUser', findUser)
router.post('/registerUser', registerUser)
router.post('/upload/img',multer.single('img'), uploadImage)

export default router