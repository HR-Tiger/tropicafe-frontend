import React, { useState, useEffect } from 'react';
import ShopList from '../shop/ShopList.jsx';
import AddShopModal from '../shop/AddShopModal.jsx';
export default function Home() {

  const [popularShops, setpopularShops] = useState([{ stuff: 'stuff' }, { studd: 'stuff' }, { stugg: 'stuff' }]);
  const [recentShops, setrecentShops] = useState([{ stuff: 'stuff' }, { studd: 'stuff' }, { stugg: 'stuff' }]);

  const [allPopularShops, setallPopularShops] = useState([{ stuff: 'stuff' }, { studd: 'stuff' }, { stugg: 'stuff' }, { stuff: 'stuff' }, { studd: 'stuff' }, { stugg: 'stuff' }, { stuff: 'stuff' }, { studd: 'stuff' }, { stugg: 'stuff' }]);
  const [allRecentShops, setRecentShops] = useState([{ stuff: 'stuff' }, { studd: 'stuff' }, { stugg: 'stuff' }, { stuff: 'stuff' }, { studd: 'stuff' }, { stugg: 'stuff' }, { stuff: 'stuff' }, { studd: 'stuff' }, { stugg: 'stuff' }]);

  const [seeMoreRecent, setseeMoreRecent] = useState(false);
  const [seeMorePopular, setseeMorePopular] = useState(false);
  const [addShopModal, setAddShopModal] = useState(false);
  // useEffect(() => {
  //   axios.get('./popularShops')
  //     .then(res => {
  //       setpopularShops(res.data);
  //       axios.get('./recentShops');
  //     })
  //     .then(res => {
  //       setrecentShops(res.data);
  //     });
  // }, []);

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

