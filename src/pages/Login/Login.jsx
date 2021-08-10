import React, { Component } from "react";
import LoginForm from '../../components/LoginForm/LoginForm'
import "./Login.css";

class LoginPage extends Component {
  render() {
    return (
      <main>
        <h1>Log In</h1>
        <LoginForm history={this.props.history} handleSignupOrLogin={this.props.handleSignupOrLogin}/>
      </main>
    )
  }
}

export default LoginPage
