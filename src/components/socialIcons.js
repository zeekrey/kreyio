import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { GitHub, Twitter, Linkedin } from "react-feather"

const SocialMenu = styled.div`
  display: flex;
  justify-content: center;
`

const SocialItem = styled.div`
  margin: 1.4rem 1.8rem;
  cursor: pointer;
  color: ${({ color, theme }) => color || theme.secondary};
  &:hover {
    transition: 0.2s;
    color: ${({ theme }) => theme.primary};
  }
`

const socialLinks = {
  github: "https://github.com/zeekrey",
  twitter: "https://twitter.com/zeekrey_",
  linkedin: "https://www.linkedin.com/in/christiankrey",
}

const SocialIcons = ({ color }) => (
  <SocialMenu>
    <a href={socialLinks.github}>
      <SocialItem as={GitHub} color={color} />
    </a>
    <a href={socialLinks.twitter}>
      <SocialItem as={Twitter} color={color} />
    </a>
    <a href={socialLinks.linkedin}>
      <SocialItem as={Linkedin} color={color} />
    </a>
  </SocialMenu>
)

SocialIcons.propTypes = {
  color: PropTypes.string,
}

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default SocialIcons
