import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/home/Home.jsx';
import AuthPage from './components/auth/AuthPage.jsx';
// import Login from './components/auth/Login.jsx';
// import Registration from './components/auth/Registration.jsx';
import Shop from './components/shop/Shop.jsx';
import UserPage from './components/user/UserPage.jsx';
import ShopPage from './components/shop/ShopPage.jsx';
import ReviewList from './shared-components/ReviewList.jsx';

export default function Navigation() {
  const linkStyle = {margin: '5px'};

  return (


    <Router>

      {/* These are individual links that lead to the defined path
          This what we will use anywhere we have a link */}

      <div className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">TropiCafè</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-md-center">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to={{
                pathname: '/login',
                state: { type: 'login' }
              }}>
                Login
              </Link>
              <Link className="nav-link" to={{
                pathname: 'signup',
                state: { type: 'registration' }
              }}>
                Sign Up
              </Link>
              <Link className="nav-link" to="/user">My profile</Link>
            </div>
          </div>
        </div>
      </div>


      {/* <Link style={linkStyle} to="/shop">Shop</Link>

      <Link style={linkStyle} to="/reviews">Reviews</Link> */}

      <Switch>

        {/* This defines what happens when you get to the path */}
        <Route exact path="/">
          <Home />
        </Route>


        <Route exact path="/login">
          <AuthPage />
        </Route>

        <Route exact path="/signup">
          <AuthPage />
        </Route>

        <Route path="/user">
          <UserPage />
        </Route>

        {/* <Route path="/shop">
          <ShopPage />
        </Route> */}

        <Route path="/reviews">
          <ReviewList />
        </Route>


        {/* The variable will just be the shop id */}
        <Route path="/shop/:id" component={ShopPage} />

        <Route path="/user/:id" components={UserPage} />

        {/* <Route path="user/:id">
          <UserPage />
        </Route> */}


        {/* I'm not sure exactly how this would work, but it's a possible option we can consider */}
        {/* <Route exact path="/add-review">
          <Modal />
        </Route>

        <Route exact path="/add-shop">
          <Modal />
        </Route> */}

      </Switch>

    </Router>
  );
}
