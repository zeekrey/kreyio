import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { AlignJustify, Sun, Moon } from "react-feather"
import ThemeButton from "./themeButton"
import SocialIcons from "./socialIcons"

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
  color: ${({ theme }) => theme.secondary};
`

const Nav = styled.div`
  flex: 1;
  text-align: end;
`

const Menu = styled.div`
  padding-top: ${({ theme }) => theme.paddingY};
  padding-bottom: ${({ theme }) => theme.paddingY};
  padding-left: ${({ theme }) => theme.paddingX};
  padding-right: ${({ theme }) => theme.paddingX};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 4px 8px rgba(0, 0, 0, 0.04);
`

const ThemeMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.2rem;
`

const MeOn = styled.div`
  text-align: center;
  margin-top: 1.4rem;
  color: ${({ theme }) => theme.secondary};
`

const Navigation = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <Header>
        <Brand>
          <Link to="/">Christian Krey</Link>
        </Brand>
        <Nav onClick={() => setMenuIsVisible(!menuIsVisible)}>
          <AlignJustify style={{ cursor: "Pointer", color: "#BDBDBD" }} />
        </Nav>
      </Header>
      {menuIsVisible && (
        <Menu>
          <ThemeMenu>
            <ThemeButton
              icon={<Sun color="#F65058" size={48} />}
              color="#FFFFFF"
            />
            <ThemeButton
              icon={<Moon color="#FBE053" size={48} />}
              color="#2C3640"
            />
          </ThemeMenu>
          <MeOn>Me On</MeOn>
          <SocialIcons />
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
