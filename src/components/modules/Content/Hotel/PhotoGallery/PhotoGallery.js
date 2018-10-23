'use strict'
import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';
import './image-gallery.css';

class PhotoGallery extends Component {

  render() {

    let imagesArray = [];

    if (this.props.images !== undefined)
    	this.props.images.map((elem) => {

    		imagesArray.push(
	    		{
	    			original: elem.image,
	    			thumbnail: elem.image
	    		}
    		);
    	});

    return (
      <ImageGallery items={imagesArray} />
    );
  }
}

export default PhotoGallery;