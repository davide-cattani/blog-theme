import styled from 'styled-components'

export const Section = styled.section`
  padding: ${(props) => props.theme.spacings.large};
  display: block;

  background-image: url(${(props) => props.specialBackground});
  background-repeat: repeat;

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: ${(props) => props.theme.spacings.small}
      ${(props) => props.theme.spacings.xSmall};
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    padding: ${(props) => props.theme.spacings.medium}
      ${(props) => props.theme.spacings.small};
  }
`
