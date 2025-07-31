import express from "express";
import {
  adminLogin,
  loginUser,
  registerUser,
  getUserInfo
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.get("/info", getUserInfo);

export default userRouter;
