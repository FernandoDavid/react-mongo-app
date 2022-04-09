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
            <h1>Profile</h1>
            <h2>{localStorage.getItem('userId')}</h2>
        </div>
    )
}

export default Profile