import React, { Component } from 'react';
import firebase from "firebase";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from "./Home.js";
import Login from "./Login.js";
import Signup from "./Signup.js";

import Foodplan from './Foodplan.js';
import Navigation from './Navigation.js';
import './App.css';

let imgUrl = 'images/summer.jpg';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
