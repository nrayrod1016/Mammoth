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

  return (
    <>
    <Link onClick={handleAddReview}>Leave a Review</Link>
    {addReview &&
    <ReviewForm type="Shop" reviewSubmit={reviewSubmit} shop={shop} />
    }
    </>
  );
}
 
export default ShopShow;