import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ShopHeader from './ShopHeader.jsx';
import ReviewList from '../shared-components/ReviewList.jsx';

export default function ShopPage() {
  const [shop, setShop] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // just guessing the endpoint for now
    return axios.get(`/api/shops/${id}`)
      .then(res => setShop(res.data))
      .catch(e => console.log(e));
  }, [id]);

  return (
    <>
      <ShopHeader shop={shop} />

      {/* assuming ReviewList will make a get request for the shop id */}
      <ReviewList id={shop.id} />
    </>
  );
}