'use strict'
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoginService from '../../../services/login.js';

import './Login.less';

class Login extends Component {

  constructor(props) {
    
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false
    };
    
    /*  Passing method to the component as handle. */
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.login = this.login.bind(this);
  }

  handleEmail = (event) => {
    this.setState({'email': event.target.value});
  }

  handlePassword = (event) => {
    this.setState({'password': event.target.value});
  }

  login = () => {

    let callback = () => {

      this.setState({redirect: true});
    }

    LoginService.fetch(this.state.email, this.state.password, callback);
      
  }

  render() {

    if (LoginService.check() || this.state.redirect)
      return <Redirect to='/area-utente/' />

    return (
      <section id="login">
        <div className="responsive">
          <header>
            <nav className="breadcrumb">
              <ul>
                <li>
                  <Link to="/">HOME</Link> 
                </li>
                <li>
                  <Link to="/login">Login</Link> 
                </li>
              </ul>
            </nav>
          </header>
          <article className="content">
            <div className="section-login">
              <header>
                <h1>LOGIN</h1>
              </header>
              <section>
                <button id="login-facebook" className="button">
                  <i className="fa fa-facebook"></i> <span>ENTRA CON FACEBOOK</span>
                </button>
                <div className="or">
                  <span>OPPURE</span>
                  <hr/>
                </div>
                <div className="email">
                  <div className="input-text">
                    <input type="text" placeholder="E-MAIL" onChange={this.handleEmail}/>
                  </div>
                  <div className="label-error">ACCOUNT INESISTENTE</div>
                </div>
                <div className="password">
                  <div className="input-password">
                    <input type="password" placeholder="PASSWORD" onChange={this.handlePassword}/>
                  </div>
                  <div className="label-error">PASSWORD SBAGLIATA</div>
                </div>
                <button id="login-up" className="button" onClick={this.login}>ENTRA</button>
                <Link to="/password-dimenticata/" className="right underline-hover password-forgotten">PASSWORD DIMENTICATA?</Link>
                <div className="clearfix"></div>
              </section>
            </div>
          </article>
        </div>
      </section>
    );
  }
}

export default Login;