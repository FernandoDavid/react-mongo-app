import axios from "axios";
import { useNavigate } from 'react-router-dom'
import config from "../config";
import Swal from "sweetalert2";

function Post (props){
    const navigate = useNavigate()

    const creationDate = (new Date(props.postInfo.createdAt)).toLocaleDateString();
    const creationTime = (new Date(props.postInfo.createdAt)).toLocaleTimeString();

    const handlePostDelete = async (id)=>{
        const willDelete = await Swal.fire({
            title: "Are you sure?",
            text: "You will delete this post for ever",
            icon: "warning",
            showConfirmButton: true,
            showCancelButton: true
        });

        if(willDelete.isConfirmed){
            const deletePost = await axios.delete(config.apiRoute+"/posts/deletePost/"+id)
            if(deletePost.data.code === 200){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Post deleted',
                    showConfirmButton: false,
                    timer: 2000
                })
                props.updatePost()
            }
            else{
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'There was an error while deleting the post',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    }

    const editPost = (id)=>{
        localStorage.setItem('postId', id)
        navigate('/editPost')
    }


    return(
        <div className="post">
            <div className="card my-3" style={{width: "18rem"}} >
                <div className="card-header pb-0 text-end">
                    <p style={{float: "left", marginTop: "5%"}}>{props.postInfo.author.username}</p>
                    <div style={{float: "right"}}>
                        <p>{creationDate} at {creationTime}</p>
                    </div>
                </div>
                <img src={props.postInfo.photo} alt="Post Image"className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title fw-bold text-black" style={{letterSpacing: "1px"}}>{props.postInfo.title}</h5>
                    <p className="card-text">{props.postInfo.description}</p>
                </div>
                {props.enableCRUD ?
                <div className="card-footer pt-0">
                    <svg className="text-danger float-end mx-2 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" onClick={()=>handlePostDelete(props.postInfo._id)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <svg className="text-warning float-end mx-2 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" onClick={()=>editPost(props.postInfo._id)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </div>
                : console.log(props.enableCRUD)}
            </div>
        </div>
    )
}

export default Post