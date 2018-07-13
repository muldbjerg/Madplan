import React, { Component } from 'react';
import firebase from "firebase";
import { BrowserRouter as Router, Route } from "react-router-dom";
import app from "./base";
import Home from "./Home.js";
import Login from "./Login/Login.js";
import Signup from "./Signup/Signup.js";
import PrivateRoute from "./PrivateRoute.js";
import './App.css';

let imgUrl = 'images/summer.jpg';

class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }

    return (
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} authenticated={this.state.authenticated}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
