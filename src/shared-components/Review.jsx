import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../components/shop/StarRating.jsx';
import axios from 'axios';

const Review = ( { review, type } ) => {

  // console.log(review);

  // console.log(type);

  const [helpfulness, setHelpfulness] = useState(review.helpfulness_count);
  const [shop, setShop] = useState({});

  if (type === 'user') {
    useEffect (() => {
      axios.get(`http://3.239.52.75/api/shops/${review.shop_id}`)
        .then (data => {
          // console.log(data.data[0]);
          setShop(data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
  }


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
        console.log(err);
      });
  };

  if (type === 'shop') {
    // console.log('hi', review.shop_id);
    if (review.user[0].profile_photo_url === null) {
      var profile_pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
    } else {
      var profile_pic = review.user[0].profile_photo_url;
    }
    var pathName = `/user/${review.user_id}`;
    // console.log(pathName);
    var username = review.user[0].first_name;
    var location = `${review.user[0].city}, ${review.user[0].state}`;
  } else {
    // console.log('hey', shop.photos);
    if (shop.photos === null || shop.photos === undefined) {
      var profile_pic = 'https://www.whitevilla.co.uk/img/missing_product.png';
    } else {
      var profile_pic = shop.photos[0].url;
    }
    var username = shop.name;
    var pathName = {
      pathname: `/shop/${shop.shop_id}`,
      state: {shop: shop}
    };
    var location = `${shop.city}, ${shop.state}`;
  }


  return (
    <div className='review'>
      <img src={profile_pic} className="pic" alt="..."></img>
      <Link to={pathName}><div className='username'>{username}</div></Link>
      <div className='location'>{location}</div>
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
      <button className='helpful' onClick={(() => handleClick())} >💡 helpful {helpfulness}</button>
    </div>
  );
};

export default Review;