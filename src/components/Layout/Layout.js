import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Banner from './Banner'
import Navbar from './Navbar'
import Footer from './Footer'
import { IconContext } from 'react-icons'

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query LayoutQuery {
        homepage: prismicHomepage {
          data {
            title {
              text
            }
            content {
              html
            }
            banner_image {
              fluid(maxWidth: 800) {
                ...GatsbyPrismicImageFluid
              }
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
        categories: allPrismicCategory {
          edges {
            node {
              uid
              data {
                name
                parent_category {
                  document {
                    ... on PrismicCategory {
                      uid
                      data {
                        name
                        parent_category {
                          document {
                            ... on PrismicCategory {
                              uid
                              data {
                                name
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        postCategories: allPrismicPostCategory {
          edges {
            node {
              uid
              data {
                name
                parent_category {
                  document {
                    ... on PrismicCategory {
                      uid
                      data {
                        name
                        parent_category {
                          document {
                            ... on PrismicCategory {
                              uid
                              data {
                                name
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const bannerImage = data.homepage.data.banner_image
  const socialLinks = data.socialLinks.data

  const [macroCategories, setMacroCategories] = useState([])

  useEffect(() => {
    let macros = []

    //get both categories and post categories and order them alphabetically
    const allCategories = data.categories.edges
      .concat(data.postCategories.edges)
      .sort((a, b) => a.node.data.name.localeCompare(b.node.data.name))

    const secondLevelCategories = []
    const thirdLevelCategories = []

    allCategories.forEach((category) => {
      //push categories with two ancestors in thirdLevelCategories
      if (
        category.node.data.parent_category.document &&
        category.node.data.parent_category.document.data.parent_category
          .document
      ) {
        thirdLevelCategories.push({
          name: category.node.data.name,
          uid: category.node.uid,
          parent_name: category.node.data.parent_category.document.data.name,
        })
      }
      //push categories with only one parent in secondLevelCategories
      else if (
        category.node.data.parent_category.document &&
        !category.node.data.parent_category.document.data.parent_category
          .document
      ) {
        secondLevelCategories.push({
          name: category.node.data.name,
          uid: category.node.uid,
          parent_name: category.node.data.parent_category.document.data.name,
        })
      }
      //push categories without parent in macroCategories
      else if (!category.node.data.parent_category.document) {
        macros.push({
          name: category.node.data.name,
          uid: category.node.uid,
        })
      }
    })

    secondLevelCategories.forEach((secondLvlCat) => {
      const subCat = []
      thirdLevelCategories.forEach((tlCat) => {
        if (tlCat.parent_name === secondLvlCat.name) {
          subCat.push({ name: tlCat.name, uid: tlCat.uid })
        }
      })
      secondLvlCat.subCategories = subCat
    })

    macros.forEach((macroCat) => {
      const subCat = []
      secondLevelCategories.forEach((slCat) => {
        if (slCat.parent_name === macroCat.name) {
          subCat.push({
            name: slCat.name,
            uid: slCat.uid,
            subCategories: slCat.subCategories,
          })
        }
      })
      macroCat.subCategories = subCat
    })

    setMacroCategories(macros)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Navbar macroCategories={macroCategories} />
        <Banner bannerImage={bannerImage} socialLinks={socialLinks} />

        <main style={{minHeight: '100vh'}}>{children}</main>

        <Footer />
      </IconContext.Provider>
    </>
  )
}

export default Layout
