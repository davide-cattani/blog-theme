import React, { useState, useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { HiMail } from 'react-icons/hi'
import * as emailjs from 'emailjs-com'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'

import {
  Container,
  Section,
  Card,
  CardContent,
  Field,
  Label,
  Input,
  TextArea,
  Button,
  InfoMessage,
  CenteredBox,
  AnchorLink,
} from '../elements'
import { ThemeContext } from 'styled-components'

const ContactPage = ({ location }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [emailSentMessage, setEmailSentMessage] = useState('')

  const theme = useContext(ThemeContext)

  const { website } = useStaticQuery(graphql`
    query Contact {
      site {
        website: siteMetadata {
          titleAlt
        }
      }
    }
  `).site

  const handleSubmit = (event) => {
    event.preventDefault()

    let templateParams = {
      from_name: name + ': (' + email + ')',
      to_name: 'service_gmail',
      message: message,
      reply_to: email,
    }
    emailjs.send(
      'service_gmail',
      'template_lemur',
      templateParams,
      process.env.GATSBY_EMAILJS_KEY
    )
    resetForm()
  }

  const resetForm = () => {
    setEmailSentMessage(`Grazie per avermi contattato ${name}! ;)`)
    setName('')
    setEmail('')
    setMessage('')
    setPrivacyAccepted(false)
    setTimeout(() => setEmailSentMessage(''), 10000)
  }

  return (
    <Layout>
      <SEO
        title={`Contact | ${website.titleAlt}`}
        pathname={location.pathname}
      />
      <Section>
        <Container size={theme.dimensions.container.small}>
          <Card>
            <CardContent>
              <form onSubmit={(event) => handleSubmit(event)}>
                <Field>
                  <Label>Nome</Label>
                  <div className='control'>
                    <Input
                      type='text'
                      required
                      placeholder='...'
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                </Field>

                <Field>
                  <Label>Email</Label>
                  <div className='control'>
                    <Input
                      type='email'
                      required
                      placeholder='@'
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </Field>

                <Field>
                  <Label>Messaggio</Label>
                  <div className='control'>
                    <TextArea
                      required
                      placeholder='...'
                      rows={5}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                    ></TextArea>
                  </div>
                </Field>

                <Field checkbox>
                  <Input
                    checkbox
                    type='checkbox'
                    required
                    checked={privacyAccepted}
                    onChange={(event) => setPrivacyAccepted(!privacyAccepted)}
                  />{' '}
                  Autorizzo il trattamento dei dati personali secondo la{' '}
                  <AnchorLink href={process.env.GATSBY_PRIVACY_POLICY_URL}>
                    Privacy Policy
                  </AnchorLink>
                </Field>
                <CenteredBox>
                  {emailSentMessage && emailSentMessage.length > 0 && (
                    <InfoMessage>
                      <header>
                        <p>{emailSentMessage}</p>
                      </header>
                      <div>Sarai ricontattato al più presto</div>
                    </InfoMessage>
                  )}
                  {(!emailSentMessage || emailSentMessage.length === 0) && (
                    <Button type='submit'>
                      <HiMail /> Invia
                    </Button>
                  )}
                </CenteredBox>
              </form>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </Layout>
  )
}

export default ContactPage
