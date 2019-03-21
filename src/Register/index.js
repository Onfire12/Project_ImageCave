import React, { Component  } from "react";
import Header from '../Header';
import Footer from '../Footer';

import Cookies from 'universal-cookie';

class Register extends Component{
    constructor(){
        super()

        this.state = {
           
                username:'',
                email:'',
                password:'',
                verify_Password:'',
                
                     
        }
    }
    handleInputChange = (e) => {
        // const updatedChange ={
        //     ...this.state
        // }
        // updatedChange[e.target.name] = e.target.value
        this.setState({
            [e.target.name]: e.target.value,
            
          })     
      }
    handleSubmitRegister = (e) => {
        e.preventDefault();
        this.handleRegister(this.state)
        console.log('Register===>', this.state);
        // this.props.history.push('/user')
      }
    handleRegister = async (registerData) => {
        try{
          const Response = await fetch(`${process.env.REACT_APP_API}/api/v1/users`, {
            method: 'POST',
            body: JSON.stringify(registerData),
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            }
          });

          if(!Response.ok){
              throw Error(Response.statusText)
          }
          
          const parsedResponse = await Response.json();
          

          console.log("parsedResponse:==>", parsedResponse);

          const cookies = new Cookies();
          cookies.set('userId', parsedResponse.id);
          cookies.set('username', parsedResponse.username);
		  localStorage.setItem('currentUser', parsedResponse.username);
		  this.props.history.push('/user');
          
    
        }catch(err){
            console.log("error in back-end:", err)
          }
      }

    render(){
        return(
            <div>
                <Header/>

                <div style={{height: 500 + 'px'}} className="container">
                    <div className="text-center mt-4">
                        <h1>Please Register</h1>
                    </div>

                    <div className="row ">
                         <div className="col-md-8 offset-2 ">
                            <form onSubmit={this.handleSubmitRegister}>

                            <div className="form-group">
                                <input name="username"  type="username" className="form-control" onChange={this.handleInputChange} placeholder="UserName" required/>         
                            </div>

                            <div className="form-group">
                                <input name="email"  type="email" className="form-control" onChange={this.handleInputChange} placeholder="Email" required/>
                            </div> 

                            <div className="form-group">
                                <input name="password"  type="password" className="form-control" onChange={this.handleInputChange} placeholder="password" required/>
                            </div>

                            <div className="form-group">
                                <input name="verify_password"  type="password" className="form-control" onChange={this.handleInputChange} placeholder="verify_password" required/>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            </form>         
                        </div>
                    </div>
                </div>
                
                

                <Footer/>
            </div>
        )
    }
}

export default Register;