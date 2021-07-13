import React, { useState } from 'react';
import StarRating from '../components/shop/StarRating.jsx';
import axios from 'axios';

const Review = ( { review } ) => {

  const [helpfulness, setHelpfulness] = useState(review.helpfulness_count);

  const convertDate = (timeStamp) => {
    var date = new Date(Number(timeStamp));
    date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return date;
  };

  if (!review.photos) {
    review.photos = [];
  }

  const handleClick = () => {
    axios.put(`http://3.239.52.75/api/reviews/${review.review_id}`)
      .then (() => {
        console.log('helpfulness added');
        axios.get(`http://3.239.52.75/api/reviews/${review.review_id}`)
          .then (data => {
            setHelpfulness(data.data[0].helpfulness_count);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch ((err) => {
        consoel.log(err);
      });
  };

  if (review.user[0].profile_photo_url === null) {
    var profile_pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  } else {
    var profile_pic = review.user[0].profile_photo_url;
  }


  return (
    <div className='review'>
      <img src={profile_pic} className="pic" alt="..."></img>
      <div className='username'>{review.user[0].first_name}</div>
      <div className='location'>{review.user[0].city}, {review.user[0].state}</div>
      <div className='rating'>
        <StarRating Rating={review.rating}/>
      </div>
      <div className='date'>{convertDate(review.date)}</div>
      <div className='review-text'>{review.description}</div>
      <div className='photos'>
        {review.photos.map(photo => {
          return <img src={photo.url} className="photo" key={Math.floor(Math.random() * 100)} alt="..."></img>;
        })}
      </div>
      <button className='helpful' onClick={(() => handleClick())} >helpful {helpfulness}</button>
    </div>
  );
};

export default Review;