import React from 'react'

import { Button, GatsbyLink } from '../elements'
import styled from 'styled-components'

const MButton = styled(Button)`
  margin-top: ${(props) => props.theme.spacings.xLarge};
  margin-bottom: ${(props) => props.theme.spacings.large};
  font-size: ${(props) => props.theme.fonts.sizes.large};

  padding: ${(props) => props.theme.spacings.small};
`

const MegaButton = ({ linkTo, text }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <GatsbyLink to={linkTo}>
        <MButton>{text}</MButton>
      </GatsbyLink>
    </div>
  )
}

export default MegaButton
