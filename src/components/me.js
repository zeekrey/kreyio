import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { ArrowRightCircle } from "react-feather"
import SocialIcons from "./socialIcons"

const Wrapper = styled.div`
  padding: 3rem 3rem;
  text-align: center;
`

const Headline = styled.div`
  color: ${({ theme }) => theme.secondary};
  margin: 1rem 0rem;
`

const SocialItem = styled.div`
  cursor: pointer;
  color: ${({ color, theme }) => color || theme.secondary};
  margin-left: 1rem;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

const Me = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fixed(width: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        style={{ borderRadius: ".5rem" }}
      />
      <Headline>Ahoy! I'm Christian.</Headline>
      <div style={{ display: "inline-flex" }}>
        <div>Devloper, Entrepreneur,...</div>
        <SocialItem as={ArrowRightCircle} />
      </div>
      <SocialIcons />
    </Wrapper>
  )
}

export default Me
