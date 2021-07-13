import React from 'react';

export default function UserHeader({userInfo, reviews}) {

  return (
    <div className='userHeader'>
      <img src={`${userInfo.profile_photo_url}`} />

      <div className='profileInfoContainer'>
        <div className='info'>
          <div className='title'>{userInfo.first_name}</div>
          <div className='txt'>Name</div>
        </div>
        <div className='info'>
          <div className='title'>{reviews.length}</div>
          <div className='txt'>Reviews</div>
        </div>

        <div className='info'>
          <div className='title'>{userInfo.city}</div>
          <div className='txt'>City</div>
        </div>
        <div className='info'>
          <div className='title'>{userInfo.state ? userInfo.state : 'N/A'}</div>
          <div className='txt'>State</div>
        </div>


      </div>
    </div>
  );
}