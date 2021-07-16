import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';

import Home from './components/home/Home.jsx';
import AuthPage from './components/auth/AuthPage.jsx';
import Shop from './components/shop/Shop.jsx';
import UserPage from './components/user/UserPage.jsx';
import ShopPage from './components/shop/ShopPage.jsx';
import ReviewList from './shared-components/ReviewList.jsx';
import isAuth from './lib/isAuth.js';
import getCurrentUser from './lib/getCurrentUser.js';
import logout from './lib/logout.js';

export default function Navigation() {

  let handleLogout = (e) => {
    logout();
    window.location.reload();
  };

  let loginLink = <Link className="nav-link" to={{
    pathname: '/login',
    state: { type: 'login' }
  }}> Login </Link>;

  let signupLink = <Link className="nav-link" to={{
    pathname: '/signup',
    state: { type: 'registration' }
  }}> Sign Up </Link>;

  let profileLink = <Link className="nav-link" to={`/user/${getCurrentUser()}`}>My profile</Link>;

  return (

    <Router>

      <div className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">TropiCafè</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-md-center">
            <div className="navbar-nav">

              <Link className="nav-link" to="/">Home</Link>
              { !isAuth() && loginLink}
              { !isAuth() && signupLink }
              {isAuth() && profileLink }
              {isAuth() && <button className='logoutBtn' onClick={handleLogout}>LOGOUT</button>}
            </div>
          </div>
        </div>
      </div>

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login" replace>
          <AuthPage type={'login'} />
        </Route>

        <Route exact path="/signup" replace>
          <AuthPage type={'registration'} />
        </Route>

        <Route path="/user">
          <UserPage />
        </Route>

        <Route path="/reviews">
          <ReviewList />
        </Route>

        <Route path="/shop/:id" component={ShopPage} />

        <Route path="/user/:id" component={UserPage} />

      </Switch>

    </Router>
  );
}
