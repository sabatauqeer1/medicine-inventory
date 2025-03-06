import express from "express";
const router = express.Router();

import { signUp, login } from "../controller/users/authController.js";
import { createItem } from "../controller/items/createItem.js";
import { FindItems } from "../controller/items/findItem.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { updateItem } from "../controller/items/updateItem.js";
import { deleteItem } from "../controller/items/deleteItem.js";
import { updateUser } from "../controller/users/updateUser.js";

//routes
router.post("/signup", signUp);

router.post("/login", login);

router.use(authMiddleware);
router.post("/items/create", createItem); //create itemValue
router.patch("/items/update", updateItem); //update itemValue
//itemValue

router.post("/home/search", FindItems); //home
router.delete("/items/:userId/:id", deleteItem); //delete itemValue
// //user
router.patch("/users/:userId", updateUser); //update user
//categories
export default router;
                                                                  
