import { Router } from "express";
import {
  getCurrentUser,
  getUserChannelProfile,
  getWatchHistory,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", verifyJWT, logoutUser);
userRouter.post("/refresh-token", refreshAccessToken);
userRouter.get("/get-current-user", verifyJWT, getCurrentUser);
userRouter.get("/c/:username", verifyJWT, getUserChannelProfile);
userRouter.get("/watch-history", verifyJWT, getWatchHistory);

export default userRouter;
