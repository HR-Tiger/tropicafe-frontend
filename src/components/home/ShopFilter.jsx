import React, { useState, useEffect } from 'react';
import '../../styles/styles.css';


export default function ShopFilter() {
  const [toggleOpenFilter, setToggleOpenFilter] = useState(false);
  const [toggleOpenRating, setToggleOpenRating] = useState(false);
  const [toggleOpenPrice, setToggleOpenPrice] = useState(false);
  const [toggleOpenPet, setToggleOpenPet] = useState(false);
  const [priceFilter, setPriceFilter] = useState('');


  return (
    <>
      <div className='filterWrapper'>
        {toggleOpenFilter ? (<>
          <div>
            <button onClick={() => setToggleOpenFilter(false)}>X</button>

            {toggleOpenRating ? (<>
              <div>
                <button onClick={() => setToggleOpenRating(false)}>X</button>
                <h6>Rating</h6>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    ⭐
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    ⭐⭐
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    ⭐⭐⭐
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    ⭐⭐⭐⭐
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    ⭐⭐⭐⭐⭐
                  </label>
                </div>
              </div>
            </>
            ) : (
              <>
                <div>
                  <button onClick={() => setToggleOpenRating(true)}>Rating</button>
                </div>
              </>)}

            {toggleOpenPrice ? (<>
              <div>
                <button onClick={() => setToggleOpenPrice(false)}>X</button>
                <h6>Price Range</h6>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    $
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    $$
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    $$$
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    $$$$
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    $$$$$
                  </label>
                </div>
              </div>
            </>
            ) : (
              <>
                <div>
                  <button onClick={() => setToggleOpenPrice(true)}>Price Range</button>
                </div>
              </>)}


            {toggleOpenPet ? (<>
              <div>
                <button onClick={() => setToggleOpenPet(false)}>X</button>
                <h6>Pet Friendly</h6>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    Yes
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    No
                  </label>
                </div>
              </div>
            </>
            ) : (
              <>
                <div>
                  <button onClick={() => setToggleOpenPet(true)}>Pet Friendly</button>
                </div>
              </>)}

          </div>
        </>
        ) : (
          <>
            <div>
              <button onClick={() => setToggleOpenFilter(true)}>Filter</button>
            </div>
          </>)}
      </div>
    </>
  );
}



