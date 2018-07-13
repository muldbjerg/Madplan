import React, { Component } from 'react';
import LoginView from './LoginView.js';
import { withRouter } from "react-router";
import app from "../base";


class Login extends Component {
  handleLogin = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div id="login">
        <LoginView onSubmit={this.handleLogin} />
      </div>
    );
  }
}

export default withRouter(Login);
