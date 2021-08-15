import React from 'react';
import { Link } from 'react-router-dom'


function ShopCard ({Shop}) { 
    return ( 
<div class=" flex  flex-col  md:flex-row justify-center  flex-wrap gap-3 mt-10  ">
          <div class="pro-card">
        <div class="bg-white max-w-xs shadow-lg   mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer" >
        <div class="bg-indigo-500  flex h-200  items-center">
          {/* add logo to top center  */}
        <img src={Shop.logo} alt="shop's logo" />
        {/* <p class="ml-4 text-white uppercase">Title</p> */}
        </div>
        {Shop.name &&
          <h1 class="py-6 px-6 text-xl tracking-wide text-center">{Shop.name}</h1>
        }
        {Shop.address && 
          <p class="py-6 px-6 text-lg tracking-wide text-center">{Shop.address}</p>
        }
        {Shop.phoneNum &&
          <p class="py-6 px-6 text-lg tracking-wide text-center">{Shop.phoneNum}</p>
        }
        {Shop.email &&
          <p class="py-6 px-6 text-lg tracking-wide text-center">{Shop.email}</p>
        }
        {Shop.desc && 
          <p class="py-6 px-6 text-lg tracking-wide text-center">{Shop.desc}</p>
        }
        {Shop.tags && 
          <p class="py-6 px-6 text-lg tracking-wide text-center">{Shop.tags.map(tag => <p>{tag}</p>)}</p>
        }
        {Shop.owner && 
          <p class="py-6 px-6 text-lg tracking-wide text-center">{Shop.owner.name}</p>
        }
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
    )
}

export default ShopCard