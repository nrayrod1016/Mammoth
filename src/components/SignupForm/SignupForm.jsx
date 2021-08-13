import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as authService from "../../services/authService";
import styles from './SignupForm.module.css'


const SignupForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  })
  const history = useHistory()
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }
  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      await authService.signup(formData);
      props.handleSignupOrLogin()
      history.push("/");
    } catch (err) {
      alert(err)
    }
  }

  const isFormInvalid = () => {
    return !(name && email && password === passwordConf && password && passwordConf)
  }

  const { name, email, passwordConf, password} = formData
  return (
    <div>
        <h3>Sign Up</h3>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
          <label htmlFor="confirm">Confirm Password</label>
          <button disabled={isFormInvalid()}>Sign Up</button>
          &nbsp;&nbsp;
          <Link to="/">Cancel</Link>
        </form>
      </div>
  );
}
 
export default SignupForm;
