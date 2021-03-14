import React, { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import config from '../../../config/website'
import { IoSearchOutline } from 'react-icons/io5'
import SearchField from './SearchField'

import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { RiArrowDropRightLine } from 'react-icons/ri'

import { ModalWrapper, Button } from '../../elements'
import styled from 'styled-components'
import { css } from 'styled-components'

const styleForMenuItemColors = ({ theme }) => css`
  cursor: pointer;
  color: ${theme.colors.menu.items.color};
  background-color: ${theme.colors.menu.items.background};
  :hover {
    background-color: ${theme.colors.menu.items.hover.background};
    color: ${theme.colors.menu.items.hover.color};
  }
`

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  z-index: 6666;
  font-family: ${(props) => props.theme.fonts.menu};
  font-weight: ${(props) => props.theme.fonts.weights.menu};
  box-shadow: ${(props) => props.theme.shadows.medium};
  background-color: ${(props) => props.theme.colors.menu.background};

  @media ${(props) => props.theme.breakpoints.desktop} {
    height: 100%;
  }

  @media ${(props) => props.theme.breakpoints.touch} {
    width: 100%;
  }
`

const NavbarMenuList = styled.ul`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  margin: 0;
  list-style-type: none;
  flex-direction: column;

  padding: 0;

  @media ${(props) => props.theme.breakpoints.desktop} {
    height: 100%;
  }

  @media ${(props) => props.theme.breakpoints.touch} {
    width: 100%;
    text-align: center;
  }
`

const NavbarMenuItem = styled.li`
  position: relative;

  > a {
    ${styleForMenuItemColors};
  }

  ${styleForMenuItemColors};

  :hover {
    > ul {
      visibility: visible;
      opacity: 1;
      display: block;
      padding: 0;
    }
  }
`

const NavbarTrigger = styled.div`
  padding: ${(props) => props.theme.spacings.xSmall}
    ${(props) => props.theme.spacings.small};
  text-align: center;

  ${styleForMenuItemColors};

  svg {
    transition: transform ${(props) => props.theme.animations.animTime} ease;
    transform: ${(props) => (props.active ? 'rotate(0)' : 'rotate(90deg)')};
  }

  @media ${(props) => props.theme.breakpoints.touch} {
    display: inline-block;
    float: right;
  }
`

const NavbarMenuDropdown = styled.ul`
  border-radius: 0 ${(props) => props.theme.borders.control} ${(props) => props.theme.borders.control} 0;
  border-left: 1px solid ${(props) => props.theme.colors.menu.dropdown.border};
  background-color: ${(props) => props.theme.colors.menu.dropdown.background};
  visibility: hidden;
  opacity: 0;
  z-index: 6666;
  position: absolute;
  top: 0;
  left: 100%;
  list-style-type: none;
  display: none;

  li {
    clear: both;
    width: 100%;
    white-space: nowrap;
  }
`

const NavbarLink = styled(GatsbyLink)`
  display: block;
  padding: ${(props) => props.theme.spacings.small};

  svg {
    @media ${(props) => props.theme.breakpoints.touch} {
      display: none;
    }
  }
`

const ModalContent = styled.div`
  font-size: ${(props) => props.theme.fonts.sizes.large};
`

const ModalButton = styled(Button)`
  margin: ${(props) => props.theme.spacings.medium};
  padding: ${(props) => props.theme.spacings.small};
  border: 1px solid ${(props) => props.theme.colors.light};
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  right: 0;
  font-size: ${(props) => props.theme.fonts.sizes.large};
`

const Navbar = ({ logo, macroCategories }) => {
  const [active, setActive] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)

  return (
    <>
      <NavbarWrapper
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => {
          setActive(false)
        }}
      >
        <NavbarTrigger active={active} onPointerDown={() => setActive(!active)}>
          <GiHamburgerMenu size='2em' />
        </NavbarTrigger>
        {config.navbar.HAS_SEARCH_FIELD && (
          <div className='navbar-item search-item is-clickable'>
            <SearchField />
          </div>
        )}
        {config.navbar.HAS_SEARCH_MODAL && (
          <NavbarTrigger>
            <span
              onClick={() => {
                setShowSearchModal(true)
              }}
            >
              <IoSearchOutline size='2em' />
            </span>
          </NavbarTrigger>
        )}
        <NavbarMenuList active={active}>
          <NavbarMenuItem>
            <NavbarLink to='/'>Home</NavbarLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavbarLink to='/about'>Chi Sono</NavbarLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavbarLink to='/contact'>Contatti</NavbarLink>
          </NavbarMenuItem>

          {macroCategories &&
            macroCategories.length > 0 &&
            macroCategories.map((cat) => {
              //if has second-level subcategories
              if (cat.subCategories && cat.subCategories.length > 0) {
                return (
                  <>
                    <NavbarMenuItem>
                      <NavbarLink to={`/category/${cat.uid}`}>
                        {cat.name} <RiArrowDropRightLine />
                      </NavbarLink>
                      <NavbarMenuDropdown>
                        {cat.subCategories.map((subCat) => {
                          if (
                            subCat.subCategories &&
                            subCat.subCategories.length > 0
                          ) {
                            return (
                              <NavbarMenuItem>
                                <NavbarLink to={`/category/${subCat.uid}`}>
                                  {subCat.name} <RiArrowDropRightLine />
                                </NavbarLink>
                                <NavbarMenuDropdown>
                                  {subCat.subCategories.map((tlCat) => (
                                    <NavbarMenuItem>
                                      <NavbarLink to={`/category/${tlCat.uid}`}>
                                        {tlCat.name}
                                      </NavbarLink>
                                    </NavbarMenuItem>
                                  ))}
                                </NavbarMenuDropdown>
                              </NavbarMenuItem>
                            )
                          } else
                            return (
                              <NavbarMenuItem>
                                <NavbarLink to={`/category/${subCat.uid}`}>
                                  {subCat.name}
                                </NavbarLink>
                              </NavbarMenuItem>
                            )
                        })}
                      </NavbarMenuDropdown>
                    </NavbarMenuItem>
                  </>
                )
              } else {
                return (
                  <NavbarMenuItem>
                    <NavbarLink to={`/category/${cat.uid}`}>
                      {cat.name}
                    </NavbarLink>
                  </NavbarMenuItem>
                )
              }
            })}
        </NavbarMenuList>
      </NavbarWrapper>

      {/* SEARCH MODAL */}
      {showSearchModal && (
        <ModalWrapper>
          <ModalContent>
            <SearchField modal autoFocusSearchBar />
          </ModalContent>
          <ModalButton
            aria-label='close'
            onClick={() => {
              setShowSearchModal(false)
            }}
          >
            <GrClose />
          </ModalButton>
        </ModalWrapper>
      )}
    </>
  )
}

export default Navbar
