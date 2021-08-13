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
import Home from "../Home/Home"
import UpdateProfile from "../UpdateProfile/UpdateProfile"
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

const App = (props) => {
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
            <Home />
          )}
        /> 
        <Route
        exact
        path="/products"
        render={() => {
          <ProductIndex />
        }}
        />
        <Route
        exact
        path="/shops"
        render={() => {
          <ShopIndex />
        }}
        />
        <Route
        exact
        path="/shops/:id"
        render={() => {
          <ShopShow />
        }}
        />
        <Route
        exact
        path="/shops/:id/manage"
        render={() => {
          <ShopManager />
        }}
        />
        <Route
        exact
        path="/shops/:id/manage/update"
        render={() => {
          <UpdateShop />
        }}
        />
        <Route
        exact
        path="/shops/manage/products/:productid"
        render={() => {
          <UpdateProduct />
        }}
        />
        <Route
        exact
        path="/shops/:id/manage/products/new"
        render={() => {
          <AddProduct />
        }}
        />
        <Route
        exact
        path="/products/:id"
        render={() => {
          <ProductShow />
        }}
        />
        <Route 
        exact
        path="/profile/:id"
        render={() => {
          <Profile />
        }}
        />
        <Route 
        exact
        path="/profile/:id/update"
        render={() => {
          <UpdateProfile />
        }}
        />
        <Route 
        exact
        path="/checkout"
        render={() => {
          <Checkout />
        }}
        />
        <Route 
        exact
        path="/search/:query/results"
        render={() => {
          <SearchResults />
        }}
        />
        <Route
          exact
          path="/signup"
          render={() => (
            !user ?
            <Signup
              handleSignupOrLogin={handleSignupOrLogin}
            />
            :
            <Redirect to="/" />
          )}
        />
        <Route
          exact
          path="/login"
          render={() => (
            !user ?
            <Login
              handleSignupOrLogin={handleSignupOrLogin}
            />
            : 
            <Redirect to="/" />
          )}
        />
        <Footer />
    </>
  );
}
 
export default App;
