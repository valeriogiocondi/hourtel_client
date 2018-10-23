'use strict'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import List from './List/List'
import './HotelsList.less';

class HotelsList extends Component {

  render() {
    return (
      <section id="hotels-list">
        <List hotels={this.props.hotelsList} />
      </section>
    );
  }
}

function mapStateToProps(state) {

  return { 
    hotelsList: state.fetchHotelsReducer
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelsList);