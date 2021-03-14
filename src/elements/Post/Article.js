import styled from 'styled-components'

export const Article = styled.article`
  margin: ${(props) => props.theme.spacings.large};

  @media ${(props) => props.theme.breakpoints.mobile} {
    margin-left: ${(props) => props.theme.spacings.xSmall};
    margin-right: ${(props) => props.theme.spacings.xSmall};
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    margin-left: ${(props) => props.theme.spacings.small};
    margin-right: ${(props) => props.theme.spacings.small};
  }
`
