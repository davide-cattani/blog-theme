import styled from 'styled-components'

export const CarouselWrapper = styled.div`
  margin: ${(props) => props.theme.spacings.large} 0;
`

export const CarouselTitle = styled.h3`
  text-align: center;
`

export const CarouselSlide = styled.div`
  position: relative;
`

export const CarouselSlideDescription = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  padding: ${(props) => props.theme.spacings.small};

  background-color: ${(props) => props.theme.colors.textboxOpaque.background};
  color: ${(props) => props.theme.colors.light};

  p {
    margin-bottom: 0;
  }

  @media ${(props) => props.theme.breakpoints.touch} {
   padding: ${(props) => props.theme.spacings.xSmall};
    font-size: ${(props) => props.theme.fonts.sizes.small};
  }
`
