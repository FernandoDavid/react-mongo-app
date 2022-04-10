import { useNavigate } from 'react-router-dom'

function Navbar (props){
    const navigate = useNavigate()

    const handleLogOut = ()=>{
        localStorage.removeItem('userId')
        navigate('/login')
    }

    return(
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href=''>Cheapstagram</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" href="/home">Posts</a>
                            <a className="nav-link active" href="/profile">My profile</a>
                            <a className="nav-link" href='' onClick={handleLogOut}>Log out</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar