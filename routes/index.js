import express from "express";
import multer from "multer";
import { loginController } from "../controllers/login.js";
import { registerController } from "../controllers/register.js";
import { createPostController } from "../controllers/create-post.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/login", loginController);

router.post("/register", registerController);

router.post("/create-post", upload.array("photos", 5), createPostController);

export default router;
