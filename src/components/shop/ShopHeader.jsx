import React, { useState, useEffect } from 'react';

let shop = {
  'shop_id': 1,
  'name': 'sit',
  'address': '2 Reinke Road',
  'city': 'Naples',
  'state': 'FL',
  'zip': 112,
  'date': '1604901282000',
  'phone_number': '239-398-1215',
  'website': 'https://bing.com',
  'animal_friendly': true,
  'price': 3,
  'photos': [
    {
      'url': 'http://dummyimage.com/300X300.png/cc0000/ffffff'
    },
    {
      'url': 'http://dummyimage.com/235x100.png/ff4444/ffffff'
    },
    {
      'url': 'http://dummyimage.com/212x100.png/cc0000/ffffff'
    }
  ]
};

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '7rem',
  alignItems: 'center'
};

export default function ShopHeader() {

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

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src={shop.photos[0].url}
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



// {
//   id,
//   name,
//   location: {
//     address,
//     city,
//     state,
//     zip
//   }
//   phone_number,
//   price
//   website,
//   animal_friendly
//   reviews,
//   rating
// }

