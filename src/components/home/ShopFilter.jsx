import React, { useState, useEffect } from 'react';
import '../../styles/styles.css';


export default function ShopFilter() {
  const [toggleOpenFilter, setToggleOpenFilter] = useState(false);
  const [toggleOpenRating, setToggleOpenRating] = useState(false);
  const [toggleOpenPrice, setToggleOpenPrice] = useState(false);
  const [toggleOpenPet, setToggleOpenPet] = useState(false);
  const [priceFilter, setPriceFilter] = useState('');

  const [isOneStarChecked, setIsOneStarChecked] = useState(false);
  const [isTwoStarChecked, setIsTwoStarChecked] = useState(false);
  const [isThreeStarChecked, setIsThreeStarChecked] = useState(false);
  const [isFourStarChecked, setIsFourStarChecked] = useState(false);
  const [isFiveStarChecked, setIsFiveStarChecked] = useState(false);

  const [isOnePriceChecked, setIsOnePriceChecked] = useState(false);
  const [isTwoPriceChecked, setIsTwoPriceChecked] = useState(false);
  const [isThreePriceChecked, setIsThreePriceChecked] = useState(false);
  const [isFourPriceChecked, setIsFourPriceChecked] = useState(false);
  const [isFivePriceChecked, setIsFivePriceChecked] = useState(false);

  const [isPetTrueChecked, setIsPetTrueChecked] = useState(false);
  const [isPetFalseChecked, setIsPetFalseChecked] = useState(false);

  const handleOneStarChange = () => {
    setIsOneStarChecked(!isOneStarChecked);
  };
  const handleTwoStarChange = () => {
    setIsTwoStarChecked(!isTwoStarChecked);
  };
  const handleThreeStarChange = () => {
    setIsThreeStarChecked(!isThreeStarChecked);
  };
  const handleFourStarChange = () => {
    setIsFourStarChecked(!isFourStarChecked);
  };
  const handleFiveStarChange = () => {
    setIsFiveStarChecked(!isFiveStarChecked);
  };

  const handleOnePriceChange = () => {
    setIsOnePriceChecked(!isOnePriceChecked);
  };
  const handleTwoPriceChange = () => {
    setIsTwoPriceChecked(!isTwoPriceChecked);
  };
  const handleThreePriceChange = () => {
    setIsThreePriceChecked(!isThreePriceChecked);
  };
  const handleFourPriceChange = () => {
    setIsFourPriceChecked(!isFourPriceChecked);
  };
  const handleFivePriceChange = () => {
    setIsFivePriceChecked(!isFivePriceChecked);
  };

  const handlePetTrueChange = () => {
    setIsPetTrueChecked(!isPetTrueChecked);
  };
  const handlePetFalseChange = () => {
    setIsPetFalseChecked(!isPetFalseChecked);
  };


  const updateFilter = () => {

    let priceArray = [];
    isOnePriceChecked && priceArray.push('1');
    isTwoPriceChecked && priceArray.push('2');
    isThreePriceChecked && priceArray.push('3');
    isFourPriceChecked && priceArray.push('4');
    isFivePriceChecked && priceArray.push('5');

    let ratingArray = [];
    isOneStarChecked && ratingArray.push('1');
    isTwoStarChecked && ratingArray.push('2');
    isThreeStarChecked && ratingArray.push('3');
    isFourStarChecked && ratingArray.push('4');
    isFiveStarChecked && ratingArray.push('5');

    let petBoolean = '';
    if (isPetTrueChecked === true && isPetFalseChecked === true) {
      petBoolean = 'none';
    }
    if (isPetTrueChecked === false && isPetFalseChecked === false) {
      petBoolean = 'none';
    }

    if (isPetTrueChecked === true && isPetFalseChecked === false) {
      petBoolean = true;
    }

    if (isPetTrueChecked === false && isPetFalseChecked === true) {
      petBoolean = false;
    }
    let filterBody = {
      rating: ratingArray,
      petfriendly: petBoolean,
      price: priceArray
    };
    console.log(filterBody);
  };


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
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="1" id="1star" checked={isOneStarChecked} onChange={handleOneStarChange} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    ⭐
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="2" id="2star" checked={isTwoStarChecked} onChange={handleTwoStarChange} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    ⭐⭐
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="3" id="3star" checked={isThreeStarChecked} onChange={handleThreeStarChange} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    ⭐⭐⭐
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="4" id="4star" checked={isFourStarChecked} onChange={handleFourStarChange} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    ⭐⭐⭐⭐
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="5" id="5star" checked={isFiveStarChecked} onChange={handleFiveStarChange} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
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
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="1" id="1price" checked={isOnePriceChecked} onChange={handleOnePriceChange} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    $
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="2" id="2price" checked={isTwoPriceChecked} onChange={handleTwoPriceChange} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    $$
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="3" id="3price" checked={isThreePriceChecked} onChange={handleThreePriceChange} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    $$$
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="4" id="4price" checked={isFourPriceChecked} onChange={handleFourPriceChange} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    $$$$
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="5" id="5price" checked={isFivePriceChecked} onChange={handleFivePriceChange} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
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
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="true" id="petTrue" checked={isPetTrueChecked} onChange={handlePetTrueChange} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Yes
                  </label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="false" id="petFalse" checked={isPetFalseChecked} onChange={handlePetFalseChange} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
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
            <button onClick={() => updateFilter()}>Update</button>
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



