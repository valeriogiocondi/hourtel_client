'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './InfoRoom.less';

class InfoRoom extends Component {
  render() {
    return (
      <section class="responsive info-hotel rooms">
        <aside class="left">
          <h1>LA CAMERA</h1>
        </aside>
        <section class="content right">
          <div class="row">
            <div class="col check">
              <i class="fa fa-check"></i>
              <span class="value">Wi-Fi</span>
            </div>
            <div class="col check">
              <i class="fa fa-check"></i>
              <span class="value">Bagno Privato</span>
            </div>
            <div class="col check">
              <i class="fa fa-check"></i>
              <span class="value">Cassaforte</span>
            </div>
          </div>
          <div class="row">
            <div class="col check">
              <i class="fa fa-check"></i>
              <span class="value">Aria Condizionata</span>
            </div>
            <div class="col check">
              <i class="fa fa-check"></i>
              <span class="value">Riscaldamento</span>
            </div>
            <div class="col check">
              <i class="fa fa-check"></i>
              <span class="value">Minibar</span>
            </div>
          </div>
          <div class="row">
            <div class="col check">
              <i class="fa fa-check"></i>
              <span class="value">Televisione</span>
            </div>
            <div class="col check">
              <i class="fa fa-check"></i>
              <span class="value">TV via cavo</span>
            </div>
          </div>
        </section>
        <div class="clearfix"></div>
      </section>
    );
  }
}

export default InfoRoom;