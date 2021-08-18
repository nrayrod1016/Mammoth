
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
    <div class="h-1/4font-sans bg-cover">
    <div class="container mx-auto h-full flex flex-1 justify-center items-center">
        <div class="w-full max-w-lg">
          <div class="leading-loose">
<div>
  <h1 class="text-indigo-500 font-medium text-center text-lg font-bold">Shop Manager Page </h1> 
{/* populate field of products */}
  {/* <UpdateProductForm />  */}
  <div class="">
  <Link to={{ pathname: `/shops/${shop._id}/manage/update`, state:{shop}}} ><button  class="px-4 py-1 mt-5 mb-5 w-2/4 text-white text-bold font-light tracking-wider bg-indigo-500 hover:bg-indigo-300 rounded">Update your Shop!</button></Link> </div>
  <h1 class="text-indigo-500 font-medium text-center text-lg font-bold"> Product List </h1>
  {shop.products?.map(product => {
      return (
        <div key={product._id}>
          <Link to={`/products/${product._id}`}>
            <h1>{product.name}</h1>
          </Link>
            {product.orders.length > 0 &&
            <h2>A List of Orders: </h2>
            }
            {product.orders?.map(order => {
              return (
                <div key={order._id}>
                  <h1>Order Number: {order._id}</h1>
                  <h1>Address: {order.address}, {order.city}, {order.state}, {order.country}, {order.zipcode}</h1>
                  <h1>Ordered By: {order.profile.name}</h1>
                </div>
              )
            })}
        </div>
      )
    }
  )}
  </div> 
  </div>
        </div>
      </div>
    </div>
  </>
  );
}
 
export default ShopManager;