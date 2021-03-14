import React from 'react'
import PropTypes from 'prop-types'

const BodyText = ({ input }) => (
  <div dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />
)

export default BodyText

BodyText.propTypes = {
  input: PropTypes.object.isRequired,
}
