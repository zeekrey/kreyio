import React, { useEffect } from "react"
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
  margin-top: 1rem;
`

const Footer = () => {
  const signUpContainer = React.useRef(null)

  useEffect(() => {
    const script = document.createElement("script")

    script.src = "https://exciting-author-8358.ck.page/4645e143c6/index.js"
    script.async = true
    script.setAttribute("data-uid", "4645e143c6")

    signUpContainer.current.appendChild(script)

    return () => {
      signUpContainer.current.remove()
    }
  }, [])

  return (
    <Wrapper>
      <div
        style={{ maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}
      >
        <div style={{ textAlign: "center", margin: "2rem" }}>
          You like my content? Woah! If you want to, I can send you my latest blog
          posts right into your inbox.
        </div>
        <div ref={signUpContainer} />
        {/* <div
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
        </div> */}
        <LastRow>
          <SocialIcons color="#BDBDBD" />
          <Link to="/legal">Legal</Link>
        </LastRow>
      </div>
    </Wrapper>
  )
}

export default Footer
