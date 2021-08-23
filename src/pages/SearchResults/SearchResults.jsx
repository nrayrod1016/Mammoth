import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as searchService from "../../services/searchService"
import ShopCard from '../../components/ShopCard/ShopCard'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './SearchResults.module.css'
const SearchResults = (props) => {
  const [searchResults, setSearchResults] = useState([])
  const { query } = useParams()
  
  useEffect(() => {
    searchService.search(query)
    .then(searchResults => {
      setSearchResults(searchResults)
    })
  }, [query])

  return (
    <>
      <h1 class="text-3xl mt-20 md:text-5xl p-2 text-indigo-500 tracking-loose text-center">Search Results</h1>
    <main className={styles.main}>

      {searchResults.shops?.length > 0 &&
      <section>
        <h1 class="text-3xl mt-20 md:text-5xl p-2 text-indigo-500 tracking-loose text-center">Shops</h1>
        {searchResults.shops?.map(shop => 
          <ShopCard 
          Shop={shop}
          key={shop._id}
          /> 
          )}
      </section>
      }
      {searchResults.products?.length > 0 && 
      <section>
        <h1 class="text-3xl mt-20 md:text-5xl p-2 text-indigo-500 tracking-loose text-center">Products</h1>
        {searchResults.products?.map(product => 
        <ProductCard 
        Product={product}
        key={product._id}
        />  
        )}
      </section>
      }
      </main>

    </>
  );
}
 
export default SearchResults;