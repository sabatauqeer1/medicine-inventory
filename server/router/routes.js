import express from "express";
const router = express.Router();

import { signUp, login } from "../controller/users/authController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

//routes
router.post("/signup", signUp);

router.post("/login", login);
router.use(authMiddleware);

export default router;
