import styled from 'styled-components'
import { Heading } from '../index'

export const PostCardTitle = styled(Heading)`
  margin-top: ${(props) => props.theme.spacings.small};
  margin-bottom: ${(props) => props.theme.spacings.small};
  font-family: ${(props) => props.theme.fonts.postTitles};

  font-size: ${(props) => props.theme.fonts.sizes.postCardTitle.desktop};
  @media ${(props) => props.theme.breakpoints.touch} {
    font-size: ${(props) => props.theme.fonts.sizes.postCardTitle.touch};
  }

`
