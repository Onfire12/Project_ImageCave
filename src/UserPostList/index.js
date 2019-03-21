import React from 'react';
import { Link } from 'react-router-dom';


const UserPostList =(props)=>{
    console.log("UserPostsList:",props)
    
    const userposts = props.userposts.map(
        userpost=>{
        if(props.currentUser === userpost.author){
        return<div key={userpost.id} className="img-container col-md-4 mt-5 mb-4">
                <div className="thumbnail">
                        <img style={{width: 300 + 'px', height:200 + 'px' }} src={userpost.imgUrl} alt="img"/>
                            <div >
                                <h4><Link to={`/${userpost.id}`}>{userpost.title}</Link></h4> 
                                <div>
                                <small>Created by: {userpost.author} </small>   
                                </div>      
                                <p>{userpost.description}</p>
                                
                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={props.deletePost.bind(null, userpost.id)}>
                                <span><i className="fas fa-times"></i></span>
                                </button>
                            </div>
                    </div>
              </div>
        }
    });
    

    return(
        <div className="row">
            {userposts}
        </div>
    )
}

export default UserPostList;