import React, { Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ShowPost from '../ShowPost';

class ShowContainer extends Component{
    constructor(){
    super()
    this.state = {
        post: {}
        }
    }

    componentDidMount(){
        this.getOnePost()
      }

    getOnePost = async() => {
        const postId = window.location.pathname.split('/')[1];
    
        console.log('postId=====>',postId)
    
        try{
          const response = await fetch(`${process.env.REACT_APP_API}/api/v1/posts/` + postId,  {
            credentials: 'include'
          })  
          if(!response.ok){
            throw Error(response.statusText)
          }   
          const postParsed = await response.json();
          console.log('postsParsed=====>',postParsed)
          this.setState({
              post: postParsed
          })    
        }catch(err){
          return err
        }
      }

    

    render(){
        console.log("this.state.post in SHOW====>", this.state.post)
        return(
            <div>
                <Header/>
            <div className="container">
                <ShowPost post={this.state.post} />
            </div>
                <Footer/>
            </div>
        )
    }
}

export default ShowContainer;