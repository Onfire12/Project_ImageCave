import React, { Component} from 'react';

import Footer from '../Footer';
import Allposts from './allposts';

class ShowAllPosts extends Component{
    constructor(){
        super()
        this.state = {
          posts:[],

          intervalId:0
          
        }
    }

    componentDidMount(){
        this.getAllPosts()
        
    }

    getAllPosts = async() => {
        try{
          const response = await fetch(`${process.env.REACT_APP_API}/api/v1/posts`, {
            credentials: 'include',
          });
    
          if(!response.ok){
            throw Error(response.statusText)
          }
    
          const postsParsed = await response.json();
         
    
          this.setState({
            posts: postsParsed.posts
          })      
    
          }catch(err){
          return err
        }
      };


      scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
      }
      
      scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
      }
      

        
    render(){
        
        return(
            <div>
                <header>
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-5 bg-white fixed-top block border-bottom box-shadow">
                    <h5 className="my-0 mr-md-auto font-weight-normal">Gallery</h5>
                    <nav className="my-2 my-md-0 mr-md-3">
        
                    </nav>
                    <a className="btn btn-outline-primary" href="/">Home</a>
                </div>
                </header>
                
            <div className="container text-center mt-5 fixed">
                <br></br>
                <br></br>
                <br></br>
                <h1> View all Posts Here</h1>
                <br></br>
                  
                    <Allposts allposts={this.state.posts} />
                  
                    

                
            </div>
                    <button  className="btn btn-secondary scroll "
                            onClick={ () => { this.scrollToTop(); }}>
                        <span><i className="fas fa-arrow-alt-circle-up"></i></span>
                        <a>back to top</a>
                    </button>
                    <p></p>
                <Footer/>
            </div> 
        )
    }
}

export default ShowAllPosts;