import React, { Component } from 'react';
import header_logo from '../../assets/images/header_bg.jpg';

import './Header.css';

export class Header extends Component {
  render() {
    return (
      <div className="bg-container">
        <img src={header_logo}/>
      </div>
    )
  }
}

export default Header;
