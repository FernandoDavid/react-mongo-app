

function Post (props){

    return(
        <div className="post">
            <div className="card" style={{width: "18rem"}} >
                <img src={props.postInfo.photo} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.postInfo.title}</h5>
                    <p className="card-text">{props.postInfo.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Post