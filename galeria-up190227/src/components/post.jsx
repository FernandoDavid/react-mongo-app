function Post (props){

    const creationDate = (new Date(props.postInfo.createdAt)).toLocaleDateString();
    const creationTime = (new Date(props.postInfo.createdAt)).toLocaleTimeString();

    return(
        <div className="post">
            <div className="card my-3" style={{width: "18rem"}} >
                <div className="card-header pb-0 text-end">
                    <p style={{float: "left", marginTop: "5%"}}>xXxElPepe2001xXx</p>
                    <div style={{float: "right"}}>
                        <p>{creationDate} <br /> {creationTime}</p>
                    </div>
                </div>
                <img src={props.postInfo.photo} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title fw-bold text-black" style={{letterSpacing: "1px"}}>{props.postInfo.title}</h5>
                    <p className="card-text">{props.postInfo.description}</p>
                </div>
                <div className="card-footer pt-0">
                    <svg className="text-danger float-end mx-2 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <svg className="text-warning float-end mx-2 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Post