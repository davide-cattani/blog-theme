import styled from 'styled-components'

export const ImageWrapper = styled.div`
  display: block;
  max-width: ${(props) => props.theme.dimensions.postPage.image.maxWidth};
  margin: ${(props) => props.theme.spacings.medium} auto;
`

export const ImageCaption = styled.figcaption`
  text-align: center;
  font-style: italic;
  margin-top: 3px;

  font-size: ${(props) => props.theme.fonts.sizes.small};
`
