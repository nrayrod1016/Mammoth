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
    <Link onClick={handleAddReview}>Leave a Review!</Link>
    {addReview &&
    <ReviewForm type="Product" product={product} reviewSubmit={reviewSubmit} />
    }
    </>
  );
}
 
export default ProductShow;