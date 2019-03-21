import React, { Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import EditPost from '../EditPost';
import { Link } from 'react-router-dom';

class EditContainer extends Component{
    constructor(){
        super()
        this.state={
          post:{}
        }
    }

    componentDidMount(){
        this.getPost()
      };
    
      getPost = async() => {
        const postId = window.location.pathname.split('/')[1];
        try{
          const response = await fetch(`${process.env.REACT_APP_API}/api/v1/posts/` + postId, {
            credentials: 'include',
          });
    
          if(!response.ok){
            throw Error(response.statusText)
          }
    
          const postsParsed = await response.json();
          console.log('POST TO EDIT = ', postsParsed)
    
          this.setState({
            post: postsParsed
          })
    
          }catch(err){
          return err
        }
      };
    
    
      handleEditFormInput = (e) => {
        this.setState({
          post: {
            ...this.state.post,
            [e.target.name]:  e.target.value
          }
        })
      }
    
      updatePost = async (e) => {
        e.preventDefault();
        const postId = window.location.pathname.split('/')[1];
        console.log('SENDING TO DB = ', this.state.post);
        try{
            const response = await fetch(`${process.env.REACT_APP_API}/api/v1/posts/` + postId, {
              method: 'PUT',
              credentials: 'include',
              body: JSON.stringify(this.state.post),
              headers: {
                'Content-Type' : 'application/json'
              }
            });
    
            if(!response.ok){
              throw Error(response.statusText)
            }
    
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
                <EditPost handleEditFormInput={this.handleEditFormInput} post={this.state.post} updatePost={this.updatePost}/>
            </div>
                <Footer/>
            </div>
        )
    }
}

export default EditContainer;