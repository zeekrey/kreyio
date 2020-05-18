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
    color: ${({ theme }) => theme.primary};
  }
`

const SocialIcons = ({ color }) => (
  <SocialMenu>
    <SocialItem as={GitHub} color={color}/>
    <SocialItem as={Twitter} color={color}/>
    <SocialItem as={Linkedin} color={color}/>
  </SocialMenu>
)

SocialIcons.propTypes = {
  color: PropTypes.string,
}

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default SocialIcons
