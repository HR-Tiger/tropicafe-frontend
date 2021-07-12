import React from 'react';

const StarRating = ({ Rating }) => {

  let percentage = Rating * 20;

  /* ** STYLE TO BE ADDED WITH PERCENTAGE AMOUNT ** */
  let divStyle = {
    backgroundImage: `-webkit-linear-gradient(left, gold ${percentage}%, #333 ${percentage}%)`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <div className={`${'productRating'} ${'star'}`} >
      <div className={'dark-star'}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      <div className={'rating-star'} style={divStyle}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
    </div>
  );
};

export default StarRating;