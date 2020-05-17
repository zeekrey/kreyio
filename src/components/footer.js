import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { ThumbsDown, ThumbsUp } from "react-feather"
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

const Wrapper = styled.div`
  background-color: #f4f4f4;
  padding: 2rem 3rem;
  position: absolute;
  bottom: 0;
  width: 100%;
`

const ThumbsUpButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1.5px solid ${props => props.color};
  box-sizing: border-box;
  border-radius: 8px;
  color: #70ce6e;
  color: ${props => props.color};
  background-color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const LastRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #bdbdbd;
  padding-right: 1.8rem;
`

const Footer = () => {
  return (
    <Wrapper>
      <div>
        Where is the newsletter signup? Well, I’m not sure yet if this is
        something you people want. Do you?
      </div>
      <div
        style={{
          margin: "2.2rem 0rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "1.2rem",
        }}
      >
        <ThumbsUpButton color="#70ce6e">
          <ThumbsUp size={16} style={{ marginRight: "1rem" }} />
          <span>Sure, I would!</span>
        </ThumbsUpButton>
        <ThumbsUpButton color="#f65058">
          <ThumbsDown size={16} style={{ marginRight: "1rem" }} />
          <span>Nah!</span>
        </ThumbsUpButton>
      </div>
      <LastRow>
        <SocialIcons color="#BDBDBD" />
        <Link to="/">Legal</Link>
      </LastRow>
    </Wrapper>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Footer
