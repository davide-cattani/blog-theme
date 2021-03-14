import styled from 'styled-components'

export const SubHeading = styled.h2`
  margin-bottom: ${(props) => props.theme.spacings.small};
  font-family: ${(props) => props.theme.fonts.headings};

  text-align: ${(props) => (props.textCenter ? 'center' : 'unset')};

  font-size: ${(props) => props.theme.fonts.sizes.subHeading.desktop};
  @media ${(props) => props.theme.breakpoints.touch} {
    font-size: ${(props) => props.theme.fonts.sizes.subHeading.touch};
  }
`
