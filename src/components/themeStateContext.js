import React from "react"

const ThemeStateContext = React.createContext({
  isDark: false,
  setIsDark: () => {},
})

export default ThemeStateContext
