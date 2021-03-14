import styled from 'styled-components'

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: ${(props) => props.theme.borders.control};

  padding: ${(props) => props.theme.spacings.xxSmall};

  outline: none;

  &:focus {
     border-color: ${(props) => props.theme.colors.dark};
  }

`
