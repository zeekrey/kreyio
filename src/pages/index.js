import React from "react"
import Body from "../components/body"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import PostPreview from "../components/postPreview"

const IndexPage = () => {
  return (
    <>
      <Body>
        <Navigation />
        <PostPreview />
      </Body>
      <Footer />
    </>
  )
}

export default IndexPage
