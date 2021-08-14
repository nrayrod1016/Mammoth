import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as searchService from "../../services/searchService"

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
      <h1>SANITY CHECK</h1>
    </>
  );
}
 
export default SearchResults;