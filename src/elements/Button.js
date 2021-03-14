import styled from 'styled-components'

export const Button = styled.button`
  padding: ${(props) => props.theme.spacings.xSmall};
  cursor: pointer;

  background-color: ${(props) => props.theme.colors.button.background};
  color: ${(props) => props.theme.colors.button.color};

  border: 1px solid ${(props) => props.theme.colors.button.border};
  border-radius: ${(props) => props.theme.borders.control};

  transition: color ${(props) => props.theme.animations.times.fast} ease,
    background-color ${(props) => props.theme.animations.times.fast} ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.button.hover.background};
    color: ${(props) => props.theme.colors.button.hover.color};
  }
`
