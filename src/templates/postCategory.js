import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import PostList from '../components/PostList'
import CategoryPageHeader from '../components/CategoryPageHeader'

import { Container, Section, ItalicMessageText } from '../elements'

const PostCategory = ({ data, location }) => {
  const { category } = data
  const { website } = data.site
  const { edges: posts } = data.posts

  return (
    <Layout>
      <SEO
        title={`${category.data.name} | ${website.titleAlt}`}
        pathname={location.pathname}
        desc={`${category.data.heading} - ${category.data.subheading}`}
        node={category}
      />
      <Section>
        <Container>
          <CategoryPageHeader
            heading={category.data.heading}
            subheading={category.data.subheading}
          />

          {posts && posts.length > 0 && <PostList posts={posts} />}
          {(!posts || posts.length === 0) && (
            <ItalicMessageText>Non ci sono articoli qui.. :(</ItalicMessageText>
          )}
        </Container>
      </Section>
    </Layout>
  )
}

export default PostCategory

export const pageQuery = graphql`
  query PostCategoryBySlug($uid: String) {
    category: prismicPostCategory(uid: { eq: $uid }) {
      uid
      data {
        name
        heading
        subheading
      }
    }
    posts: allPrismicPost(
      sort: { fields: data___date, order: DESC }
      filter: {
        data: { categories: { elemMatch: { category: { uid: { eq: $uid } } } } }
      }
      limit: 20
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
    site {
      website: siteMetadata {
        titleAlt
      }
    }
  }
`
