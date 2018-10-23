'use strict'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { saveDateBookingReducer } from '../../../../redux/actions/allActions'
import Calendar from 'react-calendar';
import './SearchBar.less';

class SearchBar extends Component {

  constructor(props) {
  
    super(props);
    this.state = {
      dateCheckIn: {
        date: new Date('2018-11-23')
      },
      dateCheckOut: {
        date: new Date('2018-11-24')
      }
    };

    /*  Passing method to the component as handle. */
    this.openPopup = this.openPopup.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }

  closeAllPopup = () => {

    Array.prototype.map.call(
      document.getElementsByClassName('calendar'),
      (elem) => {

        elem.classList.add('fade-out');
      }
    );
  }

  openPopup = (popupClassList) => {

    let popup = document.getElementById(popupClassList);

    if (popup !== null && popup.classList.contains('fade-out')) {

     this.closeAllPopup();
     popup.classList.remove('fade-out');

    } else
     this.closeAllPopup();
  }

  onDateChange = () => {
  
  }

  render() {
    return (
      <div className="search-bar">
        <div className="booking-popup">
          <div id="check-in-calendar" className="calendar fade-out">
            <Calendar
              onChange={this.onDateChange}
              locale="it-IT"
            />
          </div>
          <div id="check-out-calendar" className="calendar fade-out">
            <Calendar
              onChange={this.onDateChange}
              locale="it-IT"
            />
          </div>
          <div id="num-people-popup" className="people fade-out">
            <div className="container">
              <div className="row adults">
                <div className="col top label">ADULTI</div>
                <span>
                  <i className="material-icons minus">remove</i>
                  <div className="number">1</div>
                  <i className="material-icons plus">add</i>
                </span>
              </div>
              <div className="row children">
                <div className="col top label">BAMBINI</div>
                <span>
                  <i className="material-icons minus">remove</i>
                  <div className="number">0</div>
                  <i className="material-icons plus">add</i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bar">
          <div className="left field date-check-in"  onClick={() => this.openPopup('check-in-calendar')}>
            <div className="label">CHECK IN</div>
            <input type="text" id="check-in" value="SCEGLI IL CHECK-IN" readonly />
            <i className="fa fa-caret-down"></i>
          </div>
          <div className="left field date-check-out"  onClick={() => this.openPopup('check-out-calendar')}>
            <div className="label">CHECK OUT</div>
            <input type="text" id="check-out" value="SCEGLI IL CHECK-OUT" readonly />
            <i className="fa fa-caret-down"></i>
          </div>
          <div className="left field rooms">
            <div className="left">
              <div className="label">CAMERE</div>
              <div className="col top num-room">1 CAMERA</div>
            </div>
            <div className="right tools">
              <button className="button up">
                <i className="fa fa-angle-up"></i>
              </button>
              <button className="button down">
                <i className="fa fa-angle-down"></i>
              </button>
            </div>
          </div>
          <div className="left field num-people">
            <div className="label">PERSONE</div>
            <input type="text" id="guest" value="1 PERSONA" readonly />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {} 
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({

    saveDateBookingReducer: saveDateBookingReducer

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);