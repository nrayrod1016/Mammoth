import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import * as productService from '../../services/productService'
import ReviewForm from '../../components/ReviewForm/ReviewForm'

const ProductShow = (props) => {

  const [product, setProduct] = useState({})
  const [addReview, setAddReview] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    productService.getDetails(id)
    .then(product => {
      setProduct(product)
    })
  }, [id, addReview])

  const handleAddReview = evt => {
    setAddReview(!addReview)
  }

  const reviewSubmit = () => {
    setAddReview(false)
  }
  let reviewAverage = null
  product.reviews?.forEach(review => {
    reviewAverage += review.rating
  })
  reviewAverage = (reviewAverage / product.reviews?.length).toFixed(2)
  return (
    <>
    <h1 class="text-3xl md:text-5xl p-2 text-indigo-500 tracking-loose text-center">{product.shop?.name}'s Content Page </h1>
   <div class=" flex md:flex-row justify-center mt-20 mb-20  flex-wrap gap-3  ">
          <div class="pro-card">
        <div class="bg-white max-w-lg shadow-lg   mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer" >
        <div class="bg-indigo-500  flex h-200  items-center">
        </div>
          <h1 class="py-6 px-6 text-xl tracking-wide text-center">{product.name} - {reviewAverage}</h1>
          <p class="py-6 px-6 text-lg tracking-wide text-center">{product.price}</p>
          <p class="py-6 px-6 text-lg tracking-wide text-center">{product.snippet}</p>
          <p class="py-6 px-6 text-lg tracking-wide text-center">Featured in {product.shop?.name} - Owned by {product.shop?.owner.name}</p>
        </div>
        </div>
        </div> 
        <h1 class=" text-indigo-500 text-xl rounded-md px-4 py-2 m-2 text-center "> Pictures Section</h1>
        <div class=" underline w-screen-100%"> </div>
      <div class="grid gap-5 grid-cols-5">
    <div class=" ">
      {product.pictures?.length > 0 &&
        product.pictures.map(pic => {
          return(
            <div class="ml-5 "> 
            <img src={pic} alt="product pic" key={pic} />
            </div> 
          )
        })
      }
      </div> 


      {product.videos?.length > 0 &&
        product.videos.map(vid => {
          return(
            <iframe src={vid} />
            )
          })
        }
    </div>
    {props.userProfile &&
    <div class="text-center ">
    {!props.userProfile?.cart.some(item => item?._id === product._id) &&
    <button type="button" class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 mt-5 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline" onClick={() => props.handleAddToCart(product._id)}>Add to Cart</button>
    }
    {props.userProfile?.cart.some(item => item?._id === product._id) &&
    <button type="button" class="border border-red-500 text-red-500 rounded-md px-4 py-2 mt-5 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={() => props.handleRemoveFromCart(product._id)}>Remove From Cart</button>
    }
    {!props.userProfile?.wishlist.some(item => item?._id === product._id) &&
    <button type="button" class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 mt-5 ml-5  transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline" onClick={() => props.handleAddToWishlist(product._id)}>Add to Wishlist</button>
    }
    {props.userProfile?.wishlist.some(item => item?._id === product._id) &&
    <button type="button" class="border border-red-500 text-red-500 rounded-md px-4 py-2 mt-5 ml-5 text-center transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={() => props.handleRemoveFromWishlist(product._id)}>Remove From Wishlist</button>
    }
    </div>
    }
    <div>
      <h1>{product.desc}</h1>
    </div>
    <div>
    <div class="grid gap-5 grid-cols-3">
    {product?.reviews?.length > 0 &&
      product.reviews?.map(review => {
        return(
          <div key={review._id} class=" bg-gray-100 space-y-12 py-10">
          <div class="container mx-auto">
            <div class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
              <div class="h-20 bg-indigo-500 flex items-center justify-between" 
              key={review._id}>
                <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">{review.rating}</h1>
                <p class="mr-20 text-white text-lg"></p>
                <p class="mr-4 text-white font-thin text-lg">{review.author.name}</p>
              </div>
      
              <p class="py-6 text-lg tracking-wide ml-16">{review.content}</p>
              
              <div class="flex justify-between px-5 mb-2 text-sm text-gray-600">
                
                <p>3/08/2021</p>
              </div>
            </div>
          </div>
        </div>
                )
              })}
              </div>
            </div>
    {props.userProfile &&
    <>
    <div>
    <Link onClick={handleAddReview}><button type="button" class="border border-indigo-500 text-indigo-500  rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Leave a Review!</button></Link>
    </div>
    </>
    }
    {addReview && 
    <ReviewForm type="Product" handleAddReview={handleAddReview} product={product} reviewSubmit={reviewSubmit} />
    }
    
    </>
  );
}
 
export default ProductShow;