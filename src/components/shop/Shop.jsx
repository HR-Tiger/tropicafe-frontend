import React from 'react';
import '../../styles/styles.css';
import StarRating from './StarRating.jsx';
import { Link } from 'react-router-dom';

export default function Shop({ shop }) {
  return (
    <>
      <div className='cardContainer card'>
        <img className="img-fluid" src={'http://dummyimage.com/101x100.png/cc0000/ffffff'} />
        <div className="card-body">
          <Link to={`/shop/${shop.shop_id}`}><h3 className='card-title'>{shop.name}</h3></Link>

          <div className="card-body">
            <StarRating Rating={shop.avg_rating} />
          </div>
          <p className="card-text">$$$</p>
          <p className="card-text">{shop.address} , {shop.city}</p>
          {shop.animal_friendly ? <p className="card-text">Pet Friendly ✅</p> : <p className="card-text">Pet Friendly 🚫 </p>}
        </div>
      </div>


    </>
  );
}

//single card

// need rating on the recents, need main photo url (cant be null) also price

