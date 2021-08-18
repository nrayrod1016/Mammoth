
import React, { useState, useEffect, useLocation } from 'react';
import { Link, useParams } from 'react-router-dom'
import UpdateProductForm from '../../components/UpdateProductForm/UpdateProductForm';
import UpdateShopForm from '../../components/UpdateShopForm/UpdateShopForm';
import * as shopService from '../../services/shopService'
import ProductCard from '../../components/ProductCard/ProductCard';



const ShopManager = (props) => {
  const [shop, setShop] = useState({})
  const { id } = useParams()
// call shop id here 
  useEffect(() => { 
    shopService.getDetails(id)
    .then(shop => { 
      setShop(shop)
    })
  }, [])
// pass shop id to setManager here 
const handleSetManager = evt =>  { 
  evt.preventDefault()
  setShop(shop._id)
}

  return (
    <>
    {/* renderproducts */}
<div>
  <h1>Shop Manager Page </h1> 
{/* populate field of products */}
  {/* <UpdateProductForm />  */}
  <Link to={{ pathname: `/shops/${shop._id}/manage/update`, state:{shop}}} >Update your Shop!</Link>
  <h1> Product List</h1>
  {shop.products?.map(product => {
      return (
        <ProductCard  {...props} Product={product} key={product._id}/> 
      )
    }
  )
  }


    

    
</div> 
<Link /> 

  
   


    </>
  );
}
 
export default ShopManager;