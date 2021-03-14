import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

import { AnchorLink } from '../../elements'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const SocialLink = styled(AnchorLink)`
  margin: ${(props) => props.theme.spacings.xSmall};
`

const Link = ({ social, url }) => {
  let Icon = <></>
  let size = '1.25em'

  switch (social) {
    case 'facebook':
      Icon = <FaFacebook size={size} />
      break
    case 'instagram':
      Icon = <FaInstagram size={size} />
      break
    case 'twitter':
      Icon = <FaTwitter size={size} />
      break
    case 'youtube':
      Icon = <FaYoutube size={size} />
      break
    case 'mail':
      Icon = <FiMail size={size} />
      break
    default:
      break
  }

  return <SocialLink aria-label={social} href={url}>{Icon}</SocialLink>
}

const SocialLinks = ({ links }) => {
  return (
    <Wrapper>
      {!!links.facebook && !!links.facebook.url && (
        <Link social={'facebook'} url={links.facebook.url} />
      )}
      {!!links.instagram && !!links.instagram.url && (
        <Link social={'instagram'} url={links.instagram.url} />
      )}
      {!!links.twitter && !!links.twitter.url && (
        <Link social={'twitter'} url={links.twitter.url} />
      )}
      {!!links.youtube && !!links.youtube.url && (
        <Link social={'youtube'} url={links.youtube.url} />
      )}
      {!!links.mail && !!links.mail.url && (
        <Link social={'mail'} url={links.mail.url} />
      )}
    </Wrapper>
  )
}

export default SocialLinks
