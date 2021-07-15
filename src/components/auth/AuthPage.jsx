import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Login from './Login.jsx';
import Registration from './Registration.jsx';
import axios from 'axios';
import { endpoints } from '../../lib/endpoints.js';

import { URL } from '../../config.js';

export default function AuthPage(props) {
  const [isLogin, setIsLogin] = useState(false);
  let baseUrl = `http://${URL}`;

  let registerFunc = (data) => {
    console.log('data: ', data);
    axios({
      method: 'post',
      url: `${baseUrl}${endpoints.postRegister}`,
      // url: `${baseUrl}auth/register`,
      data: data,
    })
      .then((res)=> {
        let token = res.data.token;
        console.log(token);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };

  const loginFunc = (data) => {


    axios({
      method: 'post',
      url: `${baseUrl}${endpoints.postLogin}`,
      //url: `${baseUrl}auth/login`,
      data: data,
    }).then((res)=> {
      let token = res.data.token;
      localStorage.setItem('token', token);
      console.log(token);
    }).catch((err) => {
      console.error(err);
    });
  };

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
