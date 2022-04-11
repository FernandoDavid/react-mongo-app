import axios from "axios";
import {useEffect, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import config from "../config";
import Swal from "sweetalert2";

function EditPost(props){
    
    const navigate = useNavigate()

    let titleInput = useRef("")
    let photoURLInput = useRef("")
    let descriptionInput = useRef("")

    const [validData, setValidData] = useState(true)

    const postId=localStorage.getItem('postId')

    useEffect(()=>{
        getPostInfo()
    }, [])
    
    const getPostInfo = async()=>{
        
        const info = await axios.get(config.apiRoute+"/posts/getPost/"+postId)
        titleInput.current.value = info.data.info.title
        photoURLInput.current.value = info.data.info.photo
        descriptionInput.current.value = info.data.info.description
    }

    const handleUpdate = async(e)=>{
        e.preventDefault()
        const postInfo = {
            title: titleInput.current.value,
            photo: photoURLInput.current.value,
            description: descriptionInput.current.value
        }

        const updatedPost = await axios.put(config.apiRoute+"/posts/editPost/"+postId, postInfo)

        if(updatedPost.data.code === 200){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Post edited',
                showConfirmButton: false,
                timer: 2000
            })
            localStorage.removeItem('postId')
            navigate('/profile')
        }
        else{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Your post was not created :(',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }

    const verifyData = ()=>{
        if (titleInput.current.value !== "" && photoURLInput.current.value !== "" && descriptionInput.current.value !== "")
            setValidData(true)
        else
            setValidData(false)
    }
    
    return(
        <div className="editPost">
            <div className="container-fluid">
                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                    <div className="card col-4 align-self-center bg-light">
                        <div className="card-header text-center text-white">
                            <h4 className="mt-2">Edit Post</h4>
                        </div>
                        <div className="card-body m-2">
                            <form onSubmit={handleUpdate}>
                                <div className="row justify-content-center">
                                    <div className="col-8 mb-4">
                                        <input type="text" className="form-control" placeholder="Write the new title"  ref={titleInput} onChange={verifyData}/>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input type="text" className="form-control" placeholder="Write the new image URL"  ref={photoURLInput} onChange={verifyData}/>
                                    </div>
                                    <div className="col-8 mb-4">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Write the new description" id="floatingTextarea" ref={descriptionInput} onChange={verifyData}></textarea>
                                        <label htmlFor="floatingTextarea" style={{color: "gray"}}>Write the new description</label>
                                    </div>
                                    </div>
                                    <div className="col-8 text-center mb-2">
                                        <button type="submit" className="btn btn-warning"  disabled={!validData}>Edit post's information</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPost