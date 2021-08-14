import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchForm = (props) => {
  const history = useHistory()

  const [query, setQuery] = useState("")
  
  const handleChange = evt => {
    setQuery(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    history.push(`/search/${query}/results`)
    setQuery("")
  }

  return (
    <>
    <form onSubmit={handleSubmit}> 
    <input
    type="text" 
    name="search"
    className="shopSearch"
    value={query} 
    onChange={handleChange}
    />  
    <button>
        Search
    </button>
    </form>
    </>
  );
}
 
export default SearchForm;