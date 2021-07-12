import React from 'react';
import Input from './Input.jsx';

export default function Registration ({flipCard, onSubmit}) {
  return (
    <div className="login">
      <form onSubmit={onSubmit} className="ModalForm">
        <h3>Sign Up<span className="flipper" onClick={flipCard}>Log In</span></h3>
        <Input id="fName" name="First Name" type="text" placeholder="Ruby" />
        <Input id="lName" name="Last Name" type="text" placeholder="Von Rails" />
        <Input id="email" name="Email" type="email" placeholder="ruby@gmail.com" />
        <Input id="password" name="Password" type="password" placeholder="password" />
        <button>Log in</button>
      </form>
    </div>
  );
}