import React  from 'react';
import { Link } from 'react-router-dom';

const ShowPost = (props)=> {
    

   console.log("props in SHOW===>",props)
        return(
            <div>
            <Link className="btn btn-secondary btn-lg mt-5" to={'/user'}><span><i className="fas fa-arrow-alt-circle-left"></i></span></Link>
            <div className="container text-center">
                <h1>{props.post.title}</h1>
                <p>Created by: {props.post.author}</p>
                <p>photos taken at: {props.post.address}</p>
                <img src={props.post.imgUrl} alt="img"></img>
                
                <p>{props.post.description}</p>
                <Link className="btn btn-primary" to={`/${props.post.id}/edit`}>Edit</Link>

                  
                
            </div>
            </div>
        )
    
}

export default ShowPost;