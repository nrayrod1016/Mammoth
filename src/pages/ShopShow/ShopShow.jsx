import React, { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom'
import * as shopService from '../../services/shopService'
import ReviewForm from '../../components/ReviewForm/ReviewForm'

const ShopShow = (props) => {
  const [shop, setShop] = useState({})
  const [addReview, setAddReview] = useState(false)

  const { id } = useParams()


  useEffect(() => {
    shopService.getDetails(id)
    .then(shop => {
      setShop(shop)
    })
  }, [id, addReview])

  const handleAddReview = evt => {
    setAddReview(!addReview)
  }


  const reviewSubmit = () => {
    setAddReview(false)
  }

  
  
  let reviewAverage = null
  shop.reviews?.forEach(review => {
    reviewAverage += review.rating
  })
  reviewAverage = (reviewAverage / shop.reviews?.length).toFixed(2)

  return (
    <>
<main> 
<div class=" flex  flex-col  md:flex-row justify-center  flex-wrap gap-3 mt-10  ">
          <div class="pro-card">
        <div class="bg-white max-w-xs shadow-lg mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer" >
        <div class="bg-indigo-500  flex h-200  items-center">
          {/* add logo to top center  */}
        <img src={shop.logo} alt="shop's logo" />
        {/* <p class="ml-4 text-white uppercase">Title</p> */}
        </div>
       
          <h1 class="py-6 px-6 text-xl tracking-wide text-center">{shop.name}</h1>
          {shop.owener &&  
          <p class="py-6 px-6 text-lg tracking-wide text-center">Owned By: {shop.owner.name}</p>
        }
        {shop.reviews?.length > 0 && 
          <p class="py-6 px-6 text-lg tracking-wide text-center">Average Rating: {reviewAverage}</p>
        }
        {shop.email &&
          <p class="py-6 px-6 text-lg tracking-wide text-center">{shop.email}</p>
        }
        {shop.phoneNum &&
          <p class="py-6 px-6 text-lg tracking-wide text-center">{shop.phoneNum}</p>
        }
        {shop.address && 
          <p class="py-6 px-6 text-lg tracking-wide text-center">{shop.address}</p>
        }
        {shop.desc &&  
          <p class="py-6 px-6 text-lg tracking-wide text-center">{shop.desc}</p>
        }
  
                                {/* <!-- <hr > --> */}
        </div>
        </div>
        </div>
        {props.userProfile &&
        <div class="flex justify-center px-5 mb-2 text-sm ">
            <Link onClick={handleAddReview}>
              <button type="button" class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
              Leave a Review
              </button>
            </Link>
            </div>
        }
        {addReview && 
        <ReviewForm type="Shop" handleAddReview={handleAddReview} reviewSubmit={reviewSubmit} shop={shop} />
        }

      <div>
        <div class="grid gap-4 grid-cols-4">
        {shop.reviews?.length > 0 &&
        shop.reviews?.map(review => {
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
    <div class="mb-60"> 
  </div>

</main> 

    </>
  );
}
 
export default ShopShow;