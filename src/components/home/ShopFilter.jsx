import React, { useState, useEffect } from 'react';
import '../../styles/styles.css';


export default function ShopFilter() {
  const [toggleOpenFilter, setToggleOpenFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState('');



  return (
    <>
      {toggleOpenFilter ? (<>
        <div>
          <button onClick={() => setToggleOpenFilter(false)}>X</button>
          <h3>Filter</h3>





          <div className="col">
            <label htmlfFor="price" className="form-label">Price Level</label>
            <select multiple={true} value={priceFilter} onChange={(event) => setPriceFilter(event.target.value)}className="form-select">
              <option value="">Select</option>
              <option value="1">$</option>
              <option value="2">$$ </option>
              <option value="3">$$$ </option>
              <option value="4">$$$$ </option>
              <option value="5">$$$$$ </option>
            </select>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              Pet Friendly
            </label>
          </div>

        </div>
      </>
      ) : (
        <>
          <div>
            <button onClick={() => setToggleOpenFilter(true)}>Filter</button>
          </div>
        </>)}
    </>
  );
}

