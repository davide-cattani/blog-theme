import React from 'react'

import './src/styles/style.scss'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import defaultTheme from './config/theme'

const GlobalStyles = createGlobalStyle`
   * {
      box-sizing: border-box;
   }

   p {
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
   }

   body, html {
      margin: 0;
      padding: 0;
      font-family: ${(props) => props.theme.fonts.main};
      height: 100%;
      background-color: ${(props) => props.theme.colors.light};
      color: ${(props) => props.theme.colors.dark};
   }

   @media ${(props) => props.theme.breakpoints.touch} {
      body {
         padding-top: 3em;
      }
   }
`

export const wrapRootElement = ({ element }, themeOptions) => {
  const theme =
    themeOptions && themeOptions.theme ? themeOptions.theme : defaultTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  )
}
