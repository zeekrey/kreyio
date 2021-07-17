import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import Body from "../components/body"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import SEO from "../components/seo"

import {Wrapper} from '../components/wrapper'



const LegalPage = ({ data }) => (
  <>
    <SEO />
    <Body>
    <Wrapper>
      <Navigation />
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Wrapper>
    </Body>
    <Footer />
  </>
)

export default LegalPage

export const pageQuery = graphql`
  query {
    mdx(frontmatter: { title: { eq: "legal" } }) {
      body
    }
  }
`
