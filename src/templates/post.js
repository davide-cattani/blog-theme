import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { BsArrowsExpand } from 'react-icons/bs'

import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import website from '../../config/website'
import SliceZone from '../components/SliceZone'

import {
  Container,
  Section,
  OverlayWrapper,
  TextboxOpaque,
  ImageTextboxText,
  BigHeading,
  Button,
  Article,
  Tag,
} from '../elements'
import styled from 'styled-components'

const PostHeader = styled.header`
  position: relative;
  height: ${(props) =>
    props.fullFeaturedImage
      ? props.theme.dimensions.postHeader.expandedHeight
      : props.theme.dimensions.postHeader.normalHeight};
  transition: height ${(props) => props.theme.animations.times.slow} ease;
`

const ExpandButton = styled(Button)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.light};
  border: 1px solid ${(props) => props.theme.colors.light};

  &:hover {
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.dark};
  }
`

const TagsWrapper = styled.div`
  margin: ${(props) => props.theme.spacings.large} 0;
`

const Post = ({ data, location }) => {
  const { post } = data

  const [fullFeaturedImage, setFullfeaturedImage] = useState(false)

  const handleShowFullFeaturedImage = (event) => {
    event.preventDefault()
    setFullfeaturedImage(!fullFeaturedImage)
  }

  return (
    <>
      <Layout>
        <SEO
          title={`${post.data.title} | ${website.titleAlt}`}
          pathname={location.pathname}
          desc={post.data.description}
          node={post}
          article
        />

        <Section>
          <Container>
            <PostHeader fullFeaturedImage={fullFeaturedImage}>
              <Img
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  zIndex: '0',
                }}
                fluid={post.data.featured_image.fluid}
              />
              <OverlayWrapper>
                <TextboxOpaque>
                  <BigHeading>{post.data.title}</BigHeading>
                  <ImageTextboxText>{post.data.date}</ImageTextboxText>
                  <ExpandButton
                    onClick={(event) => handleShowFullFeaturedImage(event)}
                  >
                    <BsArrowsExpand size={'1.25em'} />
                  </ExpandButton>
                </TextboxOpaque>
              </OverlayWrapper>
            </PostHeader>
            <Container maxDesktop>
              <Article id={website.skipNavId}>
                <SliceZone allSlices={post.data.body} />
                {!!post.data.categories && !!post.data.categories.length > 0 && (
                  <TagsWrapper>
                    {post.data.categories.map((cat, i) => {
                      return (
                        cat.category &&
                        cat.category.document && (
                          <Tag
                            key={i}
                            to={`/category/${cat.category.document.uid}`}
                          >
                            {cat.category.document.data.name}
                          </Tag>
                        )
                      )
                    })}
                  </TagsWrapper>
                )}
              </Article>
            </Container>
          </Container>
        </Section>
      </Layout>
    </>
  )
}

export default Post

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    post: prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title
        destination
        date(formatString: "DD MMMM YYYY", locale: "it")
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
        body {
          ... on PrismicPostBodyText {
            id
            slice_type
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyCodeBlock {
            id
            slice_type
            primary {
              code_block {
                html
              }
            }
          }
          ... on PrismicPostBodyImage {
            id
            slice_type
            primary {
              caption
              image {
                fluid(maxWidth: 800) {
                  ...GatsbyPrismicImageFluid
                }
              }
            }
          }
          ... on PrismicPostBodyQuote {
            id
            slice_type
            primary {
              author_name
              quote {
                html
              }
            }
          }
          ... on PrismicPostBodyCarousel {
            id
            slice_type
            primary {
              carousel_heading
            }
            items {
              image {
                fluid(maxWidth: 800) {
                  ...GatsbyPrismicImageFluid
                }
              }
              image_description {
                html
              }
            }
          }
        }
        featured_image {
          fluid(maxWidth: 800) {
            ...GatsbyPrismicImageFluid
          }
        }
      }
    }
  }
`
