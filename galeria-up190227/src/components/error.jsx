import { Link } from 'react-router-dom'

function Error (props){
    return(
        <div className="error">
            <h1>Seems like you are lost ma boi</h1>
            <Link to={"/login"}>Go to the login form</Link>
        </div>
    )
}
export default Error