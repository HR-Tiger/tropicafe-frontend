import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Login from './Login.jsx';
import Registration from './Registration.jsx';
import axios from 'axios';

export default function AuthPage({setCurrentUsername}) {
  const [isLogin, setIsLogin] = useState(false);
  let baseUrl = 'http://3.239.52.75/api/';

  let registerFunc = (data) => {
    axios({
      method: 'post',
      url: `${baseUrl}auth/register`,
      data: data,
    }).then((res)=> {
      let token = res.data.token;
      setCurrentUsername(data.username);
      console.log(token);
    }).catch((err) => {
      console.log('err: ', err);
    });
  };

  const loginFunc = (data) => {
    axios({
      method: 'post',
      url: `${baseUrl}auth/login`,
      data: data,
    }).then((res)=> {
      console.log("resData: ", res);
      setCurrentUsername(data.username);
      let token = res.data.token;
      localStorage.setItem('token', token);
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
