import styled from 'styled-components'

export const PaginationWrapper = styled.nav`
  ${(props) =>
    props.isSmall ? `font-size: ${props.theme.fonts.sizes.small};` : ''}

  margin: ${(props) => props.theme.spacings.small};
  display: flex;
  justify-content: center;
  text-align: center;

  a,
  li,
  ul {
    height: 2.5em;
    min-width: 2.5em;
  }
`
