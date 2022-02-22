import express from "express";
import { loginController } from "../controllers/login.js";
import { registerController } from "../controllers/register.js";
import { createPostController } from "../controllers/create-post.js";

const router = express.Router();

router.post("/login", loginController);

router.post("/register", registerController);

router.post("/create-post", createPostController);

export default router;
