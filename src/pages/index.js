import React, { useState } from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../styles/theme"
import { GlobalStyles } from "../styles/globals"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Toggle from "../components/Toggle"
import { useDarkMode } from '../components/useDarkMode';

const IndexPage = () => {
  // const [theme, setTheme] = useState("light")
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };
  
  // The function that toggles between themes
  // const toggleTheme = () => {
  //   // if the theme is not light, then set it to dark
  //   if (theme === "light") {
  //     setTheme("dark")
  //     // otherwise, it should be light
  //   } else {
  //     setTheme("light")
  //   }
  // }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
        <footer></footer>
      </>
    </ThemeProvider>
  )
}

export default IndexPage
