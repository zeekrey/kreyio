/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { React, useState } from "react"
import Header from "../components/Header.js"
// import useHover from "../hooks/userHover"
import Button from "../components/Button.js"
import Footer from "../components/Footer.js"
import textpattern from "../../static/textptrn.jpeg"

export default () => {
  const breakpoints = [576, 768, 992, 1200]
  const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

  //   const [hoverable, hovered] = useHover(Footer)

  return (
    <div style={{ fontFamily: "Open Sans", fontSize: "0.9rem" }}>
      <Header />
      <div
        css={css`
          text-align: center;
        `}
      >
        <div
          css={css`
            font-size: 5.6rem;
            ${[mq[0]]} {
              font-size: 8.6rem;
            }
            ${[mq[1]]} {
              font-size: 9.6rem;
            }
            ${[mq[2]]} {
              font-size: 12.6rem;
            }
            ${[mq[3]]} {
              font-size: 15.6rem;
            }
            font-family: Fugaz One, cursive;
            color: red;
            -webkit-text-fill-color: transparent;
            background: -webkit-linear-gradient(transparent, transparent),
              url(${textpattern}) center/80% no-repeat;
            background: -o-linear-gradient(transparent, transparent);
            -webkit-background-clip: text;
          `}
        >
          KREY
        </div>
        <div>
          Alllooooo, I’m Christian! Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </div>
        <Button
          css={css`
            margin-top: 1.5rem;
            ${[mq[0]]} {
              margin-top: 3rem;
            }
            ${[mq[1]]} {
              margin-top: 4rem;
            }
            ${[mq[2]]} {
              margin-top: 5rem;
            }
            ${[mq[3]]} {
              margin-top: 6rem;
            }
          `}
          href={"#"}
        >
          My Thoughts & Ideas on Medium ↠
        </Button>
      </div>
      {/* {hovered && (
        <Footer>
            
          This awesome pattern is by the terrific
          <a
            href="https://unsplash.com/@pawel_czerwinski?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
            target="_blank"
            rel="noopener noreferrer"
            title="Download free do whatever you want high-resolution photos from Paweł Czerwiński"
            css={css`
              color: black;
              margin-left: 0.15rem;
            `}
          >
            Paweł Czerwiński ↠
          </a>
        </Footer>
      )} */}
    </div>
  )
}
