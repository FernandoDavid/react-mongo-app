import { useState, useRef, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "./navbar"
import axios from 'axios'
import Swal from 'sweetalert2'
import config from "../config"

function Profile (props){
    
    
    return(
        <div className="profile">
            <Navbar/>
            <h1>Profile</h1>
            
            <h2>{localStorage.getItem('userId')}</h2>
        </div>
    )
}

export default Profile