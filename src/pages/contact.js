import React, { useState, useContext } from 'react'
import { HiMail } from 'react-icons/hi'
import * as emailjs from 'emailjs-com'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import website from '../../config/website'

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
  CenteredBox
} from '../elements'
import { ThemeContext } from 'styled-components'

const ContactPage = ({ location }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [emailSentMessage, setEmailSentMessage] = useState('')

  const theme = useContext(ThemeContext)

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
        <Container size={theme.dimensions.container.xSmall}>
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
                  <Label>
                    <Input
                      type='checkbox'
                      required
                      checked={privacyAccepted}
                      onChange={(event) => setPrivacyAccepted(!privacyAccepted)}
                    />{' '}
                    Autorizzo il trattamento dei dati personali secondo la{' '}
                    <a href={process.env.GATSBY_PRIVACY_POLICY_URL}>
                      Privacy Policy
                    </a>
                  </Label>
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
