import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as authService from "../../services/authService";
// import styles from './SignupForm.module.css'


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
    <main>
    <div class="h-screen font-sans login bg-cover">
<div class="container mx-auto h-full flex flex-1 justify-center items-center">
<div class="w-full max-w-lg">
  <div class="leading-loose">
    <form class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
     autoComplete="off"
     onSubmit={handleSubmit}
     >
        <p class="text-indigo-500 font-medium text-center text-xl font-bold">Sign Up</p>
        <div >
            <label class="block text-lg text-black" htmlFor="name" 
            >
            Name
            </label>
            <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"  type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={handleChange}
            required
            ></input>
          </div>
          <div>
            <label class="block text-md text-black" htmlFor="email" 
            >
            E-mail
            </label>
            <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"  type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
            required
            ></input>
          </div>

          <div class="mt-2" >
            <label class="block  text-md text-black" htmlFor="password" >Password</label>
             <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="password"
              autoComplete="off"
              id="password"
              value={password}
              name="password"
              onChange={handleChange} 
              required>

              </input>
          </div>
          <div class="mt-2" >
            <label class="block  text-sm text-black" htmlFor="password" className="">Confirm Password</label>
             <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="password"
              autoComplete="off"
              id="password"
              value={passwordConf}
              name="passwordConf"
              onChange={handleChange} 
              required>

              </input>
          </div>

          <div class="mt-4 items-center flex justify-between">
            <button class="px-4 py-1 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-200 rounded"
             >
               Sign up
               </button>
            <Link to="/">
              <button class="px-4 py-1 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-200 rounded">Cancel</button>
            </Link>
           
          </div>
          

    </form>

  </div>
</div>
</div>
</div>
  </main>
  );
}
 
export default SignupForm;
