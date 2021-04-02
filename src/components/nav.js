import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav>
      <div className="header-img">
        Logo
      </div>
      <ul className="header">
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/who">About Harp</NavLink></li>
        <li><NavLink to="/what">About Vibrant Heart Coaching</NavLink></li>
        <li><NavLink to="/lessons">Vibrant Heart Lessons</NavLink></li>
        <li><NavLink to="/meditation">Guided Meditation</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default withRouter((Nav));
