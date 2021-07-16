import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../config.js';

export default function SearchBar({ type, results, setResults, setSearchedShops }) {
  let searchInput = document.getElementById('searchInput');
  let [currentSearch, setCurrentSearch] = useState('city');


  let baseUrl = `http://${URL}/api/`;


  const [query, setQuery] = useState('');

  const handleSearch = () => {
    let searchVal = searchInput.value;
    searchInput.value = '';

    axios.get(baseUrl + `shops/search?${currentSearch}=${searchVal}`).then(res => {
      let shops = res.data;
      setSearchedShops(shops);
    });

  };

  const handleSearchType = () => {
    let newSearch = currentSearch === 'city' ? 'name' : 'city';
    setCurrentSearch(newSearch);
  };

  let capitalize = str => {
    let changed = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
    return changed;
  };

  return (
    <div className='searchContainer'>
      <button className="toggleSearchBtn" type="button" onClick={handleSearchType}>{capitalize(currentSearch)}</button>
      <div className='searchBar'>
        <input id='searchInput' type="text" placeholder="Search" />
      </div>

      <div>
        <button onClick={handleSearch} type="submit" className="searchButton"><i className="fa fa-search"></i></button>
      </div>

    </div>
  );
}
