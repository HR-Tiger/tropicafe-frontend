import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import axios from 'axios';
import FilterReviews from './FilterReviews.jsx';
import {URL} from '../config.js';

const ReviewList = ({ id, type }) => {

  const [reviewList, setReviewList] = useState([]);

  useEffect (() => {
    if (id) {
      getReview(id);
    }
  }, [id]);

  let api = type === 'shop' ? `http://${URL}/api/shops/${id}/reviews` : `http://${URL}/api/reviews/users/${id}`;

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
    <div className="d-flex justify-content-between">
      <FilterReviews setReviewList={setReviewList} />
      <div className='reviewsContainer'>
        {reviewList.map(review => {
          return <Review key={review.review_id} review={review} type={type}/>;
        })}
      </div>
    </div>
  );

};

export default ReviewList;
