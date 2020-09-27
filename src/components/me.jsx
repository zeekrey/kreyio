import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SocialIcons from "./socialIcons"
import Typewriter from "typewriter-effect"

const Wrapper = styled.div`
  padding: 3rem 3rem;
  text-align: center;
`

const Headline = styled.div`
  color: ${({ theme }) => theme.secondary};
  margin: 1rem 0rem;
  font-family: Oswald;
  font-weight: bold;
  font-size: 1.3rem;
`

const thingsILike = [
  // I like to ...
  "build companies.",
  "build software.",
  "build good things",
  "talk and discuss.",
  "wonder, why u still reading.",
]

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
      <Headline>
        Ahoy! I'm{" "}
        <Link to="/about" style={{ textDecoration: "underline" }}>
          Christian
        </Link>
        .
      </Headline>
      <div style={{ display: "inline-flex", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: ".2rem" }}>I like to</div>
          <Typewriter
            options={{
              strings: thingsILike,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <SocialIcons />
    </Wrapper>
  )
}

export default Me
