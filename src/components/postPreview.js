import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { ArrowRightCircle } from "react-feather"

const Wrapper = styled.div`
  padding: 2rem 3rem;
`

const Headline = styled.div`
  color: ${({ theme }) => theme.secondary};
`

const SocialItem = styled.div`
  cursor: pointer;
  color: ${({ color, theme }) => color || theme.secondary};
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

const PostPreview = ({ title, text, link }) => {
  return (
    <Wrapper>
      <Link to={link}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: ".4rem",
          }}
        >
          <Headline>{title}</Headline>
          <SocialItem as={ArrowRightCircle} />
        </div>
        <div>{text}</div>
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
