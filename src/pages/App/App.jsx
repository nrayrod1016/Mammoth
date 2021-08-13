import React, { useState, useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import "./App.css";

//services
import * as authService from '../../services/authService'
import * as profileAPI from '../../services/profileService'

//compontents
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer"

// pages
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import AddProduct from "../AddProduct/AddProduct"
import ProductIndex from "../ProductIndex/ProductIndex"
import Checkout from "../Checkout/Checkout"
import ProductShow from "../ProductShow/ProductShow"
import Profile from "../Profile/Profile"
import SearchResults from "../SearchResults/SearchResults"
import ShopIndex from "../ShopIndex/ShopIndex"
import ShopManager from "../ShopManager/ShopManager"
import ShopShow from "../ShopShow/ShopShow"
import UpdateProduct from "../UpdateProduct/UpdateProduct"
import UpdateShop from "../UpdateShop/UpdateShop"

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [userProfile, setUserProfile] = useState(null)
  const history = useHistory()
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
              <h1>Welcome. This is an authorization template.</h1>
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
