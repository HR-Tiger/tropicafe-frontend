import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ShopHeader from './ShopHeader.jsx';
// import ReviewList from '../shared-components/ReviewList.jsx';

const ShopPage = () => {
  const [shop, setShop] = useState({}); // shop info might come through link/props
  const [reviews, setReviews] = useState([]);
  const { id } = useParams(); // link/props

  useEffect(() => {
    return axios.get(`http://3.239.52.75/api/${id}/reviews`)
      .then(res => setReviews(res.data))
      .catch(e => console.log(e));
  }, [id]);

  return (
    <>
      {/* <ShopHeader shop={shop} /> */}

      {/* assuming ReviewList will make a get request for the shop id */}
      {/* <ReviewList id={shop.id} /> */}
    </>
  );
};

export default ShopPage;