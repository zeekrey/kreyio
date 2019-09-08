/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Christian Krey",
    titleTemplate: "%s · That's me.",
    description:
      "Just a small page about me and contact information.",
    url: "https://krey.io", // No trailing slash allowed!
    image: "/me.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@zeekrey_",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fugaz One`,
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    }
  ]
}
