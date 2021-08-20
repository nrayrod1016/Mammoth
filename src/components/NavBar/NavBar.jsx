
import React, { useState, useEffect } from 'react';
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { GiElephantHead} from "react-icons/gi";
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

<header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
{/*   
  <!-- Logo text or image --> */}
  <div class="flex items-center justify-between mb-4 md:mb-0">
    <h1 class="leading-none text-2xl text-indigo-500">
      <a class="no-underline text-grey-darkest hover:text-black" href="/">
        <GiElephantHead class=" -mb-10 h-14 w-14 text-indigo-500 "  /> </a><br/>
    
     
    </h1>

    <a class="text-black hover:text-orange md:hidden" href="#">
      <i class="fa fa-2x fa-bars"></i>
    </a>
  </div>
  {/* <!-- END Logo text or image --> */}
  
  {/* <!-- Search field --> */}
  <div class=" ml-10">
  <SearchForm />
  </div>    
  {/* <!-- END Search field --> */}
  
  {/* <!-- Global navigation --> */}
  <nav>
    <ul class="list-reset md:flex md:items-center">
      <li class="md:ml-4">
        <a class="block no-underline hover:underline py-2 text-indigo-500 hover:text-indigo-500 md:border-none md:p-0" href="/shops">
        All Shops
        </a>
      </li>
      <li class="md:ml-4">
        <a class="block no-underline hover:underline py-2 text-indigo-500 hover:text-black md:border-none md:p-0" href="/products">
       All Products
        </a>
      </li>


{!userProfile &&
      <>
      <li class="md:ml-4">
        <a class="block no-underline hover:underline py-2 text-indigo-500 hover:text-black md:border-none md:p-0" href="/signup">
        Sign Up
        </a>
      </li>
      <li class="md:ml-4">
        <a class="border-t block no-underline hover:underline py-2 text-indigo-500 hover:text-black md:border-none md:p-0" href="/login">
            Login
        </a>
      </li>
      </> 
}
      {userProfile &&
      <>
      <li class="md:ml-4">
      <Link to='' onClick={handleLogout}>
        <a class="border-t block no-underline hover:underline py-2 text-indigo-500 hover:text-black md:border-none md:p-0" 
        href="/signout">
          Signout
        </a>
        </Link>
      </li>
          
          
      <li class="md:ml-4">   
        <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" 
        href="/checkout">
          <AiOutlineShoppingCart class="  h-8 w-10 "  />
        </a>
      </li>
      </>
        }
       {userProfile &&
       <>
          <li class="md:ml-4">
        <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href={`/profile/${userProfile?._id}`}>
        <AiOutlineUser class="h-8 w-10 bg-white text-indigo-500" />
        </a>
      </li>
      </>
       }
    </ul>
    
    
    
  </nav>
  {/* <!-- END Global navigation --> */}

</header>
<h1 class="mb-3"> 

</h1>

</>
)
}

export default NavBar;
