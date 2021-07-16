import React from 'react';

export default function UserHeader({userInfo, reviews}) {
  let profilePhoto = userInfo.profile_photo_url;
  if (!profilePhoto) {
    profilePhoto = '../../../storage/default-profile.jpeg';
  }
  console.log('profileP: ', profilePhoto);

  return (
    <div className='userHeader'>
      <img src={`${profilePhoto}` } />

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