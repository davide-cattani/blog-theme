import styled from 'styled-components'

export const CenteredBox = styled.div`
  display: flex;
  justify-content: center;
  margin: ${(props) => props.theme.spacings.small} 0;
  text-align: center;
`
