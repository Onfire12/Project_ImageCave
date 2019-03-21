import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import UserPostContainer from '../UserPostContainer';
import Cookies from 'universal-cookie';





class UserProfile extends Component{
    constructor(){
        super()
        this.state ={
            
            currentUser:'',
            currentUserId:'',
            
            
        }
    }

    componentDidMount(){
        const cookies = new Cookies();
        const currentUserId = cookies.get('userId');
        
        this.getCurrentUser(currentUserId);
    }

    getCurrentUser = async(userId) =>{
        try{
            // console.log('getUser',this.props.match)
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

    // LogOut=()=>{
    //     localStorage.clear();
    //     window.location.href='/';
    //   }
     LogOut = async ()=>{
        try{
            const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/login`,{
                method:'DELETE',
                credentials:'include'
            });
            if(!response.ok){
                throw Error(response.statusText);
            }
            const logoutParsed = await response.json();
            console.log("Log out parsed: ", logoutParsed);
            if(logoutParsed === 'logout successful'){
                const cookies = new Cookies();
                cookies.remove('userId');
                localStorage.clear();
                this.props.history.push('/');
            }
        }catch(err){
            return err;
        }
    }


    render(){
      
    return(
        <div>
            <Header/>
            
            <div className="container mt-5 text-center">
                <h1> {this.state.currentUser}'s Profile</h1>
                
                <Link to="/post/new"><button className="btn btn-lg btn-primary" placeholder="Create New">Create New Post</button></Link>

                <div style={{margin: 10 + 'px'}}>
                <Link to="/allpost">Click to view other's creations</Link>
                </div>

                <UserPostContainer />

           
          
            </div>
           
            <Footer/>
        </div>
        )
    }
}

export default UserProfile;