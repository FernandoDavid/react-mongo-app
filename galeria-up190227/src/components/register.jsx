import { useState, useRef} from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import Swal from 'sweetalert2'
import config from "../config"

function Register (props){

    let usernameInput = useRef("")
    let passInput = useRef("")
    let confirmPassInput = useRef("")
    
    const [validData, setValidData] = useState(false)
    
    const verifyData = ()=>{
        if(usernameInput.current.value !== "" && passInput.current.value!=="" && (passInput.current.value === confirmPassInput.current.value))
            setValidData(true)
        console.log(validData)
    }

    const registerUser = async (e)=>{
        e.preventDefault()
        const userInfo = {
            username: usernameInput.current.value,
            password: passInput.current.value
        }
        console.log(userInfo)
        var response = await axios.post(config.apiRoute+"/users/createUser", userInfo)
        console.log(response.status)
        if(response.data.code === 200){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User created',
                showConfirmButton: false,
                timer: 2000
            })
        }
        else if (response.data.code === 301){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'The username already exists',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }

    return (
        <div className="register">
            <div className="container-fluid">
                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                    <div className="card col-4 align-self-center ">
                        <div className="card-header bg-dark text-center text-white">
                            <h4 className="mt-2">Register</h4>
                        </div>
                        <div className="card-body m-2">
                            <form action="" onSubmit={registerUser}>
                                <div className="row justify-content-center">
                                    <div className="col-8 mb-4">
                                        <input type="text" className='form-control' ref={usernameInput} onChange={verifyData} placeholder="Create an unique username"/>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input type="password" className='form-control' ref={passInput} onChange={verifyData} placeholder="Create a password"/>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input type="password" className='form-control' ref={confirmPassInput} onChange={verifyData} placeholder="Repeat the password"/>
                                    </div>
                                    <div className="col-8 text-center mb-4">
                                        <input type="submit" className='btn btn-success' value="Register my information" disabled={!validData}/>
                                    </div>
                                    <div className="col-8 text-center">
                                        <Link to={"/login"} className="">I have an account already</Link>
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

export default Register