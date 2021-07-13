import React, { useState, useEffect } from 'react';
import comingSoon from '../../../dist/coming-soon.jpg';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '7rem',
  alignItems: 'center'
};

export default function ShopHeader({ shop }) {

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

  var imageURL = shop.photos ? shop.photos[0].url : comingSoon;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src={imageURL}
            className="rounded float-start"
            alt={`${shop.name} photo`}
          />
        </div>
        <div className="col">
          <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">{shop.name}</h5>
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
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{shop.phone_number}</li>
              <li className="list-group-item">{shop.address} {shop.city}, {shop.state} {shop.zip}</li>
              <li className="list-group-item card-link">{shop.website}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
