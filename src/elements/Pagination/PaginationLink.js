import { GatsbyLink } from '../GatsbyLink'
import styled from 'styled-components'

export const PaginationLink = styled(GatsbyLink)`
  background-color: ${(props) =>
    props.theme.colors.pagination.items.inactive.color};
  color: ${(props) => props.theme.colors.pagination.items.inactive.background};

  border-radius: ${(props) => props.theme.borders.control};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${(props) => (props.isPrevious ? `order: 1;` : '')}
  ${(props) => (props.isNext ? `order: 3;` : '')}

  ${(props) =>
    props.isDisabled
      ? `background-color: ${props.theme.colors.pagination.items.disabled.background};
         color: ${props.theme.colors.pagination.items.disabled.color};
         opacity: 0.5;
         pointer-events: none;`
      : ''}

  ${(props) =>
    props.isCurrent
      ? `background-color: ${props.theme.colors.pagination.items.active.background};
         color: ${props.theme.colors.pagination.items.active.color};`
      : ''}
`
