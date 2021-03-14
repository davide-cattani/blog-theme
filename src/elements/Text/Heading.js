import styled from 'styled-components'

export const Heading = styled.h2`
  margin-bottom: ${(props) => props.theme.spacings.medium};

  font-size: ${(props) => props.theme.fonts.sizes.heading.desktop};
  @media ${(props) => props.theme.breakpoints.touch} {
    font-size: ${(props) => props.theme.fonts.sizes.heading.touch};
  }

`