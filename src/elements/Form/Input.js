import styled from 'styled-components'

export const Input = styled.input`
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: ${(props) => props.theme.borders.control};
  box-shadow: inset 0 0.0625em 0.125em rgb(10 10 10 / 5%);

  height: 2.5em;

  font-family: ${(props) => props.theme.fonts.main};
  font-size: 1rem;

  padding: ${(props) => props.theme.spacings.xSmall};

  outline: none;

  ${(props) => (props.checkbox ? `display: inline-block; height: unset;` : ``)}

  &:focus {
    border-color: ${(props) => props.theme.colors.dark};
  }
`
