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
  }, [id])

  const handleAddReview = evt => {
    setAddReview(!addReview)
  }

  const reviewSubmit = () => {
    setAddReview(false)
  }

  return (
    <>
    <div>
    {!props.userProfile?.cart.some(item => item?._id === product._id) &&
    <button onClick={() =>props.handleAddToCart(product._id)}>Add to Cart</button>
    }
    {props.userProfile?.cart.some(item => item?._id === product._id) &&
    <button onClick={() => props.handleRemoveFromCart(product._id)}>Remove From Cart</button>
    }
    {!props.userProfile?.wishlist.some(item => item?._id === product._id) &&
    <button onClick={() => props.handleAddToWishlist(product._id)}>Add to Wishlist</button>
    }
    {props.userProfile?.wishlist.some(item => item?._id === product._id) &&
    <button onClick={() => props.handleRemoveFromWishlist(product._id)}>Remove From Wishlist</button>
    }
    </div>
    <Link onClick={handleAddReview}>Leave a Review!</Link>
    {addReview &&
    <ReviewForm type="Product" product={product} reviewSubmit={reviewSubmit} />
    }
    </>
  );
}
 
export default ProductShow;