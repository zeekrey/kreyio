import React, { useState } from "react"
import ThemeButton from "../components/themeButton"
import Body from "../components/body"
import styled from "styled-components"
import Navigation from "../components/navigation"
import Footer from "../components/Footer"

const Container = styled.div`
  width: 100%;
  background-color: green;
`

const IndexPage = () => {
  return (
    <>
      <Body>
        <Navigation />
      </Body>
      <Footer />
    </>
  )
}

export default IndexPage
