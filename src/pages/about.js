import React from "react"
import styled from "styled-components"
import Body from "../components/body"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

const Wrapper = styled.div`
  margin-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 400px) {
    padding-left: ${({ theme }) => theme.paddingX};
    padding-right: ${({ theme }) => theme.paddingX};
  }
`

const AboutPage = () => (
  <>
    <Body>
      <Navigation />
      <Wrapper>Here goes the about stuff.</Wrapper>
    </Body>
    <Footer />
  </>
)

export default AboutPage
