import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import ShopHeader from './ShopHeader.jsx';
import ReviewList from '../../shared-components/ReviewList.jsx';
import getCurrentUser from '../../lib/getCurrentUser.js';

const ShopPage = () => {
  const location = useLocation();
  const shop = location.state && location.state.shop;
  const [userId, setUserId] = useState();

  useEffect(() => {
    setUserId(getCurrentUser());
  }, []);

  return (
    <div className="container">
      <ShopHeader shop={shop} />

      <ReviewList id={shop.shop_id} type={'shop'}/>
    </div>
  );
};

export default ShopPage;