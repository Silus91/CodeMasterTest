import React, { Component } from 'react';
import logo_codemasters from '../../assets/images/logo_codemasters.png';
import logo_pegi from '../../assets/images/logo_pegi.png';
import './Footer.css'
export class Footer extends Component {
  render() {
    return (
      <footer class="page-footer">
        <div className="footer-div">
          <img className=" responsive-img" src={logo_codemasters} />
        </div>
        <div className="footer-div">
          <p className="licence">© CODEMASTERS. LICENSED BY FORMULA ONE WORLD CHAMPIONSHIP LTD AND ITS AFFILIATES</p>
        </div>
        <div className="footer-div">
          <img className="responsive-img" src={logo_pegi} />
        </div>
      </footer>
    )
  }
}

export default Footer;


