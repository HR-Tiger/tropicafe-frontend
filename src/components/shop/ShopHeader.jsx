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
  'photos': [
    {
      'url': 'http://dummyimage.com/101x100.png/cc0000/ffffff'
    },
    {
      'url': 'http://dummyimage.com/235x100.png/ff4444/ffffff'
    },
    {
      'url': 'http://dummyimage.com/212x100.png/cc0000/ffffff'
    }
  ]
};

export default function ShopHeader() {


  return (
    <div className="shop-header">

      <img
        className="img-thumbnail"
        src={shop.photos[0]}
      />

      <div className="shop-info">

        <div className="shop-address">
          {shop.address}
          {shop.city}, {shop.state} {shop.zip}
          {shop.phone_number}
          {shop.website}
        </div>

        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{shop.website}</li>
            <li className="list-group-item">{shop.address} {shop.city} {shop.state} </li>
            <li className="list-group-item">{shop.website}</li>
          </ul>
        </div>

        <div>

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

