import React, { useState, useEffect } from 'react';
import '../../styles/styles.css';

export default function AddShopModal({ toggleAddShopModal }) {
  const [shopName, setshopName] = useState('');
  const [shopPrice, setshopPrice] = useState('');
  const [shopAddress, setshopAddress] = useState('');
  const [shopPetFriendly, setshopPetFriendly] = useState('');

  const handleNameChange = (event) => {
    setshopName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setshopAddress(event.target.value);
  };
  const handlePriceChange = (event) => {
    setshopPrice(event.target.value);
  };
  const handlePetFriendlyChange = (event) => {
    setshopPetFriendly(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted', shopName, shopPrice, shopAddress, shopPetFriendly);
    setshopName('');
    setshopPrice('');
    setshopAddress('');
    setshopPetFriendly('');
    toggleAddShopModal(event, false);
    alert('Thank you for adding a shop to our page!');
  };

  return (
    <>
      <div className='modalWrapper'>
        <div className='modalContainer'>
          <button onClick={() => toggleAddShopModal(event, false)}>X</button>
          <h3>Add a New Coffe Shop!</h3>
          <form onSubmit={handleSubmit}>
            <div className="row ">
              <div className="col">
                <label htmlFor="shopName" className="form-label">Shop Name</label>
                <input type="text" className="form-control" value={shopName} onChange={handleNameChange} />
              </div>

              <div className="col">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" value={shopAddress} onChange={handleAddressChange} />
              </div>

              <div className="col">
                <label htmlFor="price" className="form-label">Price Level</label>
                <select value={shopPrice} className="form-select" onChange={handlePriceChange}>
                  <option value="">Select</option>
                  <option value="1">$</option>
                  <option value="2">$$ </option>
                  <option value="3">$$$ </option>
                  <option value="4">$$$$ </option>
                  <option value="5">$$$$$ </option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="petFriendly" className="form-label">Are they pet friendly?</label>
                <select value={shopPetFriendly} className="form-select" onChange={handlePetFriendlyChange}>
                  <option value="">Select</option>
                  <option value="true">Yes!</option>
                  <option value="false">No </option>
                </select>
              </div>
            </div>
            <input className="btn btn-primary" type="submit" value="Submit Shop" />
          </form>

        </div>
      </div>

    </>
  );
}

//single card