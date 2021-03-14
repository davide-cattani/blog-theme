import React, { useState, useRef, useEffect } from 'react'
import { navigate } from 'gatsby'

import { Input, Button, CenteredBox } from '../../elements'
import styled from 'styled-components'

const SearchFieldInput = styled(Input)`
  padding: ${(props) => props.theme.spacings.small}
    ${(props) => props.theme.spacings.xSmall};
  font-size: ${(props) => props.theme.fonts.sizes.medium};
`

const SearchButton = styled(Button)`
  border-color: ${(props) => props.theme.colors.light};
  font-size: ${(props) => props.theme.fonts.sizes.medium};
  background-color: rgba(0, 0, 0, 0.25);
`

const useFocus = () => {
  const htmlElRef = useRef(null)
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus()
  }

  return [htmlElRef, setFocus]
}

const SearchField = ({ modal, autoFocusSearchBar }) => {
  const [expanded, setExpanded] = useState(false)
  const [query, setQuery] = useState('')

  const [inputRef, setInputFocus] = useFocus()

  useEffect(() => {
    if (autoFocusSearchBar) setInputFocus()
  }, [])

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        // TODO: do something with form values
        navigate('/search', {
          state: { query },
        })
      }}
    >
      <div
        className={`control has-icons-left search-field`}
        onPointerOver={() => setExpanded(!expanded)}
        onPointerOut={() => setExpanded(!expanded)}
      >
        <SearchFieldInput
          ref={inputRef}
          className='input is-rounded is-dark has-background-transparent'
          type='text'
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
          }}
          placeholder='Cerca parole chiave...'
        />
      </div>

      {modal && (
        <CenteredBox>
          <SearchButton>Cerca</SearchButton>
        </CenteredBox>
      )}
    </form>
  )
}

export default SearchField
