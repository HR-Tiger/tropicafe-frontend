import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Login from './Login.jsx';
import Registration from './Registration.jsx';

export default function AuthPage(props) {
  const [isLogin, setIsLogin] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
	}

	let flipCard = () => setIsLogin(!isLogin);

	let login =  (<Login onSubmit={handleSubmit} flipCard={flipCard} />);
  let registration = (<Registration onSubmit={handleSubmit} flipCard={flipCard} />);

		return (
			<div className="authPageBody">
				<h1>Welcome to Tropicafé!</h1>
				{isLogin ? login : registration}
			</div>
		);
}
