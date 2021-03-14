import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import SocialLinks from '../Layout/SocialLinks'

import { BigHeading, Heading, GridWrapper, GridItem } from '../../elements'
import styled from 'styled-components'

const ImageWrapper = styled(GridItem)`
  padding: ${(props) => props.theme.spacings.xxLarge};

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: ${(props) => props.theme.spacings.large};
  }
`

const ContentWrapper = styled(GridItem)`
  padding: ${(props) => props.theme.spacings.large};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HomeAbout = () => {
  const data = useStaticQuery(
    graphql`
      query HomeAboutQuery {
        about: prismicAboutMe {
          data {
            author
            motto
            image {
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid
              }
            }
            full_biography {
              text
            }
            short_biography {
              text
            }
          }
        }
        socialLinks: prismicSocialLinks {
          data {
            facebook {
              url
            }
            instagram {
              url
            }
            mail {
              url
            }
            youtube {
              url
            }
          }
        }
      }
    `
  )

  const { about } = data
  const { socialLinks } = data

  return (
    <GridWrapper cols={2}>
      <ImageWrapper>
        {about.data.image && about.data.image.fluid && (
          <Img style={{ height: '100%' }} fluid={about.data.image.fluid} />
        )}
      </ImageWrapper>
      <ContentWrapper>
        <BigHeading>CHI SONO</BigHeading>
        <Heading>{about.data.author}</Heading>
        <p>{about.data.short_biography.text}</p>
        <SocialLinks links={socialLinks.data} />
      </ContentWrapper>
    </GridWrapper>
    // <div className='card m-3'>
    //   <div className='card-content p-4'>
    //     <div className='divider mt-3 mb-1'>
    //       <div className=' is-size-7-mobile has-text-primary'>CHI SONO</div>
    //     </div>
    //     {about.data.image && about.data.image.fluid && (
    //       <Img className='m-5' fluid={about.data.image.fluid} />
    //     )}
    //     <div className='content has-text-centered'>
    //       <h2 className='is-size-4 has-text-secondary '>{about.data.author}</h2>
    //       <p className=''>{about.data.short_biography.text}</p>
    //     </div>
    //     <SocialLinks links={socialLinks.data} />
    //   </div>
    // </div>
  )
}

export default HomeAbout
