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
      slidesToShow: 10,
      slidesToScroll: 6,
      initialSlide: 0,
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 1921,
          settings: {
            slidesToShow: 9,
            slidesToScroll: 5,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1367,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 481,
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
            <Card
              key={result.id}
              data={result}
              mediaType={this.props.mediaType}
            />
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
