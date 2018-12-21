'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './InfoHotel.less';

class InfoHotel extends Component {
  render() {
    return (
      <section class="responsive info-hotel">
        <aside class="left">
          <h1>L&#39;HOTEL</h1>
        </aside>
        <section class="content right">
          <div class="row">
            <div class="col check-in">
              <i class="fa fa-clock-o"></i>
              <span class="label">CHECK-IN:</span>
              <span class="value">14:00 - 22:00</span>
            </div>
            <div class="col check-out">
              <i class="fa fa-clock-o"></i>
              <span class="label">CHECK-OUT:</span>
              <span class="value">10:00</span>
            </div>
          </div>
          <div class="row">
            <div class="col check pets">
              <i class="fa fa-check"></i>
              <span class="label">PARCHEGGIO:</span>
              <span class="value">GRATUITO</span>
            </div>
          </div>
          <div class="row">
            <div class="col check pets">
              <i class="fa fa-check"></i>
              <span class="label">ANIMALI:</span>
              <span class="value">10&euro; AL GIORNO</span>
            </div>
          </div>
          <div class="row">
            <div class="col check">
              <i class="fa fa-check"></i>
              <span class="label">ASCENSORE</span>
            </div>
          </div>
        </section>
        <div class="clearfix"></div>
      </section>
    );
  }
}

export default InfoHotel;
