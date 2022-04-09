function EditPost(props){
    return(
        <div className="editPost">
            <div className="container-fluid">
                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                    <div className="card col-4 align-self-center bg-light">
                        <div className="card-header text-center text-white">
                            <h4 className="mt-2">Edit Post</h4>
                        </div>
                        <div className="card-body m-2">
                            <form>
                                <div className="row justify-content-center">
                                    <div className="col-8 mb-4">
                                        <input type="text" className="form-control" placeholder="Write the new title"/>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input type="text" className="form-control" placeholder="Write the new image URL"/>
                                    </div>
                                    <div className="col-8 mb-4">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Write the new description" id="floatingTextarea"></textarea>
                                        <label htmlFor="floatingTextarea" style={{color: "gray"}}>Write the new description</label>
                                    </div>
                                    </div>
                                    <div className="col-8 text-center mb-2">
                                        <input type="submit" className='btn btn-success' value="Register my information"/>
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

export default EditPost