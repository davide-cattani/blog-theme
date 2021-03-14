import React from 'react'
import { Link } from 'gatsby'

import { Button } from '../elements'
import styled from 'styled-components'

const RMButton = styled(Button)`
  font-size: ${(props) => props.theme.fonts.sizes.medium};
  background-color: rgba(0, 0, 0, 0.15);
  color: ${(props) => props.theme.colors.light};
  border: 1px solid ${(props) => props.theme.colors.light};

  &:hover {
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.dark};
  }
`

const ReadMoreButton = ({ uid }) => {
  return (
    <Link to={`/post/${uid}`}>
      <RMButton>Scopri di più</RMButton>
    </Link>
  )
}

export default ReadMoreButton
