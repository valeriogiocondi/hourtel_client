'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import URLs from '../../../../const/urls';
import './InfoHeader.less';

class InfoHeader extends Component {

  constructor(props) {

    super(props);
    this.state = props.infos;
  }

  render() {
    return (
      <section className="info-header">
        <header>
          <div className="responsive">
            <nav className="breadcrumb">
              <ul>
                <li>
                  <Link to="/">HOME</Link> 
                </li>
                <li>
                  <Link to="/cerca">RICERCA</Link> 
                </li>
                <li>
                  <Link to={"/cerca/"+this.props.infos.city_url}>{this.props.infos.city_name}</Link> 
                </li>
                <li>
                  <Link to={"/hotel/"+this.props.infos.id}>{this.props.infos.name}</Link> 
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section>
          <div className="responsive">
            <header>
              <div className="left title">
                <h1 className="hotel-name">
                  <Link to={"/hotel/"+this.props.infos.id}>{this.props.infos.name}</Link>
                </h1>
                <Link to="" className="hotel-type underline-hover">{this.props.infos.type}</Link>
                <div className=" address">
                  <span className="street">{this.props.infos.address_street}</span>, 
                  <Link to="" className="city underline-hover">{this.props.infos.address_number}</Link>
                  <span className="see-map"><i className="fa fa-map-marker"></i> Guarda la mappa</span>
                </div>
              </div>
              <button className="button right send-request"><i className="fa fa-comments"></i> CHAT CON L'ALBERGATORE</button>
              <div className="clearfix"></div>
            </header>
            <section className="description">Siamo sicuri che vi piacerà questo posto - il camino, il lucernario, la privacy, i mobili confortevoli e il quartiere accogliente. A pochi minuti dal centro della città, il TTC è facilmente raggiungibile a piedi dalla spiaggia e molte comunità vibranti locali con i loro ristoranti, bar e negozi eccellenti e interessanti. La Hiawatha Coach House è adatta a coppie, avventurieri, viaggiatori d'affari e famiglie. </section>
          </div>
        </section>
      </section>
    );
  }
}

export default InfoHeader;