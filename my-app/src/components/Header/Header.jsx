import React, { Component } from 'react';
import header_logo from './header_logo.png';
import header_bg from './header_bg.jpg';

import './Header.css';

export class Header extends Component {
  render() {
    return (
        <header className="imgs">
          <img className="responsive-img" src={header_bg} />

          {/* <img src={header_logo} /> */}
        </header>
    )
  }
}

export default Header;
