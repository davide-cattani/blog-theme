import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import PostList from '../components/PostList'
import PostPagination from '../components/PostPagination'

import { Container, Section } from '../elements'

const Pagination = ({ data, pageContext }) => {
  const { posts } = data

  return (
    <Layout>
      <SEO />
      <Section id={`post-list-page-${pageContext.currentPage}`}>
        <Container>
          <PostPagination
            currentPage={pageContext.currentPage}
            pageCount={pageContext.pageCount}
          />

          <PostList posts={posts.edges} cols={2} />

          <PostPagination
            currentPage={pageContext.currentPage}
            pageCount={pageContext.pageCount}
          />
        </Container>
      </Section>
    </Layout>
  )
}

export default Pagination

export const pageQuery = graphql`
  query PaginationQuery($skip: Int!, $limit: Int!) {
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
      limit: $limit
      skip: $skip
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
  }
`
