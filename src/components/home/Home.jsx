import React, { useState, useEffect } from 'react';
import ShopList from '../shop/ShopList.jsx';
import AddShopModal from '../shop/AddShopModal.jsx';
import axios from 'axios';

export default function Home() {

  const [popularShops, setpopularShops] = useState([]);
  const [recentShops, setrecentShops] = useState([]);

  const [allPopularShops, setallPopularShops] = useState([]);
  const [allRecentShops, setallRecentShops] = useState([]);



  const [seeMoreRecent, setseeMoreRecent] = useState(false);
  const [seeMorePopular, setseeMorePopular] = useState(false);
  const [addShopModal, setAddShopModal] = useState(false);
  useEffect(() => {
    axios.get('http://3.239.52.75/api/highRatingShops')
      .then(res => {
        setallPopularShops(res.data);
        setpopularShops([res.data[0], res.data[1], res.data[2]]);
        console.log(res.data);
        return axios.get('http://3.239.52.75/api/recentShops');
      })
      .then(res => {
        setallRecentShops(res.data);
        setrecentShops([res.data[0], res.data[1], res.data[2]]);
    console.log(res.data);
      });
  }, []);

  const toggleMoreRecent = (e, value) => {
    e.preventDefault();
    setseeMoreRecent(value);
  };



  const toggleMorePopular = (e, value) => {
    e.preventDefault();
    setseeMorePopular(value);
  };

  const toggleAddShopModal = (e, value) => {
    e.preventDefault();
    setAddShopModal(value);
  };

  return (
    <>

      <button onClick={(event) => { toggleAddShopModal(event, true); }}>Add Shop</button>

      <div className='popularShopsContainer'>
        {seeMorePopular ? <>
          <h2>Popular Coffee Shops</h2>
          <ShopList ShopList={allPopularShops} />
          <button onClick={(event) => { toggleMorePopular(event, false); }}>See Less</button>
        </> : <>
          <h2>Popular Coffee Shops</h2>
          <ShopList ShopList={popularShops} />
          <button onClick={(event) => { toggleMorePopular(event, true); }}>See More Popular Shops</button>
        </>}
      </div>

      <div className='recentShopsContainer'>
        {seeMoreRecent ? <>
          <h2>Recently Added Coffee Shops</h2>
          <ShopList ShopList={allRecentShops} />
          <button onClick={(event) => { toggleMoreRecent(event, false); }}>See Less</button>
        </> : <>
          <h2>Recently Added Coffee Shops</h2>
          <ShopList ShopList={recentShops} />
          <button onClick={(event) => { toggleMoreRecent(event, true); }}>See More Recent Shops</button>
        </>}
      </div>

      {addShopModal && <AddShopModal
        toggleAddShopModal={toggleAddShopModal} />}
    </>
  );
}

