import React, { useState, useEffect } from 'react';

export default function FilterReviews({ setReviewList }) {

  const categories = [
    'Drip Brew',
    'Latte',
    'Cappucino',
    'Americano',
    'Espresso',
    'Mocha',
    'Tea',
    'Iced Coffee',
    'Cold Brew'
  ];

  const mapper = [1, 2, 3, 4, 5];

  return (
    <>
      <form className="row g-3 position-sticky">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Filters</h5>
          </div>
          <div className="card-body">
            <h3 className="Rating"></h3>
            <div className="form-check">
              {mapper.map(rating => (
                <>
                  <input
                    key={rating}
                    className="form-check-input"
                    type="checkbox"
                    value={rating}
                  />
                  <label className="form-check-label">stars</label>
                </>
              ))}
            </div>
          </div>
          <div className="card-body">
            <h3 className="card-title">Price</h3>
            <div className="form-check">
              {mapper.map(price => (
                <>
                  <input
                    key={price}
                    className="form-check-input"
                    type="checkbox"
                    value={price}
                  />
                  <label className="form-check-label">$</label>
                </>
              ))}
            </div>
          </div>
          <div className="card-body">
            <select className="form-select">
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </>
  );
}
