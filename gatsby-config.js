require('dotenv').config({
  path: `.env`,
})

const merge = require('lodash/merge')

//const prismicHtmlSerializer = require('./src/gatsby/htmlSerializer')

const defaultWebsite = require('./config/website')
const defaultTheme = require('./config/theme')

module.exports = (themeOptions) => {
  const website =
    themeOptions && themeOptions.website
      ? merge(defaultWebsite, themeOptions.website)
      : defaultWebsite
  const theme =
    themeOptions && themeOptions.theme
      ? merge(defaultTheme, themeOptions.theme)
      : defaultTheme

  const pathPrefix = website.pathPrefix === '/' ? '/' : website.pathPrefix

  return {
    /* General Information */
    pathPrefix: website.pathPrefix,
    siteMetadata: {
      siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
      pathPrefix,
      title: website.title,
      titleAlt: website.titleAlt,
      description: website.description,
      banner: website.logo,
      headline: website.headline,
      siteLanguage: website.siteLanguage,
      ogLanguage: website.ogLanguage,
      author: website.author,
      twitter: website.twitter,
      facebook: website.facebook,
      //access to website config from components
      //theme is accessed using ThemeContext
      website: website,
    },
    /* Plugins */
    plugins: [
      `gatsby-plugin-styled-components`,
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-prismic',
        options: {
          repositoryName: `${process.env.API_REPO}`,
          accessToken: `${process.env.API_KEY}`,
          schemas: {
            homepage: require('./src/schemas/homepage.json'),
            about_me: require('./src/schemas/about_me.json'),
            post: require('./src/schemas/post.json'),
            post_category: require('./src/schemas/post_category.json'),
            category: require('./src/schemas/category.json'),
            social_links: require('./src/schemas/social_links.json'),
          },
          // Get the correct URLs in blog posts
          linkResolver: () => (post) => `/${post.uid}`,
          // PrismJS highlighting for labels and slices
          //htmlSerializer: () => prismicHtmlSerializer,
          // Remove this config option if you only have one language in your Prismic repository
          //lang: 'en-gb',
          // Provide a default set of Imgix image transformations applied to
          // Imgix-backed gatsby-image fields. These options will override the
          // defaults set by Prismic.
          // See: https://docs.imgix.com/apis/url
          imageImgixParams: {
            auto: 'compress,format',
            q: 40,
          },
          imagePlaceholderImgixParams: {
            w: 150,
            blur: 10,
            q: 30,
          },
        },
      },
      {
        resolve: 'gatsby-plugin-lunr',
        options: {
          // ISO 639-1 language codes. See https://lunrjs.com/guides/language_support.html for details
          languages: [
            {
              name: website.siteLanguage,
              // A function for filtering nodes. () => true by default
              filterNodes: (node) => !!node.data,
            },
          ],
          // Fields to index. If store === true value will be stored in index file.
          // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
          fields: [
            { name: 'title', store: true, attributes: { boost: 20 } },
            { name: 'destination', store: true, attributes: { boost: 5 } },
            { name: 'description', store: true },
            //{ name: 'content', store: true },
            { name: 'date', store: true },
            { name: 'uid', store: true },
          ],

          // How to resolve each field's value for a supported node type
          resolvers: {
            // For any node of a given type, list how to resolve the fields' values
            PrismicPost: {
              title: (node) => node.data.title,
              destination: (node) => node.data.destination,
              description: (node) => node.data.description,
              //content: (node) => node.data.body.raw,
              date: (node) => node.data.date,
              uid: (node) => node.uid,
            },
          },
        },
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: website.fonts,
          display: 'swap',
        },
      },
      'gatsby-plugin-lodash',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      // {
      //   resolve: 'gatsby-plugin-google-analytics',
      //   options: {
      //     trackingId: website.googleAnalyticsID,
      //   },
      // },
      'gatsby-plugin-sitemap',
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: website.title,
          short_name: website.titleAlt,
          description: website.description,
          start_url: pathPrefix,
          background_color: theme.colors.secondary,
          theme_color: theme.colors.primary,
          display: 'standalone',
          icon: website.favicon,
          // icon_options: {
          //   purpose: `maskable`,
          // },
        },
      },
      // Must be placed at the end
      'gatsby-plugin-offline',
      // {
      //   resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      //   options: {
      //     disable: true,
      //   },
      // },
      `gatsby-plugin-preact`,
      {
        resolve: 'gatsby-plugin-page-progress',
        options: {
          includePaths: [{ regex: '^/post' }],
          height: theme.dimensions.progressBar.height,
          color: theme.colors.progressBar.color,
        },
      },
      //'gatsby-plugin-remove-console',
      // {
      //   resolve: `gatsby-plugin-purgecss`,
      //   options: {
      //     //printRejected: true, // Print removed selectors and processed file names
      //     //develop: true, // Enable while using `gatsby develop`

      //     // tailwind: true, // Enable tailwindcss support
      //     //whitelist: [], // Don't remove this selector
      //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
      //     //purgeOnly: ['/styles/style.scss'], // Purge only these files/folders
      //   },
      // },
      // 'gatsby-plugin-netlify',
    ],
  }
}
