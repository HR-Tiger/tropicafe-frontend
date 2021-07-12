import React from 'react';

const Review = ( { review } ) => {


  const convertDate = (timeStamp) => {
    var date = new Date(Number(timeStamp));
    date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return date;
  };

  if (!review.photos) {
    review.photos = [];
  }

  return (
    <div className='review'>
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="pic" alt="..."></img>
      <div className='username'>{review.user[0].first_name}</div>
      <div className='location'>{review.user[0].city}</div>
      <div className='rating'>Rating : {review.rating}</div>
      <div className='date'>{convertDate(review.date)}</div>
      <div className='review-text'>{review.description}</div>
      <div className='photos'>
        {review.photos.map(photo => {
          return <img src={photo.url} className="photo" key={Math.floor(Math.random() * 100)} alt="..."></img>;
        })}
        {/* <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg" className="photo" alt="..."></img>
        <img src="https://foolproofliving.com/wp-content/uploads/2019/03/Turkish-Coffee-Recipe-640x640.jpg" className="photo" alt="..."></img>
        <img src="https://www.thecookierookie.com/wp-content/uploads/2018/07/bulletproof-coffee-recipe-5-of-9.jpg" className="photo" alt="..."></img> */}
      </div>
      <div className='helpful btn btn-outline-light'>helpful</div>
    </div>
  );
};

export default Review;