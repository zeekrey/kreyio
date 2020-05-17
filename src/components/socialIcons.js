import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { GitHub, Twitter, Linkedin } from "react-feather"

const SocialMenu = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ color, theme }) => color || theme.secondary};
`

const SocialItem = styled.div`
  margin: 1.4rem 1.8rem;
  cursor: pointer;
`

const SocialIcons = ({ color }) => (
  <SocialMenu color={color}>
    <SocialItem as={GitHub} />
    <SocialItem as={Twitter} />
    <SocialItem as={Linkedin} />
  </SocialMenu>
)

SocialIcons.propTypes = {
  color: PropTypes.string,
}

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default SocialIcons
