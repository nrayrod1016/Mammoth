
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
// "/shops/:id/manage/products/new"
  return (
    <>
    {/* renderproducts */}
    <div class="h-1/4font-sans bg-cover">
    <div class="container mx-auto h-full flex flex-1 justify-center items-center">
        <div class="w-full max-w-lg">
          <div class="leading-loose">
<div>
  <h1 class="text-indigo-500 font-medium text-center mt-5 mb-5 text-xl font-bold">{shop.name} </h1> 

  <div class=" grid grid-cols-2">
    <div>
      <Link 
      to={{ pathname: `/shops/${shop._id}/manage/update`, state:{shop}}} >
        <button  
        class="px-4 py-1 mt-5 mb-5 w-2/4 text-white text-bold font-light tracking-wider bg-indigo-500 hover:bg-indigo-300 rounded">
          Update your Shop!
          </button>
      </Link> 
    </div>
      <div class=""> 
      <Link to={{ pathname: `/shops/${shop._id}/manage/products/new`, state:{shop}}} ><button  class="px-4 py-1 mt-5 mb-5 w-2/4 text-white text-bold font-light tracking-wider bg-indigo-500 hover:bg-indigo-300 rounded">Add a Product</button></Link> 
    </div>
  </div> 
<section></section>

      <h1 
      class="text-indigo-500 font-medium text-center text-lg font-bold"> 
        Product List 
      </h1>
      
  {shop.products?.map(product => {
    
      return (
  <div class="container mx-auto">
    <div class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-3xl transition duration-500 transform hover:scale-105 cursor-pointer">
        <div class="h-20 bg-indigo-500 flex items-center text-center justify-between" 
        key={product._id}>
          <Link to={`/products/${product._id}`}>
            <h1 class="text-white text-lg p-40">{product.name}</h1>
          </Link>
        
    </div> 
  </div> 
          
            {product.orders.length > 0 &&
            <h2 class=" text-xl mt-20 text-indigo-500 font-bold text-center">A List of Orders: </h2>
            }
              <div class="grid gap-4 grid-cols-3">
            {product.orders?.map(order => {
              return (
  <div class="flex flex-col md:flex-row justify-center flex-wrap gap-3 mt-10">
    <div class="flex flex-col md:flex-row justify-center flex-wrap gap-3 mt-10">  
      <div class="bg-white max-w-xl mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
      <div class="bg-indigo-500 flex h-200 items-center"
        key={order._id}>
       <h1 class="py-6 px-6 text-lg tracking-wide text-white text-center"> Order Number: {order._id}</h1> 
      </div>  
        <div class="flex justify-between px-5 mb-2 text-sm text-gray-600">
          <h2 class="py-6 px-6 text-lg tracking-wide text-center">Address: {order.address}, {order.city}, {order.state}, {order.country}, {order.zipcode}</h2>
          <p>Ordered By: {order.profile.name}</p>
        </div>
  </div>
</div>
        </div>       )
            })}
            </div> 
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