import { useNavigate } from 'react-router-dom'

function Navbar (props){
    const navigate = useNavigate()

    const handleLogOut = ()=>{
        localStorage.removeItem('userId')
        navigate('/login')
    }

    return(
        <div classNameNameName="navbar container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href=''>Cheapstagram</a>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" href="/home">Posts</a>
                            <a class="nav-link active" href="/profile">My profile</a>
                            <a class="nav-link" href='' onClick={handleLogOut}>Log out</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar