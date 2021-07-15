import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageInput from './ImageInput.jsx';
import { api } from '../../lib/api.js';
import { endpoints } from '../../lib/endpoints.js';
import { URL } from '../../config.js';

export default function AddReview({ shopId, setShowModal }) {
  const [review, setReview] = useState({shop_id: shopId});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [files, setFiles] = useState();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const formData = new FormData();
    formData.append('category', review.category);
    formData.append('summary', review.summary);
    formData.append('description', review.description);
    formData.append('photos', files);

    // for (var pair of formData.entries()) {
    //   console.log(pair);
    // }

    const headers = {'Content-Type': 'multipart/form-data'};

    axios.post(`http://${URL}${endpoints.postReview}${shopId}`, formData, headers)
      .then(res => console.log(res))
      .catch(e => console.log(e));
  };

  return (
    <div className="modalWrapper">
      <div className="modalContainer">
        <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
        <div className="row justify justify-content-center">
          <form onSubmit={handleSubmit}>
            <div className="row mt-0">
              <div className="col-md-12 ">
                <h4 className="">Add a review</h4>
              </div>
            </div>
            {/* RATING COMPONENT */}
            <div className="form-group row">
              <div className="col">
                <label className="form-label">Category</label>
                <select
                  className="form-select form-select-md mb-3"
                  aria-label="add-review"
                  value={review.category}
                  required
                  onChange={(e) => {
                    setReview(prev => ({...prev, category: e.target.value}));
                  }}>
                  <option value="">Choose a drink category</option>
                  {categories.map(category => {
                    return (
                      <option key={category} value={category}>{category}</option>
                    );
                  })}
                </select>
              </div>
              <div className="col">
                <label className="form-label">Summary</label>
                <input
                  className="form-control"
                  type="text"
                  rows="3"
                  placeholder="So delicious!!!"
                  required
                  onChange={(e) => {
                    setReview(prev => {
                      return {...prev, summary: e.target.value};
                    });
                  }}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Write a description</label>
              <textarea
                className="form-control"
                placeholder="What made it so great?"
                required
                onChange={(e) => {
                  setReview(prev => ({...prev, description: e.target.value}));
                }}
              />
            </div>
            <ImageInput setFiles={setFiles} />
            <div className="">
              <button type="submit" className="btn btn-primary sm-button">Submit</button>
              {!isSubmitted && (
                <button
                  className="btn btn-primary ms-3 sm-button"
                  type="button"
                  onClick={() => setShowModal(false)}>
                    Cancel
                </button>
              )}
              { isSubmitted && (
                <>
                  <button
                    className="btn btn-primary mx-3 sm-button"
                    type="button"
                    onClick={() => setShowModal(false)}>
                      Close
                  </button>
                  <span>Thanks for your review!</span>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

