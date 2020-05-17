import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ThumbsDown, ThumbsUp } from "react-feather"
import SocialIcons from "./socialIcons"

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

export default Footer
