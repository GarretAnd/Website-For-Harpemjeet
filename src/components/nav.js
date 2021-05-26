import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Logo from '../img/editedLogo.png';

const Nav = (props) => {
  return (
    <nav className="nav-bar">
      <div className="header-img">
        <img src={Logo} alt="Logo" className="Logo-Holder" />
      </div>
      <ul className="header">
        <li><NavLink to="/" exact className="hide">Home</NavLink></li>
        <li><NavLink to="/who" className="hide">About Harp</NavLink></li>
        <li><NavLink to="/what" className="hide">About Vibrant Heart Coaching</NavLink></li>
        <li><NavLink to="/lessons" className="hide">Vibrant Heart Lessons</NavLink></li>
        <li><NavLink to="/meditation" className="hide">Guided Meditation</NavLink></li>
        <li><NavLink to="/contact" className="hide">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default withRouter((Nav));
