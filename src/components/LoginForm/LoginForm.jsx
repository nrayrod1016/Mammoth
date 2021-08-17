import React, { Component, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'

const LoginForm = (props) => {
  const [formData, setFormData] = useState({ email: "", pw: ""})
  const history = useHistory()
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = async evt => {
    const { handleSignupOrLogin } = props
    evt.preventDefault()
    try {
      await authService.login(formData);
      handleSignupOrLogin()
      history.push("/")
    } catch (err) {
        alert('Invalid Credentials')
    }
  }

  const { email, pw } = formData
  return (


    <div class="h-screen font-sans login bg-cover">
    <div class="container mx-auto h-full flex flex-1 justify-center items-center">
        <div class="w-full max-w-lg">
          <div class="leading-loose">
            <form class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
             autoComplete="off"
             onSubmit={handleSubmit}
             className={styles.container}
             >
                <p class="text-indigo-500 font-medium text-center text-lg font-bold">LOGIN</p>
                  <div className={styles.inputContainer}>
                    <label class="block text-md text-indigo-500" htmlFor="email" className={styles.label}
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
    
                  <div class="mt-2" className={styles.inputContainer}>
                    <label class="block text-indigo-500 text-sm text-indigo" htmlFor="password" className={styles.label}>Password</label>
                     <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                      type="password"
                      autoComplete="off"
                      id="password"
                      value={pw}
                      name="pw"
                      onChange={handleChange} 
                      required>
    
                      </input>
                  </div>
    
                  <div class="mt-4 items-center flex justify-between">
                    <button class="px-4 py-1 text-white text-bold font-light tracking-wider bg-indigo-500 hover:bg-gray-300 rounded"
                     className={styles.button}
                     >
                       Sign In
                       </button>
                    
                  </div>
                  <div class="text-center">
                    <a class="inline-block right-0 align-baseline font-light text-md text-500 hover:text-red-400" href='/signup'>
                        Create an Account 
                    </a><br/>
                    {/* <a class="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-indigo-500"
                      href="#">Forgot Your Password?</a> */}
                  </div>
    
            </form>
    
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default LoginForm;