import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Card from '../Card/Card';

import './Carousel.css';

export default class Carousel extends Component {
  render() {
    var settings = {
      // arrows: false,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 5,
      initialSlide: 0,
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className='Carousel'>
        <h2>{this.props.category}</h2>
        <Slider {...settings}>
          {this.props.data.map((result) => (
            <Card key={result.id} data={result} />
          ))}
        </Slider>
      </div>
    );
  }
}

Carousel.propTypes = {
  category: PropTypes.string,
  data: PropTypes.array,
};
