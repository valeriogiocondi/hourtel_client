'use strict'
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginService from '../../../services/login.js';
import './UserArea.less';

class UserArea extends Component {

  render() {

    if (!LoginService.check())
      return <Redirect to='/login/' />

    return (
      <section id="user-area">
        <h1>Area Utente</h1>
      </section>
    );
  }
}

export default UserArea;