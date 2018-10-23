'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import HotelsList from './HotelsList/HotelsList';
import FiltersList from './FiltersList/FiltersList';
import GoogleMap from './GoogleMap/GoogleMap';
import './Search.less';

class Search extends Component {
  render() {
    return (
      <section id="search">
        <header>
          <h1>SCEGLI TRA 5481 HOTEL A FIRENZE</h1>
        </header>
        <article>
          <aside className="left side-bar">
            <header>
              <h1 className="title left">CERCA HOTEL SULLA MAPPA</h1>
              <div className="right">
                <button id="filters" className="button">
                  <img src="/assets/images/icons/filters.png" />
                </button>
              </div>
              <div className="clearfix"></div>
            </header>
            <article>
            <HotelsList />
            <FiltersList />
            </article>
          </aside>
          <section className="map-container">
            <SearchBar />
            <GoogleMap />
          </section>
          <div className="clearfix"></div>
        </article>
      </section>
    );
  }
}

export default Search;