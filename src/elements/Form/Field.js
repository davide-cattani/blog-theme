import styled from 'styled-components'

export const Field = styled.div`
  margin-bottom: ${(props) => props.theme.spacings.small};

  ${(props) =>
    !props.checkbox
      ? `* {
   width: 100%;
}`
      : ''}
`
