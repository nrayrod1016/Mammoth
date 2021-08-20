
import React, { useState, useEffect, useLocation } from 'react';
import { Link, useParams } from 'react-router-dom'
import UpdateProductForm from '../../components/UpdateProductForm/UpdateProductForm';
import UpdateShopForm from '../../components/UpdateShopForm/UpdateShopForm';
import * as shopService from '../../services/shopService'
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './ShopManager.module.css'
import { product } from 'prelude-ls';



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

// "/shops/:id/manage/products/new"
  return (
    <>
      <h1 class="text-indigo-500 font-medium text-center mt-5 mb-5 text-2xl font-bold">{shop.name}</h1>
        <div className={styles.updateAdd}>
          <div>
            <Link 
              to={{ pathname: `/shops/${shop._id}/manage/update`, state:{shop}}} >
              <button  
                class="p-5 py-2 mt-5 mb-5  w-100 text-white text-bold font-light tracking-wider bg-indigo-500 hover:bg-indigo-300 rounded-lg">
                Update your Shop!
              </button>
            </Link> 
          </div>
            <div class=""> 
              <Link to={{ pathname: `/shops/${shop._id}/manage/products/new`, state:{shop}}} ><button class="px-5 py-2  mt-5 mb-5 w-100 text-white text-bold font-light tracking-wider bg-indigo-500 hover:bg-indigo-300 rounded-lg">Add a Product</button></Link> 
            </div>
        </div> 
        <div className={styles.productList}>
          <h1 
            class=" mb-5 text-indigo-500 font-lg text-2xl text-center font-bold"> 
            Product List 
          </h1>
          
          <div class="grid grid-cols-3 "> 
          {shop.products?.length > 0 &&
            shop.products.map(product => 
            <div class="container mx-auto" key={product._id}>
              <div class="bg-white mb-5 max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-3xl transition duration-500 transform hover:scale-105 cursor-pointer">
                <div class="h-20 bg-indigo-500 flex items-center text-center justify-between">
                  <Link class=" " to={`/products/${product._id}`}>
                    <h1 class="text-white text-lg p-40">{product.name}</h1>
                  </Link>
                </div>  
                <h1> - ${product.price} </h1> 
                
                  <Link 
                    to={{ pathname: `/shops/manage/products/${product._id}`, state:{product}}} >
                      <button  
                        class="p-2 py-2 mt-5 mb-5  ml-24  w-100 text-white text-bold font-light tracking-wider bg-indigo-500 hover:bg-indigo-300 rounded-lg">
                        Update your Product!
                      </button>
                    </Link> 

              </div>

              

                {product.orders.map(order => 
                  <div class="bg-white max-w-sm mx-auto rounded-3xl overflow-hidden shadow-lg hover:shadow-3xl transition duration-500 transform hover:scale-105 cursor-pointer">
                    <div class="h-20 bg-indigo-500 mt-5 flex items-center text-center justify-between">
                      <Link to={`/products/${product._id}`}>
                        <h1 class="text-white text-lg p-40">{order._id}</h1> 
                      </Link>
                    </div>  
                    <h1 class="mb-10"> - ${order.price}</h1>
                  </div>
              )}
            </div>
            )

          }
          </div> 

          </div> 
          {!shop.products?.length && 
            <h1 
              class=" mb-5 text-indigo-500 font-lg text-2xl text-center font-bold"> 
              You have no products please add some to your store!
            </h1>
          }
        
    </>
  );
}
 
export default ShopManager;