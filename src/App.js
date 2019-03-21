import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import HomePage from './HomePage';
import CreateContainer from './CreateContainer';
import EditContainer from './EditContainer';
import ShowContainer from './ShowContainer';
import Register from './Register';
import Login from './Login';
import UserProfile from './UserProfile';
import ShowAllPost from './ShowAllPost';


import GoogleMapContainer from './GoogleMapContainer';

import { Route, Switch } from 'react-router-dom';




const My404 = ()=>{
  return(
    <div>
      You are LOST!
    </div>
  )
}


class App extends Component {
  render() {
    return ( 
       <main>       
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register}/>
          <Route exact path="/allpost" component={ ShowAllPost } />
          <Route exact path="/user" component={ UserProfile } />
          
          
          <Route exact path='/googlemap' component={ GoogleMapContainer}/>
          <Route exact path="/post/new" component={ CreateContainer } />
          <Route exact path="/:id" component={ ShowContainer } /> 
          <Route exact path="/:id/edit" component={ EditContainer } />
         
          
        
          <Route component={My404} />
        </Switch>    
      </main>
      
      
    );
  }
}

export default App;
