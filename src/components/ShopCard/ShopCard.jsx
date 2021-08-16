import React from 'react';
import { Link } from 'react-router-dom'


function ShopCard ({Shop}) { 
    return ( 
<div class=" flex  flex-col  md:flex-row justify-center  flex-wrap gap-3 mt-10  ">
          <div class="pro-card">
        <div class="bg-white max-w-xs shadow-lg   mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer" >
        <div class="bg-indigo-500  flex h-20  items-center">
        <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">{Shop.name}</h1>
        {/* <p class="ml-4 text-white uppercase">Title</p> */}
        </div>
          <p class="py-6 px-6 text-lg tracking-wide text-center">{Shop.address}</p>
          <p class="py-6 px-6 text-lg tracking-wide text-center">{Shop.phoneNum}</p>
          <p class="py-6 px-6 text-lg tracking-wide text-center">{Shop.email}</p>
          <p class="py-6 px-6 text-lg tracking-wide text-center">{Shop.desc}</p>
          <p class="py-6 px-6 text-lg tracking-wide text-center">{Shop.tags}</p>
          <p class="py-6 px-6 text-lg tracking-wide text-center">{Shop.owner.name}</p>
                                {/* <!-- <hr > --> */}
<Link to={`/shops/${Shop._id}`}>
            <div class="flex justify-center px-5 mb-2 text-sm ">
              <button type="button" class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline">
                    Shop Page
              </button>
            </div>
</Link>
        </div>
        </div>
        </div>

    /* //   <Link to={`/shops/${Shop._id}`}>
    //   <div className="card">
    //   <div className="card-body">
    //     <img src={Shop.logo} alt={`${Shop.name}'s Logo`}/>
    //     <h2 className="card-text">{Shop.name}</h2>
    //     <p className="card-text">{Shop.address}</p>
    //     <p className="card-text">{Shop.phoneNum}</p>
    //     <p className="card-text">{Shop.email}</p>
    //     <p className="card-text">{Shop.desc}</p>
    //     <p className="card-text">{Shop.tags}</p>
    //     <p className="card-text">{Shop.owner.name}</p>
    //   </div>
    //   <div className="card-footer">
       
    //   </div>
    // </div>
    //   </Link> */
    )
}

export default ShopCard