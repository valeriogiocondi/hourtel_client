'use strict'
import React, { Component } from 'react';
import './Item.less';

class Item extends Component {

  render() {
    return (
      <div>
        <div className="hotel-item">
          <aside className="left profile-picture" style={{backgroundImage: "url("+this.props.item.profile_picture+")"}}>
          </aside>
          <section className="left info">
            <h1>
              <a href={"/hotel/"+this.props.item.id} target="_blank">{this.props.item.name}</a>
            </h1>
            <h2>{this.props.item.address_street+' '+this.props.item.address_number}</h2>
            <h3>{this.props.item.type}</h3>
            <div class="trip-advisor-reviews">
                <img src="/assets/images/icons/tripadvisor-3.png" />
            </div>
          </section>
          <div class="clearfix"></div>
        </div>

      </div>
    );
  }
}

export default Item;