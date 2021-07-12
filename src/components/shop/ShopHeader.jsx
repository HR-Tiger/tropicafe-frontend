import React, { useState, useEffect } from 'react';

export default function ShopHeader({ shop }) {


  return (
    <div className="shop-header">

      <img
        className="img-thumbnail"
        src={shop.image}
      />

      <div className="shop-info">

        <div className="shop-address">
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