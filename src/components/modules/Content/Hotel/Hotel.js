'use strict'
import React, { Component } from 'react';
import Superagent from 'superagent';
import URLs from '../../../const/urls.js';
import Config from '../../../config/config';
import InfoHeader from './InfoHeader/InfoHeader'
import InfoHotel from './InfoHotel/InfoHotel'
import InfoRoom from './InfoRoom/InfoRoom'
import HotelMap from './HotelMap/HotelMap'
import PhotoGallery from './PhotoGallery/PhotoGallery'
import './Hotel.less';

class Hotel extends Component {

  constructor(props) {

    super(props);
    this.state = {
      images: [
        {image: ''}
      ]
    }
  }

  fetchHotel = () => {

    let hotelId = this.props.match.params.id;
    let url = URLs.server.hotelProfile+hotelId;

    Superagent
    .get(url)
    .set('Accept', 'application/json')
    .then(res => {

      this.setState(res.body);
      
      let headerHeight = document.getElementById('main-menu').clientHeight;
      let breadcrumbBarHeight = document.getElementsByClassName('breadcrumb')[0].clientHeight;
      let wallpaperHTML = document.getElementsByClassName('wallpaper')[0];
      wallpaperHTML.style.height = (window.innerHeight-parseInt(breadcrumbBarHeight+headerHeight))+'px';

    }) .catch(err => {

      // err.message, err.response
    });
  }


  render() {

    this.fetchHotel();

    return (
      <section id="hotel">
        <div class="template-container">
          <div className="wallpaper" style={{backgroundImage: "url("+this.state.images[0].image+")"}}>
          </div>
          <InfoHeader infos={{ id: this.state.id, name: this.state.name, type: this.state.type, address_street: this.state.address_street, address_number: this.state.address_number , city_url: this.state.city_url, city_name: this.state.city_name

          }} />
          <InfoHotel />
          <InfoRoom />
          <PhotoGallery images={this.state.images} />
          <section className="responsive info-request">
            <button className="button send-request"><i className="fa fa-comments"></i> CHIEDI ALL'ALBERGATORE</button>
          </section>
          <HotelMap coords={{ lat:this.state.latitude, lng:this.state.longitude }} />
        </div>
      </section>
    );
  }
}

export default Hotel;