import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${(props) => props.size};
  position: relative;
  margin: 0 auto;
  flex-grow: 1;
`

Container.defaultProps = {
  size: '960px',
}
