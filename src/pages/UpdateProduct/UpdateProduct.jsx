import React from 'react';
import { useLocation } from 'react-router';
import UpdateProductForm from '../../components/UpdateProductForm/UpdateProductForm'

const UpdateProduct = (props) => {
  const location = useLocation()
  return (
    <>
    <h1>Update Product</h1>
    <UpdateProductForm product={location.state.product}/>
    </>
  );
}
 
export default UpdateProduct;