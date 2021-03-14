import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import website from '../../config/website'
import SubCategoryList from '../components/SubCategoryList'
import CategoryPageHeader from '../components/CategoryPageHeader'

import { Container, Section} from '../elements'

const Category = ({ data, location }) => {
  const { category } = data
  //const { edges: subCategories } = data.subCategories

  const subCategories = data.subCategories.edges
    .concat(data.subPostCategories.edges)
    .sort((a, b) => a.node.data.name.localeCompare(b.node.data.name))

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

          <SubCategoryList categories={subCategories} />
        </Container>
      </Section>
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query CategoryBySlug($uid: String) {
    category: prismicCategory(uid: { eq: $uid }) {
      uid
      data {
        name
        heading
        subheading
      }
    }
    subCategories: allPrismicCategory(
      filter: { data: { parent_category: { uid: { eq: $uid } } } }
    ) {
      edges {
        node {
          uid
          data {
            name
            featured_image {
              fluid(maxWidth: 800) {
                ...GatsbyPrismicImageFluid
              }
            }
          }
        }
      }
    }
    subPostCategories: allPrismicPostCategory(
      filter: { data: { parent_category: { uid: { eq: $uid } } } }
    ) {
      edges {
        node {
          uid
          data {
            name
            featured_image {
              fluid(maxWidth: 800) {
                ...GatsbyPrismicImageFluid
              }
            }
          }
        }
      }
    }
  }
`
