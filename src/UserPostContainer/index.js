import React, {Component } from 'react';

import UserPostList from '../UserPostList'

import Cookies from 'universal-cookie';

class UserPostsContainer extends Component{
    constructor(){
        super()
        this.state = {
            
			userposts:[],
			currentUser:'',
            currentUserId:'',
        }

    }

    componentDidMount(){
		
		
		const cookies = new Cookies();
        const currentUserId = cookies.get('userId');
        
        this.theCurrentUser(currentUserId);
        this.getUserAllPosts();
    }

	theCurrentUser = async(userId) =>{
        try{
            const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/`+ userId,{
                credential:'include'
            });
            
            if (!response.ok){
                return Error(response.statusText);
            }

            const foundUserParsed = await response.json();
            console.log("found User after signIn==>:", foundUserParsed)
            
            this.setState({  
                    currentUser: foundUserParsed.username,
                    currentUserId: foundUserParsed.id,
            });

            console.log(" getUser in UserProfile",this.state)

        }catch(err){
            return err;
        }
    }

	getUserAllPosts = async () => {
		try {

			const response = await fetch(`${process.env.REACT_APP_API}/api/v1/posts`,{
	            credentials: 'include'
	        });
			if(!response.ok){
	            return Error(response.statusText);
	        }
	        const foundPosts = await response.json();

	        console.log('foundUserPosts is', foundPosts)
	        this.setState({
	        	userposts: foundPosts.posts
	        })
		} catch (err) {
			return err;
		}
	}

	deletePost = async(id, e) => {
        e.preventDefault();
        
        try {
          const deletePost = await fetch(`${process.env.REACT_APP_API}/api/v1/posts/` + id, {
            method: 'DELETE',
            credentials: 'include'
          })
    
          const parsedResponse = await deletePost.json();
          console.log("delete post", parsedResponse);
          this.setState({
            userposts: this.state.userposts.filter((userposts) => userposts.id !== id)
		  });

		  this.getUserAllPosts();
		  
        }catch(err){
          console.log(err)
        }
      }


    render(){
		
        return(
            <div >
                {/* <h1>{this.state.currentUser}'s creations</h1> */}
                    
                < UserPostList userposts={this.state.userposts} currentUser={this.state.currentUser} deletePost={this.deletePost}/>
            </div>

        )
    }

}

export default UserPostsContainer;