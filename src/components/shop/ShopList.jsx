import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Shop from './Shop.jsx';
import '../../styles/styles.css';

const ShopList = ({ ShopList }) => {


  return (

    <div className='shopListContainer'>
      {ShopList.map((shop => {
        return <Shop key={shop.shop_id} shop={shop} />;

      }))}
    </div>

  );
};
export default ShopList;



