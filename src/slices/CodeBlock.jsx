import React, { useEffect } from 'react'
import Prism from 'prismjs'

const CodeBlock = ({ input }) => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  return (
    <div className='content code-block is-family-code'>
      <pre class='language-javascript'>
        <code
          dangerouslySetInnerHTML={{ __html: input.primary.code_block.html }}
        />
      </pre>
    </div>
  )
}

export default CodeBlock
