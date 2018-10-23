'use strict'
import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Config from '../../../../config/config';
import './HotelMap.less';

class HotelMap extends Component {

  constructor(props) {

    super(props); 

    this.state = {
      coords: props.coords,
      zoom: 16
    }
  }

  render() {
    return (
      <section id="hotel-map" class="responsive">
         <Map
            google={ this.props.google }
            initialCenter={ this.state.coords }
            zoom={ this.state.zoom }
          >
           <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={ this.state.coords } />
          </Map>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (Config.apiKey)
})(HotelMap)