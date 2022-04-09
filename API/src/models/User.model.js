import mongoose from 'mongoose'
const { Schema, model } = mongoose

const User = new Schema({
    username:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    posts:[{
        type: mongoose.Types.ObjectId,
        ref: 'Post'
    }]
},{
    versionKey: false,
    timestamps: true
})

export default model("User", User)