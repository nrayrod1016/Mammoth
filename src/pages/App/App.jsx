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
import AddShop from "../AddShop/AddShop"
import ProductShow from "../ProductShow/ProductShow"
import Profile from "../Profile/Profile"
import SearchResults from "../SearchResults/SearchResults"
import ShopIndex from "../ShopIndex/ShopIndex"
import ShopManager from "../ShopManager/ShopManager"
import ShopShow from "../ShopShow/ShopShow"
import UpdateProduct from "../UpdateProduct/UpdateProduct"
import UpdateShop from "../UpdateShop/UpdateShop"
import CustomErrorPageComponent from '../ErrorPage/ErrorPage'


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

  const handleUpdateProfile = (profileData) => {
    profileAPI.updateProfile(profileData)
    .then(newProfile => {
      setUserProfile(newProfile)
    })
  }

  const handleSignupOrLogin = async() => {
    const user = await authService.getUser()
    setUser(user)
    const userProfile = await profileAPI.getUserProfile()
    setUserProfile(userProfile)
  };

  const handleAddToWishlist = (productid) => {
    profileAPI.addToWishlist(productid)
    .then(profile => {
      setUserProfile(profile)
    })
  }

  const handleAddToCart = (productid) => {
    profileAPI.addToCart(productid)
    .then(data => {
      setUserProfile(data.profile)
    })
  }

  const handleRemoveFromCart = (productid) => {
    profileAPI.removeFromCart(productid)
    .then(data => {
      setUserProfile(data.profile)
    })
  }

  const handleRemoveFromWishlist = (productid) => {
    profileAPI.removeFromWishlist(productid)
    .then(profile => {
      setUserProfile(profile)
    })
  }

  const handleCheckout = (formData) => {
    profileAPI.newOrder(formData)
    .then(data => {
      setUserProfile(data)
      history.push('/')
    })
  }

  const removeOrderFromHistory = (id) => {
    profileAPI.removeOrderFromHistory(id)
    .then(profile => {
      setUserProfile(profile)
    })
  }

  useEffect(() => {
      profileAPI.getUserProfile()
      .then(userProfile => {
        setUserProfile(userProfile)
      })
  }, [user])
  return (
    <>
        <NavBar user={user} handleLogout={handleLogout} userProfile={userProfile} />
        <Route
          exact
          path="/"
          render={() => (
            <Home userProfile={userProfile}/>
          )}
        /> 
        <Route 
        exact
        path="/search/:query/results"
        render={() => 
          <SearchResults />
        }
        />
        <Route
        exact
        path="/products"
        render={() => 
          <ProductIndex />
        }
        />
        <Route 
        exact
        path="/shops/create/new"
        render={() => (
          user ?
          <AddShop userProfile={userProfile} />
          :
          <Redirect to="/" />
        )}
        />
        <Route
        exact
        path="/shops"
        render={() => 
          <ShopIndex />
        }
        />
        <Route
        exact
        path="/shops/:id/manage"
        render={() => (
          user ?
          <ShopManager userProfile={userProfile} />
          :
          <Redirect to="/" />
        )}
        />
        <Route
        exact
        path="/shops/:id/manage/update"
        render={() => (
          user ?
          <UpdateShop userProfile={userProfile} />
          :
          <Redirect to="/" />
        )}
        />
        <Route
        exact
        path="/shops/manage/products/:productid"
        render={() => (
          user ?
          <UpdateProduct userProfile={userProfile} />
          :
          <Redirect to="/" />
        )}
        />
        <Route
        exact
        path="/shops/:id/manage/products/new"
        render={() => (
          user ?
          <AddProduct userProfile={userProfile} />
          :
          <Redirect to="/" />
        )}
        />
        <Route
        exact
        path="/products/:id"
        render={() => 
          <ProductShow 
          userProfile={userProfile} 
          handleAddToCart={handleAddToCart}
          handleAddToWishlist={handleAddToWishlist}
          handleRemoveFromCart={handleRemoveFromCart}
          handleRemoveFromWishlist={handleRemoveFromWishlist}
          />
        }
        />
        <Route
        exact
        path="/shops/:id"
        render={() => 
          <ShopShow userProfile={userProfile} />
        }
        />
        <Route 
        exact
        path="/profile/:id"
        render={() => (
          user ?
          <Profile userProfile={userProfile} removeOrderFromHistory={removeOrderFromHistory} />
          :
          <Redirect to="/" />
        )}
        />
        <Route 
        exact
        path="/profile/:id/update"
        render={() => (
          user ?
          <UpdateProfile userProfile={userProfile} handleUpdateProfile={handleUpdateProfile} />
          :
          <Redirect to="/" />
        )}
        />
        <Route 
        exact
        path="/checkout"
        render={() => (
          user ?
          <Checkout userProfile={userProfile} handleCheckout={handleCheckout} />
          :
          <Redirect to='/' />
        )}
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
        <Route path="/test" render={()=>
          <CustomErrorPageComponent />
        }/>
        <h1 class="m-1"> </h1>
        <Footer />
    </>
  );
}
 
export default App;