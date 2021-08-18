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
  let reviewAverage = null
  product.reviews?.forEach(review => {
    reviewAverage += review.rating
  })
  reviewAverage = (reviewAverage / product.reviews?.length).toFixed(2)
  return (
    <>
    <div>
      <h1>{product.name} - {reviewAverage}</h1>
      <h1>${product.price}</h1>
      <h3>{product.snippet}</h3>
      <h2>Featured in {product.shop?.name} - Owned by {product.shop?.owner.name}</h2>
    </div>
    <div>
      {product.pictures?.length > 0 &&
        product.pictures.map(pic => {
          return(
            <img src={pic} alt="product pic" key={pic} />
          )
        })
      }
      {product.videos?.length > 0 &&
        product.videos.map(vid => {
          return(
            <iframe src={vid} />
          )
        })
      }
    </div>
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
    <div>
      <h1>{product.desc}</h1>
    </div>
    <div>
    {product?.reviews?.length > 0 &&
      product.reviews?.map(review => {
        return(
          <div key={review._id}>
            <h1>{review.rating}</h1>
            <h1>{review.content}</h1>
            <h1>{review.author.name}</h1>
          </div>
        )
      })
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