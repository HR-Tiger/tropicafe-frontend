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

  let api = type === 'shop' ? `http://3.239.52.75/api/shops/${id}/reviews` : `http://3.239.52.75/api/reviews/users/${id}`;

  // console.log(api);

  const getReview = (id => {
    axios.get(api)
      .then (data => {
        // console.log(data);
        setReviewList(data.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div className='reviewsContainer'>
      {reviewList.map(review => {
        return <Review key={review.review_id} review={review}/>;
      })}
    </div>
  );

};

export default ReviewList;
