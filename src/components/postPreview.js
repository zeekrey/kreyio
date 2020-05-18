import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { ArrowRightCircle } from "react-feather"

const Wrapper = styled.div`
  padding: 0rem 3rem;
  margin-bottom: 2rem;
`

const Headline = styled.div`
  color: ${({ theme }) => theme.secondary};
  font-family: Oswald;
  font-weight: bold;
  font-size: 1.3rem;
`

const SocialItem = styled.div`
  cursor: pointer;
  color: ${({ color, theme }) => color || theme.secondary};
  &:hover {
    transition: 0.2s;
    color: ${({ theme }) => theme.primary};
  }
`

const PostPreview = ({ post }) => {
  return (
    <Wrapper>
      <Link to={post.frontmatter.slug}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: ".4rem",
          }}
        >
          <Headline>{post.frontmatter.title}</Headline>
          <SocialItem as={ArrowRightCircle} />
        </div>
        <div>{post.excerpt}</div>
      </Link>
    </Wrapper>
  )
}

PostPreview.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
}

PostPreview.defaultProps = {
  title: `This is the title`,
  text: `This is the body text.`,
  link: `/`,
}

export default PostPreview
