import React from 'react'
import Image from 'gatsby-image'

import { Container, AnchorLink } from '../../elements'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.footer.background};
  padding-top: ${(props) => props.theme.spacings.medium};
  padding-bottom: ${(props) => props.theme.spacings.medium};
`

const FooterInner = styled(Container)`
  text-align: center;
  color: ${(props) => props.theme.colors.footer.color};
`

const FooterPolicies = styled.div`
  margin-top: ${(props) => props.theme.spacings.xLarge};
`

const FooterAnchorLink = styled(AnchorLink)`
  color: ${(props) => props.theme.colors.footer.anchorLinkColor};

  :hover {
    color: ${(props) => props.theme.colors.footer.anchorLinkHoverColor};
  }
`

const Footer = ({ logo }) => {
  return (
    <FooterWrapper>
      <FooterInner>
        {!!logo && (
          <div>
            <Image fixed={logo.childImageSharp.footer} alt='logo' />
          </div>
        )}
        <div>
          <div>
            <p>
              &copy; {new Date().getFullYear()} <br /> Made with{' '}
              <span role='img' aria-label='love'>
                ❤️
              </span>{' '}
              by <FooterAnchorLink href='https://davidecattani.dev'>catta</FooterAnchorLink>
            </p>
          </div>
        </div>

        <FooterPolicies>
          <FooterAnchorLink href={process.env.GATSBY_PRIVACY_POLICY_URL}>
            Privacy Policy
          </FooterAnchorLink>
          {' • '}
          <FooterAnchorLink href={process.env.GATSBY_COOKIE_POLICY_URL}>
            Cookie Policy
          </FooterAnchorLink>
        </FooterPolicies>
      </FooterInner>
    </FooterWrapper>
  )
}

export default Footer
