import React from 'react'
import { Link } from 'react-router-dom'
// will change 2nd product name to a 
const ProductCard = ({Product}) => { 
  let reviewAverage = null
  Product.reviews?.forEach(review => {
    reviewAverage += review.rating
  })
  reviewAverage = (reviewAverage / Product.reviews?.length).toFixed(2)
    return ( 
       
<div class=" flex md:flex-row justify-center  flex-wrap gap-3 mt-10  ">
          <div class="pro-card">
        <div class="bg-white max-w-xs shadow-lg   mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer" >
        <div class="bg-indigo-500  flex h-200  items-center">
          {/* add logo to top center  */}
      
        {/* <p class="ml-4 text-white uppercase">Title</p> */}
        </div>
        {Product.name &&
          <h1 class="py-6 px-6 text-xl tracking-wide text-center">{Product.name}</h1>
        }
        {Product.address && 
          <p class="py-6 px-6 text-lg tracking-wide text-center">{Product.desc}</p>
        }
        {Product.price &&
          <p class="py-6 px-6 text-lg tracking-wide text-center">{Product.price}</p>
        }
        {Product.email &&
          <p class="py-6 px-6 text-lg tracking-wide text-center">{Product.pictures}</p>
        }
        {Product.reviews.length > 0 && 
          <p class="py-6 px-6 text-lg tracking-wide text-center">Average Rating: {reviewAverage}</p>
        }
        
                                {/* <!-- <hr > --> */}
            <Link to={`/products/${Product._id}`}>
            <div class="flex justify-center px-5 mb-2 text-sm ">
              <button type="button" class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline">
                    Product Page
              </button>
            </div>
</Link>
        </div>
        </div>
        </div> 
        
    )
}

export default ProductCard 

