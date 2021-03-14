import styled from 'styled-components'

export const TextboxOpaque = styled.div`
  max-width: 70%;

  text-align: center;
  line-height: 1.125;
  background-color: ${(props) => props.theme.colors.textboxOpaque.background};
  color: ${(props) => props.theme.colors.light};
  margin: ${(props) => props.theme.spacings.medium};
  padding: ${(props) => props.theme.spacings.medium};
  border-radius: ${props => props.theme.borders.card};

  &:not(button) {
    text-shadow: ${(props) => props.theme.shadows.text};
  }

  @media ${(props) => props.theme.breakpoints.touch} {
    padding: ${(props) => props.theme.spacings.small};
  }

`
