import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import website from '../../config/website'

import {
  Container,
  Section,
  GridWrapper,
  GridItem,
  BigHeading,
  Quote,
} from '../elements'
import { ThemeContext } from 'styled-components'

const AboutPage = ({ data, location }) => {
  const { about } = data
  const theme = useContext(ThemeContext)

  return (
    <Layout>
      <SEO
        title={`About | ${website.titleAlt}`}
        pathname={location.pathname}
        desc={`${about.full_biography}`}
      />
      <Section>
        <Container maxDesktop>
          <GridWrapper cols={2}>
            <GridItem>
              <BigHeading>Ciao! Sono {about.data.author}</BigHeading>
              <div
                dangerouslySetInnerHTML={{
                  __html: about.data.full_biography.html,
                }}
              />
              {about.data.motto && (
                <Quote>
                  <p className='is-size-5 is-italic m-0'>{about.data.motto}</p>
                </Quote>
              )}
            </GridItem>
            <GridItem>
              <Img
                fluid={about.data.image.fluid}
              />
            </GridItem>
          </GridWrapper>
        </Container>
      </Section>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageQuery {
    about: prismicAboutMe {
      data {
        author
        motto
        image {
          fluid(maxWidth: 800) {
            ...GatsbyPrismicImageFluid
          }
        }
        full_biography {
          html
        }
      }
    }
  }
`
