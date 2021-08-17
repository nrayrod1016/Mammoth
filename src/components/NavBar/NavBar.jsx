
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import styles from './NavBar.module.css'
// import NavBar from './index.css'
import SearchForm from '../SearchForm/SearchForm'


const NavBar = ({ user, handleLogout, userProfile }) => {
  const history = useHistory()
  const [query, setQuery] = useState("")


  const handleSubmit = (evt) => {
    evt.preventDefault()
    history.push(`/search/${query}/results`)
    setQuery("")
  }

    return (
<>


<div class="bg-white"> 

    <nav class="flex px-5 border-b md:shadow-lg items-center relative">
        <div class="text-lg text-indigo-500 font-bold md:py-0 py-4"  >
          <a href="/" > 
            Mammoth </a> 
        </div>
        <SearchForm /> 
        <ul class="text-indigo-500 font-bold md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
            <li>
                <a href="/" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="/shops" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                    <span>All Shops</span>
                </a>

                <a href="/products" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                    <span>All Products</span>
                </a>

                <a href={`/profile/${userProfile?._id}`} class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                    <span>My Profile</span>
                </a>

                <a href='/signup' class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                    <span>Signup</span>
                </a>
                <a href='/login' class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                    <span>Login</span>
                </a>
                <li>
                    <a href="/checkout" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                        <span>Checkout</span>
                    </a>
                </li>
                <Link to='' onClick={handleLogout}>
                <a  href="/logout" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                    <span>Sign Out</span>
                </a>
                </Link>
            </li>


            <li class="relative parent">
                <a href="#" class="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2">

                  {/* added  */}
                <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  {user &&
                  <img class="h-10 w-10 rounded-full" src={userProfile?.avatar} alt=""></img>
                  }
                  {!user &&
                  <img class="h-10 w-10 rounded-full" src="https://i.imgur.com/KXmtpXB.png" alt=""/>
                  } 
                </button>
                {/* added ^^^ */}
                    
                </a>

            </li>
          
        </ul>
        <div class="ml-auto md:hidden text-gray-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </div>
    </nav>
</div>





</>
)
}

export default NavBar;
