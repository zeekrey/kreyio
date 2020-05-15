import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { AlignJustify, Sun, Moon } from "react-feather"
import ThemeButton from "./themeButton"

const Header = styled.header`
  padding-top: ${({ theme }) => theme.paddingY};
  padding-bottom: ${({ theme }) => theme.paddingY};
  padding-left: ${({ theme }) => theme.paddingX};
  padding-right: ${({ theme }) => theme.paddingX};
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
`

const Brand = styled.div`
  flex: 1;
`

const Nav = styled.div`
  flex: 1;
  text-align: end;
  cursor: pointer;
`

const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.2rem;
  padding-top: ${({ theme }) => theme.paddingY};
  padding-bottom: ${({ theme }) => theme.paddingY};
  padding-left: ${({ theme }) => theme.paddingX};
  padding-right: ${({ theme }) => theme.paddingX};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 4px 8px rgba(0, 0, 0, 0.04);
`

const Navigation = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <Header>
        <Brand>Christian Krey</Brand>
        <Nav onClick={() => setMenuIsVisible(!menuIsVisible)}>
          <AlignJustify />
        </Nav>
      </Header>
      {menuIsVisible && (
        <Menu>
          <ThemeButton
            icon={<Sun color="#F65058" size={48} />}
            color="#FFFFFF"
          />
          <ThemeButton
            icon={<Moon color="#FBE053" size={48} />}
            color="#2C3640"
          />
        </Menu>
      )}
    </>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Navigation
