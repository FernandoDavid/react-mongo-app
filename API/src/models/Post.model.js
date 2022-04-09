import mongoose from 'mongoose'
const { Schema, model } = mongoose

const Post = new Schema({
    author:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    photo:{
        type: String,
        required: true,
        trim: true
    }
},
{
    versionKey: false,
    timestamps: true
})

export default model("Post", Post)