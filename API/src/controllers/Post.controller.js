import UserModel from "../models/User.model.js"
import PostModel from "../models/Post.model.js"
import mongoose from "mongoose"

const postController = {
    
    getPosts: async (req,res)=>{
        try {
            const postsInfo = await PostModel.find().populate('author')
            res.json({
                code: 200,
                info: postsInfo
            })
        } catch (err) {
            res.json({
                code: 500,
                error: err
            })
        }
    },

    getPost: async (req,res)=>{
        try {
            const postInfo = await PostModel.findById(req.params.postId)
            res.json({
                code: 200,
                info: postInfo
            })
        } catch (err) {
            res.json({
                code: 500,
                error: err
            })
        }
    },

    getUserPosts: async (req,res)=>{
        try {
            const userPosts = await PostModel.find({author: req.params.userId})
            res.json({
                code: 200,
                info: userPosts
            })
        } catch (err) {
            res.json({
                code: 500,
                error: err
            })
        }
    },

    createPost: async (req,res)=>{
        try {
            const newPost = new PostModel({
                author: mongoose.Types.ObjectId(req.params.userId),
                title: req.body.title,
                description: req.body.description,
                photo: req.body.photo
            })
            const createPost = await newPost.save()
            const updateUserPosts = await UserModel.findByIdAndUpdate(req.params.userId,
                {
                    $push: {
                        posts: createPost._id
                    }
                }
            )
            res.json({
                code: 200,
                info: "Post created"
            })
            
        } catch (err) {
            res.json({
                code: 500,
                error: err
            })
        }
    },

    editPost: async (req,res)=>{
        try {
            const updatedPost = await PostModel.findByIdAndUpdate(req.params.postId, req.body)
            res.json({
                code: 200,
                info: "Post information updated"
            }) 
        } catch (err) {
            res.json({
                code: 500,
                error: err
            })
        }
    },

    deletePost: async (req,res)=>{
        try {
            const deletedPost = await PostModel.findByIdAndDelete(req.params.postId)
            const deletedUserPosts = await UserModel.findByIdAndUpdate(deletedPost.author,
                {
                    $pull:{
                        posts: deletedPost._id
                    }
                }
            )
            res.json({
                code: 200,
                info: "Post deleted"
            })
        } catch (err) {
            res.json({
                code: 500,
                error: err
            })
        }
    }
}

export default postController