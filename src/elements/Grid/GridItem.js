import styled from 'styled-components'

export const GridItem = styled.div`

  padding: ${(props) => props.theme.spacings.xSmall};

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${(props) => props.theme.spacings.xxSmall};
  }

`
