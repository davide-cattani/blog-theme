import styled from 'styled-components'

export const Quote = styled.blockquote`
  background-color: ${(props) => props.theme.colors.blockquote.background};
  padding: ${(props) => props.theme.spacings.xxSmall};
  padding-left: ${(props) => props.theme.spacings.medium};
  border-left: ${(props) => props.theme.borders.control} solid
    ${(props) => props.theme.colors.blockquote.leftBorder};
  border-radius: ${(props) => props.theme.borders.control};
  font-style: italic;
`
