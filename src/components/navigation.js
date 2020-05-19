import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { AlignJustify, Sun, Moon } from "react-feather"
import ThemeButton from "./themeButton"
import SocialIcons from "./socialIcons"

const Header = styled.header`
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  @media (min-width: 400px) {
    padding: ${({ theme }) => theme.paddingY} ${({ theme }) => theme.paddingX};
  }
`

const Brand = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.secondary};
  font-family: Oswald;
  font-weight: bold;
`

const Nav = styled.div`
  flex: 1;
  text-align: end;
`

const Menu = styled.div`
  transition: 1s;
  display: ${props => (props.menuIsVisible ? "inherit" : "none")};
  position: absolute;
  z-index: 10;
  width: 100%;
  background-color: ${({ theme }) => theme.body};
  padding: 1rem 1rem;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 4px 8px rgba(0, 0, 0, 0.04);
  @media (min-width: 400px) {
    padding: ${({ theme }) => theme.paddingY} ${({ theme }) => theme.paddingX};
  }
`

const ThemeMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.4rem;
  @media (min-width: 400px) {
    column-gap: 1.2rem;
  }
`

const MeOn = styled.div`
  text-align: center;
  margin-top: 1.4rem;
  color: ${({ theme }) => theme.secondary};
`

const Burger = styled.div`
  cursor: pointer;
  color: ${({ color, theme }) => color || theme.secondary};
  &:hover {
    transition: 0.2s;
    color: ${({ theme }) => theme.primary};
  }
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
          <Burger as={AlignJustify} />
        </Nav>
      </Header>
      <Menu menuIsVisible={menuIsVisible}>
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
