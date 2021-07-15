import React, { useState, useEffect } from 'react';

export default function Star({ i, rating, setReview }) {

  const [color, setColor] = useState();

  useEffect(() => {
    setColor(() => (
      i <= rating ? 'gold' : 'black'
    ));
  }, [rating]);

  return (
    <>
      <i
        key={i}
        className="fas fa-star"
        style={{color: color}}
        onClick={() => setReview(prev => ({...prev, rating: i}))}
      ></i>
    </>
  );
}
