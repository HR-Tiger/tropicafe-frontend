import React from 'react';
import Input from './Input.jsx';

export default function Login ({flipCard, onSubmit}) {
  return (
    <div className="login">
      <form onSubmit={onSubmit} className="ModalForm">
        <h3>Log In <span className="flipper" onClick={flipCard}>Sign Up</span></h3>
        <Input id="email" name="Email" type="email" placeholder="name@gmail.com" />
        <Input id="password" name="Password" type="password" placeholder="password" />
        <button>Log in</button>
      </form>
    </div>
  );
}
