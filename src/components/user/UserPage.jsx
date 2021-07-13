import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserHeader from './UserHeader.jsx';

export default function UserPage() {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    axios.get('http://3.239.52.75/api/users/1').then(data => {
      let result = data.data;
      setUserInfo(result);
    });
  }, []);

  console.log('userInfo: ', userInfo);

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