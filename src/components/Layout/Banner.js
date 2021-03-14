import React from 'react'
import Img from 'gatsby-image'

import { Container, GatsbyLink } from '../../elements'
import styled from 'styled-components'

import SocialLinks from './SocialLinks'

const BannerImageWrapper = styled(GatsbyLink)`
  max-height: ${(props) => props.theme.dimensions.bannerImage.height};
`

const Banner = ({ bannerImage, socialLinks }) => {
  return (
    <header id='banner'>
      <Container>
        {bannerImage && bannerImage.fluid && (
          <BannerImageWrapper aria-label='banner' to='/'>
            <Img
              style={{ height: '100%', width: '100%' }}
              fluid={bannerImage.fluid}
              imgStyle={{ objectFit: 'contain' }}
            />
          </BannerImageWrapper>
        )}

        <SocialLinks links={socialLinks} />
      </Container>
    </header>
  )
}

export default Banner
