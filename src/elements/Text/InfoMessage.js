import styled from 'styled-components'

export const InfoMessage = styled.div`
  background-color: ${(props) => props.theme.colors.warning};
  color: ${(props) => props.theme.colors.dark};

  padding: ${(props) => props.theme.spacings.small};

  border-radius: ${(props) => props.theme.borders.control};

  &header {
    background-color: ${(props) => props.theme.colors.warningDarker};
    font-weight: 600;
  }
`
