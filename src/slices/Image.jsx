import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Image = ({ input }) => {
  return (
    <div className='post-image'>
      <Img fluid={input.primary.image.fluid} />
      {input.primary.caption && (
        <figcaption className='has-text-centered is-italic  is-size-7'>{input.primary.caption}</figcaption>
      )}
    </div>
  )
}

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
}
