import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import ReadMoreButton from './ReadMoreButton'

import {
  OverlayWrapper,
  TextboxOpaque,
  ImageTextboxText,
  BigHeading,
  Heading,
} from '../elements'

const EXCERPT_LENGTH = 220

const HomeShowcase = ({ showcaseCategory, showcasePost }) => {
  return (
    <div>
      <BigHeading textCenter>
        <span>🚀 </span>
        {showcaseCategory.data.name}
      </BigHeading>

      <ShowcasePost post={showcasePost} />
    </div>
  )
}

const ShowcasePost = ({ post }) => {
  //const excerpt = post.data.description.substring(0, EXCERPT_LENGTH) + '…'

  return (
    <BackgroundImage
      style={{ height: '48vh' }}
      fluid={post.data.featured_image.fluid}
    >
      <OverlayWrapper>
        <TextboxOpaque>
          <ImageTextboxText>{post.data.date}</ImageTextboxText>

          <Heading>{post.data.destination}</Heading>
          <BigHeading>{post.data.title}</BigHeading>

          <ReadMoreButton uid={post.uid} />
        </TextboxOpaque>
      </OverlayWrapper>
    </BackgroundImage>
  )
}

export default HomeShowcase
