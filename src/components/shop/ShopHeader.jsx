import React, { useState, useEffect } from 'react';
import StarRating from './StarRating.jsx';
import AddReview from './AddReview.jsx';
import comingSoon from '../../../dist/coming-soon.jpg';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '7rem',
  alignItems: 'center'
};

export default function ShopHeader({ shop }) {
  const [showModal, setShowModal] = useState(false);

  const displayPrice = () => {
    let mapper = Array.from({length: shop.price}, (v, i) => i);

    return mapper.map((dollar, i) => {
      return (
        <div key={i} style={{display: 'inline'}}>
          <i className="fas fa-dollar-sign"></i>
        </div>
      );
    });
  };

  // Just so it isn't 100 characters long
  shop.website = shop.website.slice(0, 20);

  var imageURL = shop.photos ? shop.photos[0].url : comingSoon;

  return (
    <div className="container mx-auto mt-5">
      <div className="row justify-content-md-center mb-2">
        <div className="col-md-6">
          <div className="card flex-lg-row mb-4 p-4 box-shadow h-md-250">
            <img
              src={imageURL}
              className="card-img-left flex-auto d-none d-md-block rounded"
              alt={`${shop.name} photo`}
            />
            <div className="card-body d-flex flex-column align-items-start">
              <h1 className="display-3">Bill's Coffee</h1>
              <StarRating Rating={shop.avg_rating} />
              {shop.price && (
                <div>
                  {displayPrice()}
                </div>
              )}
              {shop.animal_friendly && (
                <div style={style}>
                  <i className="fas fa-paw"></i>
                  <p className="card-text">Pet friendly</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h4>Contact:</h4>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{shop.phone_number}</li>
              <li className="list-group-item">
                <a
                  href={`http://maps.google.com/?q=${shop.address} ${shop.city}, ${shop.state} ${shop.zip}`}
                  target="_blank">
                    Get directions
                </a>
                <br></br>
                {shop.address} {shop.city}, {shop.state} {shop.zip}
              </li>
              <li className="list-group-item card-link">{shop.website}</li>
            </ul>
          </div>
          <button className="btn btn-outline-primary my-3 sm-button" onClick={() => setShowModal(true)}>Add a review</button>
        </div>
      </div>

      {showModal && <AddReview shopId={shop.shop_id} setShowModal={setShowModal} />}

    </div>
  );
}

