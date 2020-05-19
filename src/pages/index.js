import React from "react"
import { graphql } from "gatsby"
import Body from "../components/body"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Me from "../components/me"
import PostPreview from "../components/postPreview"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostPreview key={edge.node.id} post={edge.node} />)

  return (
    <>
      <SEO />
      <Body>
        <Navigation />
        <Me />
        {Posts}
      </Body>
      <Footer />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { langKey: { eq: "en" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
