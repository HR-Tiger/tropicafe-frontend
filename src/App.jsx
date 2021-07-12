import React from 'react';
import './styles/sass.scss';
import Navigation from './Navigation.jsx';
import ShopHeader from './components/shop/ShopHeader.jsx';

export default function App() {
  return (
    <>
      <Navigation />
      <ShopHeader />
    </>
  );
}