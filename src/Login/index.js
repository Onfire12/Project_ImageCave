import React, { Component  } from "react";
import Header from '../Header';
import Footer from '../Footer';

import Cookies from 'universal-cookie';

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username:'',
            password:'',
        }
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    handleSubmitLogin = (e) => {
        e.preventDefault()
        this.handleLogin(this.state)
        console.log('Login===>>>', this.state);
       
      }
    handleLogin = async (data) => {
        try{
          const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          
          if(!response.ok){
              console.log('err in login', response.statusText)
              throw Error(response.statusText)
          }

          const parsedResponse = await response.json()
          
          console.log("parsedRespone:Login===>",parsedResponse)

          if (parsedResponse.username !== null) {
            
            const cookies = new Cookies();

            cookies.set('userId', parsedResponse.id);

            localStorage.setItem('currentUser', parsedResponse.username);
            

            this.props.history.push('/user');
        }

        //   if (parsedResponse.error){
        //       console.log("this.state===> login:",this.state)
        //   }else{
        //     this.props.history.push('/user')
        //   }
          
    
        }catch(err){
            console.log(err)
          }
      }

    render(){
        return(
            <div>
                <div><Header/></div>

                <div style={{height: 500 + 'px'}} className="container">
                    <div className="text-center mt-4">
                        <h1>Please Sign In</h1>
                    </div>

                    <div className="row ">
                         <div className="col-md-8 offset-2 ">
                            <form onSubmit={this.handleSubmitLogin}>

                            <div className="form-group">
                                <input name="username"  type="username" className="form-control" onChange={this.handleChange} placeholder="UserName" required/>         
                            </div>

                            <div className="form-group">
                                <input name="password"  type="password" className="form-control" onChange={this.handleChange} placeholder="password" required/>
                            </div> 

                            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            </form>         
                        </div>
                    </div>
                </div> 

                <div><Footer/></div>
                
            </div>
        )
    }
}

export default Login;