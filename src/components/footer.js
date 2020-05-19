import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ThumbsDown, ThumbsUp } from "react-feather"
import SocialIcons from "./socialIcons"

const Wrapper = styled.div`
  background-color: #f4f4f4;
  margin-top: 2rem;
  padding: 2.2rem 1rem;
  position: absolute;
  left: 0;
  width: 100%;
  color: #bdbdbd;
  @media (min-width: 400px) {
    margin-top: 4rem;
    padding: 4rem 3rem;
  }
`

const ThumbsUpButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1.5px solid ${props => props.color};
  box-sizing: border-box;
  border-radius: 8px;
  color: ${props => props.color};
  background-color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    transition: 0.2s;
    background-color: ${props => props.color};
    color: white;
  }
`

const LastRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1.8rem;
`

const Footer = () => {
  return (
    <Wrapper>
      <div
        style={{ maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}
      >
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
          <Link to="/legal">Legal</Link>
        </LastRow>
      </div>
    </Wrapper>
  )
}

export default Footer
