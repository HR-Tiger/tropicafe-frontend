import React from 'react';

export default function Input({type, name, id, placeholder}) {
	return (
			<div className="Input">
				<label htmlFor={id}>{name}</label>
				<input id={id} autoComplete="false" required type={type} placeholder={placeholder} />
			</div>
	)
}