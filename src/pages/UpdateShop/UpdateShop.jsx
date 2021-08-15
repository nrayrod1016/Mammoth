import React from 'react';
import UpdateShopForm from '../../components/UpdateShopForm/UpdateShopForm'

const UpdateShop = (props) => {
  return ( 
    <>
      <h1>Update Shop Info </h1>
      <UpdateShopForm shop={props.shop}/>

    </>
  );
}
 
export default UpdateShop;