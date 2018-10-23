'use strict'
import React, { Component } from 'react';
import Item from '../Item/Item'
import './List.less';

class List extends Component {

  render() {

	  let arrayList = [];

  	if (this.props.hotels.length > 0) {

	  	this.props.hotels.map((val) => {

	  		arrayList.push(

	  			<li>
	  				<Item item={val} />	
	  			</li>
	  		);

	    });
  	}

    return (
      <ul>{arrayList}</ul>
    );
  }
}

export default List;