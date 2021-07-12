import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Input({type, name, id, placeholder}) {
	return (
			<div className="Input">
				<label htmlFor={id}>{name}</label>
				<input id={id} autoComplete="false" required type={type} placeholder={placeholder} />
			</div>
	)
}

function Login({flipCard, onSubmit}) {
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

function Signup({flipCard, onSubmit}) {
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

export default function AuthPage(props) {
  const [isLogin, setIsLogin] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
	}

	let flipCard = () => setIsLogin(!isLogin);

	let login =  (<Login onSubmit={handleSubmit} flipCard={flipCard}/>);
  let signup = (<Signup onSubmit={handleSubmit} flipCard={flipCard}/>);

		return(
			<div className="authPageBody">
				<h1>Welcome to Tropicafé!</h1>
					{isLogin ? login : signup}
			</div>
		);
}
