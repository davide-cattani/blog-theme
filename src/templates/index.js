import React from 'react'
import { graphql } from 'gatsby'
import { Container, Section, BigHeading } from '../elements'
import specialBackground from '../../static/specialSectionBackground.png'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import PostCarousel from '../components/PostCarousel'
import HomeAbout from '../components/About/HomeAbout'
import PostList from '../components/PostList'
import HomeShowcase from '../components/HomeShowcase'
import MegaButton from '../components/MegaButton'

const Index = ({ data }) => {
  const { posts, showcaseCategory, showcasePost } = data
  const { website } = data.site.siteMetadata

  return (
    <Layout>
      <SEO />
      {website.home.HAS_CAROUSEL && (
        <Section id='carousel'>
          <Container>
            <PostCarousel />
          </Container>
        </Section>
      )}

      <Section id='about-me' specialBackground={specialBackground}>
        <Container>
          <HomeAbout />
        </Container>
      </Section>

      <Section id='showcase'>
        <Container>
          {showcaseCategory && showcasePost && showcasePost.edges[0] && (
            <HomeShowcase
              showcaseCategory={showcaseCategory}
              showcasePost={showcasePost.edges[0].node}
            />
          )}
        </Container>
      </Section>

      <Section id='latest-posts'>
        <Container>
          <BigHeading textCenter>I miei ultimi articoli..</BigHeading>
          <PostList posts={posts.edges} />
          <MegaButton text='Tutti gli articoli' linkTo='/page-1' />
        </Container>
      </Section>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery($showcaseCategoryUid: String, $postNumber: Int!) {
    site {
      siteMetadata {
        titleAlt
        website {
          home {
            HAS_CAROUSEL
          }
        }
      }
    }
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
    posts: allPrismicPost(
      sort: { fields: data___date, order: DESC }
      limit: $postNumber
    ) {
      edges {
        node {
          uid
          data {
            date(formatString: "DD MMMM YYYY", locale: "it")
            featured_image {
              fluid(maxWidth: 800) {
                ...GatsbyPrismicImageFluid
              }
            }
            title
            destination
            description
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
    showcaseCategory: prismicPostCategory(uid: { eq: $showcaseCategoryUid }) {
      data {
        name
        heading
        subheading
      }
    }
    showcasePost: allPrismicPost(
      sort: { fields: data___date, order: DESC }
      limit: 1
      filter: {
        data: {
          categories: {
            elemMatch: { category: { uid: { eq: $showcaseCategoryUid } } }
          }
        }
      }
    ) {
      edges {
        node {
          uid
          data {
            date(formatString: "DD MMMM YYYY", locale: "it")
            featured_image {
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid
              }
            }
            title
            body {
              ... on PrismicPostBodyText {
                slice_type
                id
                primary {
                  text {
                    html
                  }
                }
              }
            }
            destination
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
