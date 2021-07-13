import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserHeader from './UserHeader.jsx';
import ReviewList from '../../shared-components/ReviewList.jsx';

export default function UserPage() {
  const [userInfo, setUserInfo] = useState({});
  const [reviews, setReviews] = useState([]);

  let userId = 1;
  // Get User Info
  useEffect(() => axios.get(`http://3.239.52.75/api/users/${userId}`).then(({data}) => setUserInfo(data)), []);
  // Get Reviews for User
  useEffect(() => axios.get(`http://3.239.52.75/api/reviews/users/${userId}`).then(data => setReviews(data.data)), []);

  return (
    <div className='profilePageBody'>
      <div className='.wave'></div>
      <main className='profileContainer'>
        <UserHeader userInfo={userInfo} reviews={reviews} />
        <section className='reviewList'>
          <ReviewList />
        </section>
      </main>

    </div>
  );
}