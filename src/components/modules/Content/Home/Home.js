'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.less';

class Home extends Component {
  render() {
    return (
      <section id="home">
        <div className="coming-soon">
          <div className="content">
            <div>STIAMO ARRIVANDO!</div>
            <div>TUTTI I MIGLIORI HOTEL D&#39;ITALIA</div>
            <Link id="find-hotel-rome" to="/ricerca/citta/firenze/" className="button">CERCA HOTEL A FIRENZE</Link>
          </div>
        </div>
        <div className="landing-page">
          <div className="overlay"></div>
        </div>
        <div className="list-cities">
          <div className="responsive">
            <div className="content">
              <header>
                <h1>ALTRE CITTÀ</h1>
              </header>
              <section>
                <div className="left city firenze">
                  <div className="image"></div>
                </div>
                <div className="right city milano">
                  <div className="image"></div>
                </div>
                <div className="right city venezia">
                  <div className="image"></div>
                </div>
                <div className="clearfix"></div>
              </section>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;