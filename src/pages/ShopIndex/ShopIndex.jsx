import React, { useState, useEffect } from 'react';
import * as shopService from "../../services/shopService"

import ShopCard from "../../components/ShopCard/ShopCard"

const ShopIndex = (props) => {
  const [shops, setShops] = useState([])

  useEffect(() => {
    shopService.getAll()
    .then(shops => {
      setShops(shops)
    })
  }, [])

  return (
    <>
    <h1> Shop List</h1> 
    <div class="grid gap-4 grid-cols-3"> 
      {shops.map((shop) => {
        return (
      <ShopCard Shop={shop} key={shop._id} /> 
        )
      }
      )}
      
      </div>  
      <h1 class="m-1"> </h1>
    </>
  );
}
 
export default ShopIndex