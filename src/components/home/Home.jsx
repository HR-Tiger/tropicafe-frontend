import React, { useState, useEffect } from 'react';
import ShopList from '../shop/ShopList.jsx';
import AddShopModal from './AddShopModal.jsx';
import ShopFilter from './ShopFilter.jsx';
import axios from 'axios';
import SearchBar from '../../shared-components/SearchBar.jsx';
import '../../styles/styles.css';

import {URL} from '../../config.js';

export default function Home() {

  const [popularShops, setPopularShops] = useState([]);
  const [recentShops, setRecentShops] = useState([]);
  const [allPopularShops, setallPopularShops] = useState([]);
  const [allRecentShops, setallRecentShops] = useState([]);
  const [searchedShops, setSearchedShops] = useState([]);
  const [seeMoreRecent, setSeeMoreRecent] = useState(false);
  const [seeMorePopular, setSeeMorePopular] = useState(false);
  const [addShopModal, setAddShopModal] = useState(false);

  useEffect(() => {
    axios.get(`http://${URL}/api/highRatingShops`)
      .then(res => {
        setallPopularShops(res.data);
        setPopularShops(res.data.slice(0, 3));
        console.log(res.data);
      });
    axios.get(`http://${URL}/api/recentShops`)
      .then(res => {
        setallRecentShops(res.data);
        setRecentShops(res.data.slice(0, 3));

      });
  }, []);


  const toggleAddShopModal = (e, value) => {
    e.preventDefault();
    setAddShopModal(value);
  };

  return (
    <>
      <div className='homeContainer'>
        <SearchBar setSearchedShops={setSearchedShops} />
        <div className='homeHeader'>
          <button className='addShopButton' onClick={(event) => { toggleAddShopModal(event, true); }}>Add Shop</button>
          <ShopFilter/>
        </div>

        <div className='popularShopsContainer'>
          {seeMorePopular ? (<>
            <h2 className='popular-title'>Popular Coffee Shops</h2>
            <ShopList ShopList={allPopularShops} />
            <button onClick={() => setSeeMorePopular(false)}>See Less</button>
          </>
          ) : (
            <>
              <h2 className='popular-title'>Popular Coffee Shops</h2>
              <ShopList ShopList={popularShops} />
              <button onClick={() => setSeeMorePopular(true)}>See More Popular Shops</button>

            </>)}
        </div>

        <div className='recentShopsContainer'>
          {seeMoreRecent ? (
            <>
              <h2 className='recent-title'>Recently Added Coffee Shops</h2>
              <ShopList ShopList={allRecentShops} />
              <button onClick={() => setSeeMoreRecent(false)}>See Less</button>
            </>
          ) : (
            <>
              <h2 className='recent-title'>Recently Added Coffee Shops</h2>
              <ShopList ShopList={recentShops} />
              <button onClick={() => setSeeMoreRecent(true)}>See More Recent Shops</button>
            </>)}
        </div>

        {addShopModal && <AddShopModal
          toggleAddShopModal={toggleAddShopModal} />}
      </div>
    </>
  );
}

