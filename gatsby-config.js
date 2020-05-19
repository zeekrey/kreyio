// const website = require('./config/website')
// const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
  siteMetadata: {
    title: `Christian Krey`,
    // headline: website.headline,
    titleTemplate: `%s · Me and my blog`,
    description: `My thoughts on software development, company development and other stuff.`,
    url: `https://krey.io`, // No trailing slash allowed!
    image: `/images/snape.jpg`, // Path to your image you placed in the 'static' folder
    twitter: `@zeekrey_`,
    siteLanguage: `en`,
    author: `@zeekrey`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KREY.IO`,
        short_name: `KREY.IO`,
        start_url: `/`,
        background_color: `#FAFAFA`,
        theme_color: `#F65058`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        // commonmark: true,
        // Footnotes mode (default: true)
        // footnotes: true,
        // Pedantic mode (default: true)
        // pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        // gfm: true,
        // Plugins configs
        // plugins: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
