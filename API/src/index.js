import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRouter from './routes/User.router.js'
import postRouter from './routes/Post.router.js'

const app = express()
const port = 3900

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.listen(port, async()=>{
    try {
        console.log('Server running on port ' + port)
        const db = await mongoose.connect('mongodb://localhost:27017/galeria')
        console.log("Connected to the database:"+db.connection.name)
    } catch (error) {
        console.log("Error in the database connection:"+error)
    }
})

app.get("/", (req,res)=>{
    res.send("The API for the gallery is working")
})

app.use(userRouter)
app.use(postRouter)