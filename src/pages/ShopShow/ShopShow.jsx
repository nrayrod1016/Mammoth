import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import * as shopService from '../../services/shopService'

const ShopShow = (props) => {
  const [shop, setShop] = useState({})

  const { id } = useParams()

  useEffect(() => {
    shopService.getDetails(id)
    .then(shop => {
      setShop(shop)
    })
  }, [id])

  return (
    <>

    </>
  );
}
 
export default ShopShow;