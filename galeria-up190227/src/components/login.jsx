import { useState, useRef} from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import Swal from 'sweetalert2'
import config from "../config"

//Without react-bootstrap
function Login (props){
    const navigate = useNavigate()

    let usernameInput = useRef("")
    let passInput = useRef("")

    const validateLogin = async (e)=>{
        e.preventDefault()
        const userLogin = {
            username: usernameInput.current.value,
            password: passInput.current.value
        }
        console.log(userLogin)
        //Terminar login
        const userFromDB = await axios.post(config.apiRoute+"/users/verifyLogin",userLogin)
        if (userFromDB.data.code === 301){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'The username or password is incorrect',
                showConfirmButton: false,
                timer: 2000
            })
        }
        else{
            localStorage.setItem('userId', userFromDB.data.info[0]._id)
            navigate('/home')
        }
    }

    return (
        <div className="login">
            <div className="container-fluid">
                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                    <div className="card col-4 align-self-center ">
                        <div className="card-header bg-dark text-center text-white">
                            <h4 className="mt-2">Log In</h4>
                        </div>
                        <div className="card-body m-2">
                            <form action="" onSubmit={validateLogin}>
                                <div className="row justify-content-center">
                                    <div className="col-8 mb-4">
                                        <input type="text" className='form-control' ref={usernameInput} placeholder="Username"/>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input type="password" className='form-control' ref={passInput} placeholder="Password"/>
                                    </div>
                                    <div className="col-8 text-center mb-4">
                                        <input type="submit" className='btn btn-success' value="Login"/>
                                    </div>
                                    <div className="col-8 text-center">
                                        <Link to={"/register"} className="">Im not registered</Link>
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

export default Login