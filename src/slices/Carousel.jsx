import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import Slider from 'react-slick'

var settings = {
  arrows: true,
  dots: false,
  adaptiveHeight: true,
  speed: 500,
}

const Carousel = ({ input }) => {
  return (
    <div className='article-carousel-wrapper my-6 pb-4'>
      {input.primary.carousel_heading && (
        <h3 className=' content has-text-centered'>
          {input.primary.carousel_heading}
        </h3>
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
    </div>
  )
}

export default Carousel

Carousel.propTypes = {
  input: PropTypes.object.isRequired,
}

const CarouselImage = ({ item }) => {
  return (
    <div className='article-carousel-slide'>
      <Img fluid={item.image.fluid} />
      <div
        className='image-description content has-text-light is-italic opaque is-size-7-mobile p-2'
        dangerouslySetInnerHTML={{ __html: item.image_description.html }}
      />
    </div>
    // <BackgroundImage className='' fluid={item.image.fluid}>
    //   <div
    //     className='image-description content has-text-light is-italic opaque p-2'
    //     dangerouslySetInnerHTML={{ __html: item.image_description.html }}
    //   />
    // </BackgroundImage>
  )
}
