// src/Navbar.js

import React from 'react';
import './Navbar.css'; // We'll style the navbar using CSS

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
            alt="Logo"
            className="logo-image"
          />
        </div>
        {/* <div className="menu">
          <a href="#dashboard">Dashboard</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#settings">Settings</a>
        </div> */}
      </div>
      <div className="navbar-right">
        <div className="login">
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
