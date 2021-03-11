import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/register';

export default class App extends Component{
  render(){
    return(
      <Router>
        {/* <Home /> */}
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/" exact component={Register}/>
        </Switch>
      </Router>
    )
  }
}