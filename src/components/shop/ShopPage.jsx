import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import ShopHeader from './ShopHeader.jsx';
import ReviewList from '../../shared-components/ReviewList.jsx';


const ShopPage = () => {
  // const [shop, setShop] = useState({});
  // const { id } = useParams();
  const location = useLocation();
  const shop = location.state && location.state.shop;


  // useEffect(() => {
  //   if (id) {
  //     axios.get(`http://3.239.52.75/api/shops/${id}`)
  //       .then(res => setShop(res.data[0]))
  //       .catch(e => console.log(e));
  //   }
  // }, [id]);

  return (
    <div className="container">
      <ShopHeader shop={shop} />

      {/* assuming ReviewList will make a get request for the shop id */}
      <ReviewList id={shop.shop_id} type={'shop'}/>
    </div>
  );
};

export default ShopPage;