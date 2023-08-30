import React from "react";
import PropTypes from "prop-types";
// import {a} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
    >
      <div className="container-fluid mx-4">
        {/* <a className="navbar-brand" to="/">
          {props.title}
        </a> */}
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3 ">
           
            <li className="nav-item ">
              {/* <a className="nav-Link active a-secondary a-underline-opacity-0" aria-current="page" to="/">
                Home
              </a> */}
              {/* <a className="nav-Link Link-secondary Link-underline-opacity-0" aria-current="page" href="#">
                Home
              </a> */}
              </li>
            {/* <li className="nav-item mx-3">
              <a className="nav-a a-secondary a-underline-opacity-0" to="/about">
                {props.aboutText}
              </a>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}

          {/* dropdown */}
          <div className="dropdown mx-4">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Colored Background
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" onClick={props.changegreen} href="#">Green</a></li>
    <li><a className="dropdown-item" onClick={props.changered} href="#">Red</a></li>
    <li><a className="dropdown-item" onClick={props.changeyellow} href="#">Yellow</a></li>
  </ul>
</div>

          {/* switch for dark/light mode  */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light' }`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

//default props
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
