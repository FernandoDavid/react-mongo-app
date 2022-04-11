import { useState, useRef, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Post from "./post"
import Navbar from "./navbar"
import axios from 'axios'
import Swal from 'sweetalert2'
import config from "../config"

function Profile (props){
    const navigate = useNavigate()
    
    let titleInput = useRef("")
    let photoURLInput = useRef("")
    let descriptionInput = useRef("")

    const [validData, setValidData] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        getUserPosts()
    }, [])

    const getUserPosts = async ()=>{
        const userPosts = await axios.get(config.apiRoute+"/posts/getUserPosts/"+localStorage.getItem('userId'))
        const posts = userPosts.data.info
        setPosts(posts)
    }

    const verifyData = ()=>{
        if (titleInput.current.value !== "" && photoURLInput.current.value !== "" && descriptionInput.current.value !== "")
            setValidData(true)
        else
            setValidData(false)
    }

    const createPost = async (e)=>{
        e.preventDefault()
        const newPost= {
            author: localStorage.getItem('userId'),
            title: titleInput.current.value,
            photo: photoURLInput.current.value,
            description: descriptionInput.current.value
        }

        const createdPost = await axios.post(config.apiRoute+"/posts/createPost/"+localStorage.getItem('userId'), newPost)

        if(createdPost.data.code === 200){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Post created',
                showConfirmButton: false,
                timer: 2000
            })
            titleInput.current.value = ""
            photoURLInput.current.value = ""
            descriptionInput.current.value = ""
            getUserPosts()
        }
        else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Your post was not created :(',
                showConfirmButton: false,
                timer: 2000
            })
        }

    }

    return(
        <div className="profile">
            <Navbar/>
            <div className="row mt-3">
                <div className="col px-5">
                    <div className="float-start">
                        <h1>Profile</h1>
                    </div>
                    <button type="button" className="btn btn-success float-end mt-4 mr-3" data-bs-toggle="modal" data-bs-target="#createPostModal">
                    Create New Post
                    </button>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-around">
                    {posts.map((info) => (
                        <div key={info._id} className="col-3 mb-3">
                            <Post postInfo={info} enableCRUD={true} updatePost={getUserPosts}/>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="createPostModal" tabIndex="-1" aria-labelledby="createPostModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-white">
                            <h4 className="modal-title" id="createPostModalLabel">Modal title</h4>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={createPost}>
                            <div className="modal-body bg-light pb-1">
                                <div className="row justify-content-center">
                                    <div className="col-8 mb-4">
                                        <input type="text" className="form-control" ref={titleInput} placeholder="Title" onChange={verifyData}/>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input type="text" className="form-control" ref={photoURLInput} placeholder="Photo URL" onChange={verifyData}/>
                                    </div>
                                    <div className="col-8 mb-4">    
                                        <div className="form-floating">
                                            <textarea className="form-control" ref={descriptionInput} placeholder="Description" onChange={verifyData} ></textarea>
                                            <label htmlFor="floatingTextarea" style={{color: "gray"}}>Write the new description</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer bg-light pt-0 mt-0">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <input type="submit" className='btn btn-success' value="Create post" disabled={!validData}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile