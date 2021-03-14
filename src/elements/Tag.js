import styled from 'styled-components'
import { GatsbyLink } from './GatsbyLink'

export const Tag = styled(GatsbyLink)`
  margin-right: ${(props) => props.theme.spacings.xSmall};
  padding: ${(props) => props.theme.spacings.xSmall};
  color: ${(props) => props.theme.colors.tag.color};
  background-color: ${(props) => props.theme.colors.tag.background};
  border-radius: ${(props) => props.theme.borders.control};

  &:hover {
    background-color: ${(props) => props.theme.colors.tag.hover.background};
    color: ${(props) => props.theme.colors.tag.hover.color};
  }

  ${(props) =>
    props.isSmall
      ? `padding: ${props.theme.spacings.xxSmall};
          font-size: ${props.theme.fonts.sizes.small};
          margin-right: ${props.theme.spacings.xxSmall};
        `
      : ''}
`
