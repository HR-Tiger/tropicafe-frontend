import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import UserHeader from './UserHeader.jsx';
import ReviewList from '../../shared-components/ReviewList.jsx';
import { endpoints } from '../../lib/endpoints.js';

import {URL} from '../../config.js';

export default function UserPage() {
  const [userInfo, setUserInfo] = useState({});
  const [reviews, setReviews] = useState([]);

  const location = useLocation();
  const id = location.pathname.split('/')[2];


  let userId = 1;
  // Get User Info
  useEffect(() => axios.get(`http://${URL}${endpoints.getUser}${id}`).then(({data}) => setUserInfo(data)), []);
  // Get Reviews for User
  useEffect(() => axios.get(`http://${URL}${endpoints.getUserReviews}${id}`).then(data => setReviews(data.data)), []);

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