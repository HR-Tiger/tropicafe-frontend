import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Login from './Login.jsx';
import Registration from './Registration.jsx';
import axios from 'axios';
import { endpoints } from '../../lib/endpoints.js';

import { URL } from '../../config.js';

export default function AuthPage({type}) {
  const [isLogin, setIsLogin] = useState(type === 'login');
  let history = useHistory();

  let handleLogin = (data) => {
    localStorage.setItem('userId', data.user_id);
    localStorage.setItem('token', data.token);
    history.push('/');
    window.location.reload();
  };


  let postAuth = (data, endpoint) => {
    axios({
      method: 'post',
      url: `${baseUrl}auth/${endpoint}`,
      data: data,
    }).then((res)=> handleLogin(res.data)).catch((err) => console.log('err: ', err));
  };

  let registerFunc = data => postAuth(data, 'register');
  let loginFunc = data => postAuth(data, 'login');

  let flipCard = () => setIsLogin(!isLogin);

  let login = (<Login loginFunc={loginFunc} flipCard={flipCard} />);
  let registration = (<Registration registerFunc={registerFunc} flipCard={flipCard} />);

  return (
    <div className="authPageBody">
      <h1>Welcome to Tropicafé!</h1>
      {isLogin ? login : registration}
    </div>
  );
}
