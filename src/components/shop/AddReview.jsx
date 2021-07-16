import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageInput from './ImageInput.jsx';
import Star from '../../shared-components/Star.jsx';
import { api } from '../../lib/api.js';
import { endpoints } from '../../lib/endpoints.js';
import { URL } from '../../config.js';

export default function AddReview({ shopId, setShowModal }) {
  const mapper = [1, 2, 3, 4, 5];
  const defaultValues = {
    rating: 0,
    category: '',
    summary: '',
    description: ''
  };
  const [review, setReview] = useState(defaultValues);
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
    console.log('does it work');
    e.preventDefault();
    setIsSubmitted(true);
    const formData = new FormData();
    formData.append('rating', 5);
    formData.append('user_id', 1);
    formData.append('category', review.category);
    formData.append('summary', review.summary);
    formData.append('description', review.description);

    if (files) {
      for (const file of files) {
        formData.append('photos', file);
      }
    }

    const headers = {'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*'};

    axios.post(`http://${URL}${endpoints.postReview}${shopId}`, formData, headers)
      .then(res => console.log(res))
      .catch(e => console.log(e));

    setReview(defaultValues);
    setFiles();
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
            <div className="mb-3">
              <label className="form-label">Rating</label>
              <div className="mb-3">
                {mapper.map((num, i) => (
                  <Star key={i} i={i + 1} rating={review.rating} setReview={setReview} />
                ))}
              </div>
            </div>
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
                  value={review.summary}
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
                value={review.description}
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

