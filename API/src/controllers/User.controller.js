import UserModel from "../models/User.model.js"
import PostModel from '../models/Post.model.js'

const userController = {
    
    getUsers : async (req,res)=>{
        try {
            const usersInfo = await UserModel.find()
            res.json({
                code: 200,
                info: usersInfo
            })
        } catch (err) {
            res.json({
                code: 500,
                error: err
            })
        }
    },

    getUser : async (req,res)=>{
        try {
            const userInfo = await UserModel.findById(req.params.userId).populate('posts')
            res.json({
                code: 200,
                info: userInfo
            })
        } catch (err) {
            res.json({
                code: 500,
                error: err
            })
        }
    },
    //Verificar informacion del login terminar
    verifyLogin : async (req,res)=>{
        try {
            const userFound = await UserModel.find({username: req.body.username, password: req.body.password})
            if(userFound.length != 0){
                res.json({
                    code: 200,
                    info: userFound
                })
            }
            else{
                res.json({
                    code: 301,
                    error: "The username or password is incorrect"
                })
            }
        } catch (err) {
            res.json({
                code: 500,
                error: err
            })
        }
    },

    createUser : async (req,res)=>{
        try {
            const userFound = await UserModel.findOne({username:req.body.username})
            if(userFound)
                res.json({
                    code: 301,
                    error: "The user already exists"
                })
            else {
                const newUser = new UserModel({
                    username: req.body.username,
                    password: req.body.password
                })
                const createUser = await newUser.save()
                res.json({
                    code: 200,
                    info: "User created"
                })
            }
        } catch (err) {
            res.json({
                code: 500,
                error: err
            })
        }
    },

    deleteUser : async (req,res)=>{
        try {
            const deletedUser = await UserModel.findByIdAndDelete(req.params.userId)
            const deletedPosts = await PostModel.deleteMany({author: req.params.userId})
            res.json({
                code: 200,
                info: "User information and posts deleted"})
        } catch (err) {
            res.json({
                code: 500,
                error: err
            })
        }
    }
}

export default userController