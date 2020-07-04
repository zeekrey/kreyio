import React, { useContext } from "react"
import ThemeStateContext from "./themeStateContext"
import styled from "styled-components"

const Button = styled.button`
  padding: 3rem 0rem;
  cursor: pointer;
  background-color: ${props => props.color};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 4px 8px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  border: none;
  @media (min-width: 400px) {
    padding: 4rem;
  }
`

const ThemeButton = ({ icon, color }) => {
  const { isDark, setIsDark } = useContext(ThemeStateContext)

  function toggleTheme() {
    try {
      localStorage.setItem("isDark", JSON.stringify(!isDark))
    } catch (error) {
      console.error(`Couldn't store theme settings: ${error}`)
    }
    setIsDark(!isDark)
  }

  return (
    <>
      {/* {JSON.stringify(isDark)} */}
      <Button color={color} onClick={() => toggleTheme()}>
        {icon}
      </Button>
    </>
  )
}

export default ThemeButton
