import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import axios from 'axios';

const ReviewList = ({ id, type }) => {

  const [reviewList, setReviewList] = useState([]);

  useEffect (() => {
    if (id) {
      getReview(id);
    }
  }, [id]);

  // let api = type === 'shop' ? `http://3.239.52.75/api/shops/${shopId}/reviews` : 'user api'

  const getReview = (shopId => {
    axios.get(`http://3.239.52.75/api/shops/${shopId}/reviews`)
      .then (data => {
        console.log(data);
        setReviewList(data.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div>
      {reviewList.map(review => {
        return <Review key={review.review_id} review={review}/>;
      })}
    </div>
  );

};

export default ReviewList;
