import React, {Fragment} from 'react';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Users from './components/users/Users';
import User from './components/users/User';
import Navbar from './components/Layout/Navbar';
import Search from './components/users/Search';
import Alert from './components/Layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/githubState';
import AlertState from './context/alert/AlertState';
import './App.css';


const App = () =>  {
 
    return (
      <GithubState>
        <AlertState>
      <Router>
      <div className ='App'>
        <Navbar/>
        <div className ='container'>
          <Alert/>
          <Switch>
            <Route path exact='/' render={props =>(
              <Fragment>
                <Search/>
                <Users/>
              </Fragment>
            )}/>
            <Route exact path ='/about' component={About} />
            <Route exact path ='/user/:login' component ={User} />
          </Switch>
          
        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  }  

export default App;
