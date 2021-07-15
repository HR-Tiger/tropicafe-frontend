import React, { useState, useEffect } from 'react';

export default function Star({ i, rating, setReview }) {

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    i <= rating ? setIsClicked(true) : setIsClicked(false);
  }, [rating]);

  const handleClick = () => {
    setReview(prev => ({...prev, rating: i}));
    setIsClicked(!isClicked);
  };

  return (
    <>
      <i
        key={i}
        className={isClicked ? 'fas fa-star after-click' : 'fas fa-star click-stars'}
        onClick={handleClick}
      ></i>
    </>
  );
}
