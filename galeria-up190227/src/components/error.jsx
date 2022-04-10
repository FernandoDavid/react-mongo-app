import { Link } from 'react-router-dom'
import cryingEmojiDies from '../img/crying-emoji-dies.gif'

function Error (props){
    var error = 100*20;

    return(
        <div className="error">
            <div className="row pb-3 bg-dark">
                <h1>Seems like you are lost ma boi</h1>
                <Link to={"/login"} style={{width: "10%", textAlign: "center"}}>Go to the login form</Link>
            </div>
            <div className="row pt-5 mt-5">
                <img src={cryingEmojiDies} alt="Crying Emoji Dies" className='mt-5' style={{width: "30%", margin: "0 auto"}}/>
                <span id='background-text'>
                    {
                    [...Array(error)].map((_,i)=>{
                            return (i%2 == 0) ? <span style={{color: "fuchsia"}}>error </span>
                                : <span style={{color: "lightgreen"}}>error </span>
                        })
                    }
                </span>
            </div>
        </div>
    )
}
export default Error