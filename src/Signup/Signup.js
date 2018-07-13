import React, { Component } from 'react';
import SignupView from './SignupView.js';
import { withRouter } from "react-router";
import app from "../base.js";


class Signup extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    
    return (
      <div id="signup">
        <SignupView onSubmit={this.handleSignUp} />
      </div>
    );
  }
}

export default withRouter(Signup);
