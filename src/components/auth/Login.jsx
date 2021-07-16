import React, { useState, useEffect } from 'react';

export default function Login ({flipCard, loginFunc}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    loginFunc({
      username,
      password,
    });
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="ModalForm">
        <h3>Log In <span className="flipper" onClick={flipCard}>Sign Up</span></h3>
        <div className='Input'>
          <input id="username" name="Username" type="text" placeholder="rubberbird" onChange={e => setUsername(e.target.value)}/>
        </div>
        <div className='Input'>
          <input id="password" name="Password" type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
        </div>

        <button className='loginBtn'>Log in</button>
      </form>
    </div>
  );
}
