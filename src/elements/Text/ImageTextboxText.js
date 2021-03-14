import styled from 'styled-components'

export const ImageTextboxText = styled.p`
  font-size: ${props => props.theme.fonts.sizes.medium};
  margin-bottom: ${props => props.theme.spacings.medium};

  @media ${props => props.theme.breakpoints.touch} {
    margin-bottom: ${props => props.theme.spacings.small};
  }

`
