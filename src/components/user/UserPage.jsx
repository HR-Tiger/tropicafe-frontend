import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import UserHeader from './UserHeader.jsx';
import ReviewList from '../../shared-components/ReviewList.jsx';

export default function UserPage() {
  const [userInfo, setUserInfo] = useState({});
  const [reviews, setReviews] = useState([]);

  const location = useLocation();
  const id = location.pathname.split('/')[2];


  let userId = 1;
  // Get User Info
  useEffect(() => axios.get(`http://3.239.52.75/api/users/${id}`).then(({data}) => setUserInfo(data)), []);
  // Get Reviews for User
  useEffect(() => axios.get(`http://3.239.52.75/api/reviews/users/${id}`).then(data => setReviews(data.data)), []);

  return (
    <div className='profilePageBody'>
      <main className='profileContainer'>
        <UserHeader userInfo={userInfo} reviews={reviews} />
        <section className='reviewList'>
          <ReviewList id={id} type={'user'}/>
        </section>
      </main>

    </div>
  );
}