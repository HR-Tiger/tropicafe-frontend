import React from 'react';
import '../../styles/styles.css';
import StarRating from './StarRating.jsx';
import { Link } from 'react-router-dom';

export default function Shop({ shop }) {

  const imageSource = shop.photos ? shop.photos[0].url : 'http://dummyimage.com/250x250.png/5fa2dd/ffffff';

  const priceIcons = () => {

    if (shop.price === 1) {
      return '$';
    }
    if (shop.price === 2) {
      return '$$';
    }
    if (shop.price === 3) {
      return '$$$';
    }
    if (shop.price === 4) {
      return '$$$$';
    }
    if (shop.price === 5) {
      return '$$$$$';
    }
  };



  return (
    <>
      <div className='cardContainer card'>
        <img className="shopImages" src={imageSource} />


        <div className="card-body">
          <Link to={{
            pathname: `/shop/${shop.shop_id}`,
            state: { shop: shop }
          }}><h3 className='card-title'>{shop.name}</h3></Link>

          <div className="card-body">
            <StarRating Rating={shop.avg_rating} />
          </div>
          <p className="card-text">{priceIcons()}</p>
          <p className="card-text">{shop.address} , {shop.city}</p>
          {shop.animal_friendly ? <p className="card-text">Pet Friendly ✅</p> : <p className="card-text">Pet Friendly 🚫 </p>}
        </div>
      </div>

    </>
  );
}

//single card

// need rating on the recents, need main photo url (cant be null) also price

