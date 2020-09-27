import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { ArrowRightCircle } from "react-feather"
import { useEffect } from "react"

const Wrapper = styled.div`
  margin-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 450px) {
    padding-left: ${({ theme }) => theme.paddingX};
    padding-right: ${({ theme }) => theme.paddingX};
  }
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
  post: PropTypes.shape({
    id: PropTypes.string,
    frontmatter: PropTypes.shape({
      date: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
    excerpt: PropTypes.string,
  }),
}

PostPreview.defaultProps = {
  post: {
    id: `e665e1f8-3cdc-5ecf-aeac-87e33dba9eb6`,
    frontmatter: {
      date: `May 07, 2020`,
      slug: `/blog/my-third-post`,
      title: `My third blog post`,
    },
    excerpt: `You okay, is everything alright? Now, now, Biff, n…you? Good, you could start by sweeping the floor…`,
  },
}

export default PostPreview
