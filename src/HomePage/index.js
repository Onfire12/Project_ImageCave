import React, { Component  } from "react";
import HomeContainer from '../HomeContainer';
import Header from '../Header';
import Footer from '../Footer';




class HomePage extends Component{
    

    render(){
        return(
            <div>
                <Header/>

                <div>
                <HomeContainer/>
                </div>

                <Footer/>
            </div>
        )
    }
}

export default HomePage;