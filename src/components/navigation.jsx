import { Link } from "gatsby"
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { AlignJustify, Sun, Moon } from "react-feather"
import ThemeButton from "./themeButton"
import SocialIcons from "./socialIcons"

const Wrapper = styled.div`
  position: relative;
`

const Header = styled.header`
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  @media (min-width: 450px) {
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

const MenuWrapper = styled.div`
  display: ${props => (props.menuIsVisible ? "inherit" : "none")};
  position: absolute;
  z-index: 10;
  width: 100%;
  background-color: ${({ theme }) => theme.body};
  padding: 0rem 1rem;
  @media (min-width: 450px) {
    padding: 0rem ${({ theme }) => theme.paddingX};
  }
`

const Menu = ({ menuIsVisible, setMenuIsVisible }) => {
  const menuRef = useRef(null)

  function handleMouseClick(event) {
    if (menuIsVisible && !menuRef.current.contains(event.target))
      setMenuIsVisible(false)
  }

  useEffect(() => {
    document.addEventListener("click", handleMouseClick)

    return () => {
      document.removeEventListener("click", handleMouseClick)
    }
  }, [menuRef])

  return (
    <MenuWrapper menuIsVisible={menuIsVisible} ref={menuRef}>
      <ThemeMenu>
        <ThemeButton icon={<Sun color="#F65058" size={48} />} color="#FFFFFF" />
        <ThemeButton
          icon={<Moon color="#FBE053" size={48} />}
          color="#2C3640"
        />
      </ThemeMenu>
      <MeOn>Me On</MeOn>
      <SocialIcons />
    </MenuWrapper>
  )
}

const Navigation = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <Wrapper>
      <Header>
        <Brand>
          <Link to="/">Christian Krey</Link>
        </Brand>
        <Nav>
          <Burger
            as={AlignJustify}
            onClick={() => setMenuIsVisible(!menuIsVisible)}
          />
        </Nav>
      </Header>
      {menuIsVisible && (
        <Menu
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
      )}
    </Wrapper>
  )
}

export default Navigation
