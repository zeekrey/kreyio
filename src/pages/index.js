import React from "react"
import Body from "../components/body"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Me from "../components/me"
import PostPreview from "../components/postPreview"

const IndexPage = () => {
  return (
    <>
      <Body>
        <Navigation />
        <Me />
        <PostPreview />
      </Body>
      <Footer />
    </>
  )
}

export default IndexPage
