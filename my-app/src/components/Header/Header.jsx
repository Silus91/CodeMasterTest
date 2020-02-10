import React, { Component } from 'react';
import header_bg from '../../assets/images/header_bg.jpg';
import header_logo from '../../assets/images/header_logo.png';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="headerBg">
          <img src={header_bg}/>
        </div>  
        <div className="headerLogo">
          <img src={header_logo} />
        </div>
      </div>
    )
  }
}

export default Header;
