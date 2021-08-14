import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import * as authService from '../../services/authService'
import * as profileAPI from '../../services/profileService'
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Home from '../../pages/Home/Home'
import ShopIndex from "../ShopIndex/ShopIndex";

const App = ({ history }) => {
  const [user, setUser] = useState(authService.getUser())
  const [userProfile, setUserProfile] = useState(null)
  
  const handleLogout = () => {
    authService.logout();
    setUser(null);
    setUserProfile(null)
    history.push("/");
  }

  const handleSignupOrLogin = async() => {
    const user = await authService.getUser()
    setUser(user)
    const userProfile = await profileAPI.getUserProfile()
    setUserProfile(userProfile)
  };

  useEffect(() => {
      profileAPI.getUserProfile()
      .then(userProfile => {
        console.log(userProfile)
        setUserProfile(userProfile)
      })
  }, [user])
  return (
          <>
        <NavBar user={user} handleLogout={handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <Route 
              exact path='/'
              >
                <Home /> 
              </Route>
              <Route 
              exact path='/shop'
              >
              <ShopIndex /> 
              </Route>


            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />
      </>
  );
}
 
export default App;
