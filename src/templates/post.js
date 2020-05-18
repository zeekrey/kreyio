import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Body from "../components/body"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function Template({
  data,
  pageContext: { languages = [] },
  location: { pathname },
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const isNotDefaultLanguage = languages.find(language => {
    // .find needs to return falsy value, otherwise it will exit
    return pathname.indexOf(`/${language}/`) < 0 ? false : true
  })

  const Wrapper = styled.div`
    padding: 0rem 3rem;
    margin-bottom: 2rem;
  `

  return (
    <>
      <Body>
        <Navigation />
        {/* This should only be displayed if there is no language key in path. */}
        {/* {!isNotDefaultLanguage && (
          <div>
            <div>This article is also availbe in the following languages:</div>
            <ul>
              {languages.map(language => (
                <li>
                  <Link to={`/${language}${frontmatter.slug}`}>{language}</Link>
                </li>
              ))}
            </ul>
          </div>
        )} */}
        <Wrapper>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Wrapper>
      </Body>
      <Footer />
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
