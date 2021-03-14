import styled from 'styled-components'

export const AnchorLink = styled.a`
   color: ${props => props.theme.colors.anchorLink.color};

   :hover {
      color: ${props => props.theme.colors.anchorLink.hover}
   }

`