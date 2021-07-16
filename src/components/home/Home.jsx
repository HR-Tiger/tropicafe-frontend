import React, { useState, useEffect } from 'react';
import ShopList from '../shop/ShopList.jsx';
import AddShopModal from './AddShopModal.jsx';
import ShopFilter from './ShopFilter.jsx';
import axios from 'axios';
import SearchBar from '../../shared-components/SearchBar.jsx';
import '../../styles/styles.css';

import { URL } from '../../config.js';

export default function Home() {

  const [popularShops, setPopularShops] = useState([]);
  const [recentShops, setRecentShops] = useState([]);
  const [allPopularShops, setallPopularShops] = useState([]);
  const [allRecentShops, setallRecentShops] = useState([]);
  const [searchedShops, setSearchedShops] = useState([]);
  const [seeMoreRecent, setSeeMoreRecent] = useState(false);
  const [seeMoreSearched, setSeeMoreSearched] = useState(false);
  const [seeMorePopular, setSeeMorePopular] = useState(false);
  const [addShopModal, setAddShopModal] = useState(false);

  useEffect(() => {
    axios.get(`http://${URL}/api/highRatingShops`)
      .then(res => {
        setallPopularShops(res.data);
        setPopularShops(res.data.slice(0, 3));

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

        </div>

        <div className=''>
          {(searchedShops.length > 0) ? (<>
            {/* <ShopFilter /> */}
            <div className='searchedShopsContainer'>
              {seeMoreSearched ? (
                <>
                  <h2 className='recent-title'>Results for {searchedShops[0].city}:</h2>
                  <ShopList ShopList={searchedShops.slice(0, 9)} />
                  <button className='loginBtn' onClick={() => setSeeMoreSearched(false)}>See Less</button>
                </>
              ) : (
                <>
                  <h2 className='recent-title'>Results for {searchedShops[0].city}:</h2>
                  <ShopList ShopList={searchedShops.slice(0, 3)} />
                  <button className='loginBtn' onClick={() => setSeeMoreSearched(true)}>See More Searched Shops</button>
                </>)}
            </div>
          </>
          ) : (
            <>
              <button className='addShopButton loginBtn' onClick={(event) => { toggleAddShopModal(event, true); }}>Add Shop</button>
              <div className='popularShopsContainer'>
                {seeMorePopular ? (<>
                  <h2 className='popular-title'>Popular Coffee Shops</h2>
                  <ShopList ShopList={allPopularShops} />
                  <button className='loginBtn' onClick={() => setSeeMorePopular(false)}>See Less</button>
                </>
                ) : (
                  <>
                    <h2 className='popular-title'>Popular Coffee Shops</h2>
                    <ShopList ShopList={popularShops} />
                    <button className='loginBtn' onClick={() => setSeeMorePopular(true)}>See More Popular Shops</button>

                  </>)}
              </div>

              <div className='recentShopsContainer'>
                {seeMoreRecent ? (
                  <>
                    <h2 className='recent-title'>Recently Added Coffee Shops</h2>
                    <ShopList ShopList={allRecentShops} />
                    <button className='loginBtn' onClick={() => setSeeMoreRecent(false)}>See Less</button>
                  </>
                ) : (
                  <>
                    <h2 className='recent-title'>Recently Added Coffee Shops</h2>
                    <ShopList ShopList={recentShops} />
                    <button className='loginBtn' onClick={() => setSeeMoreRecent(true)}>See More Recent Shops</button>
                  </>)}
              </div>
            </>)}
        </div>

        {addShopModal && <AddShopModal
          toggleAddShopModal={toggleAddShopModal} />}
      </div>
    </>
  );
}

