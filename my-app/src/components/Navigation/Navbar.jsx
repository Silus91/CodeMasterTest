import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css";
import nav_logo from '../../assets/images/nav_logo.png';

class Navbar extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render(){
    return (
      <div>
        <nav className="navbar-fixed" style={{background:"#e10600"}}>
          <div className="nav-wrapper">
          <img className="responsive-img left" src={nav_logo} style={{padding:"5px"}} />
            <a href="#" data-target="mobile-demo" className="show-on-medium-and-down sidenav-trigger right"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down" style={{ fontFamily: "Grotesque" }}>
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/#'>FEATURES</Link></li>
              <li><Link to='/#'>NEWS</Link></li>
              <li><Link to='/#'>BUY NOW</Link></li>
            </ul>
          </div>
        </nav>
        <ul className="right sidenav" id="mobile-demo">
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/#'>FEATURES</Link></li>
          <li><Link to='/#'>NEWS</Link></li>
          <li><Link to='/#'>BUY NOW</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;