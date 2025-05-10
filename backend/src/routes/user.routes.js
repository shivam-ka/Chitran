import { Router } from "express"
import { getCurrentUser, getUserChannelProfile, loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js"


const userRouter = Router();

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/logout", verifyJWT, logoutUser)
userRouter.post('/refresh-token', refreshAccessToken)
userRouter.get('/get-current-user', getCurrentUser)
userRouter.post('/get-user-channel-profile', getUserChannelProfile)


export default userRouter 