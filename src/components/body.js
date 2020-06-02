import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../styles/globals"
import { lightTheme, darkTheme } from "../styles/theme"
import ThemeStateContext from "./themeStateContext"

const Body = ({ children }) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem("isDark")

    if (typeof themeFromLocalStorage === "string") {
      setIsDark(JSON.parse(themeFromLocalStorage))
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true)
    }
  }, [])

  return (
    <ThemeStateContext.Provider value={{ isDark, setIsDark }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeStateContext.Provider>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Body
