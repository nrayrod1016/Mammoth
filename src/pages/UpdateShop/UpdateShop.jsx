import React from 'react';
import UpdateShopForm from '../../components/UpdateShopForm/UpdateShopForm'

const UpdateShop = (props) => {
  return ( 
    <>
     
      <div class=" mt-20"> 
      <UpdateShopForm shop={props.shop}/>
      </div>
      <div class=" p-20"></div> 
    </>
  );
}
 
export default UpdateShop;