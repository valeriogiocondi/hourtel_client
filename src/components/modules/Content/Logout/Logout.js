'use strict'
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoginService from '../../../services/login.js';

import './Logout.less';

class Login extends Component {

  constructor(props) {
  
    super(props);

    this.state = {
      redirect: false,
      countdown: {
        value: 5,
        label: '5 secondi'
      }
    };
  }

  render() {

    if (LoginService.check()) {

      let countdown = this.state.countdown.value;
      LoginService.logout();

      setInterval(function(){

        countdown--;

        if (countdown > 1)
          this.setState({countdown:{value: countdown, label: countdown+' secondi'}});
        else
          this.setState({countdown:{value: countdown, label: countdown+' secondo'}});

      }.bind(this), 1000);

      setTimeout(function(){

        this.setState({redirect: true});

      }.bind(this), 5000);

    } else 
      return <Redirect to='/' />

    if (this.state.redirect)
      return <Redirect to='/' />

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
                  <Link to="/logout">Logout</Link> 
                </li>
              </ul>
            </nav>
          </header>
          <article className="content">
            <h1>Arrivederci!</h1>
            <h2>Verrai reindirizzato verso la homepage tra {this.state.countdown.label}</h2>
          </article>
        </div>
      </section>
    );
  }
}

export default Login;