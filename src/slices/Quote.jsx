import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({ input }) => (
  <div className='content'>
    <blockquote>
      <div dangerouslySetInnerHTML={{ __html: input.primary.quote.html }}/>
      {input.primary.author_name && (
        <p className='is-italic'>cit. {input.primary.author_name}</p>
      )}
    </blockquote>
  </div>
)

export default Quote

Quote.propTypes = {
  input: PropTypes.object.isRequired,
}
