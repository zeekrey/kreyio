import React from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import Body from "../components/body"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import SEO from "../components/seo"

const Wrapper = styled.div`
  margin-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 450px) {
    padding-left: ${({ theme }) => theme.paddingX};
    padding-right: ${({ theme }) => theme.paddingX};
  }
`

const aboutMeMarkdown = `
# You rock!
Thank you for signup!
`

const ThankYouPage = () => (
  <>
    <SEO />
    <Body>
      <Navigation />
      <Wrapper>
        <ReactMarkdown source={aboutMeMarkdown} />
      </Wrapper>
    </Body>
    <Footer />
  </>
)

export default ThankYouPage
