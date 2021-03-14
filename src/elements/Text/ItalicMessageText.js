import styled from 'styled-components'

export const ItalicMessageText = styled.p`
  text-align: center;
  font-style: italic;
  margin-top: ${(props) => props.theme.spacings.medium};
  margin-bottom: ${(props) => props.theme.spacings.medium};
`
