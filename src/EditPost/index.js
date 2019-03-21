import React  from 'react';

const EditPost =(props) =>{
    
        return(
            <div className="container">
                <h1 className="text-center"> Edit Post page</h1>
                <div className="col-md-8 offset-2 mt-5">
                    <form onSubmit={props.updatePost}>

                     <div className="form-group">
                        <label className="mb-0" htmlFor="title">Title:</label>
                        <input name="title" id="title" type="text" className="form-control" value={props.post.title} onChange={props.handleEditFormInput} placeholder="ex)title" required/>                 
                    </div>
                    <div className="form-group">
                        <label className="mb-0" htmlFor="imgUrl">imgUrl:</label>
                        <input name="imgUrl" id="imgUrl" type="text" className="form-control" value={props.post.imgUrl} onChange={props.handleEditFormInput} placeholder="ex)https://" required/>
                    </div>
              
                    <div className="form-group">
                        <label className="mb-0" htmlFor="description">description:</label>
                        <textarea name="description" id="description" className="form-group py-4 px-4" rows="8" cols="80" value={props.post.description} onChange={props.handleEditFormInput} placeholder="ex)this is description">
                        </textarea>
                    </div>
                    <div className="text-center form-group">
                        
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Update !</button>
                    </div>
                    </form>
                </div>
            </div>
        )
    
}

export default EditPost;