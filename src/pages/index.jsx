import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Body from "../components/body"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Me from "../components/me"
import PostPreview from "../components/postPreview"
import SEO from "../components/seo"

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: #000000;
  color: white;
  padding: 8px;
  z-index: 100;
  &:focus {
    top: 0;
  }
`

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostPreview key={edge.node.id} post={edge.node} />)

  return (
    <>
      <SEO />
      <Body>
        <SkipLink href="#main">Skip to main</SkipLink>
        <Navigation />
        <Me />
        <main id="main">{Posts}</main>
      </Body>
      <Footer />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMdx(
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
