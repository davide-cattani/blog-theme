import styled from 'styled-components'

export const Card = styled.div`
   margin: ${props => props.theme.spacings.small};
   border-radius: ${props => props.theme.borders.card};
   box-shadow: ${props => props.theme.shadows.medium};
`