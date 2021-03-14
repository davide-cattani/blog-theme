import styled from 'styled-components'

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    width: ${(props) => 100 / props.cols}%;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: column;
    flex-wrap: no-wrap;

    & > div {
      width: 100%;
    }
  }
`
