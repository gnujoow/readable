import React, { Component } from 'react';

class NavBar extends Component {
  render () {
    return (
      <nav>
       <div className="nav-wrapper">
         <a href="#" className="brand-logo">home</a>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
           <li><a href="sass.html">post</a></li>
           <li><a href="badges.html">github</a></li>
         </ul>
       </div>
     </nav>
    )
  }
}

export default NavBar;
