import { Router } from "express"
import postController from "../controllers/Post.controller.js"

const postRouter = Router()

postRouter.get("/posts/getPosts", postController.getPosts)
postRouter.get("/posts/getUserPosts/:userId", postController.getUserPosts)
postRouter.get("/posts/getPost/:postId", postController.getPost)
postRouter.post("/posts/createPost/:userId", postController.createPost)
postRouter.put("/posts/editPost/:postId", postController.editPost)
postRouter.delete("/posts/deletePost/:postId", postController.deletePost)

export default postRouter