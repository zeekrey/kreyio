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
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 5rem;
    margin-bottom: 2rem;
  `

  const Headline = styled.div`
    color: ${({ theme }) => theme.secondary};
    font-family: Oswald;
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 2.4rem;
  `

  const Version = styled.div`
    font-size: 0.7rem;
    color: #bdbdbd;
  `

  const Text = styled.div`
    margin-top: 1rem;
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
          <Headline>{frontmatter.title}</Headline>
          <Version>{frontmatter.date}</Version>
          <Text dangerouslySetInnerHTML={{ __html: html }} />
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
