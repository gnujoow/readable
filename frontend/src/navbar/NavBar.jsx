import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            home
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/post">post</Link>
            </li>
            <li>
              <a href="badges.html">github</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
