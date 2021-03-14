module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Il blog del lemure digitale', // Navigation and Site Title
  titleAlt: 'Il blog del lemure digitale', // Title for JSONLD
  description: 'Scrivo cose di sviluppo web e ciò che ogni tanto mi capita di fare nel tempo libero. Ma soprattutto condivido le cose che imparo.',
  headline: 'Scrivo cose di sviluppo web e ciò che ogni tanto mi capita di fare nel tempo libero. Ma soprattutto condivido le cose che imparo.', // Headline for schema.org JSONLD
  url: 'https://www.lemurweb.blog', // Domain of your site. No trailing slash!
  siteLanguage: 'it', // Language Tag on <html> element
  logo: '/logos/logo.png', // Used for SEO
  ogLanguage: 'it_IT', // Facebook Language

  // JSONLD / Manifest
  favicon: 'static/logos/logo.png', // Used for manifest favicon generation
  shortName: 'blog', // shortname for manifest. MUST be shorter than 12 characters
  author: 'lemurweb', // Author for schemaORGJSONLD
  primaryColor: '#94e2af',
  secondaryColor: '#0a232d',

  twitter: '@lemurweb', // Twitter Username
  facebook: 'lemurweb', // Facebook Site Name
  googleAnalyticsID: '',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature

  //OPTIONS FOR PAGES
  home: {
    POST_NUMBER: 5,
    HAS_CAROUSEL: true,
  },
  pagination: {
    POST_NUMBER: 8
  },
  
  //OPTIONS FOR COMPONENTS
  navbar: {
    HAS_SEARCH_FIELD: false,
    HAS_SEARCH_MODAL: true,
  },

  //OPTIONS FOR STYLE
  fonts: [`Russo One`, `Abel`]

}