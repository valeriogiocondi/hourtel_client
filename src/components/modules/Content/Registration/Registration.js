'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Registration.less';

class Registration extends Component {
  render() {
    return (
      <section id="registration" class="has-background-image">
        <div class="responsive">
          <header>
            <nav class="breadcrumb">
              <ul>
                <li>
                  <a href="/">HOME</a> 
                </li>
                <li>
                  <a href="/registrati">Registrati</a> 
                </li>
              </ul>
            </nav>
          </header>
          <article class="content">
            <div class="field first-name">
              <div class="label">NOME</div>
              <div class="input-text">
                <input type="text" placeholder="Mario" />
              </div>
              <div class="label-error">ALMENO 2 CARATTERI</div>
            </div>
            <div class="field last-name">
              <div class="label">COGNOME</div>
              <div class="input-text">
                <input type="text" placeholder="Rossi" />
              </div>
              <div class="label-error">ALMENO 2 CARATTERI</div>
            </div>
            <div class="field date-of-birth">
              <div class="label">DATA DI NASCITA</div>
              <div class="input-text">
                <input type="text" placeholder="GG/MM/YYYYY" maxlength="10" />
              </div>
              <div class="label-error">DATA NON CORRETTA</div>
            </div>
            <div class="field email">
              <div class="label">E-MAIL</div>
              <div class="input-text">
                <input type="text" placeholder="mario.rossi@gmail.com" />
              </div>
              <div class="label-error">E-MAIL NON VALIDA</div>
            </div>
            <div class="field password">
              <div class="label">PASSWORD</div>
              <div class="input-password">
                <input type="password" placeholder="Password" />
              </div>
              <div class="label-error">PASSWORD DEBOLE</div>
            </div>
            <button id="join-us-send" class="right button">REGISTRATI</button>
            <div class="clearfix"></div>
          </article>
        </div>
      </section>
    );
  }
}

export default Registration;