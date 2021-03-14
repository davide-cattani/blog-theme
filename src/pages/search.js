import React, { useState, useEffect, useContext } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import config from '../../config/website'
import { BiSearchAlt } from 'react-icons/bi'
import PostList from '../components/PostList'

import { Container, Section, Field, Input, Button } from '../elements'
import styled from 'styled-components'
import { ThemeContext } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const SearchField = styled(Field)`
  margin: 0;
  flex-grow: 6;
`

const SearchInput = styled(Input)`
  padding: ${(props) => props.theme.spacings.small};
  border-radius: ${(props) => props.theme.borders.control} 0 0
    ${(props) => props.theme.borders.control};

  font-size: ${(props) => props.theme.fonts.sizes.medium};
`

const SearchButton = styled(Button)`
  margin-left: -2px;
  padding: ${(props) => props.theme.spacings.xSmall};
  border: 0;
  border-radius: 0 ${(props) => props.theme.borders.control}
    ${(props) => props.theme.borders.control} 0;
`

const SearchPage = ({ data, location }) => {
  const theme = useContext(ThemeContext)
  const [query, setQuery] = useState(
    location && location.state && location.state.query
      ? location.state.query
      : ''
  )
  const [results, setResults] = useState([])

  useEffect(() => {
    if (!query || !window.__LUNR__) {
      setResults([])
      return
    }
    const lunrIndex = window.__LUNR__[`${config.siteLanguage}`]

    if (lunrIndex) {
      const searchResults = lunrIndex.index.search(query)
      setResults(
        searchResults.map(({ ref }) => {
          return lunrIndex.store[ref]
        })
      )
    }
  }, [query])

  return (
    <Layout>
      <SEO title={`Search | ${config.titleAlt}`} pathname={location.pathname} />
      <Section id='search'>
        <Container size={theme.dimensions.container.xSmall}>
          <Wrapper>
            <SearchField>
              <SearchInput
                type='text'
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value)
                }}
                placeholder='Chi cerca trova...'
              />
            </SearchField>
            <SearchButton>
              <BiSearchAlt size='2em' />
            </SearchButton>
          </Wrapper>
        </Container>
        <Container>
          {results && results.length > 0 && <PostList list posts={results} />}
          {/* {query.length > 4 && results.length == 0 && (
            <div className='mt-6 has-text-centered'>Nessun risultato corrisponde alla ricerca :(</div>
          )} */}
        </Container>
      </Section>
    </Layout>
  )
}

export default SearchPage

export const pageQuery = graphql`
  query SearchPageQuery {
    __typename
  }
`
