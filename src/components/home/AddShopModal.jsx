import React, { useState, useEffect } from 'react';
import '../../styles/styles.css';
import ImageInput from '../shop/ImageInput.jsx';


export default function AddShopModal({ toggleAddShopModal }) {
  const [shopName, setShopName] = useState('');
  const [shopPrice, setShopPrice] = useState('');
  const [shopAddress, setShopAddress] = useState('');
  const [shopPetFriendly, setShopPetFriendly] = useState('');
  const [shopCity, setShopCity] = useState('');
  const [shopState, setShopState] = useState('');
  const [shopZip, setShopZip] = useState('');
  const [shopWebsite, setShopWebsite] = useState('');
  const [shopPhone, setShopPhone] = useState('');
  const [files, setFiles] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', shopName);
    formData.append('address', shopAddress);
    formData.append('city', shopCity);
    formData.append('zip', shopZip);
    formData.append('phone_number', shopPhone);
    formData.append('price', parseInt(shopPrice));
    formData.append('phone_number', shopPhone);
    formData.append('website', shopWebsite);
    formData.append('animal_friendly', shopPetFriendly);
    formData.append('photos', files);

    // for (var pair of formData.entries()) {
    //   console.log(pair);
    // }

    const headers = { 'Content-Type': 'multipart/form-data' };

    // axios.post(`${api}/reviews/${shopId}`, formData, headers)
    //   .then(res => console.log(res))
    //   .catch(e => console.log(e));

    console.log('form submitted', formData);
    setShopName('');
    setShopPrice('');
    setShopAddress('');
    setShopPetFriendly('');
    setShopCity('');
    setShopState('');
    setShopZip('');
    setShopWebsite('');
    setShopPhone('');
    setFiles('');
    toggleAddShopModal(event, false);
    alert('Thank you for adding a shop to our page!');
  };

  return (
    <>
      <div className='modalWrapper'>
        <div className='modalContainer'>
          <button onClick={() => toggleAddShopModal(event, false)} type="button" className="btn-close" aria-label="Close"></button>

          <h3>Add a New Coffee Shop!</h3>
          <form onSubmit={handleSubmit}>
            <div className="row addForm">
              <div className="col">
                <label htmlFor="shopName" className="form-label">Shop Name</label>
                <input type="text" className="form-control" value={shopName} onChange={(event) => setShopName(event.target.value)} />
              </div>


            </div>
            <div className="row g-3 addForm">
              <div className="col-sm-5">
                <label htmlFor="address" className="form-label">Street Address</label>
                <input type="text" className="form-control" value={shopAddress} onChange={(event) => setShopAddress(event.target.value)} />
              </div>

              <div className="col-sm-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" value={shopCity} onChange={(event) => setShopCity(event.target.value)} />
              </div>

              <div className="col-sm">
                <label htmlFor="state" className='form-label'>State</label>
                <select className="form-select" id="state" name="state" value={shopState} onChange={(event) => setShopState(event.target.value)}>
                  <option value="">Select</option>
                  <option value="AK">Alaska</option>
                  <option value="AL">Alabama</option>
                  <option value="AR">Arkansas</option>
                  <option value="AZ">Arizona</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DC">District of Columbia</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="IA">Iowa</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MD">Maryland</option>
                  <option value="ME">Maine</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MO">Missouri</option>
                  <option value="MS">Mississippi</option>
                  <option value="MT">Montana</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="NE">Nebraska</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NV">Nevada</option>
                  <option value="NY">New York</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VA">Virginia</option>
                  <option value="VT">Vermont</option>
                  <option value="WA">Washington</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WV">West Virginia</option>
                  <option value="WY">Wyoming</option>
                </select>

              </div>

              <div className="col-sm">
                <label htmlFor="zip" className="form-label">Zipcode</label>
                <input type="text" className="form-control" value={shopZip} onChange={(event) => setShopZip(event.target.value)} />
              </div>
            </div>


            <div className="row g-3 addForm">
              <div className="col-sm-5">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="text" className="form-control" value={shopPhone} onChange={(event) => setShopPhone(event.target.value)} />
              </div>
              <div className="col-sm">
                <label htmlfFor="price" className="form-label">Price Level</label>

                <select value={shopPrice} className="form-select" onChange={(event) => setShopPrice(event.target.value)}>
                  <option value="">Select</option>
                  <option value="1">$</option>
                  <option value="2">$$ </option>
                  <option value="3">$$$ </option>
                  <option value="4">$$$$ </option>
                  <option value="5">$$$$$ </option>
                </select>

              </div>

              <div className="col-sm">
                <label htmlFor="petFriendly" className="form-label">Are they pet friendly?</label>
                <select value={shopPetFriendly} className="form-select" onChange={(event) => setShopPetFriendly(event.target.value)}>
                  <option value="">Select</option>
                  <option value={true}>Yes!</option>
                  <option value={false}>No </option>
                </select>
              </div>
            </div>
            <div className="row g-3 addForm">
              <div className="col">
                <label htmlFor="website" className="form-label">Website URL</label>
                <input type="text" className="form-control" value={shopWebsite} onChange={(event) => setShopWebsite(event.target.value)} />
              </div>

              <ImageInput setFiles={setFiles} />
            </div>

            <input className="btn btn-primary" type="submit" value="Submit Shop" />
          </form>

        </div>
      </div>

    </>
  );
}

//single card