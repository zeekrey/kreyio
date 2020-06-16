import React from "react"
import styled from "styled-components"
import { Twitter } from "react-feather"
import { ExternalLink } from "../components/mdx/externalLink"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  text-align: center;
  /* &::before {
    content: "";
    border-bottom: 1px solid grey;
    flex: 1;
    margin-right: 1rem;
  }
  &::after {
    content: "";
    border-bottom: 1px solid grey;
    flex: 1;
    margin-left: 1rem;
  } */
`

const SocialItem = styled.div`
  margin-top: 1.4rem;
  cursor: pointer;
  color: ${({ color, theme }) => color || theme.secondary};
  &:hover {
    transition: 0.2s;
    color: ${({ theme }) => theme.primary};
  }
`

const Feedback = () => {
  return (
    <Wrapper>
      <ExternalLink href="https://twitter.com/zeekrey_">
        <div>Any ideas or feedback? Let me know and send a tweet.</div>
        <SocialItem as={Twitter} />
      </ExternalLink>
    </Wrapper>
  )
}

export default Feedback
