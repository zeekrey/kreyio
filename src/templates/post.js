import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Body from "../components/body"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { CodeSnippet } from "../components/mdx/codeSnippet"

const Wrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.8rem;
  margin-bottom: 1rem;
  @media (min-width: 450px) {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 3rem;
    margin-bottom: 2rem;
  }
`

const Version = styled.div`
  font-size: 0.7rem;
  color: #bdbdbd;
  margin-top: 0.2rem;
`

const Text = styled.div`
  margin-top: 1rem;
  line-height: 1.5rem;
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
`

const StyledLink = styled(Link)`
  margin-left: 0.3rem;
  text-decoration: underline;
  &:last-child {
    margin-right: 0.3rem;
  }
`

const mdxComponents = {
  // p: props => <p {...props} style={{ color: "rebeccapurple" }} />,
  code: CodeSnippet,
}

const Headline = styled.div`
  color: ${({ theme }) => theme.secondary};
  font-family: Oswald;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 2.4rem;
`

export default function Template({
  data,
  pageContext: { languages = [] },
  location: { pathname },
}) {
  const { mdx } = data // data.markdownRemark holds your post data
  const { frontmatter, body } = mdx

  const isNotDefaultLanguage = languages.find(language => {
    // .find needs to return falsy value, otherwise it will exit
    return pathname.indexOf(`/${language}/`) < 0 ? false : true
  })

  return (
    <>
      <SEO
        title={frontmatter.title}
        article={true}
        node={{
          first_publication_date: frontmatter.date,
          last_publication_date: frontmatter.date,
        }}
      />
      <Body>
        <Navigation />
        {/* This should only be displayed if there is no language key in path. */}
        {!isNotDefaultLanguage && (
          <Banner>
            <div>
              <span>
                This article is also availbe in the following languages:
              </span>
              <span>
                {languages
                  .filter(language => language !== "en")
                  .map(language => (
                    <StyledLink
                      to={`/${language}${frontmatter.slug}`}
                      key={language}
                    >
                      {language}
                    </StyledLink>
                  ))}
              </span>
              <span>
                This blog is Open Source and I would love if you would like to
                contribute other translations. See here
                <a
                  href="https://github.com/zeekrey/kreyio"
                  style={{ textDecoration: "underline", marginLeft: "0.4rem" }}
                >
                  how to contribute
                </a>
                .
              </span>
            </div>
          </Banner>
        )}
        <Wrapper>
          <Headline>{frontmatter.title}</Headline>
          <Version>{frontmatter.date}</Version>
          <Text>
            <MDXProvider components={mdxComponents}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </Text>
        </Wrapper>
      </Body>
      <Footer />
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!, $langKey: String!) {
    mdx(frontmatter: { slug: { eq: $slug }, langKey: { eq: $langKey } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
