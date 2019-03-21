import React, { Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import CreatePost from '../CreatePost';
import { Link } from 'react-router-dom';



class CreateContainer extends Component{
    constructor(){
        super()

        this.state={
            posts:[],
         
        }
    }

    

    addPost = async (data,e) => {
        e.preventDefault();
        try{
            const response = await fetch(`${process.env.REACT_APP_API}/api/v1/posts`, {
              method: 'POST',
              credentials: 'include',
              body: JSON.stringify(data),
              headers: {
                'Content-Type' : 'application/json'
              }
            });
    
            if(!response.ok){
              throw Error(response.statusText)
            }
    
            const parsedCreatePost = await response.json();

            console.log('Create Post======>',parsedCreatePost)
            
            this.props.history.push('/user');
            
    
          } catch(err) {
            return err
          }
        }

    render(){
        
        
        return(
            <div>
                <Header/>
            <div className="container">
                <Link className="btn btn-secondary btn-lg mt-5" to={'/user'}><span><i className="fas fa-arrow-alt-circle-left"></i></span></Link>
                <CreatePost addPost={this.addPost} getCurrentUser={this.getCurrentUser}/>
            </div>
                <Footer/>
            </div>
        )
    }
}

export default CreateContainer;