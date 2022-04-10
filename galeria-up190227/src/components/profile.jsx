import { useState, useRef, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "./navbar"
import axios from 'axios'
import Swal from 'sweetalert2'
import config from "../config"

function Profile (props){
    
    //Boton para abrir modal para crear publicacion nueva
    return(
        <div className="profile">
            <Navbar/>
            <div className="row mt-3">
                <div className="col px-5">
                    <div className="float-start">
                        <h1>Profile</h1>
                        <h2>{localStorage.getItem('userId')}</h2>
                    </div>
                    <button type="button" className="btn btn-success float-end mt-4 mr-3" data-bs-toggle="modal" data-bs-target="#createPostModal">
                    Create New Post
                    </button>
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
                        <div className="modal-body bg-light pb-1">
                            <form>
                                <div className="row justify-content-center">
                                    <div className="col-8 mb-4">
                                        <input type="text" className="form-control" placeholder="Write the new title"/>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input type="text" className="form-control" placeholder="Write the new image URL"/>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Write the new description" id="floatingTextarea"></textarea>
                                            <label htmlFor="floatingTextarea" style={{color: "gray"}}>Write the new description</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer bg-light pt-0 mt-0">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <input type="submit" className='btn btn-success' value="Create post"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile