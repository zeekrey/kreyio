import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Body from "../components/body"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import SEO from "../components/seo"

const Wrapper = styled.div`
  margin-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 450px) {
    padding-left: ${({ theme }) => theme.paddingX};
    padding-right: ${({ theme }) => theme.paddingX};
  }
  margin-top: 1rem;
  line-height: 1.6rem;
  a {
    border-bottom: 1px solid ${({ theme }) => theme.secondary};
    padding-bottom: 0.1rem;
    &:hover {
      color: ${({ theme }) => theme.secondary};
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.secondary};
  }
  code {
    font-size: 1rem;
    color: ${({ theme }) => theme.secondary};
  }
`

const ThankYouPage = ({ data }) => (
  <>
    <SEO />
    <Body>
      <Navigation />
      <Wrapper>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Wrapper>
    </Body>
    <Footer />
  </>
)

export default ThankYouPage

export const pageQuery = graphql`
  query {
    mdx(frontmatter: { title: { eq: "thankyou" } }) {
      body
    }
  }
`
