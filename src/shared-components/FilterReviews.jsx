import React, { useState, useEffect } from 'react';
import Icons from './Icons.jsx';

export default function FilterReviews({ setReviewList }) {
  const [filters, setFilters] = useState({
    rating: [1, 2, 3, 4, 5],
    price: [1, 2, 3, 4, 5],
    category: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // app.get('/api/reviews/users/:id',
  // app.get('/api/shops/:id/reviews'

  const categories = [
    'Drip Brew',
    'Latte',
    'Cappuccino',
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
      <div className="card position-sticky my-3" style={{width: '15rem'}}>
        <form>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4 className="card-title">Filters</h4>
            </li>
            <li className="list-group-item">
              <h5 className="card-title">Rating</h5>
              <div className="form-check">
                {mapper.map(rating => {
                  return (
                    <div className="checkbox" key={rating}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={rating}
                      />
                      <label className="form-check-label">
                        <Icons icon="star" i={rating} />
                      </label>
                    </div>
                  );
                })}
              </div>
            </li>
            <li className="list-group-item">
              <h5 className="card-title">Price</h5>
              <div className="form-check">
                {mapper.map(price => (
                  <div className="checkbox" key={price}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={price}
                    />
                    <label className="form-check-label">
                      <Icons icon="dollar" i={price} />
                    </label>
                  </div>
                ))}
              </div>
            </li>
            <li className="list-group-item">
              <h5 className="card-title">Drink type</h5>
              <select className="form-select">
                <option value="">Select a drink</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </li>
            <li className="list-group-item">
              <input
                className="btn btn-primary"
                type="submit"
                value="Update"
                onClick={handleSubmit}
              />
              <button
                className="btn btn-primary sm-button"
                type="button"
                onClick={() => setFilters({})}
              >
                Clear
              </button>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}
