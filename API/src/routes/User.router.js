import { Router } from "express";
import userController from '../controllers/User.controller.js'

const userRouter = Router()

userRouter.get("/users/getUsers", userController.getUsers)
userRouter.get("/users/getUser/:userId", userController.getUser)
userRouter.post("/users/verifyLogin", userController.verifyLogin)
userRouter.post("/users/createUser", userController.createUser)
userRouter.delete("/users/deleteUser/:userId", userController.deleteUser)

export default userRouter