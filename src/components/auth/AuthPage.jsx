import React from 'react';
import { useLocation } from 'react-router-dom';

export default function AuthPage() {
  const location = useLocation();

  // this comes from the state passed to the link
  // you can use this to conditionally render the correct component
  const login = location.state && location.state.login;

  return (
    <>
    </>
  );
}
