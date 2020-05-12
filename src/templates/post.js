import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

export default function Template({
  data,
  pageContext: { languages },
  location: { pathname },
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const isNotDefaultLanguage = languages.find(language => {
    // .find needs to return falsy value, otherwise it will exit
    return pathname.indexOf(`/${language}/`) < 0 ? false : true
  })

  return (
    <div className="blog-post-container">
      {/* This should only be displayed if there is no language key in path. */}
      {!isNotDefaultLanguage && (
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
      )}
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
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