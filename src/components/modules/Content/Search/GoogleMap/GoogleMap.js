'use strict'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { fetchHotelsReducer } from '../../../../redux/actions/allActions'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Superagent from 'superagent';
import URLs from '../../../../const/urls.js';
import Config from '../../../../config/config';
import './GoogleMap.less';

class GoogleMap extends Component {

	constructor(props) {

		super(props);	
		this.state = {
			map: {
				initialCenter: {
          lat: 43.7750522,
          lng: 11.2473096
				},
				zoom: 16,
				markers: []
			}
		};
	}

	fetchHotels = (mapProps, map) => {

		let bounds;
		let NorthEastCorner;
		let SouthWestCorner;
		let NorthWestCorner;
		let SouthEastCorner;
		let url;

		bounds = map.getBounds();
		NorthEastCorner = bounds.getNorthEast();
		SouthWestCorner = bounds.getSouthWest();
		NorthWestCorner = new mapProps.google.maps.LatLng(NorthEastCorner.lat(), SouthWestCorner.lng());
		SouthEastCorner = new mapProps.google.maps.LatLng(SouthWestCorner.lat(), NorthEastCorner.lng());

		url = URLs.server.hotelsByMap;
		url += NorthWestCorner.lat()+' '+NorthWestCorner.lng()+'/';
		url += NorthEastCorner.lat()+' '+NorthEastCorner.lng()+'/';
		url += SouthEastCorner.lat()+' '+SouthEastCorner.lng()+'/';
		url += SouthWestCorner.lat()+' '+SouthWestCorner.lng();

		Superagent
		.get(url)
		.set('Accept', 'application/json')
		.then(res => {
		
			this.props.fetchHotelsReducer(res.body);

			res.body.map((val) => {

				this.state.map.markers.push(
					<Marker
				    title={val.name}
				    name={'SOMA'}
				    position={{lat: val.latitude, lng: val.longitude}} />
    		);

			});

	  }) .catch(err => {

      // err.message, err.response
		});
	}

  render() {
    return (
      <div id="map">
       <Map
          google={ this.props.google }
          initialCenter={ this.state.map.initialCenter }
          zoom={this.state.map.zoom}
          onDragend={this.fetchHotels}
          onIdle={this.fetchHotels}
        >
					{this.state.map.markers}
				</Map>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {} 
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({

    fetchHotelsReducer: fetchHotelsReducer

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: (Config.apiKey)
})(GoogleMap));