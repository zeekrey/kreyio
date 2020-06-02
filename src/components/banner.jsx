import React, { useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { ThumbsDown, ThumbsUp } from "react-feather"
import SocialIcons from "./socialIcons"

const Wrapper = styled.div`
  /* background-color: #f4f4f4; */
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  color: #bdbdbd;
  padding: 0.8rem 0rem;
  margin: 0rem 1rem;
  font-style: italic;
  border-radius: 0.3rem;
  @media (min-width: 450px) {
    padding: 2rem;
    margin: 0rem 3rem;
  }
`

const Banner = ({ children }) => {
  return (
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
  )
}

Banner.propTypes = {
  text: PropTypes.string,
}

export default Banner
