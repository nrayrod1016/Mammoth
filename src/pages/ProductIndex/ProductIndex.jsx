import React, { useState, useEffect} from 'react';
import ProductCard from '../../components/ProductCard/ProductCard'
import  * as productService from '../../services/productService'

const ProductIndex = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => { 
    productService.getAll() 
    .then(products => { 
     setProducts(products)
    })  

  }, []) 
   
  
  return (
    <>
    <h1> Product List </h1> 
<div class="grid gap-4 grid-cols-3">
    {products.map(product => {
      return (
        <ProductCard Product={product} key={product._id}/> 
      )
    }
    )}
 </div>

    </>
  );
}
 
export default ProductIndex;

