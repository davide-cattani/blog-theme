import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Slider from 'react-slick'

import {CarouselWrapper, CarouselTitle, CarouselSlide, CarouselSlideDescription} from '../elements'
import styled from 'styled-components'

var settings = {
  arrows: true,
  dots: false,
  adaptiveHeight: true,
  speed: 500,
}

const Carousel = ({ input }) => {
  return (
    <CarouselWrapper>
      {input.primary.carousel_heading && (
        <CarouselTitle>
          {input.primary.carousel_heading}
        </CarouselTitle>
      )}
      {input.items && input.items.length > 0 && (
        <Slider {...settings}>
          {input.items.map((item, i) => {
            if (item.image && item.image.fluid) {
              return <CarouselImage key={i} item={item} />
            }
            return
          })}
        </Slider>
      )}
    </CarouselWrapper>
  )
}

export default Carousel

Carousel.propTypes = {
  input: PropTypes.object.isRequired,
}

const CarouselImage = ({ item }) => {
  return (
    <CarouselSlide>
      <Img fluid={item.image.fluid} />
      <CarouselSlideDescription
        dangerouslySetInnerHTML={{ __html: item.image_description.html }}
      />
    </CarouselSlide>
    // <BackgroundImage className='' fluid={item.image.fluid}>
    //   <div
    //     className='image-description content has-text-light is-italic opaque p-2'
    //     dangerouslySetInnerHTML={{ __html: item.image_description.html }}
    //   />
    // </BackgroundImage>
  )
}
