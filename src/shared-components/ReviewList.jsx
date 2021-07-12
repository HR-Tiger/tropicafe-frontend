import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import axios from 'axios';

const ReviewList = () => {

  const [reviewList, setReviewList] = useState([]);

  useEffect (() => {
    getReview(2);
  }, []);

  const getReview = ((shop_id) => {
    axios.get(`http://3.239.52.75/api/shops/${shop_id}/reviews`)
      .then (data => {
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
