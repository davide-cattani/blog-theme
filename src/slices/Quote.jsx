import React from 'react'
import PropTypes from 'prop-types'

import { Quote as Blockquote, QuoteAuthor } from '../elements'

const Quote = ({ input }) => (
  <Blockquote>
    <div dangerouslySetInnerHTML={{ __html: input.primary.quote.html }} />
    {input.primary.author_name && (
      <QuoteAuthor>cit. {input.primary.author_name}</QuoteAuthor>
    )}
  </Blockquote>
)

export default Quote

Quote.propTypes = {
  input: PropTypes.object.isRequired,
}
