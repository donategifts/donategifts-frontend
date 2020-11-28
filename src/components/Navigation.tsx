import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../assets/img/new-donate-gifts-logo-2.png';

export default function Navigation(): JSX.Element {
  return (
    <Router>
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="row justify-content-between ml-2">
            <Link className="site-branding" to="/" rel="home">
              <img className="d-block" id="logo-img" src={logo} alt="logo" />
            </Link>
            <nav className="site-navigation d-flex justify-content-end align-items-center">
              <ul className="quick-font d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                <li>
                  <Link to="/wishcards">Wish Cards</Link>
                </li>
                <li>
                  <Link to="/mission">Mission</Link>
                </li>
                <li>
                  <Link to="/howto">How To</Link>
                </li>
                <li>
                  <Link to="/users/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/users/login">Log In</Link>
                </li>
                {/* ---- partner ----*/}
                <li>
                  <Link to="/wishcards/me">My Wishes</Link>
                </li>
                {/* ---- partner end ---- */}
                {/* ---- admin ---- */}
                <li>
                  <Link to="/wishcards/admin/">Admin Panel</Link>
                </li>
                {/* ---- admin end ---- */}
                {/* ---- user ---- */}
                <li>
                  <Link to="/users/profile">My Profile</Link>
                </li>
                <li>
                  <Link to="/users/logout">Log Out</Link>
                </li>
                {/* ---- user end ---- */}
              </ul>
            </nav>
            {/* the below is for mobile and it only shows in smaller screens */}
            <button
              className="navbar-toggler d-lg-none mr-4"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          <div className="row mr-1">
            <div className="collapse d-lg-none w-100 ml-2" id="navbarToggleExternalContent">
              <ul className="quick-font navbar-nav mr-2 mt-2 mt-lg-0 ml-2">
                <li className="nav-item">
                  <Link to="/wishcards" className="nav-link">
                    Wish Cards
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/mission" className="nav-link">
                    Mission
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/howto" className="nav-link">
                    How To
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/users/signup" className="nav-link">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/users/login" className="nav-link">
                    Log In
                  </Link>
                </li>
                {/* -----user start -----*/}
                <li className="nav-item">
                  <Link to="/users/profile" className="nav-link">
                    My Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/users/logout" className="nav-link">
                    Log Out
                  </Link>
                </li>
                {/* ----- user end -----*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Switch>
          <Route path="/about">{/* <About /> */}</Route>
          <Route path="/users">{/* <Users /> */}</Route>
          <Route path="/">{/* <Home /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
}
