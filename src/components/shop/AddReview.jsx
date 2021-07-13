import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddReview() {
  const [review, setReview] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>

      </form>
    </>
  );
}