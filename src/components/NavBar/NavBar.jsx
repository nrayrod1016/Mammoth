
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
// import styles from './NavBar.module.css'
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

<main>
  <h1 class="mt-3"> </h1>
<nav class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-1 px-6 bg-white shadow sm:items-baseline w-full">
  <div class="mb-0  sm:mb-0 inner">

    <a href="/" class="text-2xl no-underline text-indigo-500 hover:text-blue-dark font-sans font-bold">Mammoth</a><br/>
    <span class="text-xs text-grey-dark">By Maste </span>
  </div>
  <div>
  {/* <SearchForm />    */}
  </div> 

  <div class="sm:mb-0 self-center ">
     <div class="h-5" > </div>
    <a href="/shops" class="text-lg no-underline text-indigo-500 hover:text-blue-dark ml-2 px-1">
      All Shops
    </a>
    <a href="/products" class="text-lg no-underline text-indigo-500 hover:text-blue-dark ml-2 px-1">
      All Products
    </a>
    
     <a  class="text-lg no-underline text-indigo-500 hover:text-blue-dark ml-2">
    
    </a>  
    {!userProfile &&
    <>
    <a href="/signup" class="text-md no-underline text-indigo-500 hover:text-blue-dark ml-2 px-1">
      Sign Up
    </a>
    <a href="/login" class="text-md no-underline text-indigo-500 hover:text-blue-dark ml-2 px-1">
      Login
    </a>
  </>
  }
  {userProfile &&
  <>
    <Link to='' onClick={handleLogout}>
    <a href="/logout" class="text-md no-underline text-indigo-500 hover:text-blue-dark ml-2 px-1">
      Signout
    </a>
    </Link>
    <a href="/checkout" class="text-md no-underline text-indigo-500 hover:text-blue-dark ml-2 px-1">
      {/* <img src={cartLogo} alt="Checkout" /> */}
    </a>
  </>
  }
    
                  {userProfile &&
                  <>
    <a href={`/profile/${userProfile?._id}`} class="text-md no-underline text-indigo-500 hover:text-blue-dark ml-2 px-1"> 
      <button type="button" class="max-w-xs bg-gray-800 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
      <span class="sr-only">Open user menu</span>
        <img class="h-10 w-10 rounded-full" src={userProfile?.avatar} alt=""/>
                  </button>
                  </a>
        </>
                  }
                  {!user &&
        <img class="h-10 w-10 rounded-full" src="https://i.imgur.com/KXmtpXB.png" alt=""/>
                  } 
    
    

  </div>
</nav>
<h1 class="mb-3"> </h1> 
</main> 
<h1 class="mb-3"> 

</h1>

</>
)
}

export default NavBar;
