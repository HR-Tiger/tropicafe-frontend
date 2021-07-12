import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserHeader from './UserHeader.jsx';

export default function UserPage() {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    let data = {
      address: '58758 Caliangt Junction',
      city: 'Landskrona',
      email: 'aredfearn0@disqus.com',
      first_name: 'Arty',
      last_name: 'Redfearn',
      profile_photo_url: 'http://dummyimage.com/172x100.png/ff4444/ffffff',
      state: 'M',
      user_id: 1,
      zip: 1
    };

    setUserInfo(data);
    // let data = axios.get('http://3.239.52.75/api/users/1').then(data => {
    //   console.log('data: ', data.data);
    // }).then(result => result);
  }, []);

  return (
    <div className='profilePageBody'>
      <div className='.wave'></div>
      <main className='profileContainer'>
        <UserHeader userInfo={userInfo} />
        <section className='reviewList'>

        </section>
      </main>

    </div>
  );
}