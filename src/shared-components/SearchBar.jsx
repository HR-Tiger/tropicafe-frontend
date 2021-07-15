import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../config.js';

export default function SearchBar({ type, results, setResults, setSearchedShops }) {
  let searchInput = document.getElementById('searchInput');



  let baseUrl = `http://${URL}/api/`;



  const [query, setQuery] = useState('');

  const handleSearch = () => {
    let searchVal = searchInput.value;
    searchInput.value = '';

    axios.get(baseUrl + `shops/search?city=${searchVal}`).then(res => {
      let shops = res.data;
      setSearchedShops(shops);
    });

  };

  return (
    <div className='searchContainer'>
      <div className='searchBar'>
        <input id='searchInput' type="text" placeholder="Search" />
      </div>
      <div>
        <button onClick={handleSearch} type="submit" class="searchButton">
          <i class="fa fa-search"></i>
        </button>
      </div>

    </div>
  );
}
