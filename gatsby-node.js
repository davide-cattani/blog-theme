const config = require('./config/website')

//Hide sources in production
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}

// graphql function doesn't throw an error so we have to check for the result.errors to throw manually
const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //import page templates
  const indexTemplate = require.resolve('./src/templates/index.js')
  const paginationTemplate = require.resolve('./src/templates/pagination.js')
  const postTemplate = require.resolve('./src/templates/post.js')
  const postCategoryTemplate = require.resolve(
    './src/templates/postCategory.js'
  )
  const categoryTemplate = require.resolve('./src/templates/category.js')

  //query for all repeatable documents in Prismic
  const result = await wrapper(
    graphql(`
      {
        allPrismicCategory {
          edges {
            node {
              uid
            }
          }
        }
        allPrismicPostCategory {
          edges {
            node {
              uid
              data {
                showcase
              }
            }
          }
        }
        allPrismicPost {
          edges {
            node {
              uid
            }
          }
        }
      }
    `)
  )

  const postsList = result.data.allPrismicPost.edges
  const postCategoriesList = result.data.allPrismicPostCategory.edges
  const CategoriesList = result.data.allPrismicCategory.edges

  let showcaseCategoryUid = 'xyz'

  // POST PAGES
  postsList.forEach((edge) => {
    createPage({
      path: `/post/${edge.node.uid}`,
      component: postTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })

  //POST CATEGORY PAGES
  postCategoriesList.forEach((edge) => {
    if (edge.node.data.showcase) {
      showcaseCategoryUid = edge.node.uid
    }
    createPage({
      path: `/category/${edge.node.uid}`,
      component: postCategoryTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })

  //CATEGORY PAGES
  CategoriesList.forEach((edge) => {
    createPage({
      path: `/category/${edge.node.uid}`,
      component: categoryTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })

  //import post per page number from config
  const POST_NUMBER_HOME_PAGE = config.home.POST_NUMBER
  const POST_NUMBER_INDEX_PAGES = config.pagination.POST_NUMBER

  //HOMEPAGE
  createPage({
    path: `/`,
    component: indexTemplate,
    context: {
      showcaseCategoryUid: showcaseCategoryUid,
      postNumber: POST_NUMBER_HOME_PAGE,
    },
  })

  //PAGINATION PAGES
  const pageCount = Math.ceil(postsList.length / POST_NUMBER_INDEX_PAGES)
  return Array.from({ length: pageCount }).map((_, index) =>
    createPage({
      path: `/page-${index + 1}`,
      component: paginationTemplate,
      context: {
        skip: index * POST_NUMBER_INDEX_PAGES,
        limit: POST_NUMBER_INDEX_PAGES,
        pageCount,
        currentPage: index + 1,
      },
    })
  )
}
