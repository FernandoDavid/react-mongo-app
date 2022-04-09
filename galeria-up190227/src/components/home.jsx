import { useState, useEffect} from "react"
import Navbar from "./navbar"
import Post from "./post"
import axios from 'axios'
import config from "../config"

function Home(props){
    
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        setPosts([])
        getPosts()
    }, [])
    
    const getPosts = async ()=>{
        var getPosts = await axios.get(config.apiRoute+"/posts/getPosts")
        var postInfo=getPosts.data.info
        setPosts(postInfo)
    }


    return(
        <div className="home">
            <Navbar/>
            <h1 className="text-center">Posts</h1>
            <div className="container">
                <div className="row justify-content-around">
                    {posts.map((info) => (
                        <div key={info._id} className="col-3 mb-3">
                            <Post postInfo={info}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home