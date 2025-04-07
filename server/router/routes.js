import express from "express";
const router = express.Router();

import { signUp, login } from "../controller/users/authController.js";
import { translated } from "../translate.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

//routes
router.post("/signup", signUp);

router.post("/login", login);
// router.use(authMiddleware);
router.post("/translate", translated);

export default router;
