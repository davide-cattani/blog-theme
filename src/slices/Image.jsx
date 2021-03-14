import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { ImageWrapper, ImageCaption } from '../elements'

const Image = ({ input }) => {
  return (
    <ImageWrapper>
      <Img fluid={input.primary.image.fluid} />
      {input.primary.caption && (
        <ImageCaption>
          {input.primary.caption}
        </ImageCaption>
      )}
    </ImageWrapper>
  )
}

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
}
