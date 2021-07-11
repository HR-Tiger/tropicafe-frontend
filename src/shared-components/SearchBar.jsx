import React, { useState, useEffect } from 'react';
import axios from 'axios';
import shops from './shops.json';

export default function SearchBar({ type, results, setResults }) {

  /*
  type = shops || reviews based on where it's rendered

  results and setResults will be passed from the parent component

  not sure if results is necessary, setResults will update the state
  of the parent component to rerender the restaraunt/review list
  */


  const [query, setQuery] = useState('');

  const handleSearch = () => {

    /*
    this will depend on the backend and the endpoints that
    will correspond to the search funcion
    */

    // return type === 'shops' ? (
    //   axios.get(search names endpoint)
    //     .then(res => setResults(res.data))
    //     .catch(e => console.log(e));
    // ) : (
    //   axios.get(search summary endpoint)
    //     .then(res => setResults(res.data))
    //     .catch(e => console.log(e))
    // )
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`search for ${type}`}
      />

      {/* instead of a search button we could
      use a font awesome icon */}
      <button onChange={handleSearch}>Search</button>
    </>
  );
}