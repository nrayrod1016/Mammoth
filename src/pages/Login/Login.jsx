import React, { Component } from "react";
import LoginForm from '../../components/LoginForm/LoginForm'
import "./Login.css";


const Login = (props) => {
  return (
    <main>
    <h1>Log In</h1>
    <LoginForm handleSignupOrLogin={props.handleSignupOrLogin}/>
  </main>
  );
}
 
export default Login;
