import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function Navigation() {

  return (


    <Router>

      {/* These are individual links that lead to the defined path
          This what we will use anywhere we have a link */}
      <Link to="/">Home</Link>

      <Link to="/login">Login</Link>

      <Link to="/signup">Sign Up</Link>

      <Switch>

        {/* This defines what happens when you get to the path */}
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/signup">
          <Registration />
        </Route>

        {/* The variable will just be the shop id */}
        <Route path="shop/:id">
          <Shop />
        </Route>

        <Route path="user/:id">
          <User />
        </Route>


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
