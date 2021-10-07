import React from 'react';
import logo from '../images/logo.svg';
import illustrationintro from '../images/illustration-intro.png';
const Header = () => {
  return (
    <header>
      <div className="menu">
        <img src={logo} alt="logo" className="logo" />
        <div>
          <a href="#features">Features</a>
          <a href="#team">Team</a>
          <a href="#signin">Sign In</a>
        </div>
      </div>
      <div className="header-detail">
        <img src={illustrationintro} alt="" />
        <div className="description-header">
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
