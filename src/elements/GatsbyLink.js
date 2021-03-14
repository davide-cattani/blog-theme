import styled from 'styled-components'
import { Link } from 'gatsby'

export const GatsbyLink = styled(Link)`
  color: ${(props) => props.theme.colors.anchorLink.color};

  :hover {
    color: ${(props) => props.theme.colors.anchorLink.hover};
  }
`
