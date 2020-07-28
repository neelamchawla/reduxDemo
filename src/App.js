import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
//Match was used in older version, Now Route is used
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import './App.css';

import Home from './Home';
// import GamesPage from './component/GamesPage';
// import GamesForm from './component/GamesForm';
import { HelloWorld } from './Demo/Demo';
import Todolist from './TodoList/Todolist';
import Dashboard from './Dashboard.js/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container">
          <div className="ui four item menu">
            <NavLink className="item" activeclassname = "active" activeonlywhenexact="true" exact to="/">Home</NavLink>
            <NavLink className="item" activeclassname = "active" activeonlywhenexact="true" exact to="/dashboard">Dashboard</NavLink>
            <NavLink className="item" activeclassname = "active" activeonlywhenexact="true" exact to="/todolist">Todolist</NavLink>
            <NavLink className="item" activeclassname = "active" activeonlywhenexact="true" exact to="/demo">Demo</NavLink>
            {/* <NavLink className="item" activeclassname = "active" activeonlywhenexact="true" exact to="/games">Games</NavLink>
            <NavLink className="item" activeclassname = "active" activeonlywhenexact="true" exact to="/games/new">New Games</NavLink> */}
          </div>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/todolist" component={Todolist} />
          <Route path="/demo" component={HelloWorld} />
          {/* <Route exact path="/games" component={GamesPage} />
          <Route path="/games/new" component={GamesForm} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


// Menu.item will not change the automatically until you set props active=true and true value should be depend on current router url.


// <Route path="/500" component={GamesPage} /> 
// Match -> pattern, Route -> path 


// <Menu stackable>
//   <Menu.Item active={this.isActive('/')} as={NavLink} exact to='/' content='Home' />
//   <Menu.Item active={this.isActive('/abc')} as={NavLink} exact to='/abc' content='ABC' />
//   <Menu.Item active={this.isActive('/def')} as={NavLink} exact to='/def' content='DEF' />
// </Menu>

// before:  <Link className="item" to="/games/new">New Games</Link>
//after:    <NavLink className="item" activeclassname = "active" activeonlywhenexact="true" exact to="/games/new">New Games</NavLink>

