import React from 'react';
import UpdateProductForm from '../../components/UpdateProductForm/UpdateProductForm'

const UpdateProduct = (props) => {
  return (
    <>
    <h1>Update Product</h1>
    <UpdateProductForm product={props.product}/>
    </>
  );
}
 
export default UpdateProduct;