import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as searchService from "../../services/searchService"
import ShopCard from '../../components/ShopCard/ShopCard'
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
      <h1>Search Results </h1>
      {/* {shops.name.searchResults.map(shop => 
        <ShopCard 
        shop={shop}
        key={shop.id}
        /> 
        
        )} */}

    </>
  );
}
 
export default SearchResults;