import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Slider from 'react-slick'
import BackgroundImage from 'gatsby-background-image'
import ReadMoreButton from './ReadMoreButton'

import {
  OverlayWrapper,
  TextboxOpaque,
  ImageTextboxText,
  BigHeading,
} from '../elements'
import { ThemeContext } from 'styled-components'

var settings = {
  arrows: true,
  dots: true,
  speed: 500,
}

const PostCarousel = () => {
  const theme = useContext(ThemeContext)
  const featuredPosts = useStaticQuery(
    graphql`
      query PostCarouselQuery {
        allPrismicPost(
          filter: { data: { is_featured: { eq: true } } }
          limit: 5
        ) {
          edges {
            node {
              uid
              data {
                title
                is_featured
                featured_image {
                  fluid(maxWidth: 800) {
                    ...GatsbyPrismicImageFluid
                  }
                }
                categories {
                  category {
                    document {
                      ... on PrismicPostCategory {
                        uid
                        data {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  ).allPrismicPost.edges

  return (
    <Slider {...settings}>
      {featuredPosts.map((post) => (
        <CarouselPost key={post.node.uid} post={post.node} theme={theme} />
      ))}
    </Slider>
  )
}

const CarouselPost = ({ post, theme }) => {
  return (
    <BackgroundImage
      style={{ height: theme.dimensions.carousel.height }}
      fluid={post.data.featured_image.fluid}
    >
      <OverlayWrapper>
        <TextboxOpaque>
          <ImageTextboxText>
            -{' '}
            {post.data.categories.map((cat) => {
              return (
                cat.category &&
                cat.category.document && (
                  <span>{cat.category.document.data.name} - </span>
                )
              )
            })}
          </ImageTextboxText>

          <BigHeading>{post.data.title}</BigHeading>

          <ReadMoreButton uid={post.uid} />
        </TextboxOpaque>
      </OverlayWrapper>
    </BackgroundImage>
  )
}

export default PostCarousel
