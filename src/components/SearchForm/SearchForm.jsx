import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchForm.module.css'

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
    <div class="search p-12 ">
    <form  class="bg-white flex items-center rounded-full shadow-xl" onSubmit={handleSubmit}> 
    {/* issue with sizing resetting to original stupid size after refresh  */}
    <input 
    class="rounded-l-full w-100 py-3 px-10 text-gray-700 leading-tight focus:outline-none"
    type="text" 
    name="search"
    className="shopSearch"
    value={query} 
    onChange={handleChange}
    />  
    <div>
    <button class="bg-indigo-500 text-white text-sm rounded-full p-4 hover:bg-blue-400 focus:outline-none w-14 h-11 flex items-center justify-center" >
        Search
    </button>
    </div> 
    </form>
    </div>
    </>
  );
}
 
export default SearchForm;