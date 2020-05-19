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
  @media (min-width: 400px) {
    padding-left: ${({ theme }) => theme.paddingX};
    padding-right: ${({ theme }) => theme.paddingX};
  }
`

const legalMarkdown = `
For the germans only 
# Impressum
## Verantwortlicher
Christian Krey\n
Benedekring 6\n
04159 Leipzig\n
## Kontaktmöglichkeiten
christian@krey.io
`

const LegalPage = () => (
  <>
    <SEO />
    <Body>
      <Navigation />
      <Wrapper>
        <ReactMarkdown source={legalMarkdown} />
      </Wrapper>
    </Body>
    <Footer />
  </>
)

export default LegalPage
