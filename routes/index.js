import express from "express";
import { loginController } from "../controllers/login.js";
import { registerController } from "../controllers/register.js";

const router = express.Router();

router.post("/login", loginController);

router.post("/register", registerController);

export default router;
