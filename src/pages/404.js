import React from "react"
import SEO from "../components/seo"
import Body from "../components/body"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

const NotFoundPage = () => (
  <>
    <SEO />
    <Body>
      <Navigation />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Body>
    <Footer />
  </>
)

export default NotFoundPage
