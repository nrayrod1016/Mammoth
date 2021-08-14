import React from 'react';
import { Link } from "react-router-dom";
// import styles from './NavBar.module.css'
// import NavBar from './index.css'
import SearchForm from '../SearchForm/SearchForm'

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
  <div> 
  <ul class="flex">
  <li class="mr-6">
    <a class="text-red-500 hover:text-blue-800" href="/">Home</a>
  </li>
  <li class="mr-6">
    <a class="text-blue-500 hover:text-red-800" href="/shops">Shops</a>
  </li>
  <li class="mr-6">
    <a class="text-red-500 hover:text-blue-800" href="/products">Products</a>
  </li>
  <li class="mr-6">
    <a class="text-blue-500 hover:text-red-800" href="/signup">Signup</a>
  </li>
  <li class="mr-6">
  <Link to='' onClick={handleLogout}>LOG OUT</Link>
    <a class="text-blue-500 hover:text-blue-800" href="/login">Login</a>
  </li>
  <li class="mr-6">
  <button><Link to={`/profile/${user.profile}`} >Profile</Link></button>

    <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
  </li>
</ul>
<SearchForm /> 
</div>
    {/* <!-- component --> */}

      {/* {user ?
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li className="nav-link">Welcome, {user.name}</li>
              <Link to='' onClick={handleLogout}>LOG OUT</Link>
            </ul>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li><Link to="/login" className="nav-link">Log In</Link></li>
              <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
              <li><Link to="/Shop" className="nav-link">Sign Up</Link></li>
              <li><Link to="/Product" className="nav-link">Sign Up</Link></li>
              <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
            </ul>
          </div>
        </nav>
      } */}
    </>
  )
}

export default NavBar;
