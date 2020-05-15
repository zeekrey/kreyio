import React, { useContext } from "react"
import ThemeStateContext from "./themeStateContext"

const ThemeButton = () => {
  const { isDark, setIsDark } = useContext(ThemeStateContext)

  function toggleTheme() {
    try {
      localStorage.setItem("isDark", JSON.stringify(!isDark))
      console.log(`Stored settings to local storage: isDark => ${!isDark}`)
    } catch (error) {
      console.error(`Couldn't store theme settings: ${error}`)
    }
    setIsDark(!isDark)
  }

  return (
    <>
      {JSON.stringify(isDark)}
      <button onClick={() => toggleTheme()}>huhu</button>
    </>
  )
}

export default ThemeButton
