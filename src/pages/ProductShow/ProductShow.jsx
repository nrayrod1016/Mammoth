import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as productService from '../../services/productService'

const ProductShow = (props) => {

  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    productService.getDetails(id)
    .then(product => {
      setProduct(product)
    })
  }, [id])

  return (
    <>
    </>
  );
}
 
export default ProductShow;