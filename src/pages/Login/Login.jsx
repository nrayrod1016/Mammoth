import React, { Component } from "react";
import LoginForm from '../../components/LoginForm/LoginForm'
import "./Login.css";


const Login = (props) => {
  return (
    <main>
    <LoginForm handleSignupOrLogin={props.handleSignupOrLogin}/>
  </main>
  );
}
 
export default Login;
