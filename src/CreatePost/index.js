import React, { Component} from 'react';
import Cookies from 'universal-cookie';

class CreatePost extends Component{
    constructor(){
        super()

        this.state={
            title:'',
            imgUrl:'',
            description:'',
            address:'',
            author:'',
            currentUserId:'',
        }
    }

    componentDidMount(){
      const cookies = new Cookies();
      const currentUserId = cookies.get('userId');
      
      this.findCurrentUser(currentUserId);
  }

  findCurrentUser = async(userId) =>{
      try{
          // console.log('getUser',this.props.match)
          const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/`+ userId,{
              credential:'include'
          });
          
          if (!response.ok){
              return Error(response.statusText);
          }

          const foundUserParsed = await response.json();
          
          this.setState({  
                  currentUser: foundUserParsed.username,
                  currentUserId: foundUserParsed.id,
          });

          console.log(" getUser at Create Post",this.state)

      }catch(err){
          return err;
      }
  }

    handleInput = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        
        return(
            <div className="container">
        <div className="text-center mt-4">
          <h1>Create Post</h1>
         
        </div>
        <div className="row mb-4">
          <div className="col-md-8 offset-2 mt-5">

            <form onSubmit={this.props.addPost.bind(null, this.state)}>

              <div className="form-group">
                <label className="mb-0" htmlFor="title">Title:</label>
                  <input name="title"  type="text" className="form-control" onChange={this.handleInput} placeholder="ex)title" required/>
                  
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="imgUrl">img_url:</label>
                  <input name="imgUrl"  type="text" className="form-control" onChange={this.handleInput} placeholder="ex)https://" required/>
              </div>

              <div className="form-group">
                <label className="mb-0" htmlFor="address">address:</label>
                  <input name="address"  type="text" className="form-control" onChange={this.handleInput} placeholder="ex)1234 abc st, City, State " required/>
              </div>
              
              <div className="form-group">
                <label className="mb-0" htmlFor="description">description:</label>
                  <textarea name="description" id="description" className="form-group py-4 px-4" rows="8" cols="80" onChange={this.handleInput} placeholder="ex)this is description">
                  </textarea>
              </div>
              

              <div className="text-center form-group">
              <button className="btn btn-lg btn-primary btn-block" type="submit">Create !</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        )
    }
}

export default CreatePost;