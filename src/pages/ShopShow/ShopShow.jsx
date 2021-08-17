import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
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
  }, [id])

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
    <div>
      <div>
        <h1>{shop.name}</h1>
        {shop.owner && 
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
        <img src={shop.logo} alt={`${shop.name}'s logo`} />
        {shop.desc && 
          <p class="py-6 px-6 text-lg tracking-wide text-center">{shop.desc}</p>
        }
      </div>

    <Link onClick={handleAddReview}>Leave a Review</Link>
    <div>
      {shop.reviews?.length > 0 &&
      shop.reviews?.map(review => {
        return(
          <div key={review._id}>
            <h1>{review.rating}</h1>
            <h1>{review.content}</h1>
            <h1>{review.author.name}</h1>
          </div>
        )
      })}
    </div>
    {addReview &&
    <ReviewForm type="Shop" reviewSubmit={reviewSubmit} shop={shop} />
  }
   </div>
   <div class="mb-60"> 

   </div>
    </>
  );
}
 
export default ShopShow;