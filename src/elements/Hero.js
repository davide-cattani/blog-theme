import styled from 'styled-components'

export const Hero = styled.header`
  min-height: ${(props) =>
    props.full
      ? props.theme.dimensions.fullHeight
      : props.large
      ? props.theme.dimensions.largeHeight
      : props.medium
      ? props.theme.dimensions.mediumHeight
      : props.small
      ? props.theme.dimensions.smallHeight
      : props.theme.dimensions.xSmallHeight};

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-top: ${(props) => props.theme.spacings.medium};
  margin-bottom: ${(props) => props.theme.spacings.medium};
`
