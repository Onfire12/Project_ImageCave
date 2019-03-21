import React,{ Component} from "react";
import Cookies from 'universal-cookie';

class Header extends Component{
    constructor(){
        super()
        this.state={
            username:''
        }
    }
    componentDidMount() {
		const currentUserName = localStorage.getItem('currentUser');
		// console.log('USERNAME = ', userName);
		this.setState({
			username: currentUserName
		});
    }
    
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
                <header className="mb-5">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-5 ">
                
                <a className="navbar-brand" href="/"><span><i className="fas fa-igloo"></i></span> Cave</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto ">
                           {this.state.username ?
                            <li className="nav-item active">
                                <a className="nav-link" href="/user">Hello {this.state.username}</a>
                            </li> 
                            :null
                           }                   
                            <li className="nav-item">
                                <a className="nav-link" href="/allpost">view All</a>
                            </li>
                            
                            
                    </ul>

                    <a className="btn btn-outline-success my-2 my-sm-0" href="/" onClick={this.LogOut}>Log Out</a>


                </div>


                </nav>
                </header>
            </div>
            
        )
      }
    
}

export default Header;