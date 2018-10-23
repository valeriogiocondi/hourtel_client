'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginService from '../../services/login'
import './Header.less';

class Header extends Component {

  render() {

    let menu;

    if (LoginService.check()) {
      menu = 
        <ul className="list-inline">
          <li>
            <Link to="/cerca">
              <div>CERCA</div>
              <div className="border-bottom"></div>
            </Link>
          </li>
          <li>
            <Link to="/area-utente">
              <div>AREA UTENTE</div>
              <div className="border-bottom"></div>
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <div>LOGOUT</div>
              <div className="border-bottom"></div>
            </Link>
          </li>
        </ul>;
    
    } else {
      
      menu = 
        <ul className="list-inline">
          <li>
            <Link to="/cerca">
              <div>CERCA</div>
              <div className="border-bottom"></div>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <div>LOGIN</div>
              <div className="border-bottom"></div>
            </Link>
            /
            <Link to="/registrati">
              <div>REGISTRATI</div>
              <div className="border-bottom"></div>
            </Link>
          </li>
        </ul>;
    }

    return (
      <header id="main-header" className="main-component">
        <div className="cookie-alert">
          <div className="responsive">
            <div className="left message">
              Questo sito utilizza i cookie a fini puramente statistici, continuando la navigazione ne accetti il nostro utilizzo. <Link to="/privacy-policy" className="more-infos">Maggiori info.</Link>
            </div>
            <div id="myBtn" className="right close-cookie-alert">
              <i className="fa fa-close"></i>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <div id="main-menu">
        <div className="responsive">
          <div id="logo" className="left">
            <h1 className="left">
              <Link to="/">
                <div className="img"></div>
              </Link>
            </h1>
            <div className="clearfix"></div>
          </div>
          <div className="right">
            <nav id="menu">
              {menu}
            </nav>
          </div>
          <div className="clearfix"></div>
        </div>
        </div>
        <div className="clearfix"></div>
      </header>
    );
  }
}

export default Header;