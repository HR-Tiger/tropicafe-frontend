import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Registration ({flipCard, registerFunc}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    registerFunc(
      {username,
        email,
        password,
        firstName,
        lastName}
    );
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="ModalForm">
        <h3>Sign Up<span className="flipper" onClick={flipCard}>Log In</span></h3>
        <div className='Input' >
          <input id="fName" name="First Name" type="text" placeholder="Ruby" onChange={e => setFirstName(e.target.value)} />
        </div>
        <div className='Input' >
          <input id="lName" name="Last Name" type="text" placeholder="Von Rails" onChange={e => setLastName(e.target.value)} />
        </div>
        <div className='Input' >
          <input id="username" name="Username" type="text" placeholder="rubberbird" onChange={e => setUsername(e.target.value)} />
        </div>
        <div className='Input' >
          <input id="email" name="Email" type="email" placeholder="ruby@gmail.com" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='Input' >
          <input id="password" name="Password" type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <button className='loginBtn'>Register</button>
      </form>
    </div>
  );
}