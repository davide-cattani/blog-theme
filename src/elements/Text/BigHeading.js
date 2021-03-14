import styled from 'styled-components'

export const BigHeading = styled.h1`
  margin-bottom: ${(props) => props.theme.spacings.medium};
  font-family: ${(props) => props.theme.fonts.headings};

  text-align: ${(props) => (props.textCenter ? 'center' : 'unset')};

  font-size: ${(props) => props.theme.fonts.sizes.xLarge};

  @media ${(props) => props.theme.breakpoints.touch} {
    font-size: ${(props) => props.theme.fonts.sizes.large};
  }
`
